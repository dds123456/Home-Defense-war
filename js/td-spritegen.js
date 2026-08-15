/**
 * 程序化 8 帧 / 64 色角色奔跑精灵表
 * 用于只有贴图/色块定义的角色，生成与 Godot 精灵表同规格的动画。
 */
import * as THREE from 'three';

const PALETTE = [
  '#10131f', '#1b2030', '#2b3045', '#3a4055', '#4a5168', '#5a6478', '#7a8496', '#a7b0c2',
  '#ffffff', '#f2ead4', '#e5c9a0', '#d9a066', '#b46b3a', '#8a4a2b', '#5c2f20', '#3a1d16',
  '#7ac74f', '#4fae3f', '#2f8a3a', '#1f6630', '#145024', '#8adf6b', '#c5f0a0',
  '#6ee7ff', '#3fb7e8', '#2f7fd0', '#1f4f9e', '#172f6a', '#b2dfff', '#7ef0ff',
  '#ffd66e', '#ffb347', '#ff8f5e', '#e85c3a', '#b8362a', '#7a1f2a', '#ff9d3c', '#ffe9b0',
  '#b28cff', '#8a5cff', '#5f3fbf', '#3b2a7a', '#d3b8ff', '#ff8fd8', '#ff5f9e', '#c13f6a',
  '#8fb1d8', '#6f7aa0', '#4a5268', '#2c3145', '#c8d8f0', '#e8f0ff',
  '#6b5b52', '#8a6a52', '#a8784f', '#c49a6c', '#e0bd8f', '#f2dcc0',
  '#5a5a5a', '#8a8a8a', '#c0c0c0', '#e0e0e0', '#e05050', '#b03050'
];

const cache = new Map();

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

export function paletteIndex(hex) {
  const rgb = hexToRgb(hex || '#8a8a8a');
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < PALETTE.length; i++) {
    const c = hexToRgb(PALETTE[i]);
    const d = (c[0] - rgb[0]) ** 2 + (c[1] - rgb[1]) ** 2 + (c[2] - rgb[2]) ** 2;
    if (d < bestDist) { bestDist = d; best = i; }
  }
  return best;
}

function px(ctx, x, y, w, h, colorIndex) {
  ctx.fillStyle = PALETTE[colorIndex];
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

function circle(ctx, x, y, r, colorIndex) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = PALETTE[colorIndex];
  ctx.fill();
}

function limb(ctx, x, y, len, angle, colorIndex) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  px(ctx, -2, 0, 4, len, colorIndex);
  ctx.restore();
}

function specForMonster(def) {
  return {
    type: def.type,
    body: def.color,
    dark: def.isBoss ? '#b03050' : '#2b3045',
    accent: def.flying ? '#8fb1d8' : '#ffd66e',
    kind: monsterKind(def),
    boss: !!def.isBoss,
    weapon: null
  };
}

function monsterKind(def) {
  if (def.type === 'wolfRider' || def.type === 'hellHound') return 'quad';
  if (def.flying) return 'fly';
  if (def.type === 'ghost' || def.type === 'shadow' || def.type === 'lich') return 'cloak';
  if (def.type === 'skeleton' || def.type === 'skeletonKing') return 'skeleton';
  if (def.type === 'troll' || def.type === 'stoneGolem' || def.type === 'heavyDemon' || def.type === 'hellGolem') return 'bulky';
  return 'humanoid';
}

export function heroSpriteSpec(index) {
  return {
    type: index === 0 ? 'ranger' : 'mage',
    body: index === 0 ? '#27ae60' : '#8e44ad',
    dark: '#2b3045',
    accent: index === 0 ? '#ffd66e' : '#b28cff',
    kind: 'hero',
    boss: false,
    weapon: index === 0 ? 'bow' : 'staff'
  };
}

