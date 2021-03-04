<script context="module">
    export async function preload() {
        const data = await this.fetch('./docs.json')
        const links = await data.json()

        return { links }
    }
</script>

<script>
    import Link from '../../components/Link.svelte'
    import LinkBlock from '../../components/LinkBlock.svelte'
    import Section from '../../components/Section.svelte'

    export let links = []
</script>

<Section primary>
    <span slot="title">Components</span>
    <p>These are the currently {links.length} components currently available in the library.</p>
</Section>

<LinkBlock { links } />

<Section secondary>
    <span slot="title">A note on animation</span>
    <p>Animations are considered to be part of the rendering, so they are not covered by this library. Some of the <Link href="/recipes/" borderless><span>recipes</span></Link> cover how to add animations to your components.</p>
</Section>

<style>
    p :global(a) {
        font-weight: 700;
    }
</style>