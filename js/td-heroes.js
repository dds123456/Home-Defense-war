/**
 * 英雄系统 - 2英雄 + 主动技能
 */
import * as THREE from 'three';
import { toonMaterial } from './td-style.js';

const HERO_DEFS = [
  {
    id: 'ranger', name: '王国游侠', icon: '🧝',
    speed: 3.0, damage: 20, atkSpeed: 1.0, range: 2.5, damageType: 'physical',
    targetsAir: true, color: '#27ae60',
    skill: {
      name: '穿透箭', cooldown: 15, desc: '对路径上所有怪物造成100%物理伤害，对飞行单位额外50%',
      execute: (hero, game) => {
        const monsters = game.monsterManager.monsters;
        const pos = hero.mesh.position;
        let count = 0;
        for (const m of monsters) {
          if (m.dead) continue;
          if (pos.distanceTo(m.mesh.position) <= 6) {
            let dmg = hero.damage;
            if (m.flying) dmg *= 1.5;
            game.monsterManager.damageMonster(m, dmg, 'physical');
            count++;
          }
        }
        return count;
      }
    }
  },
  {
    id: 'mage', name: '宫廷法师', icon: '🧙',
    speed: 2.5, damage: 25, atkSpeed: 0.8, range: 2.5, damageType: 'magic',
    targetsAir: true, color: '#8e44ad',
    skill: {
      name: '火焰雨', cooldown: 20, desc: '对指定区域造成每秒30%魔法伤害，持续3秒，减速20%',
      execute: (hero, game) => {
        const mm = game.monsterManager;
        const monsters = mm.monsters;
        const pos = hero.mesh.position;
        let count = 0;
        for (const m of monsters) {
          if (m.dead) continue;
          if (pos.distanceTo(m.mesh.position) <= 3.5) {
            mm.damageMonster(m, hero.damage * 0.3, 'magic');
            mm.applyBurn(m, hero.damage * 0.3, 3);
            mm.applySlow(m, 0.2, 3, { magic: true });
            count++;
          }
        }
        // 视觉特效
        for (let i = 0; i < 8; i++) {
          const fx = new THREE.Mesh(
            new THREE.SphereGeometry(0.15, 4, 4),
            new THREE.MeshBasicMaterial({ color: '#ff6600', transparent: true, opacity: 0.7 })
          );
          fx.position.copy(pos).add(new THREE.Vector3(
            (Math.random() - 0.5) * 4, 2 + Math.random() * 2, (Math.random() - 0.5) * 4
          ));
          game.scene.add(fx);
          setTimeout(() => game.scene.remove(fx), 2000);
        }
        return count;
      }
    }
  }
];

export class HeroManager {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game;
    this.heroGroup = new THREE.Group();
    this.scene.add(this.heroGroup);

