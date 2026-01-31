"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronIcon } from "./ChevronIcon";
import { cn } from "@/lib/utils";

interface ExploreRailProps {
  href: string;
  label?: string;
  className?: string;
}

export function ExploreRail({
  href,
  label = "Hikayeyi Oku",
  className = "",
}: ExploreRailProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]"
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Subtle gradient shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/[0.04] ring-1 ring-indigo-500/[0.08] transition-all group-hover:bg-indigo-500/[0.08] group-hover:ring-indigo-500/[0.12]">
              <svg
                className="h-5 w-5 text-indigo-300/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                {label}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-indigo-300/80 transition-colors group-hover:text-indigo-200">
            <span className="hidden sm:inline">Keşfet</span>
            <ChevronIcon className="text-indigo-400/70" />
          </div>
        </div>

        {/* Bottom accent line - more subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/[0.08] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </motion.div>
    </Link>
  );
}
