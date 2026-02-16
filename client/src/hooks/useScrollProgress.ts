import { useEffect, useState } from 'react';

/**
 * Hook to track scroll progress as a value between 0 and 1
 * 0 = top of page, 1 = bottom of page
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate total scrollable distance
      const totalScrollableHeight = documentHeight - windowHeight;

      // Calculate progress (0 to 1)
      const progress = totalScrollableHeight > 0 ? scrollTop / totalScrollableHeight : 0;

      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollProgress;
}

/**
 * Hook to get current moon phase based on scroll progress
 * Returns a number 0-7 representing the 8 moon phases
 */
export function useMoonPhaseFromScroll(scrollProgress: number) {
  // Map scroll progress (0-1) to moon phase (0-7)
  const phaseIndex = Math.floor(scrollProgress * 8);
  return Math.min(phaseIndex, 7);
}
