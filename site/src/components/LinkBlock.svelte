<script>
    import Arrow from '../icons/Arrow.svelte'
    import Link from './Link.svelte'
    export let links = []
</script>

<ul>
    {#each links as { href, title }}
    <li>
        <Link {href} borderless>
            <span>{title}</span>
            <Arrow />
        </Link>
    </li>
    {/each}
</ul>

<style>
    ul {
        column-rule: 1px solid var(--secondary);
        column-width: 175px;
        list-style-type: none;
        margin: auto;
        max-width: 600px;
        width: 100%;
    }

    li {
        page-break-inside: avoid;
        break-inside: avoid;
        text-transform: capitalize;
    }
    
    li > :global(a > span) {
        flex: 1 0;
    }

    li > :global(a > svg) {
        transform: rotate(45deg);
    }

</style>