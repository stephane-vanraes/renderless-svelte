<script>
  import Arrow from '$site/icons/Arrow.svg';
  import Button from '$site/components/Button.svelte';
  import TabControl from '$lib/components/TabControl.svelte';
  import TabControlItem from '$lib/components/TabControlItem.svelte';
  import TextInput from '$site/components/TextInput.svelte';

  export let disabled = false;
  export let showNext = false;

  let name = '';
  let email = '';
  let street = '';
  let city = '';
  let postalcode = '';
  let creditcard = '';
</script>

<TabControl let:controls>
  <div class="tabs" slot="tabs" let:tabs>
    {#each tabs as tab}
      <button on:click={tab.select} class:active={tab.active} disabled={tab.disabled}>
        {tab.props.title}
      </button>
    {/each}
  </div>
  <div class="body">
    <TabControlItem id="personal" title="Personal" active>
      <TextInput label="Name" bind:value={name} />
      <TextInput label="Email" bind:value={email} />
      {#if showNext}
        <Button
          on:click={() => {
            controls.enable('address');
            controls.set('address');
          }}
        >
          <span>Next</span>
          <Arrow />
        </Button>
      {/if}
    </TabControlItem>
    <TabControlItem id="address" title="Address" {disabled}>
      <TextInput label="Street" bind:value={street} />
      <TextInput label="City" bind:value={city} />
      <TextInput label="Postal code" bind:value={postalcode} />
      {#if showNext}
        <Button
          on:click={() => {
            controls.enable('payment');
            controls.set('payment');
          }}
        >
          <span>Next</span>
          <Arrow />
        </Button>
      {/if}
    </TabControlItem>
    <TabControlItem id="payment" title="Payment" {disabled}>
      <TextInput label="Credit card" bind:value={creditcard} />
      {#if showNext}
        <Button
          on:click={() => {
            controls.enable('summary');
            controls.set('summary');
          }}
        >
          <span>Next</span>
          <Arrow />
        </Button>
      {/if}
    </TabControlItem>
    <TabControlItem id="summary" title="Summary" {disabled}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{street}</p>
      <p>{city}</p>
      <p>{postalcode}</p>
      <p>{creditcard}</p>
    </TabControlItem>
  </div>
</TabControl>

<style>
  div {
    display: flex;
    max-width: 500px;
    width: 100%;
  }

  .tabs > button {
    border-color: hsl(var(--primary-hue), var(--primary-sat), 40%);
    border-style: solid;
    border-width: 2px 0 0 2px;
    padding: 0.25em 1em;
  }
  .tabs > button:last-child {
    border-right-width: 2px;
  }
  .tabs > button:is(.active, :active, :focus, :hover) {
    background-color: hsl(var(--primary-hue), var(--primary-sat), 80%);
  }

  .tabs > button:disabled {
    background-color: lightgrey;
  }

  .body {
    border: 2px solid hsl(var(--primary-hue), var(--primary-sat), 40%);
    flex-direction: column;
    gap: 1em;
    margin-top: -1em;
    min-height: 200px;
    padding: 1em;
  }

  .body > :global(button) {
    align-self: flex-end;
    max-width: 10ch;
  }
</style>
