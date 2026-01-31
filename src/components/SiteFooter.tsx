import { CONTACT, PARTNERS, getWhatsAppLink } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#070A12]/60 px-6 py-12 md:py-16 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl text-center">
        <div className="text-sm text-zinc-400">
          <div className="font-medium text-zinc-200">© 2026 Sertaç Burak Eren — Tüm hakları saklıdır.</div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <a
            className="group relative text-zinc-400 transition-colors hover:text-white"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            WhatsApp
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            className="group relative text-zinc-400 transition-colors hover:text-white"
            href={`mailto:${CONTACT.EMAIL}`}
            aria-label="Email"
          >
            Email
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            className="group relative text-zinc-400 transition-colors hover:text-white"
            href={PARTNERS.GNR_STUDIO.WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GNR Studio"
          >
            GNR Studio
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            className="group relative text-zinc-400 transition-colors hover:text-white"
            href={PARTNERS.MITRAS_LAW_BLOG.WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MitrasLawBlog"
          >
            MitrasLawBlog
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            className="group relative text-zinc-400 transition-colors hover:text-white"
            href="https://instagram.com/s.burakeren"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
