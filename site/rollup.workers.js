import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/worker.js',
	output: {
		sourcemap: true,
		format: 'esm',
		name: 'app',
		file: 'static/worker.js'
	},
	plugins: [
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
	],
	watch: {
		clearScreen: false
	}
}