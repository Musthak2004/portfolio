import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/cards";
import { projects, getFeaturedProjects, getSupportingProjects } from "@/content/work";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Work",
  description:
    "Client work, self-initiated concept builds and internal systems by MS Bee — every entry opens a reusable case study with problem, objective, solution and technology.",
  path: "/work",
});

export default function WorkIndex() {
  const cards = [...getFeaturedProjects(), ...getSupportingProjects()];
  const clientCount = projects.filter((p) => p.type === "client").length;

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Work — MS Bee",
            description:
              "Client work, concept builds and internal systems built by MS Bee.",
            path: "/work",
            breadcrumbId: `${siteCanonical("/work")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Work" }], path: "/work" }),
        ])}
      />
      <PageHero
        eyebrow="ms-bee work"
        title="Work"
        desc={`${clientCount} client builds and the concept and internal systems built alongside them. Every entry opens a full case study — problem, objective, solution, technology — with project type stated so nothing reads as more than it is.`}
      />
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((p, i) => (
              <Reveal key={p.slug} delay={i % 3}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
