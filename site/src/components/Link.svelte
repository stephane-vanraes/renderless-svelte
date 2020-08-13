<script>
    export let href;
</script>

<style>
    a {
        border-bottom: 2px solid currentColor;
        color: var(--orange);
        text-decoration: none;
    }

    a:active,
    a:focus,
    a:hover {
        color: var(--darkblue);
    }
</style>

<a {href} {...$$restProps}><slot></slot></a>