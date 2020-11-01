<script>
	import { onMount } from 'svelte'
	import Input from './Input.svelte'
	import Output from './Output.svelte'
	import { TabControl, TabControlItem } from 'renderless-svelte'

	export let components = []

	let compiled
	let worker

	
	$: worker && worker.postMessage(components)

	onMount(() => {
		worker = new Worker('./worker.js')

		worker.addEventListener('message', event => {
			compiled = event.data 
		})
		components = components
	})

</script>

<div class="wrapper">
	<div class="input">
		<TabControl>			
			<div slot="tabs" let:tabs>        
				{#each tabs as { active, payload, select }}
					<button class:active on:click="{select}">{payload}</button>
				{/each}
			</div>
			{#each components as component, id}			
				<TabControlItem {id} payload={`${component.name}.${component.type}`} active={id === 0}>
					<Input bind:component />
				</TabControlItem>
			{/each}
		</TabControl>
	</div>
	<div class="output">
		<Output {compiled} />
	</div>
</div>
