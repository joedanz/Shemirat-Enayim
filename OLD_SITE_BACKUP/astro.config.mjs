// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

// Only enable Sentry if properly configured
const enableSentry = !!(
	process.env.PUBLIC_SENTRY_DSN &&
	process.env.SENTRY_AUTH_TOKEN &&
	process.env.SENTRY_ORG &&
	process.env.SENTRY_PROJECT
);

// https://astro.build/config
export default defineConfig({
	site: 'https://shemiratenayim.org',
	integrations: [
		sitemap(),
		// Only include Sentry if all required credentials are configured
		...(enableSentry ? [
			sentry({
				// Configuration moved to sentry.client.config.js and sentry.server.config.js
				// Only keep source maps upload options here
				sourceMapsUploadOptions: {
					authToken: process.env.SENTRY_AUTH_TOKEN,
					org: process.env.SENTRY_ORG,
					project: process.env.SENTRY_PROJECT,
				},
				// Disable telemetry
				telemetry: false,
			})
		] : []),
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
