"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import { type } from "@/lib/typography";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070A12] px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 text-6xl">⚠️</div>
        <h1 className={`${type.h2} text-zinc-100`}>Bir Hata Oluştu</h1>
        <p className={`mt-4 ${type.body} text-zinc-400`}>
          Beklenmeyen bir sorunla karşılaşıldı. Lütfen tekrar deneyin veya ana sayfaya dönün.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/10"
          >
            Tekrar Dene
          </button>
          <ButtonLink href="/" variant="secondary" size="md">
            Ana Sayfa
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
