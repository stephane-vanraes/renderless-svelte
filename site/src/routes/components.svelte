<script>
    import Card from '../components/Card.svelte'
</script>

<style>
    .wrapper {
        margin: 0 2rem 2rem;
    }
    .grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }

    a {
        display: block;
        text-align: center;
        text-decoration: none;
    }
    a:hover > :global(div) {
        background-color: var(--darkblue);
        color: white;
    }
</style>

<div class="wrapper stack">
    <h1>Components</h1>
    <div class="grid">
        <a href="/components/carousel"><Card>Carousel</Card></a>
        <a href="/components/modal"><Card>Modal</Card></a>
        <a href="/components/notifications"><Card>Notifications</Card></a>
        <a href="/components/tabcontrol"><Card>TabControl</Card></a>
        <a href="/components/tooltip"><Card>Tooltip</Card></a>
    </div>
</div>