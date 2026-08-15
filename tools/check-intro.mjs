import { createRequire } from 'module';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5010/';

const errors = [];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(BASE_URL, { waitUntil: 'load', timeout: 15000 });
await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });
await page.click('#btn-start-menu');
await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
await page.locator('.level-card').first().click();
await page.waitForTimeout(120);

const early = await page.evaluate(() => {
  const g = window.game;
  const dist = g.camera.position.distanceTo(g.camTarget);
  return {
    introActive: !!g.cameraIntro,
    cameraDist: +dist.toFixed(1),
    startRadius: g.cameraIntro ? +g.cameraIntro.startRadius.toFixed(1) : null,
    startFov: g.cameraIntro ? +g.cameraIntro.startFov.toFixed(1) : null
  };
});
await page.screenshot({ path: 'tools/shot-intro-far.png' });
await page.waitForTimeout(3200);

const late = await page.evaluate(() => {
  const g = window.game;
  const dist = g.camera.position.distanceTo(g.camTarget);
  return {
    introActive: !!g.cameraIntro,
    cameraDist: +dist.toFixed(1),
    normalRadius: +g.camRadius.toFixed(1),
    fov: +g.camera.fov.toFixed(1),
    worldBob: +g.worldGroup.position.y.toFixed(2)
  };
});
await page.screenshot({ path: 'tools/shot-intro-near.png' });

console.log(JSON.stringify({ early, late, errors }, null, 2));
await browser.close();
process.exit(errors.length || !early.introActive || late.introActive ? 1 : 0);
