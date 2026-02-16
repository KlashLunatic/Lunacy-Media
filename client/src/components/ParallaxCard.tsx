import { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxCardProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Card component with parallax effect
 * Moves at different speeds based on scroll position
 */
export function ParallaxCard({ children, speed = 0.3, className = '' }: ParallaxCardProps) {
  const { ref, transform } = useParallax({ speed });

  return (
    <div
      ref={ref}
      className={`p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 ${className}`}
      style={{
        transform: `translateY(${transform.y}px)`,
      }}
    >
      {children}
    </div>
  );
}
