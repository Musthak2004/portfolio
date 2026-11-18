import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import TiltCard, { TiltLayer } from "@/components/motion/TiltCard";
import { StatusBadge } from "@/components/ui/primitives";
import type { Product } from "@/types";

function ProductPreview({ product }: { product: Product }) {
  if (!product.image) {
    return (
      <div className="panel flex aspect-[16/10] items-center justify-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">{product.name}</span>
      </div>
    );
  }

  return (
    <TiltCard variant="media" className="w-full">
      <div className="shot-frame">
        <div className="shot-bar" aria-hidden="true">
          <span /><span /><span />
          <p className="ml-3 truncate font-mono text-[11px] text-ink-dim">
            {product.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </p>
          <p className="ml-auto hidden font-mono text-[10px] text-emerald-400 sm:block">● LIVE</p>
        </div>
        <TiltLayer strength={0.45}>
          <img
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            loading="lazy"
            decoding="async"
            className="block w-full bg-[#0b0b13]"
          />
        </TiltLayer>
      </div>
      <p className="media-caption mt-3">{product.image.caption ?? "Captured from the live product"}</p>
    </TiltCard>
  );
}

/** Products as real products — independent from client work, shown with real captures. */
export default function ProductsShowcase({ products }: { products: Product[] }) {
  return (
    <section aria-labelledby="home-products-heading" className="section section-rule">
      <div className="shell">
        <Reveal>
          <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-label">
                <span className="text-accent">03</span> Products
              </p>
              <h2 id="home-products-heading" className="section-heading">
                Built for MS Bee first.
              </h2>
              <p className="section-desc mt-4">
                Internal products designed, built and launched in public — separate
                from client work, and live to use today.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/products" className="link-underline inline-flex min-h-[44px] items-center text-sm font-medium text-accent">
                All products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {products.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <article className="grid items-center gap-8 border-t border-surface-border pt-8 lg:grid-cols-12 lg:gap-12 lg:pt-10">
                  <div className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}>
                    <div className="mb-5 flex flex-wrap items-center gap-2">
                      <span className="eyebrow-pill">{p.category}</span>
                      <StatusBadge label={p.status} tone={p.status === "Live" ? "green" : "amber"} />
                    </div>
                    <h3 className="text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-[15px]">{p.description}</p>

                    <dl className="mt-7 border-t border-surface-border pt-5">
                      <dt className="meta-label">Problem</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.problem}</dd>
                    </dl>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="tag">{f}</li>
                      ))}
                    </ul>

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
                      <Link href={`/products/${p.slug}`} className="btn-outline min-h-[48px] justify-center">
                        Product Details
                      </Link>
                    </div>
                  </div>
                  <div className={`lg:col-span-7 ${flipped ? "lg:order-1" : ""}`}>
                    <ProductPreview product={p} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
