"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  variant?: "home" | "page";
}

export default function Navbar({ variant = "page" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Home page uses hash links, other pages use route links
  const navLinks =
    variant === "home"
      ? [
          { href: "#about", label: "Hakkımda" },
          { href: "#work", label: "Çalışmalar" },
          { href: "#projects", label: "Projeler" },
          { href: "#contact", label: "İletişim" },
        ]
      : [
          { href: "/projects", label: "Projeler" },
          { href: "/about", label: "Hakkımda" },
          { href: "/now", label: "Şu An" },
        ];

  const isActive = (href: string) => {
    if (variant === "home") return false; // Hash links don't have active state
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 transition-colors hover:text-white"
          >
            <span className="text-sm font-semibold tracking-tight text-zinc-100">
              Sertaç Burak Eren
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Underline animation on hover (only for non-active) */}
                  {!active && (
                    <span className="absolute bottom-1.5 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 rounded-lg p-2 transition-colors hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
              className="h-0.5 w-5 rounded-full bg-zinc-200 transition-colors"
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="h-0.5 w-5 rounded-full bg-zinc-200"
            />
            <motion.span
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
              className="h-0.5 w-5 rounded-full bg-zinc-200 transition-colors"
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 bg-black/40 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-6xl px-6 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        active
                          ? "bg-white/10 text-white"
                          : "text-zinc-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
