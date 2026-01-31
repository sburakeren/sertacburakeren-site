"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/projects/ProjectCard";
import { type } from "@/lib/typography";

export default function ProjectNotFound() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const fill = PROJECTS.filter((p) => !featuredSlugs.has(p.slug)).slice(0, 3 - featured.length);
  const picks = [...featured, ...fill].slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#070A12]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative">
        <Navbar />

        <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 overflow-hidden relative
                          before:absolute before:inset-0 before:opacity-30 before:bg-[radial-gradient(800px_circle_at_50%_20%,rgba(99,102,241,0.12),transparent_60%)] before:content-['']">
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Hazırlanıyor
              </div>

              <h1 className={`mt-6 ${type.h2}`}>Detaylı İçerik Yakında Yayınlanacak</h1>
              <p className={`mt-3 max-w-2xl ${type.body} text-zinc-300 leading-relaxed`}>
                Proje başarıyla tamamlandı ve aktif olarak kullanımda. Detaylı içerik dokümanı; 
                problem analizi, teknik yaklaşım, mimari kararlar ve ölçülebilir sonuçlarla birlikte 
                yakın zamanda bu sayfada yayınlanacak. Şimdilik diğer projelere göz atabilirsiniz.
              </p>

              {/* Info cards */}
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <motion.div 
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="mt-0.5 flex-shrink-0"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-zinc-200">Proje Tamamlandı</div>
                      <div className="mt-1 text-xs text-zinc-400">Dokümantasyon hazırlanıyor</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="mt-0.5 flex-shrink-0"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-zinc-200">Bilgi İçin</div>
                      <div className="mt-1 text-xs text-zinc-400">Detaylar talep üzerine paylaşılabilir</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex h-11 items-center justify-center rounded-2xl backdrop-blur-md bg-indigo-500/[0.14] border border-indigo-400/[0.22] text-indigo-50 px-5 text-sm font-semibold shadow-[0_12px_35px_rgba(99,102,241,0.18)] transition-all duration-300 hover:bg-indigo-500/[0.20] hover:border-indigo-300/[0.28] active:scale-[0.99] hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Tüm Projelere Dön
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex h-11 items-center justify-center rounded-2xl backdrop-blur-md bg-white/[0.06] border border-white/[0.10] text-zinc-100 px-5 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/[0.10] hover:border-white/[0.14] active:scale-[0.99] hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>

          {picks.length > 0 && (
            <section className="mt-14">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className={type.h3}>Öne çıkan projeler</h2>
                  <p className={`mt-2 ${type.muted}`}>
                    Problem → Yaklaşım → Sonuç formatında seçili projeler
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {picks.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
