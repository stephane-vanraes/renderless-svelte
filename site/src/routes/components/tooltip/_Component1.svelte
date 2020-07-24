<script>
    export let icon
    export let position
    export let text

    $: console.log(position)
</script>

<style>    
	div {
		background-color: black;
		border-radius: .25rem;
		color: white;
		position: fixed;
		padding: .25rem .5rem;
		transform: translateX(-50%);
	}
	div:before {
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

<div style="left: {position.x + (position.width / 2)}px; top: calc({position.y}px - 2.75rem - 5px);">{icon} {text}</div>