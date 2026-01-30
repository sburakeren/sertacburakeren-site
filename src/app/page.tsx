"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PromptTyper from "@/components/PromptTyper";
import { MotionDiv } from "@/components/motion";
import GlowCard from "@/components/GlowCard";
import CursorGlow from "@/components/CursorGlow";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import ButtonLink from "@/components/ui/ButtonLink";
import AIGlow from "@/components/ui/AIGlow";
import { PROJECTS } from "@/data/projects";
import { COLLABORATIONS } from "@/data/collabs";
import { type } from "@/lib/typography";
import { fadeUp, stagger } from "@/lib/motion";
import { Reveal } from "@/components/motion/Reveal";

export default function Home() {
  const projects = useMemo(() => PROJECTS, []);

  return (
    <main className="relative z-0 min-h-screen flex flex-col">
      <Navbar variant="home" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          {/* AI Glow - Hero */}
          <AIGlow intensity="strong" />
          
          <MotionDiv>
              <h1 className={`max-w-3xl ${type.h1}`}>
                AI entegre, <span className="text-indigo-300">güvenli</span> ve ölçeklenebilir ürünler geliştiriyorum.
              </h1>
              <p className={`mt-6 max-w-2xl ${type.lead}`}>
                Kurumsal süreçleri otomasyona çevirir, ölçülebilir çıktılar üretir ve canlıya çıkmaya hazır sistemler tasarlarım.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="#projects" variant="primary" size="md">
                  Projeleri Gör
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="md">
                  İletişime Geç
                </ButtonLink>
              </div>

              <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
                {[
                  { k: "AI / Veri", v: "Model + ürün entegrasyonu" },
                  { k: "Security", v: "Sertleştirme, auth, logging" },
                  { k: "Backend", v: "Laravel / .NET / ölçek" },
                ].map((c) => (
                  <GlowCard key={c.k} className="group">
                    <div className="text-xs font-medium text-zinc-500">{c.k}</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight text-zinc-100">{c.v}</div>
                  </GlowCard>
                ))}
              </div>

            <PromptTyper />
          </MotionDiv>
        </section>

        <div className="relative z-10 mx-auto my-16 md:my-24 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.section
          id="about"
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className={type.kicker}>About</div>
                <h2 className={`mt-2 ${type.h2}`}>
                  Hakkımda
                </h2>
                <p className={`mt-2 max-w-2xl ${type.body}`}>
                  IT yöneticiliği, ürün geliştirme ve güvenlik deneyimiyle kurumsal süreçleri
                  ölçülebilir hale getirip otomasyona çeviriyorum. Ürün odağı sürekli, sonuç odaklı yaklaşım her zaman.
                </p>
              </div>

              <ButtonLink
                href="/about"
                variant="secondary"
                size="sm"
                className="hidden md:inline-flex"
              >
                Daha fazlası →
              </ButtonLink>
            </div>
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
                      izlenebilirlik, performans, bakım maliyeti. IT liderliği deneyimiyle hem
                      teknik hem stratejik kararlar alırım.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["AI/Otomasyon", "Backend", "Güvenlik", "Ürün"].map((x) => (
                      <Badge key={x} variant="slate">
                        {x}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-zinc-400">
                    NDA olan işlerde ekran görüntüsü yerine etki + rol + yaklaşım paylaşırım.
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

          <div className="mt-8 md:hidden">
            <ButtonLink href="/about" variant="secondary" size="sm">
              Daha fazlası →
            </ButtonLink>
          </div>
        </motion.section>

        <div className="relative z-10 mx-auto my-16 md:my-24 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.section
          id="work"
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Reveal>
            <h2 className={type.h3}>Kurumsal Çalışmalar</h2>
            <p className={`mt-2 max-w-2xl ${type.muted}`}>
              Kurumsal projelerde AI/otomasyon odaklı teslimler yaptım. NDA nedeniyle detay
              paylaşamadığım işlerde etki + rol + yaklaşım üzerinden konuşurum.
            </p>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-6 md:gap-8 md:grid-cols-3"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Sistem Modernizasyonu",
                desc: "Legacy sistemlerin modern mimariye geçişi. Monolitik yapıları mikroservis tabanlı, ölçeklenebilir altyapıya dönüştürdüm. Modüler tasarım ve API-first yaklaşımla bakım maliyetini düşürüp geliştirme hızını artırdım.",
                role: "Lead / Full-stack",
                focus: "Mimari",
              },
              {
                title: "Otomasyon & İş Akışı",
                desc: "Tekrarlayan manuel süreçleri otomatik iş akışlarına çevirdim. Queue-bazlı task yönetimi, background job'lar ve akıllı zamanlama ile operasyonel verimliliği artırdım. Ekipler artık stratejik işlere odaklanabiliyor.",
                role: "Backend / Otomasyon",
                focus: "Süreç",
              },
              {
                title: "AI Entegrasyonu & Arama",
                desc: "Akıllı öneri motorları ve semantik arama sistemleri kurdum. ML modellerini ürün akışına entegre ederek kullanıcı deneyimini kişiselleştirdim. Veri pipeline'ları ve model deployment süreçlerini optimize ettim.",
                role: "AI Integration",
                focus: "ML Ürün",
              },
            ].map((x) => (
              <motion.div key={x.title} variants={fadeUp}>
                <SpotlightCard>
                  <div className="text-sm font-semibold tracking-tight text-zinc-100">{x.title}</div>
                  <div className="mt-2 text-sm text-zinc-400 leading-relaxed">{x.desc}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="slate">Rol: {x.role}</Badge>
                    <Badge variant="indigo">Odak: {x.focus}</Badge>
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
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Reveal>
            <h2 className={type.h3}>İşbirlikleri</h2>
            <p className={`mt-2 max-w-2xl ${type.muted}`}>
              Bazı projelerde NDA nedeniyle isim paylaşamam. Rol, etki ve çıktı üzerinden konuşurum.
            </p>
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
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* AI Glow - Projects */}
          <AIGlow intensity="soft" />
          
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className={type.h3}>Seçili Projeler</h2>
                <p className={`mt-2 max-w-2xl ${type.muted}`}>
                  Problem, yaklaşım, ölçülebilir etki.
                </p>
              </div>
            </div>
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
                  href={`/projects/${p.slug}`}
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

                        <div className="mt-auto pt-5 text-sm font-medium text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                          Case study'yi aç →
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
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32 scroll-mt-20"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* AI Glow - Contact */}
          <AIGlow intensity="soft" />
          
          <Reveal>
            <div className="space-y-2 text-center">
              <h3 className={type.h3}>İletişim</h3>
              <p className={`mx-auto max-w-xl ${type.muted}`}>
                Kısa özet gönder — net dönüş.
              </p>
            </div>
          </Reveal>

          <div className="mt-8">
            <ContactForm />
          </div>
        </motion.section>

        <footer className="relative z-10 border-t border-white/5 bg-[#070A12]/60 px-6 py-12 md:py-16 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center text-sm text-zinc-400 md:text-left">
              <div className="font-medium text-zinc-200">© 2026 Sertaç Burak Eren</div>
              <div className="mt-1">AI-first builder</div>
            </div>
            <div className="flex gap-4 text-sm">
              <a
                className="text-zinc-400 hover:text-white"
                href="https://github.com/sertacburakeren"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-zinc-400 hover:text-white"
                href="https://linkedin.com/in/sertacburakeren"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="text-zinc-400 hover:text-white"
                href="mailto:sertacburakeren@stu.topkapi.edu.tr"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
    </main>
  );
}
