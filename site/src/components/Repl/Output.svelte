<script>
    export let compiled

    let iframe

    function update(code) {
        iframe.contentWindow.postMessage(code, '*')
    }

    $: iframe && compiled && update(compiled)

    const srcdoc = `
<!doctype html>
<html>
    <head>
        <script type="module">
            let c;

            function update(code) {
                if (c) {
                    c.$destroy()
                }

                const blob = new Blob([code], { type: 'text/javascript' })
                const url = URL.createObjectURL(blob)

                import(url).then(({ default: App }) => {
                    document.body.innerHTML = ""
                    c = new App({
                        target: document.body
                    })
                })
            }

            window.addEventListener('message', event => {
                update(event.data)
            }, false)
        <\/script>
    </head>
    <body>
    </body>
</html>
`

</script>

<iframe bind:this={iframe} title="Rendered Repl" {srcdoc} />

<style>
    iframe {
        border: 2px solid black;
        box-shadow: 0px 2px 4px rgba(0,0,0,.75);
        height: 100%;
        width: 100%;
    }
</style>