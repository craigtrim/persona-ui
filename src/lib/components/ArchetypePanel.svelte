<script lang="ts">
	import { domainScores, facetScores, setDomainScore, initialArchetypeId } from '$lib/stores/personality';
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

	// View mode: 'characters' shows archetypes in current set, 'sets' shows archetype sets
	// Start on 'sets' view so user picks an archetype set first
	type ViewMode = 'characters' | 'sets';
	let viewMode = $state<ViewMode>('sets');

	// Get current set
	let currentSet = $derived(ARCHETYPE_SETS.find(s => s.id === $archetypeSetId) ?? ARCHETYPE_SETS[0]);

	// Flag to freeze the list order when user clicks an archetype directly
	let freezeListOrder = $state(false);
	let frozenArchetypes = $state<Array<{ archetype: ArchetypeDefinition; distance: number; matchQuality: number }> | null>(null);

	// Get sorted archetypes by distance from current scores
	// When frozen, return the frozen list but update the match quality values
	let sortedArchetypes = $derived.by(() => {
		if (freezeListOrder && frozenArchetypes) {
			// Keep the frozen order but recalculate match qualities
			return frozenArchetypes.map(item => {
				const distance = calculateArchetypeDistance($domainScores, item.archetype);
				return {
					archetype: item.archetype,
					distance,
					matchQuality: calculateMatchQuality(distance)
				};
			});
		}
		return getArchetypesByDistanceForSet($domainScores, $archetypeSetId);
	});

	// Best match info
	let bestMatch = $derived.by(() => {
		const result = findBestArchetypeForSet($domainScores, $archetypeSetId);
		return {
			...result,
			matchQuality: calculateMatchQuality(result.distance),
			isCipher: result.distance >= CIPHER_THRESHOLD
		};
	});

	// Reference to the scroll container
	let scrollContainer: HTMLDivElement;
	// Initialize with the randomly selected archetype from the store
	let selectedArchetypeId = $state<string | null>(initialArchetypeId);

	// Derived state for Cipher selection
	let isCipherSelected = $derived(selectedArchetypeId === CIPHER.id);

	// Handle archetype selection - set sliders to archetype's trait values
	function selectArchetype(archetype: ArchetypeDefinition) {
		selectedArchetypeId = archetype.id;
		sfx.archetypeSelect();

		// Record click time so we know these slider changes are from a click, not manual adjustment
		lastClickTime = Date.now();

		// Freeze the current list order before changing sliders
		freezeListOrder = true;
		frozenArchetypes = [...sortedArchetypes];

		// Set each domain to the archetype's target value
		// Note: For negative_emotionality, archetype stores API values (low N = calm)
		// but setDomainScore expects UI values (high = calm), so we invert
		for (const [domain, value] of Object.entries(archetype.traits)) {
			const uiValue = domain === 'negative_emotionality' ? 6 - value : value;
			setDomainScore(domain, uiValue);
		}
	}

	// Unfreeze list when user manually adjusts sliders (detected by scores changing without a click)
	// This is handled by the facetScores store subscription
	function unfreezeList() {
		freezeListOrder = false;
		frozenArchetypes = null;
	}

	// Export unfreeze function so it can be called from outside when sliders change
	// We'll detect this by watching for score changes that weren't from a click
	let lastClickTime = $state(0);

	$effect(() => {
		// Subscribe to domain score changes
		const _ = $domainScores;

		// If it's been more than 100ms since a click, unfreeze the list
		// This means the change came from manual slider adjustment
		if (freezeListOrder && Date.now() - lastClickTime > 100) {
			unfreezeList();
		}
	});

	// Calculate opacity based on match quality (higher quality = more opaque)
	function getOpacity(matchQuality: number): number {
		// Map 0-100% quality to 0.3-1.0 opacity range
		return 0.3 + (matchQuality / 100) * 0.7;
	}

	// Generate a random cipher profile that doesn't match any defined archetype
	function generateCipherProfile(): Record<string, number> {
		const domains = ['agreeableness', 'conscientiousness', 'extraversion', 'negative_emotionality', 'open_mindedness'];
		const profile: Record<string, number> = {};

		// Generate random scores (1-5) for each domain
		for (const domain of domains) {
			profile[domain] = Math.floor(Math.random() * 5) + 1;
		}

		return profile;
	}

	// Check if a profile is too close to any defined archetype in current set
	function isTooCloseToArchetype(profile: Record<string, number>): boolean {
		const archetypes = getArchetypesForSet($archetypeSetId);

		for (const archetype of archetypes) {
			// Calculate distance from this profile to each archetype
			const distance = calculateArchetypeDistance(profile, archetype);
			// If distance is less than threshold, it's too close
			if (distance < CIPHER_THRESHOLD) {
				return true;
			}
		}
		return false;
	}

	// Pre-generate 10 valid cipher profiles
	function generateCipherProfiles(count: number = 10): Record<string, number>[] {
		const profiles: Record<string, number>[] = [];
		let attempts = 0;
		const maxAttempts = 1000; // Prevent infinite loop

		while (profiles.length < count && attempts < maxAttempts) {
			attempts++;
			const profile = generateCipherProfile();
			if (!isTooCloseToArchetype(profile)) {
				profiles.push(profile);
			}
		}

		return profiles;
	}

	// Generate cipher profiles once on component init
	const cipherProfiles = generateCipherProfiles(10);

	// Handle Cipher selection - pick a random cipher profile
	function selectCipher() {
		selectedArchetypeId = CIPHER.id;
		sfx.archetypeSelect();

		// Record click time
		lastClickTime = Date.now();

		// Freeze the list order
		freezeListOrder = true;
		frozenArchetypes = [...sortedArchetypes];

		// Pick a random cipher profile
		const profile = cipherProfiles[Math.floor(Math.random() * cipherProfiles.length)];

		// Apply to sliders
		// For negative_emotionality: profile stores API value, UI expects inverted
		for (const [domain, value] of Object.entries(profile)) {
			const uiValue = domain === 'negative_emotionality' ? 6 - value : value;
			setDomainScore(domain, uiValue);
		}
	}

	// Handle set selection
	function selectSet(set: ArchetypeSet) {
		archetypeSetId.set(set.id);
		sfx.archetypeSelect();
		// Unfreeze list when changing sets
		unfreezeList();
		// Clear selection when changing sets
		selectedArchetypeId = null;
		// Switch back to characters view
		viewMode = 'characters';
	}

	// Toggle between views
	function toggleViewMode() {
		viewMode = viewMode === 'characters' ? 'sets' : 'characters';
		sfx.cardFlip();
	}
