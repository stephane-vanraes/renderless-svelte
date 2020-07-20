<script>
    import Header from '../components/Header.svelte'
    import Nav from '../components/Nav.svelte'
</script>

<style>
    .wrapper {
        display: flex;
        flex: 1 0;
        flex-direction: row;
        position: relative;
        width: 100%;
    }
    main {
        display: block;
        flex: 1 0 calc(100vw - 20ch);
        width: calc(100vw - 20ch);
    }
    @media screen and (max-width: 550px) {
        main {
            width: 100%;
        }
    }
</style>

<Header />
<div class="wrapper">
    <Nav />
    <main>
        <slot></slot>
    </main>
</div>
