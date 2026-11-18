import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import OrbitMotif from "@/components/ui/OrbitMotif";
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
    <section className="page-hero min-h-[80svh]">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-glow" aria-hidden="true" />
      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow-accent mb-5">
              <span className="text-ink-dim mr-2">ERR / 404</span> Route not found
            </p>
            <h1 className="text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-ink text-balance">
              This route never
              <br />
              <span className="text-ink-dim">got built.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-muted">
              The page you asked for does not exist on msbee.dpdns.org. The work, products and
              writing below are all live.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="btn-primary btn-sweep min-h-[48px] justify-center">
                Back to home <span aria-hidden="true">→</span>
              </Link>
              <Link href="/work" className="btn-outline min-h-[48px] justify-center">
                Browse work
              </Link>
            </div>
          </div>
          <div className="hidden justify-end lg:col-span-5 lg:flex">
            <OrbitMotif caption="MS BEE / UNRESOLVED ROUTE" />
          </div>
        </div>

        <div className="relative z-10 mt-14 grid gap-px border border-surface-border bg-surface-border sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r) => (
            <Link key={r.href} href={r.href} className="group bg-[#08080F] p-5 transition-colors hover:bg-surface-light">
              <p className="text-sm font-medium text-ink transition-colors group-hover:text-accent-hover">
                {r.label} <span aria-hidden="true">→</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-dim">{r.desc}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
