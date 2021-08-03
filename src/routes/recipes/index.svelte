<script context="module">
  export async function load({ fetch }) {
    return {
      props: {
        items: await fetch('/recipes.json').then((res) => res.json())
      }
    };
  }
</script>

<script>
  import LinkGroup from '$site/components/LinkGroup.svelte';

  export let items = [];
</script>

<h1>Recipes</h1>

<LinkGroup {items} />
