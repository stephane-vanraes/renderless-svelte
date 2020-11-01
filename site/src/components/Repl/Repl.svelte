<script>
	import { onMount } from 'svelte'
	import Input from './Input.svelte'
	import Output from './Output.svelte'
	import { TabControl, TabControlItem } from 'renderless-svelte'

	export let components = []
	export let showInput = true
	export let showOutput = true

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

<div class="controls">
	<label>
		<input type="checkbox" bind:checked={showInput}>
		<span>Code</span>
	</label>
	<label>
		<input type="checkbox" bind:checked={showOutput}>
		<span>Result</span>
	</label>
</div>
<div class="wrapper">
	{#if showInput}
		<div class="input">
			<TabControl>			
				<div class="tabs" slot="tabs" let:tabs>        
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
	{/if}
	{#if showOutput}
		<div class="output">
			<Output {compiled} />
		</div>
	{/if}
</div>

<style>
	.controls {

	}
	
	.wrapper {
		display: flex;
		flex-direction: row;
		gap: .5rem;
		height: 100%;
	}
	.input {
		display: flex;
		flex: 1 0;
		flex-direction: column;
	}
	.output {
		flex: 1 0;
		padding-top: 1.75rem;
	}
	.tabs {
		display: flex;
		flex-wrap: nowrap;
		margin-bottom: .25rem;
	}
	button {
		background: transparent;
		border: 1px solid var(--accent-2);
		padding: .25rem .5rem;
	}
	button.active {
		background:  var(--accent-2);
	}
</style>