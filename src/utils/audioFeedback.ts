// Subtle Web Audio API tactile click sound generator
// Simulates a satisfying soft mechanical/silicone toy button click

let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

let isAudioMuted = false

export function toggleAudioMute(): boolean {
  isAudioMuted = !isAudioMuted
  if (!isAudioMuted) {
    playClayClick('up')
  }
  return isAudioMuted
}

export function isMuted(): boolean {
  return isAudioMuted
}

export function playClayClick(type: 'down' | 'up' | 'pop' = 'down') {
  if (isAudioMuted) return

  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'

    const now = ctx.currentTime

    if (type === 'down') {
      // Soft tactile drop click (600Hz down to 240Hz, snappy 40ms)
      osc.frequency.setValueAtTime(540, now)
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.045)
      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(now)
      osc.stop(now + 0.05)
    } else if (type === 'pop') {
      // Cheerful subtle pop (400Hz up to 880Hz)
      osc.frequency.setValueAtTime(380, now)
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.06)
      gain.gain.setValueAtTime(0.09, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(now)
      osc.stop(now + 0.065)
    } else {
      // Soft release click
      osc.frequency.setValueAtTime(320, now)
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.035)
      gain.gain.setValueAtTime(0.05, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(now)
      osc.stop(now + 0.04)
    }
  } catch {
    // Graceful fallback if Web Audio is blocked or unsupported
  }
}
