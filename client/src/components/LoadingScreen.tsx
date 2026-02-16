import { useEffect, useRef, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);
  const animFrameRef = useRef<number>(0);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = w / 2;
    const cy = h / 2;

    // Particles that form a moon shape
    interface Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      startX: number;
      startY: number;
      size: number;
      alpha: number;
      speed: number;
      delay: number;
    }

    const particles: Particle[] = [];
    const moonRadius = Math.min(w, h) * 0.15;
    const particleCount = 300;

    for (let i = 0; i < particleCount; i++) {
      // Target positions form a filled circle (moon)
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * moonRadius;
      const targetX = cx + Math.cos(angle) * r;
      const targetY = cy + Math.sin(angle) * r;

      // Start positions scattered across screen
      const startAngle = Math.random() * Math.PI * 2;
      const startDist = Math.max(w, h) * 0.5 + Math.random() * 200;
      const startX = cx + Math.cos(startAngle) * startDist;
      const startY = cy + Math.sin(startAngle) * startDist;

      particles.push({
        x: startX,
        y: startY,
        targetX,
        targetY,
        startX,
        startY,
        size: 1 + Math.random() * 2.5,
        alpha: 0.3 + Math.random() * 0.7,
        speed: 0.008 + Math.random() * 0.015,
        delay: Math.random() * 0.3,
      });
    }

    let t = 0;
    const animate = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      t += 0.008;
      const progressVal = Math.min(t / 1.3, 1);
      setProgress(Math.floor(progressVal * 100));

      // Draw particles
      for (const p of particles) {
        const pt = Math.max(0, Math.min(1, (progressVal - p.delay) / (1 - p.delay)));
        const ease = 1 - Math.pow(1 - pt, 3); // ease-out cubic

        p.x = p.startX + (p.targetX - p.startX) * ease;
        p.y = p.startY + (p.targetY - p.startY) * ease;

        // Glow effect when particles are near target
        const glowIntensity = ease > 0.8 ? (ease - 0.8) * 5 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * (0.3 + ease * 0.7)})`;
        ctx.fill();

        if (glowIntensity > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${glowIntensity * 0.15})`;
          ctx.fill();
        }
      }

      // Draw "LUNACY" text that fades in
      const textAlpha = Math.max(0, (progressVal - 0.5) * 2);
      if (textAlpha > 0) {
        ctx.font = `300 ${Math.min(w * 0.08, 48)}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(255, 255, 255, ${textAlpha * 0.9})`;
        ctx.letterSpacing = '0.3em';
        ctx.fillText('LUNACY', cx, cy + moonRadius + 60);

        ctx.font = `300 ${Math.min(w * 0.025, 14)}px "Inter", sans-serif`;
        ctx.fillStyle = `rgba(255, 255, 255, ${textAlpha * 0.5})`;
        ctx.letterSpacing = '0.5em';
        ctx.fillText('MEDIA', cx, cy + moonRadius + 90);
      }

      if (progressVal < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Fade out when loading is complete
  useEffect(() => {
    if (!isLoading && progress >= 100) {
      const timer = setTimeout(() => {
        setOpacity(0);
        const completeTimer = setTimeout(() => {
          onComplete?.();
        }, 800);
        return () => clearTimeout(completeTimer);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isLoading, progress, onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      style={{
        opacity,
        transition: 'opacity 0.8s ease-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto',
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
        <div className="h-px bg-white/10 w-full rounded-full overflow-hidden">
          <div
            className="h-full bg-white/40 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/30 text-xs text-center mt-3 tracking-[0.3em] font-light">
          {progress}%
        </p>
      </div>
    </div>
  );
}
