import type { RequestHandler } from '.svelte-kit/types/src/routes/components/__types';
import { marked } from 'marked';

const docFiles = await import.meta.glob('/docs/*.md', { as: 'raw' });

export const GET: RequestHandler = async ({ params }) => {
	const docFile = await docFiles[`/docs/${params.slug}.md`]();
	const markup = await marked.parse(docFile);
	const files = Object.keys(await import.meta.glob('./_demos/accordion/*.svelte'));

	return {
		status: 200,
		body: {
			files,
			markup
		}
	};
};
