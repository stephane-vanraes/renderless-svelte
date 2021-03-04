const { readdirSync } = require('fs')

export async function get(req, res) {

    const links = readdirSync('./src/routes/recipes', { withFileTypes: true })
        .filter(f => f.isDirectory())
        .map(dir => ({
            title: dir.name.replace(/_/g, ' '),
            href: `/recipes/${dir.name}`
        }))

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(links));
}