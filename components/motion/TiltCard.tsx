"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import { motion, type MotionVariant } from "./tokens";

type TiltCardProps = {
  children: ReactNode;
  /** depth intensity — pick by card role, not by taste */
  variant?: MotionVariant;
  /** extra classes for the wrapper (grid/layout classes belong here) */
  className?: string;
  /** classes for the inner surface that actually rotates */
  innerClassName?: string;
  /** element to render as the wrapper */
  as?: "div" | "article" | "li";
  style?: CSSProperties;
};

/**
 * One reusable 3D depth surface for every card in the system.
 *
 * - Desktop fine pointers: restrained pointer-tracked tilt + inner parallax.
 * - Keyboard: focus-visible produces the same lifted, tilted end state, so
 *   focus feedback is equivalent to hover, not weaker.
 * - Coarse pointers / touch / reduced-motion / no JS: no transform at all,
 *   the surface is simply flat and stable.
 * - Layout is never animated: only transform/opacity change, so grids cannot
 *   jump and text never reflows.
 */
export default function TiltCard({
  children,
  variant = "standard",
  className = "",
  innerClassName = "",
  as: Tag = "div",
  style,
}: TiltCardProps) {
  const wrapRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (!window.matchMedia) return;

    const reduced = window.matchMedia(motion.queries.reduced);
    const fine = window.matchMedia(motion.queries.finePointer);
    let enabled = fine.matches && !reduced.matches;

    const sync = () => {
      enabled = fine.matches && !reduced.matches;
      if (!enabled) reset();
    };

    const reset = () => {
      inner.style.setProperty("--rx", "0deg");
      inner.style.setProperty("--ry", "0deg");
      inner.style.setProperty("--py", "0px");
      inner.style.setProperty("--px", "0px");
      inner.style.setProperty("--mx", "50%");
      inner.style.setProperty("--my", "50%");
      inner.style.setProperty("--scale", "1");
      inner.dataset.tilted = "false";
    };

    const onMove = (e: PointerEvent) => {
      if (!enabled || e.pointerType === "touch") return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const r = wrap.getBoundingClientRect();
        if (!r.width || !r.height) return;
        // -1 .. 1 from the centre of the surface
        const nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
        const ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
        const peak = motion.depth.tilt[variant];
        inner.style.setProperty("--ry", `${(nx * peak).toFixed(2)}deg`);
        inner.style.setProperty("--rx", `${(-ny * peak).toFixed(2)}deg`);
        inner.style.setProperty("--px", `${(nx * motion.depth.parallax).toFixed(2)}px`);
        inner.style.setProperty("--py", `${(ny * motion.depth.parallax).toFixed(2)}px`);
        inner.style.setProperty("--mx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
        inner.style.setProperty("--my", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
        inner.dataset.tilted = "true";
      });
    };

    const onEnter = () => {
      if (!enabled) return;
      inner.style.setProperty("--scale", String(motion.depth.hoverScale[variant]));
      wrap.addEventListener("pointermove", onMove, { passive: true });
    };

    const onLeave = () => {
      wrap.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafRef.current);
      reset();
    };

    const onFocus = () => {
      if (!enabled) return;
      // pointer-free equivalent of the hover end state
      inner.style.setProperty("--scale", String(motion.depth.hoverScale[variant]));
      inner.style.setProperty("--ry", "0deg");
      inner.style.setProperty("--rx", "0deg");
      inner.dataset.tilted = "true";
    };

    const onBlur = () => {
      if (wrap.contains(document.activeElement)) return;
      reset();
    };

    reset();
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("focusin", onFocus);
    wrap.addEventListener("focusout", onBlur);
    fine.addEventListener?.("change", sync);
    reduced.addEventListener?.("change", sync);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("focusin", onFocus);
      wrap.removeEventListener("focusout", onBlur);
      fine.removeEventListener?.("change", sync);
      reduced.removeEventListener?.("change", sync);
    };
  }, [variant]);

  const setWrap = useCallback((node: HTMLElement | null) => {
    wrapRef.current = node;
  }, []);

  return (
    <Tag
      ref={setWrap as Ref<never>}
      className={`tilt-wrap ${className}`}
      style={style}
      data-tilt-variant={variant}
    >
      <div ref={innerRef} className={`tilt-surface ${innerClassName}`} data-tilted="false">
        <span className="spot-layer" aria-hidden="true" />
        {children}
      </div>
    </Tag>
  );
}

/**
 * Inner layer that drifts slightly against the cursor inside a TiltCard.
 * Use on media/imagery only — never on text.
 */
export function TiltLayer({
  children,
  strength = 1,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  return (
    <div className={`tilt-layer ${className}`} style={{ ["--tilt-strength" as string]: strength }}>
      {children}
    </div>
  );
}
