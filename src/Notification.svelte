<script context="module">
	import { writable } from 'svelte/store'
	
	export const notifications = (() => {
	
		const { update, subscribe } = writable([])
		const push = val => update(arr => [...arr, val])
		const pop = () => update(arr => (arr.shift(), arr))

		return {
			pop,
			push,
			subscribe
		}	
	})()
</script>

<script>	
	export let duration = 0
	
	let timeout
	notifications.subscribe(({ length }) => {
		if (timeout || !length) return
		
		timeout = setTimeout(() => {
			timeout = false
			notifications.pop()
		}, duration)
	})	
</script>

{#if $notifications[0]}
	<slot content="{$notifications[0]}"></slot>
{/if}