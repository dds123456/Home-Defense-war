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
await page.click('#btn-start-menu');
await page.waitForSelector('#level-select', { state: 'visible', timeout: 5000 });
await page.locator('.level-card').first().click();
await page.waitForTimeout(1600);

await page.evaluate(() => {
  const g = window.game;
  g.towerManager.placeTower({ x: 14, z: 12 }, 'arrow');
  const m = g.monsterManager.spawnMonster('orc', 0, 1);
  m.pathProgress = 4;
  m.mesh.position.copy(g.monsterManager.getPositionOnPath(m.pathPoints, 4));
  g.gamePaused = true;
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'tools/shot-edge-on.png' });

const normalStats = await page.evaluate(() => {
  const g = window.game;
  const rt = g.normalRT;
  const w = rt.width;
  const h = rt.height;
  const buf = new Uint8Array(w * h * 4);
  g.renderer.readRenderTargetPixels(rt, 0, 0, w, h, buf);
  let alphaLow = 0;
  let alphaMid = 0;
  let total = 0;
  let badNormal = 0;
  let edgePixels = 0;
  let depthEdgePixels = 0;
  let normalEdgePixels = 0;
  for (let y = 0; y < h; y += 8) {
    for (let x = 0; x < w; x += 8) {
      const o = (y * w + x) * 4;
      const a = buf[o + 3] / 255;
      total++;
      if (a < 0.1) alphaLow++;
      else if (a < 0.9) alphaMid++;
      const nx = buf[o] / 255 * 2 - 1;
      const ny = buf[o + 1] / 255 * 2 - 1;
      const nz = buf[o + 2] / 255 * 2 - 1;
      const len = Math.hypot(nx, ny, nz);
      if (Math.abs(len - 1) > 0.35) badNormal++;
      const tap = (dx, dy) => {
        const px = Math.min(w - 1, Math.max(0, x + dx * 8));
        const py = Math.min(h - 1, Math.max(0, y + dy * 8));
        const o = (py * w + px) * 4;
        return {
          n: [buf[o] / 255 * 2 - 1, buf[o + 1] / 255 * 2 - 1, buf[o + 2] / 255 * 2 - 1],
          d: buf[o + 3] / 255
        };
      };
      const t = (dx, dy) => tap(dx, dy);
      const tl = t(-1, -1), tc = t(0, -1), tr = t(1, -1);
      const ml = t(-1, 0), mr = t(1, 0);
      const bl = t(-1, 1), bc = t(0, 1), br = t(1, 1);
      const gx = [
        -tl.n[0] + tr.n[0] - 2 * ml.n[0] + 2 * mr.n[0] - bl.n[0] + br.n[0],
        -tl.n[1] + tr.n[1] - 2 * ml.n[1] + 2 * mr.n[1] - bl.n[1] + br.n[1],
        -tl.n[2] + tr.n[2] - 2 * ml.n[2] + 2 * mr.n[2] - bl.n[2] + br.n[2]
      ];
      const gy = [
        -tl.n[0] - 2 * tc.n[0] - tr.n[0] + bl.n[0] + 2 * bc.n[0] + br.n[0],
        -tl.n[1] - 2 * tc.n[1] - tr.n[1] + bl.n[1] + 2 * bc.n[1] + br.n[1],
        -tl.n[2] - 2 * tc.n[2] - tr.n[2] + bl.n[2] + 2 * bc.n[2] + br.n[2]
      ];
      const nEdge = Math.hypot(...gx) + Math.hypot(...gy);
      const dC = tc.d;
      const dEdge = Math.max(
        Math.abs(dC - ml.d),
        Math.abs(dC - mr.d),
        Math.abs(dC - tc.d),
        Math.abs(dC - bc.d)
      );
      const isEdge = nEdge > 0.30 || dEdge > 0.055;
      if (isEdge) edgePixels++;
      if (dEdge > 0.055) depthEdgePixels++;
      if (nEdge > 0.30) normalEdgePixels++;
    }
  }
  return {
    size: [w, h],
    alphaLowPct: +(100 * alphaLow / total).toFixed(1),
    alphaMidPct: +(100 * alphaMid / total).toFixed(1),
    badNormalPct: +(100 * badNormal / total).toFixed(1),
    edgePct: +(100 * edgePixels / total).toFixed(1),
    depthEdgePct: +(100 * depthEdgePixels / total).toFixed(1),
    normalEdgePct: +(100 * normalEdgePixels / total).toFixed(1)
  };
});

await page.evaluate(() => {
  const g = window.game;
  g.renderSceneWithEdges = () => g.renderer.render(g.scene, g.camera);
});
await page.waitForTimeout(400);
await page.screenshot({ path: 'tools/shot-edge-off.png' });

console.log(JSON.stringify({ shots: ['tools/shot-edge-on.png', 'tools/shot-edge-off.png'], normalStats, errors }, null, 2));
await browser.close();
process.exit(errors.length ? 1 : 0);
