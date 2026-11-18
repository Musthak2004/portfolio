import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, StatusBadge, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import TiltCard, { TiltLayer } from "@/components/motion/TiltCard";
import { products, getProduct } from "@/content/products";
import { breadcrumbNode, graph, productNode, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name} — product`,
    description: p.description,
    path: `/products/${p.slug}`,
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const crumbs = [{ label: "Products", href: "/products" }, { label: p.name }];

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: `${p.name} — MS Bee`,
            description: p.description,
            path: `/products/${p.slug}`,
            breadcrumbId: `${siteCanonical(`/products/${p.slug}`)}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, ...crumbs], path: `/products/${p.slug}` }),
          productNode(p),
        ])}
      />

      <header className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="page-hero-glow" aria-hidden="true" />
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="eyebrow-pill">{p.category}</span>
                <StatusBadge label={p.status} tone={p.status === "Live" ? "green" : "amber"} />
              </div>
              <h1 className="text-[clamp(2.6rem,6.4vw,5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-ink">
                {p.name}
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">{p.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sweep min-h-[48px] justify-center"
                >
                  {p.cta} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <Link href="/products" className="btn-outline min-h-[48px] justify-center">
                  All products
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              {p.image ? (
                <TiltCard variant="media">
                  <div className="shot-frame">
                    <div className="shot-bar" aria-hidden="true">
                      <span /><span /><span />
                      <p className="ml-3 truncate font-mono text-[11px] text-ink-dim">
                        {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </p>
                    </div>
                    <TiltLayer strength={0.4}>
                      <img
                        src={p.image.src}
                        alt={p.image.alt}
                        width={p.image.width}
                        height={p.image.height}
                        loading="eager"
                        decoding="async"
                        className="block w-full bg-[#0b0b13]"
                      />
                    </TiltLayer>
                  </div>
                  <p className="media-caption mt-3">{p.image.caption ?? "Captured from the live product"}</p>
                </TiltCard>
              ) : (
                <div className="panel flex aspect-[16/10] items-center justify-center">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">{p.name}</span>
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
                    <p className="meta-label">Product record</p>
                  </div>
                  <dl className="divide-y divide-surface-border">
                    {[
                      ["Status", p.status],
                      ["Category", p.category],
                      ["Built for", p.targetUser],
                      ["Access", p.pricing],
                    ].map(([label, value]) => (
                      <div key={label} className="px-5 py-4">
                        <dt className="meta-label">{label}</dt>
                        <dd className="mt-1.5 text-sm leading-snug text-ink">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="border-t border-surface-border px-5 py-4">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-drift inline-flex min-h-[40px] items-center gap-2 break-all text-sm font-medium text-accent"
                    >
                      Open product <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className="space-y-12 lg:col-span-8">
              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">01</span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">The problem</h2>
                  </div>
                  <p className="max-w-2xl text-[15px] leading-[1.8] text-ink-muted">{p.problem}</p>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">02</span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">Core features</h2>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 border-b border-surface-border/70 py-3 text-sm text-ink-muted">
                        <span className="text-accent" aria-hidden="true">▹</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">03</span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">How it works</h2>
                  </div>
                  <ol className="grid gap-3 sm:grid-cols-2">
                    {p.workflow.map((w, i) => (
                      <li key={w} className="border border-surface-border bg-surface p-4">
                        <span className="font-mono text-[10px] text-accent">0{i + 1}</span>
                        <p className="mt-2 text-sm text-ink">{w}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">04</span>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">Access &amp; changelog</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="border border-surface-border bg-surface p-5">
                      <p className="meta-label">Pricing / access</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.pricing}</p>
                    </div>
                    <div className="border border-surface-border bg-surface p-5">
                      <p className="meta-label">Changelog</p>
                      {p.changelog.map((c) => (
                        <p key={c.version} className="mt-2 text-sm leading-relaxed text-ink-muted">
                          <span className="font-mono text-accent">{c.version}</span> — {c.note}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        primary={{ label: p.cta, href: p.url, external: true }}
        secondary={{ label: "All Products", href: "/products" }}
        title={`Need something ${p.name} does not do?`}
        desc="Products are off-the-shelf. For a custom system, send a project brief."
      />
    </>
  );
}
