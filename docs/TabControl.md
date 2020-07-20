---
slug: components/tabcontrol
title: TabControl
---

# TabControl

This component offers an easy way to create tab controls.  It consists of two parts: the TabControl itself and TabControlItems.

## The TabControl

The TabControl is the container for the TabControlItem and exposes a slot named 'tabs' that can be used to render the actual controls themselves. The _tabs_ header comes with an exported property 'tabs' that has the details for each tab.  These titles are generated automatically from the tabs themselves and are supposed to be unique.

**This uniqueness is not tested by the control and should be ensured by the user**

Each tab object itself comes with the following data

- _title_ the text to be displayed
- _active_ flag indicating if this is the active tab
_ _select_ a function allowing this tab to be selected

```html
<script>
    import { TabControl } from 'renderless-svelte'
</script>

<TabControl>
    <div slot="tabs" let:tabs>        
        {#each tabs as { active, title, select }}
            <button class:active on:click="{select}">{title}</button>
        {/each}
    </div>

    <!-- here come the TabControlItems -->
</TabControl>
```

## The TabControlItem

This component creates an item in the TabControl, it will simply wrap a slot that is conditionally rendered based on the currently selected tab.  It takes two attributes

- _title_ this is the text rendered in the header and is also used to differentiate between two tabs (so it should be unique)
- _active_ a flag indicating the initial state of the tab, defaults to false

## Examples

[Basic](https://www.renderless-svelte.dev/components/tabcontrol/example-basic)

[Responsive](https://www.renderless-svelte.dev/components/tabcontrol/example-responsive)

[With component](https://www.renderless-svelte.dev/components/tabcontrol/example-component)
