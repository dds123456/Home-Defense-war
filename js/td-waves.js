/**
 * 波次系统 - 8 关卡波次配置与生成
 * 按章节缩放怪物血量、双路径奇偶分流、正确 BOSS 收尾
 */
import { LEVEL_CONFIGS } from './td-map.js';
import { MONSTER_DEFS } from './td-monsters.js';

// 每关波次总数（PRD 3.4.1）
const WAVE_COUNT = [20, 22, 25, 21, 23, 26, 24, 28];

// 每关至少 5 种怪物的独立池 + 关底 BOSS
const LEVEL_POOLS = {
  0: { types: ['goblin', 'orc', 'fastGoblin', 'gargoyle', 'wolfRider', 'shadow'], boss: 'orcCaptain', elite: ['wolfRider', 'shadow'] },
  1: { types: ['goblin', 'orc', 'fastGoblin', 'gargoyle', 'wolfRider', 'troll'], elite: ['wolfRider', 'troll'] },
  2: { types: ['goblin', 'orc', 'fastGoblin', 'gargoyle', 'shadow', 'troll'], boss: 'orcCaptain', elite: ['shadow', 'troll'] },
  3: { types: ['skeleton', 'zombie', 'ghost', 'lich', 'stoneGolem'], elite: ['lich', 'stoneGolem'] },
  4: { types: ['skeleton', 'zombie', 'ghost', 'lich', 'stoneGolem', 'shadow'], elite: ['lich', 'stoneGolem', 'shadow'] },
  5: { types: ['skeleton', 'zombie', 'ghost', 'lich', 'stoneGolem', 'shadow'], boss: 'skeletonKing', elite: ['lich', 'stoneGolem', 'shadow'] },
  6: { types: ['demonImp', 'hellHound', 'wyvern', 'heavyDemon', 'ghost', 'gargoyle'], elite: ['heavyDemon', 'ghost', 'gargoyle'] },
  7: { types: ['demonImp', 'hellHound', 'wyvern', 'heavyDemon', 'ghost', 'stoneGolem'], boss: 'hellGolem', elite: ['heavyDemon', 'ghost', 'stoneGolem'] }
};

// 每关难度系数：塔的强化速度随关卡提高，波次价值曲线同步抬升
const DIFF = [1.0, 1.1, 1.2, 1.22, 1.34, 1.45, 1.5, 1.65];

const ELITE_TYPES = new Set(['wolfRider', 'shadow', 'troll', 'lich', 'stoneGolem', 'heavyDemon']);

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function targetValue(levelIndex, w, N) {
  const waveGrowth = 7 + levelIndex * 1.05;
  const lengthFactor = 0.8 + 0.2 * (N / 20);
  return Math.round(DIFF[levelIndex] * (70 + w * waveGrowth) * lengthFactor);
}

function allocateCounts(types, target, rng) {
  const rewards = types.map(t => MONSTER_DEFS[t].reward);
  const shares = types.map((t, i) => i === 0 ? 0.4 : i === 1 ? 0.26 : (0.34 / (types.length - 2)));
  const counts = types.map((t, i) => Math.max(1, Math.round(target * shares[i] / rewards[i])));
  let total = counts.reduce((s, c, i) => s + c * rewards[i], 0);
  let guard = 0;
  while (total < target && guard < 16) {
    const idx = counts.reduce((best, c, i) => rewards[i] < rewards[best] ? i : best, 0);
    counts[idx]++;
    total += rewards[idx];
    guard++;
  }
  guard = 0;
  while (total > target && guard < 20) {
    const idx = counts.reduce((best, c, i) => rewards[i] > rewards[best] ? i : best, 0);
    if (counts[idx] <= 1) break;
    counts[idx]--;
    total -= rewards[idx];
    guard++;
  }
  return counts;
}

function buildDesc(w, enemies, bossType, N) {
  if (bossType && w >= N) {
    const boss = MONSTER_DEFS[bossType];
    return `BOSS: ${boss.name} 降临！${boss.bossSkill ? `预警「${boss.bossSkill.name}」` : ''}`;
  }
  const head = enemies[0].type;
  const hasFlying = enemies.some(e => MONSTER_DEFS[e.type].flying);
  const hasElite = enemies.some(e => ELITE_TYPES.has(e.type));
  if (hasFlying && hasElite) return '混合精锐编队：飞行 + 精英，注意对空与集火！';
  if (hasFlying) return '飞行编队来袭！请部署对空火力（魔法塔/英雄）';
  if (hasElite) return `精英${MONSTER_DEFS[head].name}突进，注意高血量与冲锋！`;
  if (enemies.length > 1) return '杂兵混编潮，合理分配火力！';
  return `${MONSTER_DEFS[head].name} 成群逼近，箭塔已就位！`;
}

