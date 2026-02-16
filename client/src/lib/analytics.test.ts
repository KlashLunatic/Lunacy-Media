import { describe, it, expect, vi, beforeEach } from 'vitest';
import { trackEvent, trackSocialClick, trackProjectCTA, trackNewsletterSubscribe } from './analytics';

// Mock fetch globally
global.fetch = vi.fn();

describe('Analytics', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock environment variables
    import.meta.env.VITE_ANALYTICS_ENDPOINT = 'https://api.example.com/analytics';
    import.meta.env.VITE_ANALYTICS_WEBSITE_ID = 'test-website-id';
  });

  describe('trackEvent', () => {
    it('should send event to analytics endpoint', async () => {
      await trackEvent('social_click', 'test_event', 'test_value');

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.example.com/analytics',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      );
    });

    it('should include event data in request body', async () => {
      await trackEvent('project_cta_click', 'obeah_explore', 'OBEAH');

      const calls = (global.fetch as any).mock.calls;
      const lastCall = calls[calls.length - 1];
      const body = JSON.parse(lastCall[1].body);

      expect(body).toEqual(
        expect.objectContaining({
          website_id: 'test-website-id',
          event: 'project_cta_click',
          event_data: {
            label: 'obeah_explore',
            value: 'OBEAH',
          },
        })
      );
    });

    it('should warn if endpoint is missing', async () => {
      const warnSpy = vi.spyOn(console, 'warn');
      import.meta.env.VITE_ANALYTICS_ENDPOINT = '';

      await trackEvent('social_click', 'test', 'value');

      expect(warnSpy).toHaveBeenCalledWith(
        '[Analytics] Missing endpoint or website ID configuration'
      );
      warnSpy.mockRestore();
    });
  });

  describe('trackSocialClick', () => {
    it('should track Instagram click', async () => {
      await trackSocialClick('instagram');

      const calls = (global.fetch as any).mock.calls;
      const body = JSON.parse(calls[0][1].body);

      expect(body.event).toBe('social_click');
      expect(body.event_data.label).toBe('social_instagram');
      expect(body.event_data.value).toBe('instagram');
    });

    it('should track Facebook click', async () => {
      await trackSocialClick('facebook');

      const calls = (global.fetch as any).mock.calls;
      const body = JSON.parse(calls[0][1].body);

      expect(body.event_data.label).toBe('social_facebook');
      expect(body.event_data.value).toBe('facebook');
    });

    it('should track LinkedIn click', async () => {
      await trackSocialClick('linkedin');

      const calls = (global.fetch as any).mock.calls;
      const body = JSON.parse(calls[0][1].body);

      expect(body.event_data.label).toBe('social_linkedin');
      expect(body.event_data.value).toBe('linkedin');
    });
  });

  describe('trackProjectCTA', () => {
    it('should track OBEAH project CTA', async () => {
      await trackProjectCTA('OBEAH', 'Explore');

      const calls = (global.fetch as any).mock.calls;
      const body = JSON.parse(calls[0][1].body);

      expect(body.event).toBe('project_cta_click');
      expect(body.event_data.label).toBe('OBEAH_Explore');
      expect(body.event_data.value).toBe('OBEAH');
    });

    it('should track Releases project CTA', async () => {
      await trackProjectCTA('Releases', 'See Slate');

      const calls = (global.fetch as any).mock.calls;
      const body = JSON.parse(calls[0][1].body);

      expect(body.event_data.label).toBe('Releases_See Slate');
      expect(body.event_data.value).toBe('Releases');
    });
  });

  describe('trackNewsletterSubscribe', () => {
    it('should track successful subscription', async () => {
      await trackNewsletterSubscribe(true);

      const calls = (global.fetch as any).mock.calls;
      const body = JSON.parse(calls[0][1].body);

      expect(body.event).toBe('newsletter_subscribe');
      expect(body.event_data.label).toBe('newsletter_success');
      expect(body.event_data.value).toBe('success');
    });

    it('should track failed subscription', async () => {
      await trackNewsletterSubscribe(false);

      const calls = (global.fetch as any).mock.calls;
      const body = JSON.parse(calls[0][1].body);

      expect(body.event_data.label).toBe('newsletter_failed');
      expect(body.event_data.value).toBe('failed');
    });
  });
});
