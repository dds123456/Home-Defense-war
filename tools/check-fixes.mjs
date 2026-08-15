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
const chapterCounts = [];
for (const ch of [1, 2, 3]) {
  await page.locator('.chapter-tab').nth(ch - 1).click();
  await page.waitForTimeout(120);
  const count = await page.locator('.level-card').count();
  const locked = await page.locator('.level-card.locked').count();
  chapterCounts.push({ ch, count, locked });
}

await page.locator('.level-card').first().click();
await page.waitForTimeout(1500);
const result = await page.evaluate(() => {
  const g = window.game;
  const spawn = (type) => {
    const m = g.monsterManager.spawnMonster(type, 0, 1);
    m.pathProgress = 2;
    m.mesh.position.copy(g.monsterManager.getPositionOnPath(m.pathPoints, 2));
    return m;
  };
  const goblin = spawn('goblin');
  const orc = spawn('orc');
  const feetY = (m) => {
    const sprite = m.spriteAnim && m.spriteAnim.sprite;
    if (!sprite) return null;
    const centerY = m.mesh.position.y + m.mesh.scale.y * sprite.position.y;
    const worldH = m.mesh.scale.y * sprite.scale.y;
    const feetFrac = m.spriteAnim.sheetType === 'godot' ? 0.842 : 1;
    return centerY + (0.5 - feetFrac) * worldH;
  };
  return {
    pathY: goblin.pathPoints[0].y,
    goblinFeet: feetY(goblin),
    orcFeet: feetY(orc),
    heroFeet: (() => {
      const h = g.heroManager.getActiveHero();
      const sprite = h.spriteAnim.sprite;
      return h.mesh.position.y + sprite.position.y - sprite.scale.y / 2;
    })()
  };
});
await page.screenshot({ path: 'tools/shot-fixes.png' });

console.log(JSON.stringify({ chapterCounts, result, errors }, null, 2));
await browser.close();
process.exit(errors.length ? 1 : 0);
