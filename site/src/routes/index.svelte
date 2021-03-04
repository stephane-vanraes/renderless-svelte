<script>
    import Section from '../components/Section.svelte'
</script>

<Section primary>
    <span slot="title">About</span>
    <p>Renderless Svelte is a component library like no others, while other libraries offer you nicely styled buttons, inputfields and what not, Renderless Svelte offers you absolute nothing aesthetically pleasing. In fact, if you just use the components as they are, you will only render blank space to your screen.</p>
    <p>What it does offer though is an abstraction of common patterns in a reusable, 100% configurable way. Think of use cases like notifications, modals and more.</p>
</Section>

<Section>
    <span slot="title">Getting Started</span>
    <p>Install renderless svelte via NPM</p>
    <pre>
        npm install --save-dev renderless-svelte
    </pre>
    <p>Import the components you need</p>
    <pre>
        import &lcub; Carousel &rcub; from 'renderles-svelte'
    </pre>
</Section>