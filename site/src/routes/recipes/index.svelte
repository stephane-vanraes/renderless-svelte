<script context="module">
    export async function preload() {
        const data = await this.fetch('./recipes.json')
        const links = await data.json()

        return { links }
    }
</script>

<script>
    import LinkBlock from '../../components/LinkBlock.svelte'
    import Section from '../../components/Section.svelte'

    export let links = []
</script>

<Section primary>
    <span slot="title">Recipes</span>
    <p>The following {links.length} recipes cover common uses case and how to achieve them using renderless svelte.</p>
</Section>

<LinkBlock { links } />

<style>
    p :global(a) {
        font-weight: 700;
    }
</style>