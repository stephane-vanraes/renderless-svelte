const components = [
    {
        "name": "Carousel",
    },
    {
        "name": "Modal",
    }
]

export function get(req, res) {
    console.log('test')
    
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify(components))
}