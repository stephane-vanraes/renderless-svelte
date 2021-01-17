<script>
	import { getContext } from 'svelte'
	export let isOpen = false
	
	const close = () => isOpen = false
	const toggle = () => isOpen = !isOpen
    
    const context = getContext('Accordion')
	const setCurrent = context && context.setCurrent
	
	$: isOpen && setCurrent && setCurrent(close)
	
</script>

<slot name="header" {toggle} {isOpen} />
{#if isOpen}
	<slot />
{/if}