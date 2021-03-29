<script>
    export let animal
    export let close
</script>


<div class="modal">
    <button on:click={close}>&times;</button>
    <span>{animal}</span>
</div>

<style>
    .modal {
        background-color: black;
        border-radius: .25rem;
        box-shadow: 2px 2px 4px rgba(0,0,0,.75);
        color: white;
        left: 50%;
        min-height: 250px;
        min-width: 250px;
        padding: 1rem;
        position: fixed;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .modal > button {
        background: transparent;
        border: 0;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: .75rem;
        padding: 0;
        position: absolute;
        right: .25rem;
        top: .25rem;
    }    
</style>