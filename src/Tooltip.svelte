<script context="module">
	import { writable } from 'svelte/store'
	let options = writable(false)
	let position = writable({})
	
	export const tooltip = (node, opts) => {
		let _opts = opts
		
		const mouseover = () => {
			options.set(_opts)
			position.set(node.getBoundingClientRect())
		}
		const mouseout = () => {
			options.set(false)
		}
		
		node.addEventListener('mouseover', mouseover)		
		node.addEventListener('mouseout', mouseout)
		
		return {
			destroy() {
				node.removeEventListener('mouseover', mouseover)
				node.removeEventListener('mouseout', mouseout)
			},
			update(opts) {
				_opts = opts
			}
		}
	}
</script>

<slot options={$options} position={$position}></slot>