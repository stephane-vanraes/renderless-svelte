<script>
    import { fly } from 'svelte/transition'
    export let direction
    export let payload
    export let loaded
    const load = () => {
        loaded = false;
        setTimeout(() => loaded = true, 50)
    }
    $: payload && load()
</script>

<style>
    div {
        border: 1px solid #c0c0c0;
        flex: 1 0;
        height: 3rem;
        padding: .75rem .5rem;
        position: relative;
    }
    span {
        display: block;
        overflow-x: hidden;
        transition: width 500ms;
        width: 0;
        white-space: nowrap;
    }
    span.loaded {
        text-align: center;
        width: 100%;
    }
    .left {
        position: absolute;
        transition: right 500ms;
        right: -100%;
        width: 100%;
    }
    .left.loaded {
        right: 100%;
    }
</style>

<div>
    <span class:loaded class:left="{direction == -1}">{payload}</span>
</div>