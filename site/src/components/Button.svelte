<button on:click>
    <slot />
</button>

<style>
    button {
        align-items: center;
        border: 2px solid currentColor;
        border-radius: 2em;
        cursor: pointer;
        display: inline-flex;
        font-weight: bold;
        gap: 1ch;
        padding: .25em .5em;
    }

    button:active,
    button:focus,
    button:hover {
        color: var(--primary);
    }
</style>