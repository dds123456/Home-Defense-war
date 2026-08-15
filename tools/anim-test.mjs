import { createRequire } from 'module';

const require = createRequire('file:///C:/Users/dingd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.js');
const { chromium } = require('playwright-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const fileUrl = process.env.BASE_URL || 'file:///C:/Users/dingd/.codex/worktrees/b3e2/projects/index.html';

const errors = [];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(fileUrl, { waitUntil: 'load', timeout: 15000 });
await page.waitForSelector('#main-menu', { state: 'visible', timeout: 8000 });
await page.click('#btn-start-menu');
await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
await page.locator('.level-card').first().click();
await page.waitForTimeout(1600);

const result = await page.evaluate(async () => {
  const g = window.game;
  await new Promise((r) => setTimeout(r, 800));
  const m = g.monsterManager.spawnMonster('goblin', 0, 1);
  m.pathProgress = 12;
  m.mesh.position.copy(g.monsterManager.getPositionOnPath(m.pathPoints, 12));
  const orc = g.monsterManager.spawnMonster('orc', 0, 1);
  orc.pathProgress = 13;
  orc.mesh.position.copy(g.monsterManager.getPositionOnPath(orc.pathPoints, 13));
  await new Promise((r) => setTimeout(r, 600));
  const hero = g.heroManager.getActiveHero();
  const grassMat = g.map.materials.grass;
  const pathMat = g.map.materials.path;
  const patchMat = g.map.materials.patch;
  const legBefore = hero.limbs ? hero.limbs.leftLeg.rotation.x : 0;
  const heroFrameBefore = hero.spriteAnim ? hero.spriteAnim.frame : -1;
  g.heroManager.moveHeroTo(g.map.getCellCenterWorld(10, 10));
  await new Promise((r) => setTimeout(r, 300));
  const legAfter = hero.limbs ? hero.limbs.leftLeg.rotation.x : 0;
  const heroFrameAfter = hero.spriteAnim ? hero.spriteAnim.frame : -1;
  const paletteStats = (tex) => {
    const src = tex.image && tex.image.data ? tex.image.data : null;
    const data = src || [];
    const colors = new Set();
    const sample = [];
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a === 0) continue;
      const key = `${data[i]},${data[i + 1]},${data[i + 2]}`;
      if (!colors.has(key) && sample.length < 12) sample.push(key);
      colors.add(key);
    }
    return { colors: colors.size, frames: hero.spriteAnim.frames, sample };
  };
  return {
    spriteAttached: !!m.spriteAnim,
    spriteMap: m.spriteAnim && m.spriteAnim.sprite.material.map && m.spriteAnim.sprite.material.map.image
      ? m.spriteAnim.sprite.material.map.image.src.includes('monster_run')
      : false,
    bodyHidden: m.mesh.userData.torsoGroup ? m.mesh.userData.torsoGroup.visible === false : null,
    generatedMonsterSprite: !!orc.spriteAnim && orc.spriteAnim.sheetType === 'canvas',
    generatedMonsterHidden: orc.mesh.userData.torsoGroup ? orc.mesh.userData.torsoGroup.visible === false : null,
    heroSprite: !!hero.spriteAnim && hero.spriteAnim.sheetType === 'canvas',
    heroBodyHidden: hero.bodyGroup ? hero.bodyGroup.visible === false : null,
    heroRunMoves: legAfter !== legBefore || heroFrameAfter !== heroFrameBefore,
    heroSheet: hero.spriteAnim ? paletteStats(hero.spriteAnim.textures.run) : null,
    grassMap: !!(grassMat.map && grassMat.map.image),
    pathMap: !!(pathMat.map && pathMat.map.image),
    patchMap: !!(patchMat && patchMat.map && patchMat.map.image)
  };
});

await page.screenshot({ path: 'tools/shot-anim.png' });
console.log(JSON.stringify({ result, errors }, null, 2));
await browser.close();
process.exit(errors.length ? 1 : 0);
