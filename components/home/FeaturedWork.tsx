import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import TiltCard, { TiltLayer } from "@/components/motion/TiltCard";
import { ProjectCard, WorkThumb } from "@/components/cards";
import { StatusBadge } from "@/components/ui/primitives";
import { projectGradient } from "@/lib/workVisual";
import type { Project } from "@/types";

function FeaturedVisual({ project, index }: { project: Project; index: string }) {
  const shot = project.gallery?.[0];

  if (shot) {
    return (
      <TiltCard variant="media" className="w-full">
        <div className="shot-frame relative">
          <div className="shot-bar" aria-hidden="true">
            <span /><span /><span />
            <p className="ml-3 truncate font-mono text-[11px] text-ink-dim">
              {project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? project.slug}
            </p>
            <p className="ml-auto hidden font-mono text-[10px] text-emerald-400 sm:block">● {project.status.toUpperCase()}</p>
          </div>
          <TiltLayer strength={0.5}>
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              loading="lazy"
              decoding="async"
              className="block w-full bg-[#0b0b13]"
            />
          </TiltLayer>
        </div>
        <p className="media-caption mt-3">
          {index} · {shot.caption}
        </p>
      </TiltCard>
    );
  }

  return (
    <TiltCard variant="media" className="w-full">
      <div className={`relative overflow-hidden border border-surface-border bg-gradient-to-br ${projectGradient(project.slug)}`}>
        <WorkThumb project={project} index={index} className="min-h-[280px]" />
      </div>
      <p className="media-caption mt-3">{index} · stylised technical preview</p>
    </TiltCard>
  );
}

function Meta({ project, index }: { project: Project; index: string }) {
  return (
    <div className="flex flex-col justify-center lg:py-4">
      <div className="mb-5 flex flex-wrap items-center gap-2.5">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent">PROJECT {index}</span>
        <span className="h-px w-8 bg-surface-strong" aria-hidden="true" />
        <StatusBadge
          label={project.status}
          tone={project.status === "Live" ? (project.type === "client" ? "green" : "accent") : "amber"}
        />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
        {project.category.join(" · ")}
      </p>
      <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
        {project.title}
      </h3>
      <p className="mt-2 font-mono text-[11px] text-ink-dim">{project.industry}</p>

      <dl className="mt-7 space-y-5">
        <div>
          <dt className="meta-label">Problem</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted line-clamp-3">{project.problem}</dd>
        </div>
        <div>
          <dt className="meta-label">Solution</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted line-clamp-3">{project.solution}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-1">
        <Link
          href={`/work/${project.slug}`}
          className="link-drift inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View Case Study <span className="arrow" aria-hidden="true">→</span>
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            Live site <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function FeaturedWork({
  featured,
  supporting,
}: {
  featured: Project[];
  supporting: Project[];
}) {
  if (!featured.length) return null;

  return (
    <section aria-labelledby="home-work-heading" className="section section-rule bg-[#07070D]">
      <div className="shell">
        <Reveal variant="section">
          <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-label">
                <span className="text-accent">02</span> Selected work
              </p>
              <h2 id="home-work-heading" className="section-heading">
                Built, shipped, live.
              </h2>
              <p className="section-desc mt-4">
                Two client systems in detail — real screenshots, stated constraints,
                no invented results.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/work"
                className="link-underline inline-flex min-h-[44px] items-center text-sm font-medium text-accent"
              >
                All work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {featured.map((project, i) => {
          const index = `0${i + 1}`;
          const reversed = i % 2 === 1;
          return (
            <Reveal key={project.slug} variant="featured">
              <article className="mb-20 grid items-center gap-8 border-t border-surface-border pt-8 md:mb-28 lg:grid-cols-12 lg:gap-12 lg:pt-10">
                <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                  <FeaturedVisual project={project} index={`//PRJ-${index}`} />
                </div>
                <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                  <Meta project={project} index={index} />
                </div>
              </article>
            </Reveal>
          );
        })}

        {supporting.length > 0 && (
          <>
            <Reveal variant="section">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-t border-surface-border pt-8">
                <div>
                  <p className="section-label mb-3">Also shipped</p>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
                    Concepts, experiments and internal systems
                  </h3>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                  {supporting.length} additional builds
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {supporting.map((p, i) => (
                <Reveal key={p.slug} delay={i}>
                  <ProjectCard project={p} index={i + 2} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
