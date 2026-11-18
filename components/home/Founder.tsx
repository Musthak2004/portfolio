import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

/** Founder framing — MS Bee + Musthak, honest scale. */
export default function Founder() {
  return (
    <section aria-labelledby="home-about-heading" className="section section-rule bg-[#07070D]">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-[420px] lg:mx-0">
                <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-accent/35" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden border border-surface-border bg-surface-light">
                  <img
                    src="/images/founder/musthak.webp"
                    alt="Portrait of Ruwaisdeen Muhammad Musthak, founder and builder of MS Bee"
                    width={896}
                    height={1195}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[50%_22%]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(200,205,255,0.10) 0%, transparent 40%), linear-gradient(250deg, rgba(232,179,75,0.10) 0%, transparent 35%), linear-gradient(180deg, transparent 55%, rgba(4,4,8,0.6) 100%)",
                    }}
                  />
                  <div className="absolute left-4 top-4 border border-white/15 bg-black/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm" aria-hidden="true">
                    MSBEE / FOUNDER-01
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                  <span>Musthak — founder &amp; builder</span>
                  <span>Colombo, LK</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <p className="section-label">
                <span className="text-accent">06</span> Founder
              </p>
              <h2 id="home-about-heading" className="section-heading mb-6">
                Building a software company from zero.
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
                Musthak is the founder. MS Bee is the company. Every project,
                product and experiment on this site was designed and shipped
                founder-led — no team to hide behind, no scale to fake.
              </p>

              <dl className="mt-9 grid gap-px border border-surface-border bg-surface-border sm:grid-cols-3">
                {[
                  ["TODAY", "Solo founder"],
                  ["BUILDING", "Software + AI systems"],
                  ["DIRECTION", "0 → software company"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-[#08080F] p-5">
                    <dt className="meta-label">{k}</dt>
                    <dd className="mt-2 text-sm font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-1">
                <Link href="/about" className="link-drift inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent">
                  About MS Bee <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a
                  href="https://linkedin.com/in/rm-musthak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex min-h-[44px] items-center text-sm text-ink-muted hover:text-ink"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
