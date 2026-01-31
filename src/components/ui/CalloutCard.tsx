import { type } from "@/lib/typography";

interface CalloutCardProps {
  title: string;
  desc: string;
  tone?: "indigo" | "emerald" | "amber" | "purple" | "slate";
  children?: React.ReactNode;
}

/**
 * CalloutCard - Compact card for contact/availability/note blocks
 * Reuses existing rounded-2xl, border, and bg patterns with tone-specific styling
 */
export default function CalloutCard({ title, desc, tone = "slate", children }: CalloutCardProps) {
  const toneStyles = {
    indigo: "border-white/10 bg-indigo-500/[0.03] hover:bg-white/[0.06]",
    emerald: "border-white/10 bg-emerald-500/[0.03] hover:bg-white/[0.06]",
    amber: "border-white/10 bg-amber-500/[0.03] hover:bg-white/[0.06]",
    purple: "border-white/10 bg-purple-500/[0.03] hover:bg-white/[0.06]",
    slate: "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]",
  };

  return (
    <div className={`group/callout relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)] ${toneStyles[tone]}`}>
      <h3 className={`${type.label} text-zinc-200`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed text-zinc-400`}>{desc}</p>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
