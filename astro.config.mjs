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
			dsn: process.env.PUBLIC_SENTRY_DSN,
			environment: process.env.PUBLIC_ENV || 'development',
			// Only enable in production
			enabled: process.env.PUBLIC_ENV === 'production',
			// Source maps for better error debugging
			sourceMapsUploadOptions: {
				authToken: process.env.SENTRY_AUTH_TOKEN,
				org: process.env.SENTRY_ORG,
				project: process.env.SENTRY_PROJECT,
			},
			// Client-side options
			clientInitOptions: {
				// Sample rate: capture all errors in production
				tracesSampleRate: 1.0,
				// Capture unhandled promise rejections
				integrations: [],
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
