<script lang="ts">
	export let components: Site.Component[] = [];
</script>

<ul>
	{#each components as { name, url }}
		<li>
			<a href={url}>{name}</a>
		</li>
	{/each}
</ul>
