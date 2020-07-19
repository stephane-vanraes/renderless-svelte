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
        color: #e0e0e0;
        display: block;
        padding: .75rem 1rem 0;
    }

    a {
        text-decoration: none;
    }
    a:active,
    a:focus,
    a:hover {
        color: white;
    }
    a.active {
        color: white;
        text-decoration: underline;
    }
    span {
        font-weight: 600;
        text-transform: uppercase;
    }

    div {
        padding-left: 1rem;
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