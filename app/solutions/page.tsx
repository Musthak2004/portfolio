import { CTASection, PageHero } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { SolutionCard } from "@/components/cards";
import { solutions } from "@/content/solutions";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Solutions",
  description:
    "Web development, mobile apps, AI automation, custom software, SEO and technical content — outcome-first services by MS Bee, each with the problem stated before the technology.",
  path: "/solutions",
});

export default function SolutionsIndex() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Solutions — MS Bee",
            description:
              "Web development, mobile apps, AI automation, custom software, SEO and technical content by MS Bee.",
            path: "/solutions",
            breadcrumbId: `${siteCanonical("/solutions")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Solutions" }], path: "/solutions" }),
        ])}
      />
      <PageHero
        eyebrow="Solutions"
        index="01"
        title="Start from the problem."
        desc="Outcome-first services. Every solution leads with the problem and the transformation — technology comes after. Scopes are fixed before build starts."
        breadcrumbs={[{ label: "Solutions" }]}
        meta={[
          { label: "Disciplines", value: `${solutions.length} services` },
          { label: "Model", value: "Founder-led, direct" },
          { label: "Engagement", value: "Fixed scope first" },
          { label: "Focus", value: "Small, shippable systems" },
        ]}
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i % 3}>
                <SolutionCard solution={s} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal variant="section">
            <div className="mt-16 grid gap-6 border-t border-surface-border pt-10 md:grid-cols-3">
              {[
                ["01", "Scope the problem", "The single conversion goal and smallest useful system are defined before anything is designed."],
                ["02", "Build in the open", "Working software early, with real content and real constraints instead of placeholder screens."],
                ["03", "Hand over clean", "A codebase the business can extend, with honest documentation and no lock-in."],
              ].map(([n, title, body]) => (
                <div key={n}>
                  <span className="index-number">{n}</span>
                  <h3 className="mt-3 text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
