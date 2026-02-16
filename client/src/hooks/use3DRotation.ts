import { useEffect, useState } from 'react';

interface Use3DRotationOptions {
  totalSections?: number;
  radius?: number; // Distance from center in pixels
  perspective?: number; // CSS perspective value
}

export interface Transform3D {
  rotationY: number; // Y-axis rotation in degrees
  rotationX: number; // X-axis rotation in degrees
  skewY: number; // Skew effect
  scale: number; // Scale factor
  opacity: number; // Opacity for fade in/out
}

export function use3DRotation(options: Use3DRotationOptions = {}) {
  const {
    totalSections = 8,
    radius = 800,
    perspective = 1200,
  } = options;

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate 3D transforms for a specific section
  const getTransformForSection = (sectionIndex: number): Transform3D => {
    // Full 360° rotation based on scroll progress
    const totalRotation = scrollProgress * 360;
    
    // Each section is positioned at an angle around the circle
    const sectionAngle = (360 / totalSections) * sectionIndex;
    
    // Calculate the rotation for this section
    const rotationY = sectionAngle - totalRotation;
    
    // Normalize rotation to -180 to 180 range
    const normalizedRotation = ((rotationY + 180) % 360) - 180;
    
    // Calculate distance from center of view (0 = directly facing, 180 = directly behind)
    const distanceFromCenter = Math.abs(normalizedRotation);
    
    // Calculate opacity based on distance from center
    const opacity = Math.max(0, 1 - distanceFromCenter / 180);
    
    // Calculate scale based on distance
    const scale = 0.6 + opacity * 0.4;
    
    // Dramatic skew effect based on rotation
    const skewY = normalizedRotation * 0.3;
    
    // X-axis rotation for dramatic perspective
    const rotationX = Math.sin((totalRotation * Math.PI) / 180) * 25;
    
    // Additional perspective distortion
    const perspectiveSkew = Math.cos((totalRotation * Math.PI) / 180) * 10;

    return {
      rotationY: normalizedRotation,
      rotationX,
      skewY,
      scale,
      opacity,
    };
  };

  // Get CSS transform string for a section
  const getTransformString = (sectionIndex: number): string => {
    const transform = getTransformForSection(sectionIndex);
    return `
      perspective(${perspective}px)
      rotateY(${transform.rotationY}deg)
      rotateX(${transform.rotationX}deg)
      skewY(${transform.skewY}deg)
      scale(${transform.scale})
    `;
  };

  return {
    scrollProgress,
    getTransformForSection,
    getTransformString,
    perspective,
  };
}
