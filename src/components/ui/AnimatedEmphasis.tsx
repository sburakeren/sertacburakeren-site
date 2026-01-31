"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export function AnimatedEmphasis({
  children,
  tone = "indigo",
  className,
}: {
  children: React.ReactNode;
  tone?: "indigo" | "cyan" | "emerald" | "amber" | "rose";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const toneClass =
    tone === "cyan"
      ? "from-cyan-300 to-indigo-200"
      : tone === "emerald"
      ? "from-emerald-300 to-teal-200"
      : tone === "amber"
      ? "from-amber-300 to-yellow-200"
      : tone === "rose"
      ? "from-rose-400 to-pink-300"
      : "from-indigo-300 to-purple-200";

  const glowColor = 
    tone === "rose" ? "bg-rose-500/50" :
    tone === "cyan" ? "bg-cyan-500/50" :
    tone === "emerald" ? "bg-emerald-500/50" :
    tone === "amber" ? "bg-amber-500/50" :
    "bg-indigo-500/50";

  return (
    <motion.span
      className={clsx(
        "relative inline-block bg-gradient-to-r bg-clip-text text-transparent cursor-pointer",
        toneClass,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        reduce
          ? undefined
          : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
      }
      transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "linear" }}
      style={!reduce ? { backgroundSize: "200% 200%" } : undefined}
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.08,
              rotate: [-1, 1, -1, 0],
              transition: { 
                scale: { duration: 0.3 },
                rotate: { duration: 0.5, repeat: 2 }
              }
            }
      }
    >
      {children}
      
      {/* Alt çizgi - hover'da parlıyor */}
      <motion.span 
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-px
                   bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ 
          opacity: isHovered ? 1 : 0.3,
          scaleX: isHovered ? 1.15 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow efekti - hover'da görünüyor */}
      <motion.span
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 blur-xl",
          glowColor
        )}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  );
}
