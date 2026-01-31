"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PromptTyper from "@/components/PromptTyper";
import GlowCard from "@/components/GlowCard";
import CursorGlow from "@/components/CursorGlow";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { ExploreRail } from "@/components/ui/ExploreRail";
import SectionHeader from "@/components/ui/SectionHeader";
import { CyberSecurityEffects } from "@/components/CyberSecurityEffects";
import { PROJECTS } from "@/data/projects";
import { COLLABORATIONS } from "@/data/collabs";
import { CONTACT, PARTNERS } from "@/lib/constants";
import { type } from "@/lib/typography";
import { fadeUp, stagger } from "@/lib/motion";
import { projectHref } from "@/lib/projects/paths";
import { Reveal } from "@/components/motion/Reveal";
import { HomeHero } from "@/components/home/HomeHero";

export default function Home() {
  const projects = useMemo(() => {
    // Only show selected projects on home: KesifEndeks, AnkaraLifePortal, KasaTakip
    const selectedSlugs = ['kesifendeks', 'ankaralifeportal', 'kasatakip'];
    return PROJECTS.filter(p => selectedSlugs.includes(p.slug));
  }, []);

  return (
    <main className="relative z-0 min-h-screen flex flex-col">
      {/* Cyber Security Effects - Lock indicator for home */}
      <CyberSecurityEffects variant="lock" intensity="subtle" />
      
      <Navbar variant="home" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          {/* AI Glow - Hero */}
          <AIGlow intensity="strong" />
          
          <HomeHero />

          <motion.div
            className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3"
            variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
            initial="initial"
            animate="animate"
          >
            {[
              { k: "AI / Veri", v: "Model + ürün entegrasyonu" },
              { k: "Security", v: "Sertleştirme, auth, logging" },
              { k: "Backend", v: "Laravel / .NET / ölçek" },
            ].map((c) => (
              <motion.div
                key={c.k}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <GlowCard className="group relative overflow-hidden">
                  {/* Border sweep on load */}
                  <motion.div
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 } }}
                  />
                  <div className="text-xs font-medium text-zinc-500">{c.k}</div>
                  <div className="mt-1 text-sm font-semibold tracking-tight text-zinc-100">{c.v}</div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          <PromptTyper />
        </section>

        <div className="relative z-10 mx-auto my-16 md:my-24 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.section
          id="about"
          className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-12 md:pb-16 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Reveal>
            <SectionHeader
              kicker="Odak"
              title="Hakkımda"
              lead="Ürün, sistem ve güvenlik ekseninde; ölçülebilir, sürdürülebilir çözümler."
              showDivider={true}
            />
          </Reveal>

          <motion.div
            className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp}>
              <GlowCard className="group">
                <div className="space-y-6">
                  <div>
                    <div className={type.label}>
                      Ne Yapıyorum?
                    </div>
                    <p className={`mt-2 ${type.body}`}>
                      Backend, AI entegrasyonu ve güvenlik katmanını birlikte düşünerek ship
                      edilebilir ürünler çıkarıyorum. Kod kadar süreç de önemli: log,
                      izlenebilirlik, performans, bakım maliyeti. Teknik kararları iş hedefleriyle
                      hizalayarak stratejik çözümler üretirim.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["AI/Otomasyon", "Backend", "Güvenlik", "Ürün"].map((x) => (
                      <Badge key={x} variant="slate">
                        {x}
                      </Badge>
                    ))}
                  </div>

                </div>
              </GlowCard>
            </motion.div>

            <motion.div className="grid gap-6 md:gap-8" variants={fadeUp}>
              <GlowCard className="group">
                <div className={type.label}>Değerler</div>
                <ul className={`mt-4 space-y-3 ${type.body}`}>
                  {[
                    "Güvenilirlik: Sistemler tutarlı çalışmalı, hata yönetimi temel.",
                    "Netlik: Karmaşığı sadeleştiririm, karar verdiririm.",
                    "Ölçülebilir Sonuç: Metrik yoksa iyileştirme yok.",
                    "Güvenlik İlk Günden: Input validasyonu, RBAC, audit log baştan kurguluyorum.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/70" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>

              <GlowCard className="group">
                <div className={type.label}>Hızlı özet</div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    { k: "Odak", v: "Ürün + Sistem" },
                    { k: "Tarz", v: "Temiz Mimari" },
                    { k: "Çıktı", v: "Ship & Iterate" },
                  ].map((c) => (
                    <div key={c.k} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 transition-colors hover:bg-white/[0.07]">
                      <div className="text-xs font-medium text-zinc-500">{c.k}</div>
                      <div className="mt-1 text-sm font-semibold tracking-tight text-zinc-100">{c.v}</div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ExploreRail href="/about" />
          </motion.div>
        </motion.section>

        <div className="relative z-10 mx-auto my-16 md:my-24 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.section
          id="work"
          className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-12 md:pb-16 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Reveal>
            <SectionHeader
              kicker="Portföy"
              title="Kurumsal Çalışmalar"
              titleClassName={type.h3}
              lead="Öne çıkan işler: rolüm, yaklaşımım ve sonuç odaklı çıktılar. Bazı işlerde NDA nedeniyle isim yerine kapsam ve çıktıyı paylaşırım."
              showDivider={true}
            />
          </Reveal>

          <motion.div
            className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Finans",
                desc: "Otomasyon + raporlama + izlenebilirlik odaklı teslimler.",
                focus: "Süreç & Veri",
              },
              {
                title: "Hukuk",
                desc: "İçerik yönetimi + yönlendirme akışları + bakım disiplini.",
                focus: "Panel & İçerik",
              },
              {
                title: "Medya",
                desc: "Yayın akışı, panel mantığı, operasyonel düzen.",
                focus: "Yönetim & Akış",
              },
              {
                title: "İç Sistem",
                desc: "RBAC, audit izi, modüler ekranlar, sürdürülebilir bakım.",
                focus: "Kurumsal Yazılım",
              },
            ].map((x) => (
              <motion.div key={x.title} variants={fadeUp}>
                <SpotlightCard>
                  <div className="text-sm font-semibold tracking-tight text-zinc-100">{x.title}</div>
                  <div className="mt-2 text-sm text-zinc-400 leading-relaxed">{x.desc}</div>
                  <div className="mt-4">
                    <Badge variant="indigo" className="text-xs">{x.focus}</Badge>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <div className="relative z-10 mx-auto my-16 md:my-24 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.section
          id="collaborations"
          className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-12 md:pb-16 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Reveal>
            <SectionHeader
              kicker="Ortaklık"
              title="İşbirlikleri"
              titleClassName={type.h3}
              lead="Üretim süreçlerinde birlikte çalıştığım ekipler ve üretim ortaklıkları."
              showDivider={true}
            />
          </Reveal>

          <motion.div
            className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {COLLABORATIONS.map((collab) => (
              <motion.div key={collab.label} variants={fadeUp}>
                <GlowCard className="group">
                  <CursorGlow>
                    <div className="text-sm font-semibold tracking-tight text-zinc-100">{collab.label}</div>
                    <div className="mt-1 text-xs text-zinc-500">{collab.domain}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {collab.focus.map((f) => (
                        <Badge key={f} variant="indigo" className="text-[11px]">
                          {f}
                        </Badge>
                      ))}
                    </div>
                    {collab.note && (
                      <div className="mt-3 text-xs text-zinc-500 leading-relaxed">{collab.note}</div>
                    )}
                  </CursorGlow>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <div className="relative z-10 mx-auto my-16 md:my-24 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.section
          id="projects"
          className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-12 md:pb-16 lg:pb-20 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* AI Glow - Projects */}
          <AIGlow intensity="soft" />
          
          <Reveal>
            <SectionHeader
              kicker="Öne Çıkanlar"
              title="Seçili Projeler"
              titleClassName={type.h3}
              lead="Problem → Yaklaşım → Sonuç formatında öne çıkan çalışmalar."
              showDivider={true}
            />
          </Reveal>

          <motion.div
            className="mt-8 grid gap-6 md:gap-8 md:grid-cols-3"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <Link
                  href={projectHref(p)}
                  className="group block transition-transform duration-300 hover:-translate-y-1"
                >
                  <GlowCard className="h-full transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/10">
                    <CursorGlow>
                      <div className="flex h-full flex-col">
                        <div className="text-base font-semibold tracking-tight text-zinc-100">{p.title}</div>
                        <div className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2">{p.subtitle}</div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.tags.slice(0, 4).map((t) => (
                            <Badge key={t} variant="slate" className="text-[11px]">
                              {t}
                            </Badge>
                          ))}
                          {p.tags.length > 4 && (
                            <Badge variant="slate" className="text-[11px] text-zinc-500">
                              +{p.tags.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="mt-auto pt-5 flex items-center gap-2 text-sm font-medium text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                          Detayları Gör
                          <ChevronIcon className="text-indigo-400" />
                        </div>
                      </div>
                    </CursorGlow>
                  </GlowCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <div className="relative z-10 mx-auto my-16 md:my-24 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.section
          id="contact"
          className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-16 md:pb-20 lg:pb-24 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* AI Glow - Contact */}
          <AIGlow intensity="soft" />
          
          <Reveal>
            <SectionHeader
              kicker="Başlangıç"
              title="İletişim"
              titleClassName={type.h3}
              lead="Proje, danışmanlık veya iş birliği fırsatları için iletişime geçin."
              align="center"
              showDivider={true}
            />
          </Reveal>

          <div className="mt-8">
            <ContactForm />
          </div>
        </motion.section>

        <footer className="relative z-10 border-t border-white/5 bg-[#070A12]/60 px-6 py-12 md:py-16 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl text-center">
            <div className="text-sm text-zinc-400">
              <div className="font-medium text-zinc-200">© 2026 Sertaç Burak Eren — Tüm hakları saklıdır.</div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
              <a
                className="group relative text-zinc-400 hover:text-white transition-colors"
                href={`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT.WHATSAPP_DEFAULT_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                className="group relative text-zinc-400 hover:text-white transition-colors"
                href={`mailto:${CONTACT.EMAIL}`}
              >
                Email
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                className="group relative text-zinc-400 hover:text-white transition-colors"
                href={PARTNERS.GNR_STUDIO.WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                GNR Studio
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                className="group relative text-zinc-400 hover:text-white transition-colors"
                href={PARTNERS.MITRAS_LAW_BLOG.WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                MitrasLawBlog
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                className="group relative text-zinc-400 hover:text-white transition-colors"
                href="https://instagram.com/s.burakeren"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </footer>
    </main>
  );
}
