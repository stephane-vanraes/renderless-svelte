<script>
	import { getContext } from 'svelte'
	
	const { _tabs, setTab } = getContext('tabcontrols_tabs')
	
	export let active = false
	export let title	
	
	const select = () => setTab(title)
	
	$: _tabs.update(t => [...t, {		
		active,
		select,
		title
	}])
	
	$: tab = $_tabs.find(t => title === t.title)
	$: _active = tab && tab.active
</script>

{#if _active}
	<slot></slot>
{/if}
