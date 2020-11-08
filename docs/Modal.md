## Modal

The Modal component encapsulates typically modal behaviour as opening and closing, it does this while ensuring only one Modal is open at all times. As always in Renderless-Svelte the actual implementation of the look and feel of the Modal, including potential backdrops is completely up to the user.

In order to work the Modal has to be defined in the markup somewhere, this can be easily done in places like App.svelte, or if using Sapper _layout.svelte. Since it shares resources accross the board, it could even be mounted as seperate component in the index.js file.

## openModal()

The `openModal` function, exposed from the Modal takes as an argument a payload, it is this payload that will be send on to the Modal itself.

The function return a Promise that will be resolved when modal is closed.

```js
import { openModal } from 'renderless-svelte'

openModal({ ... })

openModal({ ... }).then(payload => { ... })
```

## Modal

The Modal component takes a slot that will be shown if a payload has been send to the Modal.  It has two fields:

| Property | Description |
| -------- | ------------ |
| payload | the content to be shown |
| close | a function to close the modal |

## Examples

For brevity, the example code excludes styling, which is of course always done on the consumer side.

```svelte
<script>
    import { Modal, openModal } from 'renderless-svelte'
</script>

<button on:click={() => openModal("Rabbit 🐇")}>Rabbit 🐇</button>

<Modal let:payload let:close>
    <div class="modal">
        <button on:click={close}>&times;</button>
        <span>{payload}</span>
    </div>
</Modal>
```

```svelte
<script>
    import { Modal, openModal } from 'renderless-svelte'

    const open = () => {
        openModal("Rabbit 🐇")
            .then(payload => openModal("Turtle 🐢 is following " + payload))
    }
</script>

<button on:click={open}>Rabbit 🐇</button>

<Modal let:payload let:close>
    <div class="modal">
        <button on:click={close}>&times;</button>
        <span>{payload}</span>
    </div>
</Modal>
```
