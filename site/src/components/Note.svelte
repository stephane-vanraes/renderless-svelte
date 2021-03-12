<script>
    import Warning from '../icons/Warning.svelte'
</script>

<div>
    <Warning />
    <p>
        <slot />
    </p>
</div>

<style>
    div {
        align-items: center;
        background-color: var(--secondary-light);
        border: 3px solid black;
        border-radius: 4px;
        display: flex;
        gap: 1ch;
        padding: .5em;
    }

    div > :global(svg) {
        font-size: 2em;
    }

    div :global(a) {
        text-decoration: underline;
        text-decoration-color: black;
    }
</style>
