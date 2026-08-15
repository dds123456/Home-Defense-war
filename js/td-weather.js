/**
 * 云巅天气：随机降雨 + 闪电，配 Web Audio 合成雨声与雷声
 */
import * as THREE from 'three';

const RAIN_COUNT = 170;

export function createWeather(scene) {
  const group = new THREE.Group();
  scene.add(group);

  const positions = new Float32Array(RAIN_COUNT * 2 * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color: '#b8d8ff',
    transparent: true,
    opacity: 0.55,
    depthWrite: false
  });
  const lines = new THREE.LineSegments(geo, mat);
  lines.visible = false;
  lines.frustumCulled = false;
  group.add(lines);

  const boltGeo = new THREE.BufferGeometry();
  const boltMat = new THREE.LineBasicMaterial({
    color: '#eaf6ff',
    transparent: true,
    opacity: 1,
    depthWrite: false
  });
  const bolt = new THREE.Line(boltGeo, boltMat);
  bolt.visible = false;
  bolt.frustumCulled = false;
  group.add(bolt);

  const light = new THREE.PointLight('#dcefff', 0, 40);
  light.visible = false;
  group.add(light);

  const drops = [];
  for (let i = 0; i < RAIN_COUNT; i++) {
    drops.push({
      x: 0,
      y: 0,
      z: 0,
      speed: 11 + Math.random() * 6
    });
  }

  return {
    group,
    lines,
    mat,
    positions,
    drops,
    bolt,
    boltGeo,
    boltMat,
    light,
    active: false,
    timer: 8 + Math.random() * 8,
    rainTimer: 0,
    lightningTimer: 5,
    boltLife: 0,
    thunderTimer: 0,
    hasThunder: false
  };
}

function initDrops(weather, map) {
  const minX = -2;
  const maxX = map.gridW + 2;
  const minZ = -2;
  const maxZ = map.gridH + 2;
  for (const d of weather.drops) {
    d.x = minX + Math.random() * (maxX - minX);
    d.z = minZ + Math.random() * (maxZ - minZ);
    d.y = -1 + Math.random() * 12;
  }
}

function startRain(weather, game) {
  weather.active = true;
  weather.lines.visible = true;
  weather.rainTimer = 16 + Math.random() * 10;
  weather.lightningTimer = 2.5 + Math.random() * 4;
  weather.mapW = game.map.gridW;
  weather.mapH = game.map.gridH;
  initDrops(weather, game.map);
  if (game.audio) {
    game.audio.startRainLoop();
    game.audio.play('rainStart');
  }
}

function stopRain(weather, game) {
  weather.active = false;
  weather.lines.visible = false;
  weather.bolt.visible = false;
  weather.light.visible = false;
  if (game.audio) game.audio.stopRainLoop();
}

function updateRain(weather, dt) {
  const positions = weather.positions;
  for (let i = 0; i < weather.drops.length; i++) {
    const d = weather.drops[i];
    d.y -= d.speed * dt;
    if (d.y < -1.2) {
      d.y = 10 + Math.random() * 3;
      d.x = -2 + Math.random() * (weather.mapW + 4);
      d.z = -2 + Math.random() * (weather.mapH + 4);
    }
    const o = i * 6;
    positions[o] = d.x;
    positions[o + 1] = d.y;
    positions[o + 2] = d.z;
    positions[o + 3] = d.x;
    positions[o + 4] = d.y + 0.8;
    positions[o + 5] = d.z;
  }
  weather.lines.geometry.attributes.position.needsUpdate = true;
}

function triggerLightning(weather, game) {
  const map = game.map;
  const cx = 2 + Math.random() * (map.gridW - 4);
  const cz = 2 + Math.random() * (map.gridH - 4);
  const points = [];
  const segments = 11;
  let x = cx + (Math.random() - 0.5) * 4;
  let z = cz + (Math.random() - 0.5) * 4;
  let y = 13;
  const dx = (cx - x) / segments;
  const dz = (cz - z) / segments;
  const step = 13 / segments;
  for (let i = 0; i <= segments; i++) {
    points.push(new THREE.Vector3(x, y, z));
    y -= step;
    x += dx + (Math.random() - 0.5) * (1.1 + i * 0.12);
    z += dz + (Math.random() - 0.5) * (1.1 + i * 0.12);
  }
  weather.boltGeo.dispose();
  weather.boltGeo = new THREE.BufferGeometry().setFromPoints(points);
  weather.bolt.geometry = weather.boltGeo;
  weather.bolt.visible = true;
  weather.boltLife = 0.22;
  weather.boltMat.opacity = 1;
  weather.light.position.set(cx, 7, cz);
  weather.light.visible = true;
  weather.light.intensity = 2.8;
  weather.thunderTimer = 0.55 + Math.random() * 0.9;
  weather.hasThunder = false;
  if (game.flashScreen) game.flashScreen('#eaf6ff', 0.42, 90);
}

export function updateWeather(weather, dt, game) {
  if (!weather || !game) return;
  if (!game.gameStarted || game.gameOver) {
    if (weather.active) stopRain(weather, game);
    return;
  }

  if (!weather.active) {
    weather.timer -= dt;
    if (weather.timer <= 0) {
      startRain(weather, game);
    }
  } else {
    weather.rainTimer -= dt;
    updateRain(weather, dt);
    weather.lightningTimer -= dt;
    if (weather.lightningTimer <= 0) {
      triggerLightning(weather, game);
      weather.lightningTimer = 4 + Math.random() * 7;
    }
    if (weather.rainTimer <= 0) {
      stopRain(weather, game);
      weather.timer = 26 + Math.random() * 34;
    }
  }

  weather.boltLife -= dt;
  if (weather.boltLife <= 0 && weather.bolt.visible) {
    weather.bolt.visible = false;
    weather.light.visible = false;
  } else if (weather.bolt.visible) {
    weather.boltMat.opacity = Math.max(0, weather.boltLife / 0.22);
    weather.light.intensity = Math.max(0, weather.boltLife / 0.22) * 2.8;
  }

  if (weather.thunderTimer > 0) {
    weather.thunderTimer -= dt;
    if (weather.thunderTimer <= 0 && !weather.hasThunder) {
      weather.hasThunder = true;
      if (game.audio) game.audio.play('thunder');
    }
  }
}

export function resetWeather(weather, game) {
  if (!weather) return;
  weather.active = false;
  weather.lines.visible = false;
  weather.bolt.visible = false;
  weather.light.visible = false;
  weather.timer = 8 + Math.random() * 10;
  weather.rainTimer = 0;
  weather.lightningTimer = 5;
  weather.boltLife = 0;
  weather.thunderTimer = 0;
  if (game && game.audio) game.audio.stopRainLoop();
}
