import { PROJECTS } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import AIGlow from "@/components/ui/AIGlow";
import { CyberSecurityEffects } from "@/components/CyberSecurityEffects";
import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/ProjectsHero";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "AI-odaklı sistemler, ölçeklenebilir ürünler ve kurumsal çözümlerin vaka çalışmaları. Teknik zorlukları, yaklaşımları ve ölçülebilir sonuçları keşfedin.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projeler | Sertaç Burak Eren",
    description: "AI-odaklı sistemler, ölçeklenebilir ürünler ve kurumsal çözümlerin vaka çalışmaları.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projeler | Sertaç Burak Eren",
    description: "AI-odaklı sistemler, ölçeklenebilir ürünler ve kurumsal çözümlerin vaka çalışmaları.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
      
      {/* Cyber Security Effects - Scan variant for projects */}
      <CyberSecurityEffects variant="scan" intensity="subtle" />

      <div className="relative">
        <Navbar />

        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          {/* AI Glow - Projects Header */}
          <AIGlow intensity="soft" />
          
          <ProjectsHero />
        </section>

        {/* Projects Grid */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <ProjectGrid projects={PROJECTS} />
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
