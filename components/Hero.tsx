export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070D]" />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <div className="animate-fade-in">
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-surface-border bg-surface-light/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs text-ink-muted tracking-wide">
              <span className="text-accent">$</span> echo $ROLE
            </span>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 mb-6">
            Co-Founder @ MSK AI Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] tracking-tight text-balance mb-4">
            I build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              AI-powered automations
            </span>
            <br />
            that save 20–40+ hrs/week
          </h1>

          <div className="flex items-center justify-center gap-2 font-mono text-sm text-ink-dim mb-8">
            <span className="text-accent">$</span>
            <span>stack: </span>
            <span className="text-accent">n8n</span>
            <span className="text-ink-muted">·</span>
            <span className="text-accent">Make</span>
            <span className="text-ink-muted">·</span>
            <span className="text-accent">Python</span>
            <span className="text-ink-muted">·</span>
            <span className="text-accent">Claude AI</span>
            <span className="animate-cursor-blink text-ink-dim">_</span>
          </div>

          <p className="text-ink-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            AI customer support agents, CRM & lead automation, data pipelines,
            voice agents, and custom workflows — every system ships with
            monitoring, error handling, and documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#services" className="btn-primary w-full sm:w-auto justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              What I Build
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto justify-center">
              Let&rsquo;s Talk
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
