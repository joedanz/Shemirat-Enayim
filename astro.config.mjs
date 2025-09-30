// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://shemiratenayim.org',
	integrations: [
		sitemap(),
		sentry({
			// Configuration moved to sentry.client.config.js and sentry.server.config.js
			// Only keep source maps upload options here
			sourceMapsUploadOptions: {
				authToken: process.env.SENTRY_AUTH_TOKEN,
				org: process.env.SENTRY_ORG,
				project: process.env.SENTRY_PROJECT,
			},
		}),
	],
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
