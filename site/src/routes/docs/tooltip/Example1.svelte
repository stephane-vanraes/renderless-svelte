<script>
    import { tooltip, Tooltip } from 'renderless-svelte'
</script>

<button use:tooltip="{{text: 'Squirrel'}}">🐿️</button>
<button use:tooltip="{{text: 'Rabbit'}}">🐇</button>
<button use:tooltip="{{text: 'Hamster'}}">🐹</button> 

<Tooltip let:options let:dimensions>
	{#if options}
		<div class="tooltip" style="left: {dimensions.x + (dimensions.width / 2)}px; top: calc({dimensions.y}px - 2.75rem - 5px);">
			<span>{options.text}</span>
		</div>
	{/if}
</Tooltip>

<style>
    button {
        margin: 2rem 1rem;
        padding: 1rem;
    }
	.tooltip {
		background-color: black;
		border-radius: .25rem;
		color: white;
		position: fixed;
		padding: .25rem .5rem;
		transform: translateX(-50%);
        z-index: 1000;
	}
	.tooltip:before {
		border-style: solid;
		border-width: 5px 5px 0 5px;
		border-color: black transparent transparent transparent ;
		content: '';
		height: 0;
		position: absolute;
		left: calc(50% - 5px);
		bottom: -5px;
		width: 0;
	}
</style>