# Carousel

A simple Carousel component

## The Carousel component

This component takes a list of items and index and will return the current index.  It exposes functions to go the next or previous item as well as way to _jump_ to a specified index.

- _items_ this is the array of items, it is only used to determine the number of entries in the carousel
- _currentIndex_ the index of the currently displayed item
- _loop_ flag indicating that the array should loop around, defaults to _false_
_ _setIndex_ a function allowing the user to move immediately to a specified index
- _controls_ an object containing a _next_ and a _previous_ function

```html
<script>
    import { Carousel } from 'renderless-svelte'
    const items = ["Squirrel 🐿️", "Rabbit 🐇", "Hamster 🐹"]
</script>

<Carousel items="{items}" let:payload let:controls>
	<button on:click={controls.previous}>Previous</button>
    <span>{payload}</span>
	<button on:click={controls.next}>Next</button>
</Carousel>
```

## Animations

There are no default animations in the Carousel

## Examples

* [Plain carousel](http://www.renderless-svelte.dev/components/carousel/example-plain)
* [Carousel with index](http://www.renderless-svelte.dev/components/carousel/example-index)
* [Non-looping carousel](http://www.renderless-svelte.dev/components/carousel/example-noloop)
