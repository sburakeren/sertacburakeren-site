"use client";

import { motion } from "framer-motion";
import ButtonLink from "./ButtonLink";
import { type } from "@/lib/typography";
import { fadeUp } from "@/lib/motion";

interface CTABandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trustItems?: string[];
}

export function CTABand({
  title = "Projen Mi Var?",
  description = "2 haftada MVP / Güvenlik varsayılan / Ölçülebilir metrik",
  primaryLabel = "İletişime Geç",
  primaryHref = "#contact",
  secondaryLabel = "Vaka Çalışmalarını Gör",
  secondaryHref = "/projects",
  trustItems = ["NDA-safe", "Prod-first", "Clean Architecture"],
}: CTABandProps) {
  return (
    <motion.section
      className="relative border-t border-white/5 bg-[#070A12]/40 overflow-hidden"
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Glass Panel */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            {/* Left: Value Prop */}
            <div>
              <h2 className={`${type.h2} text-zinc-100`}>{title}</h2>
              <p className={`mt-3 ${type.body} text-zinc-300 max-w-xl`}>{description}</p>

              {/* Trust Row */}
              <div className="mt-6 flex flex-wrap gap-3">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTAs */}
            <div className="mt-6 grid w-full grid-cols-2 gap-3 sm:w-auto">
              <ButtonLink
                href={primaryHref}
                variant="glassPrimary"
                className="h-11 w-full justify-center"
              >
                {primaryLabel}
              </ButtonLink>

              <ButtonLink
                href={secondaryHref}
                variant="glass"
                className="h-11 w-full justify-center"
              >
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
