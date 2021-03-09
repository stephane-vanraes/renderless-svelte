<script>
    import Github from '../icons/Github.svelte'
    import Link from './Link.svelte'

    export let segment
</script>

<nav>
    <Link href="/" borderless active={segment === undefined}><span>Home</span></Link>
    <Link href="/docs" borderless active={segment === 'docs'}><span>Docs</span></Link>
    <Link href="/recipes" borderless active={segment === 'recipes'}><span>Recipes</span></Link>
    <Link href="https://github.com/stephane-vanraes/renderless-svelte" target="_blank" borderless><Github /><span>Github</span></Link>
</nav>

<style>
    nav {
        align-items: center;
        display: flex;
        flex: 1 0;
        gap: 1em;
        justify-content: flex-end;
    }
</style>