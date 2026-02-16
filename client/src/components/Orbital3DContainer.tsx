import React, { ReactNode } from 'react';
import { use3DRotation } from '@/hooks/use3DRotation';

interface Orbital3DContainerProps {
  children: ReactNode;
  totalSections?: number;
  radius?: number;
  perspective?: number;
}

/**
 * Orbital 3D Container - Creates a dramatic 360° orbital scroll experience
 * where content sections rotate in 3D space as the viewer orbits around center
 */
export function Orbital3DContainer({
  children,
  totalSections = 8,
  radius = 800,
  perspective = 1200,
}: Orbital3DContainerProps) {
  const { scrollProgress, getTransformString } = use3DRotation({
    totalSections,
    radius,
    perspective,
  });

  // Calculate viewport rotation based on scroll progress
  const viewportRotation = scrollProgress * 360;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        perspective: `${perspective}px`,
        background: '#000000',
      }}
    >
      {/* Outer container that rotates the entire viewport */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${viewportRotation}deg)`,
          transition: 'transform 0.05s linear',
        }}
      >
        {/* Inner container for sections */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

interface Orbital3DSectionProps {
  children: ReactNode;
  sectionIndex: number;
  totalSections?: number;
  radius?: number;
  className?: string;
}

/**
 * Orbital 3D Section - Individual section positioned in 3D orbital space
 */
export function Orbital3DSection({
  children,
  sectionIndex,
  totalSections = 8,
  radius = 800,
  className = '',
}: Orbital3DSectionProps) {
  const { getTransformForSection } = use3DRotation({
    totalSections,
    radius,
  });

  const transform = getTransformForSection(sectionIndex);
  const sectionAngle = (360 / totalSections) * sectionIndex;

  return (
    <div
      className={`absolute w-full min-h-screen flex items-center justify-center ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `
          rotateY(${sectionAngle}deg)
          translateZ(${radius}px)
          rotateY(${transform.rotationY}deg)
          rotateX(${transform.rotationX}deg)
          skewY(${transform.skewY}deg)
          scale(${transform.scale})
        `,
        opacity: transform.opacity,
        transition: 'opacity 0.1s ease-out',
        pointerEvents: transform.opacity > 0.5 ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
}
