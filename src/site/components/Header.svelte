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
		background-color: var(--primary, #eee);
		padding: 1rem;
	}
	nav {
		justify-content: end;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: underline;
	}

	a:is(:active, :focus, :hover) {
		color: green;
	}

	a[aria-current~='true'] {
		color: red;
	}
</style>
