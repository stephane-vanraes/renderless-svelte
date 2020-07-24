<script>
    import { slide } from 'svelte/transition'
    import { stores } from '@sapper/app'
    const { page } = stores()
    
    export let title = ""
    export let href = ""
</script>

<style>
    a,
    span {
        color: var(--white);
        display: block;
        padding: .375rem 1rem;
    }

    a {
        text-decoration: none;
    }
    a:active,
    a:focus,
    a:hover {
        background-color: var(--secondary);
        color: var(--black);
    }
    a.active {
        text-decoration: underline;
    }
    span {
        font-weight: 600;
        text-transform: uppercase;
    }
    div > :global(a:before) {
        content: '~';
        display: inline-block;
        margin-right: 1ch;
    }
</style>

{#if href}
    <a {href} class:active="{$page.path == href}">{title}</a>
    {#if $page.path.startsWith(href)}
        <div transition:slide="{{duration: 250}}">
            <slot></slot>
        </div>
    {/if}
{:else}
    <span>{title}</span>
{/if}