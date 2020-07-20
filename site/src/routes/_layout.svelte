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
    }
    main {
        flex: 1 0 550px;
    }
</style>

<Header />
<div class="wrapper">
    <Nav />
    <main>
        <slot></slot>
    </main>
</div>
