import path from 'path';
import svg from '@netulip/rollup-plugin-svg';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('./package.json'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svg', ...mdsvexConfig.extensions],	
	preprocess: [
		md.mdsvex(mdsvexConfig)
	],
	kit: {
		target: 'body',
		vite: {
			plugins: [
				svg.default({
					enforce: 'pre'
				})
			],
			resolve: {
				alias: {
					$site: path.resolve('./src/site')
				}
			}
		}
	}
};

export default config;
