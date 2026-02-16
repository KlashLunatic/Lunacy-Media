import { useEffect, useRef, useState } from 'react';

interface ParallaxConfig {
  speed?: number; // 0-1, where 0 = no movement, 0.5 = half scroll speed, 1 = normal scroll speed
  direction?: 'vertical' | 'horizontal'; // Direction of parallax movement
  offset?: number; // Starting offset in pixels
  perspective?: boolean; // Apply 3D perspective effect
}

/**
 * Hook to apply parallax effect to an element based on scroll position
 * @param config Configuration for parallax behavior
 * @returns Ref to attach to element and current transform values
 */
export function useParallax(config: ParallaxConfig = {}) {
  const {
    speed = 0.5,
    direction = 'vertical',
    offset = 0,
    perspective = false,
  } = config;

  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    y: offset,
    x: 0,
    scale: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;

      // Calculate how far the element is from the center of viewport
      const elementCenter = elementTop + elementRect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Calculate parallax offset based on distance from center
      // Elements above viewport move up (negative), elements below move down (positive)
      const parallaxOffset = distanceFromCenter * speed;

      if (direction === 'vertical') {
        setTransform({
          y: offset + parallaxOffset,
          x: 0,
          scale: 1,
        });
      } else {
        setTransform({
          y: offset,
          x: parallaxOffset,
          scale: 1,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, offset]);

  return { ref, transform };
}

/**
 * Hook to apply depth-based parallax to multiple layers
 * Creates a layered parallax effect where each layer moves at different speeds
 */
export function useLayeredParallax(layerCount: number = 3) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Generate transform values for each layer
  const getLayerTransform = (layerIndex: number) => {
    // Calculate speed for this layer (deeper layers move slower)
    const speed = 1 - (layerIndex / layerCount) * 0.5;
    const offset = scrollProgress * 100 * speed;

    return {
      transform: `translateY(${offset}px)`,
      opacity: 1 - (layerIndex / layerCount) * 0.1, // Deeper layers slightly more transparent
    };
  };

  return { scrollProgress, getLayerTransform };
}
