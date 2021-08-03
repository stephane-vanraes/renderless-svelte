<!--
    The actual Modal wrapper is kept seperate from the Modal 'manager' to prevent circular dependencies.
-->
<script>
  export let isOpen;
  export let payload;
</script>

{#if $payload.length && $isOpen}
  <svelte:component this={$payload[0].component} {...$payload[0].props} />
{/if}
