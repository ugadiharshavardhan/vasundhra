'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { DevicePerformanceProfile, detectPerformanceProfile } from '@/lib/performance';

interface PerformanceContextType {
  profile: DevicePerformanceProfile;
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const defaultProfile: DevicePerformanceProfile = {
  isMobile: false,
  isTouch: false,
  hasWebGL: true,
  dpr: 1,
  hardwareConcurrency: 4,
  tier: 'high',
  prefersReducedMotion: false,
};

const PerformanceContext = createContext<PerformanceContextType>({
  profile: defaultProfile,
  activeSection: 'hero',
  setActiveSection: () => {},
});

export const usePerformance = () => useContext(PerformanceContext);

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<DevicePerformanceProfile>(defaultProfile);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    // Initial profile detection
    const p = detectPerformanceProfile();
    setProfile(p);

    // Listen for resize / DPR changes
    const handleResize = () => {
      setProfile(detectPerformanceProfile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PerformanceContext.Provider value={{ profile, activeSection, setActiveSection }}>
      {children}
    </PerformanceContext.Provider>
  );
}
