<script>
    export let label = ""
    export let options = []
    export let value = ""
</script>

<label>
    <span>{label}</span>
    <select bind:value>
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
</label>

<style>
    select {
        border: 2px solid var(--accent-2);
        border-radius: 4px;
        padding: .25rem 1rem;
    }
    option {
        text-transform: capitalize;
    }
</style>