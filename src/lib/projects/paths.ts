export function normalizeProjectSlug(raw: string): string {
  const trimmed = (raw ?? "").trim();
  try {
    return decodeURIComponent(trimmed).toLowerCase().trim();
  } catch {
    // If the slug is malformed (bad percent-encoding), fall back to raw input.
    return trimmed.toLowerCase();
  }
}

export function projectHrefFromSlug(slug: string): string {
  const normalized = normalizeProjectSlug(slug);
  // Encode to be safe for any future non-ascii/space cases.
  return `/projects/${encodeURIComponent(normalized)}`;
}

export function projectHref(project: { slug: string }): string {
  return projectHrefFromSlug(project.slug);
}

