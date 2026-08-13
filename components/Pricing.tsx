const tiers = [
  {
    name: "Starter",
    price: "15,000",
    priceSuffix: "LKR",
    delivery: "3 days",
    tagline: "Get on Google with a clean one-page site.",
    features: [
      "1 page — your business, services, photos",
      "WhatsApp button + contact form",
      "Mobile-first, looks right on every phone",
      "Basic SEO — get found on Google",
      "Free 30-day hosting on Vercel",
    ],
    cta: "Start here",
    featured: false,
  },
  {
    name: "Professional",
    price: "35,000",
    priceSuffix: "LKR",
    delivery: "5–7 days",
    tagline: "A complete business site that makes you look established.",
    features: [
      "3–5 pages — Home, Services, About, Gallery, Contact",
      "WhatsApp button + contact form",
      "Basic SEO on every page",
      "Photo gallery of your work",
      "One revision round after preview",
      "Free 30-day hosting on Vercel",
    ],
    cta: "Most popular",
    featured: true,
  },
  {
    name: "Premium",
    price: "75,000",
    priceSuffix: "LKR",
    delivery: "10–14 days",
    tagline: "A full website that runs your business online.",
    features: [
      "6–10 pages — blog, testimonials, FAQ",
      "Online booking / ordering built to your workflow",
      "Advanced SEO + GA4 analytics setup",
      "Two revision rounds",
      "Priority support for 30 days after launch",
    ],
    cta: "Go all in",
    featured: false,
  },
];

const check = "✓";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/pricing</p>
          <h2 className="section-heading mb-4">Three Packages. One Decision.</h2>
          <p className="section-desc">
            Fixed prices, fixed scope, delivered in days. 50% upfront, 50% on
            delivery — via PayPal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`card p-6 relative flex flex-col ${
                tier.featured
                  ? "md:-mt-4 border-accent/50 bg-[#15151F] shadow-[0_0_40px_rgba(124,124,255,0.12)]"
                  : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.15em] uppercase text-white bg-accent px-3 py-1">
                  Most Popular
                </span>
              )}

              <div className="mb-5">
                <h3 className="font-semibold text-ink text-lg">{tier.name}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mt-1">
                  {tier.tagline}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-ink">
                  {tier.price}
                </span>
                <span className="font-mono text-xs text-ink-dim ml-2">
                  {tier.priceSuffix}
                </span>
                <div className="font-mono text-[11px] text-ink-dim mt-1.5">
                  Delivery: {tier.delivery}
                </div>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-muted leading-snug">
                    <span className="text-accent mt-0.5 text-xs">{check}</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-5 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                  tier.featured
                    ? "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(124,124,255,0.25)]"
                    : "border border-surface-border text-ink hover:border-ink-muted"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center font-mono text-[11px] text-ink-dim mt-10">
          Custom scope above Premium? Message me — quotes stay within these tiers.
        </p>
      </div>
    </section>
  );
}
