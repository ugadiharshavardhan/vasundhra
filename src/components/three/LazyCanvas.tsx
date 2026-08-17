'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LazyCanvasProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  rootMargin?: string;
  className?: string;
}

/**
 * LazyCanvas wraps 3D WebGL Canvases with an IntersectionObserver.
 * It mounts the R3F Canvas ONLY when the component is within or near the viewport (rootMargin: 300px).
 * When off-screen, it unmounts the Canvas, which releases the WebGL context (loseContextOnUnmount: true).
 * This prevents WebGL context exhaustion (max WebGL contexts error) and maintains 60FPS GPU performance.
 */
export function LazyCanvas({
  children,
  placeholder = (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] text-[#a57b53]">
      <div className="w-8 h-8 rounded-full border border-[#a57b53]/40 border-t-transparent animate-spin" />
    </div>
  ),
  rootMargin = '250px',
  className = 'w-full h-full relative',
}: LazyCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {isInView ? children : placeholder}
    </div>
  );
}
