import { CTASection, PageHero } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import WorkExplorer from "@/components/work/WorkExplorer";
import { projects, getFeaturedProjects } from "@/content/work";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Work",
  description:
    "Client work, self-initiated concept builds and internal systems by MS Bee — every entry opens a reusable case study with problem, objective, solution and technology.",
  path: "/work",
});

export default function WorkIndex() {
  const clientCount = projects.filter((p) => p.type === "client").length;
  const conceptCount = projects.filter((p) => p.type === "demo").length;
  const internalCount = projects.filter((p) => p.type === "internal").length;

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Work — MS Bee",
            description: "Client work, concept builds and internal systems built by MS Bee.",
            path: "/work",
            breadcrumbId: `${siteCanonical("/work")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Work" }], path: "/work" }),
        ])}
      />
      <PageHero
        eyebrow="Selected work"
        index="01"
        title="Proof, not promises."
        desc={`${clientCount} client builds in production, plus ${conceptCount} self-initiated concepts and ${internalCount} internal system demonstrated in public. Every entry states what it is before what it looks like.`}
        breadcrumbs={[{ label: "Work" }]}
        meta={[
          { label: "Client builds", value: `${clientCount} live` },
          { label: "Concepts", value: `${conceptCount} public` },
          { label: "Internal", value: `${internalCount} demonstrated` },
          { label: "Featured", value: getFeaturedProjects(1)[0]?.title ?? "—" },
        ]}
      />

      <section className="section">
        <div className="shell">
          <WorkExplorer projects={projects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
