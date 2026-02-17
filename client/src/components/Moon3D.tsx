import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, Suspense, Component, type ReactNode, useState, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { trpc } from '@/lib/trpc';

// Error boundary to catch WebGL/texture failures
class Moon3DErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// Generate a procedural moon texture using canvas (no CORS issues)
function generateMoonTexture(): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Base grey surface
  ctx.fillStyle = '#8a8a8a';
  ctx.fillRect(0, 0, size, size);

  // Add noise for surface texture
  const imageData = ctx.getImageData(0, 0, size, size);
  const data = imageData.data;

  // Perlin-like noise using multiple sine waves
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;

      // Multi-frequency noise for realistic surface
      let noise = 0;
      noise += Math.sin(x * 0.02) * Math.cos(y * 0.02) * 20;
      noise += Math.sin(x * 0.05 + 1.3) * Math.cos(y * 0.04 + 0.7) * 15;
      noise += Math.sin(x * 0.1 + 2.1) * Math.cos(y * 0.08 + 1.4) * 10;
      noise += Math.sin(x * 0.2 + 0.5) * Math.cos(y * 0.15 + 2.8) * 5;
      noise += (Math.random() - 0.5) * 12; // Fine grain

      const base = data[idx]; // Current grey value
      const val = Math.max(40, Math.min(200, base + noise));
      data[idx] = val;
      data[idx + 1] = val;
      data[idx + 2] = val;
    }
  }

  // Add craters
  const craters = [
    { x: 300, y: 350, r: 80, depth: 30 },
    { x: 600, y: 200, r: 60, depth: 25 },
    { x: 150, y: 600, r: 50, depth: 20 },
    { x: 700, y: 500, r: 70, depth: 28 },
    { x: 450, y: 700, r: 45, depth: 18 },
    { x: 800, y: 300, r: 55, depth: 22 },
    { x: 250, y: 150, r: 35, depth: 15 },
    { x: 500, y: 450, r: 90, depth: 32 },
    { x: 100, y: 400, r: 40, depth: 16 },
    { x: 850, y: 700, r: 65, depth: 24 },
    { x: 400, y: 100, r: 30, depth: 12 },
    { x: 650, y: 650, r: 48, depth: 20 },
    // Smaller craters
    { x: 200, y: 300, r: 20, depth: 10 },
    { x: 550, y: 350, r: 15, depth: 8 },
    { x: 350, y: 550, r: 18, depth: 9 },
    { x: 750, y: 150, r: 22, depth: 11 },
    { x: 900, y: 500, r: 16, depth: 7 },
    { x: 450, y: 250, r: 25, depth: 12 },
  ];

  // Maria (dark patches)
  const maria = [
    { x: 400, y: 400, rx: 200, ry: 150, darkness: 35 },
    { x: 250, y: 300, rx: 120, ry: 100, darkness: 30 },
    { x: 600, y: 350, rx: 150, ry: 120, darkness: 28 },
    { x: 350, y: 600, rx: 100, ry: 80, darkness: 25 },
  ];

  // Apply maria (dark areas)
  for (const m of maria) {
    for (let y = Math.max(0, m.y - m.ry); y < Math.min(size, m.y + m.ry); y++) {
      for (let x = Math.max(0, m.x - m.rx); x < Math.min(size, m.x + m.rx); x++) {
        const dx = (x - m.x) / m.rx;
        const dy = (y - m.y) / m.ry;
        const dist = dx * dx + dy * dy;
        if (dist < 1) {
          const idx = (y * size + x) * 4;
          const falloff = 1 - Math.sqrt(dist);
          const smoothFalloff = falloff * falloff * (3 - 2 * falloff);
          data[idx] -= m.darkness * smoothFalloff;
          data[idx + 1] -= m.darkness * smoothFalloff;
          data[idx + 2] -= m.darkness * smoothFalloff;
        }
      }
    }
  }

  // Apply craters
  for (const c of craters) {
    for (let y = Math.max(0, c.y - c.r - 5); y < Math.min(size, c.y + c.r + 5); y++) {
      for (let x = Math.max(0, c.x - c.r - 5); x < Math.min(size, c.x + c.r + 5); x++) {
        const dx = x - c.x;
        const dy = y - c.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const idx = (y * size + x) * 4;

        if (dist < c.r) {
          // Inside crater: darken center, lighten rim
          const normalizedDist = dist / c.r;
          const craterProfile = normalizedDist < 0.7
            ? -c.depth * (1 - normalizedDist / 0.7)  // Dark center
            : c.depth * 0.5 * ((normalizedDist - 0.7) / 0.3); // Light rim

          data[idx] = Math.max(30, Math.min(220, data[idx] + craterProfile));
          data[idx + 1] = Math.max(30, Math.min(220, data[idx + 1] + craterProfile));
          data[idx + 2] = Math.max(30, Math.min(220, data[idx + 2] + craterProfile));
        } else if (dist < c.r + 5) {
          // Outer rim highlight
          const rimFalloff = 1 - (dist - c.r) / 5;
          data[idx] = Math.min(220, data[idx] + c.depth * 0.3 * rimFalloff);
          data[idx + 1] = Math.min(220, data[idx + 1] + c.depth * 0.3 * rimFalloff);
          data[idx + 2] = Math.min(220, data[idx + 2] + c.depth * 0.3 * rimFalloff);
        }
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

interface MoonSphereProps {
  scrollProgress: number;
  phaseVisibility: number;
  nasaTextureUrl?: string;
}

function MoonSphere({ scrollProgress, phaseVisibility, nasaTextureUrl }: MoonSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  // Load NASA texture or fallback to procedural
  useEffect(() => {
    if (nasaTextureUrl) {
      const loader = new THREE.TextureLoader();
      loader.load(
        nasaTextureUrl,
        (loadedTexture) => {
          loadedTexture.colorSpace = THREE.SRGBColorSpace;
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.warn('Failed to load NASA texture, using procedural:', error);
          setTexture(generateMoonTexture());
        }
      );
    } else {
      // No NASA texture provided, use procedural
      setTexture(generateMoonTexture());
    }
  }, [nasaTextureUrl]);

  // Slow rotation - called unconditionally
  useFrame((_, delta) => {
    if (meshRef.current && texture) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  // Move the directional light to simulate lunar phases based on scroll - called unconditionally
  useFrame(() => {
    if (lightRef.current && texture) {
      const angle = scrollProgress * Math.PI * 2;
      const x = Math.sin(angle) * 5;
      const z = Math.cos(angle) * 5;
      lightRef.current.position.set(x, 1, z);
    }
  });

  return (
    <group>
      {texture && (
        <>
          <directionalLight
            ref={lightRef}
            intensity={2.5}
            color="#ffffff"
            position={[5, 1, 0]}
          />
          <ambientLight intensity={0.08} color="#334466" />
          <mesh ref={meshRef}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial
              map={texture}
              roughness={1}
              metalness={0}
              transparent
              opacity={phaseVisibility}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

// Floating particles around the moon
function StarField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Camera controller that responds to scroll
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    const angle = scrollProgress * Math.PI * 0.3 - Math.PI * 0.15;
    const distance = 5.5;
    camera.position.x = Math.sin(angle) * distance;
    camera.position.z = Math.cos(angle) * distance;
    camera.position.y = Math.sin(scrollProgress * Math.PI) * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

interface Moon3DProps {
  scrollProgress?: number;
  phaseVisibility?: number;
  className?: string;
  onReady?: () => void;
  useNasaTexture?: boolean;
}

// Fallback 2D moon for when WebGL fails
function FallbackMoon2D({ phaseVisibility, className }: { phaseVisibility: number; className?: string }) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className || ''}`}>
      <div
        className="rounded-full"
        style={{
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle at 35% 35%, #bbb 0%, #888 40%, #444 70%, #222 100%)',
          opacity: phaseVisibility,
          boxShadow: '0 0 60px rgba(255,255,255,0.1), inset -20px -10px 40px rgba(0,0,0,0.6)',
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
}

export function Moon3D({
  scrollProgress = 0,
  phaseVisibility = 1,
  className = '',
  onReady,
  useNasaTexture = true,
}: Moon3DProps) {
  const [webglSupported, setWebglSupported] = useState(true);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  // Fetch NASA texture via tRPC proxy
  const { data: nasaData } = trpc.moon.getTexture.useQuery(undefined, {
    enabled: useNasaTexture,
    staleTime: Infinity, // Cache forever
    retry: false,
  });

  // Check WebGL support
  useEffect(() => {
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
      if (!gl) {
        setWebglSupported(false);
        onReadyRef.current?.();
      }
    } catch {
      setWebglSupported(false);
      onReadyRef.current?.();
    }
  }, []);

  const handleCreated = useCallback(() => {
    // Scene is ready once Canvas mounts and first frame renders
    setTimeout(() => onReadyRef.current?.(), 500);
  }, []);

  if (!webglSupported) {
    return <FallbackMoon2D phaseVisibility={phaseVisibility} className={className} />;
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Moon3DErrorBoundary
        fallback={<FallbackMoon2D phaseVisibility={phaseVisibility} />}
      >
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
          onCreated={handleCreated}
        >
          <Suspense fallback={null}>
            <CameraController scrollProgress={scrollProgress} />
            <MoonSphere
              scrollProgress={scrollProgress}
              phaseVisibility={phaseVisibility}
              nasaTextureUrl={nasaData?.dataUrl}
            />
            <StarField />
          </Suspense>
        </Canvas>
      </Moon3DErrorBoundary>
    </div>
  );
}
