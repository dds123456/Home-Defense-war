/**
 * 新手引导 - 仅首次进入3001触发，5步状态机
 * PRD 第七章：建造箭塔 → 开启第一波 → 升级 → 魔法塔 → 英雄技能
 */
const DONE_KEY = 'hdw_tutorial_done';

export class Tutorial {
  constructor(game) {
    this.game = game;
    this.active = false;
    this.stepIndex = 0;
    this.steps = [
      { id: 'build', text: '点击塔位，建造一座箭塔', canvas: true, action: 'towerBuilt' },
      { id: 'wave', text: '点击按钮，开始抵御怪物进攻', target: '#next-wave-btn', action: 'waveStarted' },
      { id: 'upgrade', text: '点击防御塔，可以升级提升战力', canvas: true, action: 'towerUpgraded', waitForWave: 2 },
      { id: 'magic', text: '飞行怪物需要魔法塔才能攻击', target: '#tower-panel .tower-btn[data-type="magic"]', action: 'magicBuilt', waitForWave: 9 },
      { id: 'skill', text: '点击头像，释放英雄技能', target: '#hero-skill-btn', action: 'heroSkill', waitForWave: 15 }
    ];
  }

  shouldStart(levelIndex) {
    let done = false;
    try { done = !!localStorage.getItem(DONE_KEY); } catch (e) { /* ignore */ }
    return levelIndex === 0 && !done;
  }

  start() {
    this.active = true;
    this.stepIndex = 0;
    this.buildOverlay();
    this.showStep(0);
  }

  buildOverlay() {
    if (document.getElementById('tutorial-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'tutorial-overlay';
    overlay.innerHTML = `
      <div id="tutorial-ring"></div>
      <div id="tutorial-bubble">
        <div id="tutorial-text"></div>
        <button id="tutorial-skip" class="tut-allow">跳过引导</button>
      </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById('tutorial-skip').addEventListener('click', () => this.skip());
  }

  showStep(index) {
    this.stepIndex = index;
    const step = this.steps[index];
    const overlay = document.getElementById('tutorial-overlay');
    if (!overlay || !step) return;

    overlay.style.display = 'block';
    document.body.classList.add('tutorial-lock');

    document.querySelectorAll('.tut-allow').forEach(el => el.classList.remove('tut-allow'));
    if (step.target) {
      const target = document.querySelector(step.target);
      if (target) {
        target.classList.add('tut-allow');
        this.positionRing(target);
      }
    } else {
      const ring = document.getElementById('tutorial-ring');
      ring.style.left = '50%';
      ring.style.top = '48%';
      ring.style.transform = 'translate(-50%, -50%)';
      ring.style.display = 'block';
    }

    document.getElementById('tutorial-text').textContent = step.text;
    if (step.waitForWave) overlay.style.display = 'none';
  }

  positionRing(target) {
    const rect = target.getBoundingClientRect();
    const ring = document.getElementById('tutorial-ring');
    ring.style.left = `${rect.left + rect.width / 2}px`;
    ring.style.top = `${rect.top + rect.height / 2}px`;
    ring.style.transform = 'translate(-50%, -50%)';
    ring.style.display = 'block';
  }

  revealIfReady() {
    const step = this.steps[this.stepIndex];
    if (!step || !step.waitForWave) return;
    const overlay = document.getElementById('tutorial-overlay');
    if (overlay) overlay.style.display = 'block';
    if (step.target) {
      const target = document.querySelector(step.target);
      if (target) this.positionRing(target);
    }
  }

  onEvent(type) {
    if (!this.active) return;
    const step = this.steps[this.stepIndex];
    if (!step) return;
    if (step.action === type) this.advance();
  }

  onWaveComplete(wave) {
    if (!this.active) return;
    const step = this.steps[this.stepIndex];
    if (step && step.waitForWave === wave) this.revealIfReady();
  }

  advance() {
    if (this.stepIndex >= this.steps.length - 1) {
      this.finish();
      return;
    }
    this.showStep(this.stepIndex + 1);
  }

  skip() {
    this.finish();
  }

  hide() {
    this.active = false;
    document.body.classList.remove('tutorial-lock');
    document.querySelectorAll('.tut-allow').forEach(el => el.classList.remove('tut-allow'));
    const overlay = document.getElementById('tutorial-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  finish() {
    try { localStorage.setItem(DONE_KEY, '1'); } catch (e) { /* ignore */ }
    this.hide();
  }
}
