import { AnchorHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { ButtonVariant, ButtonSize } from "./Button";

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 active:scale-[0.99] hover:-translate-y-0.5";

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
      glass: clsx(
        "backdrop-blur-md bg-white/[0.06] border border-white/[0.10] text-zinc-100",
        "hover:bg-white/[0.10] hover:border-white/[0.14]",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        "transition-all duration-300"
      ),
      glassPrimary: clsx(
        "backdrop-blur-md bg-indigo-500/[0.10] border border-indigo-400/[0.15] text-indigo-50",
        "hover:bg-indigo-500/[0.14] hover:border-indigo-300/[0.20]",
        "shadow-[0_8px_25px_rgba(99,102,241,0.12)]",
        "transition-all duration-300"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
    };

    // Hash link (anchor on same page) - use native <a> for smooth scroll
    if (href.startsWith("#")) {
      return (
        <a
          ref={ref}
          href={href}
          className={clsx(baseStyles, variants[variant], sizes[size], className)}
          {...props}
        >
          {children}
        </a>
      );
    }

    // Internal route (starts with /) - use Next.js Link
    if (href.startsWith("/")) {
      return (
        <Link
          ref={ref}
          href={href}
          className={clsx(baseStyles, variants[variant], sizes[size], className)}
          {...props}
        >
          {children}
        </Link>
      );
    }

    // External link (http/https/mailto)
    return (
      <a
        ref={ref}
        href={href}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
