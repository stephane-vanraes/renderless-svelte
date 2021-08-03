<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let contextName = 'rs-tabcontrol';

  const tabs = writable([]);

  const __add = (tab) => tabs.update((t) => [...t, tab]);

  const set = (id) =>
    tabs.update((arr) =>
      arr.map((t) => {
        if (t.id == id) {
          t.__setState(true);
          return { ...t, active: true };
        } else {
          t.active && t.__setState(false);
          return { ...t, active: false };
        }
      })
    );

  const disable = (id) =>
    tabs.update((arr) =>
      arr.map((t) => ({
        ...t,
        disabled: t.id == id ? true : t.disabled
      }))
    );

  const enable = (id) =>
    tabs.update((arr) =>
      arr.map((t) => ({
        ...t,
        disabled: t.id == id ? false : t.disabled
      }))
    );

  export const controls = {
    __add,
    set,
    enable,
    disable
  };

  setContext(contextName, controls);
</script>

<slot name="tabs" tabs={$tabs} />
<slot {controls} />
