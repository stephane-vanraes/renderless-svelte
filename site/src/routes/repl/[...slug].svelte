<script context="module">
    export async function preload({ params }) {
        const { slug } = params
        
        const result = await this.fetch(`/repl/${slug.join('/')}.json`)
        const json = await result.json()
        return json
    }
</script>

<script>
    import { getContext } from 'svelte'
    import Repl from './_components/Repl.svelte'

    export let components = []
    
    const showInput = getContext('showInput')
    const showOutput = getContext('showOutput')
</script>

<Repl {components} {showInput} {showOutput}/>
