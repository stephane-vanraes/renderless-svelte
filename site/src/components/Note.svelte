<div>
    <slot></slot>
</div>

<style>
    div {
        background-color: var(--accent-2);
        border-radius: .25rem;
        box-shadow: 2px 2px 4px rgba(0,0,0,.75);
        padding: 1rem;
    }

    div > :global(a) {
        margin: -.25rem;
        padding: .25rem;
    }

    div > :global(a:active),
    div > :global(a:focus),
    div > :global(a:hover) {
        background-color: white;
    }
</style>