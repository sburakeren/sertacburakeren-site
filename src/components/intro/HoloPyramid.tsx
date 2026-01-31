"use client";

import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/motion";

export function HoloPyramid() {
  const reducedMotion = prefersReducedMotion();

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full opacity-30">
        <div className="scanline absolute inset-0" />
      </div>

      {/* Pyramid SVG */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={reducedMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          {/* Hologram gradient */}
          <linearGradient id="holoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8">
              <animate
                attributeName="stopColor"
                values="#60a5fa;#a78bfa;#60a5fa"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6">
              <animate
                attributeName="stopColor"
                values="#818cf8;#60a5fa;#818cf8"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8">
              <animate
                attributeName="stopColor"
                values="#a78bfa;#60a5fa;#a78bfa"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Pyramid faces (4 triangular faces) */}
        {/* Front face */}
        <motion.path
          d="M 100 40 L 60 140 L 100 120 Z"
          fill="none"
          stroke="url(#holoGrad)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Right face */}
        <motion.path
          d="M 100 40 L 140 140 L 100 120 Z"
          fill="none"
          stroke="url(#holoGrad)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        />

        {/* Left face */}
        <motion.path
          d="M 100 40 L 60 140 L 80 150 Z"
          fill="none"
          stroke="url(#holoGrad)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />

        {/* Back face */}
        <motion.path
          d="M 100 40 L 140 140 L 120 150 Z"
          fill="none"
          stroke="url(#holoGrad)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />

        {/* Base edges */}
        <motion.path
          d="M 60 140 L 140 140 L 120 150 L 80 150 Z"
          fill="none"
          stroke="url(#holoGrad)"
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>

      <style jsx>{`
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .scanline {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(96, 165, 250, 0.1) 50%,
            transparent 100%
          );
          height: 100%;
          animation: scanline 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
