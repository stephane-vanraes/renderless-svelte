<script lang="ts">
	import { getContext } from 'svelte';

	export let contextName = 'rs-accordion';
	export let open = false;

	const context = getContext<AccordionContext>(contextName) || (() => {});
	const toggle = () => (open = !open);

	$: open && context(() => (open = false));
</script>

<slot name="button" {toggle} {open} />

{#if open}
	<slot />
{/if}
