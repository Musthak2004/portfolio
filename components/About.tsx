export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Avatar / visual */}
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <div className="aspect-square max-w-xs mx-auto md:mx-0 border border-surface-border relative overflow-hidden">
                <img
                  src="/assets/photo.jpg"
                  alt="Musthak M."
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-grid-light opacity-30" />
              </div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-dim text-center md:text-left mt-3">
                /assets/photo.jpg
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="section-label">/about</p>
            <h2 className="section-heading mb-6">
              AI automation developer building for real businesses.
            </h2>

            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                I&apos;m <strong className="text-ink">Musthak M.</strong> — an AI
                automation developer and founder of{" "}
                <strong className="text-ink">MSK AI Solutions</strong>.
                I build AI-powered automations that save businesses 20–40+ hours
                per week.
              </p>
              <p>
                You&apos;re here because something in your operations is manual,
                slow, or error-prone. Maybe leads are scattered across email, web
                forms, and LinkedIn. Maybe your support team answers the same
                questions every day. Maybe data entry eats hours that should go
                into growth. I fix that — with n8n, Make, Zapier, Python, and AI
                agents.
              </p>
              <p>
                Based in <strong className="text-ink">Dambulla, Sri Lanka</strong>,
                I&apos;m available 30+ hrs/week and open to contract-to-hire
                opportunities. I speak Tamil (native), English, and Sinhala — and
                I communicate clearly, solution-first, always.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { label: "Hours/week", value: "30+" },
                { label: "Languages", value: "3" },
                { label: "Tools", value: "10+" },
                { label: "Style", value: "Solutions" },
              ].map((stat, i) => (
                <div key={i} className="border border-surface-border p-4 bg-surface-light">
                  <p className="text-lg font-mono font-semibold text-accent">
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
              <a
                href="https://www.upwork.com/freelancers/~01498e95645e86a38a"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm px-5 py-2.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                Upwork
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
