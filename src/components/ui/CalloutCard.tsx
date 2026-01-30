import { type } from "@/lib/typography";

interface CalloutCardProps {
  title: string;
  desc: string;
  tone?: "indigo" | "emerald" | "slate";
  children?: React.ReactNode;
}

/**
 * CalloutCard - Compact card for contact/availability/note blocks
 * Reuses existing rounded-2xl, border, and bg patterns with tone-specific styling
 */
export default function CalloutCard({ title, desc, tone = "slate", children }: CalloutCardProps) {
  const toneStyles = {
    indigo: "border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10",
    emerald: "border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10",
    slate: "border-white/10 bg-white/5 hover:bg-white/10",
  };

  return (
    <div className={`group/callout relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5 ${toneStyles[tone]}`}>
      <h3 className={`${type.label} text-zinc-200`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed text-zinc-400`}>{desc}</p>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
