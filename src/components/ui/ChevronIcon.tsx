"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChevronIconProps {
  direction?: "right" | "down" | "left" | "up";
  className?: string;
  animated?: boolean;
}

export function ChevronIcon({
  direction = "right",
  className = "",
  animated = true,
}: ChevronIconProps) {
  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
  };

  const svgContent = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (!animated) {
    return (
      <span
        className={cn("inline-block", className)}
        style={{ rotate: `${rotations[direction]}deg` }}
      >
        {svgContent}
      </span>
    );
  }

  return (
    <motion.span
      className={cn("inline-block", className)}
      style={{ rotate: `${rotations[direction]}deg` }}
      initial={{ x: 0 }}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {svgContent}
    </motion.span>
  );
}
