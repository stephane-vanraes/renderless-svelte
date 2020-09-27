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
    div > ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style-type: none;
    }
    button {
        border: 1px solid #c0c0c0;
        flex: 0 0 13ch;
        margin: .25rem;
        padding: .5rem .5rem;
    }
    button.active {
        background: #909090;
    }
    span {
        background-color: var(--secondary);
        border: 1px solid #c0c0c0;
        flex: 1 0;
        padding: .75rem .5rem;
        text-align: center;
    }
</style>