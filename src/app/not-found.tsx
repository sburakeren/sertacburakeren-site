import ButtonLink from "@/components/ui/ButtonLink";
import { type } from "@/lib/typography";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070A12] px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 text-6xl">404</div>
        <h1 className={`${type.h2} text-zinc-100`}>Sayfa Bulunamadı</h1>
        <p className={`mt-4 ${type.body} text-zinc-400`}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/" variant="primary" size="md">
            Ana Sayfa
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary" size="md">
            Projeler
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
