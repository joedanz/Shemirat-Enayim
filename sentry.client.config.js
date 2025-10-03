import * as Sentry from '@sentry/astro';

// Only initialize Sentry if DSN is configured
const dsn = import.meta.env.PUBLIC_SENTRY_DSN;
if (dsn) {
  Sentry.init({
    dsn,
    environment: import.meta.env.PUBLIC_ENV || 'development',

    // Only enable in production
    enabled: import.meta.env.PUBLIC_ENV === 'production',

    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of transactions in production

    // Session Replay - optional but useful for debugging
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors

    // Additional integrations
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],

    // Filter out sensitive data
    beforeSend(event) {
      // Don't send events in development
      if (import.meta.env.PUBLIC_ENV !== 'production') {
        return null;
      }

      // Remove any sensitive query parameters
      if (event.request?.url) {
        try {
          const url = new URL(event.request.url);
          // Remove common sensitive params
          ['token', 'key', 'secret', 'password'].forEach((param) => {
            if (url.searchParams.has(param)) {
              url.searchParams.set(param, '[FILTERED]');
            }
          });
          event.request.url = url.toString();
        } catch {
          // Invalid URL, skip filtering
        }
      }

      return event;
    },
  });
}
