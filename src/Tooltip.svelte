<script context="module">
	import { writable } from 'svelte/store'
	let options = writable(false)
	let dimensions = writable({})
	
	export const tooltip = (node, opts) => {
		let _opts = opts
		
		const mouseover = () => {
			options.set(_opts)
			dimensions.set(node.getBoundingClientRect())
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

<slot options={$options} dimensions={$dimensions}></slot>