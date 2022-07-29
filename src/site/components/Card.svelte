<script lang="ts">
	export let href = '';
</script>

<a {href}>
	<slot />
</a>

<style>
	a {
		aspect-ratio: 1 / 1;
		background-color: var(--secondary-600);
		border-radius: 0.5rem;
		box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
		display: grid;
		place-items: center;
	}
	a:is(:active, :focus, :hover) {
		background-color: var(--secondary-400);
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
	}
</style>
