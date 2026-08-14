/**
 * 音频系统 - Web Audio API 程序化合成
 * 对应 PRD 第十四章：SFX 事件 + 章节自适应音乐 + 音量设置
 */
const SAVE_KEY = 'hdw_audio_settings';

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (s && typeof s.master === 'number') return s;
  } catch (e) { /* ignore */ }
  return { master: 0.8, music: 0.45, sfx: 0.85, muted: false };
}

function tone(ctx, dest, opts) {
  const { freq = 440, endFreq = null, type = 'square', dur = 0.15, vol = 0.2, delay = 0, attack = 0.005 } = opts;
  const t0 = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(Math.max(20, freq), t0);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t0 + dur);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(vol, t0 + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(dest);
  osc.start(t0);
  osc.stop(t0 + dur + 0.05);
}

function noise(ctx, dest, opts) {
  const { dur = 0.2, vol = 0.2, delay = 0, filterFreq = 1200, type = 'lowpass' } = opts;
  const t0 = ctx.currentTime + delay;
  const size = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = type;
  filter.frequency.value = filterFreq;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, t0);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(filter).connect(gain).connect(dest);
  src.start(t0);
}

export class AudioManager {
  constructor() {
    this.settings = loadSettings();
    this.ctx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.musicTimer = null;
    this.musicStep = 0;
    this.musicIntensity = 0;
    this.chapter = 1;
    this.paused = false;
  }

  ensureCtx() {
    if (this.ctx) return this.ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    this.ctx = new AC();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.settings.muted ? 0 : this.settings.master;
    this.masterGain.connect(this.ctx.destination);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = this.settings.sfx;
    this.sfxGain.connect(this.masterGain);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = this.settings.music;
    this.musicGain.connect(this.masterGain);
    return this.ctx;
  }

  unlock() {
    const ctx = this.ensureCtx();
    if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
  }

