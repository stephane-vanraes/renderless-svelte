# TabControl

This component offers an easy way to create tab controls.  It consists of two parts: the TabControl itself and TabControlItems.

## The TabControl

The TabControl is the container for the TabControlItem and exposes a slot named 'tabs' that can be used to render the actual controls themselves. The _tabs_ header comes with an exported property 'tabs' that has the details for each tab.  The tabs are identified by a property _id_ that has to be unique.

**This uniqueness is not tested by the control and should be ensured by the user**

Each tab object itself comes with the following data

- _active_ flag indicating if this is the active tab
- _disabled_ flag indicating the field is disabled
- _id_ a unique identifier for this tab
- _payload_ a value (can be an object) meant to be used to display the name of the tab
- _select_ a function allowing this tab to be selected

```html
<script>
    import { TabControl } from 'renderless-svelte'
</script>

<TabControl>
    <div slot="tabs" let:tabs>        
        {#each tabs as { active, id, payload, select }}
            <button class:active on:click="{select}">{payload}</button>
        {/each}
    </div>

    <!-- here come the TabControlItems -->
</TabControl>
```

## The TabControlItem

This component creates an item in the TabControl, it will simply wrap a slot that is conditionally rendered based on the currently selected tab.  It takes two attributes

- _active_ a flag indicating the initial state of the tab, defaults to false
- _id_ a unique identifier for this tab
- _payload_ a value (can be an object) meant to be used to display the name of the tab
- _disabled_ flag indicating the field is disabled

## Examples

[Basic](https://www.renderless-svelte.dev/components/tabcontrol/example-basic)

[Responsive](https://www.renderless-svelte.dev/components/tabcontrol/example-responsive)

[With component](https://www.renderless-svelte.dev/components/tabcontrol/example-component)
