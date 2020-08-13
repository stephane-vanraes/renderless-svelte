<script context="module">
    import * as R from '../../../src/index.js'
    export const notifications = R.notifications
</script>

<script>
    import { slide } from 'svelte/transition'
</script>

<style>
    div {
        background: var(--orange);
        border-color: var(--orange-dark);
        border-style: solid;
        border-width: 2px 0 0 2px;
        border-top-left-radius: 1rem;
        position: fixed;
        padding: 1rem;
        bottom: 0rem;
        right: 0rem;
    }
</style>

<R.Notification let:payload duration="2000">
    {#if payload}
        <div in:slide={{y: -500}}>
            {payload}
        </div>
    {/if}
</R.Notification>