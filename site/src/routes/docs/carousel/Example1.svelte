<script>
    import { Carousel } from 'renderless-svelte'
    const items = ["Squirrel 🐿️", "Rabbit 🐇", "Hamster 🐹"]
</script>

<Carousel items="{items}" let:payload let:controls>
    <div>
        <button type="button" on:click={controls.previous}>Previous</button>
        <span>{payload}</span>
        <button type="button" on:click={controls.next}>Next</button>
    </div>
</Carousel>

<style>
    div {
        display: flex;
        flex-direction: row;
        max-width: 400px;
        width: 100%;
    }
    button {
        border: 1px solid #c0c0c0;
        flex: 0 0 13ch;
        padding: .75rem .5rem;
    }
    span {
        background-color: var(--secondary);
        border: 1px solid #c0c0c0;
        flex: 1 0;
        padding: .75rem .5rem;
        text-align: center;
    }
</style>