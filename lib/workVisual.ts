/**
 * Stylised per-project preview palettes.
 *
 * These are deliberately abstract — gradient environments with terminal
 * chrome, never a fabricated screenshot. Real screenshots live in
 * `project.gallery` and are the only images presented as the product.
 */
export const workGradients: Record<string, string> = {
  zernons: "from-[#0b2030] via-[#0a1524] to-[#070a12]",
  orikma: "from-[#101f38] via-[#121a2c] to-[#080b14]",
  "ai-lead-follow-up-system": "from-[#231a3a] via-[#151226] to-[#0b0a14]",
  "ember-and-oak": "from-[#3a2410] via-[#2a1c10] to-[#12100a]",
  "flowspace-saas": "from-[#0e1c38] via-[#101a33] to-[#090d18]",
  "harrington-and-cole": "from-[#232a38] via-[#1a1f2b] to-[#0c0e14]",
};

const fallback = "from-[#1a1a28] via-[#12121c] to-[#0a0a12]";

export function projectGradient(slug: string) {
  return workGradients[slug] ?? fallback;
}
