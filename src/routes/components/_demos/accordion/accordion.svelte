<script>
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<Accordion>
	<label slot="button" let:toggle let:isOpen>
		<input type="checkbox" on:change={toggle} />
		<span>Click here {isOpen}</span>
	</label>
	<div>Content goes here</div>
</Accordion>
