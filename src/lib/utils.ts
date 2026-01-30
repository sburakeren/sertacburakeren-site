import { clsx, type ClassValue } from "clsx";

/**
 * Utility for merging Tailwind CSS classes with conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
