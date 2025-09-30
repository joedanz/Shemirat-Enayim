// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://shemiratenayim.org',
	integrations: [sitemap()],
	build: {
		inlineStylesheets: 'auto',
	},
	compressHTML: true,
	vite: {
		build: {
			cssMinify: true,
			minify: 'esbuild',
			rollupOptions: {
				output: {
					manualChunks: {
						'search': ['fuse.js'],
					},
				},
			},
		},
	},
});
