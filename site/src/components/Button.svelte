<script>
    import { tooltip as tt } from '../components/MyTooltip.svelte'
    export let tooltip;
</script>

<style>
    button {
        background-color: var(--orange-light);
        border: 2px solid var(--orange);
        border-radius: 2rem;
        cursor: pointer;
        padding: .5rem 2rem;
    }

    button:active,
    button:focus,
    button:hover {
        background-color: var(--orange);
        color: white;
        outline: none;
    } 
    button:focus {
        border-color: var(--darkblue);
    }

    button:disabled {
        background-color: var(--grey);
        border-color: var(--grey-dark);
        color: var(--grey-dark);
        cursor: not-allowed;
    }
</style>

<button on:click {...$$props} use:tt={tooltip}><slot></slot></button>