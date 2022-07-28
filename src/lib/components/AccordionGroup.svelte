<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let contextName = 'rs-accordion';

	const current = writable<() => void>();
	const context: AccordionContext = (fn) => {
		$current && $current !== fn && $current();
		current.set(fn);
	};
	setContext(contextName, context);
</script>

<slot />
