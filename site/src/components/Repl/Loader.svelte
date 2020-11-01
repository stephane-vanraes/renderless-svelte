<script>
    import { onMount } from 'svelte'
    import Repl from './Repl.svelte'

    export let path

    let loader = new Promise(() => {})

    onMount(() => {
        loader = fetch(`/code/${path}.json`).then(res => res.json())
    })
</script>

{#await loader}
    <p>Loading</p>
{:then { components }}
    <Repl {components} />
{/await}
