"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards";
import type { Project } from "@/types";

const filters = ["All", "Client work", "Web", "AI automation", "Experiments"] as const;
type Filter = (typeof filters)[number];

function matches(project: Project, filter: Filter) {
  switch (filter) {
    case "Client work":
      return project.type === "client";
    case "Web":
      return project.category.some((c) => c === "Web" || c === "Web Apps");
    case "AI automation":
      return project.category.includes("AI Automation");
    case "Experiments":
      return project.category.includes("Experiments");
    default:
      return true;
  }
}

export default function WorkExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => projects.filter((p) => matches(p, filter)), [projects, filter]);
  const featured = filtered.filter((p) => p.type === "client");
  const rest = filtered.filter((p) => p.type !== "client");

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 border-b border-surface-border pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by discipline">
          {filters.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => matches(p, f)).length;
            return (
              <button
                key={f}
                type="button"
                className="filter-btn"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className="text-[10px] text-ink-dim">{String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim" aria-live="polite">
          Showing {String(filtered.length).padStart(2, "0")} of {String(projects.length).padStart(2, "0")} builds
        </p>
      </div>

      {featured.length > 0 && (
        <div className="mb-14 grid gap-4 lg:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} featured />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <>
          {featured.length > 0 && (
            <div className="mb-6 flex items-end justify-between border-t border-surface-border pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
                Also in this view
              </p>
              <span className="font-mono text-[10px] text-ink-dim">{String(rest.length).padStart(2, "0")}</span>
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((p, i) => {
              const wide = rest.length % 2 === 1 && i === rest.length - 1;
              return (
                <div key={p.slug} className={wide ? "min-w-0 md:col-span-2" : "min-w-0"}>
                  <ProjectCard project={p} index={featured.length + i} wide={wide} />
                </div>
              );
            })}
          </div>
        </>
      )}

      {filtered.length === 0 && (
        <div className="border border-surface-border bg-surface p-10 text-center">
          <p className="text-sm text-ink-muted">No builds in this view yet.</p>
          <button type="button" className="btn-outline mt-5 min-h-[44px]" onClick={() => setFilter("All")}>
            Show all work
          </button>
        </div>
      )}
    </div>
  );
}
