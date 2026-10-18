import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import TiltCard, { TiltLayer } from "@/components/motion/TiltCard";
import { WorkThumb } from "@/components/cards";
import { projectGradient } from "@/lib/workVisual";
import type { Project } from "@/types";

/**
 * The featured visual. When a project ships verified screenshots we show the
 * real thing inside honest browser framing; otherwise we fall back to the
 * stylised technical preview. Deliberately not a link — the adjacent meta
 * block owns the single case-study link, so the same project is never given
 * two competing call-to-action targets.
 */
function FeaturedVisual({ project, index }: { project: Project; index: string }) {
  const shot = project.gallery?.[0];

  if (shot) {
    return (
      <TiltCard variant="media" className="w-full">
        <div className="shot-frame relative">
          <div className="shot-bar" aria-hidden="true">
            <span /><span /><span />
            <p className="ml-3 font-mono text-[11px] text-ink-dim truncate">
              {project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? project.slug}
            </p>
            <p className="ml-auto font-mono text-[11px] text-emerald-400 hidden sm:block">● {project.status.toUpperCase()}</p>
          </div>
          <TiltLayer strength={0.5}>
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto bg-[#0b0b13]"
            />
          </TiltLayer>
        </div>
        <p className="font-mono text-[10px] tracking-[0.15em] text-ink-dim mt-3">
          {index} · {shot.caption}
        </p>
      </TiltCard>
    );
  }

  return (
    <TiltCard variant="media" className="w-full">
      <div className={`work-visual relative bg-gradient-to-br ${projectGradient(project.slug)} border border-surface-border min-h-[240px] md:min-h-[320px] flex flex-col justify-between p-5 md:p-7`}>
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">{index}</span>
            <span className="font-mono text-[10px] text-emerald-400">● {project.status.toUpperCase()}</span>
          </div>
          <p className="font-mono text-xs text-ink-dim mb-2">
            <span className="text-accent">$</span> ms-bee show {project.slug}
          </p>
          <p className="text-2xl md:text-3xl font-bold text-ink/90">{project.title}</p>
        </div>
        <div aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent mb-4" />
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="font-mono text-[10px] text-ink-dim border border-white/10 px-2 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="font-mono text-[10px] tracking-[0.15em] text-ink-dim mt-3">
        {index} · stylised technical preview
      </p>
    </TiltCard>
  );
}

function Meta({ project, index }: { project: Project; index: string }) {
  return (
    <div className="flex flex-col justify-center py-2">
      <p className="font-mono text-[11px] tracking-[0.2em] text-accent mb-3">PROJECT {index}</p>
      <p className="font-mono text-xs text-ink-dim mb-2">{project.category.join(" · ")}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2">{project.title}</h3>
      <p className="font-mono text-xs text-ink-dim mb-4">{project.industry}</p>
      <p className="text-ink-muted leading-relaxed mb-2"><span className="text-ink">Problem — </span>{project.problem}</p>
      <p className="text-ink-muted leading-relaxed mb-6"><span className="text-ink">Solution — </span>{project.solution}</p>
      <Link href={`/work/${project.slug}`} className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]">
        View Case Study <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function FeaturedWork({
  featured,
  supporting,
}: {
  /** the two hero slots, already ordered — see getFeaturedProjects() */
  featured: Project[];
  /** everything else — guaranteed not to repeat a featured project */
  supporting: Project[];
}) {
  if (!featured.length) return null;

  return (
    <section aria-labelledby="home-work-heading" className="py-20 md:py-28 bg-[#08080F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal variant="section">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
            <div>
              <p className="section-label">/work</p>
              <h2 id="home-work-heading" className="section-heading">Can MS Bee actually build?</h2>
              <p className="section-desc mt-4">
                Two client builds in detail, then everything else that ships.
              </p>
            </div>
            <Link href="/work" className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]">
              All work <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        {featured.map((project, i) => {
          const index = `0${i + 1}`;
          const reversed = i % 2 === 1;
          return (
            <Reveal key={project.slug} variant="featured">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-16 md:mb-24 items-center">
                <div className={`lg:col-span-7 ${reversed ? "order-1 lg:order-2" : ""}`}>
                  <FeaturedVisual project={project} index={`//PRJ-${index}`} />
                </div>
                <div className={`lg:col-span-5 ${reversed ? "order-2 lg:order-1" : ""}`}>
                  <Meta project={project} index={index} />
                </div>
              </div>
            </Reveal>
          );
        })}

        {supporting.length > 0 && (
          <>
            <Reveal variant="section">
              <div className="mb-8">
                <p className="section-label">/work — also shipped</p>
                <h3 className="text-xl md:text-2xl font-bold text-ink">
                  More builds, concepts and internal systems
                </h3>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {supporting.map((p, i) => (
                <Reveal key={p.slug} delay={i}>
                  <TiltCard as="article" variant="standard" className="h-full" innerClassName="card group flex flex-col overflow-hidden h-full">
                    <WorkThumb project={p} index={`//PRJ-0${i + 3}`} />
                    <div className="p-6 flex flex-1 flex-col">
                      <p className="font-mono text-[11px] text-accent mb-1.5">{p.category.join(" · ")}</p>
                      <h4 className="font-bold text-ink mb-2 group-hover:text-accent-hover transition-colors">{p.title}</h4>
                      <p className="text-sm text-ink-muted line-clamp-2 mb-4">{p.description}</p>
                      <Link
                        href={`/work/${p.slug}`}
                        className="mt-auto link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]"
                      >
                        Case study <span className="arrow" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
