<script>
  import Close from '../icons/Close.svg';
  import { closeModal } from '$lib/components/Modal.svelte';
  import clickOutside from '$lib/utils/clickOutside';

  const handleKey = ({ key }) => key === 'Escape' && closeModal();
</script>

<svelte:window on:keyup={handleKey} />

<div class="modal" use:clickOutside on:click_outside={closeModal}>
  <div class="modal-header">
    <button on:click={() => closeModal({ cancelled: true })} aria-label="Close Modal">
      <Close />
    </button>
  </div>
  <div class="modal-body">
    <slot {closeModal} />
  </div>
</div>

<style>
  .modal {
    background-color: white;
    border: 2px solid hsl(var(--primary-hue), var(--primary-sat), 20%);
    border-radius: 1em;
    box-shadow: 4px 8px 8px hsla(var(--primary-hue), var(--primary-sat), 20%, 0.4);
    display: flex;
    flex-direction: column;
    inset: 20% 20% 20% 20%;
    overflow: hidden;
    position: absolute;
  }
  .modal-header {
    background-color: hsl(var(--primary-hue), var(--primary-sat), 20%);
    color: white;
    height: 2em;
    position: relative;
  }
  button {
    background: transparent;
    border: 0;
    right: 0.5em;
    position: absolute;
    top: 0.5em;
  }
  .modal-body {
    padding: 1em;
  }
</style>
