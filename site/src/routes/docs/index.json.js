import fs from 'fs'

function isDir(path) {
    try {
        var stat = fs.lstatSync(path)
        return stat.isDirectory()
    } catch (e) { return false }
    // lstatSync throws an error if path doesn't exist
}

const route = 'src/routes/docs'
const components = fs.readdirSync(route)
    .filter(file => isDir(`${route}/${file}`))
    .map(c => ({
        href: `/docs/${c}`,
        title: c
    }))

export async function get(req, res) {    
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
    res.end(JSON.stringify({
        components
    })) 
}
