import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import { SolutionCard } from "@/components/cards";
import { solutions } from "@/content/solutions";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Solutions — MS Bee",
  description: "Web development, mobile apps, AI automation, custom software, SEO and technical content — outcome-first services by MS Bee.",
  path: "/solutions",
});

export default function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="ms-bee solutions"
        title="Solutions"
        desc="Outcome-first services. Every solution leads with the problem and the transformation — technology comes after."
      />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((s) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
