/**
 * 云巅世界：倒立四角山体 + 云海 + 鸟群/昆虫/落叶环境点缀
 */
import * as THREE from 'three';
import { toonMaterial } from './td-style.js';

function makeCloudTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 256, 96);
  const blobs = [
    [64, 48, 34],
    [128, 42, 44],
    [190, 52, 30],
    [96, 60, 38],
    [158, 62, 36]
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
    ctx.fillStyle = '#F4F0E8';
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  return tex;
}

export function buildMountain(theme, gridW, gridH) {
  const topSide = Math.max(gridW, gridH) + 6;
  const bottomSide = 3.5;
  const height = 8;
  const geo = new THREE.CylinderGeometry(
    topSide / Math.SQRT2,
    bottomSide / Math.SQRT2,
    height,
    4,
    4,
    false
  );
  geo.rotateY(Math.PI / 4);
  const mat = toonMaterial(theme.dirt || '#6F6F86', { roughness: 0.95 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(gridW / 2, -0.5 - height / 2, gridH / 2);
  mesh.receiveShadow = true;
  mesh.userData.isMountain = true;

  const bandMat = toonMaterial(theme.waterDeep || '#4A5168', { roughness: 0.9 });
  for (let i = 0; i < 3; i++) {
    const band = new THREE.Mesh(
      new THREE.CylinderGeometry(
        (topSide - (i + 1) * (topSide - bottomSide) / 4) / Math.SQRT2,
        (topSide - (i + 2) * (topSide - bottomSide) / 4) / Math.SQRT2,
        0.18,
        4,
        1,
        false
      ),
      bandMat
    );
    band.geometry.rotateY(Math.PI / 4);
    band.position.set(gridW / 2, -1.1 - i * 1.9, gridH / 2);
    mesh.add(band);
  }
  return mesh;
}

export function buildCloudLayer(theme, gridW, gridH) {
  const group = new THREE.Group();
  const tex = makeCloudTexture();
  for (let i = 0; i < 16; i++) {
    const cloud = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0.72 + (i % 3) * 0.08,
        depthWrite: false,
        fog: false
      })
    );
    cloud.position.set(
      -14 + ((i * 37) % (gridW + 28)),
      -2.4 - (i % 3) * 0.5,
      -12 + ((i * 53) % (gridH + 24))
    );
    cloud.scale.set(26 + (i % 4) * 8, 6 + (i % 3) * 2, 1);
    cloud.userData.speed = 0.5 + (i % 5) * 0.18;
    group.add(cloud);
  }
  return group;
}

export function updateCloudLayer(clouds, dt) {
  if (!clouds) return;
  for (const child of clouds.children) {
    if (child.isSprite && child.userData.speed) {
      child.position.x += child.userData.speed * dt;
      if (child.position.x > gridX(clouds) + 12) child.position.x = -14;
    }
  }
}

function gridX(group) {
  return group.userData.gridW || 28;
}

export function createAmbient(scene, theme, gridW, gridH) {
  const group = new THREE.Group();
  scene.add(group);
  const ambient = {
    group,
    items: [],
    timer: 1.5,
    theme,
    gridW,
    gridH,
    bounds: {
      minX: -4,
      maxX: gridW + 4,
      minZ: -4,
      maxZ: gridH + 4
    }
  };
  cloudsGroup(ambient);
  return ambient;
}

function cloudsGroup(ambient) {
  ambient.clouds = buildCloudLayer(ambient.theme, ambient.gridW, ambient.gridH);
  ambient.clouds.userData.gridW = ambient.gridW;
  ambient.group.add(ambient.clouds);
}

export function updateAmbient(ambient, dt) {
  if (!ambient) return;
  ambient.timer -= dt;
  if (ambient.timer <= 0 && ambient.items.length < 12) {
    spawnAmbientItem(ambient);
    ambient.timer = 2.5 + Math.random() * 4;
  }
  updateCloudLayer(ambient.clouds, dt);

  for (let i = ambient.items.length - 1; i >= 0; i--) {
    const item = ambient.items[i];
    item.life -= dt;
    item.elapsed += dt;
    if (item.life <= 0 || outOfBounds(item, ambient.bounds)) {
      ambient.group.remove(item.root);
      ambient.items.splice(i, 1);
      continue;
    }
    updateItem(item, dt);
  }
}

function spawnAmbientItem(ambient) {
  const roll = Math.random();
  if (roll < 0.34) spawnBirds(ambient);
  else if (roll < 0.62) spawnInsect(ambient);
  else spawnLeaves(ambient);
}

function outOfBounds(item, bounds) {
  const p = item.root.position;
  return p.x < bounds.minX - 8 || p.x > bounds.maxX + 8 ||
    p.z < bounds.minZ - 8 || p.z > bounds.maxZ + 8;
}

