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

{@html markup}

{#each demos as component}
	<svelte:component this={component} />
{/each}
