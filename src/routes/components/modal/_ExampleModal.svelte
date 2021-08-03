<script>
  import Button from '$site/components/Button.svelte';
  import MyModal from '$site/components/MyModal.svelte';
</script>

<MyModal let:closeModal>
  <p>This is a modal.</p>
  <p>
    It can be closed by clicking outside of the modal, pressing Escape or using one of the two
    buttons on the modal itself: either the X in the top right hand corner, or the button below.
  </p>
  <hr />
  <Button on:click={closeModal}>Close here</Button>
</MyModal>
