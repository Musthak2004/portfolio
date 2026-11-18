import { CTASection, PageHero } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { ProductCard } from "@/components/cards";
import { products } from "@/content/products";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Products",
  description:
    "Micro-SaaS, developer and digital products built and launched by MS Bee — separate from client services.",
  path: "/products",
});

export default function ProductsIndex() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Products — MS Bee",
            description: "Micro-SaaS, developer and digital products built and launched by MS Bee.",
            path: "/products",
            breadcrumbId: `${siteCanonical("/products")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Products" }], path: "/products" }),
        ])}
      />
      <PageHero
        eyebrow="Products"
        index="01"
        title="Tools MS Bee uses itself."
        desc="Internal products designed, built and launched by MS Bee — separate from client work. Each one ships, and each one is live today."
        breadcrumbs={[{ label: "Products" }]}
        meta={[
          { label: "Shipped", value: `${products.length} products` },
          { label: "Status", value: "Live" },
          { label: "Model", value: "Micro-SaaS + digital" },
          { label: "Built by", value: "MS Bee" },
        ]}
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-4 lg:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i}>
                <ProductCard product={p} featured />
              </Reveal>
            ))}
          </div>

          <Reveal variant="section">
            <div className="mt-16 grid gap-8 border-t border-surface-border pt-10 md:grid-cols-3">
              <div>
                <p className="meta-label">Why products</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Products force sharper scoping than client work. One workflow, one
                  user, one clear outcome — then ship it and learn from real usage.
                </p>
              </div>
              <div>
                <p className="meta-label">How they are built</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Same stack and standards as client systems: Next.js, TypeScript,
                  structured content and honest measurement. No vanity dashboards.
                </p>
              </div>
              <div>
                <p className="meta-label">What is next</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Products are documented in Labs as they are tested. Experiments
                  stay public whether they work or not.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Need something custom instead?"
        desc="Products are off-the-shelf. For a system shaped around your workflow, start a project."
      />
    </>
  );
}
