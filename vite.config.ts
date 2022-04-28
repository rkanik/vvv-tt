import { defineConfig, splitVendorChunkPlugin } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		splitVendorChunkPlugin(),
		eslintPlugin({ cache: false }),
		Components({
			dirs: ['src/components/app', 'src/components/base'],
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
		extensions: [
			'.mjs',
			'.js',
			'.ts',
			'.jsx',
			'.tsx',
			'.json',
			'.vue',
			'.css',
		],
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
							.shift()
						return `vendor/${vendorName}`
					}
				},
			},
		},
	},
})
