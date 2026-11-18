import Link from "next/link";
import { CTASection, PageHero } from "@/components/ui/primitives";
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
  const ordered = [...articles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  const [lead, ...rest] = ordered;
  const categories = Array.from(new Set(articles.map((a) => a.category)));

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
        eyebrow="Insights"
        index="01"
        title="Notes from the build."
        desc="Practical writing on automation, software and the founder journey. No growth-hacks, no recycled advice — only what was tested inside MS Bee."
        breadcrumbs={[{ label: "Insights" }]}
        meta={[
          { label: "Published", value: `${articles.length} articles` },
          { label: "Topics", value: `${categories.length} tracks` },
          { label: "Latest", value: lead?.publishedAt ?? "—" },
          { label: "Author", value: "R.M. Musthak" },
        ]}
      />

      {lead && (
        <section className="section-tight">
          <div className="shell">
            <Reveal variant="featured">
              <article className="relative overflow-hidden border border-surface-border bg-surface">
                <div className="absolute inset-0 bg-rule-grid opacity-40" aria-hidden="true" />
                <div className="relative z-10 grid gap-8 p-7 md:p-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-14">
                  <div className="lg:col-span-7">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <span className="eyebrow-pill">Latest · {lead.category}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                        {lead.readingMinutes} min read
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                        {lead.publishedAt}
                      </span>
                    </div>
                    <h2 className="max-w-3xl text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink text-balance">
                      {lead.title}
                    </h2>
                  </div>
                  <div className="border-t border-surface-border pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <p className="text-[15px] leading-relaxed text-ink-muted md:text-base">
                      {lead.excerpt}
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                        R.M. Musthak
                      </span>
                      <Link
                        href={`/insights/${lead.slug}`}
                        className="btn-primary btn-sweep min-h-[50px] w-full justify-center sm:w-auto"
                      >
                        Read the article <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section-tight">
        <div className="shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-t border-surface-border pt-8">
            <div>
              <p className="section-label mb-2">Archive</p>
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
                More notes
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
              {String(rest.length).padStart(2, "0")} articles
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i % 2}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want the thinking applied to your business?"
        desc="The same approach used in these notes is available as a scoped build. Start with the problem."
      />
    </>
  );
}
