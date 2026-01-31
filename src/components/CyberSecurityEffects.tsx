"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface CyberSecurityEffectsProps {
  variant?: "scan" | "shield" | "lock" | "minimal";
  intensity?: "subtle" | "medium" | "strong";
}

/**
 * Siber güvenlik temalı kurumsal animasyon efektleri
 * - Scan: Tarama çizgisi animasyonu
 * - Shield: Koruma kalkanı pulse
 * - Lock: Güvenli bağlantı göstergesi
 * - Minimal: Hafif binary akışı
 */
export function CyberSecurityEffects({ 
  variant = "minimal", 
  intensity = "subtle" 
}: CyberSecurityEffectsProps) {
  // Generate binary characters once using useMemo
  const binaryChars = useMemo(() => {
    if (variant === "minimal") {
      return Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: (i * 0.4) % 5, // Deterministic delay based on index
        duration: 8 + (i % 4), // Deterministic duration
      }));
    }
    return [];
  }, [variant]);

  // Opacity based on intensity
  const opacityMap = {
    subtle: 0.03,
    medium: 0.06,
    strong: 0.10,
  };

  const baseOpacity = opacityMap[intensity];

  if (variant === "scan") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
          animate={{
            top: ["0%", "100%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
        />
        {/* Grid overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, ${baseOpacity}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, ${baseOpacity}) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    );
  }

  if (variant === "shield") {
    return (
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Shield pulse */}
        <motion.div
          className="h-[400px] w-[400px] rounded-full border-2 border-emerald-400/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-[300px] w-[300px] rounded-full border-2 border-indigo-400/10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    );
  }

  if (variant === "lock") {
    return (
      <div className="pointer-events-none absolute right-4 top-4">
        {/* Secure connection indicator */}
        <motion.div
          className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.svg
            className="h-3 w-3 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </motion.svg>
          <span className="text-[10px] font-medium text-emerald-300">Secure</span>
        </motion.div>
      </div>
    );
  }

  // Minimal variant - binary flow
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Binary characters flowing */}
      {binaryChars.map(({ id, delay, duration }) => (
        <motion.div
          key={id}
          className="absolute text-xs font-mono text-indigo-400/20"
          style={{
            left: `${(id * 8.33) % 100}%`,
            top: -20,
          }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, baseOpacity * 10, baseOpacity * 10, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "linear",
          }}
        >
          {id % 2 === 0 ? "1" : "0"}
        </motion.div>
      ))}
      
      {/* Subtle corner brackets */}
      <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-indigo-400/10" />
      <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-indigo-400/10" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-indigo-400/10" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-indigo-400/10" />
    </div>
  );
}
