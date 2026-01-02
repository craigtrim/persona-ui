<script lang="ts">
	import { domainScores, setDomainScore, initialArchetypeId } from '$lib/stores/personality';
	import {
		CIPHER,
		CIPHER_THRESHOLD,
		calculateMatchQuality,
		calculateArchetypeDistance,
		getArchetypesByDistanceForSet,
		findBestArchetypeForSet,
		getArchetypesForSet,
		ARCHETYPE_SETS,
		type ArchetypeDefinition,
		type ArchetypeSet
	} from '$lib/data/archetypes';
	import { sfx } from '$lib/stores/sounds';
	import { archetypeSetId } from '$lib/stores/archetypeSet';

	// Drawer state
	let isOpen = $state(false);
	let dragY = $state(0);
	let isDragging = $state(false);
	let startY = $state(0);

	// Track selected archetype
	let selectedArchetypeId = $state<string | null>(initialArchetypeId);

	// Get current set
	let currentSet = $derived(ARCHETYPE_SETS.find(s => s.id === $archetypeSetId) ?? ARCHETYPE_SETS[0]);

	// Get sorted archetypes by distance from current scores
	let sortedArchetypes = $derived(getArchetypesByDistanceForSet($domainScores, $archetypeSetId));

	// Best match info
	let bestMatch = $derived.by(() => {
		const result = findBestArchetypeForSet($domainScores, $archetypeSetId);
		return {
			...result,
			matchQuality: calculateMatchQuality(result.distance),
			isCipher: result.distance >= CIPHER_THRESHOLD
		};
	});

	// Handle archetype selection
	function selectArchetype(archetype: ArchetypeDefinition) {
		selectedArchetypeId = archetype.id;
		sfx.archetypeSelect();

		// Set each domain to the archetype's target value
		for (const [domain, value] of Object.entries(archetype.traits)) {
			const uiValue = domain === 'negative_emotionality' ? 6 - value : value;
			setDomainScore(domain, uiValue);
		}

		// Close drawer after selection
		isOpen = false;
	}

	// Generate cipher profiles
	function generateCipherProfile(): Record<string, number> {
		const domains = ['agreeableness', 'conscientiousness', 'extraversion', 'negative_emotionality', 'open_mindedness'];
		const profile: Record<string, number> = {};
		for (const domain of domains) {
			profile[domain] = Math.floor(Math.random() * 5) + 1;
		}
		return profile;
	}

	function isTooCloseToArchetype(profile: Record<string, number>): boolean {
		const archetypes = getArchetypesForSet($archetypeSetId);
		for (const archetype of archetypes) {
			const distance = calculateArchetypeDistance(profile, archetype);
			if (distance < CIPHER_THRESHOLD) return true;
		}
		return false;
	}

	function generateValidCipherProfile(): Record<string, number> {
		let attempts = 0;
		while (attempts < 100) {
			const profile = generateCipherProfile();
			if (!isTooCloseToArchetype(profile)) return profile;
			attempts++;
		}
		return generateCipherProfile();
	}

	function selectCipher() {
		selectedArchetypeId = CIPHER.id;
		sfx.archetypeSelect();
		const profile = generateValidCipherProfile();

		for (const [domain, value] of Object.entries(profile)) {
			const uiValue = domain === 'negative_emotionality' ? 6 - value : value;
			setDomainScore(domain, uiValue);
		}

		isOpen = false;
	}

	// Handle set selection
	function selectSet(set: ArchetypeSet) {
		archetypeSetId.set(set.id);
		sfx.archetypeSelect();
		// Clear selection when changing sets
		selectedArchetypeId = null;
	}

	// Touch handlers for drag gesture
	function handleTouchStart(e: TouchEvent) {
		startY = e.touches[0].clientY;
		isDragging = true;
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		const currentY = e.touches[0].clientY;
		const diff = currentY - startY;

		if (isOpen) {
			// When open, only allow dragging down
			dragY = Math.max(0, diff);
		} else {
			// When closed, only allow dragging up (negative values)
			dragY = Math.min(0, diff);
		}
	}

	function handleTouchEnd() {
		isDragging = false;
		const threshold = 50;

		if (isOpen && dragY > threshold) {
			isOpen = false;
		} else if (!isOpen && dragY < -threshold) {
			isOpen = true;
		}

		dragY = 0;
	}

	function toggleDrawer() {
		isOpen = !isOpen;
	}

	// Calculate opacity based on match quality
	function getOpacity(matchQuality: number): number {
		return 0.4 + (matchQuality / 100) * 0.6;
	}
</script>

