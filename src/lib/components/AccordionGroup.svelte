<script context="module" lang="ts">
	export type AccordionContext = {
		setCurrent: Function;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let contextName = 'rs-accordion';

	const current = writable<Function>();

	setContext(contextName, {
		setCurrent: (fn: Function) => {
			$current && $current !== fn && $current();
			current.set(fn);
		}
	});
</script>

<slot />
