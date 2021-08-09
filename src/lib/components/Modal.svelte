<script context="module">
  import { get, writable } from 'svelte/store';
  import Modal from './_Modal.svelte';

  let isRendered = false;
  const isOpen = writable(false);
  const payload = writable([]);

  export const closeModal = (msg) => {
    const modals = get(payload);
    const current = modals.pop()
    payload.set(modals);
    isOpen.set(modals.length);

    current.resolve(msg ?? current.props);
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

    let resolve;

    const promise = new Promise((res) => (resolve = res));

    payload.update((p) => [...p, { component, props, resolve }]);
    isOpen.set(true);

    return promise;
  };
</script>
