<script>
    import { ModalV2, openModalV2 } from 'renderless-svelte'
    import Content from './Content.svelte'
</script>

<button on:click={() => openModalV2(Content, { animal: "Rabbit 🐇" })}>Rabbit 🐇</button>

<ModalV2 />

<style>    
    button {
        border: 1px solid #c0c0c0;
        padding: .75rem .5rem;
    }

</style>
