import Link from "next/link";
import MSBeeCore from "@/components/visual/MSBeeCore";
import SystemHUD from "@/components/visual/SystemHUD";

const orbitLabels = ["SOFTWARE", "AI", "PRODUCTS"];

/** Asymmetric hero — text left, MS Bee Core right with orbiting labels + HUD. */
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* LEFT — cols 1-6 */}
          <div className="lg:col-span-6">
            <p className="hero-enter hero-enter-1 font-mono text-xs text-ink-muted tracking-[0.2em] uppercase mb-5">
              <span className="text-accent">$</span> ms-bee --whoami
            </p>
            <p className="hero-enter hero-enter-1 font-mono text-[11px] tracking-[0.25em] text-accent mb-4">
              /MSBEE — SOFTWARE + AI SYSTEMS
            </p>
            <h1
              id="hero-heading"
              className="hero-enter hero-enter-2 text-4xl sm:text-5xl xl:text-6xl font-bold text-ink leading-[1.05] tracking-tight text-balance mb-6"
            >
              We build software, automate workflows,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                turn problems into systems.
              </span>
            </h1>
            <p className="hero-enter hero-enter-3 text-ink-muted text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              MS Bee is a founder-led software company — web applications, AI
              automations, custom software and products, built to scale.
            </p>
            <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/start-project" className="btn-primary btn-sweep justify-center min-h-[48px]">
                Start a Project
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/work" className="btn-outline justify-center min-h-[48px]">
                Explore Work
              </Link>
            </div>
            <div className="hero-enter hero-enter-4 max-w-sm">
              <SystemHUD />
            </div>
          </div>

          {/* RIGHT — cols 7-12 : core + orbit labels */}
          <div className="lg:col-span-6 relative">
            <div className="hero-enter hero-enter-3 relative mx-auto w-full max-w-[440px] aspect-square">
              <MSBeeCore variant="hero" className="absolute inset-0" />
              {orbitLabels.map((label, i) => (
                <span
                  key={label}
                  aria-hidden="true"
                  className={`hero-enter hero-enter-4 absolute font-mono text-[10px] tracking-[0.2em] text-ink-dim border border-surface-border bg-surface-light/80 px-2.5 py-1 backdrop-blur-sm ${
                    i === 0 ? "-top-1 left-[12%]" : i === 1 ? "top-[30%] -right-2" : "bottom-[18%] -left-2"
                  }`}
                >
                  <span className="text-accent">●</span> {label}
                </span>
              ))}
              <span
                aria-hidden="true"
                className="hero-enter hero-enter-4 absolute bottom-0 right-[14%] font-mono text-[10px] tracking-[0.2em] text-signal/80 border border-signal/25 bg-black/40 px-2.5 py-1 backdrop-blur-sm"
              >
                AUTOMATION LAYER
              </span>
            </div>
            <p className="font-mono text-[10px] text-ink-dim text-center mt-2" aria-hidden="true">
              MS BEE SYSTEM · ONLINE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