function buildWaves(levelIndex) {
  const cfg = LEVEL_CONFIGS[levelIndex];
  const profile = LEVEL_POOLS[levelIndex] || LEVEL_POOLS[0];
  const N = WAVE_COUNT[levelIndex];
  const bossType = profile.boss;
  const waves = [];
  const seenSignatures = new Set();
  let prevTarget = 0;
  let prevValue = 0;

  for (let w = 1; w <= N; w++) {
    const seed = levelIndex * 7919 + w * 104729;
    const rng = mulberry32(seed);
    let target = targetValue(levelIndex, w, N);
    target = Math.max(target, Math.round(prevTarget * 1.06));
    prevTarget = target;
    const baseInterval = Math.max(0.45, 1.18 - w * 0.018);
    const enemies = [];
    let isBoss = false;

    if (bossType && w >= N) {
      isBoss = true;
      enemies.push({ type: bossType, count: 1, interval: 0, delay: 3, isBoss: true });
      const escorts = shuffle(profile.types, rng).slice(0, 3);
      const counts = allocateCounts(escorts, Math.round(target * 0.9), rng);
      escorts.forEach((type, i) => {
        enemies.push({ type, count: counts[i], interval: baseInterval + i * 0.16, delay: 6 + i * 3 });
      });
    } else if (w === 1) {
      const types = profile.types.slice(0, 3);
      const counts = allocateCounts(types, target, rng);
      types.forEach((type, i) => {
        enemies.push({ type, count: counts[i], interval: baseInterval + i * 0.22, delay: 2 + i * 2 });
      });
    } else if (w >= N) {
      const types = [...profile.types.slice(0, 2), ...shuffle(profile.types.slice(2), rng).slice(0, 3)];
      const counts = allocateCounts(types, Math.round(target * 1.25), rng);
      types.forEach((type, i) => {
        enemies.push({ type, count: counts[i], interval: baseInterval + i * 0.13, delay: 2 + i * 2 });
      });
    } else {
      const extraCount = 1 + ((w * 7 + levelIndex) % 3);
      const types = [
        profile.types[0],
        profile.types[1],
        ...shuffle(profile.types.slice(2), rng).slice(0, extraCount)
      ];
      const counts = allocateCounts(types, target, rng);
      types.forEach((type, i) => {
        const delayBase = i === 0 ? 2 : 3.2 + i * 1.4;
        enemies.push({ type, count: counts[i], interval: baseInterval + i * 0.14, delay: delayBase });
      });
    }

    let value = enemies.reduce((s, e) => s + e.count * (MONSTER_DEFS[e.type].reward || 0), 0);
    let valueGuard = 0;
    while (value < Math.round(prevValue * 1.04) && valueGuard < 24) {
      const cheapest = enemies.reduce((best, e, i) => MONSTER_DEFS[e.type].reward < MONSTER_DEFS[enemies[best].type].reward ? i : best, 0);
      enemies[cheapest].count++;
      value += MONSTER_DEFS[enemies[cheapest].type].reward;
      valueGuard++;
    }
    prevValue = value;

    let sig = enemies.map(e => `${e.type}x${e.count}`).join('|');
    let guard = 0;
    while (seenSignatures.has(sig) && guard < 12) {
      enemies[0].count++;
      sig = enemies.map(e => `${e.type}x${e.count}`).join('|');
      guard++;
    }
    seenSignatures.add(sig);
    value = enemies.reduce((s, e) => s + e.count * (MONSTER_DEFS[e.type].reward || 0), 0);
    const desc = buildDesc(w, enemies, bossType, N);
    waves.push({ desc, enemies, isBoss, value, target });
  }
  return waves;
}

export class WaveManager {
  constructor(game) {
    this.game = game;
    this.waves = [];
    this.currentWave = 0;
    this.totalWaves = 0;
    this.waveActive = false;
    this.betweenWaves = true;
    this.waveTimer = 0;
    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.waveReward = 0;
    this.chapter = 1;
    this.dualPath = false;
    this.levelIndex = 0;
    this._countdownId = null;
  }

