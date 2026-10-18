"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { motion } from "./tokens";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger index — adds motion.staggerMs delay per step */
  delay?: number;
  id?: string;
  /** entrance weight: grouped cards stay light, section headers rise further */
  variant?: "standard" | "section" | "featured";
};

const variantClass: Record<NonNullable<RevealProps["variant"]>, string> = {
  standard: "reveal",
  section: "reveal reveal-section",
  featured: "reveal reveal-featured",
};

/**
 * Consistent scroll-reveal: opacity 0→1 plus a small rise, standard timing.
 * Renders visible immediately when reduced-motion is preferred or IO is
 * unavailable, so content is never hidden behind a missing effect.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  id,
  variant = "standard",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia(motion.queries.reduced).matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      id={id}
      className={`${variantClass[variant]}${shown ? " is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay * motion.staggerMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
