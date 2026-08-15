import { createRequire } from 'module';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:5010/';
const OUT_DIR = resolve('textures/anim/generated');

const MONSTER_TYPES = [
  'goblin', 'orc', 'wolfRider', 'shadow', 'gargoyle', 'troll', 'orcCaptain', 'fastGoblin',
  'skeleton', 'zombie', 'lich', 'stoneGolem', 'ghost', 'skeletonKing',
  'demonImp', 'hellHound', 'heavyDemon', 'wyvern', 'hellGolem'
];

const errors = [];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(BASE_URL, { waitUntil: 'load', timeout: 15000 });
await page.waitForFunction(() => !!window.__spritegen, null, { timeout: 8000 });

const sheets = await page.evaluate((types) => {
  const sg = window.__spritegen;
  const out = [];
  const pack = (id, spec) => {
    for (const mode of ['run', 'hit']) {
      const sheet = sg.generateCharacterSheet(spec, mode);
      const data = sheet.texture.image.data;
      const canvas = document.createElement('canvas');
      canvas.width = sheet.texture.image.width || 384;
      canvas.height = sheet.texture.image.height || 192;
      const ctx = canvas.getContext('2d');
      const imageData = new ImageData(new Uint8ClampedArray(data.buffer), canvas.width, canvas.height);
      ctx.putImageData(imageData, 0, 0);
      out.push({ id, mode, base64: canvas.toDataURL('image/png') });
    }
  };
  pack('H2001_KingdomRanger', sg.heroSpriteSpec(0));
  pack('H2002_CourtMage', sg.heroSpriteSpec(1));
  for (const type of types) {
    const def = window.game.monsterManager.getMonsterDef(type);
    if (def) pack(`M_${type}`, sg.specForMonster(def));
  }
  return out;
}, MONSTER_TYPES);

mkdirSync(OUT_DIR, { recursive: true });
for (const sheet of sheets) {
  const path = resolve(OUT_DIR, `${sheet.id}_${sheet.mode}.png`);
  const base64 = sheet.base64.split(',')[1];
  writeFileSync(path, Buffer.from(base64, 'base64'));
}

console.log(JSON.stringify({ count: sheets.length, dir: OUT_DIR, errors }, null, 2));
await browser.close();
process.exit(errors.length ? 1 : 0);
