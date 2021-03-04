const { readdirSync } = require('fs')

export async function get(req, res) {

    const links = readdirSync('./src/routes/docs', { withFileTypes: true })
        .filter(f => f.isDirectory())
        .map(dir => ({
            title: dir.name,
            href: `/docs/${dir.name}`
        }))

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(links));
}