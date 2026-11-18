import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const groups = [
  { n: "01", title: "SOFTWARE", items: ["Websites", "Web Apps", "Mobile Apps", "Internal Systems"], href: "/solutions/web-development" },
  { n: "02", title: "AI", items: ["AI Automation", "Agents", "Workflow Automation"], href: "/solutions/ai-automation" },
  { n: "03", title: "SYSTEMS", items: ["Custom Software", "Business Tools", "Integrations"], href: "/solutions/custom-software" },
  { n: "04", title: "GROWTH", items: ["SEO", "Technical Content", "Digital Products"], href: "/solutions/seo" },
];

/** Commercial capabilities — structured as an index, not a card wall. */
export default function ServicesGrid() {
  return (
    <section aria-labelledby="home-services-heading" className="section section-rule">
      <div className="shell">
        <Reveal>
          <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-label">
                <span className="text-accent">05</span> Services
              </p>
              <h2 id="home-services-heading" className="section-heading">
                How to work with MS Bee.
              </h2>
              <p className="section-desc mt-4">
                Founder-led builds — scoped, designed and shipped by one accountable person.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/solutions" className="link-underline inline-flex min-h-[44px] items-center text-sm font-medium text-accent">
                All solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-surface-border">
          {groups.map((g, i) => (
            <Reveal key={g.n} delay={i % 4}>
              <Link
                href={g.href}
                className="group grid items-center gap-4 border-b border-surface-border py-6 transition-colors hover:bg-white/[0.018] md:grid-cols-12 md:gap-6 md:py-7"
                aria-label={`${g.title} services — ${g.items.join(", ")}`}
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-ink-dim md:col-span-1">{g.n}</span>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-accent-hover md:col-span-3 md:text-2xl">
                  {g.title}
                </h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 md:col-span-7">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted">{item}</li>
                  ))}
                </ul>
                <span className="hidden justify-self-end text-accent transition-transform duration-300 group-hover:translate-x-1 md:col-span-1 md:block" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
