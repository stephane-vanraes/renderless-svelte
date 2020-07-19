<script>
	import { notifications } from '../../../../../src/Notifications.svelte'
    export let animal
    export let icon

    const handleClick = () => {
        i++;

        notifications.push({
            animal,
            icon,
            i
        })
    }
	let i = 0
</script>

<style>
    button {
        border-radius: .5rem;
        padding: .25rem 1rem;
    }
    button:active,
    button:focus,
    button:hover {
        outline: none;
    }
</style>

<button on:click="{handleClick}">
	{animal} {icon}
</button>
