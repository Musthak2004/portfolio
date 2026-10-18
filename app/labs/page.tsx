import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { LabCard } from "@/components/cards";
import { labs } from "@/content/labs-insights";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Labs",
  description:
    "Experiments and R&D at MS Bee — AI prototypes, automation tests, micro-SaaS experiments. Building a software company from zero, in public.",
  path: "/labs",
});

export default function LabsIndex() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Labs — MS Bee",
            description:
              "Experiments and R&D at MS Bee — AI prototypes, automation tests and micro-SaaS experiments.",
            path: "/labs",
            breadcrumbId: `${siteCanonical("/labs")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Labs" }], path: "/labs" }),
        ])}
      />
      <PageHero
        eyebrow="ms-bee labs"
        title="Labs"
        desc="Experimentation and R&D — prototypes, tests and lessons. This is where the company's future is explored."
      />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {labs.map((l, i) => (
              <Reveal key={l.slug} delay={i % 3}>
                <LabCard lab={l} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
