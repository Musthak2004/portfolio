import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards";
import { articles } from "@/content/labs-insights";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Insights",
  description:
    "Notes on AI, automation, software engineering and building a software company from zero.",
  path: "/insights",
});

export default function InsightsIndex() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Insights — MS Bee",
            description:
              "Notes on AI, automation, software engineering and building a software company from zero.",
            path: "/insights",
            breadcrumbId: `${siteCanonical("/insights")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Insights" }], path: "/insights" }),
        ])}
      />
      <PageHero
        eyebrow="ms-bee insights"
        title="Insights"
        desc="Practical notes — automation, software, and the founder journey. No fluff."
      />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i % 3}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