  setVolume(type, value) {
    this.settings[type] = value;
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.settings)); } catch (e) { /* ignore */ }
    this.ensureCtx();
    if (!this.ctx) return;
    if (type === 'master') this.masterGain.gain.value = this.settings.muted ? 0 : value;
    else if (type === 'sfx') this.sfxGain.gain.value = value;
    else if (type === 'music') this.musicGain.gain.value = value;
  }

  setMuted(muted) {
    this.settings.muted = muted;
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.settings)); } catch (e) { /* ignore */ }
    if (this.masterGain) this.masterGain.gain.value = muted ? 0 : this.settings.master;
  }

  isMuted() {
    return !!this.settings.muted;
  }

  play(name) {
    if (!this.ctx || this.settings.muted) return;
    const sfx = this.sfxGain;
    const t = (o) => tone(this.ctx, sfx, o);
    const n = (o) => noise(this.ctx, sfx, o);
    switch (name) {
      case 'click': t({ freq: 660, dur: 0.06, vol: 0.10 }); break;
      case 'hover': t({ freq: 880, dur: 0.04, vol: 0.05 }); break;
      case 'build': n({ dur: 0.18, vol: 0.25, filterFreq: 260 }); t({ freq: 180, endFreq: 240, dur: 0.16, vol: 0.22 }); break;
      case 'upgrade': t({ freq: 330, dur: 0.09, vol: 0.16 }); t({ freq: 440, dur: 0.09, vol: 0.16, delay: 0.08 }); t({ freq: 660, dur: 0.14, vol: 0.18, delay: 0.16 }); break;
      case 'sell': t({ freq: 440, endFreq: 220, dur: 0.22, vol: 0.18 }); break;
      case 'coin': t({ freq: 1245, type: 'sine', dur: 0.08, vol: 0.14 }); t({ freq: 1661, type: 'sine', dur: 0.12, vol: 0.14, delay: 0.06 }); break;
      case 'shoot_arrow': n({ dur: 0.08, vol: 0.14, filterFreq: 3200, type: 'bandpass' }); break;
      case 'cast_magic': t({ freq: 700, endFreq: 1300, type: 'sine', dur: 0.2, vol: 0.16 }); break;
      case 'cannon_fire': n({ dur: 0.3, vol: 0.42, filterFreq: 220 }); t({ freq: 80, endFreq: 50, dur: 0.28, vol: 0.35 }); break;
      case 'ice_cast': t({ freq: 1900, type: 'sine', dur: 0.12, vol: 0.16 }); t({ freq: 2400, type: 'sine', dur: 0.1, vol: 0.1, delay: 0.05 }); break;
      case 'hit': n({ dur: 0.08, vol: 0.22, filterFreq: 900 }); break;
      case 'death': t({ freq: 320, endFreq: 80, type: 'sawtooth', dur: 0.3, vol: 0.2 }); break;
      case 'baseHit': n({ dur: 0.4, vol: 0.55, filterFreq: 130 }); t({ freq: 65, endFreq: 40, dur: 0.4, vol: 0.4 }); break;
      case 'waveStart': t({ freq: 523, type: 'triangle', dur: 0.12, vol: 0.16 }); t({ freq: 659, type: 'triangle', dur: 0.12, vol: 0.16, delay: 0.1 }); t({ freq: 784, type: 'triangle', dur: 0.2, vol: 0.18, delay: 0.2 }); break;
      case 'waveComplete': t({ freq: 784, type: 'triangle', dur: 0.1, vol: 0.15 }); t({ freq: 1046, type: 'triangle', dur: 0.18, vol: 0.16, delay: 0.09 }); break;
      case 'bossWarn': t({ freq: 330, type: 'square', dur: 0.14, vol: 0.14 }); t({ freq: 330, type: 'square', dur: 0.14, vol: 0.14, delay: 0.22 }); t({ freq: 440, type: 'square', dur: 0.2, vol: 0.16, delay: 0.44 }); break;
      case 'heroSkill': t({ freq: 400, endFreq: 1400, type: 'sine', dur: 0.5, vol: 0.22 }); n({ dur: 0.35, vol: 0.16, filterFreq: 2400, type: 'bandpass' }); break;
      case 'victory': [523, 659, 784, 1046, 1318].forEach((f, i) => t({ freq: f, type: 'triangle', dur: 0.2, vol: 0.2, delay: i * 0.12 })); break;
      case 'defeat': t({ freq: 400, endFreq: 140, type: 'sawtooth', dur: 0.8, vol: 0.2 }); break;
      case 'item': t({ freq: 932, type: 'triangle', dur: 0.12, vol: 0.18 }); t({ freq: 1245, type: 'sine', dur: 0.14, vol: 0.16, delay: 0.08 }); break;
      case 'freeze': t({ freq: 2300, type: 'sine', dur: 0.14, vol: 0.15 }); t({ freq: 1800, type: 'sine', dur: 0.2, vol: 0.1, delay: 0.06 }); break;
      default: break;
    }
  }

  startMusic(chapter) {
    this.chapter = chapter || 1;
    this.musicStep = 0;
    this.stopMusic();
    if (this.musicTimer) return;
    const ctx = this.ensureCtx();
    if (!ctx) return;
    this.musicTimer = setInterval(() => this.scheduleMusicStep(), 240);
  }

  scheduleMusicStep() {
    if (!this.ctx || this.paused || this.settings.muted) return;
    const scales = {
      1: [261.63, 329.63, 392, 523.25],
      2: [220, 261.63, 329.63, 440],
      3: [164.81, 220, 261.63, 329.63]
    };
    const scale = scales[this.chapter] || scales[1];
    const step = this.musicStep++;
    const note = scale[step % scale.length];
    const octave = Math.floor(step / scale.length) % 2 === 0 ? 1 : 2;
    const baseVol = 0.05 + this.musicIntensity * 0.09;
    tone(this.ctx, this.musicGain, { freq: note * octave, type: 'triangle', dur: 0.22, vol: baseVol });
    if (this.musicIntensity > 0.35 && step % 2 === 0) {
      tone(this.ctx, this.musicGain, { freq: note * 0.5, type: 'sine', dur: 0.4, vol: baseVol * 0.6 });
    }
    if (this.musicIntensity > 0.7 && step % 4 === 0) {
      noise(this.ctx, this.musicGain, { dur: 0.12, vol: 0.05, filterFreq: 600 });
    }
  }

  setMusicIntensity(value) {
    this.musicIntensity = Math.max(0, Math.min(1, value));
  }

  setPaused(paused) {
    this.paused = paused;
  }

  stopMusic() {
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }
}
