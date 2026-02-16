import { useEffect, useRef, useState } from 'react';

interface UseScrollOpacityOptions {
  startOffset?: number; // pixels from top where fade starts
  endOffset?: number;   // pixels from top where fade ends
  reverse?: boolean;    // if true, fades in instead of out
}

export function useScrollOpacity(options: UseScrollOpacityOptions = {}) {
  const {
    startOffset = 0,
    endOffset = 500,
    reverse = false,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const scrollY = window.scrollY;
      
      // Calculate opacity based on scroll position
      let calculatedOpacity = 1;
      
      if (scrollY >= startOffset && scrollY <= endOffset) {
        // Linear interpolation between start and end
        const progress = (scrollY - startOffset) / (endOffset - startOffset);
        calculatedOpacity = reverse ? progress : 1 - progress;
      } else if (scrollY > endOffset) {
        calculatedOpacity = reverse ? 1 : 0;
      }

      setOpacity(calculatedOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startOffset, endOffset, reverse]);

  return { ref, opacity };
}
