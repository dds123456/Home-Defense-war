/**
 * 米哈游风风格系统：toon 渐变材质 + 全局配色
 */
import * as THREE from 'three';

let gradientTexture = null;

export function getToonGradient() {
  if (gradientTexture) return gradientTexture;
  const canvas = document.createElement('canvas');
  canvas.width = 8;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 64);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.55, '#e9e9e9');
  grad.addColorStop(1, '#8f8f8f');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 8, 64);
  gradientTexture = new THREE.CanvasTexture(canvas);
  gradientTexture.minFilter = THREE.NearestFilter;
  gradientTexture.magFilter = THREE.NearestFilter;
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
  grass: '#6fc46b',
  path: '#e0bd8f',
  dirt: '#a8784f',
  sky: '#aee3ff',
  fog: '#c9ecff',
  gold: '#ffd66e',
  cyan: '#6ee7ff',
  violet: '#b28cff',
  coral: '#ff8f8f',
  deep: '#152347',
  glass: 'rgba(18,28,54,0.82)'
};

export const CHAPTER_PALETTES = {
  1: { grass: '#6fc46b', path: '#e0bd8f', dirt: '#a8784f' },
  2: { grass: '#4f9d94', path: '#b8a8c0', dirt: '#6f6f86' },
  3: { grass: '#8a5a78', path: '#e08a5a', dirt: '#7a4638' }
};
