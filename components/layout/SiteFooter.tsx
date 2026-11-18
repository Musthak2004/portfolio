import Link from "next/link";
import { CoreStatic } from "@/components/visual/MSBeeCore";

const company = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Labs", href: "/labs" },
];

const more = [
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Start a Project", href: "/start-project" },
];

/** Footer as brand signature — balanced columns, quiet close. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-surface-border bg-[#050509]">
      <div className="shell pt-14 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="MS Bee — home">
              <CoreStatic className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-mono text-[13px] font-medium tracking-[0.06em] text-ink">MS BEE</span>
                <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.24em] text-ink-dim">
                  Software + AI
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              A founder-led software company building client systems, AI automation and
              products — from zero, in public.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 border border-surface-border px-2.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-soft" aria-hidden="true" />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-dim">
                Building — 2026
              </span>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer — Company">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">Company</p>
            <ul className="mt-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Footer — More">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">More</p>
            <ul className="mt-3">
              {more.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">Contact</p>
            <a
              href="mailto:musthakcool55@gmail.com"
              className="mt-3 inline-flex min-h-[40px] items-center break-all text-sm text-ink transition-colors hover:text-accent-hover"
            >
              musthakcool55@gmail.com
            </a>
            <p className="mt-1 text-xs leading-relaxed text-ink-dim">
              Direct to the founder. Every project enquiry is read personally.
            </p>
            <div className="mt-4 flex items-center gap-1">
              <a
                href="https://github.com/Musthak2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2.5 text-ink-dim transition-colors hover:text-ink"
                aria-label="GitHub — opens in a new tab"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a
                href="https://linkedin.com/in/rm-musthak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2.5 text-ink-dim transition-colors hover:text-ink"
                aria-label="LinkedIn — opens in a new tab"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a
                href="mailto:musthakcool55@gmail.com"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2.5 text-ink-dim transition-colors hover:text-ink"
                aria-label="Email MS Bee"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-surface-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-dim">
            &copy; {new Date().getFullYear()} MS Bee · R.M. Musthak — Software, AI automations &amp; digital products.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
            Founder-led · Built in public
          </p>
        </div>
      </div>
    </footer>
  );
}
