/**
 * Archetype Set Store
 * Manages which archetype set is currently active with localStorage persistence
 */
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'archetypeSetId';
const DEFAULT_SET = 'generic';

function createArchetypeSetStore() {
	// Load from localStorage if available
	const stored = browser ? localStorage.getItem(STORAGE_KEY) : null;
	const initial = stored ?? DEFAULT_SET;

	const { subscribe, set, update } = writable(initial);

	return {
		subscribe,
		set: (value: string) => {
			if (browser) {
				localStorage.setItem(STORAGE_KEY, value);
			}
			set(value);
		},
		reset: () => {
			if (browser) {
				localStorage.setItem(STORAGE_KEY, DEFAULT_SET);
			}
			set(DEFAULT_SET);
		}
	};
}

export const archetypeSetId = createArchetypeSetStore();
