"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import GlowCard from "@/components/GlowCard";
import CursorGlow from "@/components/CursorGlow";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { type } from "@/lib/typography";
import { prefersReducedMotion } from "@/lib/motion";
import { projectHref } from "@/lib/projects/paths";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = prefersReducedMotion();

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt (disabled for reduced motion)
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], reducedMotion ? [0, 0] : [3, -3]),
    { stiffness: 300, damping: 30 }
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], reducedMotion ? [0, 0] : [-3, 3]),
    { stiffness: 300, damping: 30 }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || reducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      ref={ref}
      href={projectHref(project)}
      className="group/card flex h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered && !reducedMotion ? -2 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <GlowCard className="w-full transition-shadow duration-300 group-hover/card:shadow-xl group-hover/card:shadow-white/5">
          <CursorGlow>
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className={`${type.h3} line-clamp-1`}>
                    {project.title}
                  </h3>
                  {project.year && <div className={`mt-1 ${type.muted}`}>{project.year}</div>}
                </div>
                {project.featured && (
                  <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-zinc-100">
                    Öne Çıkan
                  </span>
                )}
              </div>

              {/* Body - flexible space */}
              <div className="flex-1 pt-3">
                {/* Subtitle with line clamp */}
                <p className={`${type.body} line-clamp-3`}>
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer - fixed at bottom */}
              <div className="mt-auto space-y-4 pt-6">
                {/* CTA */}
                <motion.div
                  className={`${type.label} flex items-center gap-2 text-zinc-100`}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -4,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  Detayları Gör
                  <ChevronIcon className="text-zinc-400" animated={false} />
                </motion.div>
              </div>
            </div>
          </CursorGlow>
        </GlowCard>
      </motion.div>
    </Link>
  );
}
