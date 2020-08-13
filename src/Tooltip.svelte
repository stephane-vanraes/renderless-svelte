<script context="module">
	import { writable } from 'svelte/store'
	let options = writable(false)
	let dimensions = writable({})
	
	export const tooltip = (node, opts) => {
		let _opts = opts
		
		const mouseover = () => {
			options.set(_opts)
			let dim = node.getBoundingClientRect()
			dimensions.set({
				x: dim.x + window.scrollX,
				y: dim.y + window.scrollY,
				width: dim.width,
				height: dim.height,
				bottom: dim.bottom + window.scrollY,
				left: dim.bottom + window.scrollX,
				right: dim.right + window.scrollX,
				top: dim.top + window.scrollX,
			})
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