export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070D]" />

      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <div className="animate-fade-in">
          {/* Terminal-style badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-surface-border bg-surface-light/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs text-ink-muted tracking-wide">
              <span className="text-accent">$</span> cat /proc/role
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] tracking-tight text-balance mb-5">
            R.M.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              Musthak
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-ink-muted font-light leading-relaxed mb-3 text-balance">
            Aspiring Software Engineer
          </p>

          <div className="flex items-center justify-center gap-2 font-mono text-sm text-ink-dim mb-8">
            <span className="text-accent">$</span>
            <span>building web apps with </span>
            <span className="text-accent">Python</span>
            <span className="text-ink-muted">&</span>
            <span className="text-accent">Django</span>
            <span className="animate-cursor-blink text-ink-dim">_</span>
          </div>

          <p className="text-ink-muted text-base max-w-xl mx-auto mb-10 leading-relaxed">
            I build full-stack web applications that solve real problems.
            Open-source contributor, lifelong learner, and passionate about
            writing clean, maintainable code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto justify-center">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-ink-dim">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase">Scroll</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
