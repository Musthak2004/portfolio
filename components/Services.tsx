const offerings = [
  {
    title: "Landing Page",
    description:
      "A single, focused page that sells one thing — your business, a promotion, or a product. Perfect for getting found on Google fast.",
    tags: ["Starter", "15,000–25,000 LKR"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "Small Business Site (3–5 pages)",
    description:
      "Home, services, about, and contact — the complete presence a restaurant, shop, salon, or local business needs to be taken seriously.",
    tags: ["Standard", "30,000–50,000 LKR"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "Full Website + Features",
    description:
      "A full business site with online booking, ordering, galleries, or customer forms built in. For businesses ready to take enquiries online.",
    tags: ["Premium", "60,000–100,000 LKR"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "Mobile-First & Findable on Google",
    description:
      "Every site looks right on every phone and ships with proper page titles and descriptions, so customers find you instead of a competitor.",
    tags: ["Mobile-first", "SEO-ready", "Vercel hosting"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "AI Automations (also)",
    description:
      "Beyond websites — I also build AI support agents, lead automation, and data workflows for businesses that want to go further.",
    tags: ["n8n", "Claude AI", "Make", "Voice agents"],
    gradient: "from-accent/10 to-transparent",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/what-i-build</p>
          <h2 className="section-heading mb-4">Websites I Build</h2>
          <p className="section-desc">
            Clear tiers, clear pricing, delivered in days. 50% upfront, 50% on
            delivery — via PayPal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="card p-6 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-ink-dim border border-surface-border px-2 py-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-ink text-base">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 font-mono text-[10px] text-ink-dim bg-[#111118] border border-surface-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
