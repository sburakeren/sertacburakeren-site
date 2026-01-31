"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import GlowCard from "@/components/GlowCard";
import { type } from "@/lib/typography";
import { CONTACT, getWhatsAppLink } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // bot yakalayıcı
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    details: "",
  });

  const canSubmit = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    return (
      form.name.trim().length >= 2 &&
      emailOk &&
      form.subject.trim().length >= 3 &&
      form.details.trim().length >= 10 &&
      honeypot.trim().length === 0 &&
      state !== "loading"
    );
  }, [form, honeypot, state]);

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!canSubmit) {
      setState("error");
      setMessage("Formu kontrol et: isim/email/konu/mesaj yeterli uzunlukta olmalı.");
      return;
    }

    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, honeypot }),
      });

      if (!res.ok) throw new Error("Request failed");

      setState("success");
      setMessage("Mesajın alındı. En kısa sürede dönüş yapacağım.");
      setForm({ name: "", email: "", subject: "", details: "" });
    } catch {
      setState("error");
      setMessage(`Şu an gönderilemedi. Mail ile de yazabilirsin: ${CONTACT.EMAIL}`);
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Left: Contact Form */}
        <GlowCard className="group/form">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Honeypot (hidden) */}
            <div className="hidden">
              <label className="text-xs text-zinc-400">Do not fill</label>
              <input value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative">
                <input
                  id="contact-name"
                  value={form.name}
                  onChange={onChange("name")}
                  disabled={state === "loading"}
                  className="peer w-full border-0 border-b-2 border-white/10 bg-transparent pb-2 pt-4 text-sm text-zinc-100 placeholder:text-transparent outline-none transition-all focus:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Ad Soyad"
                  autoComplete="name"
                  aria-required="true"
                />
                <label
                  htmlFor="contact-name"
                  className="absolute left-0 top-4 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  İsim
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-white/40 to-white/20 transition-all duration-300 peer-focus:w-full" />
              </div>

              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  disabled={state === "loading"}
                  className="peer w-full border-0 border-b-2 border-white/10 bg-transparent pb-2 pt-4 text-sm text-zinc-100 placeholder:text-transparent outline-none transition-all focus:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="E-posta adresiniz"
                  autoComplete="email"
                  aria-required="true"
                />
                <label
                  htmlFor="contact-email"
                  className="absolute left-0 top-4 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Email
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-white/40 to-white/20 transition-all duration-300 peer-focus:w-full" />
              </div>
            </div>

            <div className="relative">
              <input
                id="contact-subject"
                value={form.subject}
                onChange={onChange("subject")}
                disabled={state === "loading"}
                className="peer w-full border-0 border-b-2 border-white/10 bg-transparent pb-2 pt-4 text-sm text-zinc-100 placeholder:text-transparent outline-none transition-all focus:border-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Örn. Kurumsal web revizyonu"
                aria-required="true"
              />
              <label
                htmlFor="contact-subject"
                className="absolute left-0 top-4 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-indigo-300 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Konu
              </label>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 peer-focus:w-full" />
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Web Sitesi",
                  "Kurumsal Web",
                  "E-ticaret",
                  "Landing / Funnel",
                  "AI entegrasyonu",
                  "Backend / API",
                  "Güvenlik & RBAC",
                  "Otomasyon / Panel",
                  "Panel / Admin",
                  "Bakım & İyileştirme",
                  "Performans",
                  "SEO Teknik",
                  "Danışmanlık",
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, subject: chip }))}
                    disabled={state === "loading"}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <textarea
                id="contact-details"
                value={form.details}
                onChange={onChange("details")}
                disabled={state === "loading"}
                className="peer min-h-[140px] w-full resize-none border-0 border-b-2 border-white/10 bg-transparent pb-2 pt-6 text-sm text-zinc-100 placeholder:text-transparent outline-none transition-all focus:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed md:min-h-[160px]"
                placeholder="Mevcut durum, hedef, hedef tarih..."
                aria-required="true"
              />
              <label
                htmlFor="contact-details"
                className="absolute left-0 top-6 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Mesaj
              </label>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <Button
                type="submit"
                disabled={!canSubmit}
                variant="primary"
                size="md"
                aria-label="Mesaj gönder"
              >
                {state === "loading" ? "Gönderiliyor..." : "Gönder"}
              </Button>
              
              <div className={`${type.muted} text-xs text-zinc-500`}>
                🛡️ Spam koruması açık
              </div>

              {message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    state === "success"
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
                      : "border-red-500/20 bg-red-500/10 text-red-200"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </form>
        </GlowCard>

        {/* Right: Premium Actions */}
        <div className="space-y-6">
          {/* WhatsApp Primary */}
          <GlowCard className="group/whatsapp bg-gradient-to-br from-emerald-500/5 to-transparent border-emerald-500/20">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                    Önerilen
                  </span>
                </div>
                <h3 className={`${type.h3} text-emerald-200`}>Projeyi Netleştirelim</h3>
                <p className={`mt-1.5 ${type.muted} text-zinc-400`}>
                  Hızlı değerlendirme ve net geri dönüş
                </p>
              </div>

              <ButtonLink
                href={getWhatsAppLink("Merhaba Sertaç, bir proje için görüşmek istiyorum.")}
                variant="primary"
                size="sm"
                className="w-full justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </ButtonLink>

              <div className={`${type.muted} text-xs text-zinc-500 text-center`}>
                Uygun olan en kısa sürede dönüş sağlarım
              </div>
            </div>
          </GlowCard>

          {/* Alternative Channels */}
          <GlowCard>
            <div className="space-y-4">
              <div>
                <h3 className={`${type.label} text-zinc-300`}>Alternatif Kanallar</h3>
              </div>

              <div className="space-y-2">
                <ButtonLink
                  href={`mailto:${CONTACT.EMAIL}?subject=Portfolio%20İletişim`}
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start gap-3"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </ButtonLink>

                <ButtonLink
                  href="https://instagram.com/s.burakeren"
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start gap-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </ButtonLink>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  );
}
