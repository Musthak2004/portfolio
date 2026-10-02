import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/cards";
import { projects } from "@/content/work";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Work — MS Bee",
  description: "Client work, demos and internal systems built by MS Bee — every project with a reusable case study.",
  path: "/work",
});

export default function WorkIndex() {
  return (
    <>
      <PageHero
        eyebrow="ms-bee work"
        title="Work"
        desc="Real client work, demos and internal systems. Every entry opens a full case study — problem, objective, solution, outcome."
      />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
