import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ui/ButtonLink";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SectionHeader from "@/components/ui/SectionHeader";
import CalloutCard from "@/components/ui/CalloutCard";
import { type } from "@/lib/typography";
import { CONTACT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Güvenilir sistemler, ölçülebilir sonuçlar ve ileri görüşlü çözümler üreten AI odaklı yazılım geliştiricisi. AI entegrasyonu, güvenlik odaklı mimari ve ölçeklenebilir backend sistemleri.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Hakkımda | Sertaç Burak Eren",
    description:
      "Güvenilir sistemler, ölçülebilir sonuçlar ve ileri görüşlü çözümler üreten AI odaklı yazılım geliştiricisi.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımda | Sertaç Burak Eren",
    description:
      "Güvenilir sistemler, ölçülebilir sonuçlar ve ileri görüşlü çözümler üreten AI odaklı yazılım geliştiricisi.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative">
        <Navbar />

        {/* Hero */}
        <section className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
          {/* AI Glow - About Header */}
          <AIGlow intensity="medium" />
          
          <h1 className={`relative z-10 max-w-3xl ${type.h1}`}>
            IT liderliği, ürün geliştirme ve güvenlik odağıyla güvenilir sistemler kuruyorum.
          </h1>
          <p className={`relative z-10 mt-6 ${type.lead}`}>
            AI entegrasyonu, backend sistemleri ve ürün geliştirme alanlarında çalışıyorum.
            Ölçülebilir sonuçlar, güvenlik odaklı mimari ve ileri görüşlü çözümler her zaman
            odağımın merkezinde. Güvenilirlik ve netlik varsayılanım.
          </p>
          
          {/* Signature Strip */}
          <div className="relative z-10 mt-10">
            <CalloutCard title="İmza" desc="Temel prensiplerin kısa özeti:" tone="indigo">
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Güvenlik varsayılan.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Netlik: okunur, sürdürülebilir kod.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Ship odaklı iterasyon.</span>
                </li>
              </ul>
            </CalloutCard>
            
            {/* In-page Navigation */}
            <nav className="mt-8 flex flex-wrap gap-4 text-sm" aria-label="Sayfa içi navigasyon">
              <a 
                href="#odak" 
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-indigo-400/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2)]"
              >
                Odak
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a 
                href="#prensip" 
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-indigo-400/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2)]"
              >
                Prensipler
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a 
                href="#timeline" 
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-indigo-400/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2)]"
              >
                Yakın Dönem
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </nav>
          </div>
        </section>

        {/* Focus Areas */}
        <section id="odak" className="mx-auto max-w-4xl px-6 pb-16">
          <SectionHeader 
            kicker="ODAK" 
            title="Odak Alanlarım" 
            subtitle="Ürün + sistem + güvenlik ekseninde." 
          />

          <div className="mt-8 space-y-8">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className={`${type.h3} text-indigo-200`}>AI / Veri</h3>
              <p className={`mt-3 ${type.body}`}>
                AI modellerini ürünlere entegre eder, içgörü için veri pipeline'ları kurar ve
                ML-ready mimariler tasarlarım. Gerçek değer üreten pratik uygulamalara odaklanırım—
                hype yok, sadece çalışan sistemler.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className={`${type.h3} text-emerald-200`}>Güvenlik</h3>
              <p className={`mt-3 ${type.body}`}>
                RBAC, audit izi, input validasyonu ve güvenli defaults baştan kurguluyorum.
                Uyumluluk gereksinimlerini karşılayan, bakılabilir sistemler kurarım.
                Önleme, tepkiden önce gelir.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className={`${type.h3} text-amber-200`}>Backend / Ölçek</h3>
              <p className={`mt-3 ${type.body}`}>
                Laravel, .NET ve modern backend stack'leri. Kırılmadan ölçeklenen modüler mimariler.
                Background job'lar, caching stratejileri ve büyümeyi destekleyen veritabanı tasarımı.
                Performans önemli, ama okunabilirlik de öyle.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className={type.h3}>Ürün Düşüncesi</h3>
              <p className={`mt-3 ${type.body}`}>
                Kullanıcı çıktılarıyla yönlenen teknik kararlar. Gerçek problemleri çözen özellikler
                geliştiririm, kutu işaretlemek değil. Geri bildirimlere göre iterasyon yapar, etkiyi
                ölçer ve sürekli ship ederim.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="prensip" className="mx-auto max-w-4xl px-6 pb-16">
          <SectionHeader 
            kicker="PRENSİP" 
            title="Önemsediğim Şeyler" 
            subtitle="Yazılım geliştirmede temel değerlerim." 
          />

          <div className="mt-8 space-y-6">
            <div>
              <h3 className={type.label}>Güvenilirlik</h3>
              <p className={`mt-2 ${type.body}`}>
                Sistemler tutarlı çalışmalı. Hata yönetimi, loglama ve test opsiyonel değil—
                temelin kendisi. Downtime pahalı; önleme ucuz.
              </p>
            </div>

            <div>
              <h3 className={type.label}>Netlik</h3>
              <p className={`mt-2 ${type.body}`}>
                Kod yazıldığından çok okunur. Net isimlendirme, modüler yapı ve "neden"i açıklayan
                dokümantasyon aylarca debug'dan kurtarır. Gelecekteki sen, bugünkü sana teşekkür
                edecek.
              </p>
            </div>

            <div>
              <h3 className={type.label}>Ölçülebilir Sonuç</h3>
              <p className={`mt-2 ${type.body}`}>
                "Çalışıyor" yetmez. Ne kadar hızlı? Kaç hata önlendi? Metrikler kararları yönlendirir.
                Ölçemiyorsan, iyileştiremezsin.
              </p>
            </div>

            <div>
              <h3 className={type.label}>İleri Görüş</h3>
              <p className={`mt-2 ${type.body}`}>
                Yarın için kur, bugün ship et. Genişletilebilir mimariler, ML-ready pipeline'lar ve
                otomasyon-first iş akışları. Pragmatizm ile vizyonu dengele—fazla mühendislik yapma,
                ama kendini köşeye de sıkıştırma.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mx-auto max-w-4xl px-6 pb-20">
          <SectionHeader 
            kicker="ZAMAN ÇİZELGESİ" 
            title="Yakın Dönem" 
            subtitle="Son yıllarda odaklandığım alanlar ve projeler." 
          />

          <div className="mt-8 space-y-6 border-l border-white/10 pl-6">
            <div>
              <div className={type.muted}>2024</div>
              <h3 className={`mt-1 ${type.label}`}>
                AI Entegrasyonu & Veri Pipeline Projeleri
              </h3>
              <p className={`mt-2 ${type.muted}`}>
                ML-ready mimariler, birleşik veri kaynakları ve öneri sistemleri kurdum.
                Aksiyon alabilen içgörüler ve kullanıcı bağlılığı odağım.
              </p>
            </div>

            <div>
              <div className={type.muted}>2023</div>
              <h3 className={`mt-1 ${type.label}`}>Kurumsal Platform Geliştirme</h3>
              <p className={`mt-2 ${type.muted}`}>
                RBAC, audit izi ve otomatik raporlama içeren modüler sistemler tasarladım.
                Manuel iş yükünü azalttım ve operasyonel görünürlüğü güçlendirdim.
              </p>
            </div>

            <div>
              <div className={type.muted}>2022</div>
              <h3 className={`mt-1 ${type.label}`}>Ürün Lansmanı & Solo Geliştirme</h3>
              <p className={`mt-2 ${type.muted}`}>
                Küçük işletmeler için offline-first masaüstü uygulamaları ship ettim. Manuel
                hataları azaltmaya ve veri bütünlüğünü korumaya odaklandım. Basit çözümlerin
                kazandığının kanıtı.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-[#070A12]/60">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="text-center mb-10">
              <h2 className={type.h2}>Birlikte Çalışalım</h2>
              <p className={`mt-3 ${type.body}`}>
                İddialı bir şey inşa ediyorsan, konuşalım.
              </p>
              <p className={`mt-2 ${type.muted}`}>
                Kısa bir özet yaz, 24–48 saat içinde döneyim.
              </p>
              <ButtonLink
                href={`mailto:${CONTACT.EMAIL}`}
                variant="primary"
                size="md"
                className="mt-6"
              >
                İletişime Geç
              </ButtonLink>
              <div className="mt-4">
                <a 
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Hızlıca mail at →
                </a>
              </div>
            </div>
            
            {/* Hızlı İletişim */}
            <div className="max-w-md mx-auto">
              <CalloutCard 
                title="Hızlı İletişim" 
                desc="Mail/WhatsApp üzerinden direkt yazabilirsin." 
                tone="emerald"
              >
                <div className="space-y-2">
                  <a 
                    href={`mailto:${CONTACT.EMAIL}`}
                    className="block text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    📧 {CONTACT.EMAIL}
                  </a>
                  <a 
                    href={CONTACT.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </CalloutCard>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>

      <ScrollToTop />
    </div>
  );
}
