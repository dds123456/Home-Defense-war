/**
 * Home Defense War - 主游戏引擎
 * 3D 像素风塔防，按 PRD V1.5 对齐：
 * 准备阶段/下一波、暂停与设置、局内道具、英雄成长、BOSS预警、音频、新手引导
 */
import * as THREE from 'three';
import { TdMap, LEVEL_CONFIGS } from './td-map.js';
import { TowerManager } from './td-towers.js';
import { MonsterManager, MONSTER_DEFS } from './td-monsters.js';
import { HeroManager } from './td-heroes.js';
import { WaveManager } from './td-waves.js';
import { AudioManager } from './td-audio.js';
import { MIHOYO, CHAPTER_PALETTES, updateOutlineUniforms } from './td-style.js';
import { buildSky, updateSky } from './td-sky.js';
import { updateWater } from './td-water.js';
import { updateAmbient } from './td-world.js';
import { createWeather, updateWeather, resetWeather } from './td-weather.js';

const PROGRESS_KEY = 'hdw_progress_v1';
const WAVE_COUNTS = [20, 22, 25, 21, 23, 26, 24, 28];

const ITEM_DEFS = {
  bomb: { name: '炸弹', icon: '💣', desc: '对目标范围怪物造成120魔法伤害' },
  medkit: { name: '急救包', icon: '🩹', desc: '恢复基地生命+5' },
  goldbag: { name: '金币袋', icon: '💰', desc: '立即获得100金币' },
  freezerune: { name: '寒冰符', icon: '❄️', desc: '全场怪物减速50%持续5秒' },
  totem: { name: '援军图腾', icon: '🗿', desc: '召唤一座2级箭塔持续15秒' }
};

const SKILL_DEFS = {
  arrowRain: { name: '箭雨', icon: '🏹', desc: '目标范围 150 物理伤害', price: 60, target: true },
  fireball: { name: '火球术', icon: '🔥', desc: '目标范围 250 魔法伤害', price: 80, target: true },
  healWave: { name: '治疗波', icon: '💚', desc: '基地恢复 10 生命', price: 50, target: false },
  timeWarp: { name: '时间缓速', icon: '⏳', desc: '全场怪物减速 60% 持续 5 秒', price: 70, target: false },
  goldRain: { name: '金币雨', icon: '🪙', desc: '立即获得 200 金币', price: 40, target: false }
};

const HERO_META = [
  { id: 'ranger', name: '王国游侠', icon: '🧝', portrait: 'hero_ranger.png', unlocked: true, skill: '穿透箭 · 对飞行 +50%' },
  { id: 'mage', name: '宫廷法师', icon: '🧙', portrait: 'hero_mage.png', unlocked: false, skill: '火焰雨 · 灼烧 + 减速' }
];

const MONSTER_PORTRAITS = {
  goblin: 'monster_goblin.png',
  fastGoblin: 'monster_fastGoblin.png',
  orc: 'monster_orc.png',
  wolfRider: 'monster_wolfRider.png',
  shadow: 'monster_shadow.png',
  gargoyle: 'monster_gargoyle.png',
  troll: 'monster_troll.png',
  orcCaptain: 'monster_orcCaptain.png',
  skeleton: 'monster_skeleton.png',
  zombie: 'monster_zombie.png',
  lich: 'monster_lich.png',
  stoneGolem: 'monster_stoneGolem.png',
  ghost: 'monster_ghost.png',
  skeletonKing: 'monster_skeletonKing.png',
  demonImp: 'monster_demonImp.png',
  hellHound: 'monster_hellHound.png',
  heavyDemon: 'monster_heavyDemon.png',
  wyvern: 'monster_wyvern.png',
  hellGolem: 'monster_hellGolem.png'
};

