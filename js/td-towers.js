/**
 * 防御塔系统 - 4种塔×3级
 */
import * as THREE from 'three';
import { toonMaterial, addToonOutlines } from './td-style.js';

// 塔配置
const TOWER_DEFS = {
  arrow: {
    name: '箭塔', icon: '🏹',
    levels: [
      { cost: 50, damage: 15, atkSpeed: 1.2, range: 3.0, charge: 0.2, pierce: 0, multi: 1, color: '#4a9e4a', desc: '基础物理塔，可攻击飞行' },
      { cost: 50, damage: 21, atkSpeed: 1.32, range: 3.5, charge: 0.2, pierce: 1, multi: 1, color: '#5cb85c', desc: '箭矢穿透1个目标，伤害提升' },
      { cost: 100, damage: 27, atkSpeed: 1.44, range: 4.0, charge: 0.2, pierce: 1, multi: 2, color: '#6fd96f', desc: '多重射击，同时攻击2个目标' }
    ],
    damageType: 'physical', targetsAir: true
  },
  magic: {
    name: '魔法塔', icon: '🔮',
    levels: [
      { cost: 80, damage: 25, atkSpeed: 0.8, range: 2.5, charge: 0.3, resistPen: 0.2, undeadBonus: 0.2, splashRadius: 0, splashDamage: 0, slowPct: 0, color: '#9b59b6', desc: '魔法伤害，无视20%抗性，对亡灵+20%' },
      { cost: 80, damage: 35, atkSpeed: 0.88, range: 3.0, charge: 0.3, resistPen: 0.2, undeadBonus: 0.2, splashRadius: 0.5, splashDamage: 0.5, slowPct: 0, color: '#af7ac5', desc: '溅射伤害，0.5格范围' },
      { cost: 160, damage: 45, atkSpeed: 0.96, range: 3.5, charge: 0.3, resistPen: 0.2, undeadBonus: 0.2, splashRadius: 0.5, splashDamage: 0.5, slowPct: 0.15, color: '#c39bd3', desc: '范围魔法爆发，命中减速15%持续2秒' }
    ],
    damageType: 'magic', targetsAir: true
  },
  cannon: {
    name: '炮塔', icon: '💣',
    levels: [
      { cost: 100, damage: 40, atkSpeed: 0.5, range: 2.5, charge: 0.4, aoe: 0.8, armorShred: 0, burnDps: 0, color: '#e74c3c', desc: 'AOE范围伤害，仅地面' },
      { cost: 100, damage: 56, atkSpeed: 0.55, range: 3.0, charge: 0.4, aoe: 0.8, armorShred: 0.3, burnDps: 0, color: '#ec7063', desc: '破甲，目标护甲-30%持续3秒' },
      { cost: 200, damage: 72, atkSpeed: 0.6, range: 3.5, charge: 0.4, aoe: 0.8, armorShred: 0.3, burnDps: 8, color: '#f1948a', desc: '熔岩炮弹，灼烧8点/秒持续3秒' }
    ],
    damageType: 'physical', targetsAir: false, aoe: 0.8
  },
  ice: {
    name: '冰霜塔', icon: '❄️',
    levels: [
      { cost: 60, damage: 8, atkSpeed: 1.0, range: 2.0, charge: 0.15, slowPct: 0.3, freezeChance: 0, freezePulse: false, color: '#3498db', desc: '减速30%，控制辅助' },
      { cost: 60, damage: 11, atkSpeed: 1.1, range: 2.5, charge: 0.15, slowPct: 0.45, freezeChance: 0.1, freezePulse: false, color: '#5dade2', desc: '减速45%，10%冻结1秒' },
      { cost: 120, damage: 14, atkSpeed: 1.2, range: 3.0, charge: 0.15, slowPct: 0.45, freezeChance: 0, freezePulse: true, color: '#85c1e9', desc: '范围冰冻，每4秒冻结范围内地面怪物1秒' }
    ],
    damageType: 'magic', targetsAir: false
  }
};

