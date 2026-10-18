import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { SolutionCard } from "@/components/cards";
import { solutions } from "@/content/solutions";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Solutions",
  description:
    "Web development, mobile apps, AI automation, custom software, SEO and technical content — outcome-first services by MS Bee, each with the problem stated before the technology.",
  path: "/solutions",
});

export default function SolutionsIndex() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Solutions — MS Bee",
            description:
              "Web development, mobile apps, AI automation, custom software, SEO and technical content by MS Bee.",
            path: "/solutions",
            breadcrumbId: `${siteCanonical("/solutions")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Solutions" }], path: "/solutions" }),
        ])}
      />
      <PageHero
        eyebrow="ms-bee solutions"
        title="Solutions"
        desc="Outcome-first services. Every solution leads with the problem and the transformation — technology comes after."
      />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i % 2}>
                <SolutionCard solution={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
