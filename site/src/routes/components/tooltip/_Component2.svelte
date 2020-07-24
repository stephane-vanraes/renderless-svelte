<script>
    export let description
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
	}
	div:before {
		border-style: solid;
		border-width: 5px 5px 5px 0;
		border-color: transparent black transparent transparent ;
		content: '';
		height: 0;
		position: absolute;
		left: -5px;
		top: calc(50% - 5px);
		width: 0;
	}
</style>

<div style="left: {position.x + position.width + 5}px; top: calc({position.y - (position.height / 2) + 5}px);">
    <h2>{icon} {text}</h2>
    <span>{description}</span>
</div>