<script lang="ts">
	// scoreString: for JSON lookups (order: A,C,E,O,N - matches data files)
	// scoreStringDisplay: for UI display (order: A,C,E,N,O - matches slider panel layout)
	import { emojiSummary, scoreString, scoreStringDisplay } from '$lib/stores/personality';
	import personalitySummariesV1 from '$lib/data/personality_summaries.json';
	import personalitySummariesV2 from '$lib/data/personality_summaries_v2.json';
	import systemPrompts from '$lib/data/system_prompts.json';

	// Flip state for prompt panel
	let isFlipped = $state(false);

	function toggleFlip() {
		isFlipped = !isFlipped;
	}

	// Fallback summaries
	const fallbackV1 = [
		'A unique blend of traits defying easy categorization',
		'Complex personality with distinctive characteristics',
		'An individual who charts their own course'
	];

	const fallbackV2 = 'Balanced approach to most situations, adapting as needed';
	const fallbackPrompt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

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

	// Get system prompt for current score combo
	let systemPrompt = $derived(
		(systemPrompts as Record<string, string>)[$scoreString] || fallbackPrompt
	);
</script>

<!-- Emoji Header - Sticky at top -->
<div class="emoji-header sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-4 py-3 -mx-4">
	<div class="text-5xl tracking-widest text-center">{$emojiSummary}</div>
</div>

<!-- Prompt Panel - Scrolls with content -->
<div class="prompt-panel my-4">
	<div class="flip-container" class:flipped={isFlipped}>
		<div class="flip-card">
			<!-- FRONT: Personality Summary -->
			<button
				class="flip-face flip-front bg-slate-800/50 rounded-xl"
				onclick={toggleFlip}
			>
				<div class="max-w-xl mx-auto text-center p-4">
					<p class="text-slate-100 text-lg mb-2">{v2Summary}</p>
					<p class="text-slate-400 text-sm italic">{v1Summary}</p>
				</div>
			</button>

			<!-- BACK: System Prompt -->
			<button
				class="flip-face flip-back bg-slate-950/95 border border-emerald-900/50 rounded-xl"
				onclick={toggleFlip}
			>
				<div class="max-w-xl mx-auto p-4">
					<div class="flex items-center justify-between mb-3">
						<span class="text-emerald-400 text-xs font-mono uppercase tracking-wider">System Prompt</span>
						<!-- Display order matches slider panels: A,C,E,N,O -->
						<span class="text-slate-500 text-xs">{$scoreStringDisplay}</span>
					</div>
					<p class="text-emerald-100 text-sm font-mono leading-relaxed">{systemPrompt}</p>
				</div>
			</button>
		</div>
	</div>
</div>

<style>
	.prompt-panel {
		perspective: 1000px;
	}

	.flip-container {
		width: 100%;
	}

	.flip-card {
		position: relative;
		width: 100%;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		transform-style: preserve-3d;
	}

	.flipped .flip-card {
		transform: rotateX(180deg);
	}

	.flip-face {
		width: 100%;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		cursor: pointer;
		border: none;
		text-align: left;
	}

	.flip-face:hover {
		opacity: 0.95;
	}

	.flip-front {
		position: relative;
		/* Fixed minimum height ensures consistent panel size and room for longer text */
		min-height: 140px;
		display: flex;
		align-items: center;
	}

	.flip-back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: rotateX(180deg);
		overflow-y: auto;
	}

	.flip-back > div {
		width: 100%;
	}
</style>
