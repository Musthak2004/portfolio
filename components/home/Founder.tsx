import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

/** Founder framing — MS Bee + Musthak, honest scale. */
export default function Founder() {
  return (
    <section aria-labelledby="home-about-heading" className="py-20 md:py-28 bg-[#08080F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative max-w-xs">
                <div className="border border-surface-border overflow-hidden bg-surface-light aspect-square relative">
                  <img src="/assets/photo.jpg" alt="Portrait of R.M. Musthak, founder and builder of MS Bee" className="w-full h-full object-cover" loading="lazy" />
                  {/* editorial light: soft key from upper-left, warm rim from right */}
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(135deg, rgba(200,205,255,0.10) 0%, transparent 40%), linear-gradient(250deg, rgba(232,179,75,0.10) 0%, transparent 35%), linear-gradient(180deg, transparent 55%, rgba(4,4,8,0.55) 100%)" }} />
                  <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] text-white/70 border border-white/15 bg-black/40 px-2 py-1 backdrop-blur-sm" aria-hidden="true">MSBEE / FOUNDER-01</div>
                </div>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-dim mt-3">
                  musthak — founder & builder
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <p className="section-label">/founder</p>
              <p className="font-mono text-xs tracking-[0.25em] text-accent mb-3">MS BEE</p>
              <h2 id="home-about-heading" className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-6">
                Building software from zero.
              </h2>
              <dl className="grid sm:grid-cols-3 gap-px bg-surface-border border border-surface-border mb-8">
                {[
                  ["TODAY", "Solo founder"],
                  ["BUILDING", "Software + AI systems"],
                  ["DIRECTION", "0 → software company"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-[#0B0B13] p-5">
                    <dt className="font-mono text-[10px] tracking-[0.2em] text-ink-dim mb-2">{k}</dt>
                    <dd className="text-sm font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-ink-muted leading-relaxed mb-8 max-w-xl">
                Musthak is the founder. MS Bee is the company. Every project,
                product and experiment on this site was designed and shipped
                founder-led — no team to hide behind, no scale to fake.
              </p>
              <Link href="/about" className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]">
                About MS Bee <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
