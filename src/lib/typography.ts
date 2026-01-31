/**
 * Typography Scale System
 * 
 * Centralized typography tokens for consistent, premium text hierarchy.
 * Use these instead of inline Tailwind classes to maintain design consistency.
 * 
 * Usage:
 *   import { type } from "@/lib/typography";
 *   <h1 className={type.h1}>Title</h1>
 */

export const type = {
  /**
   * Largest headline - Hero sections, page titles
   * Desktop: 6xl (3.75rem), Mobile: 4xl (2.25rem)
   * Premium weight (700) with tight tracking for impact
   */
  h1: "text-4xl md:text-6xl font-bold tracking-tight leading-tight text-zinc-50",

  /**
   * Section headlines
   * Desktop: 3xl (1.875rem), Mobile: 2xl (1.5rem)
   * Semibold for clear hierarchy, reduced eye strain
   */
  h2: "text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-zinc-100",

  /**
   * Subsection headlines
   * Desktop: 2xl (1.5rem), Mobile: xl (1.25rem)
   * Slightly looser tracking for smaller sizes
   */
  h3: "text-xl md:text-2xl font-semibold tracking-tight leading-snug text-zinc-100",

  /**
   * Hero subtitle - Large emphasis text below h1
   * Desktop: lg (1.125rem), Mobile: base (1rem)
   * Softer zinc-300 for better dark mode readability
   */
  lead: "text-base md:text-lg leading-relaxed text-zinc-300",

  /**
   * Body text - Standard paragraph text
   * Slightly larger on desktop for readability
   * zinc-400 for reduced eye strain on long-form text
   */
  body: "text-sm md:text-base leading-relaxed text-zinc-400",

  /**
   * Muted text - Secondary information
   * Used for metadata, captions, helper text
   * Softer zinc-500 for subtle hierarchy
   */
  muted: "text-sm leading-relaxed text-zinc-500",

  /**
   * Kicker - Small eyebrow text above headlines
   * Used for categories, labels, breadcrumbs
   */
  kicker: "text-xs tracking-wide uppercase font-medium text-zinc-500",

  /**
   * Label - Form labels and UI labels
   * Slightly more prominent than muted text
   */
  label: "text-sm font-semibold tracking-tight text-zinc-200",
} as const;

/**
 * Utility: Merge typography class with custom classes
 * 
 * Note: If you need to override typography classes, use a utility like clsx/cn:
 * 
 * Example:
 *   import { cn } from "@/lib/utils"; // if you have cn utility
 *   <h1 className={cn(type.h1, "text-indigo-300")}>Custom color</h1>
 */
