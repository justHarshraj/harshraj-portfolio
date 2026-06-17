import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleBackground = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 900;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      // Create a mix of cool blue, purple, and silver particles
      const mixType = Math.random();
      if (mixType < 0.4) {
        // Soft blue/cyan
        colors[i * 3] = 0.3 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else if (mixType < 0.7) {
        // Soft purple/indigo
        colors[i * 3] = 0.5 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else {
        // Silver/White
        const val = 0.6 + Math.random() * 0.4;
        colors[i * 3] = val;
        colors[i * 3 + 1] = val;
        colors[i * 3 + 2] = val;
      }
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      // Hardware-accelerated group rotations
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
