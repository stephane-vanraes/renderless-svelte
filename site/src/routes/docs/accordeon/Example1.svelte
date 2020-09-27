<script>
    import { Accordeon } from 'renderless-svelte'
</script>

<Accordeon>
    <button slot="header" let:toggle on:click={toggle}>Squirrel 🐿️</button>
    <div>
        This is a text about Squirrels 🐿️
    </div>
</Accordeon>

<style> 
	button {
		border: 1px solid #ced4da;
		cursor: pointer;
		display: block;
        max-width: 400px;
        padding: .5rem .5rem;
		width: 100%;
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