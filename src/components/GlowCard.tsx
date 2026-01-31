import React from "react";

export default function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative rounded-3xl p-[1px]",
        "bg-gradient-to-b from-white/[0.1] via-white/[0.03] to-transparent",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl",
          "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
          "transition-all duration-300",
          "group-hover/card:bg-white/[0.03] group-hover/card:border-white/[0.1]",
        ].join(" ")}
      >
        {/* hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100" />

        <div className="pointer-events-none absolute -inset-10 rounded-[40px] opacity-0 blur-2xl transition duration-300 group-hover/card:opacity-100">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />
        </div>

        <div className="relative p-6">{children}</div>
      </div>
    </div>
  );
}
