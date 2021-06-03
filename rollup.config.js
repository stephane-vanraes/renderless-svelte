import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import fs from 'fs';

const plugins = [svelte(), resolve()]

export default [
	{
		input: 'src/components/index.js',
		output: [
			{ file: 'dist/index.mjs', format: 'esm' },
			{ file: 'dist/index.js', format: 'cjs' },
		],
		plugins
	},
	...fs.readdirSync('src', { withFileTypes : true })
	.filter(f => f.isDirectory() && f.name !== 'components')
	.map(({ name }) => ({
		input: `src/${name}/index.js`,
		output: [
			{ file: `dist/${name}/index.mjs`, format: 'esm' },
			{ file: `dist/${name}/index.js`, format: 'cjs' }
		],
		plugins
	}))
]
