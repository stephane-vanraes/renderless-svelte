<footer>
	<span>&copy; 2022 Stephane Vanraes</span>
	<nav>
		<a href="/components">Components</a>
		<a href="/recipes">Recipes</a>
		<a href="/common">Common</a>
	</nav>
	<nav>
		<a href="githublink">Github</a>
		<a href="/about">About</a>
	</nav>
</footer>

<style>
	footer {
		background-color: var(--gray-700);
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		padding: 1rem;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	a:is(:active, :focus, :hover) {
		text-decoration: underline;
	}

	nav {
		margin-inline: auto;
	}
</style>
