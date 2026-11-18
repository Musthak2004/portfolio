import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards";
import { articles, getArticle } from "@/content/labs-insights";
import { getSolution } from "@/content/solutions";
import { getProject } from "@/content/work";
import { getProduct } from "@/content/products";
import { articleNode, breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) return {};
  return pageMeta({
    title: a.title,
    description: a.excerpt,
    path: `/insights/${a.slug}`,
    type: "article",
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const solution = a.relatedSolution ? getSolution(a.relatedSolution) : undefined;
  const work = a.relatedWork ? getProject(a.relatedWork) : undefined;
  const product = a.relatedProduct ? getProduct(a.relatedProduct) : undefined;
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  const crumbs = [{ label: "Insights", href: "/insights" }, { label: a.title }];

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: a.title,
            description: a.excerpt,
            path: `/insights/${a.slug}`,
            breadcrumbId: `${siteCanonical(`/insights/${a.slug}`)}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, ...crumbs], path: `/insights/${a.slug}` }),
          articleNode(a),
        ])}
      />

      <header className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="page-hero-glow" aria-hidden="true" />
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="relative z-10 max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="eyebrow-pill">{a.category}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                {a.readingMinutes} min read
              </span>
            </div>
            <h1 className="text-[clamp(2.1rem,5.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink text-balance">
              {a.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-muted md:text-lg">
              {a.excerpt}
            </p>
            <dl className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-surface-border pt-5">
              {[
                ["Author", a.author],
                ["Published", a.publishedAt],
                ["Updated", a.updatedAt],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="meta-label">{k}</dt>
                  <dd className="mt-1 text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </header>

      <section className="section-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="border border-surface-border bg-surface p-6">
                  <p className="meta-label">In this note</p>
                  <ul className="mt-3 space-y-2">
                    {a.tags.map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm text-ink-muted">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-surface-border pt-4">
                    <p className="meta-label">Written by</p>
                    <p className="mt-2 text-sm text-ink">{a.author}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      Founder of MS Bee. Building software, automation and products in public.
                    </p>
                  </div>
                </div>

                {(solution || work || product) && (
                  <div className="mt-4 border border-surface-border bg-surface p-6">
                    <p className="meta-label">Connected work</p>
                    <div className="mt-3 space-y-3">
                      {solution && (
                        <Link
                          href={`/solutions/${solution.slug}`}
                          className="block text-sm font-medium text-ink transition-colors hover:text-accent-hover"
                        >
                          {solution.title} <span aria-hidden="true">→</span>
                        </Link>
                      )}
                      {work && (
                        <Link
                          href={`/work/${work.slug}`}
                          className="block text-sm font-medium text-ink transition-colors hover:text-accent-hover"
                        >
                          {work.title} <span aria-hidden="true">→</span>
                        </Link>
                      )}
                      {product && (
                        <Link
                          href={`/products/${product.slug}`}
                          className="block text-sm font-medium text-ink transition-colors hover:text-accent-hover"
                        >
                          {product.name} <span aria-hidden="true">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            <div className="lg:col-span-8">
              <Reveal>
                <div className="prose-editorial border-t border-surface-border pt-8">
                  {a.body.map((para, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-[17px] md:text-[19px] leading-[1.8] text-ink"
                          : undefined
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>

              <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-surface-border pt-7">
                <span className="meta-label mr-2">Tags</span>
                {a.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {more.length > 0 && (
        <section className="section section-rule">
          <Container>
            <Reveal variant="section">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-label mb-3">Keep reading</p>
                  <h2 className="section-heading !text-2xl md:!text-3xl">More notes</h2>
                </div>
                <Link href="/insights" className="link-underline inline-flex min-h-[44px] items-center text-sm font-medium text-accent">
                  All insights <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {more.map((x, i) => (
                <Reveal key={x.slug} delay={i}>
                  <ArticleCard article={x} />
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
