import { Container, PageHero } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import StartProjectForm from "@/components/forms/StartProjectForm";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Start a Project",
  description:
    "Tell MS Bee what you're trying to build, automate, or launch. A structured project brief — not a generic contact form.",
  path: "/start-project",
});

export default function StartProjectPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Start a Project — MS Bee",
            description:
              "A structured project brief for new work with MS Bee — web, AI automation, custom software and digital products.",
            path: "/start-project",
            breadcrumbId: `${siteCanonical("/start-project")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Start a Project" }], path: "/start-project" }),
        ])}
      />
      <PageHero
        eyebrow="ms-bee start-project"
        title="Have a business problem worth building?"
        desc="Answer a few structured questions. MS Bee reviews every brief personally."
      />
      <section className="pb-24">
        <Container>
          <div className="max-w-3xl">
            <StartProjectForm />
          </div>
        </Container>
      </section>
    </>
  );
}
