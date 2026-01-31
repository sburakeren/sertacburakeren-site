"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Project } from "@/data/projects";
import { projectHref } from "@/lib/projects/paths";

export default function ProjectModal({
  open,
  project,
  onClose,
}: {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}) {
  // ESC to close + body scroll lock
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseDown={onClose}
          >
            <motion.div
              layoutId={`card-${project.slug}`}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#070A12]/90 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {/* Top glow */}
              <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-transparent blur-3xl" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4 border-b border-white/10 p-6">
                <div>
                  <div className="text-xs text-zinc-400">Project</div>
                  <motion.h3
                    layoutId={`title-${project.slug}`}
                    className="mt-1 text-2xl font-semibold text-zinc-100"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="mt-2 text-sm text-zinc-300">{project.subtitle}</p>

                  <motion.div
                    layoutId={`tags-${project.slug}`}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                </div>

                <Button
                  onClick={onClose}
                  variant="secondary"
                  size="sm"
                  aria-label="Close"
                  title="Close (Esc)"
                >
                  Kapat ✕
                </Button>
              </div>

              {/* Body */}
              <div className="relative grid gap-6 p-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-zinc-400">Problem</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-200">{project.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Çözüm</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-200">{project.solution}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-zinc-400">Etki</div>
                    <ul className="mt-2 space-y-2 text-sm text-zinc-200">
                      {project.impact.map((x, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/70" />
                          <span className="leading-relaxed">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.stack && project.stack.length > 0 && (
                    <div>
                      <div className="text-xs text-zinc-400">Stack</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.highlights?.length ? (
                    <div>
                      <div className="text-xs text-zinc-400">Highlights</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Footer */}
              <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-6">
                <div className="flex flex-wrap gap-2">
                  <ButtonLink
                    href={projectHref(project)}
                    variant="primary"
                    size="sm"
                    className="bg-indigo-500 hover:bg-indigo-600 shadow-indigo-500/20 hover:shadow-indigo-500/30"
                  >
                    Detayları Gör
                  </ButtonLink>

                  {project.links && project.links.length > 0 &&
                    project.links.map((link) => (
                      <ButtonLink
                        key={link.href}
                        variant="secondary"
                        size="sm"
                        href={link.href}
                        target={link.external !== false ? "_blank" : undefined}
                        rel={link.external !== false ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </ButtonLink>
                    ))}
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  Kapat ✕
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
