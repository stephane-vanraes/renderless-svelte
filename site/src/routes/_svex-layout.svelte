<div class="stack"><slot></slot></div>

<style>
    div :global(table) {
        border-collapse: collapse;
        width: 100%;
    }
    div :global(th),
    div :global(td) {
        padding: .5rem;
        text-align: left;
    }
    div :global(thead) {
        background-color: black;
        color: white;
    }
    div :global(tbody > tr > td:first-child) {
        border-right: 2px solid black;
    }
    div :global(ul) {
        list-style: square;
        padding-left: 1rem;
    }
</style>
