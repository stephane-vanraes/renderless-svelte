<script>
    import { Accordeon, AccordeonGroup } from 'renderless-svelte'
</script>

<AccordeonGroup>
    <Accordeon>
        <button slot="header" let:toggle on:click={toggle}>Squirrel 🐿️</button>
        <div>
            This is a text about Squirrels 🐿️
        </div>
    </Accordeon>
    <Accordeon>
        <button slot="header" let:toggle on:click={toggle}>Rabbit 🐇</button>
        <div>
            This is a text about Rabbits 🐇
        </div>
    </Accordeon>
    <Accordeon>
        <button slot="header" let:toggle on:click={toggle}>Hamster 🐹</button>
        <div>
            This is a text about Hamsters 🐹
        </div>
    </Accordeon>
</AccordeonGroup>

<style> 
	button {
		border: 1px solid #ced4da;
		cursor: pointer;
        display: block;
        max-width: 400px;
        padding: .5rem .5rem;
		width: 100%;
	}

    button:not(:first-of-type) {
        margin-top: 0;
    }

	div {
		border: 1px solid #ced4da;
        border-top: 0;
		display: flex;
        margin-top: 0;
        max-width: 400px;
		padding: 1rem;
	}
</style>
