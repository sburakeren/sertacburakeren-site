"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoloPyramid } from "./HoloPyramid";
import { shouldShowIntro, markIntroSeen, prefersReducedMotion } from "@/lib/motion";

export function IntroGate({ children }: { children: React.ReactNode }) {
  // Start with null to avoid hydration mismatch
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const reducedMotion = prefersReducedMotion();

  // Single effect for mount detection and intro state - avoids cascading
  useEffect(() => {
    // Check intro state only on client after mount
    // This is intentional for hydration safety
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const shouldShow = shouldShowIntro();
    setShowIntro(shouldShow);
  }, []);

  const handleComplete = useCallback(() => {
    markIntroSeen();
    setShowIntro(false);
  }, []);

  useEffect(() => {
    if (showIntro !== true) return;
    
    // Auto-dismiss after animation completes
    const timer = setTimeout(() => {
      handleComplete();
    }, reducedMotion ? 400 : 2300);
    return () => clearTimeout(timer);
  }, [reducedMotion, handleComplete, showIntro]);

  useEffect(() => {
    // Lock scroll when intro is visible
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  const introTransition = reducedMotion
    ? { duration: 0.2 }
    : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

  // Don't render intro until state is determined (null = loading)
  if (showIntro === null) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro === true && (
          <motion.div
            data-intro-gate="root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={introTransition}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl"
          >
            {/* Skip Button */}
            <button
              onClick={handleComplete}
              className="absolute top-6 right-6 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 border border-zinc-700/50 hover:border-zinc-500 rounded-lg backdrop-blur-sm"
              aria-label="Skip intro"
            >
              Skip
            </button>

            {/* Content Container */}
            <div className="flex flex-col items-center gap-8 px-6 md:flex-row md:gap-12">
              {/* Pyramid */}
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={reducedMotion ? {} : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <HoloPyramid />
              </motion.div>

              {/* Text Content */}
              <div className="flex flex-col items-center md:items-start gap-4">
                {/* Kicker */}
                <motion.div
                  initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reducedMotion ? {} : { duration: 0.6, delay: 0.3 }}
                  className="text-xs uppercase tracking-wider text-zinc-500"
                >
                  Software • Security • Product
                </motion.div>

                {/* Animated Name */}
                <div className="overflow-hidden">
                  <motion.h1
                    initial={reducedMotion ? {} : { opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      reducedMotion
                        ? {}
                        : {
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }
                    }
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                  >
                    Sertaç Burak Eren
                  </motion.h1>
                </div>

                {/* Tagline */}
                <motion.p
                  initial={reducedMotion ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={reducedMotion ? {} : { duration: 0.6, delay: 0.9 }}
                  className="text-sm text-zinc-400"
                >
                  AI-First Builder
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
