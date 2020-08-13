<script>
    export let title;
</script>

<style>
    section {
        padding: 2rem;
    }

</style>

<section id="{title.replace(' ', '-')}" class="stack">
    <h2>{title}</h2>
    <slot></slot>
</section>