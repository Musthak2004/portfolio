import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import { ProductCard } from "@/components/cards";
import { products } from "@/content/products";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Products — MS Bee",
  description: "Micro-SaaS, developer and digital products built and launched by MS Bee — separate from client services.",
  path: "/products",
});

export default function ProductsIndex() {
  return (
    <>
      <PageHero eyebrow="ms-bee products" title="Products" desc="Internal products — designed, built and launched by MS Bee. Not client work." />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 gap-4">
            {products.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </Container>
      </section>
      <CTASection title="Need something custom instead?" desc="Products are off-the-shelf. For a custom build, start a project." />
    </>
  );
}