function drawHumanoid(ctx, spec, phase, mode) {
  const body = paletteIndex(spec.body);
  const dark = paletteIndex(spec.dark);
  const accent = paletteIndex(spec.accent);
  const skin = paletteIndex('#e5c9a0');
  const swing = Math.sin(phase) * 0.55;
  const bob = Math.abs(Math.sin(phase)) * 3;

  ctx.save();
  ctx.translate(0, -bob);
  limb(ctx, -6, -22, 22, swing, dark);
  limb(ctx, 6, -22, 22, -swing, dark);
  limb(ctx, -15, -52, 24, -swing * 0.7, dark);
  limb(ctx, 15, -52, 24, swing * 0.7, dark);

  px(ctx, -13, -52, 26, 30, body);
  px(ctx, -8, -46, 16, 8, accent);
  circle(ctx, 0, -64, 9, spec.kind === 'hero' ? skin : body);

  if (spec.kind === 'hero') {
    px(ctx, -4, -74, 8, 8, accent);
    px(ctx, -3, -69, 2, 2, paletteIndex('#ffffff'));
    px(ctx, 1, -69, 2, 2, paletteIndex('#ffffff'));
    if (spec.weapon === 'bow') {
      ctx.save();
      ctx.translate(20, -54);
      ctx.rotate(swing * 0.2);
      ctx.strokeStyle = PALETTE[accent];
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 12, -0.9, 0.9);
      ctx.stroke();
      ctx.restore();
    } else {
      limb(ctx, 20, -54, 30, -0.25 + swing * 0.1, dark);
      circle(ctx, 24, -82, 4, accent);
    }
  } else {
    px(ctx, -3, -66, 2, 2, paletteIndex('#ffffff'));
    px(ctx, 1, -66, 2, 2, paletteIndex('#ffffff'));
  }

  if (spec.type === 'goblin' || spec.type === 'fastGoblin') {
    px(ctx, -14, -72, 4, 10, body);
    px(ctx, 10, -72, 4, 10, body);
  }
  if (spec.type === 'orc' || spec.type === 'orcCaptain') {
    px(ctx, -5, -58, 2, 6, paletteIndex('#f2ead4'));
    px(ctx, 3, -58, 2, 6, paletteIndex('#f2ead4'));
  }
  if (spec.type === 'demonImp' || spec.type === 'heavyDemon' || spec.type === 'hellGolem') {
    px(ctx, -9, -76, 4, 8, paletteIndex('#ff8f5e'));
    px(ctx, 5, -76, 4, 8, paletteIndex('#ff8f5e'));
  }
  if (spec.type === 'skeletonKing') {
    px(ctx, -6, -82, 12, 4, accent);
    px(ctx, -3, -86, 3, 5, accent);
    px(ctx, 0, -86, 3, 5, accent);
    px(ctx, 3, -86, 3, 5, accent);
  }
  if (spec.type === 'shadow' || spec.type === 'lich') {
    circle(ctx, 0, -64, 12, paletteIndex('#3a4055'));
  }
  if (mode === 'hit') {
    ctx.globalAlpha = 0.28;
    px(ctx, -16, -88, 32, 88, paletteIndex('#e05050'));
    ctx.globalAlpha = 1;
  }
  ctx.restore();
}

function drawQuad(ctx, spec, phase, mode) {
  const body = paletteIndex(spec.body);
  const dark = paletteIndex(spec.dark);
  const accent = paletteIndex(spec.accent);
  const swing = Math.sin(phase) * 0.5;

  limb(ctx, -18, -26, 18, swing, dark);
  limb(ctx, -6, -26, 18, -swing, dark);
  limb(ctx, 6, -26, 18, -swing, dark);
  limb(ctx, 18, -26, 18, swing, dark);
  px(ctx, -22, -38, 34, 18, body);
  circle(ctx, 20, -44, 9, body);
  px(ctx, 22, -46, 2, 2, paletteIndex('#ffffff'));
  px(ctx, -10, -45, 14, 3, accent);
  if (spec.type === 'wolfRider') {
    px(ctx, 4, -58, 12, 12, paletteIndex('#d9a066'));
    circle(ctx, 10, -66, 6, paletteIndex('#e5c9a0'));
  }
  if (mode === 'hit') {
    ctx.globalAlpha = 0.28;
    px(ctx, -26, -72, 48, 68, paletteIndex('#e05050'));
    ctx.globalAlpha = 1;
  }
}

