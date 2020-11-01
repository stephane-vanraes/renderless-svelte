<script>
    import { Accordeon } from 'renderless-svelte'
</script>

<Accordeon>
    <button slot="header" let:toggle on:click={toggle}>
        Where do we go from here ?
    </button>
    <div>
        <p>Renderless Svelte</p>
        <p>In this REPL you can try out some basic stuff, it doesn't work perfectly yet though...</p>
    </div>
</Accordeon>
