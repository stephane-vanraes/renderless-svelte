<script>
    import { TabControl, TabControlItem } from 'renderless-svelte'
    let tabcontrol
    let inactive = {
        person: false,
        address: true,
        payment: true,
        summary: true,
    }
</script>

<TabControl bind:this={tabcontrol}>
    <div class="tabs" slot="tabs" let:tabs>
        {#each tabs as { active, disabled, payload, select }}
            <button {disabled} class:active on:click={select}>{payload}</button>
        {/each}
    </div>
    <div class="stack">
    <TabControlItem id="person" payload="Personal" active disabled={inactive.person}>
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
        <button on:click="{() => { tabcontrol.setTab('address'); inactive.address = false; }}">Next</button>
    </TabControlItem>
    <TabControlItem id="address" payload="Address" disabled={inactive.address}>
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
        <button on:click="{() => { tabcontrol.setTab('payment'); inactive.payment = false }}">Next</button>
    </TabControlItem>
    <TabControlItem id="payment" payload="Payment" disabled={inactive.payment}>
        <h3>How do you want to pay</h3>        
        <label>
            <span>Credit Card</span>
            <input type="text">
        </label>
        <button on:click="{() => { tabcontrol.setTab('summary'); inactive.summary = false }}">Next</button>
    </TabControlItem>
    <TabControlItem id="summary" payload="Summary" disabled={inactive.summary}>
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
    button:disabled {
        background-color: #707070;
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
