const fs = require('fs')
const path = require('path')
const Prism = require('prismjs')

export async function get(req, res) {

	console.log('parsing files')

	const { dir } = req.query

	const files = (await fs.readdirSync(`./src/routes/${dir}`)).filter(file => file.endsWith('.svelte')).map(path.parse)
	const content = {}

	for (let i = 0; i < files.length; i++) {
		const code = await fs.readFileSync(`./src/routes/${dir}/${files[i].base}`, 'utf-8')
		const parsed = Prism.highlight(code, Prism.languages.javascript, 'html')

		content[files[i].name] = parsed
	}

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(content));
}
