const projects = [
  {
    title: "Ember & Oak Restaurant",
    category: "Restaurant / Hospitality",
    problem:
      "An upscale restaurant with no online presence that matched its brand.",
    solution:
      "Interactive menu, gallery and reservations in a dark, elegant design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://ember-and-oak-teal.vercel.app/",
    gradient: "from-amber-700 to-yellow-600",
    icon: "🍽",
  },
  {
    title: "FlowSpace SaaS",
    category: "SaaS / Technology",
    problem: "A project-management tool needing a page that converts visitors.",
    solution:
      "Hero, features, pricing and FAQ structured to drive sign-ups clearly.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://flowspace-landing-black.vercel.app/",
    gradient: "from-blue-600 to-indigo-600",
    icon: "🚀",
  },
  {
    title: "Harrington & Cole",
    category: "Professional Services / Legal",
    problem: "A boutique law firm needing authority and trust online.",
    solution:
      "Practice areas, team profiles and case results in a confident layout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://harrington-cole-llp.vercel.app/",
    gradient: "from-slate-700 to-slate-900",
    icon: "⚖",
  },
];

export default function Portfolio() {
  return (
    <section aria-labelledby="webwork-heading" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="section-label">/more-work</p>
          <h2 id="webwork-heading" className="section-heading mb-4">
            Other Selected Work
          </h2>
          <p className="section-desc">
            More development work — live demos, real code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card group relative flex flex-col overflow-hidden"
            >
              {/* Visual header */}
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}
                role="img"
                aria-label={`${project.title} — ${project.category} project preview`}
              >
                <span className="relative z-10 text-5xl select-none" aria-hidden="true">
                  {project.icon}
                </span>
                <div
                  className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 12px 12px, rgba(255,255,255,0.3) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.12em] bg-black/40 backdrop-blur-sm px-2.5 py-1 text-white border border-white/10">
                  WEB PROJECT / DEMO
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="font-mono text-[11px] text-accent mb-1.5">
                  {project.category}
                </p>
                <h3 className="mb-2 text-base md:text-lg font-bold text-ink">
                  {project.title}
                </h3>
                <p className="mb-1.5 text-sm leading-relaxed text-ink-muted">
                  <span className="text-ink-dim">Problem: </span>
                  {project.problem}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                  <span className="text-ink-dim">Solution: </span>
                  {project.solution}
                </p>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-mono text-[10px] text-ink-dim bg-[#111118] border border-surface-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center !px-5 !py-3 min-h-[48px]"
                    aria-label={`Live demo of ${project.title} — opens in a new tab`}
                  >
                    Live Demo
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
