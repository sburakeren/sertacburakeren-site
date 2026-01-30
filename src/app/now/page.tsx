import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ui/ButtonLink";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import SectionHeader from "@/components/ui/SectionHeader";
import CalloutCard from "@/components/ui/CalloutCard";
import { type } from "@/lib/typography";
import { CONTACT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şu An",
  description:
    "Şu an üzerinde çalıştığım, öğrendiğim ve düşündüğüm konular. Güncel odak alanlarım ve çalışma prensiplerimi düzenli olarak güncelliyorum.",
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    title: "Şu An | Sertaç Burak Eren",
    description: "Şu an üzerinde çalıştığım, öğrendiğim ve düşündüğüm konular.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Şu An | Sertaç Burak Eren",
    description: "Şu an üzerinde çalıştığım, öğrendiğim ve düşündüğüm konular.",
  },
};

export default function NowPage() {
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
          
          <h1 className={`relative z-10 max-w-3xl ${type.h1}`}>
            Şu An Ne Yapıyorum
          </h1>
          <p className={`relative z-10 mt-6 ${type.muted}`}>
            Güncelleme: Ocak 2026 — Güncel odak, iş ve düşüncelerimin anlık görüntüsü.
          </p>
        </section>

        {/* Güncel Panel */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <SectionHeader 
            kicker="GÜNCEL" 
            title="Şu An" 
            subtitle="Odak, öğrenme ve yakın plan." 
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                Portfolio sitesine yeni case study'ler ve proje detayları eklendi.
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

        {/* Currently */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className={type.kicker}>İNŞA EDİYORUM</div>
          <h2 className={`mt-3 ${type.h2}`}>Şu An</h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className={`${type.label} text-indigo-200`}>İnşa Ediyorum</h3>
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

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className={`${type.label} text-emerald-200`}>Öğreniyorum</h3>
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

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className={`${type.label} text-amber-200`}>Ship Ediyorum</h3>
              <ul className={`mt-4 space-y-3 ${type.body}`}>
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
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    Projelerimde geliştirici deneyimini iyileştiriyorum—daha iyi hata mesajları,
                    daha net loglar ve daha akıcı onboarding.
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
