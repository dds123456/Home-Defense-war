/**
 * 怪物系统 - 16种怪物 + AI路径移动
 * 支持单/双路径(entry 索引) 与按波次血量缩放
 */
import * as THREE from 'three';
import { toonMaterial } from './td-style.js';
import {
  createMonsterSprite,
  setMonsterSpriteMode,
  updateMonsterSprite,
  createCanvasSprite,
  setCanvasSpriteMode,
  updateCanvasSprite
} from './td-anim.js';
import { getMonsterSheet } from './td-spritegen.js';

// 怪物定义
export const MONSTER_DEFS = {
  // ===== 兽人阵营（第一章） =====
  goblin:      { name: '哥布林', hp: 70, speed: 1.8, armor: 0, magicResist: 0, reward: 10, livesCost: 1, color: '#4caf50', size: [0.25,0.5,0.25], flying: false },
  orc:         { name: '兽人小兵', hp: 90, speed: 1.5, armor: 10, magicResist: 0, reward: 12, livesCost: 1, color: '#2e7d32', size: [0.35,0.7,0.35], flying: false },
  wolfRider:   { name: '狼骑兵', hp: 220, speed: 2.0, armor: 15, magicResist: 5, reward: 45, livesCost: 2, color: '#795548', size: [0.35,0.6,0.5], flying: false },
  shadow:      { name: '暗影刺客', hp: 180, speed: 2.2, armor: 10, magicResist: 10, reward: 40, livesCost: 2, color: '#4a148c', size: [0.25,0.5,0.25], flying: false },
  gargoyle:    { name: '石像鬼', hp: 110, speed: 1.8, armor: 5, magicResist: 0, reward: 18, livesCost: 1, color: '#607d8b', size: [0.4,0.5,0.4], flying: true },
  troll:       { name: '巨魔', hp: 280, speed: 1.2, armor: 20, magicResist: 10, reward: 60, livesCost: 3, color: '#8d6e63', size: [0.45,0.9,0.45], flying: false },
  orcCaptain:  { name: '兽人队长', hp: 3000, speed: 1.0, armor: 50, magicResist: 30, reward: 300, livesCost: 10, color: '#bf360c', size: [0.5,1.0,0.5], flying: false, isBoss: true,
    bossSkill: { type: 'stunTowers', name: '震地眩晕', cooldown: 10, firstDelay: 5, warning: 1, radius: 3, duration: 2 } },
  fastGoblin:  { name: '疾风哥布林', hp: 60, speed: 4.0, armor: 0, magicResist: 0, reward: 10, livesCost: 1, color: '#66bb6a', size: [0.2,0.4,0.2], flying: false },

  // ===== 亡灵阵营（第二章） =====
  skeleton:    { name: '骷髅战士', hp: 85, speed: 1.4, armor: 5, magicResist: 0, reward: 14, livesCost: 1, color: '#e0e0e0', size: [0.3,0.6,0.3], flying: false, undead: true },
  zombie:      { name: '僵尸', hp: 120, speed: 1.2, armor: 5, magicResist: 0, reward: 12, livesCost: 1, color: '#558b2f', size: [0.3,0.6,0.3], flying: false, undead: true },
  lich:        { name: '巫妖学徒', hp: 100, speed: 1.8, armor: 0, magicResist: 30, reward: 25, livesCost: 1, color: '#1a237e', size: [0.3,0.6,0.3], flying: false, undead: true },
  stoneGolem:  { name: '石傀儡', hp: 360, speed: 0.8, armor: 40, magicResist: 15, reward: 50, livesCost: 3, color: '#9e9e9e', size: [0.5,1.0,0.5], flying: false, undead: true },
  ghost:       { name: '幽灵', hp: 95, speed: 2.2, armor: 0, magicResist: 20, reward: 20, livesCost: 1, color: '#b0bec5', size: [0.3,0.5,0.3], flying: true, undead: true },
  skeletonKing:{ name: '骷髅王', hp: 4000, speed: 1.0, armor: 50, magicResist: 30, reward: 500, livesCost: 10, color: '#b71c1c', size: [0.6,1.4,0.6], flying: false, isBoss: true, undead: true,
    bossSkill: { type: 'summon', name: '召唤骷髅', cooldown: 5, firstDelay: 3, summon: { type: 'skeleton', count: 2, hpScale: 0.8 }, maxSummons: 6 } },

  // ===== 恶魔阵营（第三章） =====
  demonImp:    { name: '恶魔小鬼', hp: 85, speed: 2.5, armor: 0, magicResist: 25, reward: 18, livesCost: 1, color: '#d32f2f', size: [0.25,0.45,0.25], flying: false },
  hellHound:   { name: '地狱犬', hp: 170, speed: 3.0, armor: 10, magicResist: 15, reward: 30, livesCost: 2, color: '#212121', size: [0.4,0.5,0.6], flying: false },
  heavyDemon:  { name: '重甲恶魔', hp: 480, speed: 1.0, armor: 50, magicResist: 25, reward: 70, livesCost: 4, color: '#b71c1c', size: [0.5,1.1,0.5], flying: false },
  wyvern:      { name: '双足飞龙', hp: 220, speed: 2.0, armor: 10, magicResist: 10, reward: 35, livesCost: 2, color: '#6a1b9a', size: [0.45,0.5,0.5], flying: true },
  hellGolem:   { name: '地狱魔像', hp: 5200, speed: 0.9, armor: 60, magicResist: 40, reward: 800, livesCost: 12, color: '#ff5722', size: [0.7,1.6,0.7], flying: false, isBoss: true,
    bossSkill: { type: 'slowTowers', name: '火焰冲击波', cooldown: 8, firstDelay: 6, warning: 2, radius: 2.5, duration: 3, slowPct: 0.5 } }
};

