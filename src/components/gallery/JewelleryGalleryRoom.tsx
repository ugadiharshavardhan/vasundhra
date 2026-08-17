'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { gsap, ScrollTrigger, initGSAP } from '@/lib/gsap';
import { DiamondRevealScene } from '@/components/three/DiamondRevealScene';
import { JewelleryTransformationScene } from '@/components/three/JewelleryTransformationScene';
import { LazyCanvas } from '@/components/three/LazyCanvas';
import { Sparkles, Diamond, ArrowRight } from 'lucide-react';

export function JewelleryGalleryRoom() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showDiamondText, setShowDiamondText] = useState(false);
  const [showNecklaceUI, setShowNecklaceUI] = useState(false);

  useEffect(() => {
    initGSAP();
    const container = containerRef.current;
    if (!container) return;

    // Pin gallery room for scroll sequence: Step 6 -> Step 7 -> Step 8
    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=350%',
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        const p = self.progress;
        setScrollProgress(p);

        // Step 7 text trigger (p between 0.25 and 0.55)
        if (p >= 0.25 && p <= 0.6) {
          setShowDiamondText(true);
        } else {
          setShowDiamondText(false);
        }

        // Step 8 UI trigger (p > 0.65)
        if (p >= 0.65) {
          setShowNecklaceUI(true);
        } else {
          setShowNecklaceUI(false);
        }
      },
    });

    return () => st.kill();
  }, []);

  // Compute stage sub-progress
  // Stage 1: Room entry (0.0 -> 0.2)
  // Stage 2: Diamond reveal (0.2 -> 0.55)
  // Stage 3: Necklace transformation (0.55 -> 1.0)
  const diamondProgress = Math.min(1, Math.max(0, (scrollProgress - 0.15) / 0.4));
  const transformProgress = Math.min(1, Math.max(0, (scrollProgress - 0.55) / 0.45));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden text-[#f0f2f0]"
    >
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-10">
        <LazyCanvas>
          <Canvas
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            dpr={[1, 2]}
          >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />

          {/* STEP 6: Black Marble Floor & Boutique Architecture Surface */}
          <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            {/* Reflective Black Marble Floor Plane */}
            <mesh receiveShadow>
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial
                color="#080808"
                roughness={0.12}
                metalness={0.85}
              />
            </mesh>
            {/* Minimal Pedestal Base for Focal Area */}
            <mesh position={[0, 0, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[1.6, 1.8, 0.8, 64]} />
              <meshStandardMaterial
                color="#121212"
                roughness={0.2}
                metalness={0.9}
              />
            </mesh>
            {/* Gold Rim Accent on Pedestal */}
            <mesh position={[0, 0, 0.81]} rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.58, 1.62, 64]} />
              <meshBasicMaterial color="#a57b53" />
            </mesh>
          </group>

          {/* STEP 7: Diamond Reveal 3D Scene */}
          {scrollProgress < 0.6 && (
            <DiamondRevealScene
              scrollProgress={diamondProgress}
              onDiamondVisible={() => setShowDiamondText(true)}
            />
          )}

          {/* STEP 8: Jewellery Transformation 3D Scene */}
          {scrollProgress >= 0.55 && (
            <JewelleryTransformationScene progress={transformProgress} />
          )}

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.05}
            minPolarAngle={Math.PI / 3}
            rotateSpeed={0.4}
          />
        </Canvas>
      </LazyCanvas>
      </div>

      {/* STEP 7 Typography Overlay: "A STORY BENEATH EVERY JEWEL" */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-end pb-24 transition-all duration-700 ${
          showDiamondText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center space-y-3 max-w-xl px-6">
          <div className="flex items-center justify-center space-x-3 text-[#a57b53]">
            <span className="h-[1px] w-8 bg-[#a57b53]/60" />
            <Sparkles className="w-4 h-4" />
            <span className="h-[1px] w-8 bg-[#a57b53]/60" />
          </div>
          <h3 className="font-editorial text-2xl sm:text-4xl tracking-[0.25em] text-[#f0f2f0]">
            A STORY BENEATH EVERY JEWEL
          </h3>
          <p className="font-serif italic text-sm sm:text-base text-[#a57b53]">
            Forged over millions of years, hand-cut by master artisans in Hyderabad.
          </p>
        </div>
      </div>

      {/* STEP 8 Typography & UI Overlay: SIGNATURE COLLECTION */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-8 sm:p-16 transition-all duration-700 ${
          showNecklaceUI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Top Header Label */}
        <div className="max-w-7xl mx-auto w-full flex justify-between items-start">
          <div>
            <span className="font-sans-refined text-xs tracking-[0.4em] text-[#a57b53] uppercase block">
              STEP 8 — ARCHITECTURAL REVEAL
            </span>
            <h3 className="font-editorial text-3xl sm:text-5xl text-[#f0f2f0] tracking-wider mt-1">
              SIGNATURE COLLECTION
            </h3>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-xs font-sans-refined text-[#a57b53] border border-[#a57b53]/30 px-4 py-2 rounded-full backdrop-blur-md">
            <Diamond className="w-3.5 h-3.5" />
            <span>SOLITAIRE HARAM ATELIER</span>
          </div>
        </div>

        {/* Bottom Feature Specs & Discover Button */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-end justify-between gap-6 pointer-events-auto">
          {/* Spec Badges */}
          <div className="flex items-center space-x-6 text-xs font-sans-refined tracking-[0.25em] text-[#f0f2f0]/80 bg-[#161616]/60 backdrop-blur-xl p-4 rounded-xl border border-[#a57b53]/20">
            <span>18K GOLD</span>
            <span className="w-1 h-1 rounded-full bg-[#a57b53]" />
            <span>DIAMONDS</span>
            <span className="w-1 h-1 rounded-full bg-[#a57b53]" />
            <span>HANDCRAFTED</span>
          </div>

          {/* Discover Button */}
          <button
            onClick={() => {
              const el = document.getElementById('jewellery-viewer');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center space-x-3 px-8 py-4 bg-[#a57b53] hover:bg-[#c59d70] text-[#050505] font-sans-refined text-xs tracking-[0.25em] font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(165,123,83,0.3)] hover:scale-105"
          >
            <span>DISCOVER COLLECTION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
