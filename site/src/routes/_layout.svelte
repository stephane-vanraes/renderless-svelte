<script>
    import Cube from '../icons/Cube.svelte'
    import Link from '../components/Link.svelte'
    import Nav from '../components/Nav.svelte'

    export let segment
</script>

<header>
    <h1>
        <Link href="/">
            <Cube />
            <span>Renderless Svelte</span>
        </Link>
    </h1>
    <Nav {segment} />
</header>

<main>
    <slot />
</main>

<style>
    header {
        align-content: center;
        display: flex;
        flex: 0 0;
        flex-wrap: wrap;
        font-weight: 700;
        gap: 1em;
        padding: 1em 2em;
    }

    header > h1 {
        flex: 2 0;
        font-size: 1.5em;
        white-space: nowrap;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 0 2em 2em;
    }
</style>