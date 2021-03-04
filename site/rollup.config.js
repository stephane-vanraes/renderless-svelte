import { mdsvex } from "mdsvex"
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import config from 'sapper/config/rollup.js'
import json from '@rollup/plugin-json'
import path from 'path'
import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import svelteSVG from "rollup-plugin-svelte-svg"
import url from '@rollup/plugin-url'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning)

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			svelteSVG(),
			json(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				preventAssignment: true
			}),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true
				},
				extensions: [".svelte", ".svx"],
				preprocess: mdsvex({
					layout: {
						docs: "./src/routes/docs/_svx-layout.svelte",
						recipes: "./src/routes/recipes/_svx-layout.svelte"
					}
				})
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			svelteSVG(),
			json(),
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				preventAssignment: true
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false,
				extensions: [".svelte", ".svx"],
				preprocess: mdsvex({
					layout: {
						docs: "./src/routes/docs/_svx-layout.svelte",
						recipes: "./src/routes/recipes/_svx-layout.svelte"
					}
				})
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn,
	}
}
