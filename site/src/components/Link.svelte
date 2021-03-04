<script>
    export let active
    export let borderless
    export let href
</script>

<a {href} {...$$props} class:active class:borderless>
    <slot />
</a>

<style>
    a {
        --link-border-color: var(--secondary);
        --link-border-style: dashed;
        align-items: center;
        display: inline-flex;
        flex-direction: row;
    }

    a > :global(span) {
        border-bottom: 2px var(--link-border-style) var(--link-border-color, currentColor);
        padding: .25em;
    }

    a:active,
    a:focus,
    a:hover {
        --link-border-color: unset;
        --link-border-style: solid;
        color: var(--secondary);
    }

    .borderless {
        --link-border-color: transparent;
    }

    .active {
        --link-border-color: var(--secondary);
        --link-border-style: solid;

    }
</style>
