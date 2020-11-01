<script>
    export let component
</script>

<section>
    <textarea bind:value={component.source}/>
</section>

<style>
    section {
        flex: 1 0;
        height: 100%;
    }
    textarea {
        height: 100%;
        width: 100%;
    }
</style>
