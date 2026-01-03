<script lang="ts">
	import DomainSlider from '$lib/components/DomainSlider.svelte';
	import PersonaSummary from '$lib/components/PersonaSummary.svelte';
	import ArchetypePanel from '$lib/components/ArchetypePanel.svelte';
	import MobileArchetypeDrawer from '$lib/components/MobileArchetypeDrawer.svelte';
	import { DOMAINS, domainScores, facetScores, setDomainScore, setFacetScore, selectedArchetype } from '$lib/stores/personality';
	import { archetypeSetId } from '$lib/stores/archetypeSet';
</script>

<!-- Desktop: fixed side panel -->
<ArchetypePanel />

<!-- Mobile: pull-up drawer from bottom -->
<MobileArchetypeDrawer />

<div class="min-h-screen py-6 px-4">
	<div class="max-w-xl mx-auto">
		<PersonaSummary />

		<div class="sliders">
			{#each DOMAINS as domain}
				<DomainSlider
					config={domain}
					score={$domainScores[domain.id]}
					facetScores={$facetScores[domain.id]}
					onDomainChange={(value) => setDomainScore(domain.id, value)}
					onFacetChange={(facetIndex, value) => setFacetScore(domain.id, facetIndex, value)}
					archetypeName={$selectedArchetype?.name ?? null}
					archetypeSetId={$archetypeSetId}
				/>
			{/each}
		</div>

		<footer class="text-center mt-8 text-xs text-slate-500">
			<p>Based on BFI-2 (Big Five Inventory-2) personality model</p>
		</footer>
	</div>
</div>
