/**
 * Home Defense War - 主游戏引擎
 * 3D 像素风塔防，按 PRD V1.5 对齐：
 * 准备阶段/下一波、暂停与设置、局内道具、英雄成长、BOSS预警、音频、新手引导
 */
import * as THREE from 'three';
import { TdMap, LEVEL_CONFIGS } from './td-map.js';
import { TowerManager } from './td-towers.js';
import { MonsterManager } from './td-monsters.js';
import { HeroManager } from './td-heroes.js';
import { WaveManager } from './td-waves.js';
import { AudioManager } from './td-audio.js';
import { Tutorial } from './td-tutorial.js';

const PROGRESS_KEY = 'hdw_progress_v1';
const WAVE_COUNTS = [20, 22, 25, 21, 23, 26, 24, 28];

const ITEM_DEFS = {
  bomb: { name: '炸弹', icon: '💣', desc: '对目标范围怪物造成120魔法伤害' },
  medkit: { name: '急救包', icon: '🩹', desc: '恢复基地生命+5' },
  goldbag: { name: '金币袋', icon: '💰', desc: '立即获得100金币' },
  freezerune: { name: '寒冰符', icon: '❄️', desc: '全场怪物减速50%持续5秒' },
  totem: { name: '援军图腾', icon: '🗿', desc: '召唤一座2级箭塔持续15秒' }
};

function loadProgress() {
  const base = { unlocked: 0, stars: {}, heroExp: {} };
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (typeof p.unlocked === 'number' && p.stars) {
        base.unlocked = p.unlocked;
        base.stars = p.stars;
        base.heroExp = p.heroExp || {};
      }
    }
  } catch (e) { /* ignore */ }
  return base;
}

function saveProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
}

class Game {
  constructor() {
    this.currentLevel = 0;
    this.progress = loadProgress();
    this.selectedChapter = 1;

    this.gold = 200;
    this.baseHP = 20;
    this.baseMaxHP = 20;
    this.waveNum = 0;
    this.maxWaves = 20;
    this.waveActive = false;
    this.waveBetween = false;
    this.prepPhase = true;
    this.gameOver = false;
    this.gamePaused = false;
    this.gameStarted = false;
    this.gameSpeed = 1;
    this.killCount = 0;
    this.totalKills = 0;
    this.hero = null;
    this.buildingSpot = null;
    this.selectedTowerType = null;
    this.items = { bomb: 1, medkit: 1, goldbag: 1, freezerune: 1, totem: 1 };
    this.selectedItem = null;
    this.bossWarnings = [];
    this._msgTimeout = null;
    this._suppressClick = false;

    this.audio = new AudioManager();
    this.tutorial = new Tutorial(this);

    this.initThree();
    this.initCamera();
    this.initManagers();
    this.initLighting();
    this.initRaycaster();
    this.initUI();

    this.map.reset(0);
    this.showMainMenu();
    this.animate();
  }

