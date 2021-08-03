import { parse } from "path";

export async function get({ params, query }) {

    const paths = import.meta.glob(`./**/*.svx`)

    const { folder } = params
    const tags = query.get('tags')?.split(' ') || ""

    let items = []

    await Promise.all(Object.entries(paths).map(async ([path, page]) => {
        if (!path.startsWith(`./${folder}/`)) return;

        const { metadata } = await page();

        items.push({
            href: parse(path).dir.substr(1),
            tags: metadata.tags?.split(' ') || [],
            title: metadata.title,
        });
    }));

    items.sort((a, b) => a.title < b.title ? -1 : 1)

    if (tags) {
        items = items.filter(c => c.tags.some(r => tags.includes(r)))
    }

    return {
        body: items
    }
}