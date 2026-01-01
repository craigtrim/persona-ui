import { writable, derived } from 'svelte/store';
import facetKeywords from '$lib/data/facet_keywords.json';
import { ARCHETYPES } from '$lib/data/archetypes';

export interface DomainConfig {
	id: string;
	name: string;
	lowLabel: string;
	highLabel: string;
	lowEmoji: string;
	highEmoji: string;
	emojiGradient: Record<number, string>;
	facets: string[];
	colorLow: string;
	colorHigh: string;
	inverted?: boolean; // If true, UI displays inverted (high=good) but API gets original scale
}

export const DOMAINS: DomainConfig[] = [
	{
		id: 'agreeableness',
		name: 'Agreeableness',
		lowLabel: 'Cold',
		highLabel: 'Warm',
		lowEmoji: '🧊',
		highEmoji: '☀️',
		emojiGradient: { 1: '🧊', 2: '❄️', 3: '🌥️', 4: '🌤️', 5: '☀️' },
		facets: ['Compassion', 'Respectfulness', 'Trust'],
		colorLow: '#60a5fa',
		colorHigh: '#fbbf24'
	},
	{
		id: 'conscientiousness',
		name: 'Conscientiousness',
		lowLabel: 'Chaotic',
		highLabel: 'Focused',
		lowEmoji: '🌀',
		highEmoji: '🎯',
		emojiGradient: { 1: '🌀', 2: '😅', 3: '⚖️', 4: '📊', 5: '🎯' },
		facets: ['Organization', 'Productiveness', 'Responsibility'],
		colorLow: '#a78bfa',
		colorHigh: '#34d399'
	},
	{
		id: 'extraversion',
		name: 'Extraversion',
		lowLabel: 'Reserved',
		highLabel: 'Energetic',
		lowEmoji: '🌑',
		highEmoji: '🌕',
		emojiGradient: { 1: '🌑', 2: '🌒', 3: '🌓', 4: '🌔', 5: '🌕' },
		facets: ['Sociability', 'Assertiveness', 'Energy_Level'],
		colorLow: '#6b7280',
		colorHigh: '#f59e0b'
	},
	{
		id: 'negative_emotionality',
		name: 'Emotional Stability',
		lowLabel: 'Anxious',
		highLabel: 'Calm',
		lowEmoji: '😰',
		highEmoji: '😌',
		emojiGradient: { 1: '😰', 2: '😟', 3: '😐', 4: '🙂', 5: '😌' }, // Inverted for display
		facets: ['Anxiety', 'Depression', 'Emotional_Volatility'],
		colorLow: '#f87171',
		colorHigh: '#6ee7b7',
		inverted: true // UI 5 (calm) = API 1 (low negative emotionality)
	},
	{
		id: 'open_mindedness',
		name: 'Open-Mindedness',
		lowLabel: 'Conventional',
		highLabel: 'Creative',
		lowEmoji: '📦',
		highEmoji: '🌈',
		emojiGradient: { 1: '📦', 2: '📐', 3: '🔍', 4: '🎨', 5: '🌈' },
		facets: ['Intellectual_Curiosity', 'Aesthetic_Sensitivity', 'Creative_Imagination'],
		colorLow: '#9ca3af',
		colorHigh: '#c084fc'
	}
];

// Generate random facet scores (1-5) for a domain
function randomFacets(): [number, number, number] {
	return [
		Math.floor(Math.random() * 5) + 1,
		Math.floor(Math.random() * 5) + 1,
		Math.floor(Math.random() * 5) + 1
	];
}

// Convert archetype trait value (1.5, 3, 4.5) to facet scores
// Uses uniform facet values to ensure domain score matches an integer
// This is important because personality summaries are keyed by integer scores
function archetypeTraitToFacets(traitValue: number): [number, number, number] {
	// Map 1.5 -> 2, 3 -> 3, 4.5 -> 4 (rounded to nearest integer)
	const base = Math.round(traitValue);
	// Clamp to valid range
	const value = Math.max(1, Math.min(5, base));
	// All facets same value = integer average
	return [value, value, value];
}

// Initialize with a random archetype
function initializeFromRandomArchetype(): Record<string, [number, number, number]> {
	const randomArchetype = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];

	return {
		// For non-inverted domains, use trait value directly
		agreeableness: archetypeTraitToFacets(randomArchetype.traits.agreeableness),
		conscientiousness: archetypeTraitToFacets(randomArchetype.traits.conscientiousness),
		extraversion: archetypeTraitToFacets(randomArchetype.traits.extraversion),
		// For negative_emotionality: archetype stores API value (low N = calm)
		// UI expects inverted (high = calm), so convert: UI = 6 - API
		negative_emotionality: archetypeTraitToFacets(6 - randomArchetype.traits.negative_emotionality),
		open_mindedness: archetypeTraitToFacets(randomArchetype.traits.open_mindedness)
	};
}

