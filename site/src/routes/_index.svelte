<script context="module">
    export async function preload() {        
        return this.fetch(`index.json`)
            .then(r => r.json())
            .then(components => ({ components }))
    }
</script>

<script>
    import * as R from '../../../src/index.js'

    export let components = []
</script>

<style>
    main {
        display: block;
    }
</style>

<h1>What are renderless Components ?</h1>

<main>
    <R.Carousel items="{components}" let:payload>
        <span>{payload.name}</span>
    </R.Carousel>
</main>

