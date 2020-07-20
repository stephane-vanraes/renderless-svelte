<script>
    export let animal
    export let icon
    export let i
</script>

<style>
    hr {
        margin: 1rem 0;
    }
</style>

<h2>{icon} {animal}</h2>

<hr />

<div>
    You chose this animal {i} {i == 1 ? 'time' : 'times'}.
</div>
