# Renderless Svelte Components

## What are renderless components ?

Renderless components are components that do not render anything by themselves, instead to encapsulate common behaviour and leave the actual output up to the consumer.  In Svelte we achieve this through the use of slots.

## Components

### Notifications

This is a straightforward Notification component consisting of two parts:

- a shared notification queue
- a wrapper for the actual notification

**the queue**

The queue is a readonly svelte store that exposes two additional functions:
- *pop* removes the first item on the queue
- *push* adds an item to the end of the queue

```js
import { notifications } from 'renderless-svelte'

notifications.push("Something happened")
```

**the notification component**

This component reacts to elements being added a queue and can be initialized with a timer to specify how long a notification should stay visible.

- _payload_ will be the current item from the queue, this can be any kind of object, allowing for great flexibility in how the notifications will look like.
- _duration_ determines how long a notification should remain visible, default is 1000 (corresponding to one second)

```html
<script>
    import { Notification } from 'renderless-svelte'
</script>

<Notification let:payload duration="200">
    <span>{payload}</span>
</Notification>
```
