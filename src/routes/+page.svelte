<script lang="ts">
	import DomainSlider from '$lib/components/DomainSlider.svelte';
	import PersonaSummary from '$lib/components/PersonaSummary.svelte';
	import { DOMAINS, domainScores, facetScores, setDomainScore, setFacetScore } from '$lib/stores/personality';
</script>

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
				/>
			{/each}
		</div>

		<footer class="text-center mt-8 text-xs text-slate-500">
			<p>Based on BFI-2 (Big Five Inventory-2) personality model</p>
		</footer>
	</div>
</div>
