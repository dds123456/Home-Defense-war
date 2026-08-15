import { createRequire } from 'module';
import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE = process.env.PORTRAIT_BASE || 'http://127.0.0.1:5020/';
const OUT_DIR = resolve('textures/portraits');
const MAX = 256;

const MAP = {
  hero_ranger: 'H2001_王国游侠_KingdomRanger.png',
  hero_mage: 'H2002_宫廷法师_CourtMage.png',
  tower_arrow: 'T1001_箭塔_ArrowTower.png',
  tower_magic: 'T1004_魔法塔_MagicTower.png',
  tower_cannon: 'T1007_炮塔_CannonTower.png',
  tower_ice: 'T1010_冰霜塔_FrostTower.png',
  monster_goblin: 'M4001_哥布林_Goblin.png',
  monster_fastGoblin: 'M4001_哥布林_Goblin.png',
  monster_orc: 'M4002_兽人小兵_OrcGrunt.png',
  monster_wolfRider: 'M4003_狼骑兵_WolfRider.png',
  monster_skeleton: 'M4004_骷髅战士_SkeletonWarrior.png',
  monster_shadow: 'M4005_暗影刺客_ShadowAssassin.png',
  monster_gargoyle: 'M4006_石像鬼_Gargoyle.png',
  monster_troll: 'M4007_巨魔_Troll.png',
  monster_orcCaptain: 'M4008_兽人队长_OrcCaptain.png',
  monster_zombie: 'M4009_僵尸_Zombie.png',
  monster_lich: 'M4010_巫妖学徒_LichApprentice.png',
  monster_stoneGolem: 'M4011_石傀儡_StoneGolem.png',
  monster_skeletonKing: 'M4012_骷髅王_SkeletonKing.png',
  monster_demonImp: 'M4013_恶魔小鬼_DemonImp.png',
  monster_hellHound: 'M4014_地狱犬_HellHound.png',
  monster_heavyDemon: 'M4015_重甲恶魔_HeavyArmoredDemon.png',
  monster_hellGolem: 'M4016_地狱魔像_HellGolem.png',
  monster_ghost: 'M4017_幽灵_Wraith.png',
  monster_wyvern: 'M4019_双足飞龙_Wyvern.png'
};

const errors = [];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
page.on('pageerror', (e) => errors.push(String(e)));

await page.goto(BASE, { waitUntil: 'load', timeout: 15000 });

const result = await page.evaluate(async ({ map, max }) => {
  const load = (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
  const out = [];
  for (const [name, file] of Object.entries(map)) {
    try {
      const img = await load(file);
      const scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      const w = Math.max(1, Math.round(img.naturalWidth * scale));
      const h = Math.max(1, Math.round(img.naturalHeight * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      out.push({ name, base64: canvas.toDataURL('image/png') });
    } catch (err) {
      out.push({ name, error: String(err) });
    }
  }
  return out;
}, { map: MAP, max: MAX });

mkdirSync(OUT_DIR, { recursive: true });
let ok = 0;
for (const asset of result) {
  if (!asset.base64) {
    errors.push(`${asset.name}: ${asset.error || 'missing'}`);
    continue;
  }
  const base64 = asset.base64.split(',')[1];
  writeFileSync(resolve(OUT_DIR, `${asset.name}.png`), Buffer.from(base64, 'base64'));
  ok++;
}

console.log(JSON.stringify({ count: ok, dir: OUT_DIR, errors }, null, 2));
await browser.close();
process.exit(errors.length ? 1 : 0);
