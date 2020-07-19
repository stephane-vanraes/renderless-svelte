<script>
    import Nav from './components/notifications.svx'
</script>

<header>
    <h1>Renderless Svelte</h1>
    <a href="https://github.com/stephane-vanraes/renderless-svelte" target="_blank">Github</a>
</header>

<Nav />
<main>
    <slot></slot>
</main>