import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export function Aurora({ className = "", intensity = "subtle" }: AuroraProps) {
  const opacityMap = {
    subtle: "opacity-[0.06]",
    medium: "opacity-[0.10]",
    strong: "opacity-[0.15]",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      {/* First gradient blob - animates via CSS animation */}
      <div
        className={cn(
          "absolute -top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full",
          "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
          "blur-[100px]",
          opacityMap[intensity],
        )}
        style={{
          animation: "20s ease-in-out infinite alternate",
          animationName: "aurora-float",
          transform: "translate(0, 0) scale(1)",
        }}
      />

      {/* Second gradient blob - animates via CSS animation */}
      <div
        className={cn(
          "absolute -bottom-1/2 -right-1/4 h-[800px] w-[800px] rounded-full",
          "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",
          "blur-[120px]",
          opacityMap[intensity],
        )}
        style={{
          animation: "25s ease-in-out infinite alternate-reverse",
          animationName: "aurora-float",
          animationDelay: "5s",
          transform: "translate(0, 0) scale(1)",
        }}
      />
    </div>
  );
}
