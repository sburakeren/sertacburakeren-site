"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";

type CursorGlowProps = {
  children: ReactNode;
  className?: string;
  radiusClassName?: string; // opsiyonel: farklı köşe radius
};

export default function CursorGlow({
  children,
  className = "",
  radiusClassName = "rounded-[28px]",
}: CursorGlowProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const updateFromPoint = (clientX: number, clientY: number) => {
    const el = hostRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setPos({ x, y });
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const { clientX, clientY } = e;

    rafRef.current = requestAnimationFrame(() => {
      updateFromPoint(clientX, clientY);
    });
  };

  const onPointerEnter = () => setActive(true);

  const onPointerLeave = () => {
    setActive(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Tek style objesi: hem inner glow hem border highlight aynı noktayı takip eder
  const spotlight = {
    "--mx": `${pos.x}px`,
    "--my": `${pos.y}px`,
  } as React.CSSProperties;

  return (
    <div
      ref={hostRef}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={`relative ${className}`}
      style={spotlight}
    >
      {/* 1) Premium border highlight (stroke) */}
      <div
        className={`pointer-events-none absolute -inset-[1px] ${radiusClassName} opacity-0 transition-opacity duration-200`}
        style={{
          opacity: active ? 1 : 0,
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), rgba(99,102,241,0.55), rgba(16,185,129,0.35), rgba(255,255,255,0.10) 55%, transparent 70%)",
          // stroke efekti: sadece border bölgesini göster
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          filter: "blur(0px)",
        }}
      />

      {/* 2) Inner soft glow */}
      <div
        className={`pointer-events-none absolute -inset-2 ${radiusClassName} opacity-0 transition-opacity duration-200`}
        style={{
          opacity: active ? 1 : 0,
          background:
            "radial-gradient(280px circle at var(--mx) var(--my), rgba(99,102,241,0.18), rgba(16,185,129,0.12), transparent 60%)",
          filter: "blur(12px)",
        }}
      />

      {/* 3) Content */}
      <div className={`relative ${radiusClassName}`}>{children}</div>
    </div>
  );
}
