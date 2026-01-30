import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import AIGlow from "@/components/ui/AIGlow";

export default function ProjectsLoading() {
  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative">
        <Navbar />

        {/* Hero Skeleton */}
        <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <AIGlow intensity="soft" />
          
          <div className="relative z-10">
            {/* Title Skeleton */}
            <div className="h-12 w-48 animate-pulse rounded-2xl bg-white/5" />
            {/* Subtitle Skeleton */}
            <div className="mt-4 h-6 max-w-2xl animate-pulse rounded-xl bg-white/5" />
            <div className="mt-2 h-6 max-w-xl animate-pulse rounded-xl bg-white/5" />
          </div>
        </section>

        {/* Filters Skeleton */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="space-y-8">
            {/* Search Bar Skeleton */}
            <div className="h-12 w-full animate-pulse rounded-2xl border border-white/10 bg-white/5" />

            {/* Filter Chips Skeleton */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-20 animate-pulse rounded-full bg-white/5"
                  />
                ))}
              </div>
              <div className="ml-auto h-8 w-32 animate-pulse rounded-xl bg-white/5" />
            </div>

            {/* Tags Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-32 animate-pulse rounded bg-white/5" />
              <div className="flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-7 w-16 animate-pulse rounded-full bg-white/5"
                  />
                ))}
              </div>
            </div>

            {/* Results Count Skeleton */}
            <div className="h-5 w-24 animate-pulse rounded bg-white/5" />

            {/* Grid Skeleton */}
            <div className="grid auto-rows-fr gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-full min-h-[300px] animate-pulse rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex w-full flex-col">
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="h-6 w-3/4 rounded-lg bg-white/10" />
                        <div className="mt-2 h-4 w-20 rounded bg-white/10" />
                      </div>
                      <div className="h-6 w-16 rounded-full bg-white/10" />
                    </div>

                    {/* Card Body */}
                    <div className="flex-1 pt-3">
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded bg-white/10" />
                        <div className="h-4 w-5/6 rounded bg-white/10" />
                        <div className="h-4 w-4/6 rounded bg-white/10" />
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {[...Array(4)].map((_, j) => (
                          <div
                            key={j}
                            className="h-6 w-12 rounded-full bg-white/10"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-auto pt-6">
                      <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                        {[...Array(3)].map((_, j) => (
                          <div key={j}>
                            <div className="h-3 w-full rounded bg-white/10" />
                            <div className="mt-1 h-4 w-3/4 rounded bg-white/10" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
