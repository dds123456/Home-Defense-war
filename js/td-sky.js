/**
 * 风格化章节天空：硬切换渐变穹顶 + 硬边太阳 + 缓慢漂移卡通云
 */
import * as THREE from 'three';

function makeCloudTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 256, 96);
  const blobs = [
    [70, 50, 34],
    [128, 42, 44],
    [186, 54, 32],
    [104, 62, 38],
    [158, 64, 36]
  ];
  for (const [x, y, r] of blobs) {
    ctx.beginPath();
    ctx.arc(x, y, r + 3, 0, Math.PI * 2);
    ctx.fillStyle = '#1A1420';
    ctx.fill();
  }
  for (const [x, y, r] of blobs) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  return tex;
}

export function buildSky(theme, center) {
  const group = new THREE.Group();
  group.position.copy(center);

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(240, 24, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uTop: { value: new THREE.Color(theme.skyTop || '#3E7CB1') },
        uBottom: { value: new THREE.Color(theme.skyBottom || '#CFE8F5') },
        uAccent: { value: new THREE.Color(theme.accent || '#F2C14E') }
      },
      vertexShader: `
        varying vec3 vPos;
        void main() {
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTop;
        uniform vec3 uBottom;
        uniform vec3 uAccent;
        varying vec3 vPos;
        void main() {
          float h = normalize(vPos).y;
          vec3 col = mix(uBottom, uTop, smoothstep(0.08, 0.32, h));
          col += uAccent * (1.0 - smoothstep(0.0, 0.12, abs(h - 0.03))) * 0.30;
          gl_FragColor = vec4(col, 1.0);
        }
      `
    })
  );
  group.add(dome);

  const sun = new THREE.Mesh(
    new THREE.CircleGeometry(6.5, 28),
    new THREE.MeshBasicMaterial({ color: theme.accent || '#F2C14E', fog: false, side: THREE.DoubleSide })
  );
  sun.position.set(42, 84, -95);
  sun.lookAt(0, 0, 0);
  group.add(sun);

  const sunRing = new THREE.Mesh(
    new THREE.RingGeometry(7.4, 9.8, 40),
    new THREE.MeshBasicMaterial({ color: theme.accent || '#F2C14E', transparent: true, opacity: 0.32, fog: false, side: THREE.DoubleSide })
  );
  sunRing.position.copy(sun.position);
  sunRing.lookAt(0, 0, 0);
  group.add(sunRing);
  group.userData.sun = sun;

  const cloudTex = makeCloudTexture();
  for (let i = 0; i < 9; i++) {
    const cloud = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: cloudTex, transparent: true, opacity: 0.72, depthWrite: false, fog: false })
    );
    cloud.position.set(
      ((i * 37) % 230) - 115,
      44 + ((i * 13) % 18),
      -88 + ((i * 29) % 72)
    );
    cloud.scale.set(15 + ((i * 7) % 10), 4.6 + ((i * 5) % 4), 1);
    cloud.userData.speed = 0.018 + ((i % 4) * 0.007);
    group.add(cloud);
  }

  return group;
}

export function updateSky(sky, dt) {
  if (!sky) return;
  for (const child of sky.children) {
    if (child.isSprite && child.userData.speed) {
      child.position.x += child.userData.speed * dt;
      if (child.position.x > 130) child.position.x = -130;
    }
  }
}
