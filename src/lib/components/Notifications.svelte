<script context="module">
  import { get, writable } from 'svelte/store';
  import Modal from './_Modal.svelte';

  let isRendered = false;
  const isOpen = writable(false);
  const payload = writable([]);

  export const closeModal = (msg) => {
    const [current, ...rest] = get(payload);
    payload.set(rest);
    isOpen.set(get(payload).length);
  };

  export const openModal = (component, props = {}) => {
    if (!isRendered) {
      new Modal({
        target: document.body,
        props: {
          payload,
          isOpen
        }
      });
      isRendered = true;
    }

    payload.update((p, timeout = 1000) => [{ component, props, timeout }, ...p]);
    isOpen.set(true);
  };
</script>
