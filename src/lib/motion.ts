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

// Premium Hero Variants (for hero sections with stagger + shimmer)
export const premiumHero = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as Variants,
  title: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.slow,
        ease: easeOutExpo,
      },
    },
  } as Variants,
  subtitle: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.base,
        ease: easeOutExpo,
        delay: 0.2,
      },
    },
  } as Variants,
  cta: {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: durations.base,
        ease: easeOutExpo,
        delay: 0.3,
      },
    },
  } as Variants,
};

// Shimmer/Glow loop animation (respects reduced motion)
export const shimmerLoop = (reducedMotion: boolean): Variants => ({
  initial: { backgroundPosition: "200% center" },
  animate: reducedMotion
    ? { backgroundPosition: "200% center" }
    : {
        backgroundPosition: ["-200% center", "200% center"],
        transition: {
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        },
      },
});

// Micro lift (for CTA hover)
export const microLift: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: durations.fast,
      ease: easeOutExpo,
    },
  },
};

// Border sweep (for card reveals)
export const borderSweep = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: durations.slow,
      ease: easeOutExpo,
    },
  },
} as Variants;

// Stagger grid (for project cards / grids)
export const staggerGrid: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};
