<script>
	import AccordionGroup from '$lib/components/AccordionGroup.svelte';
	import MyAccordion from '$site/components/MyAccordion.svelte';

	export let duration = 0;
</script>

<div>
	<AccordionGroup>
		<MyAccordion {duration} title="Ålesund">
			<img src="/images/alesund.jpg" alt="Ålesund" />
		</MyAccordion>
		<MyAccordion {duration} title="Lyderhorn">
			<img src="/images/lyderhorn.jpg" alt="Lyderhorn" />
		</MyAccordion>
		<MyAccordion {duration} title="Hardangervidda">
			<img src="/images/hardanger.jpg" alt="The Hardangervidda" />
		</MyAccordion>
	</AccordionGroup>
</div>

<style>
	div > :global(* + *) {
		border-top-width: 0 !important;
	}

	img {
		aspect-ratio: 1 / 1;
		display: block;
		margin: auto;
		max-width: 400px;
		width: 100%;
	}
</style>
