<script lang="ts">
	import Card from './Card.svelte';

	type ItemType = $$Generic<{ url: string }>;
	export let items: Array<ItemType> = [];
</script>

<ul>
	{#each items as item}
		<li>
			<Card href={item.url}>
				<slot {item} />
			</Card>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
</style>
