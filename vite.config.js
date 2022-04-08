import path from 'path';
import visualizer from 'rollup-plugin-visualizer';
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [createVuePlugin(), visualizer(), eslintPlugin()],
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
    chunkSizeWarningLimit: 700,
  },
});
