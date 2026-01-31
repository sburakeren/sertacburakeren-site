type AIGlowIntensity = "strong" | "medium" | "soft";

interface AIGlowProps {
  intensity?: AIGlowIntensity;
  className?: string;
}

export default function AIGlow({ intensity = "medium", className = "" }: AIGlowProps) {
  // Intensity configurations
  const configs = {
    strong: {
      gradient: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 50%)",
      blur: "blur-3xl",
      opacity: "opacity-60",
      scale: "scale-150",
    },
    medium: {
      gradient: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1), transparent 60%)",
      blur: "blur-2xl",
      opacity: "opacity-40",
      scale: "scale-125",
    },
    soft: {
      gradient: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.06), transparent 70%)",
      blur: "blur-xl",
      opacity: "opacity-25",
      scale: "scale-110",
    },
  };

  const config = configs[intensity];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Main glow gradient */}
      <div
        className={`absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 ${config.blur} ${config.opacity} ${config.scale}`}
        style={{
          background: config.gradient,
        }}
      />

      {/* Secondary accent glow (emerald) */}
      <div
        className={`absolute -top-20 right-1/4 h-[300px] w-[400px] ${config.blur} opacity-20`}
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.08), transparent 60%)",
        }}
      />

      {/* Subtle noise texture overlay (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
