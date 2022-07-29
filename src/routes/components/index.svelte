<script lang="ts">
	import CardList from '$site/components/CardList.svelte';

	export let components: Site.Component[] = [];
</script>

<CardList items={components} let:item>
	{item.name}
</CardList>
