import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import visualizer from 'rollup-plugin-visualizer';
import Components from 'unplugin-vue-components/vite'

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
	plugins: [
		splitVendorChunkPlugin(),
		Components({
			dirs: [
				'src/components/app',
				'src/components/base',
			],
		}),
		createVuePlugin(),
		eslintPlugin({ cache: false }),
		visualizer({
			open: false,
			filename: 'stats.html',
			title: 'Rollup Visualizer',
			template: 'treemap',
			json: false,
			gzipSize: false,
			brotliSize: false,
			projectRoot: process.cwd(),
		}),
	],
	server: {
		port: 8080,
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
		],
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.css'],
	},
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: [
					'@import "@/assets/scss/_variables.scss"',
					'@import "@/assets/scss/_mixins.scss"',
					'',
				].join('\n'),
			},
		},
	},
	build: {
		chunkSizeWarningLimit: 1024,
		rollupOptions: {
			onwarn(warning, warn) {
				if (warning.code === 'EVAL') return
				warn(warning)
			},
			output: {
				manualChunks(path) {
					if (path.includes('node_modules')) {
						const vendorName = path
							.replace(/^.*node_modules\//, '')
							.replace('@', '')
							.split('/')
							.shift();
						return `vendor/${vendorName}`
					}
				}
			}
		}
	},
});
