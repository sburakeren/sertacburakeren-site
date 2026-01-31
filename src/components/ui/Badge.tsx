import React from "react";

export type BadgeVariant = "slate" | "emerald" | "indigo" | "purple" | "amber";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  slate: "bg-white/5 text-zinc-300 border-white/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

export default function Badge({ children, variant = "slate", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        border
        backdrop-blur-sm
        px-3 py-1
        text-xs
        font-medium
        transition-colors
        ${variantStyles[variant]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </span>
  );
}
