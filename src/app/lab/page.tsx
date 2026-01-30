import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SectionHeader from "@/components/ui/SectionHeader";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Badge from "@/components/ui/Badge";
import { type } from "@/lib/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "NDA-safe demo alanı. Gerçek müşteri verisi içermez, pattern ve yaklaşım odaklı.",
  alternates: {
    canonical: "/lab",
  },
  openGraph: {
    title: "Lab | Sertaç Burak Eren",
    description:
      "NDA-safe demo alanı. Gerçek müşteri verisi içermez, pattern ve yaklaşım odaklı.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab | Sertaç Burak Eren",
    description:
      "NDA-safe demo alanı. Gerçek müşteri verisi içermez, pattern ve yaklaşım odaklı.",
  },
};

export default function LabPage() {
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative">
        <Navbar />

        {/* Hero */}
        <section className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
          {/* AI Glow - Lab Header */}
          <AIGlow intensity="medium" />
          
          <h1 className={`relative z-10 max-w-3xl ${type.h1}`}>
            Lab
          </h1>
          <p className={`relative z-10 mt-6 ${type.lead}`}>
            NDA-safe demo alanı. Gerçek müşteri verisi içermez—pattern ve yaklaşım odaklı.
          </p>
        </section>

        {/* Demo Scenarios */}
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <SectionHeader 
            kicker="DEMO" 
            title="Örnek Senaryolar" 
            subtitle="Production pattern'ler, observability-first yaklaşım." 
          />

          <div className="mt-8 space-y-6">
            <SpotlightCard>
              <div className="space-y-4">
                <div>
                  <h3 className={`${type.h3} text-indigo-200`}>
                    Finansal Anomali Tespiti
                  </h3>
                  <p className={`mt-2 ${type.muted}`}>
                    Transaction pattern → anomaly detection → alert pipeline
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Yaklaşım</h4>
                  <ul className={`mt-3 space-y-2 ${type.muted}`}>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Transaction veri akışını gerçek zamanlı izle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Pattern baseline'ını history üzerinden oluştur</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Threshold aşımlarını otomatik algıla</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Alert + context ile ilgili ekibe ilet</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Çıktı</h4>
                  <p className={`mt-2 ${type.muted}`}>
                    Manuel inceleme süresi azalır, anomali tespit hızı artar. Risk
                    yönetimi proaktif hale gelir. Observability: log, metrik, trace bir arada.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="indigo">Production pattern</Badge>
                  <Badge variant="emerald">Observability-first</Badge>
                  <Badge variant="slate">NDA-safe</Badge>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="space-y-4">
                <div>
                  <h3 className={`${type.h3} text-emerald-200`}>
                    İçerik Moderasyon Akışı
                  </h3>
                  <p className={`mt-2 ${type.muted}`}>
                    User-generated content → auto-check → manual review → publish
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Yaklaşım</h4>
                  <ul className={`mt-3 space-y-2 ${type.muted}`}>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>İçerik submit edilince otomatik ön kontrol (AI/rule-based)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Risk skoruna göre moderasyon kuyruğuna yönlendir</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Manuel onay sonrası yayınlama pipeline'ı tetikle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Tüm süreç audit log ile izlenebilir</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Çıktı</h4>
                  <p className={`mt-2 ${type.muted}`}>
                    Moderasyon süresi azalır, manuel yük düşer. Risk kontrol altında kalır.
                    Süreç şeffaf ve izlenebilir.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="emerald">Workflow automation</Badge>
                  <Badge variant="indigo">AI-assisted</Badge>
                  <Badge variant="slate">NDA-safe</Badge>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* Note */}
        <section className="border-t border-white/5 bg-[#070A12]/60">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className={`${type.label} text-zinc-300`}>Not</h3>
              <p className={`mt-2 ${type.body}`}>
                Buradaki senaryolar gerçek proje deneyimlerinden türetilmiştir ancak müşteri/
                proje isimleri, spesifik metrikler ve iç süreçler NDA nedeniyle gizlenmiştir.
                Odak: teknik yaklaşım + pattern + çıktı.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>

      <ScrollToTop />
    </div>
  );
}
