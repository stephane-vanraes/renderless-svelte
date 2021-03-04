<script>
    import { TabControl, TabControlItem } from 'renderless-svelte'
    let tabcontrol
</script>

<TabControl bind:this={tabcontrol}>
    <div class="tabs" slot="tabs" let:tabs>
        {#each tabs as { active, payload, select }}
            <button class:active on:click={select}>{payload}</button>
        {/each}
    </div>
    <div class="stack">
    <TabControlItem id="person" payload="Personal" active>
        <h3>Your details</h3>
        <label>
            <span>Name</span>
            <input type="text">
        </label>
        <label>
            <span>Email</span>
            <input type="email">
        </label>
        <label>
            <span>Phonenumber</span>
            <input type="phone">
        </label>
        <button on:click="{() => tabcontrol.setTab('address')}">Next</button>
    </TabControlItem>
    <TabControlItem id="address" payload="Address">
        <h3>Your address</h3>
        <label>
            <span>Street</span>
            <input type="text">
        </label>
        <label>
            <span>City</span>
            <input type="text">
        </label>
        <label>
            <span>Postal Code</span>
            <input type="text">
        </label>
        <button on:click="{() => tabcontrol.setTab('payment')}">Next</button>
    </TabControlItem>
    <TabControlItem id="payment" payload="Payment">
        <h3>How do you want to pay</h3>        
        <label>
            <span>Credit Card</span>
            <input type="text">
        </label>
        <button on:click="{() => tabcontrol.setTab('summary')}">Next</button>
    </TabControlItem>
    <TabControlItem id="summary" payload="Summary">
        <h3>Here is a summary</h3>
    </TabControlItem>
</div>
</TabControl>

<style>
    .tabs {
        display: flex;
        flex-direction: row;
        max-width: 400px;
    }
    button {
        border: 1px solid black;
        display: block;
        flex: 1 0;
        padding: .5rem 1rem;
    }
    .active {
        background-color: var(--background);
    }
    div:not(.tabs) {
        border: 1px solid black;
        margin-top: 0;
        height: 250px;
        max-width: 400px;
        padding: 1rem;
    }
    label > span {
        display: block;
    }
</style>
