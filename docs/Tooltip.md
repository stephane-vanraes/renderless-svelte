# Tooltip

The Tooltip component offers an easy distributed way of showing a tooltip in your web application by combining the ease of styling of renderless components with the flexibility of actions to add the tooltip to your markup.  It comes in two parts: the renderless component and an action.

```js
import { Tooltip, tooltip } from 'renderless-svelte'
```

## The tooltip action

The `tooltip` action, exposed from the library can be added to any markup element, and takes an object as a parameter. This object can be use as a payload to send later on to the Tooltip component itself with the information from the hovered element.

```html
<button use:tooltip="{{ text: 'This is a button' }}#">Button</button>
```

## The Tooltip component

The Tooltip component itself can be placed anywhere in your markup, but it is recommended to place it somewhere near the top level.  It exposes two values: `options` and `dimensions`.

- _options_ This is the same options as was passed to the action.
- _dimensions_ This are the coordinates and dimensions of the element (x, y, widht, height)

**`options` will be set to false if no element is hovered**

<Tooltip let:options let:dimensions>
	{#if options}
		<div class="tooltip" style="left: {dimensions.x}px; top: {dimensions.y}px;">
			<span>{options.text}</span>
		</div>
	{/if}
</Tooltip>

## Examples

* [Plain modal](https://www.renderless-svelte.dev/components/modal/example-plain)
* [Component based](https://www.renderless-svelte.dev/components/modal/example-component)
* [Dynamic content](https://www.renderless-svelte.dev/components/modal/example-dynamic)
