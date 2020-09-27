<script context="module">
    export async function preload() {
        const res = await this.fetch('./docs.json')
        const data = await res.json()

        return data
    }
</script>

<script>
    import Aside from '../../components/Aside.svelte'

    export let components = []

    const pages = [
            {
                title: 'Getting Started',
                items: [
                    { href: '/docs', title: 'Introduction'},
                    { href: '/docs/installation', title: 'Installation'},
                ]
            },
            {
                title: 'Components',
                items: components
            }
        ]
</script>

<main>
    <div class="stack">
        <slot></slot>
    </div>
    <Aside {pages} />
</main>

<style>
    main {
        display: flex;
        flex: 1 0;
        flex-direction: row;
        gap: 1rem;
        padding: 0 1rem 1rem;
    }
    div {
        flex: 1 0;
        overflow: hidden;
    }
</style>