<script>
	import { getContext, onMount } from 'svelte'
	
	const { _tabs, setTab } = getContext('tabcontrols_tabs')
	
	export let active = false
	export let disabled = false
	export let id
	export let payload	
	
	const select = () => setTab(payload)
	
	onMount(() => _tabs.update(t => [...t, {		
			active,
			disabled,
			id,
			select,
			payload
		}])
	)
	
	$: tab = $_tabs.find(t => id === t.id)
	$: _active = tab && tab.active
	$: _tabs.update(t1 => t1.map(t2 => t2.id === id ? ({ ...t2, disabled }) : t2 ))
	$: _tabs.update(t1 => t1.map(t2 => t2.id === id ? ({ ...t2, active }) : t2 ))
</script>

{#if _active}
	<slot></slot>
{/if}
