
const projects = [
  {
    title: "Ember & Oak Restaurant",
    description:
      "Complete website for an upscale restaurant featuring an interactive menu, gallery, reservations, and contact. Dark, elegant design with warm gold accents that reflects the restaurant's refined brand identity.",
    category: "Restaurant / Hospitality",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://ember-and-oak-teal.vercel.app/",
    gradient: "from-amber-700 to-yellow-600",
    icon: "🍽",
  },
  {
    title: "FlowSpace SaaS Landing Page",
    description:
      "High-converting landing page for a project management SaaS including hero, features, pricing, testimonials, and FAQ sections. Designed to drive sign-ups and showcase product value clearly.",
    category: "SaaS / Technology",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://flowspace-landing-black.vercel.app/",
    gradient: "from-blue-600 to-indigo-600",
    icon: "🚀",
  },
  {
    title: "Harrington & Cole Law Firm",
    description:
      "Professional multi-page website for a boutique law firm including practice areas, team profiles, case results, and contact. Trustworthy, authoritative design that instills client confidence.",
    category: "Professional Services / Legal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://harrington-cole-llp.vercel.app/",
    gradient: "from-slate-700 to-slate-900",
    icon: "⚖",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            A selection of websites I&apos;ve built for small businesses. Each
            project is tailored to the client&apos;s unique needs and brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Gradient header with icon */}
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                <span className="relative z-10 text-6xl select-none">
                  {project.icon}
                </span>
                {/* Animated overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                {/* Decorative grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 12px 12px, rgba(255,255,255,0.3) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Category badge */}
                <span className="absolute bottom-4 left-4 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-accent-600">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Spacer to push button down */}
                <div className="mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-700 hover:shadow-md active:scale-[0.97]"
                  >
                    View Live Site
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
