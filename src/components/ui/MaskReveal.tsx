"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { maskReveal, prefersReducedMotion, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MaskRevealProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  staggerWords?: boolean;
}

export function MaskReveal({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  staggerWords = false,
}: MaskRevealProps) {
  const reducedMotion = prefersReducedMotion();

  // If reduced motion, render without animation
  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  // For simple line reveal (no word stagger)
  if (!staggerWords) {
    return (
      <Component className={cn("overflow-hidden", className)}>
        <motion.span
          className="block"
          variants={maskReveal.item}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          transition={{ delay }}
        >
          {children}
        </motion.span>
      </Component>
    );
  }

  // For word-by-word stagger
  const words = String(children).split(" ");

  return (
    <Component className={className}>
      <motion.span
        className="inline-flex flex-wrap"
        variants={maskReveal.container}
        initial="initial"
        whileInView="animate"
        viewport={viewport}
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              variants={maskReveal.item}
              transition={{ delay: delay + i * 0.05 }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
