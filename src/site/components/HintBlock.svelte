<script>
	import MyAccordion from './MyAccordion.svelte';
	import Hint from '../icons/Hint.svg';
	export let title;
</script>

<MyAccordion icon={Hint} {title}><slot /></MyAccordion>
