"use client";

import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SectionHeader from "@/components/ui/SectionHeader";
import CalloutCard from "@/components/ui/CalloutCard";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { AnimatedEmphasis } from "@/components/ui/AnimatedEmphasis";
import { CyberSecurityEffects } from "@/components/CyberSecurityEffects";
import { type } from "@/lib/typography";
import { PARTNERS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
      
      {/* Cyber Security Effects */}
      <CyberSecurityEffects variant="minimal" intensity="subtle" />

      <div className="relative">
        <Navbar />

        {/* Hero */}
        <section className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
          {/* AI Glow - About Header */}
          <AIGlow intensity="medium" />
          
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
              {/* Kicker badges */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-medium text-indigo-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  RBAC
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Audit Logging
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs font-medium text-amber-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Prod-first
                </span>
              </div>

              <h1 className={`relative z-10 max-w-3xl ${type.h1}`}>
                Ürünleri <span className="text-shimmer">temiz mimariyle</span> kurar,{" "}
                <AnimatedEmphasis>güvenliği</AnimatedEmphasis>{" "}
                ilk günden, ölçeği tasarımla çözerim.
              </h1>
              <p className={`relative z-10 mt-4 max-w-2xl ${type.body} text-zinc-300/90 leading-relaxed`}>
                Karmaşayı sadeleştirir, sürdürülebilir sistemlerle ekibin hızını kalıcı artırırım.
              </p>
            </motion.div>
          
          {/* Signature Strip */}
          <motion.div
            className="relative z-10 mt-10"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 } },
            }}
          >
            <CalloutCard title="İmza" desc="Temel prensiplerin kısa özeti:" tone="slate">
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Güvenlik varsayılan.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Netlik: okunur, sürdürülebilir kod.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Ship odaklı iterasyon.</span>
                </li>
              </ul>
            </CalloutCard>
            
            {/* In-page Navigation */}
            <nav className="mt-8 flex flex-wrap gap-4 text-sm" aria-label="Sayfa içi navigasyon">
              <a 
                href="#odak" 
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:-translate-y-1"
              >
                Odak
                <ChevronIcon className="text-zinc-400 group-hover:text-white" />
              </a>
              <a 
                href="#prensip" 
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:-translate-y-1"
              >
                Prensipler
                <ChevronIcon className="text-zinc-400 group-hover:text-white" />
              </a>
              <a 
                href="#timeline" 
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:-translate-y-1"
              >
                Yakın Dönem
                <ChevronIcon className="text-zinc-400 group-hover:text-white" />
              </a>
            </nav>
          </motion.div>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="relative mx-auto max-w-4xl px-6 pb-16">
          <div className="relative z-10">
            <SectionHeader
              kicker="Yaklaşım"
              title="Hikaye"
              lead="Küçük problemlerden büyük sistemlere: otomasyon, güvenlik ve ölçek."
              showDivider={true}
            />
          </div>

          <div className="relative z-10 mt-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 md:p-8">
            <p className={`${type.body} leading-relaxed`}>
              Serüvenim küçük problemleri çözerek başladı: manuel süreçleri otomasyona çevirmek, dağınık verileri tek merkezde toplamak, hata riskini azaltmak. Zamanla daha büyük sistemlere evrildi—güvenlik katmanlarını ilk günden düşünmeyi, backend mimarilerini ölçeklenebilir kurmayı ve süreçleri ölçülebilir hale getirmeyi öğrendim. Teknik deneyimimi iş hedefleriyle hizalayarak hem teknik hem stratejik kararlar alıyor, ürün odağını hiç kaybetmeden ship ediyorum. Güvenlik, netlik ve sürdürülebilirlik benim için varsayılan.
            </p>
          </div>
        </section>

        {/* Focus Areas */}
        <section id="odak" className="relative mx-auto max-w-5xl px-6 pb-16">
          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-x-0 -top-10 h-64 rounded-[32px]
                          bg-gradient-to-r from-indigo-500/[0.06] via-purple-500/[0.05] to-cyan-500/[0.04]
                          blur-3xl" />

          <div className="relative">
            <SectionHeader
              kicker="Teknik"
              title="Odak Alanlarım"
              lead="Ürün + sistem + güvenlik ekseninde."
              showDivider={true}
            />
          </div>

          <motion.div
            className="relative z-10 mt-8 space-y-8"
            variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "AI / Veri",
                color: "indigo",
                content:
                  "AI modellerini ürünlere entegre eder, içgörü için veri pipeline'ları kurar ve ML-ready mimariler tasarlarım. Gerçek değer üreten pratik uygulamalara odaklanırım—hype yok, sadece çalışan sistemler.",
              },
              {
                title: "Güvenlik",
                color: "emerald",
                content:
                  "RBAC, audit izi, input validasyonu ve güvenli defaults baştan kurguluyorum. Uyumluluk gereksinimlerini karşılayan, bakılabilir sistemler kurarım. Önleme, tepkiden önce gelir.",
              },
              {
                title: "Backend / Ölçek",
                color: "amber",
                content:
                  "Laravel, .NET ve modern backend stack'leri. Kırılmadan ölçeklenen modüler mimariler. Background job'lar, caching stratejileri ve büyümeyi destekleyen veritabanı tasarımı. Performans önemli, ama okunabilirlik de öyle.",
              },
              {
                title: "Ürün Düşüncesi",
                color: "slate",
                content:
                  "Kullanıcı çıktılarıyla yönlenen teknik kararlar. Gerçek problemleri çözen özellikler geliştiririm, kutu işaretlemek değil. Geri bildirimlere göre iterasyon yapar, etkiyi ölçer ve sürekli ship ederim.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className={`group/card rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 transition-all duration-300 hover:border-${item.color}-500/20 hover:bg-white/[0.025] hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:translate-x-1`}
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <motion.div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <h3 className={`${type.h3} text-${item.color}-300`}>{item.title}</h3>
                <p className={`mt-3 ${type.body}`}>{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Values */}
        <section id="prensip" className="relative mx-auto max-w-4xl px-6 pb-16">
          <div className="relative z-10">
            <SectionHeader
              kicker="İlkeler"
              title="Önemsediğim Şeyler"
              showDivider={true}
            />
          </div>

          <div className="relative z-10 mt-8 space-y-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 md:p-8">
            <div className="relative z-10">
              <h3 className={type.label}>Güvenilirlik</h3>
              <p className={`mt-2 ${type.body}`}>
                Sistemler tutarlı çalışmalı. Hata yönetimi, loglama ve test temelin kendisi.
              </p>
            </div>

            <div className="relative z-10">
              <h3 className={type.label}>Netlik</h3>
              <p className={`mt-2 ${type.body}`}>
                Kod yazıldığından çok okunur. Net isimlendirme, modüler yapı ve dokümantasyon.
              </p>
            </div>

            <div className="relative z-10">
              <h3 className={type.label}>Ölçülebilir Sonuç</h3>
              <p className={`mt-2 ${type.body}`}>
                Metrikler kararları yönlendirir. Ölçemiyorsan, iyileştiremezsin.
              </p>
            </div>

            <div className="relative z-10">
              <h3 className={type.label}>İleri Görüş</h3>
              <p className={`mt-2 ${type.body}`}>
                Yarın için kur, bugün ship et. Genişletilebilir mimariler ve otomasyon-first iş akışları.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="relative mx-auto max-w-4xl px-6 pb-20">
          <div className="relative z-10">
            <SectionHeader
              kicker="Zaman Çizgisi"
              title="Kısa Kronoloji"
              showDivider={true}
            />
          </div>

          <div className="relative z-10 mt-8 space-y-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 md:p-8">
            {/* Animated border line */}
            <div className="absolute left-6 md:left-8 top-6 md:top-8 bottom-6 md:bottom-8 w-px overflow-hidden">
              <div className="h-full w-full bg-gradient-to-b from-transparent via-white/[0.10] to-transparent" />
            </div>
            
            <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-emerald-500 before:ring-4 before:ring-white/[0.12] hover:before:ring-white/[0.20] before:transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300 border border-white/[0.12]">
                2022
              </div>
              <h3 className={`mt-3 ${type.label}`}>
                İstanbul Topkapı Üniversitesi, Yazılım Mühendisliği (Öğrenci)
              </h3>
            </div>

            <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-amber-500 before:ring-4 before:ring-white/[0.12] hover:before:ring-white/[0.20] before:transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300 border border-white/[0.12]">
                2023
              </div>
              <h3 className={`mt-3 ${type.label}`}>Gelişim & Araştırma Süreçleri</h3>
            </div>

            <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-white/[0.12] hover:before:ring-white/[0.20] before:transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300 border border-white/[0.12]">
                2025
              </div>
              <h3 className={`mt-3 ${type.label}`}>GNR Studio Ortaklığı</h3>
            </div>

            <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-indigo-500 before:ring-4 before:ring-white/[0.12] hover:before:ring-white/[0.20] before:transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300 border border-white/[0.12]">
                2025
              </div>
              <h3 className={`mt-3 ${type.label}`}>IT Liderliği — Operasyon & Otomasyon</h3>
            </div>
          </div>
        </section>

        {/* Partners / Studio */}
        <section className="relative mx-auto max-w-4xl px-6 pb-16">
          <div className="relative z-10">
            <SectionHeader
              kicker="İşbirliği"
              title="Ortaklık / Stüdyo"
              showDivider={true}
            />
          </div>

          <div className="relative z-10 mt-8 space-y-6">
            {/* GNR Studio */}
            <div className="group/card rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.025] hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className={`${type.h3} text-indigo-300`}>{PARTNERS.GNR_STUDIO.NAME}</h3>
                  <p className={`mt-3 text-sm leading-relaxed text-zinc-300`}>
                    {PARTNERS.GNR_STUDIO.BIO_TR}
                  </p>
                  <p className={`mt-2 text-xs leading-relaxed text-zinc-500 italic`}>
                    {PARTNERS.GNR_STUDIO.BIO_EN}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={PARTNERS.GNR_STUDIO.WEBSITE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-zinc-100 transition-colors group"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      gnrstudio.com
                      <ChevronIcon className="text-indigo-300" />
                    </a>
                    <a
                      href={`mailto:${PARTNERS.GNR_STUDIO.EMAIL}`}
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-zinc-100 transition-colors group"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      contact@gnrstudio.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MitrasLawBlog */}
            <div className="group/card rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.025] hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className={`${type.h3} text-emerald-300`}>{PARTNERS.MITRAS_LAW_BLOG.NAME}</h3>
                  <p className={`mt-3 text-sm leading-relaxed text-zinc-300`}>
                    MitrasLawBlog — GNR Studio bünyesinde geliştirilen, içerik/SEO ve yönetim paneli odaklı yayın platformu. Hukuk içeriğini{" "}
                    <AnimatedEmphasis tone="cyan">modern</AnimatedEmphasis>, erişilebilir ve sürdürülebilir bir yapıda sunmayı hedefler.
                  </p>
                  <div className="mt-4">
                    <a
                      href={PARTNERS.MITRAS_LAW_BLOG.WEBSITE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-zinc-100 transition-colors group"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      mitraslawblog.com
                      <ChevronIcon className="text-emerald-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>

      <ScrollToTop />
    </div>
  );
}
