import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef, useMemo, Suspense, Component, type ReactNode } from 'react';
import * as THREE from 'three';

// Error boundary to catch texture loading failures
class Moon3DErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

interface MoonSphereProps {
  scrollProgress: number;
  phaseVisibility: number;
}

const MOON_TEXTURE_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663032200270/GrnfiChkLPEblyKd.jpg';

function MoonSphere({ scrollProgress, phaseVisibility }: MoonSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const texture = useTexture(MOON_TEXTURE_URL);

  // Slow rotation
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  // Move the directional light to simulate lunar phases based on scroll
  useFrame(() => {
    if (lightRef.current) {
      // Full cycle: light orbits around the moon
      // scrollProgress 0 = new moon (light behind), 0.5 = full moon (light in front)
      const angle = scrollProgress * Math.PI * 2;
      const x = Math.sin(angle) * 5;
      const z = Math.cos(angle) * 5;
      lightRef.current.position.set(x, 1, z);
    }
  });

  return (
    <group>
      {/* Directional light simulates sunlight for lunar phases */}
      <directionalLight
        ref={lightRef}
        intensity={2.5}
        color="#ffffff"
        position={[5, 1, 0]}
      />

      {/* Subtle ambient light for dark side visibility */}
      <ambientLight intensity={0.08} color="#334466" />

      {/* Moon sphere */}
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
    </group>
  );
}

// Floating particles around the moon
function StarField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute in a sphere around the moon
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
    // Gentle camera orbit based on scroll
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
}

// Fallback moon using simple geometry (no texture)
function FallbackMoon({ scrollProgress, phaseVisibility }: MoonSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  useFrame(() => {
    if (lightRef.current) {
      const angle = scrollProgress * Math.PI * 2;
      lightRef.current.position.set(Math.sin(angle) * 5, 1, Math.cos(angle) * 5);
    }
  });

  return (
    <group>
      <directionalLight ref={lightRef} intensity={2.5} color="#ffffff" position={[5, 1, 0]} />
      <ambientLight intensity={0.08} color="#334466" />
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#888888" roughness={1} metalness={0} transparent opacity={phaseVisibility} />
      </mesh>
    </group>
  );
}

export function Moon3D({
  scrollProgress = 0,
  phaseVisibility = 1,
  className = '',
}: Moon3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Moon3DErrorBoundary
        fallback={
          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <CameraController scrollProgress={scrollProgress} />
              <FallbackMoon scrollProgress={scrollProgress} phaseVisibility={phaseVisibility} />
              <StarField />
            </Suspense>
          </Canvas>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <CameraController scrollProgress={scrollProgress} />
            <MoonSphere
              scrollProgress={scrollProgress}
              phaseVisibility={phaseVisibility}
            />
            <StarField />
          </Suspense>
        </Canvas>
      </Moon3DErrorBoundary>
    </div>
  );
}
