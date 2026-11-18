import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, StatusBadge, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import TiltCard, { TiltLayer } from "@/components/motion/TiltCard";
import { ProjectCard, WorkThumb } from "@/components/cards";
import { projects, getProject, getRelatedProjects, projectTypeLabels } from "@/content/work";
import { getSolution } from "@/content/solutions";
import { breadcrumbNode, graph, projectNode, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";
import { projectGradient } from "@/lib/workVisual";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.title} — case study`,
    description: p.description,
    path: `/work/${p.slug}`,
    ogImage: `/work/${p.slug}/opengraph-image`,
    ogImageAlt: `${p.title} — ${p.industry} case study by MS Bee`,
  });
}

type Numbered = { n: string; heading: string; body?: string; bullets?: string[] };

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const relatedSolution = p.relatedSolution ? getSolution(p.relatedSolution) : undefined;
  const next = getRelatedProjects(p.slug, 2);
  const url = p.liveUrl ?? p.demoUrl;
  const gallery = p.gallery ?? [];
  const heroShot = gallery[0];
  const restGallery = gallery.slice(1);
  const wideGallery = restGallery.filter((shot) => shot.width >= shot.height);
  const portraitGallery = restGallery.filter((shot) => shot.width < shot.height);
  const crumbs = [{ label: "Work", href: "/work" }, { label: p.title }];

  const numbered: Numbered[] = [];
  let seq = 0;
  const num = () => String(++seq).padStart(2, "0");

  numbered.push({ n: num(), heading: "Business context", body: p.problem });
  numbered.push({ n: num(), heading: "Project objective", body: p.objective });
  numbered.push({ n: num(), heading: "Solution", body: p.solution });
  for (const section of p.caseStudy ?? []) {
    numbered.push({ n: num(), heading: section.heading, body: section.body, bullets: section.bullets });
  }
  numbered.push({ n: num(), heading: "Key features", bullets: p.features });
  numbered.push({ n: num(), heading: "Technology", bullets: p.technologies });
  numbered.push({
    n: num(),
    heading: "Outcome",
    body:
      p.type === "client"
        ? "Shipped and in production at the client's own domain. Qualitative outcome only — MS Bee does not publish unverified metrics, timelines or client figures."
        : p.type === "demo"
          ? "Deployed as a public self-initiated concept build — not client work. Shown live rather than described as a mock-up."
          : "Running as an internal MS Bee system and demonstrated publicly rather than described second-hand.",
  });

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: `${p.title} — case study`,
            description: p.description,
            path: `/work/${p.slug}`,
            breadcrumbId: `${siteCanonical(`/work/${p.slug}`)}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, ...crumbs], path: `/work/${p.slug}` }),
          projectNode(p),
        ])}
      />

      <header className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="page-hero-glow" aria-hidden="true" />
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <StatusBadge
                  label={p.status}
                  tone={p.status === "Live" ? (p.type === "client" ? "green" : "accent") : "amber"}
                />
                <span className="eyebrow-pill">{projectTypeLabels[p.type]}</span>
              </div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {p.category.join(" · ")}
              </p>
              <h1 className="text-[clamp(2.2rem,5.4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink text-balance">
                {p.title}
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
                {p.description}
              </p>
              <p className="mt-4 font-mono text-[11px] text-ink-dim">{p.industry}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-sweep min-h-[48px] justify-center"
                  >
                    {p.liveUrl ? "Visit live project" : "Watch the demo"}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
                {relatedSolution && (
                  <Link href={`/solutions/${relatedSolution.slug}`} className="btn-outline min-h-[48px] justify-center">
                    Related solution
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              {heroShot ? (
                <TiltCard variant="media">
                  <div className="shot-frame">
                    <div className="shot-bar" aria-hidden="true">
                      <span /><span /><span />
                      <p className="ml-3 truncate font-mono text-[11px] text-ink-dim">
                        {p.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? p.slug}
                      </p>
                      <p className="ml-auto hidden font-mono text-[10px] text-emerald-400 sm:block">● {p.status.toUpperCase()}</p>
                    </div>
                    <TiltLayer strength={0.4}>
                      <img
                        src={heroShot.src}
                        alt={heroShot.alt}
                        width={heroShot.width}
                        height={heroShot.height}
                        loading="eager"
                        decoding="async"
                        className="block w-full bg-[#0b0b13]"
                      />
                    </TiltLayer>
                  </div>
                  <p className="media-caption mt-3">{heroShot.caption}</p>
                </TiltCard>
              ) : (
                <div className={`border border-surface-border bg-gradient-to-br ${projectGradient(p.slug)}`}>
                  <WorkThumb project={p} className="min-h-[300px]" />
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>

      <section className="section-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="border border-surface-border bg-surface">
                  <div className="border-b border-surface-border px-5 py-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">Project record</p>
                  </div>
                  <dl className="divide-y divide-surface-border">
                    {[
                      ["Type", projectTypeLabels[p.type]],
                      ["Industry", p.industry],
                      ["Status", p.status],
                      ["Published", p.publishedAt],
                      ["Stack", p.technologies.join(" · ")],
                    ].map(([label, value]) => (
                      <div key={label} className="px-5 py-4">
                        <dt className="meta-label">{label}</dt>
                        <dd className="mt-1.5 text-sm leading-snug text-ink">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  {url && (
                    <div className="border-t border-surface-border px-5 py-4">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-drift inline-flex min-h-[40px] items-center gap-2 break-all text-sm font-medium text-accent"
                      >
                        {p.liveUrl ? "Open live site" : "Open demo"}
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                  )}
                </div>

                {relatedSolution && (
                  <div className="mt-4 border border-surface-border bg-surface p-5">
                    <p className="meta-label">Service used</p>
                    <Link
                      href={`/solutions/${relatedSolution.slug}`}
                      className="mt-2 block text-sm font-medium text-ink transition-colors hover:text-accent-hover"
                    >
                      {relatedSolution.title} <span aria-hidden="true">→</span>
                    </Link>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">{relatedSolution.tagline}</p>
                  </div>
                )}
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="space-y-10 md:space-y-12">
                {numbered.map((s) => (
                  <Reveal key={s.n}>
                    <section className="grid gap-4 border-t border-surface-border pt-7 md:grid-cols-12">
                      <div className="md:col-span-3">
                        <span className="index-number">{s.n}</span>
                        <h2 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink md:text-xl">
                          {s.heading}
                        </h2>
                      </div>
                      <div className="md:col-span-9">
                        {s.body && <p className="text-[15px] leading-[1.8] text-ink-muted">{s.body}</p>}
                        {s.bullets && (
                          <ul className={`grid gap-2 sm:grid-cols-2 ${s.body ? "mt-5" : ""}`}>
                            {s.bullets.map((b) => (
                              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {restGallery.length > 0 && (
            <div className="mt-20 border-t border-surface-border pt-10">
              <Reveal variant="section">
                <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="meta-label">Visual record</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-ink">
                      Captured from the live build
                    </h2>
                  </div>
                  <span className="font-mono text-[10px] text-ink-dim">
                    {String(restGallery.length).padStart(2, "0")} frames
                  </span>
                </div>
                <p className="mb-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  No mock-ups and no invented interfaces. Every frame is captured directly from the shipped project.
                </p>
              </Reveal>
                  {wideGallery.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                      {wideGallery.map((shot, i) => (
                        <Reveal
                          key={shot.src}
                          delay={i % 3}
                          variant="featured"
                          className={shot.span === "full" ? "sm:col-span-2 lg:col-span-3" : ""}
                        >
                          <TiltCard variant="media" className="h-full">
                            <figure className="shot-frame flex h-full flex-col">
                              <div className="shot-bar" aria-hidden="true">
                                <span /><span /><span />
                                <p className="ml-3 truncate font-mono text-[11px] text-ink-dim">
                                  {p.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                </p>
                              </div>
                              <TiltLayer
                                strength={0.45}
                                className={`overflow-hidden ${shot.span === "full" ? "aspect-[16/9]" : "aspect-[16/10]"}`}
                              >
                                <img
                                  src={shot.src}
                                  alt={shot.alt}
                                  width={shot.width}
                                  height={shot.height}
                                  loading="lazy"
                                  decoding="async"
                                  className="block h-full w-full bg-[#0b0b13] object-cover object-top"
                                />
                              </TiltLayer>
                              <figcaption className="border-t border-surface-border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
                                {shot.caption}
                              </figcaption>
                            </figure>
                          </TiltCard>
                        </Reveal>
                      ))}
                    </div>
                  )}

                  {portraitGallery.map((shot) => (
                    <Reveal key={shot.src} className="mt-4 md:mt-6">
                      <div className="tech-module grid gap-7 p-5 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center md:gap-10 md:p-8 lg:grid-cols-[240px_minmax(0,1fr)_minmax(180px,0.55fr)]">
                        <div className="mx-auto w-full max-w-[240px] overflow-hidden border border-surface-border bg-[#08080E] sm:mx-0">
                          <div className="shot-bar" aria-hidden="true">
                            <span /><span /><span />
                          </div>
                          <img
                            src={shot.src}
                            alt={shot.alt}
                            width={shot.width}
                            height={shot.height}
                            loading="lazy"
                            decoding="async"
                            className="block h-auto w-full"
                          />
                        </div>
                        <div>
                          <p className="meta-label">Responsive pass</p>
                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-ink">
                            {shot.caption}
                          </h3>
                          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                            The same page at a {shot.width}px viewport — navigation, content and primary actions
                            reflow instead of being cropped from the desktop layout.
                          </p>
                          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                            Live capture · {shot.width} × {shot.height}
                          </p>
                        </div>
                        <dl className="hidden gap-5 border-l border-surface-border pl-8 lg:grid">
                          <div>
                            <dt className="meta-label">Viewport</dt>
                            <dd className="mt-1 font-mono text-sm text-ink">{shot.width}px</dd>
                          </div>
                          <div>
                            <dt className="meta-label">Capture</dt>
                            <dd className="mt-1 font-mono text-sm text-ink">{shot.width} × {shot.height}</dd>
                          </div>
                          {url && (
                            <div>
                              <dt className="meta-label">Source</dt>
                              <dd className="mt-1">
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex min-h-[32px] items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover"
                                >
                                  Live site <span aria-hidden="true">↗</span>
                                  <span className="sr-only"> (opens in a new tab)</span>
                                </a>
                              </dd>
                            </div>
                          )}
                        </dl>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
        </Container>
      </section>

      {next.length > 0 && (
        <section className="section section-rule">
          <Container>
            <Reveal variant="section">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-label mb-3">Next</p>
                  <h2 className="section-heading !text-2xl md:!text-3xl">Related builds</h2>
                </div>
                <Link href="/work" className="link-underline inline-flex min-h-[44px] items-center text-sm font-medium text-accent">
                  All work <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {next.map((n, i) => (
                <Reveal key={n.slug} delay={i}>
                  <ProjectCard project={n} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
