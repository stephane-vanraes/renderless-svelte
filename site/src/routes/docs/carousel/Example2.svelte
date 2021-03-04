<script>
    import { Carousel } from 'renderless-svelte'
    const items = ["Squirrel 🐿️", "Rabbit 🐇", "Hamster 🐹"]
</script>

<Carousel items="{items}" let:payload let:setIndex let:currentIndex>
    <div>
        <span>{payload}</span>
        <ul>
            {#each items as _, i}
                <li>
                    <button class:active={currentIndex === i} on:click={() => setIndex(i)}>{i}</button>
                </li>
            {/each}
        </ul>
    </div>
</Carousel>

<style>
    div {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        width: 100%;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style-type: none;
    }
    button {
        border: 1px solid;
        cursor: pointer;
        margin: .25rem;
        padding: .5rem .5rem;
    }
    button.active {
        background: #aaa7;
    }
    span {
        padding: .75rem .5rem;
        text-align: center;
    }
</style>