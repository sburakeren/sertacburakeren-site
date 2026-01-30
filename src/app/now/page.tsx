"use client";

import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ui/ButtonLink";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import CalloutCard from "@/components/ui/CalloutCard";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { type } from "@/lib/typography";
import { CONTACT, PARTNERS } from "@/lib/constants";
import { useState } from "react";

export default function NowPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative">
        <Navbar />

        {/* Hero */}
        <section className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
          {/* AI Glow - Now Header */}
          <AIGlow intensity="medium" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
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
            </div>

            <MaskReveal as="h1" className={type.h1}>
              Şu An Ne Yapıyorum
            </MaskReveal>
            <p className={`mt-6 ${type.muted}`}>
              Güncel odak, iş ve düşüncelerimin canlı görüntüsü.
            </p>
          </div>
        </section>

        {/* Quick Status Strip */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">
              <div className={`${type.kicker} text-indigo-200`}>Şu an</div>
              <p className={`mt-3 text-sm leading-relaxed text-zinc-300`}>
                AI-entegre sistemler üzerinde çalışıyorum—öneri motorları ve veri pipeline'ları inşa ediyorum.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <div className={`${type.kicker} text-emerald-200`}>Öğreniyorum</div>
              <p className={`mt-3 text-sm leading-relaxed text-zinc-300`}>
                İleri seviye prompt mühendisliği ve LLM entegrasyon kalıplarını öğreniyorum.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
              <div className={`${type.kicker} text-amber-200`}>Son eklenen</div>
              <p className={`mt-3 text-sm leading-relaxed text-zinc-300`}>
                MitrasLawBlog (GNR Studio): aktif geliştirme, yayın akışı ve panel iyileştirmeleri.
              </p>
            </div>
          </div>
        </section>

        {/* Çalışma Modu */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
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
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <h2 className={`${type.h2} mb-8`}>Canlı Durum Paneli</h2>

          <div className="space-y-4">
            {/* İnşa Ediyorum */}
            <div
              className={`group rounded-2xl border bg-white/[0.02] p-6 transition-all duration-300 ${
                hoveredItem === null || hoveredItem === "build"
                  ? "border-indigo-500/20 translate-x-0 opacity-100"
                  : "border-white/5 -translate-x-1 opacity-60"
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
              className={`group rounded-2xl border bg-white/[0.02] p-6 transition-all duration-300 ${
                hoveredItem === null || hoveredItem === "learn"
                  ? "border-emerald-500/20 translate-x-0 opacity-100"
                  : "border-white/5 -translate-x-1 opacity-60"
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
              className={`group rounded-2xl border bg-white/[0.02] p-6 transition-all duration-300 ${
                hoveredItem === null || hoveredItem === "ship"
                  ? "border-amber-500/20 translate-x-0 opacity-100"
                  : "border-white/5 -translate-x-1 opacity-60"
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
        <section className="mx-auto max-w-3xl px-6 pb-20">
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
        <section className="border-t border-white/5 bg-[#070A12]/60">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h2 className={type.h2}>Projen Mi Var?</h2>
            <p className={`mt-3 ${type.body}`}>
              Üzerinde çalıştıklarım ihtiyaçlarınla uyuşuyorsa, konuşalım.
            </p>
            <ButtonLink
              href={`mailto:${CONTACT.EMAIL}`}
              variant="primary"
              size="md"
              className="mt-6"
            >
              İletişime Geç
            </ButtonLink>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
