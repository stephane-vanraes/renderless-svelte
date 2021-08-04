<script context="module">
  import { writable } from 'svelte/store';
  const options = writable(false);
  const dimensions = writable({});

  export const tooltip = (node, opts) => {
    let _opts = opts;

    const mouseover = () => {
      document.addEventListener('scroll', scroll);

      options.set(_opts);
      let dim = node.getBoundingClientRect();

      dimensions.set({
        x: dim.x,
        y: dim.y,
        width: dim.width,
        height: dim.height,
        bottom: dim.bottom,
        left: dim.bottom,
        right: dim.right,
        top: dim.top
      });
    };

    const mouseout = () => {
      document.addEventListener('scroll', scroll);

      options.set(false);
    };

    const scroll = (ev) => {
      let dim = node.getBoundingClientRect();

      dimensions.set({
        x: dim.x,
        y: dim.y,
        width: dim.width,
        height: dim.height,
        bottom: dim.bottom + window.scrollY,
        left: dim.bottom + window.scrollX,
        right: dim.right + window.scrollX,
        top: dim.top + window.scrollX
      });
    };

    node.addEventListener('mouseover', mouseover);
    node.addEventListener('mouseout', mouseout);

    return {
      destroy() {
        node.removeEventListener('mouseover', mouseover);
        node.removeEventListener('mouseout', mouseout);
      },
      update(opts) {
        _opts = opts;
      }
    };
  };
</script>

<slot options={$options} dimensions={$dimensions} />
