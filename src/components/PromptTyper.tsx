"use client";

import { useEffect, useMemo, useState } from "react";

export default function PromptTyper() {
  const prompts = useMemo(
    () => [
      "Build an AI-powered dashboard that explains KPIs weekly.",
      "Detect anomalies in transactions and alert in real time.",
      "Harden the system: auth, logs, rate-limits, secure deployment.",
    ],
    []
  );

  const [pIndex, setPIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = prompts[pIndex];
    const speed = isDeleting ? 25 : 35;

    const t = setTimeout(() => {
      if (!isDeleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setIsDeleting(true), 900);
      } else {
        const next = full.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setPIndex((v) => (v + 1) % prompts.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, isDeleting, pIndex, prompts]);

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-xs text-zinc-400">Prompt</div>
      <div className="mt-2 font-mono text-sm text-zinc-200">
        <span className="text-emerald-300">{"> "}</span>
        {text}
        <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-zinc-200/70 align-middle" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200">
          Output: Deployed
        </span>
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-200">Secure</span>
        <span className="rounded-full bg-white/5 px-3 py-1 text-zinc-300">Measured</span>
      </div>
    </div>
  );
}
