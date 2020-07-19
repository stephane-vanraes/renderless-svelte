<style>
    div {        
        padding: .75rem 1rem;
        position: relative;
    }

    div > :global(* + *) {
        margin-top: 1rem;
    }

    div :global(ul) {
        list-style-type: square;
        padding-left: 1.5rem;
    }

    div :global(pre) {
        border-radius: 4px;
        background-color: #e0e0e0;
        border-left: 2px solid var(--primary);
        padding-top: .5rem;
    }
</style>

<div>
    <slot></slot>
</div>