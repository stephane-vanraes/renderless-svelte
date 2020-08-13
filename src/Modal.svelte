<script context="module">
    import { writable } from 'svelte/store'

    let _open = writable(false)
    let _payload = writable({})

    export const openModal = payload => {
        _open.set(true)
        _payload.set(payload)
    }

    export const closeModal = () => _open.set(false)
</script>

<script></script>

{#if $_open}
    <slot payload={$_payload} close={closeModal}></slot>
{/if}