const timeline = [
  {
    period: "Jul 2026 — Present",
    title: "Founder",
    subtitle: "MS Bee",
    description:
      "Founded MS Bee — a web studio helping Sri Lankan small businesses get found online. I send free concept websites to businesses without one, then build the real site when they're ready.",
    highlights: [
      "Sent 245+ free concept mockups to businesses across 8+ cities",
      "Built and shipped 4 sample sites — restaurant, SaaS, law, and hardware",
      "Also build AI automations (support agents, lead routing) for clients who want to go further",
    ],
  },
  {
    period: "2025 — 2028 (Expected)",
    title: "Bachelor of Engineering (BEng)",
    subtitle: "ESOFT Metro Campus, Sri Lanka",
    description:
      "Pursuing a degree in Engineering while actively shipping production websites and automations for real businesses.",
    highlights: [
      "Full-time self-directed learning alongside formal education",
      "Building real client projects with n8n, Make, Python, and AI agents",
      "Available 30+ hrs/week for contract and freelance work",
    ],
  },
  {
    period: "Earlier",
    title: "Full-Stack Foundations",
    subtitle: "Python, JavaScript, Web Development",
    description:
      "Built a strong foundation in programming and web development — starting with Python and Django, expanding into JavaScript and TypeScript, and applying it all to real client sites and small automations.",
    highlights: [
      "Built full-stack applications with Python, Django, and PostgreSQL",
      "39+ public repositories on GitHub across various tech stacks",
      "Now focused on Next.js, Tailwind, and fast delivery for business websites",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/journey</p>
          <h2 className="section-heading mb-4">Path So Far</h2>
          <p className="section-desc">
            From writing my first Python script to shipping AI agents for
            businesses — here&apos;s the timeline.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-surface-border to-surface-border hidden md:block" />

          <div className="space-y-10 md:space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-4.5px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-[#07070D] z-10 hidden md:block" />

                {/* Period badge */}
                <div className="md:w-1/2">
                  <div className={`md:flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 mb-3 md:mb-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item.period}
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="md:w-1/2">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-muted mb-4">{item.subtitle}</p>
                    <p className="text-sm text-ink-dim leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <span className="text-accent mt-0.5 shrink-0">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
