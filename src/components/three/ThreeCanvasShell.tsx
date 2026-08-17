'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

interface ThreeCanvasShellProps {
  children?: React.ReactNode;
  enableOrbit?: boolean;
}

export function ThreeCanvasShell({
  children,
  enableOrbit = false,
}: ThreeCanvasShellProps) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FDFBF7" />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#C5A059" />

        <Suspense fallback={null}>{children}</Suspense>

        {enableOrbit && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />}
      </Canvas>
    </div>
  );
}
