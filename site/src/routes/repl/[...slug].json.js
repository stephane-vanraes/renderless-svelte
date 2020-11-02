import { promises as fs } from 'fs'
import path from 'path'

export async function get(req, res, next) {
    const { slug } = req.params;
    const dir = `src/samples/${slug.join('/')}`

    const files = (await fs.readdir(dir)).filter(file => !file.endsWith('svx'))

    const promises = files.map(async (file, id) => {
        const source = await fs.readFile(`${dir}/${file}`, 'utf-8')
        const { name, ext } = path.parse(file)

        return {
            id,
            name,
			type: ext.substr(1),
			source
        }
    })

    const components = await Promise.all(promises)

    res.writeHead(200, {
        'Context-Type': 'application/json'
    })
    res.end(JSON.stringify({
        components
    }))
}