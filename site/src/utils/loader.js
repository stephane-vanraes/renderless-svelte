export default async function load(path, fetch) {
    const data = await fetch(`./parse.json?dir=${path}`)
    const examples = await data.json()
    return { examples }
}
