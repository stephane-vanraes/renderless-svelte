<!--
    The actual Notification wrapper is kept seperate from the Notifications 'manager' to prevent circular dependencies.
-->
<script>
  export let isOpen;
  export let payloads;

  let timeout;
  payloads.subscribe(({ length }) => {
    if (timeout || !length) return;

    timeout = setTimeout(() => {
      timeout = false;
      payloads.pop();
    }, payloads[0].timeout);
  });
</script>

{#if $payloads.length && $isOpen}
  <svelte:component this={$payloads[0].component} {...$payloads[0].props} />
{/if}
