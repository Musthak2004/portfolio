import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import { LabCard } from "@/components/cards";
import { labs } from "@/content/labs-insights";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Labs — MS Bee",
  description: "Experiments and R&D at MS Bee — AI prototypes, automation tests, micro-SaaS experiments. Building a software company from zero, in public.",
  path: "/labs",
});

export default function LabsIndex() {
  return (
    <>
      <PageHero eyebrow="ms-bee labs" title="Labs" desc="Experimentation and R&D — prototypes, tests and lessons. This is where the company's future is explored." />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {labs.map((l) => <LabCard key={l.slug} lab={l} />)}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
