<script context="module">
    export async function preload() {
        const { paths } = await (await this.fetch('/repl.json')).json()
        
        return {
            paths
        }
    }
</script>

<script>
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { Accordion } from 'renderless-svelte'
    import Checkbox from '../../components/Checkbox.svelte'
    export let paths = []
    
    let showInput = writable(true)
    let showOutput = writable(true)

    setContext('showInput', showInput)
    setContext('showOutput', showOutput)
</script>

<div class="controls">
    <Checkbox label="Code" bind:checked={$showInput} />
    <Checkbox label="Result" bind:checked={$showOutput} />
    <div>
        <Accordion let:toggle>
            <button slot="header" on:click={toggle}>Try on your own, or choose a preset</button>
            <ul>
                {#each paths as path}
                    <li><a href={`repl/${path}`}>{path}</a></li>
                {/each}
            </ul>
        </Accordion>
    </div>
</div>

<div aria-hidden="true">
    {#each paths as path}
        <a href={`repl/${path}`}>{path}</a>
    {/each}
</div>

<slot></slot>

<style>
    [aria-hidden] {
        overflow: hidden;
        visibility: hidden;
        height: 0;
        margin: 0;
        padding: 0;
        width: 0;
    }
    .controls {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding-bottom: 0;;
    }
    div {
        position: relative;
    }
    button {
        background-color: transparent;
        border: 4px solid var(--accent-2);
        border-radius: .5rem;
        padding: .25rem 1rem;
    }
    ul {
        background-color: var(--accent-2);
        list-style-type: none;
        position: absolute;
        bottom: -2px;
        top: calc(2rem - 5px);
        width: 100%;
        z-index: 1;
    }
    li {
        display: block;
    }
    a {
        background-color: var(--accent-2);
        color: white;
        display: block;
        padding: .25rem 1rem;
        text-decoration: none;
    }
    a:hover {
        background-color: white;
        color: var(--accent-2);
    }
</style>