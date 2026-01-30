import { CONTACT, PARTNERS, getWhatsAppLink } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#070A12]/60 px-6 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center text-sm text-zinc-400 md:text-left">
          <div className="font-medium text-zinc-200">© 2026 Sertaç Burak Eren</div>
          <div className="mt-1">AI Builder</div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            className="text-zinc-400 transition-colors hover:text-white"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
          <a
            className="text-zinc-400 transition-colors hover:text-white"
            href={`mailto:${CONTACT.EMAIL}`}
            aria-label="Email"
          >
            Email
          </a>
          <a
            className="text-zinc-400 transition-colors hover:text-white"
            href={CONTACT.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            className="text-zinc-400 transition-colors hover:text-white"
            href={PARTNERS.GNR_STUDIO.WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GNR Studio"
          >
            GNR Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
