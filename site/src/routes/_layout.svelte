<script>
    import Header from '../components/Header.svelte'
    import Nav from '../components/Nav.svelte'
</script>

<style>
    main {
        display: inline-block;
        vertical-align: top;
        margin-left: 25ch;
        margin-top: 50px;
        width: calc(100% - 25ch);
    }
</style>

<Header /><Nav /><main><slot></slot></main>