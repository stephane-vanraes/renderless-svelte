<script>
    import CodeBlock from './CodeBlock.svelte'

    export let component
    export let code
</script>

<div>
    <svelte:component this={component}></svelte:component>
</div>

<p>
    <slot />
</p>

{#if code}
    <CodeBlock {code} />
{/if}

<style>
    div {
        background-color: white;
        border-radius: 4px;
        padding: 1em;
    }
</style>