function drawFly(ctx, spec, phase, mode) {
  const body = paletteIndex(spec.body);
  const dark = paletteIndex(spec.dark);
  const accent = paletteIndex(spec.accent);
  const flap = Math.sin(phase * 2) * 0.8;

  px(ctx, -16, -44, 32, 18, body);
  circle(ctx, 0, -56, 9, body);
  ctx.save();
  ctx.translate(-20, -46);
  ctx.rotate(-0.4 + flap * 0.7);
  px(ctx, -2, -20, 4, 20, accent);
  ctx.restore();
  ctx.save();
  ctx.translate(20, -46);
  ctx.rotate(0.4 - flap * 0.7);
  px(ctx, -2, -20, 4, 20, accent);
  ctx.restore();
  limb(ctx, -8, -24, 12, -0.4, dark);
  limb(ctx, 8, -24, 12, 0.4, dark);
  if (mode === 'hit') {
    ctx.globalAlpha = 0.28;
    px(ctx, -24, -72, 48, 66, paletteIndex('#e05050'));
    ctx.globalAlpha = 1;
  }
}

function drawCloak(ctx, spec, phase, mode) {
  const body = paletteIndex(spec.body);
  const dark = paletteIndex(spec.dark);
  const accent = paletteIndex(spec.accent);
  const swing = Math.sin(phase) * 0.35;

  ctx.save();
  ctx.translate(0, -bob(spec));
  limb(ctx, -8, -24, 22, swing, dark);
  limb(ctx, 8, -24, 22, -swing, dark);
  ctx.beginPath();
  ctx.moveTo(-16, -64);
  ctx.lineTo(16, -64);
  ctx.lineTo(22, 0);
  ctx.lineTo(-22, 0);
  ctx.closePath();
  ctx.fillStyle = PALETTE[body];
  ctx.fill();
  circle(ctx, 0, -66, 9, body);
  px(ctx, -5, -66, 2, 2, accent);
  px(ctx, 3, -66, 2, 2, accent);
  if (mode === 'hit') {
    ctx.globalAlpha = 0.28;
    px(ctx, -20, -72, 40, 70, paletteIndex('#e05050'));
    ctx.globalAlpha = 1;
  }
  ctx.restore();
}

function bob(spec) {
  return 0;
}

function drawSkeleton(ctx, spec, phase, mode) {
  const body = paletteIndex('#e0e0e0');
  const dark = paletteIndex(spec.dark);
  const accent = paletteIndex(spec.accent);
  const swing = Math.sin(phase) * 0.55;

  limb(ctx, -6, -22, 22, swing, dark);
  limb(ctx, 6, -22, 22, -swing, dark);
  limb(ctx, -15, -52, 24, -swing * 0.7, dark);
  limb(ctx, 15, -52, 24, swing * 0.7, dark);
  px(ctx, -13, -52, 26, 30, body);
  px(ctx, -9, -48, 18, 3, dark);
  px(ctx, -9, -42, 18, 3, dark);
  px(ctx, -9, -36, 18, 3, dark);
  circle(ctx, 0, -64, 9, body);
  px(ctx, -4, -66, 3, 3, paletteIndex('#10131f'));
  px(ctx, 1, -66, 3, 3, paletteIndex('#10131f'));
  if (spec.type === 'skeletonKing') {
    px(ctx, -6, -82, 12, 4, accent);
    px(ctx, -3, -86, 3, 5, accent);
    px(ctx, 0, -86, 3, 5, accent);
    px(ctx, 3, -86, 3, 5, accent);
  }
  if (mode === 'hit') {
    ctx.globalAlpha = 0.28;
    px(ctx, -16, -88, 32, 88, paletteIndex('#e05050'));
    ctx.globalAlpha = 1;
  }
}

