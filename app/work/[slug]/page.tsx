import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, StatusBadge, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import TiltCard, { TiltLayer } from "@/components/motion/TiltCard";
import { ProjectCard } from "@/components/cards";
import { projects, getProject, getRelatedProjects, projectTypeLabels } from "@/content/work";
import { getSolution } from "@/content/solutions";
import { breadcrumbNode, graph, projectNode, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

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

  const crumbs = [{ label: "Work", href: "/work" }, { label: p.title }];

  // Sequential numbering so extra case-study sections and the gallery slot in
  // without renumbering the standard blocks by hand.
  const numbered: Numbered[] = [];
  let seq = 0;
  const num = () => String(++seq).padStart(2, "0");

  numbered.push({ n: num(), heading: "Project overview", body: p.description });
  numbered.push({
    n: num(),
    heading: "Client / industry",
    body: `${projectTypeLabels[p.type]} · ${p.industry}`,
  });
  numbered.push({ n: num(), heading: "Business context", body: p.problem });
  numbered.push({ n: num(), heading: "Project objective", body: p.objective });
  numbered.push({ n: num(), heading: "Solution", body: p.solution });
  for (const section of p.caseStudy ?? []) {
    numbered.push({ n: num(), heading: section.heading, body: section.body, bullets: section.bullets });
  }
  const galleryNumber = gallery.length ? num() : null;
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
  const liveNumber = url ? num() : null;

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

      <div className="pt-28 md:pt-36 pb-10">
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <StatusBadge
              label={p.status}
              tone={p.status === "Live" ? (p.type === "client" ? "green" : "accent") : "amber"}
            />
            <span className="font-mono text-[11px] text-accent">{p.category.join(" · ")}</span>
            <span className="font-mono text-[11px] text-ink-dim">{p.industry}</span>
            <span className="font-mono text-[11px] text-ink-dim border border-surface-border px-2 py-0.5">
              {projectTypeLabels[p.type]}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4">{p.title}</h1>
          <p className="text-ink-muted text-base md:text-lg max-w-2xl leading-relaxed">{p.description}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sweep mt-8 min-h-[48px]"
            >
              {p.liveUrl ? "Visit live project" : "Watch the demo"}
              <span aria-hidden="true">→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </Container>
      </div>

      <section className="py-12">
        <Container>
          <div className="max-w-3xl space-y-8">
            {numbered.map((s) => (
              <Reveal key={s.n}>
                <div className="card p-6 md:p-8">
                  <p className="font-mono text-xs text-accent mb-3">
                    {s.n} — {s.heading}
                  </p>
                  {s.body && <p className="text-ink-muted leading-relaxed">{s.body}</p>}
                  {s.bullets && (
                    <ul className={`space-y-2 ${s.body ? "mt-4" : ""}`}>
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-ink-muted">
                          <span className="text-accent" aria-hidden="true">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}

            {liveNumber && url && (
              <Reveal>
                <div className="card p-6 md:p-8 border-accent/25">
                  <p className="font-mono text-xs text-accent mb-3">{liveNumber} — Live project</p>
                  <p className="text-ink-muted leading-relaxed mb-4">
                    The build is in production and publicly reachable. MS Bee links to it directly rather
                    than describing it second-hand.
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px] break-all"
                  >
                    {p.liveUrl ?? p.demoUrl}
                    <span className="arrow" aria-hidden="true">→</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          {gallery.length > 0 && (
            <div className="mt-16">
              <Reveal variant="section">
                <h2 className="section-heading mb-3 !text-2xl md:!text-3xl">
                  {galleryNumber} — Visual gallery
                </h2>
                <p className="text-ink-muted mb-8 max-w-2xl">
                  Captured directly from the live project. No mock-ups, no invented interfaces.
                </p>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {gallery.map((shot, i) => (
                  <Reveal
                    key={shot.src}
                    delay={i % 2}
                    variant="featured"
                    className={shot.span === "full" ? "md:col-span-2" : ""}
                  >
                    <TiltCard variant="media" className="h-full">
                      <figure className="shot-frame h-full flex flex-col">
                        <div className="shot-bar" aria-hidden="true">
                          <span /><span /><span />
                          <p className="ml-3 font-mono text-[11px] text-ink-dim truncate">
                            {p.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </p>
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
                        <figcaption className="px-4 py-3 border-t border-surface-border font-mono text-[11px] text-ink-dim">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {relatedSolution && (
            <Reveal>
              <div className="mt-16 card p-6 md:p-8 border-accent/25 max-w-3xl">
                <p className="font-mono text-xs text-accent mb-3">Related solution</p>
                <Link
                  href={`/solutions/${relatedSolution.slug}`}
                  className="font-semibold text-ink hover:text-accent-hover"
                >
                  {relatedSolution.title} <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <p className="text-sm text-ink-muted mt-2">{relatedSolution.tagline}</p>
              </div>
            </Reveal>
          )}

          {next.length > 0 && (
            <div className="mt-16">
              <Reveal variant="section">
                <h2 className="section-heading mb-8 !text-2xl">Next project</h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {next.map((n, i) => (
                  <Reveal key={n.slug} delay={i}>
                    <ProjectCard project={n} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
