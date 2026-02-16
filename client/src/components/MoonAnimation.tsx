import { useEffect, useRef } from 'react';

interface MoonPhase {
  name: string;
  illumination: number; // 0-1
  object: string; // Name of the object to draw
}

const MOON_PHASES: MoonPhase[] = [
  { name: 'New Moon', illumination: 0, object: 'void' },
  { name: 'Waxing Crescent', illumination: 0.25, object: 'crescent' },
  { name: 'First Quarter', illumination: 0.5, object: 'book' },
  { name: 'Waxing Gibbous', illumination: 0.75, object: 'filmReel' },
  { name: 'Full Moon', illumination: 1, object: 'cd' },
  { name: 'Waning Gibbous', illumination: 0.75, object: 'vinyl' },
  { name: 'Last Quarter', illumination: 0.5, object: 'headphones' },
  { name: 'Waning Crescent', illumination: 0.25, object: 'crescentNotes' },
];

interface MoonAnimationProps {
  scrollProgress?: number;
  phaseVisibility?: number; // 0-1, controls opacity based on proximity to phase
  isClickable?: boolean;
}

export function MoonAnimation({ scrollProgress = 0, phaseVisibility = 1, isClickable = false }: MoonAnimationProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phaseRef = useRef<number>(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null;
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const centerX = canvas.width / (2 * window.devicePixelRatio);
    const centerY = canvas.height / (2 * window.devicePixelRatio);
    const radius = Math.min(centerX, centerY) * 0.35;

    // Draw functions for each object
    const drawVoid = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
      ctx.strokeStyle = '#444444';
      ctx.lineWidth = 1;
      ctx.strokeRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
    };

    const drawCD = () => {
      ctx.fillStyle = '#cccccc';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#999999';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#cccccc';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#666666';
      ctx.lineWidth = 2;
      for (let i = 0.4; i < 1; i += 0.15) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * i, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawVinyl = () => {
      ctx.fillStyle = '#1a1a1a';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#444444';
      ctx.lineWidth = 2;
      for (let i = 0.2; i < 1; i += 0.12) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = '#333333';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.25, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawFilmReel = () => {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = centerX + Math.cos(angle) * radius * 0.4;
        const y1 = centerY + Math.sin(angle) * radius * 0.4;
        const x2 = centerX + Math.cos(angle) * radius * 0.8;
        const y2 = centerY + Math.sin(angle) * radius * 0.8;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawHeadphones = () => {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;

      // Headband
      ctx.beginPath();
      ctx.arc(centerX, centerY - radius * 0.2, radius * 0.6, 0, Math.PI);
      ctx.stroke();

      // Left ear cup
      ctx.beginPath();
      ctx.arc(centerX - radius * 0.4, centerY, radius * 0.25, 0, Math.PI * 2);
      ctx.stroke();

      // Right ear cup
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.4, centerY, radius * 0.25, 0, Math.PI * 2);
      ctx.stroke();

      // Connection points
      ctx.beginPath();
      ctx.moveTo(centerX - radius * 0.4, centerY - radius * 0.15);
      ctx.lineTo(centerX - radius * 0.4, centerY - radius * 0.5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX + radius * 0.4, centerY - radius * 0.15);
      ctx.lineTo(centerX + radius * 0.4, centerY - radius * 0.5);
      ctx.stroke();
    };

    const drawBook = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(centerX - radius * 0.6, centerY - radius * 0.5, radius * 1.2, radius);
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(centerX - radius * 0.6, centerY - radius * 0.5, radius * 1.2, radius);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radius * 0.5);
      ctx.lineTo(centerX, centerY + radius * 0.5);
      ctx.stroke();

      ctx.strokeStyle = '#cccccc';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX - radius * 0.5, centerY - radius * 0.3 + i * radius * 0.15);
        ctx.lineTo(centerX - radius * 0.1, centerY - radius * 0.3 + i * radius * 0.15);
        ctx.stroke();
      }

      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + radius * 0.1, centerY - radius * 0.3 + i * radius * 0.15);
        ctx.lineTo(centerX + radius * 0.5, centerY - radius * 0.3 + i * radius * 0.15);
        ctx.stroke();
      }
    };

    const drawCrescentNotes = () => {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.5, centerY, radius * 0.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX - radius * 0.3, centerY - radius * 0.2);
      ctx.lineTo(centerX - radius * 0.3, centerY + radius * 0.2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX - radius * 0.25, centerY + radius * 0.25, radius * 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(centerX + radius * 0.1, centerY - radius * 0.15);
      ctx.lineTo(centerX + radius * 0.1, centerY + radius * 0.25);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX + radius * 0.15, centerY + radius * 0.3, radius * 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(centerX - radius * 0.3, centerY - radius * 0.2);
      ctx.lineTo(centerX + radius * 0.1, centerY - radius * 0.15);
      ctx.stroke();
    };

    const drawCrescent = () => {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.5, centerY, radius * 0.8, 0, Math.PI * 2);
      ctx.fill();
    };

    // Main animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Apply global opacity based on phase visibility
      ctx.globalAlpha = phaseVisibility;

      // Get current phase
      const phase = MOON_PHASES[Math.floor(phaseRef.current) % MOON_PHASES.length];

      // Draw based on phase
      switch (phase.object) {
        case 'void':
          drawVoid();
          break;
        case 'cd':
          drawCD();
          break;
        case 'vinyl':
          drawVinyl();
          break;
        case 'filmReel':
          drawFilmReel();
          break;
        case 'headphones':
          drawHeadphones();
          break;
        case 'book':
          drawBook();
          break;
        case 'crescentNotes':
          drawCrescentNotes();
          break;
        case 'crescent':
          drawCrescent();
          break;
      }

      // Reset global alpha
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      ctx.globalAlpha = 1;
    };
  }, [scrollProgress, phaseVisibility]);

  // Update phase based on scroll progress prop
  useEffect(() => {
    phaseRef.current = scrollProgress * MOON_PHASES.length;
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full transition-opacity duration-300 ${isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
      style={{
        display: 'block',
        background: '#000000',
      }}
    />
  );
}
