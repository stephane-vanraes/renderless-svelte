<script context="module">
    import { get, writable } from 'svelte/store'

    let _open = writable(false)
    let _payload = writable({ component: undefined, props: {}})

    let _closePromise

    export const openModalV2 = (component, props = {}) => {
        _open.set(true)
        _payload.set({ component, props })
        return new Promise(resolve => { _closePromise = resolve })
    }

    export const closeModalV2 = () => {
        _open.set(false)
        if (typeof _closePromise === 'function') {
            _closePromise(get(_payload))
        }
    }
</script>

<script></script>

{#if $_open}
    <svelte:component this={$_payload.component} {...$_payload.props} close={closeModalV2} />
{/if}