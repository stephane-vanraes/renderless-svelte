<script>
  import { getContext } from 'svelte';

  export let contextName = 'rs-accordion';
  export let open = false;

  let isOpen = open;

  const close = () => (isOpen = false);
  const toggle = () => (isOpen = !isOpen);

  export const controls = {
    close,
    open: () => (isOpen = true),
    toggle
  };

  const context = getContext(contextName);
  const setCurrent = context && context.setCurrent;

  $: isOpen && setCurrent && setCurrent(close);
</script>

<slot name="button" {toggle} {isOpen} />

{#if isOpen}
  <slot />
{/if}
