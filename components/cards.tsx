import Link from "next/link";
import type { Project, Product, Solution, Lab, Article } from "@/types";
import { StatusBadge } from "./ui/primitives";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex flex-col overflow-hidden">
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
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="px-2.5 py-1 font-mono text-[10px] text-ink-dim bg-[#111118] border border-surface-border">
              {t}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors min-h-[44px]"
          aria-label={`View case study: ${project.title}`}
        >
          View Case Study →
        </Link>
      </div>
    </article>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group p-6 md:p-7 flex flex-col">
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
        aria-label={`View product: ${product.name}`}
      >
        View Product →
      </Link>
    </article>
  );
}

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="card group p-6 md:p-7">
      <h3 className="font-semibold text-ink text-base md:text-lg mb-2 group-hover:text-accent-hover transition-colors">
        {solution.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">{solution.tagline}</p>
      <Link
        href={`/solutions/${solution.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover min-h-[44px]"
        aria-label={`Explore solution: ${solution.title}`}
      >
        Explore Solution →
      </Link>
    </article>
  );
}

export function LabCard({ lab }: { lab: Lab }) {
  const tone = lab.status === "Live" ? "green" : lab.status === "Archived" ? "dim" : "amber";
  return (
    <article className="card p-6 flex flex-col">
      <div className="mb-4"><StatusBadge label={lab.status} tone={tone} /></div>
      <h3 className="font-semibold text-ink mb-2">{lab.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">{lab.idea}</p>
      <Link href={`/labs/${lab.slug}`} className="mt-auto text-sm font-medium text-accent hover:text-accent-hover min-h-[44px] inline-flex items-center" aria-label={`View lab: ${lab.title}`}>
        View Experiment →
      </Link>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card p-6 flex flex-col">
      <p className="font-mono text-[11px] text-accent mb-2">{article.category} · {article.readingMinutes} min</p>
      <h3 className="font-semibold text-ink mb-2 leading-snug">{article.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
      <Link href={`/insights/${article.slug}`} className="mt-auto text-sm font-medium text-accent hover:text-accent-hover min-h-[44px] inline-flex items-center" aria-label={`Read article: ${article.title}`}>
        Read Article →
      </Link>
    </article>
  );
}
