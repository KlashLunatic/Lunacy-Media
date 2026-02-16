import { useEffect, useRef, useState } from 'react';

export interface TransitionConfig {
  id: string;
  startY: number;
  endY: number;
  fromColor: string;
  toColor: string;
  blur?: number;
  opacity?: number;
}

export function useScrollTransition(configs: TransitionConfig[]) {
  const [currentTransition, setCurrentTransition] = useState<{
    backgroundColor: string;
    backdropFilter: string;
    opacity: number;
  }>({
    backgroundColor: 'rgb(0, 0, 0)',
    backdropFilter: 'blur(0px)',
    opacity: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Find the active transition
      for (const config of configs) {
        if (scrollY >= config.startY && scrollY <= config.endY) {
          const progress = (scrollY - config.startY) / (config.endY - config.startY);
          
          // Parse RGB colors
          const fromRGB = parseRGB(config.fromColor);
          const toRGB = parseRGB(config.toColor);

          // Interpolate colors
          const r = Math.round(fromRGB.r + (toRGB.r - fromRGB.r) * progress);
          const g = Math.round(fromRGB.g + (toRGB.g - fromRGB.g) * progress);
          const b = Math.round(fromRGB.b + (toRGB.b - fromRGB.b) * progress);

          // Interpolate blur
          const blurStart = 0;
          const blurEnd = config.blur || 0;
          const blur = blurStart + (blurEnd - blurStart) * progress;

          // Interpolate opacity
          const opacityStart = 1;
          const opacityEnd = config.opacity || 1;
          const opacity = opacityStart + (opacityEnd - opacityStart) * progress;

          setCurrentTransition({
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            backdropFilter: blur > 0 ? `blur(${blur}px)` : 'blur(0px)',
            opacity,
          });
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [configs]);

  return currentTransition;
}

function parseRGB(color: string): { r: number; g: number; b: number } {
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
    };
  }
  return { r: 0, g: 0, b: 0 };
}
