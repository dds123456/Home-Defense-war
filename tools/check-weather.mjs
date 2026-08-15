import { createRequire } from 'module';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5010/';

const errors = [];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(BASE_URL, { waitUntil: 'load', timeout: 15000 });
await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });
await page.click('#btn-start-menu');
await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
await page.locator('.level-card').first().click();
await page.waitForTimeout(1200);

const before = await page.evaluate(() => {
  const w = window.game.weather;
  w.timer = 0.01;
  w.active = false;
  return { exists: !!w, active: w.active, rainVisible: w.lines.visible };
});
await page.waitForTimeout(700);

const rain = await page.evaluate(() => {
  const w = window.game.weather;
  w.lightningTimer = 0.01;
  return { active: w.active, rainVisible: w.lines.visible, drops: w.drops.length, mapW: w.mapW, mapH: w.mapH };
});
await page.waitForTimeout(450);
const lightning = await page.evaluate(() => {
  const w = window.game.weather;
  return { boltVisible: w.bolt.visible, lightVisible: w.light.visible, thunderPending: w.thunderTimer > 0 };
});
await page.screenshot({ path: 'tools/shot-rain.png' });

console.log(JSON.stringify({ before, rain, lightning, errors }, null, 2));
await browser.close();
process.exit(errors.length || !rain.active || !rain.rainVisible ? 1 : 0);
