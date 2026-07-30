"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left */}
          <div>
            <p className="section-label">/contact</p>
            <h2 className="section-heading mb-4">Let&apos;s automate your workflow</h2>
            <p className="section-desc mb-8">
              Tell me what you&apos;re automating and I&apos;ll tell you exactly how
              I&apos;d approach it. Available 30+ hrs/week for contract and
              freelance work.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:musthakcool55@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 border border-surface-border bg-surface-light flex items-center justify-center text-accent shrink-0 group-hover:border-accent/30 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-dim font-mono tracking-wide">Email</p>
                  <p className="text-sm text-ink group-hover:text-accent transition-colors">
                    musthakcool55@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://cal.com/musthak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 border border-surface-border bg-surface-light flex items-center justify-center text-accent shrink-0 group-hover:border-accent/30 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-dim font-mono tracking-wide">Book a Call</p>
                  <p className="text-sm text-ink group-hover:text-accent transition-colors">
                    cal.com/musthak
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Musthak2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 border border-surface-border bg-surface-light flex items-center justify-center text-accent shrink-0 group-hover:border-accent/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-dim font-mono tracking-wide">GitHub</p>
                  <p className="text-sm text-ink group-hover:text-accent transition-colors">
                    @Musthak2004
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rm-musthak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 border border-surface-border bg-surface-light flex items-center justify-center text-accent shrink-0 group-hover:border-accent/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-dim font-mono tracking-wide">LinkedIn</p>
                  <p className="text-sm text-ink group-hover:text-accent transition-colors">
                    /in/rm-musthak
                  </p>
                </div>
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01498e95645e86a38a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 border border-surface-border bg-surface-light flex items-center justify-center text-accent shrink-0 group-hover:border-accent/30 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-dim font-mono tracking-wide">Upwork</p>
                  <p className="text-sm text-ink group-hover:text-accent transition-colors">
                    AI Automation Developer
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-surface-border bg-surface-light p-6 md:p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-mono text-xs tracking-wide text-ink-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#07070D] border border-surface-border text-ink placeholder-ink-dim text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs tracking-wide text-ink-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#07070D] border border-surface-border text-ink placeholder-ink-dim text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs tracking-wide text-ink-muted mb-2">
                  What are you automating?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Brief description of what you're automating — I'll tell you exactly how I'd approach it..."
                  className="w-full px-4 py-3 bg-[#07070D] border border-surface-border text-ink placeholder-ink-dim text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white px-6 py-3.5 text-sm font-medium transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(124,124,255,0.25)] active:scale-[0.98]"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
