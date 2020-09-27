<script>
    import { stores } from '@sapper/app'

    const { page } = stores()
</script>

<nav>
    <li><a href='/' class:active={$page.path === '/'}><h1>Renderless Svelte</h1></a></li>
    <li><a href='/docs' class:active={$page.path.startsWith('/docs')}>Docs</a></li>
    <li><a href='/recipes' class:active={$page.path.startsWith('/recipes')}>Recipes</a></li>
    <li><a href='https://github.com/stephane-vanraes/renderless-svelte' target='_blank'>Github</a></li>
</nav>

<slot></slot>

<style>
    nav {
        display: flex;
        justify-content: center;
        padding: 1rem;
        background: var(--background);
        box-shadow: 0px 2px 4px rgba(0,0,0,.75);
        margin-bottom: 1rem;
    }
    li {
        display: inline-block;
        margin: 0 .5rem;
    }
    a {
        border-bottom: 2px solid transparent;
        display: block;
        font-weight: 600;
        padding: 0 .25rem;
        text-decoration: none;
    }
    a:active,
    a:focus,
    a:hover,
    a.active {
        border-bottom-color: currentColor;
    }
    h1 {
        font-size: 1rem;
    }
</style>