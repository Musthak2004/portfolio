import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, CTASection, FAQ } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/cards";
import { solutions, getSolution } from "@/content/solutions";
import { projects } from "@/content/work";
import { breadcrumbNode, faqNode, graph, serviceNode, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) return {};
  return pageMeta({
    title: `${s.title} — service`,
    description: s.tagline,
    path: `/solutions/${s.slug}`,
  });
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();
  const work = projects.filter((p) => s.relatedWork.includes(p.slug));
  const crumbs = [{ label: "Solutions", href: "/solutions" }, { label: s.title }];

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: `${s.title} — MS Bee`,
            description: s.description,
            path: `/solutions/${s.slug}`,
            breadcrumbId: `${siteCanonical(`/solutions/${s.slug}`)}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, ...crumbs], path: `/solutions/${s.slug}` }),
          serviceNode(s),
          faqNode(s),
        ])}
      />

      <header className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="page-hero-glow" aria-hidden="true" />
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
                <p className="eyebrow-accent">Service / {s.slug}</p>
              </div>
              <h1 className="text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink text-balance">
                {s.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent-hover md:text-xl">{s.tagline}</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{s.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/start-project" className="btn-primary btn-sweep min-h-[48px] justify-center">
                  Start a Project <span aria-hidden="true">→</span>
                </Link>
                <Link href="/work" className="btn-outline min-h-[48px] justify-center">
                  See related work
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-surface-border bg-surface/80 p-6 backdrop-blur-sm">
                <p className="meta-label">Who it is for</p>
                <ul className="mt-3 space-y-2">
                  {s.whoFor.map((w) => (
                    <li key={w} className="flex gap-2.5 text-sm text-ink">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                      {w}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-surface-border pt-4">
                  <p className="meta-label">Typical stack</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.technologies.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="section-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="border border-surface-border bg-surface p-6">
                  <p className="meta-label">At a glance</p>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-xs text-ink-dim">Engagement</dt>
                      <dd className="mt-1 text-sm text-ink">Fixed scope, founder-led</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink-dim">Process</dt>
                      <dd className="mt-1 text-sm text-ink">{s.process.length} defined stages</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink-dim">Related builds</dt>
                      <dd className="mt-1 text-sm text-ink">{work.length > 0 ? `${work.length} case studies` : "Available on request"}</dd>
                    </div>
                  </dl>
                  <Link href="/start-project" className="btn-primary btn-sweep mt-6 min-h-[46px] w-full justify-center">
                    Discuss a project <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </aside>

            <div className="space-y-12 lg:col-span-8">
              <Reveal>
                <div className="grid gap-5 border-t border-surface-border pt-8 sm:grid-cols-2">
                  <div className="border border-surface-border bg-surface p-6">
                    <p className="meta-label">The problem</p>
                    <ul className="mt-4 space-y-3">
                      {s.problems.map((x) => (
                        <li key={x} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-dim" aria-hidden="true" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-accent/25 bg-accent/[0.04] p-6">
                    <p className="meta-label text-accent/80">The outcome</p>
                    <ul className="mt-4 space-y-3">
                      {s.outcomes.map((x) => (
                        <li key={x} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true">✓</span>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-6 flex items-baseline gap-4">
                    <span className="index-number">01</span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">What MS Bee builds</h2>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {s.capabilities.map((x) => (
                      <li key={x} className="flex gap-2.5 border-b border-surface-border/70 py-3 text-sm text-ink-muted">
                        <span className="text-accent" aria-hidden="true">▹</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-6 flex items-baseline gap-4">
                    <span className="index-number">02</span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">How the work runs</h2>
                  </div>
                  <ol className="space-y-0">
                    {s.process.map((p, i) => (
                      <li key={p.step} className="grid gap-3 border-b border-surface-border py-5 sm:grid-cols-12">
                        <span className="font-mono text-[10px] text-accent sm:col-span-1">0{i + 1}</span>
                        <p className="text-sm font-medium text-ink sm:col-span-3">{p.step}</p>
                        <p className="text-sm leading-relaxed text-ink-muted sm:col-span-8">{p.detail}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              </Reveal>

              {work.length > 0 && (
                <Reveal>
                  <section className="border-t border-surface-border pt-8">
                    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        <span className="index-number">03</span>
                        <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">Relevant work</h2>
                      </div>
                      <Link href="/work" className="link-underline inline-flex min-h-[40px] items-center text-sm text-accent">
                        All work <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {work.map((p) => <ProjectCard key={p.slug} project={p} />)}
                    </div>
                  </section>
                </Reveal>
              )}

              {s.faqs.length > 0 && (
                <Reveal>
                  <section className="border-t border-surface-border pt-8">
                    <div className="mb-6 flex items-baseline gap-4">
                      <span className="index-number">04</span>
                      <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">Questions</h2>
                    </div>
                    <FAQ items={s.faqs} />
                  </section>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title={`Need ${s.title.toLowerCase()} that actually ships?`}
        desc="Send the problem, the constraints and the outcome you need. MS Bee replies directly."
      />
    </>
  );
}
