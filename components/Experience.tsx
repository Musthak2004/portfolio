const timeline = [
  {
    period: "Present",
    title: "Software Engineering Journey",
    subtitle: "Self-directed & Project-based Learning",
    description:
      "Building full-stack web applications with Django, Python, and modern tools. Currently expanding into advanced Django patterns, REST APIs, and deployment with Docker.",
    highlights: [
      "Built 3 production-grade Django applications",
      "Deep focus on clean architecture & DRY principles",
      "Active open-source contributions on GitHub",
    ],
  },
  {
    period: "2024",
    title: "Full-Stack Development",
    subtitle: "Django & Python Ecosystem",
    description:
      "Focused on mastering the Django web framework and Python ecosystem. Built comprehensive applications covering authentication, payments, role-based access, and database design.",
    highlights: [
      "YouTube Clone with video streaming & recommendations",
      "E-commerce platform with Stripe integration",
      "Hotel booking system with role-based access control",
    ],
  },
  {
    period: "2023",
    title: "Computer Science Foundations",
    subtitle: "Core CS & Problem Solving",
    description:
      "Established a strong foundation in computer science fundamentals. Studied data structures, algorithms, and software design patterns while building proficiency in multiple programming languages.",
    highlights: [
      "Proficiency in Python, C++, SQL, and JavaScript",
      "Strong grasp of data structures & algorithms",
      "Version control & collaborative development with Git",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/experience</p>
          <h2 className="section-heading mb-4">Path So Far</h2>
          <p className="section-desc">
            A timeline of my growth from learning fundamentals to building
            production-ready applications.
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

                {/* Period badge (mobile on left, desktop alternates) */}
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
