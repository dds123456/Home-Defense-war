/**
 * 米哈游风风格系统：toon 渐变材质 + 墨线描边 + 全局配色
 */
import * as THREE from 'three';

let gradientTexture = null;
const outlineMatCache = new Map();
const textureCache = new Map();
let matcapTexture = null;

export function loadPixelTexture(path, onReady, onError) {
  if (typeof location !== 'undefined' && location.protocol === 'file:') {
    if (onError) onError();
    return null;
  }
  if (textureCache.has(path)) {
    const cached = textureCache.get(path);
    if (onReady) onReady(cached);
    return cached;
  }
  const loader = new THREE.TextureLoader();
  const texture = loader.load(path, (tex) => {
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    textureCache.set(path, tex);
    if (onReady) onReady(tex);
  }, undefined, () => {
    textureCache.delete(path);
    if (onError) onError();
  });
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(path, texture);
  return texture;
}

export function applyTextureMap(material, path) {
  loadPixelTexture(path, (tex) => {
    if (!tex) return;
    material.map = tex;
    material.color.set('#ffffff');
    material.needsUpdate = true;
  });
}

export function getToonGradient() {
  if (gradientTexture) return gradientTexture;
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');
  const stops = ['#8497BC', '#C6D5F2', '#F2F7FF', '#FFFFFF'];
  stops.forEach((hex, i) => {
    ctx.fillStyle = hex;
    ctx.fillRect(i, 0, 1, 1);
  });
  gradientTexture = new THREE.CanvasTexture(canvas);
  gradientTexture.minFilter = THREE.NearestFilter;
  gradientTexture.magFilter = THREE.NearestFilter;
  gradientTexture.generateMipmaps = false;
  gradientTexture.colorSpace = THREE.SRGBColorSpace;
  gradientTexture.wrapS = THREE.ClampToEdgeWrapping;
  gradientTexture.wrapT = THREE.ClampToEdgeWrapping;
  return gradientTexture;
}

export function toonMaterial(color, opts = {}) {
  return new THREE.MeshToonMaterial({
    color,
    gradientMap: getToonGradient(),
    roughness: opts.roughness ?? 0.75,
    emissive: opts.emissive || '#000000',
    emissiveIntensity: opts.emissiveIntensity || 0,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    side: opts.side || THREE.FrontSide
  });
}

export const MIHOYO = {
  grass: '#5FA85F',
  path: '#e0bd8f',
  dirt: '#a8784f',
  sky: '#3E7CB1',
  fog: '#CFE8F5',
  gold: '#F2C14E',
  cyan: '#6ee7ff',
  violet: '#9B6BD6',
  coral: '#FF8F8F',
  ink: '#1A1420',
  rim: '#FFF4D6',
  deep: '#152347',
  glass: 'rgba(18,28,54,0.82)'
};

export const CHAPTER_PALETTES = {
  1: { grass: '#5FA85F', path: '#E0BD8F', dirt: '#A8784F', skyTop: '#3E7CB1', skyBottom: '#CFE8F5', accent: '#F2C14E', fog: '#CFE8F5', waterDeep: '#2F7FD0', waterShallow: '#6EE7FF', waterAccent: '#F2C14E', waterFoam: '#FFFFFF' },
  2: { grass: '#46584A', path: '#B8A8C0', dirt: '#6F6F86', skyTop: '#3A3357', skyBottom: '#1E2A22', accent: '#9B6BD6', fog: '#1E2A22', waterDeep: '#23324F', waterShallow: '#46584A', waterAccent: '#9B6BD6', waterFoam: '#D3B8FF' },
  3: { grass: '#7A3B2E', path: '#E08A5A', dirt: '#7A4638', skyTop: '#5A1E1E', skyBottom: '#E8772E', accent: '#FF5A36', fog: '#5A1E1E', waterDeep: '#7A1F2A', waterShallow: '#E85C3A', waterAccent: '#FFD66E', waterFoam: '#FF5A36' }
};

