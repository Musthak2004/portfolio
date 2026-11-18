import Link from "next/link";
import type { Project, Product, Solution, Lab, Article } from "@/types";
import { StatusBadge } from "./ui/primitives";
import TiltCard, { TiltLayer } from "./motion/TiltCard";
import { projectGradient } from "@/lib/workVisual";

/**
 * Fallback preview for work without a verified screenshot.
 * Purely decorative: it never invents an interface and never repeats the
 * card title, which is already rendered as real text underneath.
 */
export function WorkThumb({
  project,
  index,
  className = "",
}: {
  project: Pick<Project, "slug" | "title" | "status" | "technologies" | "category">;
  index?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-gradient-to-br ${projectGradient(project.slug)} ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="relative h-28 w-28 md:h-44 md:w-44">
          <div className="absolute inset-0 rounded-full border border-white/15" />
          <div className="absolute -inset-8 rounded-full border border-dashed border-white/10" />
          <div className="absolute -inset-16 rounded-full border border-white/[0.06]" />
          <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 shadow-[0_0_24px_rgba(255,255,255,0.35)]" />
          <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/80" />
          <div className="absolute bottom-[18%] right-0 h-1 w-1 rounded-full bg-accent/80" />
          <span className="absolute left-1/2 top-1/2 mt-6 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
            System map
          </span>
        </div>
      </div>
      <div className="relative flex h-full min-h-[210px] flex-col justify-between p-5 md:p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/55">{index ?? "//PRJ"}</span>
          <span className="font-mono text-[10px] text-emerald-300">● {project.status.toUpperCase()}</span>
        </div>
        <div>
          <div className="mb-3 h-px w-14 bg-white/30" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
            {project.category[0]} · technical preview
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectMedia({
  project,
  index,
  featured,
  wide,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
  wide?: boolean;
}) {
  const shot = project.gallery?.[0];
  return (
    <div
      className={`relative overflow-hidden border-b border-surface-border bg-[#08080E] ${
        wide
          ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[280px] md:border-b-0 md:border-r"
          : featured
            ? "aspect-[16/10] md:aspect-[16/9]"
            : "aspect-[16/10]"
      }`}
    >
      {shot ? (
        <TiltLayer strength={0.55} className="h-full">
          <img
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            loading="lazy"
            decoding="async"
            className="media-zoom h-full w-full object-cover object-top transition-transform duration-700"
          />
        </TiltLayer>
      ) : (
        <WorkThumb
          project={project}
          index={index !== undefined ? `//PRJ-${String(index + 1).padStart(2, "0")}` : undefined}
          className="h-full"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,9,0.05) 0%, transparent 42%, rgba(5,5,9,0.52) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
        <StatusBadge
          label={project.status}
          tone={project.status === "Live" ? (project.type === "client" ? "green" : "accent") : "amber"}
        />
        <span className="font-mono text-[10px] tracking-[0.16em] text-white/65 bg-black/30 border border-white/10 px-2 py-1 backdrop-blur-sm">
          {project.type === "client" ? "CLIENT" : project.type === "demo" ? "CONCEPT" : "INTERNAL"}
        </span>
      </div>
      {shot?.caption && (
        <p className="pointer-events-none absolute bottom-3 left-4 right-4 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-white/65">
          {shot.caption}
        </p>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  featured = false,
  wide = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
  /** Last card in an odd row: horizontal split on desktop so the grid never ends half-empty. */
  wide?: boolean;
}) {
  return (
    <TiltCard
      as="article"
      variant={featured ? "featured" : "standard"}
      className="h-full"
      innerClassName={`card card-interactive group flex h-full flex-col overflow-hidden ${
        wide ? "md:grid md:grid-cols-2" : ""
      }`}
    >
      <ProjectMedia project={project} index={index} featured={featured} wide={wide} />
      <div
        className={`flex flex-1 flex-col ${
          wide ? "justify-center p-6 md:p-8" : featured ? "p-6 md:p-8" : "p-5 md:p-6"
        }`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          {project.category.join(" · ")}
        </p>
        <h3
          className={`mt-2 font-semibold leading-tight text-ink transition-colors duration-200 group-hover:text-accent-hover ${
            featured || wide
              ? "text-2xl tracking-[-0.03em] md:text-3xl"
              : "text-lg tracking-[-0.02em] md:text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div className="min-w-0">
            <p className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
              {project.industry}
            </p>
            <p className="mt-1 font-mono text-[10px] text-ink-dim">
              {project.type === "client" ? "Client work" : project.type === "demo" ? "Self-initiated concept" : "Internal system"}
            </p>
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="link-drift inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            aria-label={`View case study: ${project.title}`}
          >
            Case study <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  return (
    <TiltCard
      as="article"
      variant={featured ? "featured" : "standard"}
      className="h-full"
      innerClassName="card card-interactive group flex h-full flex-col overflow-hidden"
    >
      <div className={`relative overflow-hidden border-b border-surface-border bg-[#08080E] ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        {product.image ? (
          <>
            <div className="shot-bar absolute inset-x-0 top-0 z-10 border-b border-surface-border/80 bg-[#0A0A12]/90 backdrop-blur-sm">
              <span /><span /><span />
              <span className="ml-2 truncate font-mono text-[10px] text-ink-dim">
                {product.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>
            <TiltLayer strength={0.45} className="h-full pt-8">
              <img
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                loading="lazy"
                decoding="async"
                className="media-zoom h-full w-full object-cover object-top"
              />
            </TiltLayer>
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-[#0C0C14]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">{product.name}</span>
          </div>
        )}
        <div className="absolute left-3 top-12 z-10">
          <StatusBadge label={product.status} tone={product.status === "Live" ? "green" : "amber"} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{product.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-ink transition-colors group-hover:text-accent-hover md:text-2xl">
          {product.name}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-drift inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-hover"
          >
            {product.cta} <span className="arrow" aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            Details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}

export function SolutionCard({ solution, index }: { solution: Solution; index?: number }) {
  return (
    <TiltCard
      as="article"
      variant="compact"
      className="h-full"
      innerClassName="card card-interactive group flex h-full flex-col p-6 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] tracking-[0.18em] text-ink-dim">
          {index !== undefined ? String(index + 1).padStart(2, "0") : "—"}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
          {solution.capabilities.length} capabilities
        </span>
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-ink transition-colors group-hover:text-accent-hover md:text-2xl">
        {solution.title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">{solution.tagline}</p>
      <ul className="mt-6 flex flex-wrap gap-1.5">
        {solution.capabilities.slice(0, 4).map((c) => (
          <li key={c} className="tag">{c}</li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between border-t border-surface-border pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
          {solution.whoFor[0]}
        </span>
        <Link
          href={`/solutions/${solution.slug}`}
          className="link-drift inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Explore <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </TiltCard>
  );
}

export function LabCard({ lab }: { lab: Lab }) {
  const tone = lab.status === "Live" ? "green" : lab.status === "Archived" ? "dim" : "amber";
  return (
    <TiltCard
      as="article"
      variant="compact"
      className="h-full"
      innerClassName="card card-interactive group flex h-full flex-col p-6"
    >
      <div className="flex items-center justify-between">
        <StatusBadge label={lab.status} tone={tone} />
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
          {lab.updatedAt}
        </span>
      </div>
      <h3 className="mt-8 text-lg font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-accent-hover">
        {lab.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">{lab.idea}</p>
      <Link
        href={`/labs/${lab.slug}`}
        className="link-drift mt-auto inline-flex min-h-[44px] items-center gap-2 pt-6 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        View experiment <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </TiltCard>
  );
}

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <TiltCard
      as="article"
      variant={featured ? "featured" : "compact"}
      className="h-full"
      innerClassName={`card card-interactive group flex h-full flex-col ${featured ? "p-7 md:p-10" : "p-6"}`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="eyebrow-pill">{article.category}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
          {article.readingMinutes} min read
        </span>
      </div>
      <h3
        className={`mt-6 font-semibold leading-[1.15] tracking-[-0.025em] text-ink transition-colors group-hover:text-accent-hover ${
          featured ? "text-2xl md:text-4xl" : "text-lg"
        }`}
      >
        {article.title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed text-ink-muted ${featured ? "line-clamp-3 md:text-base" : "line-clamp-3"}`}>
        {article.excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-surface-border pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
          {article.publishedAt}
        </span>
        <Link
          href={`/insights/${article.slug}`}
          className="link-drift inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Read <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </TiltCard>
  );
}
