// Web Audio API synthesized soothing garden soundscape
// Generates gentle water fountain trickles, soft garden breeze, and ambient chimes

class GardenAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private timerId: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Master gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.35, this.ctx.currentTime + 2);
    this.masterGain.connect(this.ctx.destination);

    // 1. Water fountain stream (Pink noise through lowpass filter)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.11;
      b6 = white * 0.115926;
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Filter to sound like soft water trickle / breeze
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(650, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

    const waterGain = this.ctx.createGain();
    waterGain.gain.setValueAtTime(0.25, this.ctx.currentTime);

    this.noiseNode.connect(filter);
    filter.connect(waterGain);
    waterGain.connect(this.masterGain);
    this.noiseNode.start();

    // 2. Periodic gentle chime note
    const playChime = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
      const freq = notes[Math.floor(Math.random() * notes.length)];

      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      noteGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 0.1);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.5);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 3.6);

      const nextTime = 4000 + Math.random() * 6000;
      this.timerId = window.setTimeout(playChime, nextTime);
    };

    this.isPlaying = true;
    this.timerId = window.setTimeout(playChime, 2500);
  }

  public stop() {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => {
        if (this.noiseNode) {
          try {
            this.noiseNode.stop();
            this.noiseNode.disconnect();
          } catch {
            // ignore
          }
          this.noiseNode = null;
        }
      }, 1000);
    }
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.isPlaying = false;
  }
}

export const gardenAudio = new GardenAudioEngine();
