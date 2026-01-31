import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  titleClassName?: string;
  showDivider?: boolean;
}

/**
 * SectionHeader - Unified premium section header system
 * Kicker (uppercase, subtle) + Title + Lead (optional)
 */
export default function SectionHeader({
  kicker,
  title,
  lead,
  align = "left",
  titleClassName = "",
  showDivider = false,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "",
    center: "text-center mx-auto",
  };

  const leadMaxWidth = {
    left: "max-w-2xl",
    center: "max-w-xl mx-auto",
  };

  return (
    <div className={cn("space-y-2", alignClasses[align])}>
      <div className="mb-2">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-indigo-300/70">
          {kicker}
        </span>
      </div>
      
      <h2 className={cn(type.h2, titleClassName)}>
        {title}
      </h2>

      {showDivider && (
        <div className="pt-2 flex items-center" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
          <div className="relative h-px w-12">
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-indigo-400/20" />
          </div>
        </div>
      )}

      {lead && (
        <p className={cn("mt-2 leading-relaxed", type.muted, leadMaxWidth[align])}>
          {lead}
        </p>
      )}
    </div>
  );
}
