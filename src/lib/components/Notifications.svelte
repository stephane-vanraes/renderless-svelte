<script context="module">
  import { get, writable } from 'svelte/store';
  import Notification from './_Notification.svelte';

  let isRendered = false;
  const isOpen = writable(false);
  const payloads = writable([]);
  const maxNumberOfNotifications = writable(1);

  export const setMaxNumberOfNotifications = maxNumberOfNotifications.set;

  export const removeNotification = () => {
    const [_, ...rest] = get(payloads);
    payloads.set(rest);
    isOpen.set(get(payloads).length);
  };

  export const addNotification = (component, props = {}, timeout = 5000) => {
    if (!isRendered) {
      new Notification({
        target: document.body,
        props: {
          maxNumberOfNotifications,
          removeNotification,
          payloads,
          isOpen
        }
      });
      isRendered = true;
    }

    payloads.update((p) => [...p, { component, props, timeout }]);
    isOpen.set(true);
  };
</script>