function loadProgress() {
  const base = {
    unlocked: 0,
    stars: {},
    heroExp: {},
    heroLevels: { ranger: 1, mage: 1 },
    coins: 0,
    stamina: { value: 1000, max: 1000, lastRegen: Date.now() },
    shopSkills: { arrowRain: 0, fireball: 0, healWave: 0, timeWarp: 0, goldRain: 0 }
  };
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (typeof p.unlocked === 'number' && p.stars) {
        base.unlocked = p.unlocked;
        base.stars = p.stars;
        base.heroExp = p.heroExp || {};
        base.heroLevels = Object.assign(base.heroLevels, p.heroLevels || {});
        base.coins = p.coins || 0;
        base.stamina = Object.assign(base.stamina, p.stamina || {});
        if (base.stamina.max < 1000) {
          base.stamina.max = 1000;
          base.stamina.value = 1000;
        }
        base.stamina.value = Math.min(base.stamina.value, base.stamina.max);
        base.shopSkills = Object.assign(base.shopSkills, p.shopSkills || {});
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
    this.buildingCell = null;
    this.selectedTowerType = null;
    this.heroSelected = false;
    this.items = { bomb: 1, medkit: 1, goldbag: 1, freezerune: 1, totem: 1 };
    this.selectedItem = null;
    this.skills = { arrowRain: 0, fireball: 0, healWave: 0, timeWarp: 0, goldRain: 0 };
    this.selectedSkill = null;
    this.staminaCost = 10;
    this.bossWarnings = [];
    this._msgTimeout = null;
    this._suppressClick = false;

    this.audio = new AudioManager();
    this.rangeIndicator = null;
    this.buildPreview = null;

    this.initThree();
    this.weather = createWeather(this.scene);
    this.initEdgePass();
    this.initCamera();
    this.initManagers();
    this.initLighting();
    this.initRaycaster();
    this.initUI();

    this.map.reset(0);
    this.updateSkyForChapter();
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
    this.renderer.toneMappingExposure = 1.32;
    document.getElementById('game-container').prepend(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(MIHOYO.sky);
    this.scene.fog = new THREE.Fog(MIHOYO.fog, 30, 72);
    this.sky = null;
    this.edgeRT = null;
    this.edgeScene = null;
    this.edgeCamera = null;
    this.edgeQuad = null;
    this.normalRT = null;
    this.normalMat = null;

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 400);
    this.camTarget = new THREE.Vector3(14, 0, 10);
    this.camYaw = 0.7;
    this.camPitch = 0.55;
    this.camRadius = 28;
    this.cameraIntro = null;
    this.worldTime = 0;
    this.worldGroup = new THREE.Group();
    this.scene.add(this.worldGroup);

    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      updateOutlineUniforms(50, window.innerHeight);
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
    if (this.cameraIntro) return;
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
    if (this.cameraIntro) return;
    this.camRadius = Math.max(14, Math.min(55, this.camRadius + e.deltaY * 0.02));
  }

  updateCamera() {
    let pitch = this.camPitch;
    let radius = this.camRadius;
    let fov = 50;
    if (this.cameraIntro) {
      const t = Math.min(1, this.cameraIntro.elapsed / this.cameraIntro.duration);
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      pitch = this.cameraIntro.startPitch + (this.camPitch - this.cameraIntro.startPitch) * e;
      radius = this.cameraIntro.startRadius + (this.camRadius - this.cameraIntro.startRadius) * e;
      fov = this.cameraIntro.startFov + (50 - this.cameraIntro.startFov) * e;
      if (t >= 1) this.cameraIntro = null;
    }
    const offset = new THREE.Vector3(
      radius * Math.cos(pitch) * Math.sin(this.camYaw),
      radius * Math.sin(pitch),
      radius * Math.cos(pitch) * Math.cos(this.camYaw)
    );
    this.camera.position.copy(this.camTarget).add(offset);
    this.camera.lookAt(this.camTarget);
    if (this.camera.fov !== fov) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
      updateOutlineUniforms(fov, window.innerHeight);
    }
  }

  frameLevel() {
    const center = this.map.getCenter();
    this.camTarget.set(center.x, 0, center.z);
    this.camYaw = 0.7;
    this.camPitch = 0.55;
    this.camRadius = Math.max(26, this.map.gridW * 1.05);
  }

  startCameraIntro() {
    this.cameraIntro = {
      elapsed: 0,
      duration: 2.6,
      startRadius: Math.max(62, this.camRadius * 2.7),
      startPitch: 0.12,
      startFov: 34
    };
  }

  initLighting() {
    const ambient = new THREE.AmbientLight('#e8f4ff', 0.55);
    this.scene.add(ambient);

    const hemi = new THREE.HemisphereLight('#cfefff', '#7fd27f', 0.45);
    this.scene.add(hemi);

    const sun = new THREE.DirectionalLight('#fff3d6', 1.05);
    sun.position.set(20, 30, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -30; sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30;
    this.scene.add(sun);
  }

  updateSkyForChapter() {
    if (this.sky) {
      this.scene.remove(this.sky);
      this.sky = null;
    }
    const theme = this.map.theme || CHAPTER_PALETTES[this.map.chapter] || CHAPTER_PALETTES[1];
    const center = this.map.getCenter();
    this.sky = buildSky(theme, center);
    this.sky.traverse((o) => { o.userData.isSky = true; });
    this.scene.add(this.sky);
    const fogColor = theme.fog || MIHOYO.fog;
    this.scene.background = new THREE.Color(fogColor);
    if (this.scene.fog) this.scene.fog.color.set(fogColor);
  }

  initEdgePass() {
    this.edgeRT = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType
    });
    this.edgeRT.texture.colorSpace = THREE.SRGBColorSpace;
    this.normalRT = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType
    });
    this.normalMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying float vDepth;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vDepth = clamp(-mv.z / 100.0, 0.0, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying float vDepth;
        void main() {
          vec3 n = normalize(vNormal);
          gl_FragColor = vec4(n * 0.5 + 0.5, vDepth);
        }
      `,
      depthTest: true,
      depthWrite: true
    });
    this.normalMat.toneMapped = false;
    this.normalMat.fog = false;
    const quadMat = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        tNormalDepth: { value: null },
        uTexel: { value: new THREE.Vector2(1, 1) },
        uNThreshold: { value: 0.30 },
        uDThreshold: { value: 0.055 },
        uEdgeAlpha: { value: 0.42 },
        uInk: { value: new THREE.Color(MIHOYO.ink) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform sampler2D tNormalDepth;
        uniform vec2 uTexel;
        uniform float uNThreshold;
        uniform float uDThreshold;
        uniform float uEdgeAlpha;
        uniform vec3 uInk;
        varying vec2 vUv;
        vec3 nTap(vec2 off) {
          vec3 n = texture2D(tNormalDepth, vUv + off * uTexel).rgb * 2.0 - 1.0;
          return normalize(n);
        }
        float dTap(vec2 off) {
          return texture2D(tNormalDepth, vUv + off * uTexel).a;
        }
        void main() {
          vec4 col = texture2D(tDiffuse, vUv);
          vec3 tl = nTap(vec2(-1.0, -1.0)), tc = nTap(vec2(0.0, -1.0)), tr = nTap(vec2(1.0, -1.0));
          vec3 ml = nTap(vec2(-1.0, 0.0)), mr = nTap(vec2(1.0, 0.0));
          vec3 bl = nTap(vec2(-1.0, 1.0)), bc = nTap(vec2(0.0, 1.0)), br = nTap(vec2(1.0, 1.0));
          vec3 gxN = -tl + tr - 2.0 * ml + 2.0 * mr - bl + br;
          vec3 gyN = -tl - 2.0 * tc - tr + bl + 2.0 * bc + br;
          float nEdge = length(gxN) + length(gyN);
          float dC = dTap(vec2(0.0, 0.0));
          float dEdge = max(
            max(abs(dC - dTap(vec2(-1.0, 0.0))), abs(dC - dTap(vec2(1.0, 0.0)))),
            max(abs(dC - dTap(vec2(0.0, -1.0))), abs(dC - dTap(vec2(0.0, 1.0))))
          );
          float edge = max(step(uNThreshold, nEdge), step(uDThreshold, dEdge));
          float mask = edge * uEdgeAlpha;
          vec3 outColor = mix(col.rgb, uInk, mask);
          gl_FragColor = linearToOutputTexel(vec4(outColor * 0.84, col.a));
        }
      `,
      depthTest: false,
      depthWrite: false
    });
    quadMat.toneMapped = false;
    quadMat.fog = false;
    this.edgeQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), quadMat);
    this.edgeQuad.frustumCulled = false;
    this.edgeScene = new THREE.Scene();
    this.edgeScene.add(this.edgeQuad);
    this.edgeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  }

  renderSceneWithEdges() {
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    if (!this.edgeRT || this.edgeRT.width !== size.x || this.edgeRT.height !== size.y) {
      this.edgeRT.setSize(size.x, size.y);
      this.normalRT.setSize(size.x, size.y);
    }
    this.renderer.setRenderTarget(this.edgeRT);
    this.renderer.render(this.scene, this.camera);
    const saved = [];
    this.scene.traverse((obj) => {
      if (!obj.isMesh || obj.userData.isOutline || obj.userData.isSky) return;
      if (obj.material && obj.material.isSpriteMaterial) return;
      saved.push({ mesh: obj, mat: obj.material });
      obj.material = this.normalMat;
    });
    this.renderer.setRenderTarget(this.normalRT);
    this.renderer.render(this.scene, this.camera);
    for (const entry of saved) entry.mesh.material = entry.mat;
    this.renderer.setRenderTarget(null);
    const mat = this.edgeQuad.material;
    mat.uniforms.tDiffuse.value = this.edgeRT.texture;
    mat.uniforms.tNormalDepth.value = this.normalRT.texture;
    mat.uniforms.uTexel.value.set(1 / size.x, 1 / size.y);
    this.renderer.render(this.edgeScene, this.edgeCamera);
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
    this.worldGroup.add(
      this.map.mapGroup,
      this.towerManager.towerGroup,
      this.towerManager.projectileGroup,
      this.monsterManager.monsterGroup,
      this.heroManager.heroGroup
    );
  }

  initUI() {
    const $ = id => document.getElementById(id);
    this.ui = {
      goldEl: $('gold'),
      baseHPEl: $('base-hp'),
      waveEl: $('wave-num'),
      killsEl: $('kill-count'),
      staminaEl: $('stamina'),
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
      skillBar: $('skill-bar'),
      skillBtns: document.querySelectorAll('.skill-btn'),
      heroTrainPanel: $('hero-train-panel'),
      heroTrainList: $('hero-train-list'),
      trainCoins: $('train-coins'),
      shopPanel: $('shop-panel'),
      shopList: $('shop-list'),
      shopCoins: $('shop-coins'),
      btnShopMenu: $('btn-shop-menu'),
      codexPanel: $('codex-panel'),
      codexTabs: $('codex-tabs'),
      codexGrid: $('codex-grid'),
      btnCodexMenu: $('btn-codex-menu'),
      closeCodexBtn: $('close-codex'),
      closeTrainBtn: $('close-train'),
      closeShopBtn: $('close-shop'),
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
    this.ui.btnHeroesMenu.addEventListener('click', () => { this.audio.play('click'); this.openHeroTrain(); });
    this.ui.btnShopMenu.addEventListener('click', () => { this.audio.play('click'); this.openShop(); });
    this.ui.btnCodexMenu.addEventListener('click', () => { this.audio.play('click'); this.openCodex(); });
    this.ui.closeTrainBtn.addEventListener('click', () => { this.audio.play('click'); this.closeHeroTrain(); });
    this.ui.closeShopBtn.addEventListener('click', () => { this.audio.play('click'); this.closeShop(); });
    this.ui.closeCodexBtn.addEventListener('click', () => { this.audio.play('click'); this.closeCodex(); });
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
        if (this.buildingCell) this.buildTowerAtCell(btn.dataset.type, this.buildingCell);
      });
    });
    this.ui.itemBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.play('click');
        this.selectItem(btn.dataset.item);
      });
    });
    this.ui.skillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.play('click');
        this.selectSkill(btn.dataset.skill);
      });
    });

    this.updateUI();
    this.updateTowerButtons();
    this.updateItemUI();
    this.updateSkillUI();
    this.updateStaminaUI();
    this.ui.audioBtn.textContent = this.audio.isMuted() ? '🔇' : '🔊';
  }

  showMainMenu() {
    this.gameStarted = false;
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
      const unlocked = true;
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
    const stamina = this.getStamina();
    if (stamina.value < this.staminaCost) {
      this.showToast(`体力不足（需要 ${this.staminaCost} 点，当前 ${stamina.value} 点）`);
      return;
    }
    this.spendStamina(this.staminaCost);
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
    this.heroSelected = false;
    this.heroManager.setSelected(false);
    this.frameLevel();
    this.startCameraIntro();
    this.audio.startMusic(LEVEL_CONFIGS[levelIndex].chapter);
    this.audio.play('waveStart');

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
    this.buildingCell = null;
    this.selectedTowerType = null;
    this.heroSelected = false;
    this.selectedItem = null;
    this.items = { bomb: 1, medkit: 1, goldbag: 1, freezerune: 1, totem: 1 };
    this.selectedSkill = null;
    this.skills = Object.assign({ arrowRain: 0, fireball: 0, healWave: 0, timeWarp: 0, goldRain: 0 }, this.progress.shopSkills || {});
    this.bossWarnings.forEach(w => this.scene.remove(w.mesh));
    this.bossWarnings = [];
    this.hideRange();
    this.hideBuildPreview();

    this.map.reset(this.currentLevel);
    this.towerManager.reset();
    this.monsterManager.reset(this.map.paths);
    this.waveManager.loadLevel(this.currentLevel);
    this.updateSkyForChapter();
    resetWeather(this.weather, this);

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
    this.updateSkillUI();
    this.updateStaminaUI();
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
    const coins = win ? 20 + stars * 10 + (firstClear ? 50 : 0) : 5 + this.waveNum;
    return { goldReward, exp, coins, firstClear, noDamage };
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
    this.progress.coins += rewards.coins;
    saveProgress(this.progress);

    const hasNext = this.currentLevel + 1 < LEVEL_CONFIGS.length;
    this.ui.gameOverTitle.textContent = '🎉 胜利！';
    this.ui.gameOverStars.style.display = 'flex';
    this.ui.gameOverStars.innerHTML = [0, 1, 2].map(i =>
      `<span class="star ${i < stars ? 'on' : ''}">★</span>`).join('');
    this.ui.gameOverStats.innerHTML = `击杀: ${this.totalKills} | 剩余生命: ${this.baseHP} | 星级: ${stars}<br>金币奖励: ${rewards.goldReward} | 局外金币: +${rewards.coins} | 英雄经验: +${rewards.exp}${rewards.firstClear ? ' | 首通 +200' : ''}${rewards.noDamage ? ' | 无伤 +100' : ''}`;
    this.ui.resultNextBtn.style.display = hasNext ? 'inline-block' : 'none';
    this.ui.gameOverPanel.style.display = 'flex';
    document.getElementById('game-container').classList.add('in-menu');
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
    this.progress.coins += rewards.coins;
    saveProgress(this.progress);

    this.ui.gameOverTitle.textContent = '💀 失败';
    this.ui.gameOverStars.style.display = 'none';
    this.ui.gameOverStats.innerHTML = `击杀: ${this.totalKills} | 波次: ${this.waveNum}<br>基础奖励: ${rewards.goldReward}G | 局外金币: +${rewards.coins} | 英雄经验: +${rewards.exp}`;
    this.ui.resultNextBtn.style.display = 'none';
    this.ui.gameOverPanel.style.display = 'flex';
    document.getElementById('game-container').classList.add('in-menu');
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

  createHitEffect(pos, color) {
    const mesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.07, 0),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    mesh.position.copy(pos);
    mesh.position.y += 0.5;
    this.scene.add(mesh);
    let life = 0.2;
    const tick = () => {
      life -= 0.016;
      if (life <= 0) { this.scene.remove(mesh); return; }
      mesh.scale.multiplyScalar(1.16);
      mesh.material.opacity = Math.max(0, life * 5);
      requestAnimationFrame(tick);
    };
    tick();
  }

  createDeathEffect(pos, color) {
    const parts = [];
    for (let i = 0; i < 6; i++) {
      const p = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.06, 0.06),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      p.position.copy(pos).add(new THREE.Vector3(
        (Math.random() - 0.5) * 0.22,
        0.4 + Math.random() * 0.3,
        (Math.random() - 0.5) * 0.22
      ));
      this.scene.add(p);
      parts.push({
        mesh: p,
        vx: (Math.random() - 0.5) * 1.4,
        vy: 0.8 + Math.random() * 1.2,
        vz: (Math.random() - 0.5) * 1.4,
        life: 0.55
      });
    }
    const tick = () => {
      let alive = false;
      for (const part of parts) {
        part.life -= 0.016;
        if (part.life <= 0) { this.scene.remove(part.mesh); continue; }
        alive = true;
        part.mesh.position.x += part.vx * 0.016;
        part.mesh.position.y += part.vy * 0.016;
        part.vy -= 5 * 0.016;
        part.mesh.material.opacity = Math.max(0, part.life / 0.55);
        part.mesh.rotation.x += 0.2;
        part.mesh.rotation.z += 0.15;
      }
      if (alive) requestAnimationFrame(tick);
    };
    tick();
  }

  createMuzzleFlash(pos, color) {
    const mesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.1, 0),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    mesh.position.copy(pos);
    this.scene.add(mesh);
    let life = 0.1;
    const tick = () => {
      life -= 0.016;
      if (life <= 0) { this.scene.remove(mesh); return; }
      mesh.scale.multiplyScalar(1.22);
      mesh.material.opacity = Math.max(0, life * 10);
      requestAnimationFrame(tick);
    };
    tick();
  }

  createInstantCastEffect(pos, color) {
    const parts = [];
    for (let i = 0; i < 5; i++) {
      const p = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.045, 0),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      p.position.copy(pos);
      this.scene.add(p);
      const ang = Math.random() * Math.PI * 2;
      parts.push({
        mesh: p,
        dir: new THREE.Vector3(Math.cos(ang), 0.35 + Math.random() * 0.4, Math.sin(ang)),
        life: 0.3
      });
    }
    const tick = () => {
      let alive = false;
      for (const part of parts) {
        part.life -= 0.016;
        if (part.life <= 0) { this.scene.remove(part.mesh); continue; }
        alive = true;
        part.mesh.position.add(part.dir.clone().multiplyScalar(0.016));
        part.dir.y -= 0.6 * 0.016;
        part.mesh.scale.setScalar(1 + (0.3 - part.life) * 2);
        part.mesh.material.opacity = Math.max(0, part.life / 0.3);
      }
      if (alive) requestAnimationFrame(tick);
    };
    tick();
  }

  selectTowerType(type) {
    const btn = document.querySelector(`.tower-btn[data-type="${type}"]`);
    if (!btn) return;
    this.heroSelected = false;
    this.heroManager.setSelected(false);
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected');
      this.selectedTowerType = null;
      this.hideBuildPreview();
      this.hideRange();
    } else {
      this.ui.towerBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      this.selectedTowerType = type;
      this.hideBuildPanel();
      this.hideTowerInfo();
    }
  }

  buildTowerAtCell(type, cell) {
    const defs = this.towerManager.towerDefs;
    const def = defs[type];
    if (!def) return;
    const cost = def.levels[0].cost;
    if (this.gold < cost) {
      this.showMessage('金币不足！', 1500);
      this.audio.play('click');
      return;
    }
    if (!this.map.isPlaceableCell(cell.x, cell.z)) {
      this.showMessage('这里不能建造防御塔', 1200);
      return;
    }
    const success = this.towerManager.placeTower(cell, type);
    if (success) {
      this.hideBuildPanel();
      this.audio.play('build');
      this.updateUI();
      this.updateTowerButtons();
      this.showRangeAt(this.map.getCellCenterWorld(cell.x, cell.z), def.levels[0].range, '#6ee7ff');
    }
  }

  showBuildPanel(cell) {
    this.buildingCell = { x: cell.x, z: cell.z };
    this.hideTowerInfo();
    this.ui.towerBuildPanel.style.display = 'flex';
    this.ui.buildSpotLabel.textContent = `建造位置 (${cell.x}, ${cell.z})`;
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
    this.showRangeAt(this.map.getCellCenterWorld(cell.x, cell.z), 2.5, '#a8b8d8');
  }

  hideBuildPanel() {
    this.buildingCell = null;
    this.ui.towerBuildPanel.style.display = 'none';
    if (!this.selectedTowerType) this.hideRange();
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
    this.hideRange();
  }

  upgradeTower() {
    const tower = this.towerManager.selectedTower;
    if (!tower) return;
    const success = this.towerManager.upgradeTower(tower.cell);
    if (success) {
      const info = this.towerManager.showTowerMenu(tower.cell);
      if (info) {
        this.showTowerInfo(info);
        this.showRangeAt(info.pos, info.levelDef.range, '#ffd66e');
      }
      this.updateUI();
      this.updateTowerButtons();
    }
  }

  sellTower() {
    const tower = this.towerManager.selectedTower;
    if (!tower) return;
    this.towerManager.sellTower(tower.cell);
    this.hideTowerInfo();
    this.updateUI();
    this.updateTowerButtons();
  }

  useHeroSkill() {
    if (!this.hero || this.gameOver) return;
    this.heroManager.useHeroSkill(this.heroManager.activeHeroIndex);
    this.updateHeroUI();
  }

  switchHero(index) {
    if (!this.heroManager.heroes[index]) return;
    this.heroManager.activeHeroIndex = index;
    this.heroManager.moveTarget = null;
    this.heroManager.path = [];
    this.heroSelected = false;
    this.heroManager.setSelected(false);
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
      const cell = this.map.getCellFromWorld(point);
      if (!this.map.isPlaceableCell(cell.x, cell.z)) {
        this.showMessage('这里不能放置图腾', 1400);
        return;
      }
      if (this.towerManager.getTowerAtCell(cell.x, cell.z)) {
        this.showMessage('这里已经有防御塔', 1400);
        return;
      }
      this.towerManager.addTemporaryTower('arrow', cell, 2, 15);
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

  selectSkill(id) {
    if (this.skills[id] <= 0) return;
    const def = SKILL_DEFS[id];
    if (!def.target) {
      this.useSkill(id);
      return;
    }
    this.selectedSkill = this.selectedSkill === id ? null : id;
    this.updateSkillUI();
    if (this.selectedSkill) this.showMessage(`${def.name}：点击战场使用`, 1600);
  }

  useSkill(id) {
    if (this.skills[id] <= 0) return;
    if (id === 'healWave') {
      this.baseHP = Math.min(this.baseMaxHP, this.baseHP + 10);
      this.showMessage('治疗波：基地生命+10', 1400);
      this.audio.play('item');
    } else if (id === 'timeWarp') {
      for (const m of this.monsterManager.monsters) this.monsterManager.applySlow(m, 0.6, 5, { magic: true });
      this.showMessage('时间缓速：全场减速60%', 1400);
      this.audio.play('freeze');
    } else if (id === 'goldRain') {
      this.gold += 200;
      this.showMessage('金币雨：+200G', 1400);
      this.audio.play('coin');
    }
    this.skills[id]--;
    this.updateUI();
    this.updateSkillUI();
  }

  useSkillAt(id, point) {
    if (this.skills[id] <= 0) return;
    const mm = this.monsterManager;
    if (id === 'arrowRain') {
      let hits = 0;
      for (const m of mm.monsters) {
        if (m.dead) continue;
        if (point.distanceTo(m.mesh.position) <= 3) {
          mm.damageMonster(m, 150, 'physical');
          hits++;
        }
      }
      this.spawnExplosion(point);
      this.audio.play('cannon_fire');
      this.showMessage(`箭雨命中 ${hits} 只怪物`, 1400);
      this.skills[id]--;
    } else if (id === 'fireball') {
      let hits = 0;
      for (const m of mm.monsters) {
        if (m.dead) continue;
        if (point.distanceTo(m.mesh.position) <= 1.6) {
          mm.damageMonster(m, 250, 'magic');
          hits++;
        }
      }
      this.spawnExplosion(point);
      this.audio.play('heroSkill');
      this.showMessage(`火球术命中 ${hits} 只怪物`, 1400);
      this.skills[id]--;
    }
    this.updateUI();
    this.updateSkillUI();
  }

  updateSkillUI() {
    this.ui.skillBtns.forEach(btn => {
      const id = btn.dataset.skill;
      const count = this.skills[id] || 0;
      const def = SKILL_DEFS[id];
      const countEl = btn.querySelector('.skill-count');
      if (countEl) countEl.textContent = `×${count}`;
      btn.title = `${def.name}：${def.desc}`;
      btn.classList.toggle('selected', this.selectedSkill === id);
      btn.classList.toggle('disabled', count <= 0);
    });
  }

  buySkill(id) {
    const def = SKILL_DEFS[id];
    if (!def) return;
    if (this.progress.coins < def.price) {
      this.showToast('局外金币不足');
      return;
    }
    this.progress.coins -= def.price;
    this.progress.shopSkills[id] = (this.progress.shopSkills[id] || 0) + 1;
    saveProgress(this.progress);
    this.audio.play('coin');
    this.renderShop();
  }

  upgradeHero(id) {
    const level = this.progress.heroLevels[id] || 1;
    if (level >= 30) {
      this.showToast('英雄已达满级');
      return;
    }
    const cost = 30 + level * 20;
    if (this.progress.coins < cost) {
      this.showToast('局外金币不足');
      return;
    }
    this.progress.coins -= cost;
    this.progress.heroLevels[id] = level + 1;
    saveProgress(this.progress);
    this.audio.play('upgrade');
    this.renderHeroTrain();
  }

  renderHeroTrain() {
    const list = this.ui.heroTrainList;
    list.innerHTML = '';
    const heroMeta = HERO_META.map(m => ({
      ...m,
      unlocked: m.id === 'ranger' || this.progress.unlocked >= 3
    }));
    for (const meta of heroMeta) {
      const level = this.progress.heroLevels[meta.id] || 1;
      const cost = level >= 30 ? 0 : 30 + level * 20;
      const baseDmg = meta.id === 'ranger' ? 20 : 25;
      const baseSpd = meta.id === 'ranger' ? 3.0 : 2.5;
      const dmg = Math.round(baseDmg * (1 + (level - 1) * 0.02));
      const spd = baseSpd * (1 + (level - 1) * 0.01);
      const card = document.createElement('div');
      card.className = 'train-card' + (meta.unlocked ? '' : ' locked');
      card.innerHTML = `
        <img class="train-portrait" src="textures/portraits/${meta.portrait}" alt="${meta.name}">
        <div class="train-name">${meta.name}</div>
        <div class="train-level">Lv.${level}</div>
        <div class="train-stat">攻击 ${dmg} · 移速 ${spd.toFixed(2)}</div>
        <div class="train-stat">${meta.skill}</div>
        <button class="train-upgrade" ${meta.unlocked && level < 30 ? '' : 'disabled'}>${level >= 30 ? '满级' : `升级 ${cost} 金币`}</button>
      `;
      if (meta.unlocked && level < 30) {
        card.querySelector('.train-upgrade').addEventListener('click', () => this.upgradeHero(meta.id));
      } else if (!meta.unlocked) {
        card.querySelector('.train-upgrade').textContent = '未解锁（完成3003）';
      }
      list.appendChild(card);
    }
    this.ui.trainCoins.textContent = `局外金币：${this.progress.coins}`;
  }

  renderShop() {
    const list = this.ui.shopList;
    list.innerHTML = '';
    for (const [id, def] of Object.entries(SKILL_DEFS)) {
      const owned = this.progress.shopSkills[id] || 0;
      const row = document.createElement('div');
      row.className = 'shop-row';
      row.innerHTML = `
        <span class="shop-icon">${def.icon}</span>
        <div class="shop-info">
          <div class="shop-name">${def.name}</div>
          <div class="shop-desc">${def.desc}</div>
        </div>
        <span class="shop-owned">×${owned}</span>
        <button class="shop-buy" data-skill="${id}" ${this.progress.coins >= def.price ? '' : 'disabled'}>${def.price} 金币</button>
      `;
      row.querySelector('.shop-buy').addEventListener('click', () => this.buySkill(id));
      list.appendChild(row);
    }
    this.ui.shopCoins.textContent = `局外金币：${this.progress.coins}`;
  }

  openHeroTrain() {
    this.ui.heroTrainPanel.style.display = 'flex';
    this.renderHeroTrain();
  }

  closeHeroTrain() {
    this.ui.heroTrainPanel.style.display = 'none';
  }

  openShop() {
    this.ui.shopPanel.style.display = 'flex';
    this.renderShop();
  }

  closeShop() {
    this.ui.shopPanel.style.display = 'none';
  }

  openCodex() {
    this.ui.codexPanel.style.display = 'flex';
    this.renderCodex();
  }

  closeCodex() {
    this.ui.codexPanel.style.display = 'none';
  }

  renderCodex() {
    this.ui.codexTabs.innerHTML = '';
    const tabs = [
      { id: 'heroes', name: '英雄' },
      { id: 'towers', name: '防御塔' },
      { id: 'monsters', name: '怪物' }
    ];
    for (const tab of tabs) {
      const btn = document.createElement('button');
      btn.className = 'chapter-tab';
      btn.textContent = tab.name;
      btn.dataset.tab = tab.id;
      btn.addEventListener('click', () => {
        this.audio.play('click');
        this.showCodexTab(tab.id);
      });
      this.ui.codexTabs.appendChild(btn);
    }
    this.showCodexTab('heroes');
  }

  showCodexTab(tabId) {
    this.ui.codexTabs.querySelectorAll('.chapter-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tabId);
    });
    const grid = this.ui.codexGrid;
    grid.innerHTML = '';
    const addCard = (portrait, name, desc, locked = false) => {
      const card = document.createElement('div');
      card.className = 'codex-card' + (locked ? ' locked' : '');
      card.innerHTML = `
        <img class="codex-portrait" src="textures/portraits/${portrait}" alt="${name}">
        <div class="codex-name">${name}</div>
        <div class="codex-desc">${desc}</div>
      `;
      grid.appendChild(card);
    };

    if (tabId === 'heroes') {
      for (const meta of HERO_META) {
        const unlocked = meta.id === 'ranger' || this.progress.unlocked >= 3;
        addCard(
          meta.portrait,
          meta.name,
          `${meta.skill}${unlocked ? '' : ' · 完成 3003 解锁'}`,
          !unlocked
        );
      }
    } else if (tabId === 'towers') {
      const defs = this.towerManager.towerDefs || {};
      for (const [type, def] of Object.entries(defs)) {
        addCard(
          `tower_${type}.png`,
          def.name,
          `${def.levels[0].desc} · 满级：${def.levels[2].desc}`
        );
      }
    } else {
      for (const [key, def] of Object.entries(MONSTER_DEFS)) {
        const tags = [
          def.isBoss ? 'BOSS' : (def.flying ? '飞行' : (def.undead ? '亡灵' : '地面')),
          def.isBoss ? '' : (def.size[0] >= 0.4 ? '精英' : '')
        ].filter(Boolean).join(' · ');
        addCard(
          MONSTER_PORTRAITS[key] || 'monster_goblin.png',
          def.name,
          `${def.hp} HP · ${def.speed} 速 · ${def.reward} 金币${tags ? ' · ' + tags : ''}`
        );
      }
    }
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

  showToast(text, duration = 2200) {
    let el = document.getElementById('ui-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'ui-toast';
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.style.display = 'block';
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => { el.style.display = 'none'; }, duration);
  }

  getStamina() {
    const s = this.progress.stamina;
    const now = Date.now();
    const regenMs = 5 * 60 * 1000;
    const gained = Math.floor((now - s.lastRegen) / regenMs);
    if (gained > 0 && s.value < s.max) {
      s.value = Math.min(s.max, s.value + gained);
      s.lastRegen += gained * regenMs;
      saveProgress(this.progress);
    }
    return s;
  }

  spendStamina(cost) {
    const s = this.getStamina();
    if (s.value < cost) return false;
    s.value -= cost;
    saveProgress(this.progress);
    this.updateStaminaUI();
    return true;
  }

  updateStaminaUI() {
    const s = this.getStamina();
    const el = this.ui.staminaEl;
    if (el) el.textContent = `${s.value}/${s.max}`;
    return s;
  }

  updateUI() {
    this.ui.goldEl.textContent = this.gold;
    this.ui.baseHPEl.textContent = this.baseHP;
    this.ui.waveEl.textContent = `${this.waveNum}/${this.maxWaves}`;
    this.ui.killsEl.textContent = this.totalKills;
    this.updateStaminaUI();

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

  showRangeAt(pos, radius, color = '#6ee7ff') {
    this.hideRange();
    const group = new THREE.Group();
    const circle = new THREE.Mesh(
      new THREE.CircleGeometry(radius, 48),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.14, side: THREE.DoubleSide, depthWrite: false })
    );
    circle.rotation.x = -Math.PI / 2;
    circle.position.y = 0.045;
    group.add(circle);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(radius - 0.06, radius, 48),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.065;
    group.add(ring);
    group.position.copy(pos);
    this.scene.add(group);
    this.rangeIndicator = group;
  }

  hideRange() {
    if (this.rangeIndicator) {
      this.scene.remove(this.rangeIndicator);
      this.rangeIndicator = null;
    }
  }

  showBuildPreview(cell, range, ok) {
    this.hideBuildPreview();
    const group = new THREE.Group();
    const pos = this.map.getCellCenterWorld(cell.x, cell.z);
    const color = ok ? '#6ee7ff' : '#ff6b6b';
    const cellMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 0.9),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.38, side: THREE.DoubleSide, depthWrite: false })
    );
    cellMesh.rotation.x = -Math.PI / 2;
    cellMesh.position.y = 0.055;
    group.add(cellMesh);
    const circle = new THREE.Mesh(
      new THREE.CircleGeometry(range, 48),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false })
    );
    circle.rotation.x = -Math.PI / 2;
    circle.position.y = 0.05;
    group.add(circle);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(range - 0.05, range, 48),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.07;
    group.add(ring);
    group.position.copy(pos);
    this.scene.add(group);
    this.buildPreview = group;
  }

  hideBuildPreview() {
    if (this.buildPreview) {
      this.scene.remove(this.buildPreview);
      this.buildPreview = null;
    }
  }

  updateBuildPreviewFromMouse() {
    if (!this.selectedTowerType || !this.gameStarted || this.gameOver) {
      this.hideBuildPreview();
      return;
    }
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObject(this.map.groundMesh);
    if (!hits.length) return;
    const cell = this.map.getCellFromWorld(hits[0].point);
    const def = this.towerManager.towerDefs[this.selectedTowerType];
    if (!def) return;
    const ok = this.map.isPlaceableCell(cell.x, cell.z) &&
      !this.towerManager.getTowerAtCell(cell.x, cell.z) &&
      this.gold >= def.levels[0].cost;
    this.showBuildPreview(cell, def.levels[0].range, ok);
  }

  onClick(e) {
    if (this._suppressClick) return;
    if (this.gameOver || !this.gameStarted) return;

    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // 点击英雄：选中/取消选中，随后点击地图移动
    const heroMeshes = this.heroManager.heroes.map(h => h.mesh);
    const heroHits = this.raycaster.intersectObjects(heroMeshes, true);
    if (heroHits.length > 0) {
      this.heroSelected = !this.heroSelected;
      this.heroManager.setSelected(this.heroSelected);
      this.showMessage(this.heroSelected ? '已选中英雄，点击地图移动' : '已取消选中英雄', 1400);
      this.hideBuildPanel();
      return;
    }

    const towerMeshes = this.towerManager.towers.map(t => t.mesh);
    const towerHits = this.raycaster.intersectObjects(towerMeshes, true);
    if (towerHits.length > 0) {
      let obj = towerHits[0].object;
      while (obj) {
        const tower = this.towerManager.towers.find(t => t.mesh === obj);
        if (tower) {
          this.heroSelected = false;
          this.heroManager.setSelected(false);
          this.hideBuildPanel();
          this.selectedItem = null;
          this.updateItemUI();
          const info = this.towerManager.showTowerMenu(tower.cell);
          if (info) {
            this.showTowerInfo(info);
            this.showRangeAt(info.pos, info.levelDef.range, '#6ee7ff');
          }
          return;
        }
        obj = obj.parent;
      }
    }

    if (this.map.groundMesh) {
      const groundHits = this.raycaster.intersectObject(this.map.groundMesh);
      if (groundHits.length > 0) {
        const point = groundHits[0].point;
        const cell = this.map.getCellFromWorld(point);

        if (this.selectedItem) {
          const id = this.selectedItem;
          this.selectedItem = null;
          this.updateItemUI();
          this.useItemAt(id, point);
          return;
        }

        if (this.selectedSkill) {
          const id = this.selectedSkill;
          this.selectedSkill = null;
          this.updateSkillUI();
          this.useSkillAt(id, point);
          return;
        }

        const towerAt = this.towerManager.getTowerAtCell(cell.x, cell.z);
        if (towerAt) {
          this.heroSelected = false;
          this.heroManager.setSelected(false);
          this.hideBuildPanel();
          this.selectedItem = null;
          this.updateItemUI();
          const info = this.towerManager.showTowerMenu(towerAt.cell);
          if (info) {
            this.showTowerInfo(info);
            this.showRangeAt(info.pos, info.levelDef.range, '#6ee7ff');
          }
          return;
        }

        if (this.heroSelected) {
          this.heroManager.moveHeroTo(point);
          return;
        }

        if (this.selectedTowerType) {
          this.buildingCell = cell;
          this.buildTowerAtCell(this.selectedTowerType, cell);
          this.hideBuildPreview();
          return;
        }

        if (this.map.isPlaceableCell(cell.x, cell.z)) {
          this.showBuildPanel(cell);
          return;
        }
      }
    }

    this.hideBuildPanel();
    this.hideTowerInfo();
  }

  onRightClick(e) {
    if (this.gameOver || !this.gameStarted) return;
    e.preventDefault();
    this.selectedTowerType = null;
    this.heroSelected = false;
    this.heroManager.setSelected(false);
    this.selectedItem = null;
    document.querySelectorAll('.tower-btn').forEach(b => b.classList.remove('selected'));
    this.hideBuildPreview();
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
          this.towerManager.sellTower(tower.cell);
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
    this.updateBuildPreviewFromMouse();
  }

  onKeyDown(e) {
    if (this.gameOver && e.key === 'Enter') {
      this.startLevel(this.currentLevel);
      return;
    }
    if (!this.gameStarted) return;
    switch (e.key) {
      case 'Escape': this.hideBuildPanel(); this.hideTowerInfo(); this.selectedTowerType = null; this.selectedItem = null; this.heroSelected = false; this.heroManager.setSelected(false); this.hideBuildPreview(); this.hideRange(); break;
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
    this.updateStaminaUI();

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

    if (this.cameraIntro) this.cameraIntro.elapsed += rawDt;
    this.worldTime += rawDt;
    this.worldGroup.position.y = Math.sin(this.worldTime * 0.35) * 0.07;
    this.updateCamera();
    if (this.sky) updateSky(this.sky, rawDt);
    if (this.map && this.map.water) updateWater(this.map.water, rawDt);
    if (this.map && this.map.ambient) updateAmbient(this.map.ambient, rawDt);
    if (this.weather) updateWeather(this.weather, dt, this);
    this.renderSceneWithEdges();
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