    this.heroes = [];
    this.activeHeroIndex = 0;
    this.moveTarget = null;
    this.path = [];
  }

  reset(spawnPos) {
    while (this.heroGroup.children.length > 0) this.heroGroup.remove(this.heroGroup.children[0]);
    this.heroes = [];
    this.moveTarget = null;
    this.path = [];

    // 王国游侠初始解锁，宫廷法师完成3003关卡解锁
    this.createHero(0, spawnPos);
    if (this.game.progress && this.game.progress.unlocked >= 3) {
      this.createHero(1, spawnPos.clone().add(new THREE.Vector3(0.8, 0, 0.8)));
    }
    this.activeHeroIndex = 0;
  }

  createHero(index, spawnPos) {
    const def = HERO_DEFS[index];
    const level = this.getHeroLevel(def.id);
    const dmgBonus = 1 + (level - 1) * 0.02;
    const speedBonus = 1 + (level - 1) * 0.01;
    const group = new THREE.Group();
    const accent = index === 0 ? '#ffd66e' : '#b28cff';
    const mat = toonMaterial(def.color, { roughness: 0.45 });
    const limbMat = toonMaterial('#4a4f68', { roughness: 0.7 });
    const limbs = {};

    const makePivot = (x, y, w, h, material, z = 0) => {
      const pivot = new THREE.Group();
      pivot.position.set(x, y, z);
      const limb = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.14), material);
      limb.position.y = -h / 2;
      limb.castShadow = true;
      pivot.add(limb);
      group.add(pivot);
      return pivot;
    };
    limbs.leftLeg = makePivot(-0.13, 0.27, 0.1, 0.34, limbMat);
    limbs.rightLeg = makePivot(0.13, 0.27, 0.1, 0.34, limbMat);
    limbs.leftArm = makePivot(-0.27, 0.84, 0.08, 0.26, limbMat);
    limbs.rightArm = makePivot(0.27, 0.84, 0.08, 0.26, limbMat);

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.62, 0.32), mat);
    body.position.y = 0.56;
    body.castShadow = true;
    group.add(body);

    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.16), toonMaterial(accent, { emissive: accent, emissiveIntensity: 0.18 }));
    chest.position.y = 0.62;
    chest.position.z = 0.02;
    group.add(chest);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 10, 8), toonMaterial('#ffe8d6'));
    head.position.y = 1.02;
    head.castShadow = true;
    group.add(head);

    const hair = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.32, 8), toonMaterial(index === 0 ? '#f2c94c' : '#a78bfa', { emissive: accent, emissiveIntensity: 0.12 }));
    hair.position.y = 1.2;
    group.add(hair);

    const eyeGeo = new THREE.SphereGeometry(0.035, 6, 6);
    const eyeMat = new THREE.MeshBasicMaterial({ color: '#4a3f8f' });
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.09, 1.05, 0.17);
    group.add(eyeL);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.09, 1.05, 0.17);
    group.add(eyeR);

    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.3, 8), toonMaterial('#5d3a1a', { roughness: 0.6 }));
    hat.position.y = 1.28;
    group.add(hat);

    if (index === 0) {
      const bow = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.035, 6, 8, Math.PI * 1.2), toonMaterial('#f2c94c', { emissive: '#ffd66e', emissiveIntensity: 0.25 }));
      bow.rotation.z = Math.PI / 2;
      bow.position.set(0.28, 0.62, 0);
      group.add(bow);
    } else {
      const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.9, 6), toonMaterial('#5d3a1a'));
      staff.position.set(0.28, 0.5, 0);
      group.add(staff);
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), new THREE.MeshBasicMaterial({ color: '#b28cff' }));
      orb.position.set(0.28, 0.95, 0);
      group.add(orb);
    }

    group.position.copy(spawnPos);
    group.position.y = 0.2;

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.32, 0.44, 20),
      new THREE.MeshBasicMaterial({ color: '#6ee7ff', side: THREE.DoubleSide, transparent: true, opacity: 0.9, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.06;
    ring.visible = false;
    group.add(ring);
    this.heroGroup.add(group);

    const hero = {
      index, id: def.id, def, mesh: group, level,
      ring,
      limbs,
      animTime: 0,
      damage: def.damage * dmgBonus,
      atkSpeed: def.atkSpeed, range: def.range,
      speed: def.speed * speedBonus,
      cooldown: 0, skillCooldown: 0,
      target: null
    };
    this.heroes.push(hero);
    return hero;
  }

  setSelected(selected) {
    this.heroSelected = selected;
    for (const h of this.heroes) {
      if (h.ring) h.ring.visible = false;
    }
    const hero = this.getActiveHero();
    if (hero && selected && hero.ring) hero.ring.visible = true;
  }

  getHeroLevel(id) {
    if (!this.game || !this.game.progress) return 1;
    const lv = this.game.progress.heroLevels && this.game.progress.heroLevels[id];
    return Math.min(30, Math.max(1, lv || 1));
  }

  getActiveHero() {
    return this.heroes[this.activeHeroIndex] || null;
  }

  cellKey(x, z) { return x + ',' + z; }

  cellFromPos(pos) { return { x: Math.floor(pos.x), z: Math.floor(pos.z) }; }

  findPath(fromPos, toPos) {
    const map = this.game.map;
    if (!map || !map.gridW) return [];
    const from = this.cellFromPos(fromPos);
    const to = this.cellFromPos(toPos);
    const blocked = new Set();
    for (const t of this.game.towerManager.towers) {
      blocked.add(this.cellKey(Math.floor(t.pos.x), Math.floor(t.pos.z)));
    }

    let goal = to;
    if (blocked.has(this.cellKey(goal.x, goal.z))) {
      let found = null;
      let bestDist = Infinity;
      for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
          const c = { x: goal.x + dx, z: goal.z + dz };
          if (c.x < 0 || c.z < 0 || c.x >= map.gridW || c.z >= map.gridH) continue;
          if (blocked.has(this.cellKey(c.x, c.z))) continue;
          const d = Math.abs(dx) + Math.abs(dz);
          if (d < bestDist) { bestDist = d; found = c; }
        }
      }
      if (found) goal = found; else return [];
    }
    if (from.x === goal.x && from.z === goal.z) return [];

    const queue = [from];
    const came = new Map();
    came.set(this.cellKey(from.x, from.z), null);
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let foundGoal = null;
    while (queue.length) {
      const cur = queue.shift();
      if (cur.x === goal.x && cur.z === goal.z) { foundGoal = cur; break; }
      for (const [dx, dz] of dirs) {
        const nx = cur.x + dx, nz = cur.z + dz;
        if (nx < 0 || nz < 0 || nx >= map.gridW || nz >= map.gridH) continue;
        const k = this.cellKey(nx, nz);
        if (blocked.has(k) || came.has(k)) continue;
        came.set(k, cur);
        queue.push({ x: nx, z: nz });
      }
    }
    if (!foundGoal) return [];

    const cells = [];
    let cur = foundGoal;
    while (cur) { cells.push(cur); cur = came.get(this.cellKey(cur.x, cur.z)); }
    cells.reverse();
    return cells.map(c => new THREE.Vector3(c.x + 0.5, 0.2, c.z + 0.5));
  }

  moveHeroTo(point) {
    const hero = this.getActiveHero();
    if (!hero) return;
    this.moveTarget = point.clone();
    this.moveTarget.y = 0.2;
    this.path = this.findPath(hero.mesh.position, this.moveTarget);
    if (this.path.length === 0) this.path = [this.moveTarget.clone()];
  }

  useHeroSkill(index) {
    const hero = this.heroes[index];
    if (!hero || hero.skillCooldown > 0) return;
    const count = hero.def.skill.execute(hero, this.game);
    hero.skillCooldown = hero.def.skill.cooldown;
    this.game.showFloatingText(`${hero.def.skill.name}!`, '#ffd700');
    if (this.game.audio) this.game.audio.play('heroSkill');
    this.game.updateHeroUI();
    return count;
  }

  update(gameDt) {
    const hero = this.getActiveHero();
    if (!hero) return;

    // 沿寻路点移动，遇塔自动绕行
    if (this.path.length > 0) {
      const target = this.path[0];
      const dir = target.clone().sub(hero.mesh.position);
      const dist = dir.length();
      if (dist > 0.1) {
        dir.normalize();
        hero.mesh.position.add(dir.multiplyScalar(hero.speed * gameDt));
        const angle = Math.atan2(dir.x, dir.z);
        hero.mesh.rotation.y += (angle - hero.mesh.rotation.y) * 5 * gameDt;
        if (dist < 0.2) this.path.shift();
      } else {
        this.path.shift();
      }
    } else if (this.moveTarget) {
      const dir = this.moveTarget.clone().sub(hero.mesh.position);
      const dist = dir.length();
      if (dist > 0.1) {
        dir.normalize();
        hero.mesh.position.add(dir.multiplyScalar(hero.speed * gameDt));
        const angle = Math.atan2(dir.x, dir.z);
        hero.mesh.rotation.y += (angle - hero.mesh.rotation.y) * 5 * gameDt;
      } else {
        this.moveTarget = null;
      }
    }

    // 自动普攻
    hero.cooldown -= gameDt;
    const monsters = this.game.monsterManager.monsters;
    if (!hero.target || hero.target.dead || hero.mesh.position.distanceTo(hero.target.mesh.position) > hero.range + 0.5) {
      hero.target = this.findClosestEnemy(hero, monsters);
    }
    if (hero.target && hero.cooldown <= 0) {
      this.game.monsterManager.damageMonster(hero.target, hero.damage, hero.def.damageType);
      hero.cooldown = 1.0 / hero.atkSpeed;
      this.createHeroProjectile(hero);
      if (this.game.audio) this.game.audio.play(hero.index === 0 ? 'shoot_arrow' : 'cast_magic');
    }

    // 技能冷却
    if (hero.skillCooldown > 0) {
      hero.skillCooldown -= gameDt;
      if (hero.skillCooldown < 0) hero.skillCooldown = 0;
      this.game.updateHeroUI();
    }
  }

  findClosestEnemy(hero, monsters) {
    let closest = null;
    let minDist = Infinity;
    for (const m of monsters) {
      if (m.dead) continue;
      if (!hero.def.targetsAir && m.flying) continue;
      const dist = hero.mesh.position.distanceTo(m.mesh.position);
      if (dist < hero.range && dist < minDist) {
        minDist = dist;
        closest = m;
      }
    }
    return closest;
  }

  createHeroProjectile(hero) {
    if (!hero.target) return;
    const geo = new THREE.SphereGeometry(0.06, 4, 4);
    const mat = new THREE.MeshBasicMaterial({ color: hero.index === 0 ? '#f1c40f' : '#9b59b6' });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(hero.mesh.position);
    mesh.position.y += 0.6;
    this.scene.add(mesh);

    const target = hero.target;
    const startPos = mesh.position.clone();
    const targetPos = target.mesh.position.clone();
    targetPos.y += 0.5;
    const speed = 15;
    let progress = 0;

    const animate = () => {
      if (target.dead) { this.scene.remove(mesh); return; }
      progress += speed * 0.016;
      mesh.position.lerpVectors(startPos, targetPos, Math.min(progress, 1));
      if (progress >= 1) { this.scene.remove(mesh); return; }
      requestAnimationFrame(animate);
    };
    animate();
  }

  updateVisuals(dt) {
    for (const hero of this.heroes) {
      hero.animTime = (hero.animTime || 0) + dt;
      const moving = !!this.moveTarget || this.path.length > 0;
      const limbs = hero.limbs;
      if (!limbs) continue;
      const t = hero.animTime;
      if (moving) {
        const swing = Math.sin(t * 9) * 0.55;
        limbs.leftLeg.rotation.x = swing;
        limbs.rightLeg.rotation.x = -swing;
        limbs.leftArm.rotation.x = -swing * 0.85;
        limbs.rightArm.rotation.x = swing * 0.85;
        hero.mesh.position.y = 0.2 + Math.abs(Math.sin(t * 9)) * 0.05;
      } else {
        limbs.leftLeg.rotation.x = 0;
        limbs.rightLeg.rotation.x = 0;
        limbs.leftArm.rotation.x = 0;
        limbs.rightArm.rotation.x = 0;
        hero.mesh.position.y = 0.2;
      }
    }
  }
}
