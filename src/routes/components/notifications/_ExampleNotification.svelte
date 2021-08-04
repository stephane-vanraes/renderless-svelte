<script>
  import { fly } from 'svelte/transition';
  export let i;
  export let notificationIndex;
</script>

<div in:fly={{ x: 200 }} out:fly={{ y: 200 }} style="--index: {notificationIndex} ">
  <span>Notification number {i}</span>
</div>

<style>
  div {
    background-color: var(--dark-bg);
    bottom: calc(1em + (var(--index) * 4em));
    box-shadow: 4px 8px 8px hsl(var(--primary-hue), 60%, 20%);
    color: white;
    padding: 1em 2em;
    position: fixed;
    right: 1em;
    transition: bottom 200ms;
  }
</style>
