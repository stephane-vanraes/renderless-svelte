<script>
	import { getContext, onMount } from 'svelte'
	
	const { _tabs, setTab } = getContext('tabcontrols_tabs')
	
	export let active = false
	export let disabled = false
	export let title	
	
	const select = () => setTab(title)
	
	onMount(() => _tabs.update(t => [...t, {		
			active,
			disabled,
			select,
			title
		}])
	)
	
	$: tab = $_tabs.find(t => title === t.title)
	$: _active = tab && tab.active
	$: _tabs.update(t1 => t1.map(t2 => t2.title === title ? ({ ...t2, disabled }) : t2))
	$: _tabs.update(t1 => t1.map(t2 => t2.title === title ? ({ ...t2, active }) : { ...t2, active: active ? false : t2.active }))
</script>

{#if _active}
	<slot></slot>
{/if}
