"use client";

import { type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

export const GlowButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  GlowButtonProps
>(
  (
    {
      children,
      variant = "primary",
      className = "",
      onClick,
      type = "button",
      disabled = false,
      href,
    },
    ref,
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
      secondary:
        "border border-neutral-700 bg-neutral-900/50 text-neutral-200 hover:border-neutral-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
      ghost:
        "text-neutral-300 hover:text-white hover:bg-neutral-800/50 border border-transparent hover:border-neutral-700",
    };

    const glowEffect = (
      <>
        {/* Subtle shimmer on hover */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </span>
      </>
    );

    const classes = cn(baseStyles, variantStyles[variant], className);

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {glowEffect}
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {glowEffect}
        <span className="relative z-10">{children}</span>
      </button>
    );
  },
);

GlowButton.displayName = "GlowButton";
