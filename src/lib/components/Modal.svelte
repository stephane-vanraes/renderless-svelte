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

    payload.update((p) => [{ component, props, resolve }, ...p]);
    isOpen.set(true);

    return promise;
  };
</script>
