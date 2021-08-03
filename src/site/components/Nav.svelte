<script>
  import { page } from '$app/stores';
  import Cube from '../icons/Cube.svg';
  import NavBlock from './NavBlock.svelte';

  export let common = [];
  export let components = [];
  export let utils = [];
</script>

<nav>
  <a href="/"><Cube />Renderless Svelte</a>
  <a href="/" aria-current={$page.path === '/'}>Introduction</a>
  <NavBlock items={components} path="/components" title="Components" open />
  <NavBlock items={utils} path="/utils" title="Utilities" />
  <NavBlock items={common} path="/common" title="Common" />
  <a href="/recipes" aria-current={$page.path.startsWith('/recipes')}>Recipes</a>
</nav>

<style>
  nav {
    background-color: hsl(var(--primary-hue), var(--primary-sat), 20%);
    border-right: 6px solid hsl(var(--primary-hue), var(--primary-sat), 60%);
    color: white;
    display: flex;
    flex: 1 0 20%;
    flex-direction: column;
    gap: 0.5em;
    max-width: 25ch;
    padding: 1em;
  }

  a[aria-current~='true'] {
    text-decoration: underline;
  }
</style>
