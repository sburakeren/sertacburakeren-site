import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import SectionReveal from "@/components/projects/SectionReveal";
import ProjectCard from "@/components/projects/ProjectCard";
import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ui/ButtonLink";
import Badge from "@/components/ui/Badge";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { type } from "@/lib/typography";
import { CONTACT } from "@/lib/constants";
import { normalizeProjectSlug } from "@/lib/projects/paths";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: normalizeProjectSlug(project.slug),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = normalizeProjectSlug(params.slug);
  const project = PROJECTS.find((p) => normalizeProjectSlug(p.slug) === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  // Fallback to default OG image if project doesn't have a custom one
  const ogImageUrl = project.ogImage || "/og.png";

  return {
    title: project.title,
    description: project.subtitle,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Sertaç Burak Eren`,
      description: project.subtitle,
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Sertaç Burak Eren`,
      description: project.subtitle,
      images: [ogImageUrl],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const slug = normalizeProjectSlug(params.slug);
  const project = PROJECTS.find((p) => normalizeProjectSlug(p.slug) === slug);

  if (!project) {
    if (process.env.NODE_ENV !== "production") {
      // Dev-only sanity log to catch slug mismatch/encoding issues quickly.
      console.warn(`[projects/[slug]] Project not found for slug="${params.slug}" → normalized="${slug}"`);
    }
    notFound();
  }

  // Get related projects (same category, exclude current, max 3)
  const relatedProjects = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category
  ).slice(0, 3);

  // If not enough in same category, fill with others
  if (relatedProjects.length < 3) {
    const relatedSlugs = new Set(relatedProjects.map((p) => p.slug));
    const otherProjects = PROJECTS.filter(
      (p) => p.slug !== project.slug && !relatedSlugs.has(p.slug)
    ).slice(0, 3 - relatedProjects.length);
    relatedProjects.push(...otherProjects);
  }

  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative">
        <Navbar />

        {/* Compact Header with Back Link */}
        <section className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Projelere dön
          </Link>
        </section>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <SectionReveal>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="indigo">{project.category}</Badge>
                  {project.year && (
                    <span className="text-sm text-zinc-400">{project.year}</span>
                  )}
                  {project.featured && <Badge variant="emerald">Featured</Badge>}
                  {project.status === "case-study" && <Badge variant="slate">Detaylı İçerik</Badge>}
                  {project.status === "shipped" && <Badge variant="emerald">Shipped</Badge>}
                  {project.status === "in-progress" && <Badge variant="amber">In Progress</Badge>}
                </div>

                <h1 className={`mt-6 max-w-3xl ${type.h1}`}>{project.title}</h1>
                <p className={`mt-4 max-w-2xl ${type.lead}`}>{project.subtitle}</p>

                {project.role && (
                  <div className={`mt-6 ${type.muted}`}>
                    <span className="font-medium text-zinc-300">Rol:</span> {project.role}
                  </div>
                )}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <div className="space-y-16">
              {/* Sections */}
              {project.sections && project.sections.length > 0 ? (
                project.sections.map((section, idx) => (
                  <SectionReveal key={idx}>
                    <article>
                      <h2 className={type.h2}>{section.heading}</h2>
                      <p className={`mt-4 ${type.body} leading-relaxed`}>
                        {section.body}
                      </p>
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className={`mt-6 space-y-3 ${type.body}`}>
                          {section.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </SectionReveal>
                ))
              ) : (
                <>
                  {/* Fallback to old structure if no sections */}
                  <SectionReveal>
                    <article>
                      <h2 className={type.h2}>Problem</h2>
                      <p className={`mt-4 ${type.body} leading-relaxed`}>
                        {project.problem}
                      </p>
                    </article>
                  </SectionReveal>

                  <SectionReveal>
                    <article>
                      <h2 className={type.h2}>Solution</h2>
                      <p className={`mt-4 ${type.body} leading-relaxed`}>
                        {project.solution}
                      </p>
                    </article>
                  </SectionReveal>

                  <SectionReveal>
                    <article>
                      <h2 className={type.h2}>Impact</h2>
                      <ul className={`mt-6 space-y-3 ${type.body}`}>
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </SectionReveal>
                </>
              )}

              {/* Key Decisions Section */}
              {project.decisions && project.decisions.length > 0 && (
                <SectionReveal>
                  <article>
                    <h2 className={type.h2}>Önemli Kararlar</h2>
                    <ul className={`mt-6 space-y-3 ${type.body}`}>
                      {project.decisions.map((decision, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          <span className="leading-relaxed">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </SectionReveal>
              )}

              {/* Outcomes Section */}
              {project.outcomes && project.outcomes.length > 0 && (
                <SectionReveal>
                  <article>
                    <h2 className={type.h2}>Sonuçlar</h2>
                    <ul className={`mt-6 space-y-3 ${type.body}`}>
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </SectionReveal>
              )}

              {/* Tech Stack Section (moved from sidebar for better flow) */}
              {project.stack && project.stack.length > 0 && (
                <SectionReveal>
                  <article>
                    <h2 className={type.h2}>Tech Stack</h2>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="indigo">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </article>
                </SectionReveal>
              )}

              {/* Gallery Section */}
              <SectionReveal>
                <article>
                  <h2 className={type.h2}>Görseller</h2>
                  {project.gallery && project.gallery.length > 0 ? (
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {project.gallery.map((image, idx) => (
                        <div
                          key={idx}
                          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <Badge variant="slate">Yakında</Badge>
                      </div>
                      <p className={`${type.body} text-zinc-400`}>
                        Proje görselleri hazırlanıyor. Detaylı bilgi için iletişime geçebilirsiniz.
                      </p>
                    </div>
                  )}
                </article>
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Links */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <h3 className={type.label}>Bağlantılar</h3>
                <div className="mt-4 space-y-2">
                  {project.links && project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.external !== false ? "_blank" : undefined}
                        rel={link.external !== false ? "noopener noreferrer" : undefined}
                        className="block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                      >
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <div className="block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
                      Bağlantılar talep üzerine
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <h3 className={type.label}>Öne Çıkanlar</h3>
                  <ul className={`mt-4 space-y-3 ${type.body}`}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags (moved to sidebar) */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <h3 className={type.label}>Tags</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-white/5 bg-[#070A12]/60">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <SectionReveal>
                <h2 className={`${type.h2} text-center`}>İlgili Projeler</h2>
                <p className={`mt-3 text-center ${type.muted}`}>
                  Benzer alanlarda yaptığım diğer çalışmalar
                </p>
              </SectionReveal>

              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <SectionReveal key={relatedProject.slug}>
                    <ProjectCard project={relatedProject} />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-white/5 bg-[#070A12]/60">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className={type.h2}>Birlikte Bir Şeyler Kuralım</h2>
            <p className={`mt-3 ${type.body}`}>
              Aklında bir proje mi var? Nasıl yardımcı olabileceğimi konuşalım.
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

      <ScrollToTop />
    </div>
  );
}
