<script>
  import Button from '$site/components/Button.svelte';
  import TabControl from '$lib/components/TabControl.svelte';
  import TabControlItem from '$lib/components/TabControlItem.svelte';

  let enabledC = false;
</script>

<TabControl let:controls>
  <div class="tabs" slot="tabs" let:tabs>
    {#each tabs as tab}
      <button on:click={tab.select} disabled={tab.disabled} class:active={tab.active}>
        {tab.props.title}
      </button>
    {/each}
  </div>

  <div class="body">
    <TabControlItem id="A" title="tab A" active>
      <label>
        <span>Enable Tab C</span>
        <input type="checkbox" bind:checked={enabledC} />
      </label>
    </TabControlItem>
    <TabControlItem id="B" title="tab B">
      <Button on:click={() => controls.set('A')}>Goto A</Button>
    </TabControlItem>
    <TabControlItem id="C" title="tab C" disabled={!enabledC}>CCC</TabControlItem>
  </div>
</TabControl>

<style>
  .tabs,
  .body {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
  .tabs {
    border-bottom: 2px solid hsl(var(--primary-hue), var(--primary-sat), 20%);
    display: flex;
  }

  button {
    border: 2px solid hsl(var(--primary-hue), var(--primary-sat), 20%);
    border-style: solid;
    border-width: 2px 2px 0 0;
    padding: 0.5em 2em;
  }
  button:first-child {
    border-left-width: 2px;
    border-top-left-radius: 5px;
  }
  button:last-child {
    border-top-right-radius: 5px;
  }
  button:is(.active, :active, :focus, :hover) {
    background-color: hsl(var(--primary-hue), var(--primary-sat), 80%);
  }
  button:disabled {
    background-color: grey;
  }
  .body {
    border: 2px dashed hsl(var(--primary-hue), var(--primary-sat), 20%);
    border-top: 0;
    margin-top: -1em;
    min-height: 100px;
    padding: 0.5em;
  }
</style>
