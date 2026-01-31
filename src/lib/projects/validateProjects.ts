import type { Project } from "@/data/projects";
import { normalizeProjectSlug, projectHrefFromSlug } from "@/lib/projects/paths";

/**
 * Dev-only validator to ensure all projects meet minimum content requirements.
 * Runs in development to catch missing fields early.
 */
export function validateProjects(projects: Project[]): void {
  // Skip validation in production
  if (process.env.NODE_ENV === "production") {
    return;
  }

  const errors: string[] = [];

  projects.forEach((project) => {
    const issues: string[] = [];

    // Required fields
    if (!project.slug) issues.push("missing slug");
    if (!project.title) issues.push("missing title");
    if (!project.subtitle) issues.push("missing subtitle");
    if (!project.year) issues.push("missing year");

    // Stack/tags minimum count
    const tags = project.tags || [];
    const stack = project.stack || [];
    if (tags.length < 4) issues.push(`tags count ${tags.length} < 4`);
    if (stack.length < 4) issues.push(`stack count ${stack.length} < 4`);

    // Highlights minimum count
    const highlights = project.highlights || [];
    if (highlights.length < 3) issues.push(`highlights count ${highlights.length} < 3`);

    // Decisions minimum count (if field exists in schema)
    const decisions = project.decisions || [];
    if (decisions.length < 3) issues.push(`decisions count ${decisions.length} < 3`);

    // Outcomes minimum count (if field exists)
    const outcomes = project.outcomes || [];
    if (outcomes.length < 2) issues.push(`outcomes count ${outcomes.length} < 2`);

    // Slug sanity: should be normalized and routable.
    const normalizedSlug = normalizeProjectSlug(project.slug);
    if (project.slug !== normalizedSlug) {
      issues.push(`slug not normalized ("${project.slug}" → "${normalizedSlug}")`);
    }
    if (project.slug.includes("/")) {
      issues.push('slug must not include "/"');
    }
    // Ensure we can build a stable internal href for every project.
    const href = projectHrefFromSlug(project.slug);
    if (!href.startsWith("/projects/")) {
      issues.push(`invalid project href: ${href}`);
    }

    if (issues.length > 0) {
      errors.push(`Project "${project.slug || "unknown"}": ${issues.join(", ")}`);
    }
  });

  if (errors.length > 0) {
    throw new Error(
      `[DEV] Project validation failed:\n${errors.map((e) => `  - ${e}`).join("\n")}`
    );
  }
}
