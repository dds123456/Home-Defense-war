import { createRequire } from 'module';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5000/';
const mode = process.argv[2] || 'basic';

const errors = [];

function attachListeners(page) {
  page.on('pageerror', (err) => {
    const s = String(err);
    if (!s.includes('favicon')) errors.push(s);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error' && !msg.text().includes('favicon')) errors.push(`console: ${msg.text()}`);
  });
}

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
attachListeners(page);

await page.goto(BASE_URL, { waitUntil: 'networkidle' });
await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });

async function enterFirstLevel() {
  await page.click('#btn-start-menu');
  await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
  await page.locator('.level-card').first().click();
  await page.waitForTimeout(800);
}

if (mode === 'basic') {
  try {
    await page.click('#btn-start-menu');
    await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
    const levelCards = await page.locator('.level-card').count();
    await page.locator('.level-card').first().click();
    await page.waitForTimeout(1200);
    const hud = await page.evaluate(() => ({
      gold: document.getElementById('gold')?.textContent,
      hp: document.getElementById('base-hp')?.textContent,
      wave: document.getElementById('wave-num')?.textContent,
      heroVisible: document.getElementById('hero-panel')?.style.display !== 'none'
    }));
    await page.screenshot({ path: 'tools/shot-basic.png' });
    console.log(JSON.stringify({ mode, levelCards, hud, errors }, null, 2));
  } catch (err) {
    await page.screenshot({ path: 'tools/shot-fail.png' });
    console.log(JSON.stringify({ mode, fail: String(err), errors }, null, 2));
    await browser.close();
    process.exit(1);
  }
} else if (mode === 'prd') {
  try {
    await enterFirstLevel();
    const state = await page.evaluate(() => {
      const g = window.game;
      return {
        prep: g.prepPhase,
        wave: g.waveNum,
        maxWaves: g.maxWaves,
        gold: g.gold,
        nextLabel: document.getElementById('next-wave-btn')?.textContent
      };
    });

    // 建塔：面板方式
    await page.evaluate(() => {
      const g = window.game;
      let cell = null;
      for (let x = 0; x < g.map.gridW && !cell; x++) {
        for (let z = 0; z < g.map.gridH && !cell; z++) {
          if (g.map.isPlaceableCell(x, z)) cell = { x, z };
        }
      }
      g.showBuildPanel(cell);
      document.querySelector('.build-tower-btn[data-type="arrow"]').click();
    });
    const afterBuild = await page.evaluate(() => ({
      gold: window.game.gold,
      towers: window.game.towerManager.towers.length,
      rangeVisible: !!window.game.rangeIndicator
    }));

    // 开始第一波
    await page.evaluate(() => window.game.requestNextWave());
    await page.waitForTimeout(3200);
    const afterWave = await page.evaluate(() => ({
      wave: window.game.waveNum,
      alive: window.game.monsterManager.monsters.length,
      waveActive: window.game.waveManager.waveActive
    }));

    // 道具：急救包
    const hpBefore = await page.evaluate(() => { window.game.baseHP = 10; return window.game.baseHP; });
    await page.evaluate(() => window.game.useItem('medkit'));
    const hpAfter = await page.evaluate(() => window.game.baseHP);

    // 暂停
    await page.click('#pause-btn');
    const paused = await page.evaluate(() => ({
      paused: window.game.gamePaused,
      overlay: document.getElementById('pause-overlay').style.display
    }));
    await page.click('#btn-resume');

    await page.screenshot({ path: 'tools/shot-prd.png' });
    console.log(JSON.stringify({ mode, state, afterBuild, afterWave, hp: { before: hpBefore, after: hpAfter }, paused, errors }, null, 2));
  } catch (err) {
    await page.screenshot({ path: 'tools/shot-prd-fail.png' });
    console.log(JSON.stringify({ mode, fail: String(err), errors }, null, 2));
    await browser.close();
    process.exit(1);
  }
} else if (mode === 'boss') {
  try {
    await enterFirstLevel();
    await page.evaluate(() => {
      const g = window.game;
      g.startLevel(2); // 3003 BOSS 关
      const pathCells = [];
      g.map.paths.forEach(p => p.cells.forEach(c => pathCells.push(c)));
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      let cell = null;
      for (const c of pathCells) {
        for (const [dx, dz] of dirs) {
          const x = c.x + dx, z = c.z + dz;
          if (g.map.isPlaceableCell(x, z) && !cell) cell = { x, z };
        }
      }
      g.showBuildPanel(cell);
      document.querySelector('.build-tower-btn[data-type="arrow"]').click();
      g.waveManager.currentWave = g.waveManager.totalWaves - 1;
      g.requestNextWave();
    });
    // 等 BOSS 出场（开局延迟 3 秒）
    await page.waitForTimeout(4500);
    const before = await page.evaluate(() => ({
      boss: window.game.monsterManager.monsters.filter(m => m.isBoss).length,
      alive: window.game.monsterManager.monsters.length,
      wave: window.game.waveNum
    }));
    // 立即触发 BOSS 技能
    await page.evaluate(() => {
      const boss = window.game.monsterManager.monsters.find(m => m.isBoss);
      if (boss) boss.bossSkillTimer = 0.05;
    });
    await page.waitForTimeout(1300);
    const during = await page.evaluate(() => ({
      warnings: window.game.bossWarnings.length,
      stun: window.game.towerManager.towers.some(t => t.stunDuration > 0)
    }));
    await page.waitForTimeout(2500);
    const after = await page.evaluate(() => ({
      warnings: window.game.bossWarnings.length,
      stun: window.game.towerManager.towers.some(t => t.stunDuration > 0)
    }));
    await page.screenshot({ path: 'tools/shot-boss.png' });
    console.log(JSON.stringify({ mode, before, during, after, errors }, null, 2));
  } catch (err) {
    await page.screenshot({ path: 'tools/shot-prd-fail.png' });
    console.log(JSON.stringify({ mode, fail: String(err), errors }, null, 2));
    await browser.close();
    process.exit(1);
  }
} else if (mode === 'file') {
  try {
    const fileUrl = 'file:///C:/Users/dingd/Desktop/%E6%9C%80%E8%BF%91%E7%9A%84%E5%B7%A5%E4%BD%9C/%E9%A1%B9%E7%9B%AE/Home%20Defense%20war/projects/index.html';
    await page.goto(fileUrl, { waitUntil: 'load', timeout: 15000 });
    await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });
    await page.click('#btn-start-menu');
    await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
    await page.locator('.level-card').first().click();
    await page.waitForTimeout(800);
    const state = await page.evaluate(() => ({
      wave: window.game ? window.game.waveNum : -1,
      prep: window.game ? window.game.prepPhase : false,
      fatal: document.getElementById('fatal-overlay')?.style.display,
      gold: document.getElementById('gold')?.textContent
    }));
    await page.screenshot({ path: 'tools/shot-file.png' });
    console.log(JSON.stringify({ mode, state, errors }, null, 2));
  } catch (err) {
    await page.screenshot({ path: 'tools/shot-file-fail.png' });
    console.log(JSON.stringify({ mode, fail: String(err), errors }, null, 2));
    await browser.close();
    process.exit(1);
  }
} else if (mode === 'mech') {
  try {
    await enterFirstLevel();
    await page.evaluate(() => {
      const g = window.game;
      g.gold = 9999;
      g.updateTowerButtons();

      const pathCells = [];
      g.map.paths.forEach(p => p.cells.forEach(c => pathCells.push(c)));
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      const cells = [];
      for (const c of pathCells) {
        for (const [dx, dz] of dirs) {
          const x = c.x + dx, z = c.z + dz;
          if (g.map.isPlaceableCell(x, z) && !cells.some(q => q.x === x && q.z === z)) cells.push({ x, z });
        }
      }

      g.showBuildPanel(cells[0]);
      document.querySelector('.build-tower-btn[data-type="arrow"]').click();
      g.towerManager.upgradeTower(cells[0]);

      g.showBuildPanel(cells[1]);
      document.querySelector('.build-tower-btn[data-type="cannon"]').click();
      g.towerManager.upgradeTower(cells[1]);
      g.towerManager.upgradeTower(cells[1]);

      g.showBuildPanel(cells[2]);
      document.querySelector('.build-tower-btn[data-type="ice"]').click();
      g.towerManager.upgradeTower(cells[2]);
      g.towerManager.upgradeTower(cells[2]);

      window.__freezeSeen = false;
      const mm = g.monsterManager;
      const origFreeze = mm.applyFreeze.bind(mm);
      mm.applyFreeze = (m, d) => { window.__freezeSeen = true; origFreeze(m, d); };

      const near = (tower) => {
        const pts = mm.paths[0].points;
        let best = 0, bd = 1e9;
        for (let i = 0; i < pts.length; i++) {
          const d = pts[i].distanceTo(tower.pos);
          if (d < bd) { bd = d; best = i; }
        }
        return Math.max(0.2, best + 0.2);
      };
      const t0 = g.towerManager.towers.find(t => t.type === 'arrow');
      const t1 = g.towerManager.towers.find(t => t.type === 'cannon');
      const t2 = g.towerManager.towers.find(t => t.type === 'ice');
      const place = (tower, offset = 0) => {
        const p = near(tower) + offset;
        const m = mm.spawnMonster('heavyDemon', 0, 1);
        m.pathProgress = p;
        m.speed = 0;
        m.mesh.position.copy(mm.getPositionOnPath(mm.paths[0].points, p));
        return m;
      };
      place(t0);
      place(t0, 0.6);
      place(t1);
      place(t2);
    });
    await page.waitForTimeout(5000);
    const result = await page.evaluate(() => {
      const g = window.game;
      const ms = g.monsterManager.monsters;
      const ts = g.towerManager.towers;
      return {
        arrowLevel: ts.find(t => t.type === 'arrow')?.level,
        cannonLevel: ts.find(t => t.type === 'cannon')?.level,
        iceLevel: ts.find(t => t.type === 'ice')?.level,
        demonDamaged: ms.filter(m => m.type === 'heavyDemon' && m.hp < m.maxHp).length,
        demonCount: ms.filter(m => m.type === 'heavyDemon').length,
        cannonBurn: ms.some(m => m.type === 'heavyDemon' && m.burnStacks.length > 0),
        cannonShred: ms.some(m => m.type === 'heavyDemon' && m.armorShred > 0),
        iceFreezeSeen: !!window.__freezeSeen,
        alive: ms.length
      };
    });
    await page.screenshot({ path: 'tools/shot-mech.png' });
    console.log(JSON.stringify({ mode, result, errors }, null, 2));
  } catch (err) {
    await page.screenshot({ path: 'tools/shot-mech-fail.png' });
    console.log(JSON.stringify({ mode, fail: String(err), errors }, null, 2));
    await browser.close();
    process.exit(1);
  }
} else if (mode === 'meta') {
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });

    // 英雄培养面板
    await page.click('#btn-heroes-menu');
    await page.waitForSelector('#hero-train-panel', { state: 'visible', timeout: 5000 });
    const train = await page.evaluate(() => ({
      visible: document.getElementById('hero-train-panel').style.display !== 'none',
      cards: document.querySelectorAll('.train-card').length,
      coins: document.getElementById('train-coins').textContent
    }));
    await page.click('#close-train');

    // 商店购买
    await page.click('#btn-shop-menu');
    await page.waitForSelector('#shop-panel', { state: 'visible', timeout: 5000 });
    const shop = await page.evaluate(() => {
      const g = window.game;
      g.progress.coins = 500;
      g.renderShop();
      document.querySelector('.shop-buy[data-skill="arrowRain"]').click();
      return {
        rows: document.querySelectorAll('.shop-row').length,
        owned: g.progress.shopSkills.arrowRain,
        coins: g.progress.coins
      };
    });
    await page.click('#close-shop');

    // 体力不足拦截
    await page.evaluate(() => {
      const g = window.game;
      g.progress.stamina.value = 3;
      g.progress.stamina.max = 20;
      g.progress.stamina.lastRegen = Date.now();
      g.updateStaminaUI();
    });
    await page.click('#btn-start-menu');
    await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
    await page.locator('.level-card').first().click();
    await page.waitForTimeout(300);
    const blocked = await page.evaluate(() => ({
      started: window.game.gameStarted,
      toast: document.getElementById('ui-toast')?.style.display
    }));

    // 体力充足后进入战斗
    await page.evaluate(() => {
      const g = window.game;
      g.progress.stamina.value = 20;
      g.progress.stamina.max = 20;
      g.progress.stamina.lastRegen = Date.now();
      g.updateStaminaUI();
    });
    await page.locator('.level-card').first().click();
    await page.waitForTimeout(900);
    const battle = await page.evaluate(() => {
      const g = window.game;
      return {
        started: g.gameStarted,
        stamina: g.progress.stamina.value,
        heroSelected: g.heroSelected
      };
    });

    // 英雄选中与移动
    const heroMove = await page.evaluate(() => {
      const g = window.game;
      g.heroManager.setSelected(true);
      const ringVisible = g.heroManager.getActiveHero().ring.visible;
      g.heroManager.moveHeroTo(g.map.getCellCenterWorld(8, 8));
      return { ringVisible, path: g.heroManager.path.length };
    });

    // 商店技能在战斗内使用
    const skillUse = await page.evaluate(() => {
      const g = window.game;
      g.baseHP = 5;
      g.skills.healWave = 1;
      g.updateSkillUI();
      document.querySelector('.skill-btn[data-skill="healWave"]').click();
      return { hp: g.baseHP, left: g.skills.healWave };
    });

    // 怪物比例与肢体动画结构
    const monster = await page.evaluate(() => {
      const g = window.game;
      const m = g.monsterManager.spawnMonster('goblin', 0, 1);
      const limbs = m.mesh.userData.limbs || {};
      return {
        scale: +(m.mesh.scale.y || 0).toFixed(3),
        hasLimbs: !!(limbs.leftLeg && limbs.rightLeg && limbs.leftArm && limbs.rightArm),
        targetHeight: m.visualScale
      };
    });

    await page.screenshot({ path: 'tools/shot-meta.png' });
    console.log(JSON.stringify({ mode, train, shop, blocked, battle, heroMove, skillUse, monster, errors }, null, 2));
  } catch (err) {
    await page.screenshot({ path: 'tools/shot-meta-fail.png' });
    console.log(JSON.stringify({ mode, fail: String(err), errors }, null, 2));
    await browser.close();
    process.exit(1);
  }
}

await browser.close();
process.exit(errors.length ? 1 : 0);
