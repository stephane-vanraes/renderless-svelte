<script>
  import { fly } from 'svelte/transition';
  import Carousel from '$lib/components/Carousel.svelte';
  import Chevron from '../icons/Chevron.svg';

  export let duration = 0;

  const items = [
    { src: '/images/lyderhorn.jpg', alt: 'Lyderhorn' },
    { src: '/images/alesund.jpg', alt: 'Ålesund' },
    { src: '/images/hardanger.jpg', alt: 'Hardanger' }
  ];
</script>

<Carousel {items} let:current let:controls let:currentIndex let:direction>
  <div>
    <button on:click={controls.previous} disabled={currentIndex === 0}><Chevron /></button>
    <div class="img">
      {#if duration > 0}
        {#key current}
          <img
            in:fly={{ x: direction * 400, duration }}
            out:fly={{ x: direction * -400, duration }}
            alt={current.alt}
            src={current.src}
          />
        {/key}
      {:else}
        <img alt={current.alt} src={current.src} />{/if}
    </div>
    <button on:click={controls.next} disabled={currentIndex === items.length - 1}
      ><Chevron /></button
    >
  </div>
  <div>{currentIndex + 1} of {items.length}</div>
</Carousel>

<style>
  div {
    justify-content: center;
    display: flex;
  }
  button {
    font-size: 5em;
    padding: 0.5em;
  }
  button:first-child {
    margin-left: auto;
    transform: rotate(180deg);
  }
  button:last-child {
    margin-right: auto;
  }
  button:disabled {
    color: grey;
  }
  .img {
    aspect-ratio: 1 / 1;
    max-width: 400px;
    overflow: hidden;
    position: relative;
    width: 80%;
  }
  img {
    height: 100%;
    position: absolute;
  }
</style>
