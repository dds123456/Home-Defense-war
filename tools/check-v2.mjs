import { createRequire } from 'module';

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

await page.click('#btn-codex-menu');
await page.waitForSelector('#codex-panel', { state: 'visible', timeout: 5000 });
const codexCards = await page.locator('.codex-card').count();
const codexImg = await page.evaluate(() => {
  const img = document.querySelector('.codex-card img');
  return img ? { src: img.src, ok: img.naturalWidth > 0 } : null;
});
await page.click('.chapter-tab[data-tab="monsters"]');
const monsterCards = await page.locator('.codex-card').count();
await page.click('#close-codex');

await page.click('#btn-heroes-menu');
await page.waitForSelector('#hero-train-panel', { state: 'visible', timeout: 5000 });
const trainPortrait = await page.evaluate(() => {
  const img = document.querySelector('.train-portrait');
  return img ? { src: img.src, ok: img.naturalWidth > 0 } : null;
});
await page.click('#close-train');

await page.click('#btn-start-menu');
await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
await page.locator('.level-card').first().click();
await page.waitForTimeout(1500);
await page.screenshot({ path: 'tools/shot-v2b.png' });
const inGame = await page.evaluate(() => {
  const g = window.game;
  return {
    edgePass: !!(g.edgeRT && g.edgeQuad),
    normalPass: !!(g.normalRT && g.normalMat),
    water: !!(g.map.water && g.map.water.material),
    mountain: !!g.map.mapGroup.children.find((c) => c.userData && c.userData.isMountain),
    cloudLayer: !!(g.map.ambient && g.map.ambient.clouds && g.map.ambient.clouds.children.length),
    ambientItems: g.map.ambient ? g.map.ambient.items.length : 0,
    sky: !!g.sky,
    outlineCount: (() => {
      let n = 0;
      g.scene.traverse((o) => { if (o.userData && o.userData.isOutline) n++; });
      return n;
    })()
  };
});

console.log(JSON.stringify({ codexCards, codexImg, monsterCards, trainPortrait, inGame, errors }, null, 2));
await browser.close();
process.exit(errors.length ? 1 : 0);
