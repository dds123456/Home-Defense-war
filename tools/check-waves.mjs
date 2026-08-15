import { createRequire } from 'module';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5010/';

const errors = [];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(BASE_URL, { waitUntil: 'load', timeout: 15000 });
await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });

const report = await page.evaluate(() => {
  const g = window.game;
  const levels = [];
  for (let i = 0; i < 8; i++) {
    g.waveManager.loadLevel(i);
    const waves = g.waveManager.waves.map((w, idx) => ({
      wave: idx + 1,
      types: w.enemies.map((e) => e.type),
      counts: w.enemies.map((e) => e.count),
      value: w.value,
      target: w.target,
      isBoss: w.isBoss
    }));
    const typeSet = new Set(waves.flatMap((w) => w.types));
    const signatures = new Set(waves.map((w) => w.types.join('|') + ':' + w.counts.join('x')));
    const values = waves.map((w) => w.value);
    const nonFlat = values.every((v, idx) => idx === 0 || v > values[idx - 1] * 0.82);
    levels.push({
      index: i,
      waveCount: waves.length,
      distinctTypes: typeSet.size,
      uniqueWaves: signatures.size,
      valueRange: [values[0], values[values.length - 1]],
      nonFlat,
      firstWave: waves[0],
      bossWave: waves[waves.length - 1]
    });
  }
  return levels;
});

const failed = report.filter((r) => r.distinctTypes < 5 || r.uniqueWaves !== r.waveCount || !r.nonFlat);
console.log(JSON.stringify({ levels: report, failed, errors }, null, 2));
await browser.close();
process.exit(failed.length || errors.length ? 1 : 0);
