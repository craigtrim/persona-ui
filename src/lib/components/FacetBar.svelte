<script lang="ts">
	import { getFacetKeywords } from '$lib/stores/personality';

	interface Props {
		domain: string;
		facet: string;
		facetIndex: number;
		score: number;
		colorLow: string;
		colorHigh: string;
		inverted?: boolean;
		onchange: (value: number) => void;
	}

	let { domain, facet, facetIndex, score, colorLow, colorHigh, inverted = false, onchange }: Props = $props();

	// Get the first keyword for display (use rounded score for keyword lookup)
	// For inverted domains, UI score 5 = API score 1, so invert for keyword lookup
	let roundedScore = $derived(Math.round(score));
	let lookupScore = $derived(inverted ? 6 - roundedScore : roundedScore);
	let keywords = $derived(getFacetKeywords(domain, facet, lookupScore));
	let displayKeyword = $derived(keywords[0] || 'balanced');

	// Calculate fill percentage (score 1-5 maps to 0-100%)
	let fillPercent = $derived(((score - 1) / 4) * 100);

	// Interpolate color based on score
	let barColor = $derived(score <= 2 ? colorLow : score >= 4 ? colorHigh : '#94a3b8');

	// Format facet name for display
	let facetLabel = $derived(facet.replace(/_/g, ' '));

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		onchange(parseInt(target.value, 10));
	}
</script>

<div class="facet-bar mb-2 group">
	<div class="flex justify-between items-center mb-1">
		<span class="text-xs text-slate-400 w-28 truncate">{facetLabel}</span>
		<span class="text-xs text-slate-300 truncate ml-2 flex-1 text-right">{displayKeyword}</span>
	</div>
	<div class="relative">
		<!-- Background track -->
		<div class="h-2 bg-slate-700 rounded-full overflow-hidden">
			<div
				class="h-full rounded-full transition-all duration-300 ease-out"
				style="width: {fillPercent}%; background-color: {barColor};"
			></div>
		</div>
		<!-- Invisible range input overlay -->
		<input
			type="range"
			min="1"
			max="5"
			step="1"
			value={score}
			oninput={handleInput}
			class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
		/>
	</div>
</div>
