<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let contextName = 'rs-tabcontrol';

	const tabs = writable<TabControlItem[]>([]);

	setContext<TabControlContext>(contextName, {
		add: (tab) => ($tabs = [...$tabs, tab]),
		remove: (id) => ($tabs = $tabs.filter((t) => t.id !== id)),
		select: (id) =>
			($tabs = $tabs.map((t) => {
				t.id !== id && t.active && t.deselect();
				return { ...t, active: t.id === id };
			})),
		update: (id, tab) => ($tabs = $tabs.map((t) => (t.id === id ? { ...t, ...tab } : t)))
	});
</script>

<slot name="tabs" tabs={$tabs} />
<slot />
