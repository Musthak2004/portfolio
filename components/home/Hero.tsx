import Link from "next/link";
import MSBeeCore from "@/components/visual/MSBeeCore";
import SystemHUD from "@/components/visual/SystemHUD";

const orbitLabels = ["SOFTWARE", "AI", "PRODUCTS"];

/**
 * Asymmetric hero. DOM order: text -> visual -> actions (mobile flow).
 * Desktop: text top-left, actions bottom-left, system visual right.
 */
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* TEXT - row 1 left */}
          <div className="lg:col-span-6 lg:row-start-1 max-w-xl">
            <p className="hero-enter hero-enter-1 font-mono text-xs text-ink-muted tracking-widest uppercase mb-5">
              <span className="text-accent">$</span> ms-bee --whoami
            </p>
            <p className="hero-enter hero-enter-1 font-mono text-xs tracking-widest text-accent mb-4">
              /MSBEE - SOFTWARE + AI SYSTEMS
            </p>
            <h1
              id="hero-heading"
              className="hero-enter hero-enter-2 text-4xl sm:text-5xl xl:text-6xl font-bold text-ink leading-tight tracking-tight text-balance mb-6"
            >
              We build software, automate workflows,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                turn problems into systems.
              </span>
            </h1>
            <p className="hero-enter hero-enter-3 text-ink-muted text-base sm:text-lg max-w-xl mb-0 leading-relaxed">
              MS Bee is a founder-led software company - web applications, AI
              automations, custom software and products, built to scale.
            </p>
          </div>

          {/* VISUAL - right, own safe-area container */}
          <div className="lg:col-span-6 lg:row-span-2">
            <div className="hero-enter hero-enter-3 hero-visual relative mx-auto w-[min(100%,340px)] sm:w-[min(100%,400px)] lg:w-full lg:max-w-[560px] aspect-square overflow-hidden">
              <div className="absolute inset-[7%]">
                <MSBeeCore variant="hero" className="absolute inset-0" />
              </div>
              {orbitLabels.map((label, i) => (
                <span
                  key={label}
                  aria-hidden="true"
                  className={"hero-enter hero-enter-4 absolute font-mono text-xs tracking-widest text-ink-dim border border-surface-border bg-surface-light/80 px-2.5 py-1 backdrop-blur-sm " +
                    (i === 0 ? "top-[4%] left-[10%]" : i === 1 ? "top-[30%] right-[3%]" : "bottom-[22%] left-[3%]")}
                >
                  <span className="text-accent">●</span> {label}
                </span>
              ))}
              <span
                aria-hidden="true"
                className="hero-enter hero-enter-4 absolute bottom-[4%] right-[10%] font-mono text-xs tracking-widest text-signal/80 border border-signal/25 bg-black/40 px-2.5 py-1 backdrop-blur-sm"
              >
                AUTOMATION LAYER
              </span>
            </div>
            <p className="font-mono text-xs text-ink-dim text-center mt-3" aria-hidden="true">
              MS BEE SYSTEM · ONLINE
            </p>
          </div>

          {/* ACTIONS - row 2 left */}
          <div className="lg:col-span-6 lg:row-start-2 max-w-xl">
            <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row gap-3 mt-1 mb-8">
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
        </div>
      </div>
    </section>
  );
}
