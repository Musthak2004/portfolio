import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const groups = [
  { n: "01", title: "SOFTWARE", items: ["Websites", "Web Apps", "Mobile Apps", "Internal Systems"], href: "/solutions/web-development" },
  { n: "02", title: "AI", items: ["AI Automation", "Agents", "Workflow Automation"], href: "/solutions/ai-automation" },
  { n: "03", title: "SYSTEMS", items: ["Custom Software", "Business Tools", "Integrations"], href: "/solutions/custom-software" },
  { n: "04", title: "GROWTH", items: ["SEO", "Technical Content", "Digital Products"], href: "/solutions/seo" },
];

/** Commercial capabilities — structured, no duplication of the node system. */
export default function ServicesGrid() {
  return (
    <section aria-labelledby="home-services-heading" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="section-label">/services</p>
            <h2 id="home-services-heading" className="section-heading mb-4">How can a business work with you?</h2>
            <p className="section-desc">Founder-led builds — scoped, designed and shipped by MS Bee.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-border border border-surface-border">
          {groups.map((g, i) => (
            <Reveal key={g.n} delay={i}>
              <Link href={g.href} className="group block bg-[#0B0B13] p-6 md:p-7 h-full hover:bg-surface-light transition-colors duration-fast min-h-[44px]" aria-label={`${g.title} services — ${g.items.join(", ")}`}>
                <span className="font-mono text-[10px] tracking-[0.15em] text-ink-dim border border-surface-border px-2 py-1">{g.n}</span>
                <h3 className="font-bold text-ink tracking-wide mt-4 mb-3 group-hover:text-accent-hover transition-colors">{g.title}</h3>
                <ul className="space-y-1.5">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted">{item}</li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
