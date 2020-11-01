import { promises as fs } from 'fs'

export async function get(req, res, next) {

    const paths = await fs.readdir('src/samples')

    res.writeHead(200, {
        'Context-Type': 'application/json'
    })
    res.end(JSON.stringify({
        paths
    }))

}