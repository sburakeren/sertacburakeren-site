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
            title="Odak Alanlarım" 
            subtitle="Ürün + sistem + güvenlik ekseninde." 
          />

          <div className="mt-8 space-y-8">
            <div className="group/card rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:translate-x-1">
              <h3 className={`${type.h3} text-indigo-200`}>AI / Veri</h3>
              <p className={`mt-3 ${type.body}`}>
                AI modellerini ürünlere entegre eder, içgörü için veri pipeline'ları kurar ve
                ML-ready mimariler tasarlarım. Gerçek değer üreten pratik uygulamalara odaklanırım—
                hype yok, sadece çalışan sistemler.
              </p>
            </div>

            <div className="group/card rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:translate-x-1">
              <h3 className={`${type.h3} text-emerald-200`}>Güvenlik</h3>
              <p className={`mt-3 ${type.body}`}>
                RBAC, audit izi, input validasyonu ve güvenli defaults baştan kurguluyorum.
                Uyumluluk gereksinimlerini karşılayan, bakılabilir sistemler kurarım.
                Önleme, tepkiden önce gelir.
              </p>
            </div>

            <div className="group/card rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:translate-x-1">
              <h3 className={`${type.h3} text-amber-200`}>Backend / Ölçek</h3>
              <p className={`mt-3 ${type.body}`}>
                Laravel, .NET ve modern backend stack'leri. Kırılmadan ölçeklenen modüler mimariler.
                Background job'lar, caching stratejileri ve büyümeyi destekleyen veritabanı tasarımı.
                Performans önemli, ama okunabilirlik de öyle.
              </p>
            </div>

            <div className="group/card rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:translate-x-1">
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
            title="Yakın Dönem" 
            subtitle="Son yıllarda odaklandığım alanlar ve projeler." 
          />

          <div className="mt-8 space-y-8 relative">
            {/* Animated border line */}
            <div className="absolute left-0 top-0 bottom-0 w-px overflow-hidden">
              <div className="h-full w-full bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />
            </div>
            
            <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-indigo-400 before:ring-4 before:ring-indigo-400/20 hover:before:ring-indigo-400/40 before:transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/20">
                2024
              </div>
              <h3 className={`mt-3 ${type.label}`}>
                AI Entegrasyonu & Veri Pipeline Projeleri
              </h3>
              <p className={`mt-2 ${type.muted}`}>
                ML-ready mimariler, birleşik veri kaynakları ve öneri sistemleri kurdum.
                Aksiyon alabilen içgörüler ve kullanıcı bağlılığı odağım.
              </p>
            </div>

            <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-emerald-400 before:ring-4 before:ring-emerald-400/20 hover:before:ring-emerald-400/40 before:transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/20">
                2023
              </div>
              <h3 className={`mt-3 ${type.label}`}>Kurumsal Platform Geliştirme</h3>
              <p className={`mt-2 ${type.muted}`}>
                RBAC, audit izi ve otomatik raporlama içeren modüler sistemler tasarladım.
                Manuel iş yükünü azalttım ve operasyonel görünürlüğü güçlendirdim.
              </p>
            </div>

            <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-amber-400 before:ring-4 before:ring-amber-400/20 hover:before:ring-amber-400/40 before:transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300 border border-amber-500/20">
                2022
              </div>
              <h3 className={`mt-3 ${type.label}`}>Ürün Lansmanı & Solo Geliştirme</h3>
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className={type.h2}>Birlikte Çalışalım</h2>
                <p className={`mt-3 ${type.body} max-w-xl mx-auto`}>
                  Projeniz için kısa bir özet yazın. 24–48 saat içinde dönüş yaparım.
                </p>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <ButtonLink
                  href={`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba Sertaç, proje için görüşmek istiyorum.")}`}
                  variant="primary"
                  size="md"
                  className="group"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp'tan Yaz
                  </span>
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${CONTACT.EMAIL}`}
                  variant="secondary"
                  size="md"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    E-posta Gönder
                  </span>
                </ButtonLink>
              </div>

              {/* Topic Chips */}
              <div className="border-t border-white/5 pt-6">
                <p className="text-center text-sm font-medium text-zinc-400 mb-4">Hangi konuda?</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { label: "AI Entegrasyonu", mailto: "AI Entegrasyonu ve otomasyon konusunda görüşmek istiyorum" },
                    { label: "Backend/API", mailto: "Backend ve API geliştirme konusunda görüşmek istiyorum" },
                    { label: "Güvenlik & RBAC", mailto: "Güvenlik ve RBAC konusunda görüşmek istiyorum" },
                    { label: "Otomasyon/Panel", mailto: "Otomasyon ve yönetim paneli konusunda görüşmek istiyorum" },
                    { label: "Danışmanlık", mailto: "Teknik danışmanlık konusunda görüşmek istiyorum" },
                  ].map((topic) => (
                    <a
                      key={topic.label}
                      href={`mailto:${CONTACT.EMAIL}?subject=${encodeURIComponent(topic.label)}&body=${encodeURIComponent(`Merhaba Sertaç,\n\n${topic.mailto}.\n\nProje detayları:\n`)}`}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 transition-all hover:border-indigo-400/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2)]"
                    >
                      {topic.label}
                      <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  ))}
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
