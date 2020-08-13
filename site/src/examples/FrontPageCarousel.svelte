<script>
    import Button from '../components/Button.svelte'
    import { Carousel } from '../../../src/index.js'

    const items = ["Squirrel 🐿️", "Rabbit 🐇", "Hamster 🐹"]
</script>

<style>
    .wrapper {
        align-items: center;
        display: flex;
        flex-direction: row;
        margin: auto;
        padding: 1rem;
        width: 325px;
    }
    .content {
        flex: 1 0;
        text-align: center;
    }


</style>

<Carousel items="{items}" let:payload let:controls loop>
	<div class="wrapper">
        <Button type="button" on:click={controls.previous}>&lt;</Button>
        <div class="content">
            <span>{payload}</span>
        </div>
        <Button type="button" on:click={controls.next}>&gt;</Button>
    </div>
</Carousel>