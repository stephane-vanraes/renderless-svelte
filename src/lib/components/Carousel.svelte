<script>
  import { tick } from 'svelte';
  export let items = [];
  export let currentIndex = 0;
  export let loop = false;

  let direction = 1;

  async function set(val) {
    if (val > items.length || val === currentIndex) return;

    direction = 0;
    await tick();
    currentIndex = val;
  }

  async function next() {
    direction = 1;
    await tick();
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : loop ? 0 : items.length - 1;
  }

  async function previous() {
    direction = -1;
    await tick();
    currentIndex = currentIndex != 0 ? currentIndex - 1 : loop ? items.length - 1 : 0;
  }

  export const controls = {
    next,
    previous,
    set
  };

  $: current = items[currentIndex];
</script>

<slot {currentIndex} {current} {controls} {loop} {direction} />
