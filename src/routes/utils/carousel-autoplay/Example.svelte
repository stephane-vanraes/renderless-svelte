<script>
	import Autoplayer from '$lib/utils/autoplay';
	import Carousel from '$lib/components/Carousel.svelte';
	import Pause from '$site/icons/Pause.svg';
	import Play from '$site/icons/Play.svg';

	let carousel;
	$: player = carousel && Autoplayer(carousel);

	const items = [
		{ src: '/images/lyderhorn.jpg', alt: 'Lyderhorn' },
		{ src: '/images/alesund.jpg', alt: 'Ålesund' },
		{ src: '/images/hardanger.jpg', alt: 'Hardanger' }
	];
</script>

<Carousel {items} let:current let:currentIndex bind:this={carousel} loop>
	<div>
		<img alt={current.alt} src={current.src} />
	</div>
	<div>
		<button on:click={player.start}>Play<Play /></button>
		<span>{currentIndex + 1} of {items.length}</span>
		<button on:click={player.stop}>Stop<Pause /></button>
	</div>
</Carousel>

<style>
	div {
		justify-content: center;
		display: flex;
		gap: 1ch;
	}
	button {
		align-items: center;
		background: black;
		border-radius: 0.25em;
		color: white;
		display: flex;
		gap: 1ch;
		padding: 0.25em 0.5em;
	}
	button:is(:active, :focus, :hover) {
		background-color: grey;
	}
	img {
		aspect-ratio: 1 / 1;
		max-width: 400px;
		width: 80%;
	}
</style>
