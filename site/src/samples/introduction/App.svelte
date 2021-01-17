<script>
    import { Accordion } from 'renderless-svelte'
</script>

<Accordion>
    <button slot="header" let:toggle on:click={toggle}>
        Where do we go from here ?
    </button>
    <div>
        <p>Renderless Svelte</p>
        <p>In this REPL you can try out some basic stuff, it doesn't work perfectly yet though...</p>
    </div>
</Accordion>
