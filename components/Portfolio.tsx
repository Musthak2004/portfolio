const projects = [
  {
    title: "Coastal Bliss Cafe",
    description:
      "A modern, mouth-watering website for a local coffee shop featuring an interactive menu, location finder, and online ordering integration.",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    url: "https://example.com/project-1",
    gradient: "from-amber-500 to-orange-600",
    initials: "CB",
  },
  {
    title: "FitZone Gym",
    description:
      "A high-energy landing page for a boutique fitness studio with class scheduling, membership tiers, and a virtual tour of the facility.",
    tags: ["React", "Framer Motion", "Stripe"],
    url: "https://example.com/project-2",
    gradient: "from-blue-500 to-cyan-600",
    initials: "FZ",
  },
  {
    title: "GreenLeaf Landscaping",
    description:
      "A professional service website for a landscaping company showcasing before/after galleries, service areas, and a quote request form.",
    tags: ["Next.js", "Tailwind CSS", "Google Maps API"],
    url: "https://example.com/project-3",
    gradient: "from-emerald-500 to-teal-600",
    initials: "GL",
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
            <div key={index} className="card group !p-0 overflow-hidden">
              {/* Placeholder Image */}
              <div
                className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-5xl font-bold text-white/20 select-none">
                  {project.initials}
                </span>
                {/* Decorative dots */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 10px 10px, white 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