<!-- Mobile-only drawer -->
<div class="mobile-drawer-container">
	<!-- Backdrop -->
	{#if isOpen}
		<button class="backdrop" onclick={() => isOpen = false} aria-label="Close drawer"></button>
	{/if}

	<!-- Drawer -->
	<div
		class="drawer"
		class:open={isOpen}
		style={isDragging ? `transform: translateY(${isOpen ? dragY : `calc(100% - 60px + ${dragY}px)`})` : ''}
		role="dialog"
		aria-label="Archetype selector"
	>
		<!-- Handle bar for dragging -->
		<button
			class="drawer-handle"
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
			onclick={toggleDrawer}
			aria-label="Toggle archetype drawer"
		>
			<div class="handle-bar"></div>
			<div class="handle-label">
				{#if bestMatch.isCipher}
					<span class="current-name">{CIPHER.name}</span>
				{:else}
					<span class="current-name">{bestMatch.archetype.name}</span>
					<span class="current-match">{Math.round(bestMatch.matchQuality)}%</span>
				{/if}
			</div>
		</button>

		<!-- Drawer content -->
		<div class="drawer-content">
			<!-- Set selector row -->
			<div class="set-selector-row">
				{#each ARCHETYPE_SETS as set}
					<button
						class="set-button"
						class:selected={set.id === $archetypeSetId}
						onclick={() => selectSet(set)}
						title={set.description}
					>
						<div class="set-button-icon">
							{@html set.svg}
						</div>
						<span class="set-button-name">{set.name}</span>
					</button>
				{/each}
			</div>

			<!-- Archetype grid -->
			<div class="archetype-grid">
				{#each sortedArchetypes as { archetype, matchQuality }}
					{@const isSelected = selectedArchetypeId === archetype.id}
					<button
						class="archetype-card"
						class:selected={isSelected}
						style="opacity: {getOpacity(matchQuality)};"
						onclick={() => selectArchetype(archetype)}
					>
						<div class="card-icon">
							{@html archetype.svg}
						</div>
						<span class="card-name">{archetype.name}</span>
						<span class="card-match">{Math.round(matchQuality)}%</span>
					</button>
				{/each}

				<!-- Cipher card -->
				<button
					class="archetype-card cipher-card"
					class:selected={selectedArchetypeId === CIPHER.id}
					onclick={selectCipher}
				>
					<div class="card-icon">
						{@html CIPHER.svg}
					</div>
					<span class="card-name">{CIPHER.name}</span>
					<span class="card-match">Random</span>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	/* Only show on mobile */
	.mobile-drawer-container {
		display: none;
	}

	@media (max-width: 768px) {
		.mobile-drawer-container {
			display: block;
		}
	}

	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 200;
		border: none;
		cursor: pointer;
	}

	.drawer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(15, 23, 42, 0.98);
		border-top: 1px solid rgba(100, 116, 139, 0.3);
		border-radius: 20px 20px 0 0;
		z-index: 201;
		transform: translateY(calc(100% - 60px));
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		max-height: 70vh;
		display: flex;
		flex-direction: column;
	}

	.drawer.open {
		transform: translateY(0);
	}

	.drawer-handle {
		padding: 12px 16px 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		cursor: grab;
		background: transparent;
		border: none;
		width: 100%;
		touch-action: none;
	}

	.drawer-handle:active {
		cursor: grabbing;
	}

	.handle-bar {
		width: 40px;
		height: 4px;
		background: rgba(100, 116, 139, 0.5);
		border-radius: 2px;
	}

	.handle-label {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.current-name {
		font-size: 14px;
		color: #e2e8f0;
		font-weight: 600;
	}

	.current-match {
		font-size: 12px;
		color: #6ee7b7;
		font-weight: 500;
	}

	.drawer-content {
		flex: 1;
		overflow-y: auto;
		padding: 8px 12px 24px;
		-webkit-overflow-scrolling: touch;
	}

	/* Set selector row */
	.set-selector-row {
		display: flex;
		gap: 8px;
		padding: 8px 0;
		margin-bottom: 12px;
		border-bottom: 1px solid rgba(100, 116, 139, 0.2);
	}

	.set-button {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 8px 4px;
		background: rgba(30, 41, 59, 0.5);
		border: 1px solid rgba(100, 116, 139, 0.2);
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.set-button:active {
		transform: scale(0.95);
	}

	.set-button.selected {
		background: rgba(59, 130, 246, 0.2);
		border-color: rgba(59, 130, 246, 0.5);
	}

	.set-button-icon {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.set-button-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.set-button-name {
		font-size: 10px;
		color: #94a3b8;
		margin-top: 4px;
	}

	.archetype-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
	}

	.archetype-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 8px 4px;
		background: rgba(30, 41, 59, 0.5);
		border: 1px solid rgba(100, 116, 139, 0.2);
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.archetype-card:active {
		transform: scale(0.95);
	}

	.archetype-card.selected {
		background: rgba(59, 130, 246, 0.2);
		border-color: rgba(59, 130, 246, 0.5);
	}

	.card-icon {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.card-name {
		font-size: 9px;
		color: #94a3b8;
		text-align: center;
		margin-top: 4px;
		line-height: 1.2;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.card-match {
		font-size: 10px;
		color: #64748b;
		margin-top: 2px;
	}

	.cipher-card {
		border-color: rgba(168, 85, 247, 0.3);
	}

	.cipher-card.selected {
		background: rgba(168, 85, 247, 0.2);
		border-color: rgba(168, 85, 247, 0.5);
	}
</style>
