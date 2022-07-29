<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<a class="title" href="/">Renderless Svelte</a>
	<nav>
		<a href="/" aria-current={$page.url.pathname == '/'}>Home</a>
		<a href="/components" aria-current={$page.url.pathname.startsWith('/components')}>Components</a>
		<a href="/recipes" aria-current={$page.url.pathname.startsWith('/recipes')}>Recipes</a>
		<a href="/common" aria-current={$page.url.pathname.startsWith('/common')}>Common</a>
	</nav>
</header>

<style>
	header {
		background-color: var(--primary-400);
		padding: 1rem 1rem 0;
	}

	a:is(:active, :focus, :hover) {
		text-decoration: underline;
	}

	a[aria-current~='true'] {
		background-color: var(--gray-1000);
	}

	nav {
		justify-content: end;
		display: flex;
	}

	nav > a {
		border-radius: 0.25rem 0.25rem 0 0;
		padding: 0.25rem 0.5rem;
	}
	nav > a:is(:active, :focus, :hover) {
		background-color: var(--primary-200);
	}

	.title {
		font-size: 2rem;
	}
</style>
