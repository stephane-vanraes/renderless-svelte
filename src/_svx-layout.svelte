<script>
	import Related from '$site/components/Related.svelte';

	export let tags = '';
	export let title = '';
</script>

<slot />

<Related sectionTitle="Related Components" path="components" {tags} {title} />
<Related sectionTitle="Related Utitlies" path="utils" {tags} {title} />
<Related sectionTitle="Related Recipes" path="recipes" {tags} {title} />
