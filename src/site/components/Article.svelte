<script>
	export let markup = '';
</script>

<article>
	{@html markup}
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	article > :global(h1) {
		font-size: 2rem;
		font-weight: 600;
	}

	article > :global(h2) {
		font-weight: 600;
	}

	article > :global(pre) {
		background-color: var(--gray-600);
		border-inline-start: 1rem solid var(--secondary-400);
		padding: 0.5rem;
	}

	article > :global(table) {
		border-collapse: collapse;
		margin: 0 1rem;
	}

	article > :global(table th) {
		border-bottom: 1px solid black;
		font-weight: 600;
		padding: 0.25rem;
		text-align: start;
	}

	article > :global(table td) {
		padding: 0.25rem;
	}
	article > :global(table tr + tr) {
		border-top: 1px solid black;
	}
</style>
