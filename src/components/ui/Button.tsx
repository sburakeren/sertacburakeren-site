import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "glass" | "glassPrimary";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: clsx(
        "bg-white text-black rounded-full shadow-lg shadow-white/20",
        "hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/30",
        "active:translate-y-0"
      ),
      secondary: clsx(
        "rounded-full border border-white/10 bg-white/5 text-white",
        "hover:bg-white/10 hover:border-white/20",
        "active:bg-white/15"
      ),
      ghost: clsx(
        "text-zinc-200 hover:text-white",
        "underline decoration-zinc-500 hover:decoration-white",
        "underline-offset-4 decoration-1"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
    };

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
