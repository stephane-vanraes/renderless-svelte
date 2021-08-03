<script>
  import { openModal } from '$lib/components/Modal.svelte';
  import Button from '$site/components/Button.svelte';
  import ExampleModal from './_ExampleModal.svelte';
</script>

<div>
  <p>Click the button below to open an example modal.</p>
  <Button on:click={() => openModal(ExampleModal)}>Open Modal</Button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    max-width: 25ch;
    padding: 1em;
  }
</style>
