'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles as R3FSparkles } from '@react-three/drei';
import * as THREE from 'three';

interface JewelleryTransformationSceneProps {
  progress: number; // 0 (start transform) -> 1 (necklace complete)
  onComplete?: () => void;
}

export function JewelleryTransformationScene({ progress, onComplete }: JewelleryTransformationSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const necklaceGroupRef = useRef<THREE.Group>(null);
  const goldStructureRef = useRef<THREE.Group>(null);
  const diamondsGroupRef = useRef<THREE.Group>(null);

  const numSmallDiamonds = 14;

  // Gold Material
  const goldMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#d4af37'),
      metalness: 0.95,
      roughness: 0.15,
      envMapIntensity: 2.0,
    });
  }, []);

  // Diamond Material for smaller necklace diamonds
  const diamondMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.02,
      transmission: 0.95,
      ior: 2.417,
      thickness: 0.8,
      clearcoat: 1.0,
    });
  }, []);

  // Geometries for parametric necklace assembly
  const smallDiamondGeo = useMemo(() => new THREE.OctahedronGeometry(0.2, 1), []);
  const mainCenterDiamondGeo = useMemo(() => new THREE.OctahedronGeometry(0.5, 2), []);
  
  // Curved Gold Necklace Chain Link Geometries
  const goldToruses = useMemo(() => {
    const arr = [];
    for (let i = 0; i < numSmallDiamonds; i++) {
      const angle = (i / numSmallDiamonds) * Math.PI * 1.2 - Math.PI * 0.6;
      const radius = 1.8;
      const x = Math.sin(angle) * radius;
      const y = -Math.cos(angle) * radius * 0.6 + 0.5;
      const z = (Math.random() - 0.5) * 0.1;
      arr.push({ x, y, z, angle });
    }
    return arr;
  }, [numSmallDiamonds]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const p = Math.min(1, Math.max(0, progress));

    // Phase 1: Diamond splitting into multiple diamonds (0.0 -> 0.35)
    // Phase 2: Gold structure weaving (0.3 -> 0.7)
    // Phase 3: Final Necklace Assembly (0.65 -> 1.0)

    if (diamondsGroupRef.current) {
      diamondsGroupRef.current.children.forEach((child, idx) => {
        const targetPos = goldToruses[idx];
        if (!targetPos) return;

        // Animate from center (0,0,0) out to curved necklace positions
        const splitFactor = Math.min(1, Math.max(0, (p - 0.1) / 0.5));
        const currentX = THREE.MathUtils.lerp(0, targetPos.x, splitFactor);
        const currentY = THREE.MathUtils.lerp(0, targetPos.y, splitFactor);
        const currentZ = THREE.MathUtils.lerp(0, targetPos.z, splitFactor);

        child.position.set(currentX, currentY, currentZ);
        child.rotation.y = time * 0.5 + idx;
      });
    }

    if (goldStructureRef.current) {
      // Gold structure opacity & growth
      const goldGrowth = Math.min(1, Math.max(0, (p - 0.3) / 0.4));
      goldStructureRef.current.scale.set(goldGrowth, goldGrowth, goldGrowth);
    }

    // Complete Necklace Slow Rotation when p >= 0.95
    if (necklaceGroupRef.current) {
      if (p >= 0.9) {
        necklaceGroupRef.current.rotation.y += delta * 0.2;
      } else {
        necklaceGroupRef.current.rotation.y = THREE.MathUtils.lerp(
          necklaceGroupRef.current.rotation.y,
          0,
          0.05
        );
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting for High Jewellery Gold Highlights */}
      <spotLight position={[3, 5, 4]} intensity={12} color="#fff1d6" angle={0.5} />
      <spotLight position={[-4, 3, -2]} intensity={6} color="#a57b53" angle={0.6} />
      <pointLight position={[0, -1, 3]} intensity={4} color="#ffd79e" />

      {/* Floating Assembling Necklace */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
        <group ref={necklaceGroupRef}>
          {/* Central Pendant Main Diamond */}
          <mesh
            geometry={mainCenterDiamondGeo}
            material={diamondMaterial}
            position={[0, -0.6, 0.1]}
          />

          {/* Golden Pendant Setting Border */}
          <mesh
            geometry={new THREE.TorusGeometry(0.55, 0.04, 16, 32)}
            material={goldMaterial}
            position={[0, -0.6, 0.1]}
          />

          {/* Multiple Splitting Diamonds */}
          <group ref={diamondsGroupRef}>
            {goldToruses.map((_, idx) => (
              <mesh
                key={idx}
                geometry={smallDiamondGeo}
                material={diamondMaterial}
              />
            ))}
          </group>

          {/* Gold Structural Weave / Necklace Frame */}
          <group ref={goldStructureRef} scale={[0, 0, 0]}>
            {goldToruses.map((pos, idx) => (
              <mesh
                key={`gold-${idx}`}
                position={[pos.x, pos.y, pos.z]}
                rotation={[0, 0, pos.angle]}
                geometry={new THREE.TorusGeometry(0.22, 0.03, 12, 24)}
                material={goldMaterial}
              />
            ))}
            {/* Connecting Gold Arch Curve */}
            <mesh
              position={[0, -0.1, -0.05]}
              rotation={[Math.PI / 2, 0, 0]}
              geometry={new THREE.TorusGeometry(1.75, 0.025, 16, 64, Math.PI * 1.1)}
              material={goldMaterial}
            />
          </group>
        </group>
      </Float>

      {/* Subtle Warm Gold Sparkle Highlights */}
      {progress > 0.5 && (
        <R3FSparkles
          count={20}
          scale={3.5}
          size={1.2}
          speed={0.2}
          opacity={0.5}
          color="#ffd79e"
        />
      )}
    </group>
  );
}