function drawBulky(ctx, spec, phase, mode) {
  const body = paletteIndex(spec.body);
  const dark = paletteIndex(spec.dark);
  const accent = paletteIndex(spec.accent);
  const swing = Math.sin(phase) * 0.4;

  limb(ctx, -9, -28, 24, swing, dark);
  limb(ctx, 9, -28, 24, -swing, dark);
  limb(ctx, -20, -62, 30, -swing * 0.5, dark);
  limb(ctx, 20, -62, 30, swing * 0.5, dark);
  px(ctx, -20, -62, 40, 36, body);
  px(ctx, -14, -54, 28, 10, accent);
  circle(ctx, 0, -76, 12, body);
  px(ctx, -6, -88, 6, 10, accent);
  px(ctx, 0, -88, 6, 10, accent);
  px(ctx, -5, -78, 2, 2, paletteIndex('#ffffff'));
  px(ctx, 3, -78, 2, 2, paletteIndex('#ffffff'));
  if (mode === 'hit') {
    ctx.globalAlpha = 0.28;
    px(ctx, -24, -96, 48, 96, paletteIndex('#e05050'));
    ctx.globalAlpha = 1;
  }
}

function drawFrame(ctx, spec, frame, mode) {
  const phase = frame / 8 * Math.PI * 2;
  switch (spec.kind) {
    case 'quad': drawQuad(ctx, spec, phase, mode); break;
    case 'fly': drawFly(ctx, spec, phase, mode); break;
    case 'cloak': drawCloak(ctx, spec, phase, mode); break;
    case 'skeleton': drawSkeleton(ctx, spec, phase, mode); break;
    case 'bulky': drawBulky(ctx, spec, phase, mode); break;
    default: drawHumanoid(ctx, spec, phase, mode); break;
  }
}

export function generateCharacterSheet(spec, mode = 'run') {
  const key = `${spec.type}|${spec.body}|${mode}`;
  if (cache.has(key)) return cache.get(key);

  const cell = 96;
  const canvas = document.createElement('canvas');
  canvas.width = cell * 4;
  canvas.height = cell * 2;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  for (let f = 0; f < 8; f++) {
    const col = f % 4;
    const row = Math.floor(f / 4);
    ctx.save();
    ctx.translate(col * cell + cell / 2, row * cell + cell * 0.88);
    drawFrame(ctx, spec, f, mode);
    ctx.restore();
  }

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const rgb = [data[i], data[i + 1], data[i + 2]];
    let best = 0;
    let bestDist = Infinity;
    for (let pi = 0; pi < PALETTE.length; pi++) {
      const c = hexToRgb(PALETTE[pi]);
      const d = (c[0] - rgb[0]) ** 2 + (c[1] - rgb[1]) ** 2 + (c[2] - rgb[2]) ** 2;
      if (d < bestDist) { bestDist = d; best = pi; }
    }
    const c = hexToRgb(PALETTE[best]);
    data[i] = c[0];
    data[i + 1] = c[1];
    data[i + 2] = c[2];
  }

  const quantized = new Uint8Array(data.buffer);
  const texture = new THREE.DataTexture(quantized, canvas.width, canvas.height, THREE.RGBAFormat);
  texture.flipY = true;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  cache.set(key, { texture, cols: 4, rows: 2, frames: 8 });
  return cache.get(key);
}

export function getMonsterSheet(def, mode) {
  return generateCharacterSheet(specForMonster(def), mode);
}

export function getHeroSheet(index, mode) {
  return generateCharacterSheet(heroSpriteSpec(index), mode);
}

if (typeof window !== 'undefined') {
  window.__spritegen = {
    generateCharacterSheet,
    getMonsterSheet,
    getHeroSheet,
    heroSpriteSpec,
    specForMonster
  };
}
