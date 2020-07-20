<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
		
	export let tabs
	
	const _tabs = writable([])
	const setTab = (id) => _tabs.update(arr => arr.map(t => ({ ...t, active: t.title == id })))
	
	_tabs.subscribe(t => tabs = t)
	
	setContext('tabcontrols_tabs', { _tabs, setTab })

</script>

<slot name="tabs" {tabs}></slot>
<slot></slot>
