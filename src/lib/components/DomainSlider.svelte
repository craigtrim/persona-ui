<script lang="ts">
	import FacetBar from './FacetBar.svelte';
	import type { DomainConfig } from '$lib/stores/personality';
	import domainDescriptions from '$lib/data/shared/domain_descriptions.json';
	import keywordBehaviors from '$lib/data/shared/keyword_behaviors.json';
	import { sfx, preloadSounds } from '$lib/stores/sounds';

	// Character-specific keyword examples by archetype set
	import starwarsKeywordExamples from '$lib/data/starwars/keyword_examples.json';

	// Type for keyword prompts data
	type KeywordPromptsData = Record<string, Record<string, string>>;

	// Map archetype set IDs to their keyword examples
	const keywordExamplesBySet: Record<string, Record<string, Record<string, string>>> = {
		starwars: starwarsKeywordExamples
	};

	interface Props {
		config: DomainConfig;
		score: number;
		facetScores: [number, number, number];
		onDomainChange: (value: number) => void;
		onFacetChange: (facetIndex: number, value: number) => void;
		archetypeName: string | null;
		archetypeSetId: string;
	}

	let { config, score, facetScores, onDomainChange, onFacetChange, archetypeName, archetypeSetId }: Props = $props();

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
		const texts = (domainDescriptions as Record<string, Record<string, string[]>>)[key];

		if (!texts) return null;

		const entries = Object.entries(texts);
		if (entries.length === 0) return null;

		// Pick a random entry
		const [description, keywords] = entries[Math.floor(Math.random() * entries.length)];
		return { description, keywords };
	});

	// Check if current scores are neutral (3/3/3)
	let isNeutral = $derived(facetScores[0] === 3 && facetScores[1] === 3 && facetScores[2] === 3);

	// Track selected keyword for focused prompt display
	let selectedKeyword = $state<string | null>(null);

	// Get the focused behavior for the selected keyword
	// Prioritizes character-specific examples over generic behaviors
	let focusedBehavior = $derived.by(() => {
		if (!selectedKeyword) return null;

		// Try character-specific example first
		if (archetypeName) {
			const setExamples = keywordExamplesBySet[archetypeSetId];
			if (setExamples) {
				const characterExamples = setExamples[archetypeName];
				if (characterExamples && characterExamples[selectedKeyword]) {
					return characterExamples[selectedKeyword];
				}
			}
		}

		// Fall back to generic keyword behavior
		const domainBehaviors = (keywordBehaviors as KeywordPromptsData)[config.id];
		if (!domainBehaviors) return null;
		return domainBehaviors[selectedKeyword] || null;
	});

	// Handle keyword click - toggle selection
	function handleKeywordClick(keyword: string) {
		if (selectedKeyword === keyword) {
			// Deselect if already selected
			selectedKeyword = null;
		} else {
			// Select new keyword
			selectedKeyword = keyword;
			sfx.emojiPop();
		}
	}

	// Clear selection when facet scores change (text entry changes)
	$effect(() => {
		// Access facetScores to create dependency
		const _ = facetScores;
		selectedKeyword = null;
	});
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
				<!-- Fixed layout container for consistent positioning -->
				<div class="back-content">
					<!-- Description quote (shows focused behavior when keyword selected) -->
					<blockquote class="description-area text-slate-300 text-sm italic leading-relaxed border-l-2 pl-3"
						style="border-color: {selectedKeyword ? config.colorHigh : 'rgb(71 85 105)'};"
					>
						"{focusedBehavior || textEntry.description}"
					</blockquote>

					<!-- Keywords as tags (clickable), limited to 8 -->
					<div class="keywords-area flex flex-wrap gap-2">
						{#each textEntry.keywords.slice(0, 8) as keyword}
							<button
								class="keyword-tag px-2 py-1 text-xs rounded-full transition-all duration-200"
								class:selected={selectedKeyword === keyword}
								style="border-left: 2px solid {config.colorHigh}; {selectedKeyword === keyword ? `box-shadow: 0 0 12px ${config.colorHigh}cc, 0 0 24px ${config.colorHigh}80; text-shadow: 0 0 8px ${config.colorHigh}99;` : ''}"
								onclick={() => handleKeywordClick(keyword)}
							>
								{keyword}
							</button>
						{/each}
					</div>
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
		display: flex;
		flex-direction: column;
	}

	/* Fixed layout for back content */
	.back-content {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
	}

	.description-area {
		height: 4.5rem; /* Fixed height for ~3 lines */
		overflow: hidden;
		margin-bottom: 0.75rem;
	}

	.keywords-area {
		margin-top: auto; /* Push to bottom */
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

	/* Keyword tag buttons */
	.keyword-tag {
		cursor: pointer;
		border: none;
		background: rgba(51, 65, 85, 0.7);
		color: #cbd5e1;
	}

	.keyword-tag.selected {
		background: rgba(71, 85, 105, 0.6);
		color: #f1f5f9;
	}

	.keyword-tag:hover {
		transform: scale(1.05);
	}

	.keyword-tag:active {
		transform: scale(0.98);
	}
</style>
