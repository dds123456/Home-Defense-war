/**
 * 风格化章节水面：硬色带 + 动感波浪 + 图形化波峰高光
 */
import * as THREE from 'three';

export function buildWater(theme, gridW, gridH) {
  const width = gridW + 10;
  const height = gridH + 10;
  const geo = new THREE.PlaneGeometry(width, height, 48, 32);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(theme.waterDeep || '#2F7FD0') },
      uShallow: { value: new THREE.Color(theme.waterShallow || '#6EE7FF') },
      uAccent: { value: new THREE.Color(theme.waterAccent || theme.accent || '#F2C14E') },
      uFoam: { value: new THREE.Color(theme.waterFoam || '#FFFFFF') }
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorld;
      varying float vWave;
      void main() {
        vec3 p = position;
        float wave = sin(p.x * 0.55 + uTime * 1.25) * 0.7
                   + sin(p.z * 0.72 + uTime * 1.05) * 0.7;
        p.y += wave * 0.055;
        vWave = wave;
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uAccent;
      uniform vec3 uFoam;
      varying vec3 vWorld;
      varying float vWave;
      void main() {
        float stripe = fract((vWorld.x + vWorld.z) * 0.42 - uTime * 0.18);
        float band = step(0.5, stripe);
        vec3 col = mix(uDeep, uShallow, band);
        float crest = step(0.82, abs(vWave) * 0.5);
        col = mix(col, uAccent, crest * 0.45);
        float foam = step(0.985, abs(vWave) * 0.5);
        col = mix(col, uFoam, foam * 0.55);
        gl_FragColor = vec4(col, 0.96);
      }
    `,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(gridW / 2, -0.16, gridH / 2);
  mesh.renderOrder = -10;
  mesh.userData.isWater = true;
  return mesh;
}

export function updateWater(water, dt) {
  if (!water || !water.material) return;
  water.material.uniforms.uTime.value += dt;
}