  initThree() {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const dpr = Math.min(window.devicePixelRatio, isMobile ? 1.2 : 2);

    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: isMobile ? 'low-power' : 'default' });
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    document.getElementById('game-container').prepend(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#87CEEB');
    this.scene.fog = new THREE.Fog('#87CEEB', 30, 70);

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 100);
    this.camTarget = new THREE.Vector3(14, 0, 10);
    this.camYaw = 0.7;
    this.camPitch = 0.55;
    this.camRadius = 28;

    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  initCamera() {
    this.pointer = { down: false, moved: false, id: null, x: 0, y: 0, lastX: 0, lastY: 0 };
    this.pinchDist = 0;
    this.touchIds = new Set();
    const canvas = this.renderer.domElement;
    canvas.addEventListener('pointerdown', e => this.onPointerDown(e));
    window.addEventListener('pointermove', e => this.onPointerMove(e));
    window.addEventListener('pointerup', e => this.onPointerUp(e));
    window.addEventListener('pointercancel', e => this.onPointerUp(e));
    canvas.addEventListener('wheel', e => this.onWheel(e), { passive: false });
  }

  onPointerDown(e) {
    if (e.pointerType === 'touch') {
      this.touchIds.add(e.pointerId);
      if (this.touchIds.size === 2) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        const t0 = [...this.touchIds][0];
        this.pinchDist = 0;
        return;
      }
    }
    this.pointer = {
      down: true, moved: false, id: e.pointerId,
      x: e.clientX, y: e.clientY, lastX: e.clientX, lastY: e.clientY
    };
  }

  onPointerMove(e) {
    if (e.pointerType === 'touch' && this.touchIds.size === 2) {
      const touches = [...this.touchIds];
      if (touches.includes(e.pointerId) && this._touchPos) {
        this._touchPos.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const [a, b] = [...this._touchPos.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (this.pinchDist > 0) {
          this.camRadius = Math.max(14, Math.min(55, this.camRadius * (this.pinchDist / d)));
        }
        this.pinchDist = d;
      } else {
        if (!this._touchPos) this._touchPos = new Map();
        this._touchPos.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (this._touchPos.size === 2) {
          const [a, b] = [...this._touchPos.values()];
          this.pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
        }
      }
      return;
    }

    if (!this.pointer.down || e.pointerId !== this.pointer.id) return;
    const dx = e.clientX - this.pointer.lastX;
    const dy = e.clientY - this.pointer.lastY;
    if (Math.hypot(e.clientX - this.pointer.x, e.clientY - this.pointer.y) > 6) this.pointer.moved = true;
    this.pointer.lastX = e.clientX;
    this.pointer.lastY = e.clientY;
    this.camYaw -= dx * 0.008;
    this.camPitch = Math.max(0.18, Math.min(1.25, this.camPitch + dy * 0.006));
  }

  onPointerUp(e) {
    if (e.pointerType === 'touch') {
      this.touchIds.delete(e.pointerId);
      if (this._touchPos) this._touchPos.delete(e.pointerId);
      this.pinchDist = 0;
    }
    if (this.pointer.down && e.pointerId === this.pointer.id) {
      if (this.pointer.moved) this._suppressClick = true;
      this.pointer.down = false;
      setTimeout(() => { this._suppressClick = false; }, 50);
    }
  }

  onWheel(e) {
    e.preventDefault();
    this.camRadius = Math.max(14, Math.min(55, this.camRadius + e.deltaY * 0.02));
  }

  updateCamera() {
    const offset = new THREE.Vector3(
      this.camRadius * Math.cos(this.camPitch) * Math.sin(this.camYaw),
      this.camRadius * Math.sin(this.camPitch),
      this.camRadius * Math.cos(this.camPitch) * Math.cos(this.camYaw)
    );
    this.camera.position.copy(this.camTarget).add(offset);
    this.camera.lookAt(this.camTarget);
  }

  frameLevel() {
    const center = this.map.getCenter();
    this.camTarget.set(center.x, 0, center.z);
    this.camYaw = 0.7;
    this.camPitch = 0.55;
    this.camRadius = Math.max(26, this.map.gridW * 1.05);
  }

  initLighting() {
    const ambient = new THREE.AmbientLight('#ffffff', 0.6);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight('#ffffff', 1.2);
    sun.position.set(20, 30, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -30; sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30;
    this.scene.add(sun);
  }

  initRaycaster() {
    this.renderer.domElement.addEventListener('click', e => this.onClick(e));
    this.renderer.domElement.addEventListener('contextmenu', e => {
      e.preventDefault();
      this.onRightClick(e);
    });
    this.renderer.domElement.addEventListener('mousemove', e => this.onMouseMove(e));
    document.addEventListener('keydown', e => this.onKeyDown(e));
    ['pointerdown', 'click', 'keydown', 'touchstart'].forEach(evt => {
      window.addEventListener(evt, () => this.audio.unlock(), { passive: true });
    });
  }

  initManagers() {
    this.map = new TdMap(this.scene);
    this.towerManager = new TowerManager(this.scene, this);
    this.monsterManager = new MonsterManager(this.scene, this);
    this.heroManager = new HeroManager(this.scene, this);
    this.waveManager = new WaveManager(this);
  }

  initUI() {
    const $ = id => document.getElementById(id);
    this.ui = {
      goldEl: $('gold'),
      baseHPEl: $('base-hp'),
      waveEl: $('wave-num'),
      killsEl: $('kill-count'),
      levelNameEl: $('level-name'),
      nextWaveBtn: $('next-wave-btn'),
      speedBtn: $('speed-btn'),
      speedText: $('speed-text'),
      pauseBtn: $('pause-btn'),
      audioBtn: $('audio-btn'),
      pauseOverlay: $('pause-overlay'),
      btnResume: $('btn-resume'),
      btnPauseRetry: $('btn-pause-retry'),
      btnPauseMenu: $('btn-pause-menu'),
      volumeMaster: $('volume-master'),
      volumeMusic: $('volume-music'),
      volumeSfx: $('volume-sfx'),
      towerPanel: $('tower-panel'),
      towerBtns: document.querySelectorAll('.tower-btn'),
      infoPanel: $('tower-info-panel'),
      infoName: $('info-name'),
      infoLevel: $('info-level'),
      infoDamage: $('info-damage'),
      infoRange: $('info-range'),
      infoDesc: $('info-desc'),
      upgradeBtn: $('upgrade-btn'),
      upgradeCost: $('upgrade-cost'),
      sellBtn: $('sell-btn'),
      sellValue: $('sell-value'),
      closeInfoBtn: $('close-info'),
      waveAnnounce: $('wave-announce'),
      waveAnnounceText: $('wave-announce-text'),
      gameOverPanel: $('result-panel'),
      gameOverTitle: $('result-title'),
      gameOverStats: $('result-stats'),
      gameOverStars: $('result-stars'),
      resultNextBtn: $('btn-result-next'),
      resultRetryBtn: $('btn-result-retry'),
      resultMenuBtn: $('btn-result-menu'),
      heroPanel: $('hero-panel'),
      heroBtn: $('hero-skill-btn'),
      heroCooldown: $('hero-cooldown'),
      heroSkillName: $('hero-skill-name'),
      heroName: $('hero-name'),
      heroLevel: $('hero-level'),
      heroSwitch: $('hero-switch'),
      itemBar: $('item-bar'),
      itemBtns: document.querySelectorAll('.item-btn'),
      towerBuildPanel: $('tower-build-panel'),
      buildTowerBtns: document.querySelectorAll('.build-tower-btn'),
      buildCancelBtn: $('build-cancel-btn'),
      buildSpotLabel: $('build-spot-label'),
      messageEl: $('message'),
      mainMenu: $('main-menu'),
      btnStartMenu: $('btn-start-menu'),
      btnHeroesMenu: $('btn-heroes-menu'),
      levelSelect: $('level-select'),
      chapterTabs: $('chapter-tabs'),
      levelGrid: $('level-grid'),
      btnBackMenu: $('btn-back-menu')
    };

    this.ui.btnStartMenu.addEventListener('click', () => { this.audio.play('click'); this.showLevelSelect(); });
    this.ui.btnHeroesMenu.addEventListener('click', () => { this.audio.play('click'); this.showMessage('英雄图鉴敬请期待', 1800); });
    this.ui.btnBackMenu.addEventListener('click', () => { this.audio.play('click'); this.showMainMenu(); });
    this.ui.resultNextBtn.addEventListener('click', () => { this.audio.play('click'); this.startLevel(this.currentLevel + 1); });
    this.ui.resultRetryBtn.addEventListener('click', () => { this.audio.play('click'); this.startLevel(this.currentLevel); });
    this.ui.resultMenuBtn.addEventListener('click', () => { this.audio.play('click'); this.showLevelSelect(); });

    this.ui.nextWaveBtn.addEventListener('click', () => { this.audio.play('click'); this.requestNextWave(); });
    this.ui.speedBtn.addEventListener('click', () => { this.audio.play('click'); this.toggleSpeed(); });
    this.ui.pauseBtn.addEventListener('click', () => { this.audio.play('click'); this.togglePause(); });
    this.ui.btnResume.addEventListener('click', () => { this.audio.play('click'); this.togglePause(); });
    this.ui.btnPauseRetry.addEventListener('click', () => { this.audio.play('click'); this.startLevel(this.currentLevel); });
    this.ui.btnPauseMenu.addEventListener('click', () => { this.audio.play('click'); this.togglePause(); this.showLevelSelect(); });
    this.ui.audioBtn.addEventListener('click', () => {
      const muted = !this.audio.isMuted();
      this.audio.setMuted(muted);
      this.audio.play('click');
      this.ui.audioBtn.textContent = muted ? '🔇' : '🔊';
    });
    [['master', this.ui.volumeMaster], ['music', this.ui.volumeMusic], ['sfx', this.ui.volumeSfx]].forEach(([type, input]) => {
      if (!input) return;
      input.value = this.audio.settings[type];
      input.addEventListener('input', () => this.audio.setVolume(type, parseFloat(input.value)));
    });

    this.ui.upgradeBtn.addEventListener('click', () => { this.audio.play('upgrade'); this.upgradeTower(); });
    this.ui.sellBtn.addEventListener('click', () => { this.audio.play('sell'); this.sellTower(); });
    this.ui.closeInfoBtn.addEventListener('click', () => this.hideTowerInfo());
    this.ui.buildCancelBtn.addEventListener('click', () => this.hideBuildPanel());
    this.ui.heroBtn.addEventListener('click', () => { this.audio.play('heroSkill'); this.useHeroSkill(); });

    this.ui.towerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.play('click');
        this.selectTowerType(btn.dataset.type);
      });
    });
    this.ui.buildTowerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.play('click');
        this.buildTowerAtSpot(btn.dataset.type);
      });
    });
    this.ui.itemBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.play('click');
        this.selectItem(btn.dataset.item);
      });
    });

    this.updateUI();
    this.updateTowerButtons();
    this.updateItemUI();
    this.ui.audioBtn.textContent = this.audio.isMuted() ? '🔇' : '🔊';
  }

  showMainMenu() {
    this.gameStarted = false;
    if (this.tutorial) this.tutorial.hide();
    this.ui.mainMenu.style.display = 'flex';
    this.ui.levelSelect.style.display = 'none';
    this.ui.gameOverPanel.style.display = 'none';
    this.ui.pauseOverlay.style.display = 'none';
    document.getElementById('game-container').classList.add('in-menu');
    this.hideBuildPanel();
    this.hideTowerInfo();
    this.audio.setPaused(false);
  }

  showLevelSelect() {
    this.gameStarted = false;
    if (this.tutorial) this.tutorial.hide();
    this.ui.mainMenu.style.display = 'none';
    this.ui.gameOverPanel.style.display = 'none';
    this.ui.levelSelect.style.display = 'flex';
    document.getElementById('game-container').classList.add('in-menu');
    this.audio.startMusic(this.selectedChapter);
    this.renderLevelSelect();
  }

  renderLevelSelect() {
    const tabs = this.ui.chapterTabs;
    tabs.innerHTML = '';
    const chapterNames = { 1: '第一章 边境防线', 2: '第二章 亡灵荒地', 3: '第三章 魔焰深渊' };
    for (let ch = 1; ch <= 3; ch++) {
      const tab = document.createElement('button');
      tab.className = 'chapter-tab' + (ch === this.selectedChapter ? ' active' : '');
      tab.textContent = chapterNames[ch];
      tab.addEventListener('click', () => {
        this.audio.play('click');
        this.selectedChapter = ch;
        this.audio.startMusic(ch);
        this.renderLevelSelect();
      });
      tabs.appendChild(tab);
    }

    const grid = this.ui.levelGrid;
    grid.innerHTML = '';
    LEVEL_CONFIGS.forEach((cfg, idx) => {
      if (cfg.chapter !== this.selectedChapter) return;
      const unlocked = idx <= this.progress.unlocked;
      const stars = this.progress.stars[idx] || 0;
      const card = document.createElement('div');
      card.className = 'level-card' + (unlocked ? '' : ' locked');
      const starHtml = [0, 1, 2].map(i => `<span class="star ${i < stars ? 'on' : ''}">★</span>`).join('');
      card.innerHTML = `
        <div class="level-no">${cfg.id}</div>
        <div class="level-name">${cfg.name}</div>
        <div class="level-stars">${unlocked ? starHtml : '🔒 未解锁'}</div>
        <div class="level-meta">波次 ${WAVE_COUNTS[idx]} · 初始 ${cfg.startGold}G</div>
      `;
      if (unlocked) card.addEventListener('click', () => { this.audio.play('click'); this.startLevel(idx); });
      grid.appendChild(card);
    });
  }

  startLevel(levelIndex) {
    if (levelIndex < 0 || levelIndex >= LEVEL_CONFIGS.length) return;
    this.currentLevel = levelIndex;
    this.resetGame();

    this.ui.mainMenu.style.display = 'none';
    this.ui.levelSelect.style.display = 'none';
    this.ui.gameOverPanel.style.display = 'none';
    this.ui.pauseOverlay.style.display = 'none';
    document.getElementById('game-container').classList.remove('in-menu');

    this.gameStarted = true;
    this.gameOver = false;
    this.prepPhase = true;
    this.ui.levelNameEl.textContent = `${LEVEL_CONFIGS[levelIndex].id} ${LEVEL_CONFIGS[levelIndex].name}`;

    const heroSpawn = this.map.getHeroSpawn();
    this.heroManager.reset(heroSpawn);
    this.hero = this.heroManager.getActiveHero();
    this.frameLevel();
    this.audio.startMusic(LEVEL_CONFIGS[levelIndex].chapter);
    this.audio.play('waveStart');

    if (this.tutorial.shouldStart(levelIndex)) {
      this.tutorial.start();
    }

    this.updateHeroUI();
    this.updateUI();
    this.showMessage('准备阶段：部署防御塔，点击“开始防御”开战', 2600);
  }

  resetGame() {
    const cfg = LEVEL_CONFIGS[this.currentLevel];
    this.gold = cfg.startGold;
    this.baseHP = this.baseMaxHP = cfg.baseHP;
    this.maxWaves = WAVE_COUNTS[this.currentLevel];
    this.waveNum = 0;
    this.waveActive = false;
    this.waveBetween = false;
    this.prepPhase = true;
    this.gameOver = false;
    this.gamePaused = false;
    this.gameSpeed = 1;
    this.ui.speedText.textContent = '1x';
    this.killCount = 0;
    this.totalKills = 0;
    this.hero = null;
    this.buildingSpot = null;
    this.selectedTowerType = null;
    this.selectedItem = null;
    this.items = { bomb: 1, medkit: 1, goldbag: 1, freezerune: 1, totem: 1 };
    this.bossWarnings.forEach(w => this.scene.remove(w.mesh));
    this.bossWarnings = [];

    this.map.reset(this.currentLevel);
    this.towerManager.reset();
    this.monsterManager.reset(this.map.paths);
    this.waveManager.loadLevel(this.currentLevel);

    this.monsterManager.onMonsterKilled = (monster) => {
      const reward = monster.def ? monster.def.reward : 10;
      this.gold += reward;
      this.totalKills++;
      this.killCount++;
      this.audio.play('coin');
      this.updateUI();
    };
    this.monsterManager.onMonsterReachBase = (monster) => {
      const dmg = monster.def ? monster.def.livesCost : 1;
      this.baseHP -= dmg;
      this.audio.play('baseHit');
      this.flashScreen('#ff2222', 0.22, 350);
      if (this.baseHP <= 0) {
        this.baseHP = 0;
        this.gameLose();
      }
      this.updateUI();
    };

    this.hideTowerInfo();
    this.hideBuildPanel();
    this.updateUI();
    this.updateTowerButtons();
    this.updateItemUI();
  }

  computeStars() {
    if (this.baseHP >= this.baseMaxHP) return 3;
    if (this.baseHP >= this.baseMaxHP * 0.5) return 2;
    if (this.baseHP > 0) return 1;
    return 0;
  }

  computeRewards(win) {
    const stars = win ? this.computeStars() : 0;
    const base = win ? 100 + this.maxWaves * 5 : 10 * this.waveNum;
    const waveBonus = this.waveNum * 5;
    const starMult = { 0: 0, 1: 0.1, 2: 0.3, 3: 0.5 }[stars] || 0;
    const firstClear = win && !(this.progress.stars[this.currentLevel]) ? 200 : 0;
    const noDamage = win && this.baseHP >= this.baseMaxHP ? 100 : 0;
    const goldReward = Math.round(base + waveBonus + (win ? base * starMult : 0) + firstClear);
    const exp = Math.round(10 + this.waveNum * 2 + stars * 5 + (win ? 20 : 0));
    return { goldReward, exp, firstClear, noDamage };
  }

  gameWin() {
    this.gameOver = true;
    this.waveActive = false;
    this.gameStarted = false;
    this.audio.play('victory');
    this.audio.setMusicIntensity(0);

    const stars = this.computeStars();
    const rewards = this.computeRewards(true);
    if (stars > (this.progress.stars[this.currentLevel] || 0)) {
      this.progress.stars[this.currentLevel] = stars;
    }
    if (this.currentLevel + 1 < LEVEL_CONFIGS.length && this.progress.unlocked < this.currentLevel + 1) {
      this.progress.unlocked = this.currentLevel + 1;
    }
    if (this.hero) {
      this.progress.heroExp[this.hero.id] = (this.progress.heroExp[this.hero.id] || 0) + rewards.exp;
    }
    saveProgress(this.progress);

    const hasNext = this.currentLevel + 1 < LEVEL_CONFIGS.length;
    this.ui.gameOverTitle.textContent = '🎉 胜利！';
    this.ui.gameOverStars.style.display = 'flex';
    this.ui.gameOverStars.innerHTML = [0, 1, 2].map(i =>
      `<span class="star ${i < stars ? 'on' : ''}">★</span>`).join('');
    this.ui.gameOverStats.innerHTML = `击杀: ${this.totalKills} | 剩余生命: ${this.baseHP} | 星级: ${stars}<br>金币奖励: ${rewards.goldReward} | 英雄经验: +${rewards.exp}${rewards.firstClear ? ' | 首通 +200' : ''}${rewards.noDamage ? ' | 无伤 +100' : ''}`;
    this.ui.resultNextBtn.style.display = hasNext ? 'inline-block' : 'none';
    this.ui.gameOverPanel.style.display = 'flex';
    document.getElementById('game-container').classList.add('in-menu');
    if (this.tutorial) this.tutorial.finish();
  }

  gameLose() {
    this.gameOver = true;
    this.waveActive = false;
    this.gameStarted = false;
    this.audio.play('defeat');
    this.audio.setMusicIntensity(0);

    const rewards = this.computeRewards(false);
    if (this.hero) {
      this.progress.heroExp[this.hero.id] = (this.progress.heroExp[this.hero.id] || 0) + rewards.exp;
    }
    saveProgress(this.progress);

    this.ui.gameOverTitle.textContent = '💀 失败';
    this.ui.gameOverStars.style.display = 'none';
    this.ui.gameOverStats.innerHTML = `击杀: ${this.totalKills} | 波次: ${this.waveNum}<br>基础奖励: ${rewards.goldReward}G | 英雄经验: +${rewards.exp}`;
    this.ui.resultNextBtn.style.display = 'none';
    this.ui.gameOverPanel.style.display = 'flex';
    document.getElementById('game-container').classList.add('in-menu');
    if (this.tutorial) this.tutorial.finish();
  }

  spendGold(amount) {
    if (this.gold < amount) return false;
    this.gold -= amount;
    this.updateUI();
    this.updateTowerButtons();
    return true;
  }

  addGold(amount) {
    this.gold += amount;
    this.audio.play('coin');
    this.updateUI();
    this.updateTowerButtons();
  }

  showFloatingText(text, color = '#ffd700') {
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.textContent = text;
    el.style.color = color;
    el.style.left = '50%';
    el.style.top = '42%';
    document.getElementById('game-container').appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  showDamageNumber(monster, dmg) {
    if (!monster || !monster.mesh) return;
    const v = monster.mesh.position.clone().project(this.camera);
    if (v.z > 1) return;
    const x = (v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight;
    const el = document.createElement('div');
    el.className = 'damage-number';
    el.textContent = `-${dmg}`;
    el.style.left = `${x + (Math.random() * 16 - 8)}px`;
    el.style.top = `${y}px`;
    document.getElementById('game-container').appendChild(el);
    setTimeout(() => el.remove(), 700);
  }

  flashScreen(color, alpha, ms) {
    const el = document.createElement('div');
    el.className = 'screen-flash';
    el.style.background = color;
    el.style.opacity = String(alpha);
    document.getElementById('game-container').appendChild(el);
    setTimeout(() => {
      el.style.transition = 'opacity 0.3s';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 320);
    }, ms);
  }

  selectTowerType(type) {
    const btn = document.querySelector(`.tower-btn[data-type="${type}"]`);
    if (!btn) return;
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected');
      this.selectedTowerType = null;
    } else {
      this.ui.towerBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      this.selectedTowerType = type;
    }
  }

  buildTowerAtSpot(type) {
    if (this.buildingSpot === null) return;
    const defs = this.towerManager.towerDefs;
    const def = defs[type];
    if (!def) return;
    const cost = def.levels[0].cost;
    if (this.gold < cost) {
      this.showMessage('金币不足！', 1500);
      this.audio.play('click');
      return;
    }
    const success = this.towerManager.placeTower(this.buildingSpot, type);
    if (success) {
      this.hideBuildPanel();
      this.audio.play('build');
      this.updateUI();
      this.updateTowerButtons();
      if (this.tutorial) this.tutorial.onEvent(type === 'arrow' ? 'towerBuilt' : type === 'magic' ? 'magicBuilt' : '');
    }
  }

  showBuildPanel(spotIndex) {
    this.buildingSpot = spotIndex;
    this.hideTowerInfo();
    this.ui.towerBuildPanel.style.display = 'flex';
    this.ui.buildSpotLabel.textContent = `塔位 #${spotIndex + 1}`;
    const btns = this.ui.buildTowerBtns;
    const defs = this.towerManager.towerDefs;
    btns.forEach(btn => {
      const type = btn.dataset.type;
      const def = defs[type];
      if (def) {
        const cost = def.levels[0].cost;
        btn.querySelector('.build-cost').textContent = `${cost}G`;
        btn.classList.toggle('disabled', this.gold < cost);
      }
    });
  }

  hideBuildPanel() {
    this.buildingSpot = null;
    this.ui.towerBuildPanel.style.display = 'none';
  }

  showTowerInfo(info) {
    this.ui.infoName.textContent = info.def.name;
    this.ui.infoLevel.textContent = `Lv.${info.level}`;
    this.ui.infoDamage.textContent = `伤害: ${info.levelDef.damage}`;
    this.ui.infoRange.textContent = `射程: ${info.levelDef.range}`;
    this.ui.infoDesc.textContent = info.levelDef.desc || '';

    if (info.canUpgrade) {
      this.ui.upgradeCost.textContent = `${info.upgradeCost}G`;
      this.ui.upgradeBtn.style.display = 'flex';
      this.ui.upgradeBtn.classList.toggle('disabled', this.gold < info.upgradeCost);
    } else {
      this.ui.upgradeBtn.style.display = 'none';
    }

    this.ui.sellValue.textContent = `${info.sellRefund}G`;
    this.ui.infoPanel.style.display = 'flex';
  }

  hideTowerInfo() {
    this.ui.infoPanel.style.display = 'none';
    this.towerManager.hideTowerMenu();
  }

  upgradeTower() {
    const tower = this.towerManager.selectedTower;
    if (!tower) return;
    const success = this.towerManager.upgradeTower(tower.spotIndex);
    if (success) {
      const info = this.towerManager.showTowerMenu(tower.spotIndex);
      if (info) this.showTowerInfo(info);
      this.updateUI();
      this.updateTowerButtons();
      if (this.tutorial) this.tutorial.onEvent('towerUpgraded');
    }
  }

  sellTower() {
    const tower = this.towerManager.selectedTower;
    if (!tower) return;
    this.towerManager.sellTower(tower.spotIndex);
    this.hideTowerInfo();
    this.updateUI();
    this.updateTowerButtons();
  }

  useHeroSkill() {
    if (!this.hero || this.gameOver) return;
    this.heroManager.useHeroSkill(this.heroManager.activeHeroIndex);
    if (this.tutorial) this.tutorial.onEvent('heroSkill');
    this.updateHeroUI();
  }

  switchHero(index) {
    if (!this.heroManager.heroes[index]) return;
    this.heroManager.activeHeroIndex = index;
    this.heroManager.moveTarget = null;
    this.heroManager.path = [];
    this.hero = this.heroManager.getActiveHero();
    this.updateHeroUI();
  }

  updateHeroUI() {
    if (!this.hero) {
      this.ui.heroPanel.style.display = 'none';
      return;
    }
    this.ui.heroPanel.style.display = 'flex';
    this.ui.heroName.textContent = this.hero.def.name;
    this.ui.heroLevel.textContent = `Lv.${this.hero.level}`;
    this.ui.heroSkillName.textContent = this.hero.def.skill.name;
    const cd = this.hero.skillCooldown;
    if (cd > 0) {
      this.ui.heroBtn.classList.add('on-cooldown');
      this.ui.heroCooldown.textContent = `${Math.ceil(cd)}s`;
    } else {
      this.ui.heroBtn.classList.remove('on-cooldown');
      this.ui.heroCooldown.textContent = '就绪';
    }

    this.ui.heroSwitch.innerHTML = '';
    this.heroManager.heroes.forEach((h, i) => {
      const btn = document.createElement('button');
      btn.className = 'hero-switch-btn' + (i === this.heroManager.activeHeroIndex ? ' active' : '');
      btn.textContent = h.def.icon;
      btn.title = `${h.def.name} Lv.${h.level}`;
      btn.addEventListener('click', () => {
        this.audio.play('click');
        this.switchHero(i);
      });
      this.ui.heroSwitch.appendChild(btn);
    });
  }

  selectItem(id) {
    if (this.items[id] <= 0) return;
    this.selectedItem = this.selectedItem === id ? null : id;
    this.updateItemUI();
    if (this.selectedItem) {
      const def = ITEM_DEFS[id];
      this.showMessage(`${def.name}：${def.desc}${def.immediate === false ? '，点击战场使用' : ''}`, 2200);
    }
  }

  useItem(id) {
    if (this.items[id] <= 0) return;
    const mm = this.monsterManager;
    if (id === 'medkit') {
      this.baseHP = Math.min(this.baseMaxHP, this.baseHP + 5);
      this.showMessage('急救包：基地生命+5', 1400);
    } else if (id === 'goldbag') {
      this.gold += 100;
      this.showMessage('金币袋：+100G', 1400);
    } else if (id === 'freezerune') {
      for (const m of mm.monsters) mm.applySlow(m, 0.5, 5, { magic: true });
      this.showMessage('寒冰符：全场减速50%', 1400);
      this.audio.play('freeze');
    }
    this.items[id]--;
    this.updateUI();
    this.updateItemUI();
  }

  useItemAt(id, point) {
    if (this.items[id] <= 0) return;
    if (id === 'bomb') {
      const mm = this.monsterManager;
      let hits = 0;
      for (const m of mm.monsters) {
        if (m.dead) continue;
        if (point.distanceTo(m.mesh.position) <= 2.5) {
          mm.damageMonster(m, 120, 'magic');
          hits++;
        }
      }
      this.spawnExplosion(point);
      this.audio.play('cannon_fire');
      this.showMessage(`炸弹命中 ${hits} 只怪物`, 1400);
      this.items[id]--;
    } else if (id === 'totem') {
      const cx = Math.floor(point.x), cz = Math.floor(point.z);
      if (cx < 0 || cz < 0 || cx >= this.map.gridW || cz >= this.map.gridH) return;
      if (this.map.isPathCell(cx, cz)) {
        this.showMessage('图腾不能放在道路上', 1400);
        return;
      }
      const occupied = this.towerManager.towers.some(t => Math.floor(t.pos.x) === cx && Math.floor(t.pos.z) === cz);
      if (occupied) {
        this.showMessage('这里已经有防御塔', 1400);
        return;
      }
      const worldPos = new THREE.Vector3(cx + 0.5, 0.3, cz + 0.5);
      this.towerManager.addTemporaryTower('arrow', worldPos, 2, 15);
      this.audio.play('build');
      this.showMessage('援军图腾：2级箭塔参战15秒', 1400);
      this.items[id]--;
    }
    this.updateUI();
    this.updateItemUI();
  }

  spawnExplosion(point) {
    const mat = new THREE.MeshBasicMaterial({ color: '#ff8800', transparent: true, opacity: 0.8 });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 6), mat);
    mesh.position.copy(point);
    mesh.position.y = 0.5;
    this.scene.add(mesh);
    let life = 0.35;
    const tick = () => {
      life -= 0.016;
      if (life <= 0) { this.scene.remove(mesh); return; }
      mesh.scale.multiplyScalar(1.06);
      mesh.material.opacity = Math.max(0, life);
      requestAnimationFrame(tick);
    };
    tick();
  }

  updateItemUI() {
    this.ui.itemBtns.forEach(btn => {
      const id = btn.dataset.item;
      const count = this.items[id] || 0;
      const def = ITEM_DEFS[id];
      const countEl = btn.querySelector('.item-count');
      if (countEl) countEl.textContent = `×${count}`;
      btn.title = `${def.name}：${def.desc}`;
      btn.classList.toggle('selected', this.selectedItem === id);
      btn.classList.toggle('disabled', count <= 0);
    });
  }

  requestNextWave() {
    if (this.gameOver || !this.gameStarted) return;
    if (this.waveManager.waveActive) return;
    this.earlyStartWave();
  }

  earlyStartWave() {
    if (this.gameOver || !this.gameStarted) return;
    if (this.waveManager.waveActive) return;
    if (this.prepPhase) {
      this.prepPhase = false;
      this.waveManager.startNextWave();
      this.updateUI();
      return;
    }
    if (!this.waveManager.betweenWaves) return;
    const remain = Math.floor(this.waveManager.waveTimer);
    if (remain > 0) {
      this.addGold(remain * 2);
      this.showMessage(`提前开波！+${remain * 2}G`, 1500);
    }
    if (this.waveManager._countdownId) {
      clearInterval(this.waveManager._countdownId);
      this.waveManager._countdownId = null;
    }
    this.waveManager.startNextWave();
    this.updateUI();
  }

  toggleSpeed() {
    this.gameSpeed = this.gameSpeed === 1 ? 2 : 1;
    this.ui.speedText.textContent = `${this.gameSpeed}x`;
    this.audio.setPaused(this.gamePaused);
  }

  togglePause() {
    if (!this.gameStarted || this.gameOver) return;
    this.gamePaused = !this.gamePaused;
    this.ui.pauseOverlay.style.display = this.gamePaused ? 'flex' : 'none';
    this.audio.setPaused(this.gamePaused);
  }

  showMessage(text, duration = 2000) {
    this.ui.messageEl.textContent = text;
    this.ui.messageEl.style.opacity = '1';
    clearTimeout(this._msgTimeout);
    this._msgTimeout = setTimeout(() => {
      this.ui.messageEl.style.opacity = '0';
    }, duration);
  }

  updateUI() {
    this.ui.goldEl.textContent = this.gold;
    this.ui.baseHPEl.textContent = this.baseHP;
    this.ui.waveEl.textContent = `${this.waveNum}/${this.maxWaves}`;
    this.ui.killsEl.textContent = this.totalKills;

    if (this.gameOver || !this.gameStarted) {
      this.ui.nextWaveBtn.disabled = true;
      this.ui.nextWaveBtn.textContent = '下一波';
      return;
    }
    if (this.waveManager.waveActive) {
      this.ui.nextWaveBtn.disabled = true;
      this.ui.nextWaveBtn.textContent = '战斗中';
    } else if (this.prepPhase) {
      this.ui.nextWaveBtn.disabled = false;
      this.ui.nextWaveBtn.textContent = '⚔️ 开始防御';
    } else {
      this.ui.nextWaveBtn.disabled = false;
      this.ui.nextWaveBtn.textContent = '⏩ 提前开波';
    }
  }

  updateTowerButtons() {
    const btns = document.querySelectorAll('.tower-btn');
    const defs = this.towerManager.towerDefs;
    btns.forEach(btn => {
      const type = btn.dataset.type;
      const def = defs[type];
      if (def) {
        const cost = def.levels[0].cost;
        const costEl = btn.querySelector('.tower-cost');
        if (costEl) costEl.textContent = `${cost}G`;
        btn.classList.toggle('disabled', this.gold < cost);
      }
    });
  }

  onClick(e) {
    if (this._suppressClick) return;
    if (this.gameOver || !this.gameStarted) return;

    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const towerMeshes = this.towerManager.towers.map(t => t.mesh);
    const towerHits = this.raycaster.intersectObjects(towerMeshes, true);
    if (towerHits.length > 0) {
      let obj = towerHits[0].object;
      while (obj) {
        const tower = this.towerManager.towers.find(t => t.mesh === obj);
        if (tower) {
          this.hideBuildPanel();
          this.selectedItem = null;
          this.updateItemUI();
          const info = this.towerManager.showTowerMenu(tower.spotIndex);
          if (info) this.showTowerInfo(info);
          return;
        }
        obj = obj.parent;
      }
    }

    const spotHits = this.raycaster.intersectObjects(this.map.towerSpotMeshes);
    if (spotHits.length > 0) {
      const spotMesh = spotHits[0].object;
      const spotIndex = this.map.towerSpotMeshes.indexOf(spotMesh);
      if (spotIndex >= 0 && !this.towerManager.getTowerAt(spotIndex)) {
        if (this.selectedTowerType) {
          this.buildingSpot = spotIndex;
          this.buildTowerAtSpot(this.selectedTowerType);
          return;
        }
        this.showBuildPanel(spotIndex);
        return;
      }
    }

    if (this.hero && this.map.groundMesh) {
      const groundHits = this.raycaster.intersectObject(this.map.groundMesh);
      if (groundHits.length > 0) {
        const point = groundHits[0].point;
        if (this.selectedItem) {
          const id = this.selectedItem;
          this.selectedItem = null;
          this.updateItemUI();
          this.useItemAt(id, point);
          return;
        }
        if (this.selectedTowerType) {
          this.selectedTowerType = null;
          document.querySelectorAll('.tower-btn').forEach(b => b.classList.remove('selected'));
          this.showMessage('点击塔位建造防御塔', 1400);
          return;
        }
        this.heroManager.moveHeroTo(point);
        return;
      }
    }

    this.hideBuildPanel();
    this.hideTowerInfo();
  }

  onRightClick(e) {
    if (this.gameOver || !this.gameStarted) return;
    e.preventDefault();
    this.selectedTowerType = null;
    this.selectedItem = null;
    document.querySelectorAll('.tower-btn').forEach(b => b.classList.remove('selected'));
    this.updateItemUI();
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const towerMeshes = this.towerManager.towers.map(t => t.mesh);
    const hits = this.raycaster.intersectObjects(towerMeshes, true);
    if (hits.length > 0) {
      let obj = hits[0].object;
      while (obj) {
        const tower = this.towerManager.towers.find(t => t.mesh === obj);
        if (tower) {
          this.towerManager.sellTower(tower.spotIndex);
          this.audio.play('sell');
          this.hideTowerInfo();
          this.updateUI();
          this.updateTowerButtons();
          return;
        }
        obj = obj.parent;
      }
    }
  }

  onMouseMove(e) {
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  onKeyDown(e) {
    if (this.gameOver && e.key === 'Enter') {
      this.startLevel(this.currentLevel);
      return;
    }
    if (!this.gameStarted) return;
    switch (e.key) {
      case 'Escape': this.hideBuildPanel(); this.hideTowerInfo(); this.selectedTowerType = null; this.selectedItem = null; break;
      case '1': this.selectTowerType('arrow'); break;
      case '2': this.selectTowerType('magic'); break;
      case '3': this.selectTowerType('cannon'); break;
      case '4': this.selectTowerType('ice'); break;
      case 'q': case 'Q': this.useHeroSkill(); break;
      case ' ': e.preventDefault(); this.requestNextWave(); break;
      case 'p': case 'P': this.togglePause(); break;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const rawDt = Math.min(this.clock.getDelta(), 0.1);
    const dt = this.gamePaused ? 0 : rawDt * this.gameSpeed;

    this.updateBossWarnings(rawDt);

    if (this.gameStarted && !this.gameOver && dt > 0) {
      this.towerManager.update(dt);
      this.monsterManager.update(dt);
      this.heroManager.update(dt);
      this.waveManager.update(dt);

      this.towerManager.updateVisuals(dt);
      this.monsterManager.updateVisuals(dt);
      this.heroManager.updateVisuals(dt);
      this.updateHeroUI();
      this.updateUI();
      this.updateMusicIntensity();
    }

    this.updateCamera();
    this.renderer.render(this.scene, this.camera);
  }

  updateMusicIntensity() {
    const alive = this.monsterManager.getAliveCount();
    const bossActive = this.monsterManager.monsters.some(m => m.isBoss && !m.dead);
    const lowBase = this.baseHP / this.baseMaxHP < 0.3 ? 0.2 : 0;
    const intensity = Math.max(0, Math.min(1, alive / 25 * 0.55 + (bossActive ? 0.35 : 0) + lowBase));
    this.audio.setMusicIntensity(intensity);
  }

  updateBossWarnings(dt) {
    for (let i = this.bossWarnings.length - 1; i >= 0; i--) {
      const w = this.bossWarnings[i];
      w.life -= dt;
      if (w.mesh.material) w.mesh.material.opacity = Math.max(0, Math.min(0.55, w.life * 0.7));
      if (w.life <= 0) {
        this.scene.remove(w.mesh);
        this.bossWarnings.splice(i, 1);
      }
    }
  }

  onBossWarning(boss, skill) {
    if (!boss || !boss.mesh) return;
    const radius = skill.radius || 2;
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(Math.max(0.1, radius - 0.15), radius, 32),
      new THREE.MeshBasicMaterial({ color: 0xff2222, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(boss.mesh.position.x, 0.28, boss.mesh.position.z);
    this.scene.add(ring);
    this.bossWarnings.push({ mesh: ring, life: (skill.warning || 1) + 0.25 });
    this.showMessage(`${boss.def.name} 正在施放「${skill.name}」！`, 1800);
    this.audio.play('bossWarn');
    if (skill.type === 'slowTowers') this.flashScreen('#ff3300', 0.25, 600);
  }

  onBossSkillEnd(boss, skill) {
    if (skill && skill.type === 'stunTowers') this.flashScreen('#ff6600', 0.18, 350);
  }

  onWaveStart(waveNum) {
    this.waveNum = waveNum;
    this.waveActive = true;
    this.waveBetween = false;
    this.prepPhase = false;
    this.audio.play('waveStart');
    this.updateUI();
    this.showMessage(`第 ${waveNum} 波来袭！`, 2000);
    if (this.tutorial) this.tutorial.onEvent('waveStarted');
  }

  onWaveComplete(waveNum) {
    this.waveActive = false;
    this.waveBetween = true;
    this.killCount = 0;
    const reward = 30 + waveNum * 5;
    this.addGold(reward);
    this.audio.play('waveComplete');
    this.updateUI();
    this.showMessage(`波次完成！+${reward}G`, 2000);
    if (this.tutorial) this.tutorial.onWaveComplete(waveNum);
  }

  onAllWavesComplete() {
    if (!this.gameStarted || this.gameOver) return;
    this.gameWin();
  }
}

// 供调试与自动化测试使用
const game = new Game();
window.game = game;
export default game;
