<script context="module">
    import * as R from '../../../src/index.js'
    export const openModal = R.openModal
</script>

<style>
    .backdrop {
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        padding: 4rem;
    }
    .content {
        background-color: white;
        border: 2px solid var(--darkblue);
        border-radius: .5rem;
        min-height: 100%;
        width: 100%;
        padding: 1rem;
    }
</style>
    
<svelte:window on:keyup="{ev => ev.key === 'Escape' && R.closeModal()}"></svelte:window>

<R.Modal let:payload let:close>
    <div class="backdrop" on:click={close}>
        <div class="content">
            <slot {close}></slot>
        </div>
    </div>
</R.Modal>