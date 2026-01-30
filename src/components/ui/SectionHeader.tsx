import { type } from "@/lib/typography";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

/**
 * SectionHeader - Signature section header with optional kicker and subtitle
 * Uses existing typography tokens and adds a subtle gradient divider accent
 */
export default function SectionHeader({ kicker, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      {kicker && <div className={type.kicker}>{kicker}</div>}
      
      <h2 className={type.h2}>{title}</h2>
      
      {/* Signature accent: gradient bar with glow */}
      <div className="relative w-24">
        {/* Glow layer */}
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-indigo-400/70 via-emerald-300/50 to-transparent opacity-40" />
        {/* Solid bar */}
        <div className="relative h-0.5 bg-gradient-to-r from-indigo-400/70 via-emerald-300/40 to-transparent" />
      </div>
      
      {subtitle && <p className={`${type.muted} max-w-2xl`}>{subtitle}</p>}
    </div>
  );
}
