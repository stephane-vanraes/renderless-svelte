<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let files: string[] = [];
	export let markup: string = '';

	let demos: SvelteComponent[] = [];

	const loadAll = async (files: string[]) => {
		demos = await Promise.all(files.map((f) => import(/* @vite-ignore*/ f).then((m) => m.default)));
	};

	$: loadAll(files);
</script>

<article>
	{@html markup}
</article>

<hr />

<section id="demos">
	{#each demos as component}
		<svelte:component this={component} />
	{/each}
</section>

<style>
	article,
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	article :global(:where(h1, h2)) {
		font-weight: 600;
	}

	article :global(pre) {
		background-color: burlywood;
		font-family: monospace;
		overflow-x: auto;
		max-width: 100%;
		padding: 0.25rem;
	}
</style>
