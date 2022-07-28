<script lang="ts">
	import TabControl from '$lib/components/TabControl.svelte';
	import TabControlItem from '$lib/components/TabControlItem.svelte';
	import Article from '$site/components/Article.svelte';
	import Demos from '$site/components/Demos.svelte';
	import type { SvelteComponent } from 'svelte';

	export let files: string[] = [];
	export let markup: string = '';

	let demos: SvelteComponent[] = [];

	const loadAll = async (files: string[]) => {
		demos = await Promise.all(files.map((f) => import(/* @vite-ignore*/ f).then((m) => m.default)));
	};

	$: loadAll(files);
</script>

<TabControl>
	<div slot="tabs" let:tabs>
		{#each tabs as tab}
			<button on:click={tab.select}>{tab.payload}</button>
		{/each}
	</div>
	<TabControlItem active payload="Documentation">
		<Article {markup} />
	</TabControlItem>
	<TabControlItem payload="Demos">
		<Demos {demos} />
	</TabControlItem>
</TabControl>
