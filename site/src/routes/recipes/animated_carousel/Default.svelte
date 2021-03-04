<script>
    import { Carousel } from 'renderless-svelte'

    const items = [
        "/images/kitten-1.jpg",
        "/images/kitten-2.jpg",
        "/images/kitten-3.jpg"
    ]
</script>

<Carousel items="{items}" let:payload let:controls loop="true">
    <div class="wrapper">
        <button type="button" on:click={controls.previous}>Previous</button>
        <div class="content">
                <img 
                    src={payload}
                    alt="" />
        </div>
        <button type="button" on:click={controls.next}>Next</button>
    </div>
</Carousel>

<style>
    .wrapper {
        align-items: center;
        display: flex;
        flex-direction: row;
        max-width: calc(400px + 2rem);
        width: 100%;
    }
    button {
        border: 1px solid #c0c0c0;
        flex: 0 0 13ch;
        padding: .75rem .5rem;
        width: 100px;
    }
    .content {
        flex: 0 0 calc(200px + 2rem);
        height: 300px;
        padding: 0 1rem;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
    }
    img {
        display: block;
        height: 300px;
        width: 200px;
        position: absolute;
    }
</style>