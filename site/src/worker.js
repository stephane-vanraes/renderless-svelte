import * as rollup from 'rollup/dist/es/rollup.browser.js'

const CDN_URL = "https://cdn.jsdelivr.net/npm"
importScripts(`${CDN_URL}/svelte/compiler.js`)

const packages = new Map()
const cache = new Map()
const component_lookup = new Map()

function generate_lookup(components) {
    components.forEach(component => component_lookup.set(`./${component.name}.${component.type}`, component))
}

self.addEventListener('message', async event => {
    generate_lookup(event.data)

    const bundle = await rollup.rollup({ 
        input: './App.svelte',
        plugins: [{
            name: 'json',
            transform: (code, id) => {
                if (!id.endsWith('.json')) return;
        
                return {
                    code: `export default ${code};`,
                    map: null
                };
            }
        }, {
            name: 'repl-plugin',
            async resolveId(importee, importer) {
                // import x from svelte or svelte/x
                if (importee.startsWith('svelte')) return `${CDN_URL}/${importee}/index.mjs`
                
                // import x from './file
                if (importer && importer.startsWith(`${CDN_URL}/svelte`)) {
                    const resolved = new URL(importee, importer).href
                    if (resolved.endsWith('.mjs')) { return resolved } 
                    return `${resolved}/index.mjs`
                }
                
                // from local REPL
                if (component_lookup.has(importee)) return importee
                if (packages.has(importee)) return packages.get(importee)

                // other local import
                if (importee.startsWith(".")) {
                    const url = new URL(importee, importer).href
                    packages.set(importee, url)
                    return url
                }

                // from npm
                const pkg_url = `${CDN_URL}/${importee}/package.json`
                const pkg = await fetch(pkg_url).then(res => res.json())

                if (pkg.svelte || pkg.module || pkg.main) {
                    const base_url = pkg_url.replace(/\/package\.json$/, "");
                    const url = new URL(pkg.svelte || pkg.module || pkg.main, `${base_url}/`).href
                    packages.set(importee, url)
                    return url
                }
            },
            async load(id) {
                if (component_lookup.has(id)) return component_lookup.get(id).source

                if (cache.has(id)) return cache.get(id)

                const code = (await fetch(id)).text()
                cache.set(id, code)

                return code
            },
            transform(code, id) {
                if (/.*\.svelte/.test(id)) return svelte.compile(code).js.code
                else return code
            }
        }]
    })
    const output = (await bundle.generate({ format: 'esm' })).output[0].code

    self.postMessage(output)

})