// Store for facet scores (1-5) - three facets per domain
// Initialize with a random archetype for better starting experience
export const facetScores = writable<Record<string, [number, number, number]>>(
	initializeFromRandomArchetype()
);

// Function to randomize all personality scores
export function randomizePersonality() {
	facetScores.set({
		agreeableness: randomFacets(),
		conscientiousness: randomFacets(),
		extraversion: randomFacets(),
		negative_emotionality: randomFacets(),
		open_mindedness: randomFacets()
	});
}

// Derived domain scores (average of facets, rounded to nearest 0.5)
export const domainScores = derived(facetScores, ($facetScores) => {
	const result: Record<string, number> = {};
	for (const [domain, facets] of Object.entries($facetScores)) {
		const avg = facets.reduce((a, b) => a + b, 0) / facets.length;
		// Round to nearest 0.5
		result[domain] = Math.round(avg * 2) / 2;
	}
	return result;
});

// Helper to set all facets in a domain to achieve a target domain score
// For half values like 2.5, we set facets to [2, 3, 3] or [2, 2, 3] to average to 2.5
export function setDomainScore(domain: string, value: number) {
	let facets: [number, number, number];

	if (Number.isInteger(value)) {
		// Whole number: all facets same
		facets = [value, value, value];
	} else {
		// Half value: need to create facets that average to this
		// For X.5, we need (a + b + c) / 3 = X.5, so a + b + c = 3 * X.5
		// E.g., 2.5 -> sum = 7.5, but facets are integers, so we approximate
		// 2.5 -> [2, 2, 3] or [2, 3, 3] both give different averages
		// Actually [2, 2, 3] = 7/3 = 2.33, [2, 3, 3] = 8/3 = 2.67
		// To get exactly 2.5, we'd need [2, 2.5, 3] but facets are integers
		// Best we can do: floor and ceil
		const floor = Math.floor(value);
		const ceil = Math.ceil(value);
		// [floor, ceil, ceil] gives (floor + 2*ceil) / 3
		// [floor, floor, ceil] gives (2*floor + ceil) / 3
		// For 2.5: [2, 3, 3] = 2.67, [2, 2, 3] = 2.33
		// Neither is exactly 2.5, but [2, 3, 3] rounds to 2.5 with our rounding
		facets = [floor, ceil, ceil];
	}

	facetScores.update((scores) => ({
		...scores,
		[domain]: facets
	}));
}

// Helper to set a single facet score
export function setFacetScore(domain: string, facetIndex: number, value: number) {
	facetScores.update((scores) => {
		const newFacets = [...scores[domain]] as [number, number, number];
		newFacets[facetIndex] = value;
		return { ...scores, [domain]: newFacets };
	});
}

// Get keywords for a facet at a given score
export function getFacetKeywords(domain: string, facet: string, score: number): string[] {
	const domainData = (facetKeywords as Record<string, Record<string, Record<string, string[]>>>)[domain];
	if (!domainData) return [];
	const facetData = domainData[facet];
	if (!facetData) return [];
	return facetData[String(score)] || [];
}

// Derived store for the current emoji summary
// Note: emojiGradient is already configured for UI display (e.g., inverted domains have
// their gradient set so position 5 = calm emoji), so we just use the UI score directly
export const emojiSummary = derived(domainScores, ($scores) => {
	return DOMAINS.map((d) => {
		const score = Math.round($scores[d.id]);
		return d.emojiGradient[score] || d.emojiGradient[3];
	}).join('');
});

// Derived store for score string (A3,C3,E3,O3,N3)
// Uses rounded integers to match personality summary JSON keys
export const scoreString = derived(domainScores, ($scores) => {
	const prefixes: Record<string, string> = {
		agreeableness: 'A',
		conscientiousness: 'C',
		extraversion: 'E',
		open_mindedness: 'O',
		negative_emotionality: 'N'
	};
	return DOMAINS.map((d) => `${prefixes[d.id]}${Math.round($scores[d.id])}`).join(',');
});

// Helper to get API-ready scores (inverts scores for inverted domains)
// UI score 5 (calm) → API score 1 (low negative emotionality)
export function getApiScores(uiScores: Record<string, number>): Record<string, number> {
	const apiScores: Record<string, number> = {};
	for (const domain of DOMAINS) {
		const score = uiScores[domain.id];
		apiScores[domain.id] = domain.inverted ? 6 - score : score;
	}
	return apiScores;
}

// Helper to get API-ready facet scores (inverts for inverted domains)
export function getApiFacetScores(
	uiFacetScores: Record<string, [number, number, number]>
): Record<string, [number, number, number]> {
	const apiScores: Record<string, [number, number, number]> = {};
	for (const domain of DOMAINS) {
		const facets = uiFacetScores[domain.id];
		if (domain.inverted) {
			apiScores[domain.id] = [6 - facets[0], 6 - facets[1], 6 - facets[2]];
		} else {
			apiScores[domain.id] = facets;
		}
	}
	return apiScores;
}
