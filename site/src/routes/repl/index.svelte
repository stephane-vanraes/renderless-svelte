<script context="module">
    export async function preload() {
        const data = await this.fetch('/repl.json')
        const json = await data.json()
        return json
    }
</script>

<script>
    import { onMount } from 'svelte'
    import Checkbox from '../../components/Checkbox.svelte'
    import Repl from './_components/Repl.svelte'
    import SelectBox from '../../components/SelectBox.svelte'

    export let paths = []

    let path = "introduction"
    
    let showInput = true;
    let showOutput = true;

    let loader = new Promise(() => {})

    const load = () => loader = fetch(`/repl/${path}.json`).then(res => res.json())

    onMount(load)

    $: process.browser && path && load()
</script>

<div class="controls">
    <Checkbox label="Code" bind:checked={showInput} />
    <Checkbox label="Result" bind:checked={showOutput} />
    <SelectBox label="Try on your own, or choose a preset" options={paths} bind:value={path} />
</div>

{#await loader}
    <p>Loading</p>
{:then { components }}
    <Repl {components} {showInput} {showOutput}/>
{/await}

<style>
    .controls {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding-bottom: 0;;
    }
    .controls > :global(:nth-child(3)) {
        flex: 1 0 100%;
        width: 100%;
    }
</style>