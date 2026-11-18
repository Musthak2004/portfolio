import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, StatusBadge, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { labs, getLab, getArticle } from "@/content/labs-insights";
import { getProduct } from "@/content/products";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export function generateStaticParams() {
  return labs.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const l = getLab(params.slug);
  if (!l) return {};
  return pageMeta({
    title: `${l.title} — lab`,
    description: l.idea,
    path: `/labs/${l.slug}`,
  });
}

export default function LabPage({ params }: { params: { slug: string } }) {
  const l = getLab(params.slug);
  if (!l) notFound();
  const product = l.relatedProduct ? getProduct(l.relatedProduct) : undefined;
  const article = l.relatedArticle ? getArticle(l.relatedArticle) : undefined;
  const tone = l.status === "Live" ? "green" : l.status === "Archived" ? "dim" : "amber";
  const crumbs = [{ label: "Labs", href: "/labs" }, { label: l.title }];

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: `${l.title} — MS Bee Labs`,
            description: l.idea,
            path: `/labs/${l.slug}`,
            breadcrumbId: `${siteCanonical(`/labs/${l.slug}`)}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, ...crumbs], path: `/labs/${l.slug}` }),
        ])}
      />

      <header className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="page-hero-glow" aria-hidden="true" />
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <StatusBadge label={l.status} tone={tone} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
                Updated {l.updatedAt}
              </span>
            </div>
            <h1 className="text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink text-balance">
              {l.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-muted md:text-base">{l.idea}</p>
            {l.demoUrl && (
              <a
                href={l.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-sweep mt-8 min-h-[48px]"
              >
                Watch the demo <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
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
                    <p className="meta-label">Experiment record</p>
                  </div>
                  <dl className="divide-y divide-surface-border">
                    {[
                      ["Status", l.status],
                      ["Updated", l.updatedAt],
                      ["Type", "Internal R&D"],
                      ["Output", product ? `Product — ${product.name}` : article ? "Written lesson" : "Prototype"],
                    ].map(([label, value]) => (
                      <div key={label} className="px-5 py-4">
                        <dt className="meta-label">{label}</dt>
                        <dd className="mt-1.5 text-sm text-ink">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {(product || article) && (
                  <div className="mt-4 border border-surface-border bg-surface p-5">
                    <p className="meta-label">Continue</p>
                    <div className="mt-3 space-y-3">
                      {product && (
                        <Link href={`/products/${product.slug}`} className="block text-sm font-medium text-ink transition-colors hover:text-accent-hover">
                          Product: {product.name} <span aria-hidden="true">→</span>
                        </Link>
                      )}
                      {article && (
                        <Link href={`/insights/${article.slug}`} className="block text-sm font-medium text-ink transition-colors hover:text-accent-hover">
                          Article: {article.title} <span aria-hidden="true">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            <div className="space-y-12 lg:col-span-8">
              <Reveal>
                <section className="grid gap-5 border-t border-surface-border pt-8 sm:grid-cols-2">
                  <div className="border border-surface-border bg-surface p-6">
                    <p className="meta-label">Problem</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{l.problem}</p>
                  </div>
                  <div className="border border-accent/25 bg-accent/[0.04] p-6">
                    <p className="meta-label text-accent/80">Idea</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{l.idea}</p>
                  </div>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">01</span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">What the test taught</h2>
                  </div>
                  <ul className="divide-y divide-surface-border border-y border-surface-border">
                    {l.learned.map((x, i) => (
                      <li key={x} className="flex gap-4 py-4">
                        <span className="font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                        <p className="text-sm leading-relaxed text-ink-muted">{x}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
                    Labs entries are internal experiments, not client engagements. Nothing
                    here is presented as a shipped client result — only as a question that
                    was tested and what it produced.
                  </p>
                </section>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
