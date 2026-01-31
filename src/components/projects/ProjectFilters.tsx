"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { type } from "@/lib/typography";

type ProjectFiltersProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  sortBy: "featured" | "newest" | "az";
  onSortChange: (sort: "featured" | "newest" | "az") => void;
  allTags: string[];
  allCategories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
};

export default function ProjectFilters({
  searchQuery,
  onSearchChange,
  selectedTags,
  onTagToggle,
  sortBy,
  onSortChange,
  allTags,
  allCategories,
  selectedCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? allTags : allTags.slice(0, 8);

  return (
    <div className="space-y-6">
      {/* Search */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-all focus:border-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:border-white/15"
        />
        {searchQuery && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Clear search"
          >
            ✕
          </motion.button>
        )}
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <motion.button
            onClick={() => onCategoryChange(null)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              selectedCategory === null
                ? "bg-indigo-500/20 text-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500/30"
                : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-transparent"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {allCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-500/20 text-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500/30"
                  : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as "featured" | "newest" | "az")}
          className="ml-auto rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 transition-all focus:border-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 hover:border-white/15"
        >
          <option value="featured">Featured First</option>
          <option value="newest">Newest First</option>
          <option value="az">A-Z</option>
        </select>
      </motion.div>

      {/* Tag Filters */}
      {allTags.length > 0 && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className={type.kicker}>Filter by tech:</div>
          <div className="flex flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={`rounded-full px-3 py-1 text-xs transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                    : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-transparent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
            {allTags.length > 8 && (
              <motion.button
                onClick={() => setShowAllTags(!showAllTags)}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {showAllTags ? "Show less" : `+${allTags.length - 8} more`}
              </motion.button>
            )}
          </div>

          {selectedTags.length > 0 && (
            <motion.button
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => selectedTags.forEach(onTagToggle)}
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Clear filters ({selectedTags.length})
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
}
