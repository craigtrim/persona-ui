<script lang="ts">
	// ⚠️ CRITICAL: scoreString order is A,C,E,N,O (N before O) - must match JSON file keys
	// Both scoreString and scoreStringDisplay now use the same order: A,C,E,N,O
	// If lookups fail, you'll see fallback text like "Balanced approach to most situations"
	import { emojiSummary, scoreString, scoreStringDisplay, DOMAINS, domainScores, setDomainScore } from '$lib/stores/personality';
	import personalitySummariesV1 from '$lib/data/personality_summaries.json';
	import personalitySummariesV2 from '$lib/data/personality_summaries_v2.json';
	import systemPrompts from '$lib/data/system_prompts.json';
	import { sfx } from '$lib/stores/sounds';

	// Flip state for prompt panel
	let isFlipped = $state(false);

	function toggleFlip() {
		isFlipped = !isFlipped;
		sfx.cardFlip();
	}

	// Emoji gradient picker state
	let expandedDomainIndex = $state<number | null>(null);
	let bounceIndex = $state<number | null>(null);

	function handleEmojiTap(index: number) {
		if (expandedDomainIndex === index) {
			// Already expanded, close it
			expandedDomainIndex = null;
			return;
		}

		// Trigger bounce animation and sound
		bounceIndex = index;
		sfx.emojiPop();
		setTimeout(() => {
			bounceIndex = null;
		}, 200);

		// Expand the gradient picker
		expandedDomainIndex = index;
	}

	function handleGradientSelect(domainId: string, score: number) {
		setDomainScore(domainId, score);
		sfx.sliderTick();
		// Close picker after selection
		setTimeout(() => {
			expandedDomainIndex = null;
		}, 150);
	}

	function handleBackdropClick() {
		expandedDomainIndex = null;
	}

	// Get current emoji for each domain
	function getDomainEmoji(domainIndex: number): string {
		const domain = DOMAINS[domainIndex];
		const score = Math.round($domainScores[domain.id]);
		return domain.emojiGradient[score] || domain.emojiGradient[3];
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
	<!-- Backdrop for dismissing picker -->
	{#if expandedDomainIndex !== null}
		<button
			class="fixed inset-0 z-10 bg-transparent"
			onclick={handleBackdropClick}
			aria-label="Close emoji picker"
		></button>
	{/if}

	<div class="emoji-row">
		{#each DOMAINS as domain, i}
			<div class="emoji-container">
				<!-- Main emoji button -->
				<button
					class="emoji-btn"
					class:bounce={bounceIndex === i}
					class:active={expandedDomainIndex === i}
					onclick={() => handleEmojiTap(i)}
					aria-label={`Adjust ${domain.name}`}
				>
					{getDomainEmoji(i)}
				</button>

				<!-- Gradient picker popup -->
				{#if expandedDomainIndex === i}
					<div class="gradient-picker">
						{#each [1, 2, 3, 4, 5] as score}
							{@const isCurrentScore = Math.round($domainScores[domain.id]) === score}
							<button
								class="gradient-emoji"
								class:current={isCurrentScore}
								onclick={() => handleGradientSelect(domain.id, score)}
								aria-label={`Set ${domain.name} to ${score}`}
							>
								{domain.emojiGradient[score]}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
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
	/* Emoji Header Styles */
	.emoji-row {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		position: relative;
		z-index: 20;
	}

	.emoji-container {
		position: relative;
	}

	.emoji-btn {
		font-size: 2.75rem;
		line-height: 1;
		padding: 0.25rem;
		background: transparent;
		border: none;
		cursor: pointer;
		transition: transform 0.15s ease;
		border-radius: 0.5rem;
	}

	.emoji-btn:hover {
		transform: scale(1.1);
	}

	.emoji-btn:active {
		transform: scale(0.95);
	}

	.emoji-btn.active {
		background: rgba(255, 255, 255, 0.1);
	}

	.emoji-btn.bounce {
		animation: bounce 0.2s ease;
	}

	@keyframes bounce {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.3); }
	}

	.gradient-picker {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.25rem;
		padding: 0.5rem;
		background: rgba(15, 23, 42, 0.95);
		border: 1px solid rgba(100, 116, 139, 0.3);
		border-radius: 1rem;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
		z-index: 30;
		animation: fadeSlideIn 0.2s ease;
	}

	@keyframes fadeSlideIn {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(-10px) scale(0.9);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0) scale(1);
		}
	}

	.gradient-emoji {
		font-size: 1.75rem;
		line-height: 1;
		padding: 0.375rem;
		background: transparent;
		border: 2px solid transparent;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.15s ease;
		opacity: 0.6;
	}

	.gradient-emoji:hover {
		opacity: 1;
		transform: scale(1.15);
		background: rgba(255, 255, 255, 0.1);
	}

	.gradient-emoji.current {
		opacity: 1;
		border-color: rgba(52, 211, 153, 0.6);
		background: rgba(52, 211, 153, 0.15);
		transform: scale(1.1);
	}

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
