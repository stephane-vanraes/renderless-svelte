<script>
    export let component
</script>

<textarea 
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
    bind:value={component.source}
/>

<style>
    textarea {
        background-color: var(--accent-3);
        border: 2px solid black;
        box-shadow: 0px 2px 4px rgba(0,0,0,.75);
        height: 100%;
        resize: none;
        width: 100%;
    }
</style>
