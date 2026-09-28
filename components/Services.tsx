const services = [
  {
    index: "01",
    title: "Web Development",
    description: "Modern websites, landing pages and web applications.",
    primary: true,
  },
  {
    index: "02",
    title: "AI Automation",
    description: "Lead follow-up, support agents and workflow automation.",
    primary: true,
  },
  {
    index: "03",
    title: "Custom Software",
    description: "Business tools and internal systems.",
    primary: false,
  },
  {
    index: "04",
    title: "Digital Products",
    description: "Developer-focused resources and practical digital products.",
    primary: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 bg-[#0A0A12] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="section-label">/services</p>
          <h2 id="services-heading" className="section-heading mb-4">
            Services
          </h2>
          <p className="section-desc">
            Founder-led builds — I scope, design and ship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((item) => (
            <article
              key={item.index}
              className={`p-6 md:p-7 group relative overflow-hidden border transition-all duration-300 ${
                item.primary
                  ? "bg-surface-light border-accent/25 hover:border-accent/50"
                  : "card"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-ink-dim border border-surface-border px-2 py-1">
                  {item.index}
                </span>
                <h3 className="font-semibold text-ink text-base md:text-lg">
                  {item.title}
                </h3>
                {item.primary && (
                  <span className="ml-auto font-mono text-[10px] tracking-[0.12em] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5">
                    FOCUS
                  </span>
                )}
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
