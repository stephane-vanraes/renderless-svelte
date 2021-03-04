<script>
    import CurvedArrow from '../../icons/CurvedArrow.svelte'
    import Link from '../../components/Link.svelte'
</script>

<Link href="/recipes" borderless>
    <CurvedArrow />
    <span>Back to recipes</span>
</Link>

<article>
    <slot />
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    article :global(h2) {
        color: var(--primary);
        display: grid;
        font-size: 1.25em;
        font-weight: 700;
        gap: 1em;
        grid-template-columns: minmax(50px, 1fr) 1fr minmax(50px, 1fr);
        text-align: center;
    }

    article :global(h2:before, h2:after){
        align-self: center;
        background-color: currentColor;
        clip-path: polygon(0 0, 100% 50%, 0% 100%, 15% 50%);
        content: '';
        height: .5em;
        width: 50px;
    }

    article :global(h2:before) {
        justify-self: end;
        
    }
    article :global(h2:before) {
        transform: rotate(.5turn);
    }

    article :global(h3) {
        color: var(--primary);
        font-size: 1.125em;
        font-weight: 700;
    }

    article :global(table) {
        border-collapse: collapse;
    }

    article :global(table th, table td) {
        padding: .25em .5em;
    }

    article :global(table tr:not(:last-child)) {
        border-bottom: 1px dashed var(--grey);
    }

    article :global(table thead) {
        border-bottom: 1px solid var(--grey);
        font-weight: 700;
    }

    article :global(table td:not(:first-child), table th:not(:first-child)) {
        border-left: 1px solid var(--grey);
    }

    article :global(hr) {
        border: 0;
        border-bottom: 1px dashed var(--primary);
    }
</style>