</script>

<div class="archetype-panel">
	<!-- Header with view toggle -->
	<div class="panel-header">
		<button class="view-toggle" onclick={toggleViewMode} title="Switch between Characters and Sets">
			<div class="toggle-icon">
				{#if viewMode === 'characters'}
					{@html currentSet.svg}
				{:else}
					<span class="toggle-grid-icon">⊞</span>
				{/if}
			</div>
		</button>
		{#if viewMode === 'characters'}
			<div class="best-match-info">
				{#if bestMatch.isCipher}
					<span class="best-match-name">{CIPHER.name}</span>
				{:else}
					<span class="best-match-name">{bestMatch.archetype.name}</span>
				{/if}
				<span class="match-quality">{Math.round(bestMatch.matchQuality)}%</span>
			</div>
		{/if}
	</div>

	<!-- Scrollable list (shared between both views) -->
	<div class="archetype-list" bind:this={scrollContainer}>
		{#if viewMode === 'characters'}
			<!-- Characters in current set -->
			{#each sortedArchetypes as { archetype, distance, matchQuality }, i}
				{@const isBestMatch = i === 0 && !bestMatch.isCipher}
				{@const isSelected = selectedArchetypeId === archetype.id}
				<button
					class="archetype-item"
					class:best-match={isBestMatch}
					class:selected={isSelected}
					data-archetype-id={archetype.id}
					style="opacity: {getOpacity(matchQuality)};"
					onclick={() => selectArchetype(archetype)}
					title="{archetype.name}: {archetype.description}"
				>
					<div class="icon-wrapper">
						{@html archetype.svg}
					</div>
					<div class="archetype-info">
						<span class="archetype-name">{archetype.name}</span>
						<span class="archetype-quality">{Math.round(matchQuality)}%</span>
					</div>
				</button>
			{/each}

			<!-- Cipher at the end -->
			<button
				class="archetype-item cipher-item"
				class:best-match={bestMatch.isCipher}
				class:selected={isCipherSelected}
				data-archetype-id={CIPHER.id}
				style="opacity: {isCipherSelected || bestMatch.isCipher ? 1 : 0.4};"
				onclick={selectCipher}
				title="{CIPHER.name}: {CIPHER.description}"
			>
				<div class="icon-wrapper">
					{@html CIPHER.svg}
				</div>
				<div class="archetype-info">
					<span class="archetype-name">{CIPHER.name}</span>
					{#if bestMatch.isCipher}
						<span class="archetype-quality">Custom</span>
					{/if}
				</div>
			</button>
		{:else}
			<!-- Archetype Sets -->
			{#each ARCHETYPE_SETS as set}
				{@const isSelected = set.id === $archetypeSetId}
				<button
					class="archetype-item"
					class:selected={isSelected}
					onclick={() => selectSet(set)}
					title="{set.name}: {set.description}"
				>
					<div class="icon-wrapper">
						{@html set.svg}
					</div>
					<div class="archetype-info">
						<span class="archetype-name">{set.name}</span>
						<span class="archetype-quality">{set.archetypes.length}</span>
					</div>
				</button>
			{/each}
		{/if}
	</div>
</div>

<style>
	.archetype-panel {
		position: fixed;
		left: 16px;
		top: 100px;
		width: 90px;
		max-height: calc(100vh - 120px);
		background: rgba(15, 23, 42, 0.95);
		border: 1px solid rgba(100, 116, 139, 0.3);
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		backdrop-filter: blur(8px);
		z-index: 100;
	}

	/* Panel Header with View Toggle */
	.panel-header {
		padding: 8px;
		border-bottom: 1px solid rgba(100, 116, 139, 0.2);
		background: rgba(30, 41, 59, 0.5);
	}

	.view-toggle {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		background: rgba(51, 65, 85, 0.4);
		border: 1px solid rgba(100, 116, 139, 0.3);
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s ease;
		margin-bottom: 6px;
	}

	.view-toggle:hover {
		background: rgba(71, 85, 105, 0.5);
		border-color: rgba(100, 116, 139, 0.5);
		box-shadow: 0 0 12px rgba(100, 116, 139, 0.3);
	}

	.toggle-icon {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		filter: drop-shadow(0 0 6px rgba(148, 163, 184, 0.4));
		transition: all 0.2s ease;
	}

	.view-toggle:hover .toggle-icon {
		filter: drop-shadow(0 0 10px rgba(148, 163, 184, 0.6));
		transform: scale(1.05);
	}

	.toggle-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.toggle-grid-icon {
		font-size: 36px;
		color: #94a3b8;
	}

	.best-match-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		text-align: center;
	}

	.best-match-name {
		font-size: 10px;
		color: #94a3b8;
		font-weight: 600;
		line-height: 1.2;
	}

	.match-quality {
		font-size: 11px;
		color: #6ee7b7;
		font-weight: 600;
	}

	.archetype-list {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 8px 4px;
		scroll-behavior: smooth;
		scrollbar-width: thin;
		scrollbar-color: rgba(100, 116, 139, 0.3) transparent;
	}

	.archetype-list::-webkit-scrollbar {
		width: 4px;
	}

	.archetype-list::-webkit-scrollbar-track {
		background: transparent;
	}

	.archetype-list::-webkit-scrollbar-thumb {
		background: rgba(100, 116, 139, 0.3);
		border-radius: 2px;
	}

	.archetype-item {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 6px 4px;
		margin-bottom: 4px;
		background: transparent;
		border: 1px solid transparent;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.archetype-item:hover {
		background: rgba(51, 65, 85, 0.5);
		border-color: rgba(100, 116, 139, 0.3);
	}

	.archetype-item.best-match {
		background: rgba(34, 197, 94, 0.1);
		border-color: rgba(34, 197, 94, 0.3);
	}

	.archetype-item.selected {
		background: transparent;
		border-color: transparent;
	}

	.archetype-item.selected .icon-wrapper {
		filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 24px rgba(59, 130, 246, 0.5));
		transform: scale(1.1);
	}

	.archetype-item.selected .archetype-name {
		color: #93c5fd;
		text-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
	}

	.archetype-item.selected .archetype-quality {
		color: #60a5fa;
		text-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
	}

	.icon-wrapper {
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease;
	}

	.archetype-item:hover .icon-wrapper {
		transform: scale(1.08);
	}

	.icon-wrapper :global(svg) {
		width: 100%;
		height: 100%;
	}

	.archetype-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1px;
		margin-top: 2px;
	}

	.archetype-name {
		font-size: 8px;
		color: #94a3b8;
		text-align: center;
		line-height: 1.2;
		max-width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.archetype-quality {
		font-size: 9px;
		color: #64748b;
	}

	.cipher-item {
		margin-top: 8px;
		padding-top: 8px;
		border-top: 1px solid rgba(100, 116, 139, 0.2);
	}

	/* Hide on very small screens */
	@media (max-width: 768px) {
		.archetype-panel {
			display: none;
		}
	}
</style>
