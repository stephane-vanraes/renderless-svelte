<script context="module">
    import * as R from '../../../src/index.js'
    export const tooltip = R.tooltip
</script>

<style>
    div {
        background: var(--darkblue);
        border: var(--blue);
        border-radius: .5rem;
        color: white;
        padding: 1rem;
        position: absolute;
    }
</style>


<R.Tooltip let:options let:dimensions>
    {#if options}   
		<div class="tooltip" style="left: {dimensions.x + dimensions.width - 20}px; top: {dimensions.y - 20}px;">
			<span>{options}</span>
		</div>
    {/if}
</R.Tooltip>