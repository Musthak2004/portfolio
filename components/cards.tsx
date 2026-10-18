import Link from "next/link";
import type { Project, Product, Solution, Lab, Article } from "@/types";
import { StatusBadge } from "./ui/primitives";
import TiltCard from "./motion/TiltCard";
import { projectGradient } from "@/lib/workVisual";

/**
 * Stylised project preview — gradient environment plus terminal chrome.
 * Purely decorative (`aria-hidden`): the card's real title, category and
 * description are plain text right beside it, so nothing is conveyed
 * through imagery alone, and no fake screenshot is implied.
 */
export function WorkThumb({
  project,
  index,
  className = "",
}: {
  project: Pick<Project, "slug" | "title" | "status" | "technologies">;
  index?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`work-visual relative bg-gradient-to-br ${projectGradient(project.slug)} border-b border-surface-border ${className}`}
    >
      <div className="relative p-5 md:p-6">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-dim">{index ?? "//PRJ"}</span>
          <span className="font-mono text-[10px] text-emerald-400">● {project.status.toUpperCase()}</span>
        </div>
        <p className="font-mono text-[11px] text-ink-dim mb-1.5">
          <span className="text-accent">$</span> ms-bee show {project.slug}
        </p>
        <p className="text-lg md:text-xl font-bold text-ink/90 leading-snug">{project.title}</p>
      </div>
      <div className="relative px-5 md:px-6 pb-5">
        <div className="h-px bg-gradient-to-r from-accent/50 to-transparent mb-3" />
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="font-mono text-[10px] text-ink-dim border border-white/10 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <TiltCard
      as="article"
      variant="standard"
      className="h-full"
      innerClassName="card group flex flex-col overflow-hidden h-full"
    >
      <WorkThumb project={project} index={index !== undefined ? `//PRJ-0${index + 1}` : undefined} />
      <div className="p-5 md:p-6 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <StatusBadge label={project.status} tone={project.status === "Live" ? "green" : "amber"} />
          <span className="font-mono text-[10px] text-ink-dim">{project.industry}</span>
        </div>
        <p className="font-mono text-[11px] text-accent mb-1.5">{project.category.join(" · ")}</p>
        <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-accent-hover transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-3">{project.description}</p>
        <Link
          href={`/work/${project.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors min-h-[44px]"
        >
          View Case Study <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </TiltCard>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <TiltCard as="article" variant="standard" className="h-full" innerClassName="card group p-6 md:p-7 flex flex-col h-full">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-mono text-[10px] tracking-[0.15em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1">
          {product.category.toUpperCase()}
        </span>
        <StatusBadge label={product.status} tone={product.status === "Live" ? "green" : "amber"} />
      </div>
      <h3 className="text-xl font-bold text-ink mb-2">{product.name}</h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">{product.description}</p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover min-h-[44px]"
      >
        View Product <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </TiltCard>
  );
}

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <TiltCard as="article" variant="compact" className="h-full" innerClassName="card group p-6 md:p-7 h-full flex flex-col">
      <h3 className="font-semibold text-ink text-base md:text-lg mb-2 group-hover:text-accent-hover transition-colors">
        {solution.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">{solution.tagline}</p>
      <Link
        href={`/solutions/${solution.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover min-h-[44px]"
      >
        Explore Solution <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </TiltCard>
  );
}

export function LabCard({ lab }: { lab: Lab }) {
  const tone = lab.status === "Live" ? "green" : lab.status === "Archived" ? "dim" : "amber";
  return (
    <TiltCard as="article" variant="compact" className="h-full" innerClassName="card p-6 flex flex-col h-full">
      <div className="mb-4"><StatusBadge label={lab.status} tone={tone} /></div>
      <h3 className="font-semibold text-ink mb-2">{lab.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">{lab.idea}</p>
      <Link href={`/labs/${lab.slug}`} className="mt-auto text-sm font-medium text-accent hover:text-accent-hover min-h-[44px] inline-flex items-center">
        View Experiment <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </TiltCard>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <TiltCard as="article" variant="compact" className="h-full" innerClassName="card p-6 flex flex-col h-full">
      <p className="font-mono text-[11px] text-accent mb-2">{article.category} · {article.readingMinutes} min</p>
      <h3 className="font-semibold text-ink mb-2 leading-snug">{article.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
      <Link href={`/insights/${article.slug}`} className="mt-auto text-sm font-medium text-accent hover:text-accent-hover min-h-[44px] inline-flex items-center">
        Read Article <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </TiltCard>
  );
}
