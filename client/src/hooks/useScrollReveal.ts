import { useEffect, useRef, useState } from 'react';

export interface RevealConfig {
  threshold?: number;
  duration?: number;
  delay?: number;
  type?: 'fade' | 'scale' | 'slideUp' | 'slideDown' | 'combined';
}

export function useScrollReveal(ref: React.RefObject<HTMLElement | null>, config: RevealConfig = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    threshold = 0.3,
    duration = 800,
    delay = 0,
    type = 'combined',
  } = config;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (observerRef.current) {
            observerRef.current.unobserve(element);
          }
        }
      },
      { threshold }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref, threshold]);

  const getAnimationStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
      transitionDelay: `${delay}ms`,
    };

    if (!isVisible) {
      switch (type) {
        case 'fade':
          return {
            ...baseStyle,
            opacity: 0,
          };
        case 'scale':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'scale(0.8)',
          };
        case 'slideUp':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateY(30px)',
          };
        case 'slideDown':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateY(-30px)',
          };
        case 'combined':
        default:
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateY(20px) scale(0.95)',
          };
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translateY(0) scale(1)',
    };
  };

  return {
    isVisible,
    style: getAnimationStyle(),
  };
}

export function useMoonPhaseAnimation(scrollProgress: number) {
  const getMoonPhaseOpacity = () => {
    return Math.min(scrollProgress * 1.5, 1);
  };

  const getMoonPhaseScale = () => {
    return 0.9 + scrollProgress * 0.1;
  };

  const getMoonPhaseTranslate = () => {
    return Math.max(20 - scrollProgress * 20, 0);
  };

  return {
    opacity: getMoonPhaseOpacity(),
    scale: getMoonPhaseScale(),
    translateY: getMoonPhaseTranslate(),
    style: {
      opacity: getMoonPhaseOpacity(),
      transform: `translateY(${getMoonPhaseTranslate()}px) scale(${getMoonPhaseScale()})`,
    },
  };
}
