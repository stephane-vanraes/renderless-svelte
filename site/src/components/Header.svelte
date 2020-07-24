<script>
    import Nav from './Nav.svelte'
</script>

<style>
    header {
        align-items: center;
        background-color: var(--primary-dark);
        color: var(--white);
        display: flex;
        flex-direction: row;
        height: 40px;
        position: fixed;
        padding: .5rem;
        top: 0;
        width: 100%;
        z-index: 100;
    }
    svg {
        fill: currentColor;
        height: 100%;
    }
    h1 {
        font-size: 1.25rem;
        flex: 1 0;
        margin: 0 .5rem;
    }
</style>

<header>
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 512">
        <path d="M588.1 408.4L740.6 256 588.1 103.6 691.7 0l256.2 256-5.9 5.8-6.2 6.3-91.6 91.6-.1-.1L691.7 512 588.1 408.4zM691.7 48.2l-55.4 55.4L788.8 256 636.4 408.4l55.4 55.3 207.8-207.8-55.3-55.3-12.2-12L691.7 48.2zM435.9 103.6L283.4 256l152.5 152.4L332.3 512 76.1 256l5.9-5.8 6.2-6.3 91.6-91.6.1.1L332.3 0l103.6 103.6zM332.3 463.8l55.4-55.4L235.2 256l152.4-152.4-55.4-55.3-207.8 207.8 55.3 55.3 12.2 12 140.4 140.4z"/>
    </svg>
    <h1>Renderless Svelte</h1>
    <Nav />
</header>