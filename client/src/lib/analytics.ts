/**
 * Analytics utility for tracking user engagement events
 * Events are sent to the built-in analytics endpoint via the Manus platform
 */

export type EventType = 
  | 'social_click'
  | 'project_cta_click'
  | 'page_view'
  | 'newsletter_subscribe'
  | 'project_explore';

export interface AnalyticsEvent {
  type: EventType;
  label: string;
  value?: string;
  timestamp: number;
}

/**
 * Track an analytics event
 * Uses the built-in VITE_ANALYTICS_ENDPOINT if available
 */
export async function trackEvent(type: EventType, label: string, value?: string) {
  try {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

    if (!endpoint || !websiteId) {
      console.warn('[Analytics] Missing endpoint or website ID configuration');
      return;
    }

    const event: AnalyticsEvent = {
      type,
      label,
      value,
      timestamp: Date.now(),
    };

    // Send to analytics endpoint
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        website_id: websiteId,
        event: event.type,
        event_data: {
          label: event.label,
          value: event.value,
        },
        timestamp: event.timestamp,
      }),
    }).catch(err => {
      console.warn('[Analytics] Failed to send event:', err);
    });

    // Also log to console for debugging
    console.log('[Analytics Event]', { type, label, value });
  } catch (error) {
    console.warn('[Analytics] Error tracking event:', error);
  }
}

/**
 * Track a social media click
 */
export function trackSocialClick(platform: 'instagram' | 'facebook' | 'linkedin') {
  trackEvent('social_click', `social_${platform}`, platform);
}

/**
 * Track a project CTA click
 */
export function trackProjectCTA(projectName: string, ctaText: string) {
  trackEvent('project_cta_click', `${projectName}_${ctaText}`, projectName);
}

/**
 * Track a project exploration
 */
export function trackProjectExplore(projectName: string) {
  trackEvent('project_explore', `explore_${projectName}`, projectName);
}

/**
 * Track newsletter subscription
 */
export function trackNewsletterSubscribe(success: boolean) {
  trackEvent('newsletter_subscribe', `newsletter_${success ? 'success' : 'failed'}`, success ? 'success' : 'failed');
}
