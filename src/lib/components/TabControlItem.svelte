<script lang="ts">
	import { getContext, onMount } from 'svelte';

	export let contextName = 'rs-tabcontrol';
	const context = getContext<TabControlContext>(contextName);

	export let active = false;
	export let disabled = false;
	export let id = crypto.randomUUID();
	export let payload = {};

	onMount(() => {
		context.add({
			id,
			active,
			disabled,
			payload,
			select: () => (active = true && context.select(id)),
			deselect: () => (active = false)
		});
	});
</script>

{#if active}
	<slot />
{/if}
