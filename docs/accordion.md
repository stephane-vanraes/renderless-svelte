# Accordion

What is an accordion ?

## Usage

```svelte
<script>
	import { Accordion } from 'renderless-svelte';
</script>

<Accordion open>
	<button slot="button" let:toggle let:isOpen class:isOpen on:click={toggle}>Toggle</button>
	<div>Actual Content</div>
</Accordion>
```

## Properties

| Name        | Type   | Default        | Description                                         |
| ----------- | ------ | -------------- | --------------------------------------------------- |
| contextName | string | "rs-accordion" | Used with <a href="./accordiongroup">AccordionGroup |
| open        | bool   | false          | Initial state of the accordion                      |
| controls    | Object |                | Object exposing a set of controls for the accordion |

The controls objects exposes the functions `close`, `open` and `toggle` so that they can be used in a programmatical way by binding the component to a variable:

```svelte
<script>
	import { Accordion } from 'renderless-svelte';
	let acc;
</script>

<Accordion bind:this={acc}>Content goes here</Accordion>

<button on:click={acc.controls.close}>Close Accordion</button>
```

## Properties of `slot="button"`

| Name   | Type     | Default | Description                                         |
| ------ | -------- | ------- | --------------------------------------------------- |
| toggle | function |         | Exported function that opens or closes an accordion |
| isOpen | bool     | false   | Flag indicating the state of the component          |

## Grouping Accordions

Using <a href="./accordiongroup">AccordionGroup</a> you can group several accordions together. Doing this will ensure there is at all times only one accordion open, whenever an accordion opens it will close any other in the same group.

This component uses Svelte's ContextAPI, the default context for accordion is `rs-accordion`, but this can be overwritten with the `contextName` property, remember to also set this property on the AccordionGroup itself.
