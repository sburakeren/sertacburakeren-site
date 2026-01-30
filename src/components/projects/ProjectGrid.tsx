"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import Button from "@/components/ui/Button";
import { type } from "@/lib/typography";
import type { Project } from "@/data/projects";
import { fadeUp, stagger } from "@/lib/motion";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"featured" | "newest" | "az">("featured");

  // Extract all unique tags and categories from both tags and stack fields
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => {
      p.tags.forEach((t) => tags.add(t));
      // Include stack items as well for comprehensive filtering
      if (p.stack) {
        p.stack.forEach((s) => tags.add(s));
      }
    });
    return Array.from(tags).sort();
  }, [projects]);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    projects.forEach((p) => categories.add(p.category));
    return Array.from(categories).sort();
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)) ||
          (p.stack && p.stack.some((s) => s.toLowerCase().includes(query)))
      );
    }

    // Category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Tags - check both tags and stack fields
    if (selectedTags.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTags.every((tag) => p.tags.includes(tag) || (p.stack && p.stack.includes(tag)))
      );
    }

    // Sort
    if (sortBy === "featured") {
      filtered = [...filtered].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
    } else if (sortBy === "newest") {
      filtered = [...filtered].sort((a, b) => {
        const yearA = parseInt(a.year || "0");
        const yearB = parseInt(b.year || "0");
        return yearB - yearA;
      });
    } else if (sortBy === "az") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [projects, searchQuery, selectedCategory, selectedTags, sortBy]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <ProjectFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        sortBy={sortBy}
        onSortChange={setSortBy}
        allTags={allTags}
        allCategories={allCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Results count */}
      <div className={type.muted}>
        {filteredProjects.length} {filteredProjects.length === 1 ? "proje" : "proje"}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key="grid"
            variants={stagger}
            initial="initial"
            animate="animate"
            exit="initial"
            className="grid auto-rows-fr gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.slug} variants={fadeUp} className="flex h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            exit="initial"
            className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.02] px-6 py-12 text-center"
          >
            <div className="text-4xl">🔍</div>
            <h3 className={`mt-4 ${type.h3}`}>Proje bulunamadı</h3>
            <p className={`mt-2 max-w-sm ${type.muted}`}>
              Filtreleri veya arama terimlerini ayarlamayı dene
            </p>
            {(searchQuery || selectedTags.length > 0 || selectedCategory) && (
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTags([]);
                  setSelectedCategory(null);
                }}
                variant="secondary"
                size="sm"
                className="mt-6"
              >
                Tüm filtreleri temizle
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
