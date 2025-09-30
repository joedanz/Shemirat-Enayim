import * as Sentry from '@sentry/astro';

Sentry.init({
	dsn: process.env.PUBLIC_SENTRY_DSN,
	environment: process.env.PUBLIC_ENV || 'development',

	// Only enable in production
	enabled: process.env.PUBLIC_ENV === 'production',

	// Performance Monitoring
	tracesSampleRate: 1.0, // Capture 100% of transactions

	// Filter out sensitive data
	beforeSend(event) {
		// Don't send events in development
		if (process.env.PUBLIC_ENV !== 'production') {
			return null;
		}

		return event;
	},
});