export function createOutlineMaterial(lineWidthPx = 2.4) {
  const key = String(lineWidthPx);
  if (outlineMatCache.has(key)) return outlineMatCache.get(key);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uLineWidthPx: { value: lineWidthPx },
      uViewportH: { value: window.innerHeight || 800 },
      uTanHalfFov: { value: Math.tan((50 * Math.PI / 180) / 2) },
      uOffsetMin: { value: 0.002 },
      uOffsetMax: { value: 0.06 },
      uInk: { value: new THREE.Color('#1A1420') }
    },
    vertexShader: `
      uniform float uLineWidthPx;
      uniform float uViewportH;
      uniform float uTanHalfFov;
      uniform float uOffsetMin;
      uniform float uOffsetMax;
      varying vec3 vNormal;
      void main() {
        vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
        float viewZ = max(0.01, -viewPos.z);
        float worldPerPixel = (2.0 * uTanHalfFov * viewZ) / uViewportH;
        float offset = clamp(uLineWidthPx * 0.5 * worldPerPixel, uOffsetMin, uOffsetMax);
        vec3 pushed = position + normal * offset;
        vNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pushed, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uInk;
      varying vec3 vNormal;
      void main() {
        gl_FragColor = vec4(uInk, 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: true
  });
  outlineMatCache.set(key, mat);
  return mat;
}

export function updateOutlineUniforms(fovDeg = 50, viewportH = 800) {
  for (const mat of outlineMatCache.values()) {
    mat.uniforms.uViewportH.value = viewportH;
    mat.uniforms.uTanHalfFov.value = Math.tan((fovDeg * Math.PI / 180) / 2);
  }
}

export function getMatcapTexture() {
  if (matcapTexture) return matcapTexture;
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 32);
  grad.addColorStop(0, '#FFF4D6');
  grad.addColorStop(0.42, '#A9B4D8');
  grad.addColorStop(0.72, '#5C6680');
  grad.addColorStop(1, '#2A2740');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const imageData = ctx.getImageData(0, 0, 64, 64);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 765;
    const band = lum < 0.42 ? 0.28 : lum < 0.72 ? 0.58 : 0.96;
    data[i] = data[i + 1] = data[i + 2] = Math.round(band * 255);
  }
  ctx.putImageData(imageData, 0, 0);
  matcapTexture = new THREE.CanvasTexture(canvas);
  matcapTexture.colorSpace = THREE.SRGBColorSpace;
  matcapTexture.minFilter = THREE.NearestFilter;
  matcapTexture.magFilter = THREE.NearestFilter;
  return matcapTexture;
}

export function enableRim(material) {
  if (!material || !material.isMeshToonMaterial || material.userData.rimEnabled) return;
  material.userData.rimEnabled = true;
  material.userData.rimColor = material.userData.rimColor || MIHOYO.rim;
  material.userData.rimPower = material.userData.rimPower || 3.0;
  material.userData.rimIntensity = material.userData.rimIntensity == null ? 0.22 : material.userData.rimIntensity;
  material.userData.specColor = material.userData.specColor || '#FFF4D6';
  material.userData.specIntensity = material.userData.specIntensity == null ? 0.35 : material.userData.specIntensity;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uRimColor = { value: new THREE.Color(material.userData.rimColor) };
    shader.uniforms.uRimPower = { value: material.userData.rimPower };
    shader.uniforms.uRimIntensity = { value: material.userData.rimIntensity };
    shader.uniforms.uMatcap = { value: getMatcapTexture() };
    shader.uniforms.uSpecColor = { value: new THREE.Color(material.userData.specColor) };
    shader.uniforms.uSpecIntensity = { value: material.userData.specIntensity };
    shader.uniforms.uSpecLightDir = { value: new THREE.Vector3(0.42, 0.86, 0.3).normalize() };
    shader.vertexShader = 'varying vec3 vWorldPos;\n' + shader.vertexShader.replace(
      'vViewPosition = - mvPosition.xyz;',
      'vViewPosition = - mvPosition.xyz;\n\tvWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;'
    );
    shader.fragmentShader = (
      'varying vec3 vWorldPos;\n' +
      'uniform vec3 uRimColor;\n' +
      'uniform float uRimPower;\n' +
      'uniform float uRimIntensity;\n' +
      'uniform sampler2D uMatcap;\n' +
      'uniform vec3 uSpecColor;\n' +
      'uniform float uSpecIntensity;\n' +
      'uniform vec3 uSpecLightDir;\n' +
      shader.fragmentShader
    ).replace(
      'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>',
      `vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
      vec3 rimViewDir = normalize(cameraPosition - vWorldPos);
      float rimDot = clamp(dot(normalize(vNormal), rimViewDir), 0.0, 1.0);
      float rim = pow(1.0 - rimDot, uRimPower);
      outgoingLight += uRimColor * rim * uRimIntensity;
      vec3 nprViewDir = normalize(vViewPosition);
      vec3 nprLightDir = normalize(mat3(viewMatrix) * uSpecLightDir);
      vec3 nprHalf = normalize(nprLightDir + nprViewDir);
      float ndh = clamp(dot(normalize(vNormal), nprHalf), 0.0, 1.0);
      float hardSpec = step(0.88, ndh) * 0.55 + step(0.98, ndh) * 0.45;
      vec2 nprMatUv = normalize(vNormal).xy * 0.5 + 0.5;
      float matBand = texture2D(uMatcap, nprMatUv).r;
      float matSpec = step(0.55, matBand) * 0.35;
      outgoingLight += uSpecColor * (hardSpec + matSpec) * uSpecIntensity;
      #include <opaque_fragment>`
    );
  };
  material.customProgramCacheKey = () => 'toon-rim';
}

export function addToonOutlines(root, lineWidthPx = 2.4) {
  root.traverse((obj) => {
    if (!obj.isMesh || obj.userData.isOutline || obj.userData.outlineMesh) return;
    if (obj.isSprite || obj.material && obj.material.isSpriteMaterial) return;
    if (!obj.geometry || obj.geometry.index == null && obj.geometry.attributes.position == null) return;
    if (obj.material && obj.material.isMeshToonMaterial) enableRim(obj.material);
    const geo = obj.geometry.clone();
    geo.deleteAttribute('normal');
    geo.computeVertexNormals();
    const outline = new THREE.Mesh(geo, createOutlineMaterial(lineWidthPx));
    outline.userData.isOutline = true;
    obj.userData.outlineMesh = outline;
    obj.add(outline);
  });
}
