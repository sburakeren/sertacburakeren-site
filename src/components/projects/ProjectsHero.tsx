"use client";

import { motion } from "framer-motion";
import { type } from "@/lib/typography";

export function ProjectsHero() {
  return (
    <motion.div
      variants={{ animate: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
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
          Problem → Yaklaşım → Sonuç
        </div>

        <h1 className={`relative z-10 max-w-3xl ${type.h1}`}>
          <span className="text-shimmer">Projeler</span> & Vaka Çalışmaları
        </h1>
        <p className={`relative z-10 mt-5 max-w-2xl ${type.lead}`}>
          AI-odaklı sistemler, ölçeklenebilir ürünler ve kurumsal çözümler. Her proje; problem, yaklaşım ve sonuç başlıklarıyla özetlenir.
        </p>
      </motion.div>

      <motion.p
        className={`relative z-10 mt-4 max-w-xl text-sm text-zinc-400`}
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 } },
        }}
      >
        💡 Filtre ipucu: Kategori veya teknoloji seçerek daraltabilirsin
      </motion.p>
    </motion.div>
  );
}
