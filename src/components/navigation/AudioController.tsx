'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className="group flex items-center space-x-2 text-xs font-sans-refined tracking-widest text-[#f0f2f0]/80 hover:text-[#a57b53] transition-colors focus:outline-none"
      title={isPlaying ? 'Mute Atmosphere' : 'Play Atmosphere'}
    >
      <span className="hidden sm:inline">
        {isPlaying ? 'ATMOSPHERE ON' : 'ATMOSPHERE'}
      </span>
      <div className="p-2 rounded-full border border-[#a57b53]/30 group-hover:border-[#a57b53] transition-colors bg-[#161616]/40 backdrop-blur-md">
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#a57b53] animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#f0f2f0]/60" />
        )}
      </div>
    </button>
  );
}
