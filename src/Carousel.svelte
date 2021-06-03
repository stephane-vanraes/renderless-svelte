<script>
  import { onMount, onDestroy } from "svelte";
  export let items = [];
  export let currentIndex = 0;
  export let loop = false;
  export const setIndex = (val) => val < items.length && (currentIndex = val);
  export const controls = {
    next: () =>
      (currentIndex =
        currentIndex < items.length - 1
          ? currentIndex + 1
          : loop
          ? 0
          : items.length - 1),
    previous: () =>
      (currentIndex =
        currentIndex != 0 ? currentIndex - 1 : loop ? items.length - 1 : 0),
  };
  export let autoplayInterval = -1; // autoplay disactivated by default
  let interval;
  const autoplay = () => {
    loop = true; // sets loop to true when autoplaying
    interval = setInterval(controls.next, autoplayInterval);
  };
  onMount(() => {
    autoplayInterval > 0 ? autoplay() : {};
  });
  onDestroy(() => clearInterval(interval));
  $: payload = items[currentIndex];
</script>

<slot {currentIndex} {payload} {setIndex} {controls} {loop} />
