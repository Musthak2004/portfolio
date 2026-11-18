"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Labs", href: "/labs" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        isScrolled || isOpen
          ? "border-b border-surface-border bg-[#050509]/88 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary navigation" className="shell">
        <div className="flex h-[68px] items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3" aria-label="MS Bee — home">
            <span className="relative flex h-7 w-7 items-center justify-center" aria-hidden="true">
              <span className="absolute inset-0 rounded-full border border-accent/30" />
              <span className="absolute inset-[5px] rounded-full border border-accent/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_rgba(232,179,75,0.9)]" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-mono text-[13px] font-medium tracking-[0.06em] text-ink">MS BEE</span>
              <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.24em] text-ink-dim group-hover:text-ink-muted transition-colors">
                Software + AI
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="https://linkedin.com/in/rm-musthak"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim transition-colors hover:text-ink"
            >
              LinkedIn <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link
              href="/start-project"
              className="inline-flex min-h-[40px] items-center gap-2 border border-accent/50 bg-accent/[0.08] px-4 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:bg-accent/15"
            >
              Start a Project <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="-mr-2 flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-ink-muted transition-colors hover:text-ink lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
            isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="border-t border-surface-border pb-6 pt-4">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex min-h-[48px] items-center border-b border-surface-border/60 text-base transition-colors ${
                      isActive(link.href) ? "text-ink" : "text-ink-muted hover:text-ink"
                    }`}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.label}
                    <span className="ml-auto text-ink-dim" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/start-project"
              className="btn-primary btn-sweep mt-5 w-full justify-center"
              tabIndex={isOpen ? 0 : -1}
            >
              Start a Project <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
              musthakcool55@gmail.com
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
