<script lang="ts">
	import { emojiSummary, scoreString } from '$lib/stores/personality';
	import personalitySummariesV1 from '$lib/data/personality_summaries.json';
	import personalitySummariesV2 from '$lib/data/personality_summaries_v2.json';

	// Fallback summaries
	const fallbackV1 = [
		'A unique blend of traits defying easy categorization',
		'Complex personality with distinctive characteristics',
		'An individual who charts their own course'
	];

	const fallbackV2 = 'Balanced approach to most situations, adapting as needed';

	// Strip emojis from v1 text
	function stripEmojis(text: string): string {
		return text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, '').trim();
	}

	// Get v1 summaries (with emojis stripped)
	let v1Summaries = $derived(
		((personalitySummariesV1 as Record<string, string[]>)[$scoreString] || fallbackV1)
			.map(stripEmojis)
	);

	// Get v2 summary (stable - pick longest one)
	let v2Summary = $derived.by(() => {
		const summaries = (personalitySummariesV2 as Record<string, string[]>)[$scoreString] || [fallbackV2];
		return summaries.reduce((longest, current) =>
			current.length > longest.length ? current : longest
		);
	});

	// v1 rotates randomly, biased toward shorter texts (to complement longer v2)
	let v1Summary = $derived.by(() => {
		if (v1Summaries.length === 0) return fallbackV1[0];
		if (v1Summaries.length === 1) return v1Summaries[0];

		const v2Len = v2Summary.length;

		// Weight shorter texts more heavily (inverse length weighting)
		// Texts shorter than v2 get higher weight
		const weights = v1Summaries.map(text => {
			const ratio = v2Len / Math.max(text.length, 1);
			// Clamp between 0.5 and 3 to avoid extreme biases
			return Math.max(0.5, Math.min(3, ratio));
		});

		const totalWeight = weights.reduce((a, b) => a + b, 0);
		let random = Math.random() * totalWeight;

		for (let i = 0; i < weights.length; i++) {
			random -= weights[i];
			if (random <= 0) return v1Summaries[i];
		}
		return v1Summaries[v1Summaries.length - 1];
	});
</script>

<div class="persona-summary sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-4 py-5 -mx-4">
	<div class="max-w-xl mx-auto text-center">
		<div class="text-5xl tracking-widest mb-4">{$emojiSummary}</div>
		<p class="text-slate-100 text-lg mb-2">{v2Summary}</p>
		<p class="text-slate-400 text-sm italic">{v1Summary}</p>
	</div>
</div>
