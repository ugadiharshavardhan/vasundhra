import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let gsapRegistered = false;

export function initGSAP() {
  if (typeof window !== 'undefined' && !gsapRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    gsapRegistered = true;

    // Set default GSAP configuration
    gsap.config({
      nullTargetWarn: false,
    });
  }
  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };

/**
 * GSAP Animation Utility Functions for Vasundhara Luxury Editorial Animations
 */

export const animUtils = {
  fadeIn: (target: string | Element, duration = 1, delay = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
    );
  },

  revealText: (target: string | Element, delay = 0) => {
    return gsap.fromTo(
      target,
      { opacity: 0, y: 40, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, delay, ease: 'power3.out' }
    );
  },

  staggerIn: (targets: string | Element[], stagger = 0.15) => {
    return gsap.fromTo(
      targets,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger, ease: 'power2.out' }
    );
  },
};
