import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { StatusBadge } from "@/components/ui/primitives";
import type { Product } from "@/types";

function ProductPreview({ product, flip }: { product: Product; flip?: boolean }) {
  const isSched = product.slug === "cleansched";
  const rows = isSched
    ? [
        { t: "Deep clean - Tue 10:00", s: "Paid", c: "text-emerald-400" },
        { t: "Recurring - Fri 14:00", s: "Unpaid", c: "text-amber-400" },
        { t: "Reminder sent - 24h before", s: "Auto", c: "text-accent" },
      ]
    : [
        { t: "devshield/ - starter kit", s: "Kit", c: "text-accent" },
        { t: "version: free - live", s: "Live", c: "text-emerald-400" },
        { t: "contents: live listing", s: "Docs", c: "text-ink-dim" },
      ];
  const host = isSched ? "sparkleshine.de5.net" : "gumroad.com - devshield";
  return (
    <div className="product-stage">
      <div className="product-tilt border border-surface-border bg-surface">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surface-border">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-ink-dim truncate">{host}</span>
          <span className="ml-auto" aria-hidden="true">
            <StatusBadge label={product.status} tone="green" />
          </span>
        </div>
        <div className="p-5 space-y-2.5">
          <p className="font-mono text-xs text-ink mb-1">
            {product.name} <span className="text-ink-dim">/ live product</span>
          </p>
          {rows.map((r) => (
            <div key={r.t} className="flex items-center justify-between border border-surface-border bg-surface-light px-3 py-2.5">
              <p className="text-xs text-ink-muted truncate">{r.t}</p>
              <p className="font-mono text-xs text-ink-dim">{r.s}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="font-mono text-xs text-ink-dim mt-3 text-center" aria-hidden="true">
        // live product preview {flip ? "[02]" : "[01]"}
      </p>
    </div>
  );
}

/** Products as real products - perspective UI previews, independent from client work. */
export default function ProductsShowcase({ products }: { products: Product[] }) {
  return (
    <section aria-labelledby="home-products-heading" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="section-label">/products</p>
            <h2 id="home-products-heading" className="section-heading mb-4">Do you build your own products?</h2>
            <p className="section-desc">Yes - separate from client work. Designed, built and launched by MS Bee.</p>
          </div>
        </Reveal>

        <div className="space-y-14 md:space-y-20">
          {products.map((p, i) => {
            const flipped = i % 2 === 1;
            const textCls = flipped ? "lg:col-span-5 lg:order-2" : "lg:col-span-5";
            const visualCls = flipped ? "lg:col-span-7 lg:order-1" : "lg:col-span-7";
            const detailsHref = "/products/" + p.slug;
            return (
              <Reveal key={p.slug}>
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className={textCls}>
                    <span className="font-mono text-[10px] tracking-[0.15em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1">
                      {p.category.toUpperCase()}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-ink mt-4 mb-2">{p.name}</h3>
                    <p className="font-mono text-xs text-ink-dim mb-3">Problem - {p.problem}</p>
                    <p className="text-ink-muted leading-relaxed mb-6">{p.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sweep justify-center min-h-[48px]">
                        {p.cta} <span aria-hidden="true">&rarr;</span>
                      </a>
                      <Link href={detailsHref} className="btn-outline justify-center min-h-[48px]">
                        Product Details
                      </Link>
                    </div>
                  </div>
                  <div className={visualCls}>
                    <ProductPreview product={p} flip={flipped} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
