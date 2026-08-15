/**
 * Godot 精灵表动画 - 面向相机的 2D 精灵在 3D 场景中播放
 */
import * as THREE from 'three';
import { loadPixelTexture } from './td-style.js';

const MONSTER_ANIMS = {
  run: {
    path: 'textures/anim/monster_run.png',
    frames: 8,
    cols: 3,
    fps: 9
  },
  hit: {
    path: 'textures/anim/monster_hit.png',
    frames: 16,
    cols: 4,
    fps: 16
  }
};

export function createMonsterSprite(scale = 1, onError) {
  const material = new THREE.SpriteMaterial({
    map: new THREE.Texture(),
    transparent: true,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.15 * scale, 1.15 * scale, 1);
  sprite.position.y = 0.55 * scale;

  const anim = {
    sprite,
    mode: 'run',
    frame: 0,
    timer: 0,
    hitTimer: 0,
    textures: { run: null, hit: null },
    errorHandled: false
  };

  const fail = () => {
    if (anim.errorHandled) return;
    anim.errorHandled = true;
    anim.sprite.visible = false;
    if (onError) onError();
  };

  loadPixelTexture(MONSTER_ANIMS.run.path, (tex) => {
    anim.textures.run = tex;
    if (anim.mode === 'run') bindTexture(anim, tex);
  }, fail);
  loadPixelTexture(MONSTER_ANIMS.hit.path, (tex) => {
    anim.textures.hit = tex;
    if (anim.mode === 'hit') bindTexture(anim, tex);
  }, fail);

  return anim;
}

function bindTexture(anim, texture) {
  anim.sprite.material.map = texture;
  anim.sprite.material.needsUpdate = true;
  applyFrame(anim, 0);
}

function applyFrame(anim, index) {
  const def = MONSTER_ANIMS[anim.mode];
  if (!def || !anim.sprite.material.map) return;
  const rows = Math.ceil(def.frames / def.cols);
  const col = index % def.cols;
  const row = Math.floor(index / def.cols);
  const tex = anim.sprite.material.map;
  tex.repeat.set(1 / def.cols, 1 / rows);
  tex.offset.set(col / def.cols, 1 - (row + 1) / rows);
  tex.needsUpdate = true;
}

export function setMonsterSpriteMode(anim, mode, hitDuration = 0.35) {
  if (!anim) return;
  anim.mode = mode;
  anim.frame = 0;
  anim.timer = 0;
  anim.hitTimer = hitDuration;
  const tex = anim.textures[mode];
  if (tex) bindTexture(anim, tex);
}

export function updateMonsterSprite(anim, dt) {
  if (!anim) return;
  if (anim.hitTimer > 0) {
    anim.hitTimer -= dt;
    if (anim.hitTimer <= 0) {
      anim.mode = 'run';
      anim.frame = 0;
      anim.timer = 0;
      if (anim.textures.run) bindTexture(anim, anim.textures.run);
    }
  }

  const def = MONSTER_ANIMS[anim.mode];
  if (!def || !anim.sprite.material.map) return;
  anim.timer += dt;
  const next = Math.floor(anim.timer * def.fps) % def.frames;
  if (next !== anim.frame) {
    anim.frame = next;
    applyFrame(anim, next);
  }
}
