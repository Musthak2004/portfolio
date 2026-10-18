/**
 * MS Bee motion tokens — single source of truth for animation decisions.
 *
 * These describe intent, not decoration. Page content is always readable
 * without them: every value here is additive polish on top of a static,
 * fully usable layout. `prefers-reduced-motion` collapses all of it.
 */
export const motion = {
  /** Durations in ms, mapped to how much of the screen changes. */
  duration: {
    /** hover, focus, colour, small state changes */
    fast: 180,
    /** standard card / component transition */
    standard: 320,
    /** section reveal on scroll */
    reveal: 560,
    /** featured visual entrance */
    featured: 760,
    /** ambient background loops */
    ambient: 2400,
  },

  /** Easing — natural deceleration, no bounce for enterprise context. */
  easing: {
    standard: "cubic-bezier(0.22, 1, 0.36, 1)",
    entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
  },

  depth: {
    /** CSS perspective wrapper value in px */
    perspective: 1100,
    /** peak rotation in degrees, per card variant */
    tilt: {
      featured: 6,
      media: 7,
      standard: 4.5,
      compact: 3,
    },
    /** hover elevation in px, per card variant */
    lift: {
      featured: 8,
      media: 6,
      standard: 5,
      compact: 3,
    },
    /** inner element parallax travel in px at full pointer deflection */
    parallax: 8,
    /** scale on hover — kept tiny so grid alignment never shifts */
    hoverScale: { featured: 1.008, media: 1.006, standard: 1.004, compact: 1.002 },
  },

  /** stagger step for grouped entrances (ms) */
  staggerMs: 70,

  /** media queries used to gate motion */
  queries: {
    reduced: "(prefers-reduced-motion: reduce)",
    finePointer: "(hover: hover) and (pointer: fine)",
  },
} as const;

export type MotionVariant = keyof typeof motion.depth.tilt;

/** Should motion run at all? Safe to call during render on the server. */
export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(motion.queries.reduced).matches;
}

/** Is this a real pointer device that can express hover? */
export function hasFinePointer() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(motion.queries.finePointer).matches;
}