// 章节怪物血量缩放（PRD 3.5.3）
const CHAPTER_HP_SCALE = { 1: 1.0, 2: 1.25, 3: 1.65 };

export class MonsterManager {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game || null;
    this.monsterGroup = new THREE.Group();
    this.scene.add(this.monsterGroup);
    this.monsters = [];
    // 多路径：数组元素为 { points:[Vector3], length:number }
    this.paths = [];
    // 回调
    this.onMonsterKilled = null;
    this.onMonsterReachBase = null;
  }

  reset(paths) {
    while (this.monsterGroup.children.length > 0) this.monsterGroup.remove(this.monsterGroup.children[0]);
    this.monsters = [];
    this.paths = paths && paths.length ? paths : [];
  }

  spawnMonster(typeKey, entryIndex = 0, hpScale = 1, opts = {}) {
    const def = MONSTER_DEFS[typeKey];
    if (!def) return null;
    const path = this.paths[entryIndex] || this.paths[0];
    if (!path) return null;

    const mesh = this.buildMonsterMesh(def);
    const usesGodotSprite = typeKey === 'goblin' || typeKey === 'fastGoblin';
    const usesGeneratedSprite = !usesGodotSprite;
    if ((usesGodotSprite || usesGeneratedSprite) && mesh.userData.torsoGroup) {
      mesh.userData.torsoGroup.visible = false;
    }
    const startPoint = path.points[0].clone();
    mesh.position.copy(startPoint);
    // 怪物身高约为防御塔的一半（普通小兵约 0.55 格，BOSS 约 1.05 格）
    const targetH = def.isBoss ? 1.05 : (def.flying ? 0.5 : 0.55);
    const scale = targetH / Math.max(0.2, def.size[1]);
    mesh.scale.setScalar(scale);
    this.monsterGroup.add(mesh);

    const maxHp = Math.round(def.hp * hpScale);
    const monster = {
      id: Date.now() + Math.random(),
      type: typeKey, def, mesh,
      hp: maxHp, maxHp,
      speed: def.speed,
      pathProgress: 0,
      pathPoints: path.points,
      pathLength: path.length,
      dead: false,
      flying: def.flying || false,
      slowAmount: 0, slowDuration: 0,
      frozen: false, frozenDuration: 0,
      stunned: false, stunDuration: 0,
      armorShred: 0, armorShredDuration: 0,
      burnStacks: [],
      isSummon: opts.isSummon || false,
      entryIndex,
      hpScale,
      reward: def.reward,
      livesCost: def.livesCost || 1,
      isBoss: def.isBoss || false,
      bossSkillTimer: def.isBoss && def.bossSkill ? def.bossSkill.firstDelay : 0,
      bossWarningTimer: 0,
      lastPos: null,
      animTime: 0,
      visualScale: scale,
      spriteAnim: null,
      hpBar: null
    };

    if (usesGodotSprite) {
      const anim = createMonsterSprite(targetH, () => {
        if (mesh.userData.torsoGroup) mesh.userData.torsoGroup.visible = true;
      });
      mesh.add(anim.sprite);
      monster.spriteAnim = anim;
    } else if (usesGeneratedSprite) {
      const runSheet = getMonsterSheet(def, 'run');
      const hitSheet = getMonsterSheet(def, 'hit');
      const anim = createCanvasSprite(runSheet, hitSheet, targetH);
      mesh.add(anim.sprite);
      monster.spriteAnim = anim;
    }

    if (opts.startProgress != null) {
      monster.pathProgress = Math.max(0, Math.min(opts.startProgress, path.length - 0.1));
      monster.mesh.position.copy(this.getPositionOnPath(path.points, monster.pathProgress));
    }

    // 血条
    const hpBarGroup = this.buildHpBar(monster);
    mesh.add(hpBarGroup);
    monster.hpBar = hpBarGroup;

    this.monsters.push(monster);
    return monster;
  }

  buildMonsterMesh(def) {
    const group = new THREE.Group();
    const s = def.size;
    const mat = toonMaterial(def.color, { roughness: 0.55 });
    const limbMat = toonMaterial('#3a3f52', { roughness: 0.7 });
    const limbs = {};
    const torsoGroup = new THREE.Group();
    group.add(torsoGroup);
    group.userData.torsoGroup = torsoGroup;
    const isQuad = def.type === 'wolfRider' || def.type === 'hellHound';
    const isGhost = def.type === 'ghost';

    const pivotedBox = (w, h, d, material) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      geo.translate(0, -h / 2, 0);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      return mesh;
    };

    if (isQuad) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(s[0], s[1] * 0.5, s[2]), mat);
      body.position.y = s[1] * 0.55;
      body.castShadow = true;
      torsoGroup.add(body);
      limbs.body = body;

      const headR = s[0] * 0.45;
      const head = new THREE.Mesh(new THREE.SphereGeometry(headR, 8, 6), mat);
      head.position.set(0, s[1] * 0.78, s[2] * 0.42);
      head.castShadow = true;
      torsoGroup.add(head);
      const eyeMat = new THREE.MeshBasicMaterial({ color: def.isBoss ? '#ff4d4d' : '#ffffff' });
      for (const ex of [-1, 1]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.18, 6, 6), eyeMat);
        eye.position.set(ex * headR * 0.35, s[1] * 0.82, s[2] * 0.42 + headR * 0.7);
        torsoGroup.add(eye);
      }

      const legLen = s[1] * 0.42;
      const legs = [];
      for (const [lx, lz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        const leg = pivotedBox(s[0] * 0.22, legLen, s[2] * 0.28, limbMat);
        leg.position.set(lx * s[0] * 0.34, s[1] * 0.42, lz * s[2] * 0.32);
        torsoGroup.add(leg);
        legs.push(leg);
      }
      limbs.legs = legs;
      limbs.torso = torsoGroup;

      if (def.type === 'wolfRider') {
        const riderMat = toonMaterial('#d8b98a', { roughness: 0.5 });
        const riderTorso = new THREE.Mesh(new THREE.BoxGeometry(s[0] * 0.5, s[1] * 0.3, s[2] * 0.4), riderMat);
        riderTorso.position.set(0, s[1] * 1.02, -s[2] * 0.1);
        torsoGroup.add(riderTorso);
        const riderHead = new THREE.Mesh(new THREE.SphereGeometry(s[0] * 0.28, 8, 6), riderMat);
        riderHead.position.set(0, s[1] * 1.24, -s[2] * 0.1);
        torsoGroup.add(riderHead);
      }
    } else if (def.flying) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(s[0], s[1] * 0.42, s[2]), mat);
      body.position.y = s[1] * 0.5;
      body.castShadow = true;
      torsoGroup.add(body);
      limbs.body = body;

      const headR = s[0] * 0.4;
      const head = new THREE.Mesh(new THREE.SphereGeometry(headR, 8, 6), mat);
      head.position.set(0, s[1] * 0.72, s[2] * 0.36);
      head.castShadow = true;
      torsoGroup.add(head);

      const wingGeo = new THREE.BoxGeometry(0.06, s[1] * 0.34, s[2] * 0.75);
      wingGeo.translate(0, 0, -s[2] * 0.3);
      const wingMat = toonMaterial('#8f9bb3', { roughness: 0.6 });
      const leftWing = new THREE.Mesh(wingGeo, wingMat);
      leftWing.position.set(-s[0] * 0.58, s[1] * 0.62, 0);
      torsoGroup.add(leftWing);
      const rightWing = new THREE.Mesh(wingGeo, wingMat);
      rightWing.position.set(s[0] * 0.58, s[1] * 0.62, 0);
      torsoGroup.add(rightWing);
      limbs.leftWing = leftWing;
      limbs.rightWing = rightWing;
      limbs.torso = torsoGroup;

      if (!isGhost) {
        const legLen = s[1] * 0.24;
        const leftLeg = pivotedBox(s[0] * 0.2, legLen, s[2] * 0.3, limbMat);
        leftLeg.position.set(-s[0] * 0.3, s[1] * 0.28, 0);
        torsoGroup.add(leftLeg);
        const rightLeg = pivotedBox(s[0] * 0.2, legLen, s[2] * 0.3, limbMat);
        rightLeg.position.set(s[0] * 0.3, s[1] * 0.28, 0);
        torsoGroup.add(rightLeg);
        limbs.leftLeg = leftLeg;
        limbs.rightLeg = rightLeg;
      }
      if (isGhost) {
        const cloak = new THREE.Mesh(new THREE.ConeGeometry(s[0] * 0.7, s[1] * 0.7, 8), toonMaterial(def.color, { transparent: true, opacity: 0.85 }));
        cloak.position.y = s[1] * 0.3;
        torsoGroup.add(cloak);
      }
    } else {
      const hipY = s[1] * 0.38;
      const legLen = s[1] * 0.4;
      const torsoW = s[0] * 0.95;
      const torsoH = s[1] * 0.3;
      const shoulderY = hipY + torsoH * 0.95;
      const armLen = s[1] * 0.34;
      const headR = Math.max(0.13, s[0] * 0.4);

      const torso = new THREE.Mesh(new THREE.BoxGeometry(torsoW, torsoH, s[2] * 0.85), mat);
      torso.position.y = hipY + torsoH / 2;
      torso.castShadow = true;
      torsoGroup.add(torso);
      limbs.torso = torsoGroup;
      limbs.body = torso;

      const leftLeg = pivotedBox(torsoW * 0.22, legLen, s[2] * 0.5, limbMat);
      leftLeg.position.set(-torsoW * 0.28, hipY, 0);
      torsoGroup.add(leftLeg);
      const rightLeg = pivotedBox(torsoW * 0.22, legLen, s[2] * 0.5, limbMat);
      rightLeg.position.set(torsoW * 0.28, hipY, 0);
      torsoGroup.add(rightLeg);
      limbs.leftLeg = leftLeg;
      limbs.rightLeg = rightLeg;

      const leftArm = pivotedBox(torsoW * 0.18, armLen, s[2] * 0.42, limbMat);
      leftArm.position.set(-torsoW * 0.58, shoulderY, 0);
      torsoGroup.add(leftArm);
      const rightArm = pivotedBox(torsoW * 0.18, armLen, s[2] * 0.42, limbMat);
      rightArm.position.set(torsoW * 0.58, shoulderY, 0);
      torsoGroup.add(rightArm);
      limbs.leftArm = leftArm;
      limbs.rightArm = rightArm;

      const headY = hipY + torsoH + headR * 0.85;
      const head = new THREE.Mesh(new THREE.SphereGeometry(headR, 10, 8), mat);
      head.position.y = headY;
      head.castShadow = true;
      torsoGroup.add(head);

      const eyeMat = new THREE.MeshBasicMaterial({ color: def.isBoss ? '#ff4d4d' : '#ffffff' });
      for (const ex of [-1, 1]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.16, 6, 6), eyeMat);
        eye.position.set(ex * headR * 0.35, headY, headR * 0.82);
        torsoGroup.add(eye);
      }

      if (def.type === 'goblin' || def.type === 'fastGoblin') {
        for (const ex of [-1, 1]) {
          const ear = new THREE.Mesh(new THREE.ConeGeometry(headR * 0.22, headR * 0.8, 6), mat);
          ear.position.set(ex * headR * 0.85, headY + headR * 0.4, 0);
          ear.rotation.z = ex * 0.35;
          torsoGroup.add(ear);
        }
      }
      if (def.type === 'orc' || def.type === 'orcCaptain') {
        for (const ex of [-1, 1]) {
          const tusk = new THREE.Mesh(new THREE.ConeGeometry(headR * 0.14, headR * 0.7, 6), toonMaterial('#f5f0e0'));
          tusk.position.set(ex * headR * 0.32, headY - headR * 0.55, headR * 0.7);
          tusk.rotation.x = ex * 0.2;
          torsoGroup.add(tusk);
        }
      }
      if (def.type === 'demonImp' || def.type === 'heavyDemon' || def.type === 'hellGolem') {
        for (const ex of [-1, 1]) {
          const horn = new THREE.Mesh(new THREE.ConeGeometry(headR * 0.2, headR * 0.9, 6), toonMaterial('#ff8f5e'));
          horn.position.set(ex * headR * 0.45, headY + headR * 0.8, 0);
          horn.rotation.z = ex * 0.3;
          torsoGroup.add(horn);
        }
      }
      if (def.type === 'skeleton' || def.type === 'skeletonKing') {
        const ribMat = toonMaterial('#d9d4c8');
        for (let i = 0; i < 3; i++) {
          const rib = new THREE.Mesh(new THREE.BoxGeometry(torsoW * 0.9, 0.03, s[2] * 0.8), ribMat);
          rib.position.y = hipY + torsoH * (0.35 + i * 0.2);
          torsoGroup.add(rib);
        }
        if (def.type === 'skeletonKing') {
          const crown = new THREE.Mesh(new THREE.CylinderGeometry(headR * 0.4, headR * 0.42, headR * 0.7, 6), toonMaterial('#ffd66e', { emissive: '#ffd66e', emissiveIntensity: 0.3 }));
          crown.position.y = headY + headR * 0.75;
          torsoGroup.add(crown);
        }
      }
      if (def.type === 'shadow' || def.type === 'lich') {
        const hood = new THREE.Mesh(new THREE.ConeGeometry(headR * 1.25, headR * 2.2, 8), toonMaterial(def.type === 'lich' ? '#3b3f9e' : '#2b2050', { transparent: true, opacity: 0.9 }));
        hood.position.y = headY + headR * 0.9;
        torsoGroup.add(hood);
      }
      if (def.type === 'zombie') {
        leftArm.rotation.x = 0.5;
        rightArm.rotation.x = 0.5;
      }
      if (def.type === 'troll' || def.type === 'stoneGolem' || def.type === 'heavyDemon') {
        for (const ex of [-1, 1]) {
          const pad = new THREE.Mesh(new THREE.SphereGeometry(torsoW * 0.38, 8, 6), mat);
          pad.position.set(ex * torsoW * 0.62, shoulderY + armLen * 0.1, 0);
          torsoGroup.add(pad);
        }
      }
    }

    if (def.isBoss) {
      const aura = new THREE.Mesh(
        new THREE.RingGeometry(0.4, 0.5, 16),
        new THREE.MeshBasicMaterial({ color: '#ff5f6d', side: THREE.DoubleSide, transparent: true, opacity: 0.4 })
      );
      aura.rotation.x = -Math.PI / 2;
      aura.position.y = 0.1;
      group.add(aura);
      group.userData.aura = aura;
    }

    group.userData.limbs = limbs;
    return group;
  }

  buildHpBar(monster) {
    const group = new THREE.Group();
    const bgGeo = new THREE.PlaneGeometry(0.5, 0.06);
    const bgMat = new THREE.MeshBasicMaterial({ color: '#333333', side: THREE.DoubleSide });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    group.add(bg);

    const fillGeo = new THREE.PlaneGeometry(0.48, 0.04);
    const fillMat = new THREE.MeshBasicMaterial({ color: '#4caf50', side: THREE.DoubleSide });
    const fill = new THREE.Mesh(fillGeo, fillMat);
    fill.position.z = 0.01;
    fill.position.x = -0.01;
    group.add(fill);
    group.userData.fill = fill;
    group.userData.fillMat = fillMat;

    const h = monster.def.size[1] * (monster.mesh.scale.y || 1);
    group.position.y = h + 0.15;
    return group;
  }

  update(gameDt) {
    for (let i = this.monsters.length - 1; i >= 0; i--) {
      const m = this.monsters[i];
      if (m.dead) {
        this.monsterGroup.remove(m.mesh);
        this.monsters.splice(i, 1);
        continue;
      }

      // 状态效果
      if (m.frozen && m.frozenDuration > 0) {
        m.frozenDuration -= gameDt;
        if (m.frozenDuration <= 0) { m.frozen = false; m.frozenDuration = 0; }
      }
      if (m.stunDuration > 0) {
        m.stunDuration -= gameDt;
        if (m.stunDuration <= 0) { m.stunned = false; m.stunDuration = 0; }
      }
      if (m.armorShredDuration > 0) {
        m.armorShredDuration -= gameDt;
        if (m.armorShredDuration <= 0) { m.armorShred = 0; m.armorShredDuration = 0; }
      }
      this.updateBurn(m, gameDt);
      if (m.isBoss) this.updateBossSkill(m, gameDt);

      // 冻结/眩晕/减速
      let speed = m.speed;
      if (m.frozenDuration > 0 || m.stunDuration > 0) {
        speed = 0;
      } else if (m.slowDuration > 0) {
        m.slowDuration -= gameDt;
        speed *= (1 - m.slowAmount);
        if (m.slowDuration <= 0) m.slowAmount = 0;
      }

      // 路径移动
      m.pathProgress += speed * gameDt;

      if (m.pathProgress >= m.pathLength) {
        m.dead = true;
        if (this.onMonsterReachBase) this.onMonsterReachBase(m);
        continue;
      }

      // 插值位置
      m.mesh.position.copy(this.getPositionOnPath(m.pathPoints, m.pathProgress));
      if (m.flying) m.mesh.position.y += 0.5 + Math.sin(m.pathProgress * 2 + m.id) * 0.15;

      // 面朝行进方向（平滑转向，符合行走逻辑）
      if (m.lastPos) {
        const dx = m.mesh.position.x - m.lastPos.x;
        const dz = m.mesh.position.z - m.lastPos.z;
        if (Math.hypot(dx, dz) > 0.001) {
          const targetYaw = Math.atan2(dx, dz);
          let diff = targetYaw - m.mesh.rotation.y;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          m.mesh.rotation.y += diff * Math.min(1, 10 * gameDt);
        }
      }
      m.lastPos = m.mesh.position.clone();

      // 更新血条
      this.updateHpBar(m);
    }
  }

  updateBurn(m, dt) {
    for (let i = m.burnStacks.length - 1; i >= 0; i--) {
      const stack = m.burnStacks[i];
      stack.timer -= dt;
      stack.tick -= dt;
      if (stack.tick <= 0) {
        stack.tick = 1;
        this.damageMonster(m, stack.dps, 'magic', { silent: true });
        if (m.dead) return;
      }
      if (stack.timer <= 0) m.burnStacks.splice(i, 1);
    }
  }

  applySlow(monster, amount, duration, opts = {}) {
    if (!monster || monster.dead) return;
    // 飞行单位免疫地面减速，仅魔法类控制可减速
    if (monster.flying && !opts.magic) return;
    monster.slowAmount = Math.max(monster.slowAmount || 0, amount);
    monster.slowDuration = Math.max(monster.slowDuration || 0, duration);
  }

  applyBurn(monster, dps, duration) {
    if (!monster || monster.dead) return;
    monster.burnStacks.push({ dps, timer: duration, tick: 1 });
  }

  applyFreeze(monster, duration) {
    if (!monster || monster.dead) return;
    if (monster.isBoss) return; // BOSS 免疫冻结
    monster.frozen = true;
    monster.frozenDuration = Math.max(monster.frozenDuration || 0, duration);
    monster.slowAmount = 0;
    monster.slowDuration = 0;
  }

  applyStun(monster, duration) {
    if (!monster || monster.dead) return;
    if (monster.isBoss) return; // BOSS 免疫眩晕
    monster.stunned = true;
    monster.stunDuration = Math.max(monster.stunDuration || 0, duration);
  }

  getSummonCount() {
    return this.monsters.filter(m => m.isSummon && !m.dead).length;
  }

  updateBossSkill(m, dt) {
    const skill = m.def.bossSkill;
    if (!skill) return;

    if (m.bossWarningTimer > 0) {
      m.bossWarningTimer -= dt;
      if (m.bossWarningTimer <= 0) {
        this.executeBossSkill(m, skill);
        m.bossSkillTimer = skill.cooldown;
        if (this.game && this.game.onBossSkillEnd) this.game.onBossSkillEnd(m, skill);
      }
      return;
    }

    m.bossSkillTimer -= dt;
    if (m.bossSkillTimer <= 0) {
      if (skill.warning > 0) {
        m.bossWarningTimer = skill.warning;
        if (this.game && this.game.onBossWarning) this.game.onBossWarning(m, skill);
      } else {
        this.executeBossSkill(m, skill);
        m.bossSkillTimer = skill.cooldown;
      }
    }
  }

  executeBossSkill(m, skill) {
    if (!this.game) return;
    if (skill.type === 'stunTowers') {
      const hit = this.game.towerManager.stunTowersWithin(m.mesh.position, skill.radius, skill.duration);
      if (this.game.showMessage) this.game.showMessage(`${m.def.name} 震地！${hit} 座防御塔被眩晕`, 1800);
    } else if (skill.type === 'slowTowers') {
      const hit = this.game.towerManager.slowTowersWithin(m.mesh.position, skill.radius, skill.slowPct, skill.duration);
      if (this.game.showMessage) this.game.showMessage(`${m.def.name} 火焰冲击！${hit} 座防御塔攻速降低`, 1800);
    } else if (skill.type === 'summon') {
      const active = this.getSummonCount();
      if (active >= skill.maxSummons) return;
      const summon = skill.summon;
      for (let i = 0; i < summon.count; i++) {
        if (this.getSummonCount() >= skill.maxSummons) break;
        this.spawnMonster(summon.type, m.entryIndex, (m.hpScale || 1) * summon.hpScale, {
          isSummon: true,
          startProgress: Math.max(0, m.pathProgress - 1)
        });
      }
      if (this.game.showMessage) this.game.showMessage(`${m.def.name} 召唤了小骷髅！`, 1500);
    }
  }

  getPositionOnPath(points, progress) {
    let accumulated = 0;
    for (let i = 0; i < points.length - 1; i++) {
      const segLen = points[i].distanceTo(points[i + 1]);
      if (accumulated + segLen >= progress) {
        const t = (progress - accumulated) / segLen;
        return new THREE.Vector3().lerpVectors(points[i], points[i + 1], Math.max(0, Math.min(1, t)));
      }
      accumulated += segLen;
    }
    return points[points.length - 1].clone();
  }

  updateHpBar(m) {
    if (!m.hpBar) return;
    const ratio = m.hp / m.maxHp;
    const fill = m.hpBar.userData.fill;
    const fillMat = m.hpBar.userData.fillMat;
    fill.scale.x = Math.max(0, ratio);
    fill.position.x = -(1 - ratio) * 0.24;

    if (ratio > 0.5) fillMat.color.set('#4caf50');
    else if (ratio > 0.25) fillMat.color.set('#ff9800');
    else fillMat.color.set('#f44336');
  }

  damageMonster(monster, damage, damageType, opts = {}) {
    if (monster.dead) return;

    // 受到伤害提前解冻
    if (monster.frozenDuration > 0) {
      monster.frozen = false;
      monster.frozenDuration = 0;
    }

    let finalDmg = damage;
    if (opts.damageMult) finalDmg *= opts.damageMult;
    if (opts.undeadBonus && monster.def.undead) finalDmg *= 1 + opts.undeadBonus;

    if (damageType === 'physical') {
      const armor = Math.max(0, monster.def.armor * (1 - (opts.armorPen || 0)) * (1 - (monster.armorShred || 0)));
      finalDmg *= (1 - armor / (armor + 100));
    } else {
      const resist = Math.max(0, monster.def.magicResist * (1 - (opts.resistPen || 0)));
      finalDmg *= (1 - resist / (resist + 100));
    }

    finalDmg = Math.max(1, Math.round(finalDmg * (0.9 + Math.random() * 0.2)));
    if (!opts.silent && this.game && this.game.showDamageNumber) {
      this.game.showDamageNumber(monster, finalDmg);
      if (this.game.createHitEffect) this.game.createHitEffect(monster.mesh.position.clone(), '#ffe9b0');
      if (monster.spriteAnim) {
        if (monster.spriteAnim.sheetType === 'canvas') {
          setCanvasSpriteMode(monster.spriteAnim, 'hit', 0.35);
        } else {
          setMonsterSpriteMode(monster.spriteAnim, 'hit', 0.35);
        }
      }
    }
    monster.hp -= finalDmg;

    if (monster.hp <= 0) {
      monster.hp = 0;
      monster.dead = true;
      if (this.game && this.game.createDeathEffect) {
        this.game.createDeathEffect(monster.mesh.position.clone(), monster.def.color);
      }
      if (this.onMonsterKilled) this.onMonsterKilled(monster);
    }
  }

  removeMonster(monster) {
    monster.dead = true;
  }

  updateVisuals(dt) {
    for (const m of this.monsters) {
      if (m.dead) continue;
      if (m.spriteAnim) {
        if (m.spriteAnim.sheetType === 'canvas') updateCanvasSprite(m.spriteAnim, dt, 1);
        else updateMonsterSprite(m.spriteAnim, dt);
      }
      const limbs = m.mesh.userData.limbs;
      if (!limbs) continue;

      const paused = m.frozenDuration > 0 || m.stunDuration > 0;
      m.animTime = (m.animTime || 0) + dt * (paused ? 0 : 1);
      const t = m.animTime;
      const freq = 4 + Math.min(5, m.speed);
      const amp = paused ? 0 : Math.min(0.5, 0.12 + m.speed * 0.08);

      if (m.flying && limbs.leftWing) {
        const flap = Math.sin(t * 8) * 0.7;
        limbs.leftWing.rotation.z = flap;
        limbs.rightWing.rotation.z = -flap;
        if (limbs.torso) {
          limbs.torso.position.y = Math.sin(t * 8) * 0.06;
          limbs.torso.rotation.z = Math.sin(t * 8) * 0.08;
        }
      } else if (limbs.leftLeg && limbs.rightLeg && !limbs.legs) {
        const swing = Math.sin(t * freq) * amp;
        limbs.leftLeg.rotation.x = swing;
        limbs.rightLeg.rotation.x = -swing;
        if (limbs.leftArm) limbs.leftArm.rotation.x = -swing * 0.8;
        if (limbs.rightArm) limbs.rightArm.rotation.x = swing * 0.8;
        if (limbs.torso) {
          limbs.torso.position.y = Math.abs(Math.sin(t * freq)) * 0.04;
          limbs.torso.rotation.z = Math.sin(t * freq * 0.5) * 0.02;
        }
      } else if (limbs.legs && limbs.legs.length === 4) {
        const swing = Math.sin(t * freq) * amp;
        limbs.legs[0].rotation.x = swing;
        limbs.legs[3].rotation.x = swing;
        limbs.legs[1].rotation.x = -swing;
        limbs.legs[2].rotation.x = -swing;
        if (limbs.torso) {
          limbs.torso.position.y = Math.abs(Math.sin(t * freq)) * 0.05;
          limbs.torso.rotation.x = Math.sin(t * freq) * 0.03;
        }
      }

      if (m.frozenDuration > 0 && limbs.torso) {
        limbs.torso.position.x = Math.sin(t * 30) * 0.012;
      }
      if (m.isBoss && m.mesh.userData.aura) {
        m.mesh.userData.aura.rotation.z += dt * 2;
      }
    }
  }

  getAliveCount() {
    return this.monsters.filter(m => !m.dead).length;
  }

  getMonsterDef(typeKey) {
    return MONSTER_DEFS[typeKey];
  }
}
