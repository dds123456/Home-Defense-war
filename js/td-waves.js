/**
 * 波次系统 - 8 关卡波次配置与生成
 * 按章节缩放怪物血量、双路径奇偶分流、正确 BOSS 收尾
 */
import { LEVEL_CONFIGS } from './td-map.js';
import { MONSTER_DEFS } from './td-monsters.js';

// 每关波次总数（PRD 3.4.1）
const WAVE_COUNT = [20, 22, 25, 21, 23, 26, 24, 28];

// 关底 BOSS 分配（PRD 3.4.1 / 3.5.5）
const BOSS_MAP = { 0: 'orcCaptain', 2: 'orcCaptain', 5: 'skeletonKing', 7: 'hellGolem' };

// 章节怪物池
const CHAPTER_POOLS = {
  1: { basic: ['goblin', 'orc'], flying: ['gargoyle'], elite: ['wolfRider', 'shadow', 'troll'], fast: ['fastGoblin'] },
  2: { basic: ['skeleton', 'zombie'], flying: ['ghost'], elite: ['lich', 'stoneGolem'] },
  3: { basic: ['demonImp', 'hellHound'], flying: ['wyvern'], elite: ['heavyDemon'] }
};

function buildDesc(w, enemies, pool, bossType, N) {
  if (bossType && w >= N) {
    const boss = MONSTER_DEFS[bossType];
    return `BOSS: ${boss.name} 降临！${boss.bossSkill ? `预警「${boss.bossSkill.name}」` : ''}`;
  }
  const head = enemies[0].type;
  const hasFlying = enemies.some(e => pool.flying.includes(e.type));
  const hasElite = enemies.some(e => pool.elite.includes(e.type));
  if (hasFlying) return '飞行编队来袭！请部署对空火力（魔法塔/英雄）';
  if (hasElite) return `精英${MONSTER_DEFS[head].name}突进，注意高血量与冲锋！`;
  if (enemies.length > 1) return '杂兵混编潮，合理分配火力！';
  return `${MONSTER_DEFS[head].name} 成群逼近，箭塔已就位！`;
}

function buildWaves(levelIndex) {
  const cfg = LEVEL_CONFIGS[levelIndex];
  const ch = cfg.chapter;
  const pool = CHAPTER_POOLS[ch];
  const N = WAVE_COUNT[levelIndex];
  const bossType = BOSS_MAP[levelIndex];
  const waves = [];

  for (let w = 1; w <= N; w++) {
    const enemies = [];
    const interval = Math.max(0.5, 1.3 - w * 0.025);
    const baseCount = Math.round(5 + w * 0.9);

    if (w === 1) {
      enemies.push({ type: pool.basic[0], count: 5, interval: 1.2, delay: 2 });
    } else if (w <= 3) {
      enemies.push({ type: pool.basic[0], count: baseCount, interval, delay: 2 });
    } else if (w <= 6) {
      enemies.push({ type: pool.basic[0], count: Math.round(baseCount * 0.6), interval, delay: 2 });
      enemies.push({ type: pool.basic[1], count: Math.round(baseCount * 0.5), interval: interval + 0.2, delay: 4 });
    } else if (w === 8) {
      // 飞行波
      enemies.push({ type: pool.flying[0], count: 3 + Math.floor(w / 6), interval: 1.8, delay: 2 });
      enemies.push({ type: pool.basic[0], count: Math.round(baseCount * 0.5), interval, delay: 5 });
    } else if (w === 10) {
      // 精英波
      enemies.push({ type: pool.elite[0], count: 2 + Math.floor(w / 12), interval: 2.0, delay: 2 });
      enemies.push({ type: pool.basic[1], count: Math.round(baseCount * 0.6), interval, delay: 5 });
    } else if (w >= N) {
      // 最后一波：BOSS 或精英高压收尾
      if (bossType) {
        enemies.push({ type: bossType, count: 1, interval: 0, delay: 3, isBoss: true });
        enemies.push({ type: pool.basic[0], count: Math.round(baseCount * 0.6), interval, delay: 6 });
      } else {
        const eliteType = pool.elite[Math.min(1, pool.elite.length - 1)];
        enemies.push({ type: eliteType, count: 3 + Math.floor(w / 8), interval: 1.8, delay: 2 });
        enemies.push({ type: pool.basic[0], count: baseCount, interval, delay: 5 });
        if (pool.flying[0]) enemies.push({ type: pool.flying[0], count: 3, interval: 1.6, delay: 8 });
      }
    } else {
      // 混合波
      enemies.push({ type: pool.basic[0], count: Math.round(baseCount * 0.6), interval, delay: 2 });
      enemies.push({ type: pool.basic[1], count: Math.round(baseCount * 0.4), interval: interval + 0.2, delay: 4 });
      if (w % 4 === 0 && pool.flying[0]) enemies.push({ type: pool.flying[0], count: 2 + Math.floor(w / 10), interval: 1.8, delay: 6 });
      if (w % 5 === 0 && pool.elite[0]) enemies.push({ type: pool.elite[0], count: 1 + Math.floor(w / 15), interval: 2.0, delay: 7 });
    }

    const isBoss = !!(bossType && w >= N);
    const desc = buildDesc(w, enemies, pool, bossType, N);
    waves.push({ desc, enemies, isBoss });
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
    const waveScale = 1 + 0.08 * Math.floor((waveNum - 1) / 5);
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
