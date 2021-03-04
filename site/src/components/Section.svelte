<script>
    export let primary
    export let secondary
</script>

<section class:primary class:secondary>
    <h2><slot name="title"/></h2>
    <slot />
</section>

<style>
    section {
        background-color: var(--background-color, transparent);
        border-radius: 4px;
        border: 2px solid var(--border-color, transparent);
        color: var(--black);
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin: auto;
        padding: 1em;
        width: 100%;
    }
    h2 {
        border-bottom: 2px solid var(--border-color, currentColor);
        font-weight: 700;
    }

    .primary {
        --background-color: var(--primary-light);
        --border-color: var(--primary);
    }

    .secondary {
        --background-color: var(--secondary-light);
        --border-color: var(--secondary);
    }
</style>
