import { Container, PageHero, CTASection } from "@/components/ui/primitives";
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
            description:
              "Micro-SaaS, developer and digital products built and launched by MS Bee.",
            path: "/products",
            breadcrumbId: `${siteCanonical("/products")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Products" }], path: "/products" }),
        ])}
      />
      <PageHero
        eyebrow="ms-bee products"
        title="Products"
        desc="Internal products — designed, built and launched by MS Bee. Not client work."
      />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 gap-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i % 2}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title="Need something custom instead?" desc="Products are off-the-shelf. For a custom build, start a project." />
    </>
  );
}
