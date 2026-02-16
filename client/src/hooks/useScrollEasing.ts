import { useState, useEffect, useRef } from 'react';

/**
 * useScrollEasing Hook
 * Applies easing curves to scroll progress for smooth, cinematic orbital rotation
 * Supports momentum and ease-out effects
 */

type EasingFunction = (t: number) => number;

const easingFunctions = {
  linear: (t: number) => t,
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  easeOutQuad: (t: number) => 1 - (1 - t) * (1 - t),
  easeOutExpo: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

interface UseScrollEasingOptions {
  easing?: keyof typeof easingFunctions;
  momentum?: boolean;
  momentumDamping?: number;
}

export function useScrollEasing(options: UseScrollEasingOptions = {}) {
  const {
    easing = 'easeOutCubic',
    momentum = true,
    momentumDamping = 0.95,
  } = options;

  const [easedProgress, setEasedProgress] = useState(0);
  const [rawProgress, setRawProgress] = useState(0);
  const momentumRef = useRef(0);
  const lastScrollRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const easingFn: EasingFunction = easingFunctions[easing];

  // Apply easing to raw scroll progress
  const applyEasing = (progress: number) => {
    return easingFn(Math.max(0, Math.min(1, progress)));
  };

  // Handle scroll with momentum
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setRawProgress(0);
        return;
      }

      const progress = window.scrollY / scrollHeight;
      setRawProgress(progress);

      // Calculate momentum
      if (momentum) {
        const delta = progress - lastScrollRef.current;
        momentumRef.current = delta * 0.5; // Momentum multiplier
      }

      lastScrollRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [momentum]);

  // Apply momentum animation
  useEffect(() => {
    if (!momentum || Math.abs(momentumRef.current) < 0.0001) {
      setEasedProgress(applyEasing(rawProgress));
      return;
    }

    const animate = () => {
      momentumRef.current *= momentumDamping;

      if (Math.abs(momentumRef.current) > 0.0001) {
        const newProgress = Math.max(0, Math.min(1, rawProgress + momentumRef.current));
        setEasedProgress(applyEasing(newProgress));
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setEasedProgress(applyEasing(rawProgress));
        animationRef.current = null;
      }
    };

    if (animationRef.current === null) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [rawProgress, momentum, momentumDamping]);

  return {
    progress: easedProgress,
    rawProgress,
  };
}