  reset() {
    this.waveActive = false;
    this.betweenWaves = true;
    this.waveTimer = 0;
    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.waveReward = 0;
    this.currentWave = 0;
    if (this._countdownId) { clearInterval(this._countdownId); this._countdownId = null; }
  }

  loadLevel(levelIndex) {
    this.reset();
    this.levelIndex = levelIndex;
    const cfg = LEVEL_CONFIGS[levelIndex];
    this.chapter = cfg.chapter;
    this.dualPath = cfg.dualPath;
    this.waves = buildWaves(levelIndex);
    this.totalWaves = this.waves.length;
    this.currentWave = 0;
  }

  hpScale(waveNum) {
    const chScale = { 1: 1.0, 2: 1.25, 3: 1.65 }[this.chapter] || 1.0;
    const waveScale = 1 + 0.10 * Math.floor((waveNum - 1) / 4) + 0.004 * (waveNum - 1);
    return chScale * waveScale;
  }

  startWave(waveNum) {
    if (this.waveActive) return;
    this.currentWave = waveNum - 1;
    if (this.currentWave >= this.totalWaves) return;
    this._doStartWave();
  }

  startNextWave() {
    if (this.waveActive) return;
    if (this.currentWave >= this.totalWaves) return;
    this._doStartWave();
  }

  _doStartWave() {
    const wave = this.waves[this.currentWave];
    const waveNum = this.currentWave + 1;
    this.game.onWaveStart(waveNum);

    // 波次播报
    this._showAnnounce(waveNum, wave.desc, wave.isBoss);

    // 构建生成队列（含入口与缩放）
    const scale = this.hpScale(waveNum);
    this.spawnQueue = [];
    for (const group of wave.enemies) {
      const entry = group.entry != null
        ? group.entry
        : (this.dualPath ? (waveNum % 2 === 1 ? 0 : 1) : 0);
      const gDelay = group.delay || 0;
      for (let i = 0; i < group.count; i++) {
        this.spawnQueue.push({
          type: group.type,
          delay: gDelay + i * (group.interval || 1.0),
          entry,
          scale
        });
      }
    }
    this.spawnQueue.sort((a, b) => a.delay - b.delay);

    this.spawnTimer = 0;
    this.waveActive = true;
    this.betweenWaves = false;
    this.waveReward = 30 + this.currentWave * 5;
  }

  _showAnnounce(waveNum, desc, isBoss) {
    const el = this.game.ui.waveAnnounce;
    const textEl = this.game.ui.waveAnnounceText;
    el.style.display = 'block';
    textEl.textContent = isBoss ? `⚠ ${desc}` : `第 ${waveNum} 波 - ${desc}`;
    if (isBoss) {
      textEl.style.color = '#ff4444';
      textEl.style.borderColor = '#ff4444';
    } else {
      textEl.style.color = '#ffd700';
      textEl.style.borderColor = '#ffd700';
    }
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'waveIn 0.5s ease-out';
    setTimeout(() => { el.style.display = 'none'; }, 2500);
  }

  update(dt) {
    if (!this.waveActive) return;

    this.spawnTimer += dt;

    // 生成怪物
    while (this.spawnQueue.length > 0 && this.spawnQueue[0].delay <= this.spawnTimer) {
      const spawn = this.spawnQueue.shift();
      this.game.monsterManager.spawnMonster(spawn.type, spawn.entry, spawn.scale);
    }

    // 检查波次是否完成
    if (this.spawnQueue.length === 0 && this.game.monsterManager.getAliveCount() === 0) {
      this._completeWave();
    }
  }

  _completeWave() {
    this.waveActive = false;
    this.betweenWaves = true;

    this.game.onWaveComplete(this.currentWave + 1);

    this.currentWave++;

    if (this.currentWave >= this.totalWaves) {
      setTimeout(() => this.game.onAllWavesComplete(), 2000);
    } else {
      // 5秒后自动开始下一波
      this.waveTimer = 5;
      if (this._countdownId) clearInterval(this._countdownId);
      this._countdownId = setInterval(() => {
        if (this.game.gameOver) { clearInterval(this._countdownId); return; }
        this.waveTimer -= 1;
        if (this.waveTimer <= 0) {
          clearInterval(this._countdownId);
          this._doStartWave();
        }
      }, 1000);
    }
  }
}
