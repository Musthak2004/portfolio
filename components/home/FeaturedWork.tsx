import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import type { Project } from "@/types";

const gradients: Record<string, string> = {
  orikma: "from-[#1c2340] via-[#141a30] to-[#0a0d1a]",
  "ai-lead-follow-up-system": "from-[#231a3a] via-[#151226] to-[#0b0a14]",
  "ember-and-oak": "from-amber-950 via-[#2a1c10] to-[#12100a]",
  "flowspace-saas": "from-blue-950 via-[#101a33] to-[#090d18]",
  "harrington-and-cole": "from-slate-800 via-[#1a1f2b] to-[#0c0e14]",
};

/** Abstract technical preview — honest placeholder, no fake screenshots. */
function WorkVisual({ project, id }: { project: Project; id: string }) {
  const g = gradients[project.slug] ?? "from-[#1a1a28] via-[#12121c] to-[#0a0a12]";
  return (
    <div
      className={`work-visual relative bg-gradient-to-br ${g} border border-surface-border min-h-[240px] md:min-h-[320px] flex flex-col justify-between p-5 md:p-7`}
      role="img"
      aria-label={`${project.title} — stylised technical preview`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">{id}</span>
          <span className="font-mono text-[10px] text-emerald-400">● {project.status.toUpperCase()}</span>
        </div>
        <p className="font-mono text-xs text-ink-dim mb-2">
          <span className="text-accent">$</span> ms-bee show {project.slug}
        </p>
        <p className="text-2xl md:text-3xl font-bold text-ink/90">{project.title}</p>
      </div>
      <div aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-accent/50 to-transparent mb-4" />
        <div className="flex gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="font-mono text-[10px] text-ink-dim border border-white/10 px-2 py-1">{t}</span>
          ))}
        </div>
      </div>
      {/* hover metadata layer */}
      <div className="absolute inset-0 bg-[#06060C]/85 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-fast flex items-center justify-center p-6">
        <div className="text-center">
          <p className="font-mono text-[11px] text-accent mb-2">{project.industry.toUpperCase()}</p>
          <p className="text-sm text-ink-muted mb-5 max-w-xs">{project.problem}</p>
          <Link href={`/work/${project.slug}`} className="btn-primary btn-sweep text-sm min-h-[48px]">
            View Case Study →
          </Link>
        </div>
      </div>
    </div>
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

export default function FeaturedWork({ projects }: { projects: Project[] }) {
  const [first, second, ...rest] = projects;
  if (!first) return null;

  return (
    <section aria-labelledby="home-work-heading" className="py-20 md:py-28 bg-[#08080F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-16">
            <div>
              <p className="section-label">/work</p>
              <h2 id="home-work-heading" className="section-heading">Can MS Bee actually build?</h2>
            </div>
            <Link href="/work" className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]">
              All work <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        {/* 01 — visual LEFT, meta RIGHT */}
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-16 md:mb-24 items-center">
            <div className="lg:col-span-7"><WorkVisual project={first} id="//PRJ-01" /></div>
            <div className="lg:col-span-5"><Meta project={first} index="01" /></div>
          </div>
        </Reveal>

        {/* 02 — reversed */}
        {second && (
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-16 md:mb-24 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1"><Meta project={second} index="02" /></div>
              <div className="lg:col-span-7 order-1 lg:order-2"><WorkVisual project={second} id="//PRJ-02" /></div>
            </div>
          </Reveal>
        )}

        {/* Rest — compact asymmetric row */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i}>
                <Link href={`/work/${p.slug}`} className="card group block p-6 min-h-[44px]" aria-label={`${p.title} — view case study`}>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-ink-dim mb-3">//PRJ-0{i + 3}</p>
                  <p className="font-mono text-[11px] text-accent mb-1.5">{p.category.join(" · ")}</p>
                  <h3 className="font-bold text-ink mb-2 group-hover:text-accent-hover transition-colors">{p.title}</h3>
                  <p className="text-sm text-ink-muted line-clamp-2 mb-4">{p.description}</p>
                  <span className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Case study <span className="arrow" aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
