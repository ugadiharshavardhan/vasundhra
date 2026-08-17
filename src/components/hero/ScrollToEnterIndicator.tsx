'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollToEnterIndicatorProps {
  opacity?: number;
}

export function ScrollToEnterIndicator({ opacity = 1 }: ScrollToEnterIndicatorProps) {
  return (
    <div
      className="pointer-events-none fixed bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-3 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="px-5 py-2 rounded-full border border-[#C5A059]/30 bg-[#050505]/60 backdrop-blur-md shadow-2xl flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
        <span className="font-sans-refined text-[10px] tracking-[0.35em] text-[#E6D7C3] font-medium">
          SCROLL TO ENTER
        </span>
      </div>
      <ChevronDown className="w-4 h-4 text-[#C5A059] animate-bounce opacity-80" />
    </div>
  );
}
