<script lang="ts">
	import { getContext } from 'svelte';
	import type { AccordionContext } from './AccordionGroup.svelte';

	export let contextName = 'rs-accordion';
	export let open = false;

	let isOpen = open;

	const close = () => (isOpen = false);
	const toggle = () => (isOpen = !isOpen);

	export const controls = {
		close,
		open: () => (isOpen = true),
		toggle
	};

	const context: AccordionContext = getContext(contextName);
	const setCurrent = context && context.setCurrent;

	$: isOpen && setCurrent && setCurrent(close);
</script>

<slot name="button" {toggle} {isOpen} />

{#if isOpen}
	<slot />
{/if}
