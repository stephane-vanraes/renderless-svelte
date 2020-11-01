<script>
    export let checked = false
    export let label
</script>

<label>
    <input type="checkbox" bind:checked>
    <span>{label}</span>
</label>

<style>
    input {
        height: 0;
        left: -9999px;
        position: absolute;
        top: -9999px;
        width: 0;
    }
    span {
        cursor: pointer;
        position: relative;
    }
    span:before {
        border: 4px solid #c0c0c0;
        border-radius: .5rem;
        content: '';
        display: inline-block;
        height: 1rem;
        margin-right: 1ch;
        vertical-align: bottom;
        width: 2rem;
    }
    span:after {
        background-color: #c0c0c0;
        border-radius: .25rem;
        content: '';
        display: block;
        height: calc(1rem + 2px);
        left: 2px;
        position: absolute;
        top: -2px;
        transition: left 100ms, border-radius 100ms;
        width: 1rem;
    }
    input:checked + span:before {
        border-color: var(--accent-2);
    }
    input:checked + span:after {
        background-color: var(--accent-2);
        left: calc(1rem + 4px);
    }
</style>