export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Avatar / visual */}
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <div className="aspect-square max-w-xs mx-auto md:mx-0 bg-gradient-to-br from-surface-light to-surface border border-surface-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-light" />
                <div className="text-center relative z-10">
                  <svg className="w-20 h-20 text-ink-dim mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-dim">
                    Photo
                  </p>
                </div>
              </div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-dim text-center md:text-left mt-3">
                /assets/profile.jpg
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="section-label">/about</p>
            <h2 className="section-heading mb-6">
              Aspiring software engineer building for the web.
            </h2>

            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                I&apos;m <strong className="text-ink">R.M. Musthak</strong> — an aspiring
                software engineer passionate about building full-stack web
                applications with Python and Django. I specialize in turning
                ideas into robust, scalable web platforms that solve real
                problems.
              </p>
              <p>
                My journey started with a deep curiosity for how things work on
                the web. I taught myself programming through hands-on project
                building — from a simple HTML page to full production-grade
                Django applications with payment processing, user authentication,
                and complex business logic.
              </p>
              <p>
                I&apos;m currently seeking <strong className="text-ink">entry-level software
                engineering opportunities</strong> where I can contribute to
                meaningful projects, collaborate with experienced engineers, and
                continue growing as a developer. I bring strong fundamentals in
                Python, database design, and software architecture, along with a
                genuine eagerness to learn.
              </p>
            </div>

            {/* GitHub stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-surface-border">
              {[
                { value: "39+", label: "Repositories" },
                { value: "3", label: "Major Projects" },
                { value: "3", label: "GH Achievements" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-mono font-semibold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-ink-dim mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* External links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/Musthak2004"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm px-5 py-2.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rm-musthak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm px-5 py-2.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
