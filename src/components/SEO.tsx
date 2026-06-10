import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const BASE_URL = 'https://lunacymedia.ca';
const OG_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032200270/4xMWgJ9hUWH8ZnV46MUsJf/lunacy-media-og-image-iVAa99cRXN73nXCVerhf6b.png';

export default function SEO({ title, description, path }: SEOProps) {
  const canonicalUrl = `${BASE_URL}${path === '/' ? '' : path}`;
  const defaultTitle = 'Lunacy Media | Mythology & Worldbuilding Studio';

  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta
    setMeta('name', 'title', title);
    setMeta('name', 'description', description);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Lunacy Media');

    // Twitter
    setMeta('property', 'twitter:title', title);
    setMeta('property', 'twitter:description', description);
    setMeta('property', 'twitter:url', canonicalUrl);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Cleanup: restore defaults when unmounting
    return () => {
      document.title = defaultTitle;
    };
  }, [title, description, canonicalUrl, defaultTitle]);

  return null;
}
