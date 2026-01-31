"use client";

import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import CalloutCard from "@/components/ui/CalloutCard";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { CTABand } from "@/components/ui/CTABand";
import { CyberSecurityEffects } from "@/components/CyberSecurityEffects";
import { type } from "@/lib/typography";
import { CONTACT, PARTNERS } from "@/lib/constants";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NowPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
      
      {/* Cyber Security Effects - Shield for active status */}
      <CyberSecurityEffects variant="shield" intensity="subtle" />

      <div className="relative">
        <Navbar />

        {/* Hero */}
        <section className="relative mx-auto max-w-3xl px-6 pt-6 pb-3 md:pt-8 md:pb-4">
          {/* AI Glow - Now Header */}
          <AIGlow intensity="medium" />
          
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
            initial="initial"
            animate="animate"
            className="relative z-10"
          >
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="mb-2 mt-0 flex items-center gap-3"
            >
              <div className="relative flex items-center gap-2">
                {/* Pulsing green dot */}
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  Aktif
                </span>
              </div>
              <span className="text-xs text-zinc-500">•</span>
              <span className="text-xs text-zinc-500">Güncelleme: Ocak 2026</span>
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
              }}
            >
              <MaskReveal as="h1" className={type.h1}>
                Şu An Ne Yapıyorum
              </MaskReveal>
              <p className={`mt-2 ${type.body} text-zinc-300/90`}>
                Güncel odaklarım, denediklerim ve son eklenenler.
              </p>
            </motion.div>

            {/* Intro Card - Below title */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 } },
              }}
              className="mt-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden
                         before:absolute before:inset-0 before:opacity-40 before:bg-[radial-gradient(800px_circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(600px_circle_at_70%_80%,rgba(34,211,238,0.10),transparent_50%)] before:content-['']"
            >
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-xl bg-indigo-500/[0.12] border border-indigo-400/[0.20] flex items-center justify-center">
                      <svg className="h-5 w-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`${type.label} text-zinc-100`}>Hızlı Bakış</h3>
                    <p className={`mt-2 text-sm leading-relaxed text-zinc-300`}>
                      AI entegrasyonu, ölçeklenebilir backend sistemleri ve güvenlik odaklı çözümler üretiyorum. 
                      Prod-first yaklaşımla, haftalık iterasyonlar ve ölçülebilir sonuçlar — kurumsal disiplin, startup hızı.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Status Strip */}
        <section className="mx-auto max-w-3xl px-6 pb-10 mt-2">
          <motion.div
            className="grid gap-4 md:grid-cols-3"
            variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
            initial="initial"
            animate="animate"
          >
            {[
              {
                label: "Şu an",
                color: "indigo",
                content: "AI-entegre sistemler üzerinde çalışıyorum—öneri motorları ve veri pipeline'ları inşa ediyorum.",
              },
              {
                label: "Öğreniyorum",
                color: "emerald",
                content: "İleri seviye prompt mühendisliği ve LLM entegrasyon kalıplarını öğreniyorum.",
              },
              {
                label: "Son eklenen",
                color: "amber",
                content: "MitrasLawBlog (GNR Studio): aktif geliştirme, yayın akışı ve panel iyileştirmeleri.",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className={`rounded-2xl border border-${item.color}-500/[0.12] bg-${item.color}-500/[0.03] p-5 hover:border-${item.color}-500/[0.2] transition-all`}
              >
                <div className={`${type.kicker} text-${item.color}-200`}>{item.label}</div>
                <p className={`mt-3 text-sm leading-relaxed text-zinc-300`}>{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Çalışma Modu */}
        <section className="mx-auto max-w-3xl px-6 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            <CalloutCard 
              title="Derin Çalışma" 
              desc="Kesintisiz odak blokları ile karmaşık problemlere dalış. Sabah saatleri en üretken." 
              tone="indigo"
            />
            <CalloutCard 
              title="Dokümantasyon" 
              desc="Mimari kararları ve teknik seçimleri yazıya dökmek. Gelecek için yol haritası." 
              tone="emerald"
            />
            <CalloutCard 
              title="Geri Bildirim Döngüsü" 
              desc="Hızlı iterasyon, kullanıcı testleri ve metrik takibi. Ship, ölç, öğren, tekrarla." 
              tone="slate"
            />
          </div>
        </section>

        {/* Live Status Panel */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <h2 className={`${type.h2} mb-6`}>Canlı Durum Paneli</h2>

          <div className="space-y-4">
            {/* İnşa Ediyorum */}
            <div
              className={`group rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-300 ${
                hoveredItem === null || hoveredItem === "build"
                  ? "border-white/[0.08] translate-x-0 opacity-100"
                  : "border-white/[0.05] -translate-x-1 opacity-60"
              }`}
              onMouseEnter={() => setHoveredItem("build")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <h3 className={`${type.label} text-indigo-200 flex items-center gap-2`}>
                <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
                İnşa Ediyorum
              </h3>
              <ul className={`mt-4 space-y-3 ${type.body}`}>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                  <span>
                    Pratik uygulamalara odaklı AI-entegre sistemler—öneri motorları, veri
                    pipeline'ları ve ML-ready mimariler.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                  <span>
                    Karmaşıklık olmadan ölçeklenen modüler backend platformları—queue-bazlı iş
                    akışları, RBAC kalıpları ve otomatik raporlama.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                  <span>
                    Sürtüşmeyi azaltan ve ekip hızını artıran geliştirici araçları ve iç sistemler.
                  </span>
                </li>
              </ul>
            </div>

            {/* Öğreniyorum */}
            <div
              className={`group rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-300 ${
                hoveredItem === null || hoveredItem === "learn"
                  ? "border-white/[0.08] translate-x-0 opacity-100"
                  : "border-white/[0.05] -translate-x-1 opacity-60"
              }`}
              onMouseEnter={() => setHoveredItem("learn")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <h3 className={`${type.label} text-emerald-200 flex items-center gap-2`}>
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                Öğreniyorum
              </h3>
              <ul className={`mt-4 space-y-3 ${type.body}`}>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    İleri seviye prompt mühendisliği ve LLM entegrasyon kalıpları—basit API
                    çağrılarının ötesinde context-aware, çok adımlı AI iş akışları.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Dağıtık sistem kalıpları—event sourcing, CQRS ve ölçekte eventual consistency
                    yönetimi.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Performans optimizasyonu derinlemesine—profiling, caching stratejileri ve yüksek
                    trafikli uygulamalar için veritabanı sorgu optimizasyonu.
                  </span>
                </li>
              </ul>
            </div>

            {/* Ship Ediyorum */}
            <div
              className={`group rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-300 ${
                hoveredItem === null || hoveredItem === "ship"
                  ? "border-white/[0.08] translate-x-0 opacity-100"
                  : "border-white/[0.05] -translate-x-1 opacity-60"
              }`}
              onMouseEnter={() => setHoveredItem("ship")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <h3 className={`${type.label} text-amber-200 flex items-center gap-2`}>
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                Ship Ediyorum
              </h3>
              <ul className={`mt-4 space-y-3 ${type.body}`}>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    <a
                      href={PARTNERS.MITRAS_LAW_BLOG.WEBSITE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:text-amber-200 underline decoration-amber-500/30 hover:decoration-amber-300 transition-colors"
                    >
                      MitrasLawBlog
                    </a>
                    {" "}(GNR Studio bünyesinde): İçerik yönetim paneli, SEO iyileştirmeleri ve yayın akışı optimizasyonları.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    Mevcut projelerde haftalık iterasyonlar—ölçülebilir sonuçlara ve kullanıcı geri
                    bildirim döngülerine odaklanıyorum.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    Dokümantasyon ve bilgi paylaşımı—teknik kılavuzlar, mimari kararlar ve öğrenilen
                    dersler yazıyorum.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className={type.kicker}>PRENSİPLER</div>
          <h2 className={`mt-3 ${type.h2}`}>Çalışma Prensiplerim</h2>

          <div className={`mt-8 space-y-4 ${type.body}`}>
            <p>
              <strong className="text-zinc-200">Sürekli ship et.</strong> Küçük, sık release'ler
              büyük patlama deploy'larını geçer. Sıkı geri bildirim döngüleri öğrenmeyi hızlandırır.
            </p>

            <p>
              <strong className="text-zinc-200">Her şeyi ölç.</strong> Sezgi yönlendirir, metrikler
              karar verir. Önemli olanı takip et: performans, hatalar, kullanıcı davranışı, iş
              etkisi.
            </p>

            <p>
              <strong className="text-zinc-200">Değişim için kur.</strong> Gereksinimler
              evrilir. Modüler mimariler ve net sınırlar adaptasyonu yeniden yazmaktan daha ucuz
              yapar.
            </p>

            <p>
              <strong className="text-zinc-200">Sıkıcı kısımları otomatikleştir.</strong> İnsanlar
              tekrarlayan görevlerde kötüdür. Script'ler, CI/CD ve background job'lar hataları
              önler ve zaman kazandırır.
            </p>

            <p>
              <strong className="text-zinc-200">Güvenlik ilk günden.</strong> Sonradan eklenen
              güvenlik başarısız olur. Input validasyonu, RBAC, audit logları ve güvenli
              varsayılanlar baştan kurguluyorum.
            </p>

            <p>
              <strong className="text-zinc-200">İnsanlar için yaz.</strong> Kod iletişimdir. Net
              değişken isimleri, dokümante edilmiş kararlar ve okunabilir yapı zeki hilelerden daha
              önemlidir.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABand
          title="Projen Mi Var?"
          description="Üzerinde çalıştıklarım ihtiyaçlarınla uyuşuyorsa, konuşalım."
          primaryLabel="İletişime Geç"
          primaryHref={`mailto:${CONTACT.EMAIL}`}
          secondaryLabel="Projeler"
          secondaryHref="/projects"
          trustItems={["NDA-safe", "Prod-first", "Ölçeklenebilir"]}
        />

        <SiteFooter />
      </div>
    </div>
  );
}
