<script>
    import { fly } from 'svelte/transition'
    import { stores } from '@sapper/app'

    export let pages = []

    const { page } = stores()

    let isOpen = false;
</script>

<button aria-label="Side menu" on:click={() => isOpen = !isOpen}>
    <svg viewBox="0 0 10 10" height="100%" width="100%">
        <path d="M1,2h8M1,5h8,M1,8h8" stroke-width="1" stroke-linecap="round" stroke="currentColor" />
    </svg>
</button>

<aside class:isOpen>
    {#each pages as { title, items }}
        <h2>{title}</h2>        
        <ul>
            {#each items as { href, title }}
                <li><a href={href} class:active={$page.path === href}>{title}</a></li>
            {/each}
        </ul>
    {/each}
</aside>

<style>
    button {
        border: 0;
        border-radius: .25rem;
        background: var(--background);
        display: none;
        height: 2rem;
        width: 2rem;
        position: absolute;
        top: .5rem;
        right: .5rem;
    }
    aside {
        border-radius: .25rem;
        background: var(--background);
        box-shadow: 2px 2px 4px rgba(0,0,0,.75);
        flex: 0  0 200px;
        padding: 0 1rem;
    }
    ul {
        list-style-type: none;
    }
    h2 {
	    font-size: 1rem;
        font-weight: 600;
        margin: 1rem 0 .25rem;
    }
    a {
        border-bottom: 2px solid transparent;
        display: block;
        padding: .25rem .5rem;
        text-decoration: none;
        text-transform: capitalize;
    }
    a:active,
    a:focus,
    a:hover,
    a.active {
        background-color: white;
        border-bottom-color: currentColor;
    }
    
    @media screen and (max-width: 800px) {
        button {
            display: block;
        }
        aside:not(.isOpen) {
            display: none;
        }
    }
</style>