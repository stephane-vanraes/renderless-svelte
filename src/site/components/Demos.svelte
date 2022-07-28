<script>
	export let demos = [];
</script>

<section id="demos">
	{#each demos as component}
		<svelte:component this={component} />
	{/each}
</section>
