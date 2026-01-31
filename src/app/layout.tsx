import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { PageTransition } from "@/components/PageTransition";
import { IntroGate } from "@/components/intro/IntroGate";
import BackgroundLayer from "@/components/BackgroundLayer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sertacburakeren.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sertaç Burak Eren — Product & Systems Engineer",
    template: "%s | Sertaç Burak Eren",
  },
  description:
    "AI-integrated systems, scalable enterprise products, and security-first architecture. Building measurable solutions for modern businesses.",
  keywords: [
    "AI integration",
    "machine learning",
    "backend development",
    "security",
    "Laravel",
    ".NET",
    "Python",
    "full-stack developer",
    "enterprise software",
    "data pipelines",
  ],
  authors: [{ name: "Sertaç Burak Eren" }],
  creator: "Sertaç Burak Eren",
  publisher: "Sertaç Burak Eren",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Sertaç Burak Eren",
    title: "Sertaç Burak Eren — Product & Systems Engineer",
    description:
      "AI-integrated systems, scalable enterprise products, and security-first architecture. Building measurable solutions for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sertaç Burak Eren — Product & Systems Engineer",
    description:
      "AI-integrated systems, scalable enterprise products, and security-first architecture. Building measurable solutions for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sertaç Burak Eren",
    url: SITE_URL,
    sameAs: [
      "https://github.com/sertacburakeren",
      "https://gnrstudio.com",
    ],
    jobTitle: "Product & Systems Engineer",
    description:
      "AI-integrated systems, scalable enterprise products, and security-first architecture. Building measurable solutions for modern businesses.",
  };

  return (
    <html lang="tr">
      <body className="bg-black text-zinc-100 antialiased">
        {/* JSON-LD structured data */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Global fixed background layer - persists across all pages and scroll */}
        <BackgroundLayer />

        {/* Main content wrapper */}
        <IntroGate>
          <PageTransition>{children}</PageTransition>
        </IntroGate>
      </body>
    </html>
  );
}
