<script>
	import Footer from '$site/components/Footer.svelte';
	import Header from '$site/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex-grow: 1;
		padding: 1rem;
	}
</style>
