<!--
    The actual Notification wrapper is kept seperate from the Notifications 'manager' to prevent circular dependencies.
-->
<script>
  import { each } from 'svelte/internal';

  export let isOpen;
  export let maxNumberOfNotifications;
  export let payloads;
  export let removeNotification;

  let timeout;
  payloads.subscribe((ps) => {
    if (timeout || !ps.length) return;
    timeout = setTimeout(() => {
      timeout = false;
      removeNotification();
    }, ps[0].timeout);
  });

  $: payloadsToShow = $payloads.slice(0, $maxNumberOfNotifications);
</script>

{#if $isOpen}
  {#each payloadsToShow as p, notificationIndex (p)}
    <svelte:component this={p.component} {...p.props} {notificationIndex} />
  {/each}
{/if}
