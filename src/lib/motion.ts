import type { Variants } from "framer-motion";

// Easing functions
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOutSoft = [0.42, 0, 0.58, 1] as const;

// Duration presets (in seconds)
export const durations = {
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
} as const;

// Session storage key for intro
export const introSessionKey = "sbe_intro_seen_v2_holo";

// Helper to check if user prefers reduced motion (client-safe)
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Check if intro should be shown
export function shouldShowIntro(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return !sessionStorage.getItem(introSessionKey);
  } catch {
    return false;
  }
}

// Mark intro as seen
export function markIntroSeen(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(introSessionKey, "1");
  } catch {
    // Silently fail if sessionStorage is unavailable
  }
}

// Page transition variants
export const page: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.base,
      ease: easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: durations.fast,
      ease: easeInOutSoft,
    },
  },
};

// Fade up animation
export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.base,
      ease: easeOutExpo,
    },
  },
};

// Stagger container
export const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger with custom timing
export const staggerChildren = (
  staggerDelay = 0.1,
  delayChildren = 0,
): Variants => ({
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// Card hover effect
export const cardHover: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easeInOutSoft,
    },
  },
};

// Mask reveal animation (for text reveals)
export const maskReveal = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as Variants,
  item: {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: durations.slow,
        ease: easeOutExpo,
      },
    },
  } as Variants,
};

// Viewport configuration for scroll animations
export const viewport = {
  once: true,
  amount: 0.35 as const,
  margin: "0px 0px -100px 0px",
};
