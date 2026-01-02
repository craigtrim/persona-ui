/**
 * Sound system using Web Audio API for synthesized UI sounds
 * All sounds are generated client-side - no audio files or external dependencies
 */
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Audio context singleton
let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
	if (!browser) return null;
	if (!audioContext) {
		audioContext = new AudioContext();
	}
	return audioContext;
}

// Sound definitions - frequency, duration, type configurations
const SOUNDS = {
	sliderTick: { freq: 800, duration: 0.03, type: 'square' as OscillatorType, volume: 0.08 },
	facetTap: { freq: 1200, duration: 0.012, type: 'square' as OscillatorType, volume: 0.06 },
	cardFlip: { freq: 300, duration: 0.08, type: 'sawtooth' as OscillatorType, volume: 0.1, freqEnd: 150 },
	emojiPop: { freq: 500, duration: 0.06, type: 'sine' as OscillatorType, volume: 0.1, freqEnd: 700 },
	archetypeSelect: { freq: 440, duration: 0.15, type: 'sine' as OscillatorType, volume: 0.12, freqEnd: 660 },
	perfectMatch: { freq: 523, duration: 0.3, type: 'sine' as OscillatorType, volume: 0.15, freqEnd: 784 }
} as const;

type SoundName = keyof typeof SOUNDS;

function playTone(name: SoundName) {
	const ctx = getAudioContext();
	if (!ctx) return;

	// Resume context if suspended (browser autoplay policy)
	if (ctx.state === 'suspended') {
		ctx.resume();
	}

	const sound = SOUNDS[name];
	const now = ctx.currentTime;

	// Create oscillator
	const osc = ctx.createOscillator();
	osc.type = sound.type;
	osc.frequency.setValueAtTime(sound.freq, now);
	if ('freqEnd' in sound && sound.freqEnd) {
		osc.frequency.exponentialRampToValueAtTime(sound.freqEnd, now + sound.duration);
	}

	// Create gain for volume envelope
	const gain = ctx.createGain();
	gain.gain.setValueAtTime(sound.volume, now);
	gain.gain.exponentialRampToValueAtTime(0.001, now + sound.duration);

	// Connect and play
	osc.connect(gain);
	gain.connect(ctx.destination);
	osc.start(now);
	osc.stop(now + sound.duration + 0.01);
}

// Sound enabled state (persisted to localStorage)
function createSoundEnabledStore() {
	const stored = browser ? localStorage.getItem('soundEnabled') : null;
	const initial = stored !== null ? stored === 'true' : true;

	const { subscribe, set, update } = writable(initial);

	return {
		subscribe,
		set: (value: boolean) => {
			if (browser) {
				localStorage.setItem('soundEnabled', String(value));
			}
			set(value);
		},
		toggle: () => {
			update((v) => {
				const newVal = !v;
				if (browser) {
					localStorage.setItem('soundEnabled', String(newVal));
				}
				return newVal;
			});
		}
	};
}

export const soundEnabled = createSoundEnabledStore();

let currentEnabled = true;
soundEnabled.subscribe((v) => (currentEnabled = v));

function playSoundIfEnabled(name: SoundName) {
	if (currentEnabled && browser) {
		playTone(name);
	}
}

export const sfx = {
	sliderTick: () => playSoundIfEnabled('sliderTick'),
	facetTap: () => playSoundIfEnabled('facetTap'),
	cardFlip: () => playSoundIfEnabled('cardFlip'),
	emojiPop: () => playSoundIfEnabled('emojiPop'),
	archetypeSelect: () => playSoundIfEnabled('archetypeSelect'),
	perfectMatch: () => playSoundIfEnabled('perfectMatch')
};

// For backwards compatibility
export const sounds = sfx;
export function preloadSounds() {
	// No-op - Web Audio API doesn't need preloading
}
export function playSound(name: SoundName) {
	playTone(name);
}
