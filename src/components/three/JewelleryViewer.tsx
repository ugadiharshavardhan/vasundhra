'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, Float, Html, useProgress } from '@react-three/drei';
import { LazyCanvas } from '@/components/three/LazyCanvas';
import * as THREE from 'three';
import { Sparkles, RefreshCw, ZoomIn, Eye } from 'lucide-react';

import { CONFIG } from '@/lib/config';

interface JewelleryViewerProps {
  modelPath?: string;
  title?: string;
  category?: string;
  goldType?: string;
  diamondCarat?: string;
  description?: string;
  autoRotate?: boolean;
  enableDrag?: boolean;
  enableZoom?: boolean;
}

// Custom Luxury Minimal Loader (Step 9 Requirement: "CRAFTING THE EXPERIENCE", no generic spinner)
function LuxuryMinimalLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-4 w-72 text-center pointer-events-none">
        <div className="flex items-center space-x-2 text-[#a57b53]">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="font-sans-refined text-[10px] tracking-[0.4em] uppercase text-[#f0f2f0]">
            VASUNDHARA ATELIER
          </span>
        </div>

        <p className="font-editorial text-sm tracking-[0.25em] text-[#f0f2f0] font-medium">
          CRAFTING THE EXPERIENCE
        </p>

        {/* Golden Minimal Loading Progress Line */}
        <div className="w-full h-[2px] bg-[#161616] rounded-full overflow-hidden border border-[#a57b53]/20">
          <div
            className="h-full bg-gradient-to-r from-[#a57b53] via-[#f0f2f0] to-[#a57b53] transition-all duration-300 ease-out"
            style={{ width: `${Math.max(10, progress)}%` }}
          />
        </div>

        <span className="font-mono text-[10px] tracking-widest text-[#a57b53]">
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

// Procedural Parametric 3D High Jewellery Model (Used as optimized high-fidelity GLTF fallback)
function ParametricHighJewelleryModel({ isMobile = false }: { isMobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const goldMat = React.useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#d4af37',
        metalness: 0.95,
        roughness: isMobile ? 0.25 : 0.12,
      }),
    [isMobile]
  );

  const diamondMat = React.useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.05,
        roughness: 0.02,
        transmission: isMobile ? 0.85 : 0.96,
        ior: 2.417,
        thickness: 1.2,
      }),
    [isMobile]
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Emerald Cut Solitaire */}
      <mesh geometry={new THREE.BoxGeometry(0.8, 1.2, 0.6)} material={diamondMat} />

      {/* Gold Halo Prongs */}
      <mesh geometry={new THREE.TorusGeometry(0.7, 0.06, 16, 32)} material={goldMat} />

      {/* Outer Diamond Cascade Ring */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.sin(angle) * 1.2;
        const y = Math.cos(angle) * 1.2;
        return (
          <mesh
            key={i}
            position={[x, y, 0]}
            geometry={new THREE.OctahedronGeometry(0.25, 1)}
            material={diamondMat}
          />
        );
      })}
    </group>
  );
}

// GLTF Model Component Loader with Draco Support
function GLTFJewelleryModel({ url, isMobile }: { url: string; isMobile: boolean }) {
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={isMobile ? 0.85 : 1} />;
  } catch (err) {
    // Fallback gracefully if GLB file path is loading or absent
    return <ParametricHighJewelleryModel isMobile={isMobile} />;
  }
}

