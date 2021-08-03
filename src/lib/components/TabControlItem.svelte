<script>
  import { getContext, onMount } from 'svelte';

  export let active = false;
  export let contextName = 'rs-tabcontrol';
  export let disabled = false;
  export let id;

  const { __add, set, disable, enable } = getContext(contextName);

  const select = () => set(id);
  const __setState = (state) => (active = state);

  onMount(() =>
    __add({
      __setState,
      active,
      disabled,
      id,
      select,
      props: $$restProps
    })
  );

  $: disabled ? disable(id) : enable(id);
</script>

{#if active}
  <slot />
{/if}
