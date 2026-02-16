import { useEffect, useState } from 'react';

interface Section {
  id: string;
  element: HTMLElement | null;
  startY: number;
  endY: number;
  fromColor: string;
  toColor: string;
  blur?: number;
}

export function SectionTransitionOverlay() {
  const [sections, setSections] = useState<Section[]>([]);
  const [transition, setTransition] = useState({
    backgroundColor: 'transparent',
    backdropFilter: 'blur(0px)',
  });

  useEffect(() => {
    // Find all sections with data-transition attribute
    const sectionElements = document.querySelectorAll('[data-transition]');
    const newSections: Section[] = [];

    sectionElements.forEach((el) => {
      const element = el as HTMLElement;
      const id = element.getAttribute('data-transition') || '';
      const fromColor = element.getAttribute('data-from-color') || 'rgb(0, 0, 0)';
      const toColor = element.getAttribute('data-to-color') || 'rgb(0, 0, 0)';
      const blur = element.getAttribute('data-blur') ? parseInt(element.getAttribute('data-blur')!, 10) : 0;

      const rect = element.getBoundingClientRect();
      const startY = window.scrollY + rect.top;
      const endY = startY + rect.height;

      newSections.push({
        id,
        element,
        startY,
        endY,
        fromColor,
        toColor,
        blur,
      });
    });

    setSections(newSections);
    
    // Trigger initial scroll handler to set correct initial state
    setTimeout(() => {
      const scrollY = window.scrollY;
      for (const section of newSections) {
        if (scrollY >= section.startY && scrollY <= section.endY) {
          const progress = (scrollY - section.startY) / (section.endY - section.startY);
          const fromRGB = parseRGB(section.fromColor);
          const toRGB = parseRGB(section.toColor);
          const r = Math.round(fromRGB.r + (toRGB.r - fromRGB.r) * progress);
          const g = Math.round(fromRGB.g + (toRGB.g - fromRGB.g) * progress);
          const b = Math.round(fromRGB.b + (toRGB.b - fromRGB.b) * progress);
          const blurStart = 0;
          const blurEnd = section.blur || 0;
          const blur = blurStart + (blurEnd - blurStart) * progress;
          setTransition({
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            backdropFilter: blur > 0 ? `blur(${blur}px)` : 'blur(0px)',
          });
          break;
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Find the active transition
      for (const section of sections) {
        if (scrollY >= section.startY && scrollY <= section.endY) {
          const progress = (scrollY - section.startY) / (section.endY - section.startY);

          // Parse RGB colors
          const fromRGB = parseRGB(section.fromColor);
          const toRGB = parseRGB(section.toColor);

          // Interpolate colors
          const r = Math.round(fromRGB.r + (toRGB.r - fromRGB.r) * progress);
          const g = Math.round(fromRGB.g + (toRGB.g - fromRGB.g) * progress);
          const b = Math.round(fromRGB.b + (toRGB.b - fromRGB.b) * progress);

          // Interpolate blur
          const blurStart = 0;
          const blurEnd = section.blur || 0;
          const blur = blurStart + (blurEnd - blurStart) * progress;

          setTransition({
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            backdropFilter: blur > 0 ? `blur(${blur}px)` : 'blur(0px)',
          });
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        backgroundColor: transition.backgroundColor,
        backdropFilter: transition.backdropFilter,
        transition: 'background-color 0.1s linear, backdrop-filter 0.1s linear',
      }}
    />
  );
}

export function parseRGB(color: string): { r: number; g: number; b: number } {
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
