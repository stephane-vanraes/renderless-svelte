<script>
  import { page } from '$app/stores';
  import { slide } from 'svelte/transition';
  import Accordion from '$lib/components/Accordion.svelte';
  import Chevron from '../icons/Chevron.svg';

  export let items;
  export let open;
  export let path;
  export let title;

  let controls;
</script>

<Accordion {open} bind:controls>
  <div class="accordion-header" slot="button" let:toggle let:isOpen>
    <a href={path} aria-current={$page.path.startsWith(path)} on:click={controls.open}>{title}</a>
    <button class:isOpen on:click={toggle}><Chevron /></button>
  </div>
  <ul transition:slide>
    {#each items as { href, title }}
      <li>
        <a aria-current={href == $page.path} {href}>{title}</a>
      </li>
    {/each}
  </ul>
</Accordion>

<style>
  ul {
    border-left: 2px solid white;
    padding-left: 1em;
  }

  div {
    display: flex;
  }
  div > a {
    margin-right: auto;
  }

  div > button {
    transform-origin: center;
    transform: rotate(90deg);
    transition: 200ms;
  }
  div > button.isOpen {
    transform: rotate(-90deg);
  }

  a[aria-current~='true'] {
    text-decoration: underline;
  }
</style>
