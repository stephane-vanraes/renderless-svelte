<script>
	import { browser } from '$app/env';
	import Arrow from '../icons/Arrow.svg';
	import LinkGroup from './LinkGroup.svelte';

	export let path = '';
	export let sectionTitle = '';
	export let tags = '';
	export let title = '';

	let items = [];

	$: browser && tags.length && update(tags);

	async function update(tags) {
		items = (await fetch(`/${path}.json?tags=${tags}`).then((res) => res.json())).filter(
			(r) => r.title !== title
		);
	}
</script>

{#if items.length}
	<section>
		<h2>{sectionTitle}</h2>
		<LinkGroup {items} />
	</section>
{/if}
