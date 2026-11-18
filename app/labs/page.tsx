import { CTASection, PageHero } from "@/components/ui/primitives";
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
        eyebrow="Labs"
        index="01"
        title="R&amp;D, in public."
        desc="Experiments and prototypes — AI workflows, automation tests and micro-SaaS ideas. Documented whether they work or not, because the lessons are the output."
        breadcrumbs={[{ label: "Labs" }]}
        meta={[
          { label: "Experiments", value: `${labs.length} tracked` },
          { label: "Live", value: `${labs.filter((l) => l.status === "Live").length} running` },
          { label: "Prototype", value: `${labs.filter((l) => l.status === "Prototype").length} in build` },
          { label: "Rule", value: "Publish the lesson" },
        ]}
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labs.map((l, i) => (
              <Reveal key={l.slug} delay={i % 3}>
                <LabCard lab={l} />
              </Reveal>
            ))}
          </div>

          <Reveal variant="section">
            <div className="mt-14 grid gap-6 border-t border-surface-border pt-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="section-label mb-3">Why publish experiments?</p>
                <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
                  Labs is the honest layer between products and client work. It shows
                  what is being tested before it becomes a product, and records what
                  the test actually taught.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-px border border-surface-border bg-surface-border">
                {[
                  ["EXPLORING", "Question open"],
                  ["PROTOTYPE", "Build in progress"],
                  ["LIVE", "Running publicly"],
                ].map(([status, desc]) => (
                  <div key={status} className="bg-[#08080F] p-4">
                    <p className="font-mono text-[9px] tracking-[0.14em] text-accent">{status}</p>
                    <p className="mt-2 text-xs text-ink-dim">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