export class TowerManager {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game;
    this.towerGroup = new THREE.Group();
    this.scene.add(this.towerGroup);
    this.projectileGroup = new THREE.Group();
    this.scene.add(this.projectileGroup);

    this.towers = [];
    this.projectiles = [];
    this.selectedTower = null;
    this.towerDefs = TOWER_DEFS;
  }

  reset() {
    while (this.towerGroup.children.length > 0) this.towerGroup.remove(this.towerGroup.children[0]);
    while (this.projectileGroup.children.length > 0) this.projectileGroup.remove(this.projectileGroup.children[0]);
    this.towers = [];
    this.projectiles = [];
    this.selectedTower = null;
  }

  getTowerAtCell(x, z) {
    return this.towers.find(t => t.cell && t.cell.x === x && t.cell.z === z) || null;
  }

  getTowerDef(type) {
    return TOWER_DEFS[type];
  }

  selectTower(cell) {
    this.selectedTower = this.getTowerAtCell(cell.x, cell.z);
    return this.selectedTower;
  }

  deselectTower() {
    this.selectedTower = null;
  }

  canPlaceTower(cell, type) {
    if (!cell) return false;
    if (this.getTowerAtCell(cell.x, cell.z)) return false;
    const def = TOWER_DEFS[type];
    if (!def) return false;
    if (!this.game.map.isPlaceableCell(cell.x, cell.z)) return false;
    return this.game.gold >= def.levels[0].cost;
  }

  placeTower(cell, type) {
    if (!this.canPlaceTower(cell, type)) return false;
    const def = TOWER_DEFS[type];
    const cost = def.levels[0].cost;
    if (!this.game.spendGold(cost)) return false;

    const pos = this.game.map.getCellCenterWorld(cell.x, cell.z);
    const mesh = this.buildTowerMesh(type, 1, pos);
    this.towerGroup.add(mesh);

    this.towers.push({
      cell: { x: cell.x, z: cell.z }, type, level: 1, mesh, pos,
      cooldown: 0, chargeTimer: 0, target: null,
      stunDuration: 0, atkSpeedMul: 1, atkSpeedMulTimer: 0,
      freezePulseTimer: 4, expiry: 0,
      totalInvested: cost
    });

    return true;
  }

  addTemporaryTower(type, cell, level = 2, duration = 15) {
    const def = TOWER_DEFS[type];
    if (!def || this.getTowerAtCell(cell.x, cell.z)) return null;
    const pos = this.game.map.getCellCenterWorld(cell.x, cell.z);
    const mesh = this.buildTowerMesh(type, level, pos);
    this.towerGroup.add(mesh);
    const tower = {
      cell: { x: cell.x, z: cell.z },
      type, level, mesh, pos: pos.clone(),
      cooldown: 0, chargeTimer: 0, target: null,
      stunDuration: 0, atkSpeedMul: 1, atkSpeedMulTimer: 0,
      freezePulseTimer: 4, expiry: duration,
      totalInvested: 0, temporary: true
    };
    this.towers.push(tower);
    return tower;
  }

  upgradeTower(cell) {
    const tower = this.getTowerAtCell(cell.x, cell.z);
    if (!tower || tower.level >= 3) return false;

    const def = TOWER_DEFS[tower.type];
    const cost = def.levels[tower.level].cost;
    if (!this.game.spendGold(cost)) return false;

    tower.level++;
    tower.totalInvested += cost;

    this.towerGroup.remove(tower.mesh);
    const newMesh = this.buildTowerMesh(tower.type, tower.level, tower.pos);
    this.towerGroup.add(newMesh);
    tower.mesh = newMesh;

    this.selectedTower = tower;
    return true;
  }

  sellTower(cell) {
    const tower = this.getTowerAtCell(cell.x, cell.z);
    if (!tower) return false;

    const refund = Math.floor(tower.totalInvested * 0.7);
    this.game.addGold(refund);
    this.towerGroup.remove(tower.mesh);
    this.towers = this.towers.filter(t => t !== tower);
    if (this.selectedTower === tower) this.selectedTower = null;
    return true;
  }

  buildTowerMesh(type, level, pos) {
    const def = TOWER_DEFS[type];
    const lvl = def.levels[level - 1];
    const group = new THREE.Group();
    const accent = { arrow: '#ffd66e', magic: '#b28cff', cannon: '#ff8f5e', ice: '#6ee7ff' }[type] || '#ffffff';
    const bodyColor = { arrow: '#3f9e54', magic: '#7a5cff', cannon: '#e05c3a', ice: '#3fb7e8' }[type] || lvl.color;

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.28, 10), toonMaterial('#cfd4e8', { roughness: 0.8 }));
    base.position.y = 0.14;
    base.castShadow = true;
    group.add(base);

    const height = 0.55 + level * 0.18;
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.34, height, 10),
      toonMaterial(bodyColor, { roughness: 0.5, emissive: accent, emissiveIntensity: 0.12 })
    );
    body.position.y = 0.28 + height / 2;
    body.castShadow = true;
    group.add(body);

    const top = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), new THREE.MeshBasicMaterial({ color: accent }));
    top.position.y = 0.28 + height + 0.1;
    group.add(top);

    if (type === 'arrow') {
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.42, 8), toonMaterial('#ffd66e', { emissive: '#ffd66e', emissiveIntensity: 0.35 }));
      tip.position.y = 0.28 + height + 0.42;
      tip.castShadow = true;
      group.add(tip);
    } else if (type === 'magic') {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.045, 8, 12), toonMaterial(accent, { emissive: accent, emissiveIntensity: 0.5 }));
      ring.rotation.x = Math.PI / 2.6;
      ring.position.y = 0.28 + height + 0.25;
      group.add(ring);
    } else if (type === 'cannon') {
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.75, 8), toonMaterial('#3a3f52'));
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.28 + height + 0.2, 0.28);
      group.add(barrel);
    } else if (type === 'ice') {
      const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), toonMaterial('#6ee7ff', { emissive: '#6ee7ff', emissiveIntensity: 0.5 }));
      shard.position.y = 0.28 + height + 0.35;
      shard.castShadow = true;
      group.add(shard);
    }

    if (level >= 2) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.05, 8, 12), toonMaterial('#ffd66e', { emissive: '#ffd66e', emissiveIntensity: 0.35 }));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.28 + height / 2;
      group.add(ring);
    }
    if (level >= 3) {
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.04, 8, 12), new THREE.MeshBasicMaterial({ color: '#ff7a7a' }));
      ring2.rotation.x = Math.PI / 2;
      ring2.position.y = 0.28 + height + 0.05;
      group.add(ring2);
    }

    group.position.copy(pos);
    group.userData = { towerType: type, towerLevel: level };
    addToonOutlines(group, 2.4);
    return group;
  }

  update(gameDt) {
    const monsters = this.game.monsterManager.monsters;

    for (let i = this.towers.length - 1; i >= 0; i--) {
      const tower = this.towers[i];
      const def = TOWER_DEFS[tower.type];
      const lvl = def.levels[tower.level - 1];

      if (tower.expiry > 0) {
        tower.expiry -= gameDt;
        if (tower.expiry <= 0) {
          this.towerGroup.remove(tower.mesh);
          this.towers.splice(i, 1);
          continue;
        }
      }

      // 眩晕期间暂停攻速计时与蓄力
      if (tower.stunDuration > 0) {
        tower.stunDuration -= gameDt;
        continue;
      }
      if (tower.atkSpeedMulTimer > 0) {
        tower.atkSpeedMulTimer -= gameDt;
        if (tower.atkSpeedMulTimer <= 0) tower.atkSpeedMul = 1;
      }

      tower.cooldown -= gameDt;
      tower.chargeTimer -= gameDt;

      if (!tower.target || tower.target.dead || !this.isInRange(tower, tower.target, lvl.range)) {
        tower.target = this.findTarget(tower, monsters, def, lvl.range);
      }

      // 冰霜塔3级：每4秒冻结范围内所有地面怪物
      if (tower.type === 'ice' && lvl.freezePulse) {
        tower.freezePulseTimer -= gameDt;
        if (tower.freezePulseTimer <= 0) {
          tower.freezePulseTimer = 4;
          for (const m of monsters) {
            if (m.dead || m.flying) continue;
            if (tower.pos.distanceTo(m.mesh.position) <= lvl.range + 0.3) {
              this.game.monsterManager.applyFreeze(m, 1);
            }
          }
        }
      }

      if (tower.target && tower.cooldown <= 0 && tower.chargeTimer <= 0) {
        this.attack(tower, tower.target, def, lvl);
        tower.cooldown = 1.0 / (lvl.atkSpeed * tower.atkSpeedMul);
        tower.chargeTimer = lvl.charge || 0;
      }
    }

    this.updateProjectiles(gameDt);
  }

  findTarget(tower, monsters, def, range) {
    let best = null;
    let bestDensity = -1;
    for (const m of monsters) {
      if (m.dead) continue;
      if (!def.targetsAir && m.flying) continue;
      const dist = tower.pos.distanceTo(m.mesh.position);
      if (dist > range) continue;

      if (!best) { best = m; continue; }

      switch (tower.type) {
        case 'arrow':
        case 'ice':
          if (m.pathProgress > best.pathProgress) best = m;
          break;
        case 'magic':
          if (m.hp > best.hp) best = m;
          break;
        case 'cannon': {
          let density = 0;
          for (const other of monsters) {
            if (other.dead || other.flying) continue;
            if (m.mesh.position.distanceTo(other.mesh.position) <= 1.2) density++;
          }
          if (density > bestDensity) { best = m; bestDensity = density; }
          break;
        }
      }
    }
    return best;
  }

  findTopTargets(monsters, def, range, count, tower) {
    const inRange = [];
    for (const m of monsters) {
      if (m.dead) continue;
      if (!def.targetsAir && m.flying) continue;
      if (tower.pos.distanceTo(m.mesh.position) > range + 0.3) continue;
      inRange.push(m);
    }
    inRange.sort((a, b) => b.pathProgress - a.pathProgress);
    return inRange.slice(0, count);
  }

  isInRange(tower, target, range) {
    return tower.pos.distanceTo(target.mesh.position) <= range + 0.3;
  }

  attack(tower, target, def, lvl) {
    const monsters = this.game.monsterManager.monsters;
    const flashColor = { arrow: '#ffd66e', magic: '#b28cff', cannon: '#ff8f5e', ice: '#6ee7ff' }[tower.type] || '#ffffff';
    if (this.game && this.game.createMuzzleFlash) {
      this.game.createMuzzleFlash(tower.pos.clone().setY(0.7), flashColor);
    }
    if (tower.type === 'arrow' && lvl.multi > 1) {
      const targets = this.findTopTargets(monsters, def, lvl.range, lvl.multi, tower);
      for (const t of targets) this.createProjectile(tower.pos.clone(), t, tower.type, lvl.damage, 0, lvl, def);
      return;
    }
    if (tower.type === 'cannon') {
      this.createProjectile(tower.pos.clone(), target, tower.type, lvl.damage, def.aoe || 0.8, lvl, def);
      return;
    }
    this.createProjectile(tower.pos.clone(), target, tower.type, lvl.damage, 0, lvl, def);
  }

  createProjectile(from, target, type, damage, aoe, lvl, def) {
    let mesh = null;
    if (type === 'ice') {
      if (this.game && this.game.createInstantCastEffect) {
        this.game.createInstantCastEffect(target.mesh.position.clone().setY(0.5), '#6ee7ff');
      }
    } else {
      let geo;
      let color = '#ffff00';
      if (type === 'arrow') {
        geo = new THREE.ConeGeometry(0.06, 0.34, 6);
        color = '#f1c40f';
      } else if (type === 'magic') {
        geo = new THREE.OctahedronGeometry(0.11, 0);
        color = '#9b59b6';
      } else {
        geo = new THREE.SphereGeometry(0.14, 8, 6);
        color = '#e74c3c';
      }
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: type === 'magic',
        opacity: type === 'magic' ? 0.95 : 1,
        blending: type === 'magic' ? THREE.AdditiveBlending : THREE.NormalBlending
      });
      mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(from);
      mesh.position.y += 0.5;
      this.projectileGroup.add(mesh);
    }

    this.projectiles.push({
      mesh, from: from.clone(), target, damage, aoe, type,
      speed: type === 'cannon' ? 6 : 12,
      instant: type === 'ice',
      progress: 0,
      startPos: from.clone(),
      pierceLeft: type === 'arrow' ? (lvl ? lvl.pierce || 0 : 0) : 0,
      hitIds: [],
      splashRadius: type === 'magic' ? (lvl ? lvl.splashRadius || 0 : 0) : 0,
      splashDamage: type === 'magic' ? (lvl ? lvl.splashDamage || 0 : 0) : 0,
      slowPct: (type === 'ice' || type === 'magic') ? (lvl ? lvl.slowPct || 0 : 0) : 0,
      slowDuration: 2,
      freezeChance: type === 'ice' ? (lvl ? lvl.freezeChance || 0 : 0) : 0,
      freezeDuration: 1,
      armorShred: type === 'cannon' ? (lvl ? lvl.armorShred || 0 : 0) : 0,
      armorShredDuration: 3,
      burnDps: type === 'cannon' ? (lvl ? lvl.burnDps || 0 : 0) : 0,
      burnDuration: 3,
      resistPen: type === 'magic' ? (lvl ? lvl.resistPen || 0 : 0) : 0,
      undeadBonus: type === 'magic' ? (lvl ? lvl.undeadBonus || 0 : 0) : 0,
      damageType: def ? def.damageType : (type === 'magic' ? 'magic' : 'physical')
    });
  }

  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];

      if (p.instant) {
        this.dealDamage(p);
        if (p.mesh) this.projectileGroup.remove(p.mesh);
        this.projectiles.splice(i, 1);
        continue;
      }

      if (!p.target || p.target.dead) {
        if (p.mesh) this.projectileGroup.remove(p.mesh);
        this.projectiles.splice(i, 1);
        continue;
      }

      const targetPos = p.target.mesh.position.clone();
      targetPos.y += 0.5;
      const dist = p.mesh.position.distanceTo(targetPos);

      if (dist < 0.3) {
        this.dealDamage(p);
        if (p.pierceLeft > 0) {
          p.pierceLeft--;
          p.hitIds.push(p.target.id);
          const next = this.findNextPierceTarget(p);
          if (next) {
            p.target = next;
            continue;
          }
        }
        if (p.mesh) this.projectileGroup.remove(p.mesh);
        this.projectiles.splice(i, 1);
      } else {
        const dir = targetPos.clone().sub(p.mesh.position).normalize();
        if (p.type === 'arrow') {
          p.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        }
        const moveSpeed = p.speed * dt;
        if (p.type === 'cannon') {
          p.progress += moveSpeed / Math.max(0.01, p.startPos.distanceTo(targetPos));
          p.mesh.position.lerpVectors(p.startPos, targetPos, Math.min(p.progress, 1));
          p.mesh.position.y += Math.sin(p.progress * Math.PI) * 1.0;
        } else {
          p.mesh.position.add(dir.multiplyScalar(moveSpeed));
        }
      }
    }
  }

  findNextPierceTarget(p) {
    const def = TOWER_DEFS[p.type];
    const candidates = this.game.monsterManager.monsters
      .filter(m => !m.dead && !p.hitIds.includes(m.id))
      .filter(m => def.targetsAir || !m.flying)
      .sort((a, b) => b.pathProgress - a.pathProgress);
    return candidates[0] || null;
  }

  dealDamage(projectile) {
    const mm = this.game.monsterManager;
    const dmgType = projectile.damageType;
    const opts = {
      resistPen: projectile.resistPen || 0,
      undeadBonus: projectile.undeadBonus || 0
    };

    const applyHit = (m, dmg) => {
      if (m.dead || (m.flying && projectile.type === 'cannon')) return;
      mm.damageMonster(m, dmg, dmgType, opts);
      if (projectile.slowPct) {
        mm.applySlow(m, projectile.slowPct, projectile.slowDuration || 2, { magic: projectile.type === 'magic' });
      }
      if (projectile.type === 'ice' && projectile.freezeChance > 0 && Math.random() < projectile.freezeChance) {
        mm.applyFreeze(m, projectile.freezeDuration || 1);
      }
      if (projectile.armorShred) {
        m.armorShred = Math.max(m.armorShred || 0, projectile.armorShred);
        m.armorShredDuration = Math.max(m.armorShredDuration || 0, projectile.armorShredDuration || 3);
      }
      if (projectile.burnDps) {
        mm.applyBurn(m, projectile.burnDps, projectile.burnDuration || 3);
      }
    };

    if (projectile.aoe > 0) {
      for (const m of mm.monsters) {
        if (m.dead || (m.flying && projectile.type === 'cannon')) continue;
        if (projectile.mesh.position.distanceTo(m.mesh.position) <= projectile.aoe) applyHit(m, projectile.damage);
      }
      return;
    }

    if (projectile.target && !projectile.target.dead) applyHit(projectile.target, projectile.damage);

    if (projectile.splashRadius > 0) {
      for (const m of mm.monsters) {
        if (m === projectile.target || m.dead) continue;
        if (projectile.mesh.position.distanceTo(m.mesh.position) <= projectile.splashRadius) {
          applyHit(m, projectile.damage * (projectile.splashDamage || 0.5));
        }
      }
    }
  }

  stunTowersWithin(center, radius, duration) {
    let count = 0;
    for (const t of this.towers) {
      if (t.pos.distanceTo(center) <= radius) {
        t.stunDuration = Math.max(t.stunDuration || 0, duration || 2);
        count++;
      }
    }
    return count;
  }

  slowTowersWithin(center, radius, slowPct, duration) {
    let count = 0;
    for (const t of this.towers) {
      if (t.pos.distanceTo(center) <= radius) {
        t.atkSpeedMul = 1 - (slowPct || 0.5);
        t.atkSpeedMulTimer = Math.max(t.atkSpeedMulTimer || 0, duration || 3);
        count++;
      }
    }
    return count;
  }

  showTowerMenu(cell) {
    const tower = this.getTowerAtCell(cell.x, cell.z);
    if (tower) {
      this.selectedTower = tower;
      return {
        cell: { x: tower.cell.x, z: tower.cell.z },
        pos: tower.pos.clone(),
        type: tower.type,
        level: tower.level,
        totalInvested: tower.totalInvested,
        canUpgrade: tower.level < 3,
        upgradeCost: tower.level < 3 ? TOWER_DEFS[tower.type].levels[tower.level].cost : 0,
        sellRefund: Math.floor(tower.totalInvested * 0.7),
        def: TOWER_DEFS[tower.type],
        levelDef: TOWER_DEFS[tower.type].levels[tower.level - 1]
      };
    }
    return null;
  }

  hideTowerMenu() {
    this.selectedTower = null;
  }

  updateVisuals(dt) {
    for (const tower of this.towers) {
      if (tower.target && !tower.target.dead) {
        const dir = tower.target.mesh.position.clone().sub(tower.pos);
        const angle = Math.atan2(dir.x, dir.z);
        tower.mesh.rotation.y += (angle - tower.mesh.rotation.y) * 5 * dt;
      }
    }
  }
}
