<script context="module">
  export async function load({ fetch }) {
    const fetchFolder = (folder) => fetch(`/${folder}.json`).then((res) => res.json());

    return {
      props: {
        pages: {
          common: await fetchFolder('common'),
          components: await fetchFolder('components'),
          utils: await fetchFolder('utils')
        }
      }
    };
  }
</script>

<script>
  import '../app.css';
  import Nav from '$site/components/Nav.svelte';

  export let pages;
</script>

<Nav {...pages} />

<main>
  <slot />
</main>
