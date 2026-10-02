import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import { ArticleCard } from "@/components/cards";
import { articles } from "@/content/labs-insights";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Insights — MS Bee",
  description: "Notes on AI, automation, software engineering and building a software company from zero.",
  path: "/insights",
});

export default function InsightsIndex() {
  return (
    <>
      <PageHero eyebrow="ms-bee insights" title="Insights" desc="Practical notes — automation, software, and the founder journey. No fluff." />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
