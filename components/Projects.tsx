const projects = [
  {
    title: "YouTube Clone",
    description:
      "A full-featured video sharing platform built with Django 6.0. Features include video upload/playback, channel management, subscriptions, comments with threaded replies, watch history, recommendations, and playlists.",
    tags: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
    github: "https://github.com/Musthak2004/YouTube-Clone",
    tech: "video-sharing platform",
    initials: "YT",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A Django-based e-commerce website with a clean UI. User authentication, product management, shopping cart, Stripe payment integration, coupon codes, and product reviews with ratings.",
    tags: ["Django", "Python", "Stripe", "MySQL"],
    github: "https://github.com/Musthak2004/E-commerce-Website",
    tech: "e-commerce platform",
    initials: "EC",
  },
  {
    title: "Hotel Booking App",
    description:
      "A comprehensive hotel booking platform built with Django 6.0. Role-based access for customers and hotel owners, room management, dynamic pricing, payment processing, reviews, and user dashboards.",
    tags: ["Django", "Python", "PostgreSQL", "Stripe"],
    github: "https://github.com/Musthak2004/Hotel-Booking-App",
    tech: "booking platform",
    initials: "HB",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/projects</p>
          <h2 className="section-heading mb-4">Things I&apos;ve Built</h2>
          <p className="section-desc">
            Full-stack web applications built with Django and modern tools.
            Each project solves real-world problems end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div key={index} className="card p-6 flex flex-col group">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 border border-surface-border bg-[#111118] flex items-center justify-center">
                  <span className="font-mono text-xs text-ink-muted">{project.initials}</span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 font-mono text-[10px] text-ink-dim bg-[#111118] border border-surface-border">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition-colors mt-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
