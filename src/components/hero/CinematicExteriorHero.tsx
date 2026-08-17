'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, initGSAP } from '@/lib/gsap';
import { Sparkles } from 'lucide-react';

interface CinematicExteriorHeroProps {
  onComplete?: () => void;
}

export function CinematicExteriorHero({ onComplete }: CinematicExteriorHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const isSeekingRef = useRef(false);

  useEffect(() => {
    initGSAP();

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.pause();
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);

    // High performance RAF loop with seek locking to guarantee 60fps lag-free video scrubbing
    const updateVideoFrame = () => {
      if (video && video.duration && !isNaN(video.duration)) {
        const diff = targetTimeRef.current - currentTimeRef.current;

        if (Math.abs(diff) > 0.005) {
          currentTimeRef.current += diff * 0.22;

          if (!isSeekingRef.current && !video.seeking) {
            try {
              isSeekingRef.current = true;
              video.currentTime = currentTimeRef.current;
            } catch (err) {
              isSeekingRef.current = false;
            }
          }
        }
      }
      rafIdRef.current = requestAnimationFrame(updateVideoFrame);
    };

    rafIdRef.current = requestAnimationFrame(updateVideoFrame);

    // Responsive GSAP ScrollTrigger timeline pinning hero entrance sequence
    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=180%',
      pin: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        // Video scrubbing covers 0.0 -> 0.65 of scroll distance
        if (video && video.duration) {
          const videoProgress = Math.min(1, progress / 0.65);
          targetTimeRef.current = videoProgress * video.duration;
        }

        if (progress >= 0.98 && onComplete) {
          onComplete();
        }
      },
    });

    return () => {
      st.kill();
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadedmetadata', handleLoadedData);
        video.removeEventListener('seeked', handleSeeked);
      }
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [onComplete]);

  // Dark interior fade calculation (Frame 09: 0.50 -> 0.70)
  const blackOverlayOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.50) / 0.20));

  // Seamless text content reveal inside dark interior (0.65 -> 0.95)
  const textOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.65) / 0.25));
  const textTranslateY = Math.max(0, 30 * (1 - textOpacity));

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] overflow-hidden select-none will-change-transform"
      style={{ contain: 'paint layout' }}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-[#0A0A0A]">
        {/* Loading Indicator */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] z-20 space-y-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#B89B5E] border-t-transparent animate-spin" />
          </div>
        )}

        {/* Clean, Direct Entrance Video (No poster image flash) */}
        <video
          ref={videoRef}
          src="/videos/vasundhara-entrance.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none transform scale-[1.01] will-change-transform"
        />

        {/* Seamless Dark Interior Fade (Frame 09) */}
        <div
          className="absolute inset-0 bg-[#0A0A0A] z-30 pointer-events-none transition-opacity duration-75 linear"
          style={{ opacity: blackOverlayOpacity }}
        />

        {/* Seamless Interior World Statement Reveal (Frame 09) */}
        <div
          className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
            pointerEvents: textOpacity > 0.5 ? 'auto' : 'none',
          }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center justify-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B89B5E]" />
              <span>THE WORLD OF VASUNDHARA</span>
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-helvetica font-light tracking-wide leading-tight uppercase text-[#F7F3EC]">
              “Jewellery that carries a story.”
            </h2>

            <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/75 max-w-xl mx-auto leading-relaxed italic">
              Behind every facet lies an indelible memory. From hand-selected D-flawless solitaires to royal Nizami emeralds, Vasundhara transforms rare gems into living heirlooms.
            </p>

            <div className="pt-6">
              <span className="inline-block text-[10px] font-sans-refined tracking-[0.3em] text-[#B89B5E] uppercase border-b border-[#B89B5E]/40 pb-1">
                HYDERABAD • VIJAYAWADA • VISAKHAPATNAM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
