<script>
    import { TabControl, TabControlItem } from 'renderless-svelte'
</script>

<TabControl>
    <div class="tabs" slot="tabs" let:tabs>
        {#each tabs as { active, disabled, payload, select }}
            <button class:active on:click="{select}" {disabled}>{payload}</button>
        {/each}
    </div>
    <div class="tab">
        <TabControlItem id="S" payload="Squirrel 🐿️" active>
                This is a text about Squirrels 🐿️
        </TabControlItem>
        <TabControlItem id="R" payload="Rabbit 🐇">
            This is a text about Rabbits 🐇
        </TabControlItem>
        <TabControlItem id="H" payload="Hamster 🐹">
            This is a text about Hamsters 🐹
        </TabControlItem>
        <TabControlItem id="D" payload="Dragon 🐉" disabled>
            This is a text about Dragons 🐉
        </TabControlItem>
    </div>
</TabControl>

<style>
    .tabs {
		display: flex;
		flex-direction: row;
        max-width: 400px;
		width: 100%;
    }
    button {
        border: 1px solid #c0c0c0;
        flex: 1 0;
        padding: .25rem .5rem;
    }
    button.active {
        background-color: var(--accent-2);
        color: white;
    }
    button:disabled {
        background-color: #707070;
    }
    .tab {
        border: 1px solid #c0c0c0;
        display: block;
        height: 5rem;
        margin-top: 0;
        max-width: 400px;
        padding: 1rem;
    }
</style>