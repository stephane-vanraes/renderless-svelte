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
	<div class="tabs" slot="tabs" let:tabs>
		{#each tabs as tab}
			<button on:click={tab.select} class:active={tab.active}>{tab.payload}</button>
		{/each}
	</div>
	<div class="content">
		<TabControlItem active payload="Documentation">
			<Article {markup} />
		</TabControlItem>
		<TabControlItem payload="Demos">
			<Demos {demos} />
		</TabControlItem>
	</div>
</TabControl>

<style>
	button {
		background-color: transparent;
		border-color: var(--gray-600);
		border-style: dashed;
		border-width: 1px 1px 0 0;
		padding: 0.25rem 1rem;
	}
	button:first-child {
		border-inline-start-width: 1px;
	}
	button.active {
		background-color: var(--primary-600);
		border-style: solid;
	}
	button:is(:active, :focus, :hover) {
		background-color: var(--primary-200);
		border-style: solid;
	}

	.content {
		background-color: var(--gray-800);
		border: 1px solid black;
		padding: 1rem;
	}
</style>
