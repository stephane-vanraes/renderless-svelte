<script>
    import { Notification, notifications } from 'renderless-svelte'
</script>

<button on:click={() => notifications.push("Squirrel 🐿️")}>Squirrel 🐿️</button>
<button on:click={() => notifications.push("Rabbit 🐇")}>Rabbit 🐇</button>
<button on:click={() => notifications.push("Hamster 🐹")}>Hamster 🐹</button>

<Notification let:payload>
    <span>{payload}</span>
</Notification>

<style>    
    button {
        border: 1px solid #c0c0c0;
        padding: .75rem .5rem;
    }
    span {
        background-color: black;
        border-top-left-radius: .25rem;
        color: white;
        display: block;
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 1rem;
    }
</style>