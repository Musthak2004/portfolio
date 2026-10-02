"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger index — adds 70ms delay per step */
  delay?: number;
  id?: string;
};

/**
 * Consistent scroll-reveal: opacity 0→1, translateY 16px→0, standard timing.
 * Renders visible immediately when reduced-motion is preferred or IO unavailable.
 */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      className={`reveal${shown ? " is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay * 70}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
