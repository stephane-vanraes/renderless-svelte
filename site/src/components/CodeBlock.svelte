<script>
    import { linear } from 'svelte/easing'
    import { slide } from 'svelte/transition'
    import { Accordion } from 'renderless-svelte'
    import Button from './Button.svelte'
    import Code from '../icons/Cube.svelte'
    export let code
</script>

<Accordion>    
    <div slot="header" let:toggle>
        <Button on:click={toggle}>
            <Code />
            <span>Show Code</span>
        </Button>
    </div>
    <pre transition:slide={{ easing: linear}}>
        {@html code}
    </pre>
</Accordion>

<style>
    div {
        display: inline-block;
    }
</style>

