"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { AnimatedEmphasis } from "@/components/ui/AnimatedEmphasis";
import { type } from "@/lib/typography";
import { prefersReducedMotion } from "@/lib/motion";

export function HomeHero() {
  const reducedMotion = prefersReducedMotion();

  return (
    <motion.div
      variants={{ animate: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={{
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
        }}
      >
        {/* Kicker */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-medium text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Full-Stack • Security • AI Integration
        </div>

        <h1 className={`max-w-3xl ${type.h1}`}>
          <AnimatedEmphasis tone="indigo">AI entegre</AnimatedEmphasis> ürünleri,{" "}
          <AnimatedEmphasis tone="rose">güvenlik</AnimatedEmphasis> varsayılanıyla, ölçeklenebilir sistemlere dönüştürüyorum.
        </h1>
      </motion.div>

      <motion.div
        className="mt-8 flex flex-wrap gap-3"
        variants={{
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 } },
        }}
      >
        <motion.div
          whileHover={reducedMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
          whileTap={reducedMotion ? {} : { scale: 0.98 }}
        >
          <ButtonLink href="#projects" variant="primary" size="sm">
            Projeleri Gör
          </ButtonLink>
        </motion.div>
        <motion.div
          whileHover={reducedMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
          whileTap={reducedMotion ? {} : { scale: 0.98 }}
        >
          <ButtonLink href="#contact" variant="secondary" size="sm">
            İletişime Geç
          </ButtonLink>
        </motion.div>
        <motion.div
          whileHover={reducedMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
          whileTap={reducedMotion ? {} : { scale: 0.98 }}
        >
          <Link
            href="/lab"
            className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-lg border border-indigo-500/[0.12] bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.02] px-4 py-2 text-sm font-medium text-indigo-100 transition-all duration-300 hover:border-indigo-400/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.1)] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Lab: Kurumsal Demo
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronIcon className="text-indigo-300" />
              </span>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
