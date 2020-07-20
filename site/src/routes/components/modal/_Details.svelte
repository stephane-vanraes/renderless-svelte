<script>
    export let animal
    export let icon
    export let i
</script>

<style>
    hr {
        margin: 1rem 0;
    }
    span {
        display: block;
        margin-bottom: 1rem;
    }
</style>

<h2>{icon} Details</h2>

<hr />

<div>
    <span>{animal}</span>
    <span>
        {#each Array(i) as _}
            {icon}
        {/each}
    </span>
</div>
