<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let contextName = 'rs-accordion';

	const current = writable(false);

	setContext(contextName, {
		setCurrent: (fn) => {
			$current && $current !== fn && $current();
			current.set(fn);
		}
	});
</script>

<slot />
