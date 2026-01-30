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
            Kurumsal Demo Senaryoları
          </h1>
          <p className={`relative z-10 mt-6 ${type.lead}`}>
            Gerçek proje deneyimlerinden türetilmiş, NDA-safe kurumsal senaryolar. Problem, yaklaşım ve çıktı odaklı.
          </p>
        </section>

        {/* Demo Scenarios */}
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <SectionHeader 
            kicker="DEMO" 
            title="Örnek Senaryolar" 
            subtitle="Kurumsal düzeyde pattern'ler ve ölçeklenebilir yaklaşımlar." 
          />

          <div className="mt-8 space-y-6">
            <SpotlightCard>
              <div className="space-y-4">
                <div>
                  <h3 className={`${type.h3} text-indigo-200`}>
                    Finansal Anomali Tespiti
                  </h3>
                  <p className={`mt-2 ${type.muted}`}>
                    Transaction akışlarında anomali tespiti ve otomatik uyarı sistemi
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Problem</h4>
                  <p className={`mt-2 ${type.muted}`}>
                    Büyük hacimli transaction akışlarında manuel inceleme sürdürülemez hale gelir.
                    Anomali tespiti için ekip sürekli veri izlemek zorunda kalır, bu da gecikmeye ve hatalara yol açar.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Yaklaşım</h4>
                  <ul className={`mt-3 space-y-2 ${type.muted}`}>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Transaction akışını gerçek zamanlı stream processing ile izle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Tarihsel veriden baseline pattern'ler çıkar</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Threshold aşımlarını otomatik tespit et ve skorla</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Context-aware alert ile ilgili ekibe bildirim gönder</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Çıktı (NDA-safe)</h4>
                  <p className={`mt-2 ${type.muted}`}>
                    Manuel inceleme süresi azalır, anomali yakalama hızı artar. Risk yönetimi reaktif yerine proaktif hale gelir.
                    Sistem log, metrik ve trace ile tam izlenebilir durumdadır.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="indigo">Stream Processing</Badge>
                  <Badge variant="emerald">Real-time</Badge>
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
                    Kullanıcı içeriği için otomatik risk değerlendirme ve moderasyon sistemi
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Problem</h4>
                  <p className={`mt-2 ${type.muted}`}>
                    Yüksek hacimli user-generated content'i manuel moderasyon ile ölçeklemek mümkün değil.
                    Yayınlama gecikmesi kullanıcı deneyimini etkiler, risk yönetimi ise kritik önemde.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Yaklaşım</h4>
                  <ul className={`mt-3 space-y-2 ${type.muted}`}>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>İçerik gönderiminde otomatik ön tarama (AI + rule-based)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Risk skoruna göre otomatik onay veya manuel kuyruk yönlendirmesi</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Manuel onay sürecini context ve öncelik ile destekle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Tüm akış audit log ile izlenebilir ve raporlanabilir</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className={`${type.label} text-zinc-300`}>Çıktı (NDA-safe)</h4>
                  <p className={`mt-2 ${type.muted}`}>
                    Manuel moderasyon yükü düşer, yayınlama süresi iyileşir. Düşük riskli içerik otomatik onaylanır,
                    yüksek risk manuel incelemeye yönlendirilir. Süreç şeffaf, ölçülebilir ve sürdürülebilir.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="emerald">Workflow Automation</Badge>
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
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <h3 className={`${type.label} text-amber-200`}>Önemli Not</h3>
              <p className={`mt-2 ${type.body}`}>
                Bu senaryolar gerçek proje deneyimlerinden türetilmiştir. NDA gereği gerçek müşteri verisi, 
                URL, ekran görüntüsü veya spesifik metrikler paylaşılmamıştır. Odak: problem, yaklaşım ve ölçülebilir çıktı.
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
