/**
 * Performance Monitoring
 *
 * Tracks Core Web Vitals and sends them to analytics
 * Uses the web-vitals library to capture:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - TTFB (Time to First Byte)
 * - FCP (First Contentful Paint)
 *
 * Metrics are sent to Plausible Analytics as custom events
 */

import { onLCP, onFID, onCLS, onTTFB, onFCP } from 'web-vitals';

// Check if we're in production and analytics is enabled
const isProduction = import.meta.env.PUBLIC_ENV === 'production';

/**
 * Send performance metric to analytics
 */
function sendToAnalytics(metric: any) {
  if (!isProduction || typeof (window as any).plausible !== 'function') {
    return;
  }

  // Determine rating (good, needs-improvement, poor)
  const rating = metric.rating;

  // Round value for cleaner reporting
  const value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);

  try {
    (window as any).plausible('Web Vitals', {
      props: {
        metric: metric.name,
        value: value,
        rating: rating,
        // Include page path for debugging
        page: window.location.pathname,
      }
    });
  } catch (error) {
    console.error('Error sending performance metric:', error);
  }
}

/**
 * Initialize performance monitoring
 * Call this function when the page loads
 */
export function initPerformanceMonitoring() {
  try {
    // Largest Contentful Paint (LCP)
    // Measures loading performance
    // Good: < 2.5s, Needs Improvement: < 4s, Poor: >= 4s
    onLCP(sendToAnalytics);

    // First Input Delay (FID)
    // Measures interactivity
    // Good: < 100ms, Needs Improvement: < 300ms, Poor: >= 300ms
    onFID(sendToAnalytics);

    // Cumulative Layout Shift (CLS)
    // Measures visual stability
    // Good: < 0.1, Needs Improvement: < 0.25, Poor: >= 0.25
    onCLS(sendToAnalytics);

    // Time to First Byte (TTFB)
    // Measures server response time
    // Good: < 800ms, Needs Improvement: < 1800ms, Poor: >= 1800ms
    onTTFB(sendToAnalytics);

    // First Contentful Paint (FCP)
    // Measures perceived loading speed
    // Good: < 1.8s, Needs Improvement: < 3s, Poor: >= 3s
    onFCP(sendToAnalytics);

  } catch (error) {
    console.error('Performance monitoring initialization error:', error);
  }
}

/**
 * Get current performance thresholds for reference
 */
export const PERFORMANCE_THRESHOLDS = {
  LCP: {
    good: 2500,
    needsImprovement: 4000,
  },
  FID: {
    good: 100,
    needsImprovement: 300,
  },
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  TTFB: {
    good: 800,
    needsImprovement: 1800,
  },
  FCP: {
    good: 1800,
    needsImprovement: 3000,
  },
};
