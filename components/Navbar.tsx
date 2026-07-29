"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "What I Build", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#07070D]/80 backdrop-blur-xl border-b border-surface-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a
            href="#hero"
            className={`font-mono text-sm font-medium tracking-tight transition-colors ${
              isScrolled ? "text-ink" : "text-ink/80"
            }`}
          >
            <span className="text-accent">&gt;</span> musthak/
            <span className="text-accent">_</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
              >
                Let&rsquo;s talk
                <span className="ml-1 inline-block">→</span>
              </a>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink-muted hover:text-ink transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-80 pb-5" : "max-h-0"}`}>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-light rounded transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm text-accent hover:text-accent-hover font-medium transition-colors"
              >
                Let&rsquo;s talk →
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
