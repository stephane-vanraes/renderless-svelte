<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	
	let current = writable(false)
	
	setContext('accordeon', {
		setCurrent: fn => {
			$current && $current !== fn && $current()
			current.set(fn)
		}
	})
</script>

<slot />
