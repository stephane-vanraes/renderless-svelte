<script>
  import { slide } from 'svelte/transition';
  import Accordion from '$lib/components/Accordion.svelte';
  import Chevron from '../icons/Chevron.svg';

  export let duration = 500;
  export let icon = false;
  export let title = '';
</script>

<div class="wrapper">
  <Accordion>
    <button slot="button" let:toggle let:isOpen on:click={toggle} class:isOpen>
      {#if icon}
        <svelte:component this={icon} />
      {/if}
      <span>{title}</span>
      <Chevron />
    </button>
    <div transition:slide|local={{ duration }}><slot /></div>
  </Accordion>
</div>

<style>
  .wrapper > div {
    padding: 0.5em;
  }
  .wrapper {
    border: 2px solid black;
    max-width: 500px;
  }
  button {
    align-items: center;
    display: flex;
    font-weight: 600;
    gap: 1ch;
    padding: 0.5em;
    width: 100%;
  }

  button:is(:active, :focus, :hover) {
    background-color: hsl(var(--primary-hue), var(--primary-sat), 80%);
  }

  button > :global(svg:last-child) {
    margin-left: auto;
    transform: rotate(90deg);
    transform-origin: center;
    transition: all 200ms;
  }

  button.isOpen {
    border-bottom: 1px dashed grey;
    margin-bottom: 0.25em;
    padding-bottom: 0.25em;
  }

  button.isOpen > :global(svg:last-child) {
    transform: rotate(-90deg);
  }
</style>
