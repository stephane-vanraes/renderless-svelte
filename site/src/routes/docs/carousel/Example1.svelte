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
        align-items: center;
        display: inline-flex;
        gap: 1em;
        max-width: 400px;
        width: 100%;
    }
    button {
        cursor: pointer;
        padding: .25em .5em;
    }
    span {
        flex: 1 0;
        text-align: center;
    }
</style>