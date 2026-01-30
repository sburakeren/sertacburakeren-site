"use client";

import { motion } from "framer-motion";
import { type } from "@/lib/typography";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

/**
 * SectionHeader - Signature section header with optional kicker and subtitle
 * Uses existing typography tokens and adds animated gradient divider accent
 */
export default function SectionHeader({ kicker, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {kicker && <div className={type.kicker}>{kicker}</div>}
      
      <h2 className={type.h2}>{title}</h2>
      
      {/* Signature accent: animated gradient bar with glow */}
      <motion.div
        className="relative w-24"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      >
        {/* Glow layer */}
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-indigo-400/70 via-emerald-300/50 to-transparent opacity-40" />
        {/* Solid bar */}
        <div className="relative h-0.5 bg-gradient-to-r from-indigo-400/70 via-emerald-300/40 to-transparent" />
      </motion.div>
      
      {subtitle && <p className={`${type.muted} max-w-2xl`}>{subtitle}</p>}
    </motion.div>
  );
}
