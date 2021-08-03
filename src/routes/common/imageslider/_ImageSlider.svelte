<script>
  import Carousel from '$lib/components/Carousel.svelte';

  export let lang = {
    next: 'next',
    previous: 'previous'
  };

  export let name = 'rs-image-slider';

  function showCurrent() {
    const selected = items_div.querySelector('.current');
    console.log({ selected });
    const pos = selected.offsetLeft;
    console.log(pos);
    items_div.scrollTo(pos, 0);
  }
  let items_div;
  let currentIndex;

  $: currentIndex && items_div && showCurrent();

  const items = [
    { src: '/images/lyderhorn.jpg', alt: 'Lyderhorn' },
    { src: '/images/alesund.jpg', alt: 'Ålesund' },
    { src: '/images/hardanger.jpg', alt: 'Hardanger' },
    { src: '/images/lyderhorn.jpg', alt: 'Lyderhorn' },
    { src: '/images/alesund.jpg', alt: 'Ålesund' },
    { src: '/images/hardanger.jpg', alt: 'Hardanger' },
    { src: '/images/lyderhorn.jpg', alt: 'Lyderhorn' },
    { src: '/images/alesund.jpg', alt: 'Ålesund' },
    { src: '/images/hardanger.jpg', alt: 'Hardanger' },
    { src: '/images/lyderhorn.jpg', alt: 'Lyderhorn' },
    { src: '/images/alesund.jpg', alt: 'Ålesund' },
    { src: '/images/hardanger.jpg', alt: 'Hardanger' }
  ];
</script>

<Carousel {items} let:current let:controls let:currentIndex bind:currentIndex>
  <slot name="bigpicture">
    <figure>
      <img class="bigpicture" src={current.src} alt={current.alt} />
      <figcaption>{current.caption || current.alt}</figcaption>
    </figure>
  </slot>
  <slot name="selection">
    <div class="selection">
      <slot name="button-previous" previous={controls.previous}>
        <button class="previous" on:click={controls.previous} disabled={currentIndex === 0}>
          <span>{lang.previous}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </button>
      </slot>

      <slot name="thumbnails" {current} {currentIndex} set={controls.set}>
        <div class="items-wrap">
          <div class="items" bind:this={items_div}>
            {#each items as item, i}
              <label class:current={current === item} style="background-image: url({item.src})">
                <input
                  type="radio"
                  {name}
                  value={item}
                  checked={current === item}
                  on:change={() => controls.set(i)}
                />
                <span>{item.alt}</span>
              </label>
            {/each}
          </div>
        </div>
      </slot>

      <slot name="button-next" previous={controls.next}>
        <button class="next" on:click={controls.next} disabled={currentIndex === items.length - 1}>
          <span>{lang.next}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </button>
      </slot>
    </div>
  </slot>
</Carousel>

<style>
  figure {
    max-width: var(--image-size, 100%);
  }
  figure > img {
    max-height: 100%;
    max-width: 100%;
  }
  .selection {
    display: flex;
    justify-content: center;
    max-width: var(--image-size, 100%);
  }
  .next,
  .previous {
    border: 1px solid black;
    flex: 0 0;
    position: relative;
  }
  .next > span,
  .previous > span {
    position: absolute;
    top: -100%;
  }

  .previous {
    transform: rotate(180deg);
  }

  .items-wrap {
    flex: 1 0;
    overflow-x: scroll;
  }

  .items {
    display: flex;
    gap: 0.25em;
    height: var(--thumbnail-size, 100px);
  }

  label {
    aspect-ratio: 1 / 1;
    background-position: center;
    background-size: cover;
    height: 100%;
    position: relative;
  }
  label > input,
  label > span {
    position: absolute;
    z-index: -1;
  }
  label:not(.current):after {
    background-color: #0009;
    content: '';
    inset: 0;
    position: absolute;
  }
</style>
