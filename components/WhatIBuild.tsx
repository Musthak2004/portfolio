const categories = [
  {
    index: "01",
    title: "Web Applications",
    description:
      "Modern business websites, landing pages and web applications built to perform.",
  },
  {
    index: "02",
    title: "AI Automation",
    description:
      "AI support agents, lead routing, workflow automation and business process automation.",
  },
  {
    index: "03",
    title: "Custom Software",
    description:
      "Internal tools, business systems and custom digital platforms that fit how you work.",
  },
  {
    index: "04",
    title: "Digital Products",
    description:
      "Micro-SaaS products, developer resources, templates and practical digital tools.",
  },
];

export default function WhatIBuild() {
  return (
    <section id="build" aria-labelledby="build-heading" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="section-label">/what-i-build</p>
          <h2 id="build-heading" className="section-heading mb-4">
            What I build
          </h2>
          <p className="section-desc">
            One builder, one umbrella: software, AI automations &amp; digital
            products that solve real business problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map((item) => (
            <article key={item.index} className="card p-6 md:p-7 group relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 to-transparent"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-ink-dim border border-surface-border px-2 py-1">
                    {item.index}
                  </span>
                  <h3 className="font-semibold text-ink text-base md:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
