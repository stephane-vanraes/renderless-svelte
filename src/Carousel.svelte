<script> 
	export let items = []
	export let currentIndex = 0
	export let keyed = false
	export let loop = false
	export const setIndex = val => val < items.length && (currentIndex = val)
	export const controls = {
		next: () => 
			currentIndex = currentIndex < items.length - 1 
				? currentIndex + 1 
				: loop
				? 0
				: items.length - 1,
		previous: () => 
			currentIndex = currentIndex != 0 
				? currentIndex - 1 
				: loop
				? items.length - 1
				: 0
	}
	$: payload = items[currentIndex]
</script>

<slot {currentIndex} {payload} {setIndex} {controls} {loop}></slot>
