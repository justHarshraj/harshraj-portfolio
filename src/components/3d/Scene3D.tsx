import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleBackground } from './ParticleBackground';
import { WireframeGrid } from './WireframeGrid';
import { FloatingGeometry } from './FloatingGeometry';

export const Scene3D = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallPhone, setIsSmallPhone] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallPhone(window.innerWidth < 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: isMobile ? 'low-power' : 'high-performance'
        }}
        dpr={isSmallPhone ? 0.75 : isMobile ? 1 : [1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#c0c0c0" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#808080" />

        {!isMobile && <ParticleBackground />}
        <WireframeGrid />

        {!isMobile && (
          <>
            <FloatingGeometry geometry="box" position={[-8, 3, -5]} scale={0.8} speed={0.5} />
            <FloatingGeometry geometry="sphere" position={[8, -2, -3]} scale={0.6} speed={0.7} />
          </>
        )}
        <FloatingGeometry geometry="torus" position={[-6, -3, -8]} scale={0.7} speed={0.6} />
        <FloatingGeometry geometry="octahedron" position={[7, 4, -6]} scale={0.9} speed={0.4} />
      </Canvas>
    </div>
  );
};
