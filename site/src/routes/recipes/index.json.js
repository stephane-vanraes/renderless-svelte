import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

function isDir(path) {
    try {
        var stat = fs.lstatSync(path)
        return stat.isDirectory()
    } catch (e) { return false }
    // lstatSync throws an error if path doesn't exist
}

const route = 'src/routes/recipes'
const recipes = fs.readdirSync(route)
    .filter(file => isDir(`${route}/${file}`))    
	.map(file => {
		const post = fs.readFileSync(path.resolve(route, `${file}/index.svx`), 'utf-8')
		return {
            ...grayMatter(post).data,
            href: `/recipes/${file}`
        }
	})

export async function get(req, res) {    
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
    res.end(JSON.stringify({
        recipes
    })) 
}
