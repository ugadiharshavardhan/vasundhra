import * as THREE from 'three';

/**
 * Responsive device and performance detection utilities for Vasundhara Diamond Roof
 */

export interface DevicePerformanceProfile {
  isMobile: boolean;
  isTouch: boolean;
  hasWebGL: boolean;
  dpr: number;
  hardwareConcurrency: number;
  tier: 'low' | 'medium' | 'high';
  prefersReducedMotion: boolean;
}

export function detectPerformanceProfile(): DevicePerformanceProfile {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTouch: false,
      hasWebGL: true,
      dpr: 1,
      hardwareConcurrency: 4,
      tier: 'high',
      prefersReducedMotion: false,
    };
  }

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // WebGL support check
  let hasWebGL = false;
  try {
    const canvas = document.createElement('canvas');
    hasWebGL = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    hasWebGL = false;
  }

  const rawDpr = window.devicePixelRatio || 1;
  // Cap DPR for optimal performance
  const dpr = isMobile ? Math.min(rawDpr, 1.5) : Math.min(rawDpr, 2.0);
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Tier classification
  let tier: 'low' | 'medium' | 'high' = 'high';
  if (isMobile || hardwareConcurrency < 4 || !hasWebGL) {
    tier = 'low';
  } else if (hardwareConcurrency < 8) {
    tier = 'medium';
  }

  return {
    isMobile,
    isTouch,
    hasWebGL,
    dpr,
    hardwareConcurrency,
    tier,
    prefersReducedMotion,
  };
}

/**
 * Cleanly dispose of Three.js objects (Geometries, Materials, Textures) to prevent memory leaks
 */
export function disposeThreeScene(object: THREE.Object3D | null | undefined): void {
  if (!object) return;

  object.traverse((child: any) => {
    if (child.geometry) {
      child.geometry.dispose();
    }

    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((mat: any) => disposeMaterial(mat));
      } else {
        disposeMaterial(child.material);
      }
    }
  });
}

function disposeMaterial(material: any): void {
  if (!material) return;
  
  // Dispose all potential textures on the material
  Object.keys(material).forEach((prop) => {
    if (material[prop] && material[prop].isTexture) {
      material[prop].dispose();
    }
  });

  if (typeof material.dispose === 'function') {
    material.dispose();
  }
}

/**
 * Lerp helper for smooth camera and frame interpolation
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Clamp helper
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
