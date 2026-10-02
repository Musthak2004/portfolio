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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-[#07070D]/80 backdrop-blur-xl border-b border-surface-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary navigation" className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-tight text-ink"
            aria-label="MS Bee — home"
          >
            <span className="text-accent">&gt;</span> ms-bee/
            <span className="text-accent">_</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href || pathname.startsWith(link.href + "/") ? "page" : undefined}
                  className={`relative text-sm transition-colors duration-fast py-1 ${
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-ink after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-accent"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/start-project"
                className="text-sm font-medium text-white bg-accent hover:bg-accent-hover transition-colors px-5 py-2.5"
              >
                Start a Project →
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 -mr-2 text-ink-muted hover:text-ink transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[480px] pb-5" : "max-h-0"
          }`}
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-3 text-base text-ink-muted hover:text-ink hover:bg-surface-light rounded transition-colors min-h-[44px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 px-3">
              <Link href="/start-project" className="btn-primary w-full justify-center">
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