export function JewelleryViewer({
  modelPath = CONFIG.assets.models.engagementRing,
  title = 'ROYAL NIZAM DIAMOND SOLITAIRE RING',
  category = 'HIGH JEWELLERY ATELIER',
  goldType = '18K YELLOW & WHITE GOLD',
  diamondCarat = 'VVS1 D-COLOR • 14.8 CARATS',
  description = 'Hand-selected uncut diamonds arranged in a symmetrical architectural setting inspired by Hyderabad Nizam royal heritage.',
  autoRotate = true,
  enableDrag = true,
  enableZoom = true,
}: JewelleryViewerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      id="jewellery-viewer"
      className="relative w-full min-h-screen bg-[#050505] text-[#f0f2f0] py-20 px-6 sm:px-12 md:px-20 z-30 border-t border-[#a57b53]/15 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Interactive 3D Canvas Box (Step 9) */}
        <div className="lg:col-span-7 h-[480px] sm:h-[600px] w-full relative rounded-3xl bg-[#0a0a0a] border border-[#a57b53]/25 overflow-hidden shadow-[0_0_80px_rgba(165,123,83,0.15)] group">
          {/* Top Status & Controls Bar */}
          <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-none">
            <div className="flex items-center space-x-2 bg-[#161616]/70 backdrop-blur-md px-4 py-2 rounded-full border border-[#a57b53]/30">
              <span className="w-2 h-2 rounded-full bg-[#a57b53] animate-pulse" />
              <span className="font-sans-refined text-[10px] tracking-[0.25em] text-[#f0f2f0]">
                {isMobile ? 'MOBILE 3D MODE' : 'DESKTOP 3D HIGH-RES'}
              </span>
            </div>

            <div className="flex items-center space-x-3 pointer-events-auto">
              <div className="p-2 rounded-full bg-[#161616]/70 border border-[#a57b53]/30 text-[#a57b53] hover:bg-[#a57b53]/20 transition-colors cursor-pointer" title="Interactive 3D Controls Active">
                <RefreshCw className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* R3F 3D Canvas */}
          <LazyCanvas>
            <Canvas
              gl={{
                antialias: !isMobile,
                alpha: true,
                powerPreference: 'high-performance',
              }}
              dpr={isMobile ? [1, 1.5] : [1, 2]}
            >
              <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={45} />
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 8, 5]} intensity={1.8} color="#ffffff" />
              <directionalLight position={[-5, -4, -3]} intensity={0.8} color="#a57b53" />

              <Suspense fallback={<LuxuryMinimalLoader />}>
                <Float speed={autoRotate ? 1.5 : 0} rotationIntensity={0.2} floatIntensity={0.3}>
                  {modelPath ? (
                    <GLTFJewelleryModel url={modelPath} isMobile={isMobile} />
                  ) : (
                    <ParametricHighJewelleryModel isMobile={isMobile} />
                  )}
                </Float>
              </Suspense>

              {enableDrag && (
                <OrbitControls
                  enableZoom={enableZoom}
                  minDistance={2.5}
                  maxDistance={7}
                  autoRotate={autoRotate}
                  autoRotateSpeed={0.8}
                  enablePan={false}
                />
              )}
            </Canvas>
          </LazyCanvas>

          {/* Bottom Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center space-x-2 bg-[#050505]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#a57b53]/20 text-[10px] font-sans-refined tracking-[0.25em] text-[#a57b53]">
            <Eye className="w-3.5 h-3.5" />
            <span>DRAG TO ROTATE 360°</span>
          </div>
        </div>

        {/* Right Column: Editorial Jewellery Details & Specification */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-sans-refined text-xs tracking-[0.4em] text-[#a57b53] uppercase block mb-2">
              {category}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#f0f2f0] tracking-wide leading-tight">
              {title}
            </h2>
            <div className="w-16 h-[1px] bg-[#a57b53] mt-4" />
          </div>

          <p className="font-serif text-lg text-[#f0f2f0]/80 leading-relaxed italic">
            {description}
          </p>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#a57b53]/20">
            <div className="p-4 rounded-xl bg-[#161616]/40 border border-[#a57b53]/15 space-y-1">
              <span className="font-sans-refined text-[10px] tracking-widest text-[#a57b53] block">
                PRECIOUS METAL
              </span>
              <p className="font-editorial text-sm text-[#f0f2f0]">{goldType}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#161616]/40 border border-[#a57b53]/15 space-y-1">
              <span className="font-sans-refined text-[10px] tracking-widest text-[#a57b53] block">
                GEMSTONE SPECS
              </span>
              <p className="font-editorial text-sm text-[#f0f2f0]">{diamondCarat}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-4 px-6 bg-[#a57b53] hover:bg-[#c59d70] text-[#050505] font-sans-refined text-xs tracking-[0.25em] font-semibold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(165,123,83,0.25)] text-center">
              BOOK PRIVATE APPOINTMENT
            </button>
            <button className="py-4 px-6 border border-[#a57b53]/40 hover:bg-[#a57b53]/10 text-[#f0f2f0] font-sans-refined text-xs tracking-[0.2em] rounded-full transition-colors text-center">
              REQUEST CERTIFICATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
