## Accordion

The Accordion is a component build out of two parts: a clickable element and a content box that shows up when said button is clicked. The clickable element should be mounted in a slot named _header_ and has the following fields:

| Property | Description |
| -------- | ------------ |
| toggle | A function to toggle the Accordion |
| isOpen | A flag indicating the current state |

## AccordionGroup

If you group Accordions together in one _AccordionGroup_ this will automatically ensure that only one element can be open at all times. To use it simply add Accordions to the group:

```svelte
<script>
    import { Accordion, AccordionGroup } from '../../../../../src/index'
</script>

<AccordionGroup>
    <Accordion></Accordion>
    <Accordion></Accordion>
    <Accordion></Accordion>
    <Accordion></Accordion>
</AccordionGroup>
```

AccordionGroup has no properties or events itself, it is just a wrapper with some nice functionality.

## Examples

```svelte
<script>
    import { Accordion } from '../../../../../src/index'
</script>

<Accordion>
    <button slot="header" let:toggle on:click={toggle}>Squirrel 🐿️</button>
    <div>
        This is a text about Squirrels 🐿️
    </div>
</Accordion>
```

```svelte
<script>
    import { Accordion, AccordionGroup } from '../../../../../src/index'
</script>

<AccordionGroup>
    <Accordion>
        <button slot="header" let:toggle on:click={toggle}>Squirrel 🐿️</button>
        <div>
            This is a text about Squirrels 🐿️
        </div>
    </Accordion>
    <Accordion>
        <button slot="header" let:toggle on:click={toggle}>Rabbit 🐇</button>
        <div>
            This is a text about Rabbits 🐇
        </div>
    </Accordion>
    <Accordion>
        <button slot="header" let:toggle on:click={toggle}>Hamster 🐹</button>
        <div>
            This is a text about Hamsters 🐹
        </div>
    </Accordion>
</AccordionGroup>
````
