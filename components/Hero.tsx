export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070D]"
        aria-hidden="true"
      />

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[400px] bg-accent-glow rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center w-full pt-24 pb-20">
        <div className="animate-fade-in">
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-surface-border bg-surface-light/50 mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-ink-muted tracking-wide">
              <span className="text-accent">$</span> whoami
              <span className="animate-cursor-blink text-ink-dim">_</span>
            </span>
          </div>

          <div>
            <p className="eyebrow-pill mb-6">Founder &amp; Builder @ MS Bee</p>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] tracking-tight text-balance mb-6"
          >
            I build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              software, AI automations
            </span>{" "}
            &amp; digital products.
          </h1>

          <p className="text-ink-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            I build practical software systems, automation workflows and
            digital products that help businesses work smarter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
            >
              Work With Me
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#work"
              className="btn-outline w-full sm:w-auto justify-center min-h-[48px]"
            >
              Explore My Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-ink-dim">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase">
              Scroll
            </span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
