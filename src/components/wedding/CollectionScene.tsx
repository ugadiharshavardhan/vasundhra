'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { LazyCanvas } from '@/components/three/LazyCanvas';
import { CONFIG } from '@/lib/config';
import * as THREE from 'three';

interface CollectionSceneProps {
  stage: 'ENGAGEMENT' | 'MEHENDI' | 'WEDDING' | 'RECEPTION';
  accentColor?: string;
}

function GLTFModelWrapper({ url, scale = 1 }: { url: string; scale?: number }) {
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={scale} />;
  } catch (e) {
    return null;
  }
}

// Inner 3D Mesh Component (Child of <Canvas>, allowing safe R3F useFrame usage)
function CollectionSceneMesh({ stage }: CollectionSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: stage === 'MEHENDI' ? '#e6b800' : '#d4af37',
        metalness: 0.95,
        roughness: 0.15,
      }),
    [stage]
  );

  const gemMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: stage === 'WEDDING' ? '#00b359' : 0xffffff, // Emerald accent for wedding, diamond for others
        metalness: 0.1,
        roughness: 0.03,
        transmission: 0.9,
        ior: stage === 'WEDDING' ? 1.57 : 2.417,
        thickness: 1.2,
      }),
    [stage]
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {stage === 'ENGAGEMENT' && (
        <Suspense
          fallback={
            <group>
              <mesh geometry={new THREE.TorusGeometry(1.0, 0.12, 16, 64)} material={goldMaterial} />
              <mesh position={[0, 1.0, 0]} geometry={new THREE.OctahedronGeometry(0.5, 2)} material={gemMaterial} />
            </group>
          }
        >
          <GLTFModelWrapper url={CONFIG.assets.models.engagementRing} scale={1.0} />
        </Suspense>
      )}

      {stage === 'MEHENDI' && (
        /* Kundan Choker Necklace Motif */
        <group>
          <mesh geometry={new THREE.TorusGeometry(1.3, 0.15, 16, 64)} material={goldMaterial} />
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[Math.sin(angle) * 1.3, Math.cos(angle) * 1.3, 0]}
                geometry={new THREE.OctahedronGeometry(0.25, 1)}
                material={gemMaterial}
              />
            );
          })}
        </group>
      )}

      {stage === 'WEDDING' && (
        /* Royal Nizam Emerald & Diamond Haram */
        <group>
          <mesh geometry={new THREE.TorusGeometry(1.5, 0.18, 16, 64)} material={goldMaterial} />
          <mesh
            position={[0, -1.5, 0.1]}
            geometry={new THREE.OctahedronGeometry(0.7, 2)}
            material={gemMaterial}
          />
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 1.2 - Math.PI * 0.6;
            return (
              <mesh
                key={i}
                position={[Math.sin(angle) * 1.5, -Math.cos(angle) * 1.5, 0]}
                geometry={new THREE.OctahedronGeometry(0.2, 1)}
                material={goldMaterial}
              />
            );
          })}
        </group>
      )}

      {stage === 'RECEPTION' && (
        /* Modern Diamond Cascade & Bangles */
        <group>
          <mesh geometry={new THREE.TorusGeometry(1.2, 0.08, 16, 64)} material={goldMaterial} />
          <mesh
            position={[0, 0.3, 0]}
            geometry={new THREE.TorusGeometry(1.4, 0.08, 16, 64)}
            material={gemMaterial}
          />
          <mesh
            position={[0, -0.3, 0]}
            geometry={new THREE.TorusGeometry(1.0, 0.08, 16, 64)}
            material={goldMaterial}
          />
        </group>
      )}
    </group>
  );
}

export function CollectionScene({ stage, accentColor = '#a57b53' }: CollectionSceneProps) {
  return (
    <div className="w-full h-full relative">
      <LazyCanvas>
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={45} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 8, 5]} intensity={1.6} color="#ffffff" />
          <directionalLight position={[-5, -4, -3]} intensity={0.8} color={accentColor} />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <CollectionSceneMesh stage={stage} accentColor={accentColor} />
          </Float>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
        </Canvas>
      </LazyCanvas>
    </div>
  );
}
