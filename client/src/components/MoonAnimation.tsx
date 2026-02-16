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
}

export function MoonAnimation({ scrollProgress = 0 }: MoonAnimationProps = {}) {
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
      // Dark void with subtle marks
      ctx.fillStyle = '#1a1a1a';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Symbolic marks
      ctx.strokeStyle = '#404040';
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const x1 = centerX + Math.cos(angle) * radius * 0.6;
        const y1 = centerY + Math.sin(angle) * radius * 0.6;
        const x2 = centerX + Math.cos(angle) * radius * 0.8;
        const y2 = centerY + Math.sin(angle) * radius * 0.8;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    const drawCD = () => {
      // CD/Full Moon
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // CD rings
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Center hole
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.15, 0, Math.PI * 2);
      ctx.fill();

      // Reflective highlight
      ctx.strokeStyle = '#cccccc';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX - radius * 0.3, centerY - radius * 0.3, radius * 0.2, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawVinyl = () => {
      // Vinyl Record
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Vinyl grooves
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 6; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 7) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Label
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.35, 0, Math.PI * 2);
      ctx.fill();

      // Label text
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('LUNACY', centerX, centerY - 5);
      ctx.font = '8px Arial';
      ctx.fillText('MEDIA', centerX, centerY + 5);
    };

    const drawHeadphones = () => {
      // Headphones
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Left ear cup
      ctx.beginPath();
      ctx.arc(centerX - radius * 0.4, centerY, radius * 0.25, 0, Math.PI * 2);
      ctx.stroke();

      // Right ear cup
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.4, centerY, radius * 0.25, 0, Math.PI * 2);
      ctx.stroke();

      // Headband
      ctx.beginPath();
      ctx.arc(centerX, centerY - radius * 0.3, radius * 0.5, 0, Math.PI);
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
      // Open book
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(centerX - radius * 0.6, centerY - radius * 0.5, radius * 1.2, radius);
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(centerX - radius * 0.6, centerY - radius * 0.5, radius * 1.2, radius);

      // Spine
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radius * 0.5);
      ctx.lineTo(centerX, centerY + radius * 0.5);
      ctx.stroke();

      // Pages
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

    const drawFilmReel = () => {
      // Film reel
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Outer ring
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Film holes
      ctx.fillStyle = '#000000';
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI * 2) / 12;
        const x = centerX + Math.cos(angle) * radius * 0.75;
        const y = centerY + Math.sin(angle) * radius * 0.75;
        ctx.beginPath();
        ctx.rect(x - 3, y - 5, 6, 10);
        ctx.fill();
      }

      // Center hub
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawCrescents = () => {
      // Crescent moon with musical notes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Shadow for crescent effect
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.4, centerY, radius * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Musical notes
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      // Note 1
      ctx.beginPath();
      ctx.moveTo(centerX - radius * 0.3, centerY - radius * 0.2);
      ctx.lineTo(centerX - radius * 0.3, centerY + radius * 0.2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX - radius * 0.25, centerY + radius * 0.25, radius * 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Note 2
      ctx.beginPath();
      ctx.moveTo(centerX + radius * 0.1, centerY - radius * 0.15);
      ctx.lineTo(centerX + radius * 0.1, centerY + radius * 0.25);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX + radius * 0.15, centerY + radius * 0.3, radius * 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Connecting beam
      ctx.beginPath();
      ctx.moveTo(centerX - radius * 0.3, centerY - radius * 0.2);
      ctx.lineTo(centerX + radius * 0.1, centerY - radius * 0.15);
      ctx.stroke();
    };

    const drawCrescent = () => {
      // Simple crescent
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Shadow for crescent
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
        case 'headphones':
          drawHeadphones();
          break;
        case 'book':
          drawBook();
          break;
        case 'filmReel':
          drawFilmReel();
          break;
        case 'crescentNotes':
          drawCrescents();
          break;
        case 'crescent':
          drawCrescent();
          break;
      }

      // Phase is now controlled by scrollProgress prop

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollProgress]);

  // Update phase based on scroll progress prop
  useEffect(() => {
    phaseRef.current = scrollProgress * MOON_PHASES.length;
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        display: 'block',
        background: '#000000',
      }}
    />
  );
}
