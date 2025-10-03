/**
 * Analytics Utility
 *
 * Provides helper functions for tracking custom events in Plausible Analytics
 * All tracking is privacy-respecting and GDPR-compliant (no cookies, no PII)
 *
 * Note: These functions will only work in browser context (client-side)
 */

// Extend Window interface to include plausible
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

// Check if analytics is available and enabled
const isAnalyticsEnabled = (): boolean => {
  if (typeof window === 'undefined') return false;

  // Check if we're in production environment
  const env = import.meta.env.PUBLIC_ENV || 'development';
  if (env !== 'production') return false;

  // Check if Plausible is loaded
  return typeof window.plausible === 'function';
};

/**
 * Track a custom event
 *
 * @param eventName - Name of the event (e.g., "CTA Click", "Guide Complete")
 * @param props - Optional properties to attach to the event
 */
export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>): void {
  if (!isAnalyticsEnabled()) return;

  try {
    window.plausible?.(eventName, { props });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

/**
 * Track guide completion
 * Called when user scrolls to bottom of a guide
 *
 * @param guideName - Name of the guide completed
 * @param guideCategory - Category (network, device, software, parent, leader, technical)
 */
export function trackGuideComplete(guideName: string, guideCategory: string): void {
  trackEvent('Guide Complete', {
    guide: guideName,
    category: guideCategory,
  });
}

/**
 * Track guide scroll depth
 * Called at 25%, 50%, 75%, 90% scroll milestones
 *
 * @param guideName - Name of the guide
 * @param depth - Percentage scrolled (25, 50, 75, 90)
 */
export function trackScrollDepth(guideName: string, depth: number): void {
  trackEvent('Scroll Depth', {
    guide: guideName,
    depth: `${depth}%`,
  });
}

/**
 * Track CTA (Call-to-Action) button clicks
 *
 * @param ctaText - Text of the button clicked
 * @param ctaLocation - Where the button is located (e.g., "hero", "guide-end")
 * @param ctaType - Type of CTA (e.g., "download", "contact", "guide")
 */
export function trackCTAClick(ctaText: string, ctaLocation: string, ctaType?: string): void {
  trackEvent('CTA Click', {
    text: ctaText,
    location: ctaLocation,
    ...(ctaType && { type: ctaType }),
  });
}

/**
 * Track external link clicks
 *
 * @param linkUrl - URL being clicked
 * @param linkText - Text of the link
 * @param linkCategory - Category (e.g., "dns-provider", "software", "resource")
 */
export function trackExternalLink(linkUrl: string, linkText: string, linkCategory?: string): void {
  trackEvent('External Link', {
    url: linkUrl,
    text: linkText,
    ...(linkCategory && { category: linkCategory }),
  });
}

/**
 * Track social share actions
 *
 * @param platform - Platform shared to (twitter, facebook, whatsapp, email, etc.)
 * @param pageTitle - Title of the page being shared
 */
export function trackShare(platform: string, pageTitle: string): void {
  trackEvent('Share', {
    platform,
    page: pageTitle,
  });
}

/**
 * Track newsletter signup
 *
 * @param source - Where the signup occurred (e.g., "footer", "guide-end", "popup")
 */
export function trackNewsletterSignup(source: string): void {
  trackEvent('Newsletter Signup', {
    source,
  });
}

/**
 * Track feedback form submission
 *
 * @param feedbackType - Type of feedback (bug, feature, general, rating)
 * @param rating - Optional rating value (1-5)
 */
export function trackFeedbackSubmit(feedbackType: string, rating?: number): void {
  trackEvent('Feedback Submit', {
    type: feedbackType,
    ...(rating && { rating }),
  });
}

/**
 * Track search usage
 *
 * @param query - Search query (sanitized - first 3 chars only for privacy)
 * @param resultsCount - Number of results returned
 */
export function trackSearch(query: string, resultsCount: number): void {
  // Only track first 3 characters for privacy
  const sanitizedQuery = query.substring(0, 3);

  trackEvent('Search', {
    query: sanitizedQuery,
    results: resultsCount,
  });
}

/**
 * Track download actions
 *
 * @param fileName - Name of file downloaded
 * @param fileType - Type (pdf, printable, guide)
 */
export function trackDownload(fileName: string, fileType: string): void {
  trackEvent('Download', {
    file: fileName,
    type: fileType,
  });
}

/**
 * Track print action
 *
 * @param pageTitle - Title of page being printed
 * @param pageType - Type of page (guide, resource, printable)
 */
export function trackPrint(pageTitle: string, pageType: string): void {
  trackEvent('Print', {
    page: pageTitle,
    type: pageType,
  });
}

/**
 * Track contact form submission
 *
 * @param formType - Type of form (contact, feedback, suggestion)
 */
export function trackContactSubmit(formType: string): void {
  trackEvent('Contact Submit', {
    form: formType,
  });
}

/**
 * Track outbound clicks to specific service providers
 * Useful for understanding which DNS providers, software, etc. are popular
 *
 * @param provider - Name of the provider
 * @param providerType - Type (dns, software, hardware)
 */
export function trackProviderClick(provider: string, providerType: string): void {
  trackEvent('Provider Click', {
    provider,
    type: providerType,
  });
}
