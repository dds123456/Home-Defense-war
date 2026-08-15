import { createRequire } from 'module';
import { statSync } from 'fs';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5010/';

const errors = [];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(BASE_URL, { waitUntil: 'load', timeout: 15000 });
await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });
await page.click('#btn-start-menu');
await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
await page.locator('.level-card').first().click();
await page.waitForTimeout(1800);

const stats = await page.evaluate(() => {
  const g = window.game;
  const sky = !!g.sky;
  const outlineCount = (() => {
    let n = 0;
    g.scene.traverse((o) => { if (o.userData && o.userData.isOutline) n++; });
    return n;
  })();
  const tower = g.towerManager.placeTower({ x: 14, z: 12 }, 'arrow');
  const m = g.monsterManager.spawnMonster('orc', 0, 1);
  m.pathProgress = 4;
  m.mesh.position.copy(g.monsterManager.getPositionOnPath(m.pathPoints, 4));
  return { sky, outlineCount, tower: !!tower, monster: !!m, chapter: g.map.chapter };
});

await page.waitForTimeout(800);
await page.screenshot({ path: 'tools/shot-v2.png' });
const shotSize = statSync('tools/shot-v2.png').size;

console.log(JSON.stringify({ stats, shotSize, errors }, null, 2));
await browser.close();
process.exit(errors.length ? 1 : 0);
