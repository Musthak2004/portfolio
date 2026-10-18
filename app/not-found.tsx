import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That route does not exist on msbee.dpdns.org.",
  robots: { index: false, follow: true },
};

const routes = [
  { label: "Work", href: "/work", desc: "Client builds, concepts and internal systems" },
  { label: "Solutions", href: "/solutions", desc: "Web, AI automation, custom software, SEO" },
  { label: "Products", href: "/products", desc: "CleanSched and DevShield" },
  { label: "Insights", href: "/insights", desc: "Notes from building the company" },
];

export default function NotFound() {
  return (
    <section className="pt-32 md:pt-40 pb-24">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-ink-muted tracking-[0.2em] uppercase mb-4">
            <span className="text-accent">$</span> ms-bee route
          </p>
          <p className="font-mono text-sm text-ink-dim mb-6">
            <span className="text-accent">!</span> 404 — no such route in this system
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tight text-balance mb-5">
            This page isn&apos;t part of MS Bee.
          </h1>
          <p className="text-ink-muted leading-relaxed mb-10">
            The link may be outdated, or the page may have moved. Everything that does exist
            is listed below — and every entry opens a real page, not a placeholder.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-surface-border border border-surface-border mb-10">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-[#0B0B13] p-5 min-h-[44px] hover:bg-surface-light transition-colors duration-fast"
              >
                <p className="font-semibold text-ink group-hover:text-accent-hover transition-colors">
                  {r.label} <span className="arrow" aria-hidden="true">→</span>
                </p>
                <p className="text-sm text-ink-muted mt-1">{r.desc}</p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn-primary btn-sweep w-full sm:w-auto justify-center min-h-[48px]">
              Back home <span aria-hidden="true">→</span>
            </Link>
            <Link href="/start-project" className="btn-outline w-full sm:w-auto justify-center min-h-[48px]">
              Start a project
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
