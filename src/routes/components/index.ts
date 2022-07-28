import type { RequestHandler } from './__types';
import { parse } from 'path';

export const GET: RequestHandler<{
	components: Site.Component[];
}> = async () => {
	const components: Site.Component[] = [];
	const files = await import.meta.glob('/src/lib/components/**/*.svelte');
	for (const file in files) {
		const { name } = parse(file);
		components.push({
			name,
			url: '/components/' + name.toLowerCase()
		});
	}

	return {
		status: 200,
		body: {
			components
		}
	};
};
