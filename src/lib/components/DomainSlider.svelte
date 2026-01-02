<script lang="ts">
	import FacetBar from './FacetBar.svelte';
	import type { DomainConfig } from '$lib/stores/personality';
	import domainTexts from '$lib/data/domain_texts.json';
	import { sfx, preloadSounds } from '$lib/stores/sounds';

	interface Props {
		config: DomainConfig;
		score: number;
		facetScores: [number, number, number];
		onDomainChange: (value: number) => void;
		onFacetChange: (facetIndex: number, value: number) => void;
	}

	let { config, score, facetScores, onDomainChange, onFacetChange }: Props = $props();

	// Flip state
	let isFlipped = $state(false);

	function toggleFlip() {
		isFlipped = !isFlipped;
		sfx.cardFlip();
	}

	// For display, round to nearest integer for emoji lookup
	let emojiScore = $derived(Math.round(score));
	let currentEmoji = $derived(config.emojiGradient[emojiScore] || config.emojiGradient[3]);

	// Format score for display (show .5 if present)
	let displayScore = $derived(Number.isInteger(score) ? score.toString() : score.toFixed(1));

	// Text label for the back side
	let scoreLabel = $derived.by(() => {
		const rounded = Math.round(score);
		const labels: Record<number, string> = {
			1: 'Low',
			2: 'Medium Low',
			3: 'Balanced',
			4: 'Medium High',
			5: 'High'
		};
		return labels[rounded] || 'Balanced';
	});

	// Track previous score to detect changes
	let prevScore = score;

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		const newValue = parseFloat(target.value);
		// Only play sound if score actually changed
		if (newValue !== prevScore) {
			sfx.sliderTick();
			prevScore = newValue;
		}
		onDomainChange(newValue);
		// Preload sounds on first interaction
		preloadSounds();
	}

	// Calculate thumb position percentage for custom positioning
	let thumbPercent = $derived(((score - 1) / 4) * 100);

	// Get a random text entry for current facet scores
	let textEntry = $derived.by(() => {
		const key = `${config.id}_${facetScores[0]}_${facetScores[1]}_${facetScores[2]}`;
		const texts = (domainTexts as Record<string, Record<string, string[]>>)[key];

		if (!texts) return null;

		const entries = Object.entries(texts);
		if (entries.length === 0) return null;

		// Pick a random entry
		const [description, keywords] = entries[Math.floor(Math.random() * entries.length)];
		return { description, keywords };
	});

	// Check if current scores are neutral (3/3/3)
	let isNeutral = $derived(facetScores[0] === 3 && facetScores[1] === 3 && facetScores[2] === 3);
</script>

<div class="flip-container mb-4" class:flipped={isFlipped}>
	<div class="flip-card">
		<!-- FRONT: Domain Slider -->
		<div class="flip-face flip-front bg-slate-800/50 rounded-xl p-4">
			<!-- Header with emoji and labels (clickable to flip) -->
			<button
				onclick={toggleFlip}
				class="flip-header w-full flex items-center justify-between mb-3 cursor-pointer hover:opacity-80 transition-opacity"
			>
				<div class="flex items-center gap-2">
					<span class="text-2xl">{currentEmoji}</span>
					<span class="text-sm font-medium text-slate-200">{config.name}</span>
				</div>
				<span class="text-xs text-slate-400">Score: {displayScore}</span>
			</button>

	<!-- Slider with endpoint labels -->
	<div class="slider-container mb-4">
		<div class="flex justify-between text-xs text-slate-400 mb-1">
			<span>{config.lowEmoji} {config.lowLabel}</span>
			<span>{config.highLabel} {config.highEmoji}</span>
		</div>
		<input
			type="range"
			min="1"
			max="5"
			step="0.5"
			value={score}
			oninput={handleInput}
			class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
			style="--color-low: {config.colorLow}; --color-high: {config.colorHigh}; --thumb-percent: {thumbPercent}%;"
		/>
		<!-- Score markers -->
		<div class="flex justify-between text-xs text-slate-500 mt-1 px-1">
			{#each [1, 2, 3, 4, 5] as n}
				<span class:text-slate-300={Math.round(score) === n}>{n}</span>
			{/each}
		</div>
	</div>

	<!-- Facet bars -->
	<div class="facets border-t border-slate-700 pt-3">
		{#each config.facets as facet, i}
			<FacetBar
				domain={config.id}
				{facet}
				facetIndex={i}
				score={facetScores[i]}
				colorLow={config.colorLow}
				colorHigh={config.colorHigh}
				inverted={config.inverted}
				onchange={(value) => onFacetChange(i, value)}
			/>
		{/each}
	</div>

		</div>

		<!-- BACK: Details -->
		<div class="flip-face flip-back bg-slate-800/50 rounded-xl p-4">
			<!-- Header (clickable to flip back) -->
			<button
				onclick={toggleFlip}
				class="flip-header w-full flex items-center justify-between mb-3 cursor-pointer hover:opacity-80 transition-opacity"
			>
				<div class="flex items-center gap-2">
					<span class="text-2xl">{currentEmoji}</span>
					<span class="text-sm font-medium text-slate-200">{config.name}</span>
				</div>
				<span class="text-xs text-slate-400">{scoreLabel}</span>
			</button>

			{#if textEntry}
				<!-- Description quote -->
				<blockquote class="text-slate-300 text-sm italic leading-relaxed mb-4 border-l-2 border-slate-600 pl-3">
					"{textEntry.description}"
				</blockquote>

				<!-- Keywords as tags -->
				<div class="flex flex-wrap gap-2">
					{#each textEntry.keywords as keyword}
						<span
							class="keyword-tag px-2 py-1 text-xs rounded-full bg-slate-700/70 text-slate-300"
							style="border-left: 2px solid {config.colorHigh};"
						>
							{keyword}
						</span>
					{/each}
				</div>
			{:else if isNeutral}
				<div class="text-center py-4">
					<p class="text-slate-500 text-sm">
						No contribution to persona at neutral settings.
					</p>
				</div>
			{:else}
				<p class="text-slate-400 text-sm italic">
					No behavioral data available for this combination.
				</p>
			{/if}
		</div>
	</div>
</div>

<style>
	/* 3D Flip Card Styles */
	.flip-container {
		perspective: 1000px;
	}

	.flip-card {
		position: relative;
		width: 100%;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		transform-style: preserve-3d;
	}

	.flipped .flip-card {
		transform: rotateY(180deg);
	}

	.flip-face {
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.flip-front {
		position: relative;
	}

	.flip-back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: rotateY(180deg);
		overflow-y: auto;
	}

	.flip-header {
		background: none;
		border: none;
		text-align: left;
	}

	/* Slider Styles */
	.slider {
		-webkit-appearance: none;
		appearance: none;
		background: linear-gradient(
			to right,
			var(--color-low) 0%,
			#94a3b8 50%,
			var(--color-high) 100%
		);
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: white;
		cursor: pointer;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		border: 2px solid #e2e8f0;
		transition: transform 0.15s ease;
	}

	.slider::-webkit-slider-thumb:hover {
		transform: scale(1.1);
	}

	.slider::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: white;
		cursor: pointer;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		border: 2px solid #e2e8f0;
	}
</style>