function spawnBirds(ambient) {
  const fromLeft = Math.random() < 0.5;
  const count = 3 + Math.floor(Math.random() * 4);
  const speed = 3.2 + Math.random() * 1.4;
  for (let i = 0; i < count; i++) {
    const root = new THREE.Group();
    const wingMat = new THREE.MeshBasicMaterial({ color: '#F4F0E8', side: THREE.DoubleSide });
    const wingGeo = new THREE.PlaneGeometry(0.46, 0.2);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.position.x = -0.2;
    leftWing.rotation.z = 0.45;
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.position.x = 0.2;
    rightWing.rotation.z = -0.45;
    root.add(leftWing);
    root.add(rightWing);
    root.position.set(
      fromLeft ? ambient.bounds.minX - 3 - i * 1.4 : ambient.bounds.maxX + 3 + i * 1.4,
      5.5 + Math.random() * 3,
      ambient.bounds.minZ + Math.random() * (ambient.bounds.maxZ - ambient.bounds.minZ)
    );
    root.userData.wings = [leftWing, rightWing];
    ambient.group.add(root);
    ambient.items.push({
      kind: 'bird',
      root,
      speed: fromLeft ? speed : -speed,
      life: 9,
      elapsed: 0,
      phase: Math.random() * 10
    });
  }
}

function spawnInsect(ambient) {
  const root = new THREE.Group();
  const accent = ambient.theme.accent || '#F2C14E';
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 6, 6),
    new THREE.MeshBasicMaterial({ color: accent })
  );
  const wingMat = new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0.7, side: THREE.DoubleSide });
  const wingGeo = new THREE.PlaneGeometry(0.12, 0.07);
  const lw = new THREE.Mesh(wingGeo, wingMat);
  lw.position.x = -0.08;
  const rw = new THREE.Mesh(wingGeo, wingMat);
  rw.position.x = 0.08;
  root.add(body, lw, rw);
  root.position.set(
    ambient.bounds.minX + 2 + Math.random() * (ambient.bounds.maxX - ambient.bounds.minX - 4),
    2 + Math.random() * 4,
    ambient.bounds.minZ + 2 + Math.random() * (ambient.bounds.maxZ - ambient.bounds.minZ - 4)
  );
  root.userData.wings = [lw, rw];
  ambient.group.add(root);
  ambient.items.push({
    kind: 'insect',
    root,
    speed: 0.6 + Math.random() * 0.6,
    life: 7,
    elapsed: 0,
    phase: Math.random() * 10,
    dir: Math.random() * Math.PI * 2
  });
}

function spawnLeaves(ambient) {
  const colors = ['#7AC74F', '#F2C14E', '#E85C3A'];
  const count = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const leaf = new THREE.Mesh(
      new THREE.PlaneGeometry(0.13 + Math.random() * 0.08, 0.2 + Math.random() * 0.1),
      new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        side: THREE.DoubleSide
      })
    );
    leaf.position.set(
      ambient.bounds.minX + 3 + Math.random() * (ambient.bounds.maxX - ambient.bounds.minX - 6),
      6 + Math.random() * 3,
      ambient.bounds.minZ + 3 + Math.random() * (ambient.bounds.maxZ - ambient.bounds.minZ - 6)
    );
    ambient.group.add(leaf);
    ambient.items.push({
      kind: 'leaf',
      root: leaf,
      speed: 0.9 + Math.random() * 0.7,
      life: 8,
      elapsed: 0,
      phase: Math.random() * 10,
      sway: 0.4 + Math.random() * 0.6
    });
  }
}

function updateItem(item, dt) {
  const t = item.elapsed;
  const p = item.root.position;
  if (item.kind === 'bird') {
    p.x += item.speed * dt;
    p.y += Math.sin(t * 2.4 + item.phase) * 0.28 * dt;
    const flap = Math.sin(t * 9) * 0.55;
    if (item.root.userData.wings) {
      item.root.userData.wings[0].rotation.z = 0.45 + flap;
      item.root.userData.wings[1].rotation.z = -0.45 - flap;
    }
    item.root.rotation.y = item.speed > 0 ? 0 : Math.PI;
  } else if (item.kind === 'insect') {
    item.dir += Math.sin(t * 3 + item.phase) * 0.8 * dt;
    p.x += Math.cos(item.dir) * item.speed * dt;
    p.z += Math.sin(item.dir) * item.speed * dt;
    p.y += Math.sin(t * 5) * 0.25 * dt;
    const wing = Math.sin(t * 40) * 0.6;
    if (item.root.userData.wings) {
      item.root.userData.wings[0].rotation.z = wing;
      item.root.userData.wings[1].rotation.z = -wing;
    }
  } else {
    p.y -= item.speed * dt;
    p.x += Math.sin(t * 2 + item.phase) * item.sway * dt;
    item.root.rotation.z += dt * 2.2;
    item.root.rotation.x += dt * 1.4;
  }
}

export function disposeAmbient(ambient) {
  if (!ambient) return;
  if (ambient.group && ambient.group.parent) ambient.group.parent.remove(ambient.group);
  ambient.items = [];
}
