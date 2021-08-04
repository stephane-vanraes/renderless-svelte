<script>
  import {
    addNotification,
    setMaxNumberOfNotifications
  } from '$lib/components/Notifications.svelte';

  import Button from '$site/components/Button.svelte';
  import NumberInput from '$site/components/NumberInput.svelte';
  import ExampleNotification from './_ExampleNotification.svelte';

  let i = 0;
  const handleClick = () => {
    i++;
    addNotification(ExampleNotification, { i });
  };
</script>

<div>
  <NumberInput
    label="Number of open notifications"
    value={1}
    min="1"
    max="10"
    on:change={(ev) => setMaxNumberOfNotifications(ev.target.value)}
  />

  <Button on:click={handleClick}>Show notification</Button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: max-content;
  }
</style>
