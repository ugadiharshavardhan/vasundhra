'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles as R3FSparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface DiamondRevealSceneProps {
  scrollProgress: number; // 0 to 1 progress of step 7
  onDiamondVisible?: () => void;
}

export function DiamondRevealScene({ scrollProgress, onDiamondVisible }: DiamondRevealSceneProps) {
  const diamondGroupRef = useRef<THREE.Group>(null);
  const diamondMeshRef = useRef<THREE.Mesh>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const sweepLightRef = useRef<THREE.PointLight>(null);
  const { camera } = useThree();

  const [hasTriggeredVisible, setHasTriggeredVisible] = useState(false);

  // Custom Diamond Geometry (Double Pyramidal Octahedron with Brilliant Cut Facets)
  const diamondGeo = React.useMemo(() => {
    // Cone top (crown) and cone bottom (pavilion)
    const geom = new THREE.OctahedronGeometry(1.2, 2);
    return geom;
  }, []);

  // Material setup for hyper-realistic diamond transmission & IOR
  const diamondMaterial = React.useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.05,
      roughness: 0.02,
      transmission: 0.96,
      ior: 2.417, // Exact refractive index of pure diamond
      thickness: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.9,
      specularColor: new THREE.Color('#a57b53'),
      attenuationColor: new THREE.Color('#ffffff'),
      attenuationDistance: 2.0,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  // Internal facets reflections overlay
  const innerWireframeMat = React.useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: 0xa57b53,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Sequence timing mapping based on scroll or time progression
    const p = Math.min(1, Math.max(0, scrollProgress));

    // 1. Tiny light appears & intensifies (0 -> 0.3)
    if (spotLightRef.current) {
      spotLightRef.current.intensity = THREE.MathUtils.lerp(
        spotLightRef.current.intensity,
        p > 0.05 ? 15 + Math.sin(time * 2) * 2 : 0,
        0.05
      );
    }

    // 2 & 3. Diamond emerges & becomes fully visible (0.1 -> 0.4)
    if (diamondGroupRef.current) {
      const targetScale = p > 0.1 ? THREE.MathUtils.lerp(0, 1, Math.min(1, (p - 0.1) / 0.3)) : 0;
      diamondGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // 4. Extremely slow continuous rotation
      diamondGroupRef.current.rotation.y += delta * 0.25;
      diamondGroupRef.current.rotation.x = Math.sin(time * 0.5) * 0.08;
    }

    // Trigger text reveal callback when diamond is fully visible (p >= 0.45)
    if (p >= 0.35 && !hasTriggeredVisible) {
      setHasTriggeredVisible(true);
      if (onDiamondVisible) onDiamondVisible();
    }

    // 5 & 8. Camera gradual approach and subtle orbit
    const targetCamZ = THREE.MathUtils.lerp(5.5, 3.8, p);
    const targetCamX = Math.sin(time * 0.3) * 0.3 * p;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetCamX, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCamZ, 0.05);
    camera.lookAt(0, 0, 0);

    // 6 & 7. Light reflection travelling across facets & sparkle catch
    if (sweepLightRef.current) {
      sweepLightRef.current.position.x = Math.cos(time * 1.5) * 3;
      sweepLightRef.current.position.y = Math.sin(time * 2) * 2;
      sweepLightRef.current.position.z = 2 + Math.sin(time) * 1;
      sweepLightRef.current.intensity = 8 + Math.sin(time * 4) * 4;
    }
  });

  return (
    <group>
      {/* Warm Ambient & Directional Gold Lighting */}
      <ambientLight intensity={0.2} color="#050505" />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#f0f2f0" />
      <directionalLight position={[-5, -4, -3]} intensity={0.8} color="#a57b53" />

      {/* Controlled Key Spotlight for Diamond Emergence */}
      <spotLight
        ref={spotLightRef}
        position={[0, 6, 2]}
        angle={0.4}
        penumbra={0.8}
        intensity={0}
        color="#fff4e0"
        castShadow={false}
      />

      {/* Sweeping Light Reflection across facets */}
      <pointLight
        ref={sweepLightRef}
        position={[2, 2, 2]}
        intensity={5}
        color="#a57b53"
        distance={8}
      />

      {/* Floating 3D Diamond */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={diamondGroupRef} scale={[0, 0, 0]}>
          {/* Main Refractive Diamond Geometry */}
          <mesh
            ref={diamondMeshRef}
            geometry={diamondGeo}
            material={diamondMaterial}
          />
          {/* Inner Facet Wireframe Accent */}
          <mesh geometry={diamondGeo} material={innerWireframeMat} scale={[0.99, 0.99, 0.99]} />
        </group>
      </Float>

      {/* Controlled Premium Sparkles (Minimal, non-neon, elegant gold) */}
      {scrollProgress > 0.3 && (
        <R3FSparkles
          count={24}
          scale={3}
          size={1.5}
          speed={0.3}
          opacity={0.6}
          color="#a57b53"
        />
      )}
    </group>
  );
}
