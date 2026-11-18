import type { Project, ProjectType } from "@/types";

/**
 * How each project type is described in public copy.
 * Kept explicit so a concept build can never be read as a client engagement.
 */
export const projectTypeLabels: Record<ProjectType, string> = {
  client: "Client work",
  demo: "Self-initiated concept build",
  internal: "Internal system — demonstrated",
};

export const projects: Project[] = [
  {
    id: "zernons",
    slug: "zernons",
    title: "Zernons (Pvt) Ltd",
    category: ["Client Work", "Web", "Web Apps"],
    industry: "B2B equipment — solar, cooling & water pumping",
    type: "client",
    status: "Live",
    description:
      "Inquiry-led B2B equipment catalogue: solar energy systems, air conditioners and solar water pumps presented in one place, with every listing routed into a structured quote request instead of a checkout.",
    problem:
      "Zernons sells solar energy systems, air conditioners and solar water pumps to business premises across Sri Lanka. Equipment on that scale is specified after a survey of roof space, cooling load, well depth and head — so fixed shelf prices and instant checkout would misrepresent how the business actually sells.",
    objective:
      "Present three trades in one credible catalogue, give each equipment class its own navigable space, and route every listing into a structured quote request where sizing and pricing are confirmed per project after a site survey.",
    solution:
      "A Next.js catalogue with category navigation for solar, cooling and pumping; product listings carrying specifications and per-item quote actions; a four-step quote request flow (system → site → requirements → contact); services and installation pages for each trade; and resources, projects and blog layers around the catalogue. Purchasing is quote-first — there is no online checkout and no online payment.",
    features: [
      "Three product categories — solar, cooling and pumping",
      "Product listings with category filters and specification detail",
      "Featured equipment ribbon on the homepage",
      "Four-step quote request flow (system → site → requirements → contact)",
      "Quote-first purchasing — no online checkout or payment",
      "Per-trade services and installation pages",
      "Resources, projects and blog content around the catalogue",
      "Responsive catalogue and mobile navigation",
    ],
    technologies: ["Next.js", "Supabase Storage", "Next Image optimisation"],
    liveUrl: "https://www.zernons.lk/",
    featured: true,
    featuredRank: 1,
    caseStudy: [
      {
        heading: "Information architecture",
        body: "The catalogue is the spine of the site, and the two halves of the business — equipment supply and installed work — are given separate top-level spaces rather than being blended into one product feed.",
        bullets: [
          "Shop Products — the catalogue, filterable by category",
          "Services & Installation — installation and maintenance scopes per trade",
          "Commercial — business-premises positioning",
          "Deals & Specials, Resources, Projects, Blog — supporting content layers",
          "Request a Quote — reachable from the header on every page",
        ],
      },
      {
        heading: "Product catalogue",
        body: "Three equipment disciplines share one visual system, so solar, cooling and pumping read as one supplier rather than three unrelated shop fronts. Each category states what drives selection, and each listing carries the specification detail needed before a survey.",
        bullets: [
          "Solar energy systems — on-grid, off-grid and hybrid with battery storage",
          "Air conditioners — inverter and non-inverter splits, cassettes and ducted units",
          "Solar water pumps — submersible and surface sets with controllers and accessories",
          "Category routes filter the catalogue and each product opens its own detail page",
        ],
      },
      {
        heading: "Quote-enquiry experience",
        body: "Because pricing depends on the site, the intention of every listing is an enquiry rather than a sale. The quote flow collects what a surveyor actually needs before anyone commits to a number.",
        bullets: [
          "Step 1 — what is needed: air conditioning, solar energy or water pumps",
          "Step 2 — the site: domestic or commercial premises",
          "Step 3 — requirements, then step 4 — contact details",
          "Product pages can pre-fill the request with the item in question",
          "No checkout and no online payment anywhere in the flow",
        ],
      },
      {
        heading: "Responsive experience",
        body: "The catalogue and the quote flow both work from a phone, which is the realistic device for a site visit.",
        bullets: [
          "Mobile header keeps quote and cart actions reachable",
          "Category navigation and product cards reflow to a single column",
          "The quote wizard keeps its step indicator and Back / Continue controls in view",
        ],
      },
      {
        heading: "Technical implementation",
        body: "Built on Next.js with server-rendered catalogue routes, Next.js image optimisation for product photography, and Supabase Storage as the product-image origin. Category filtering is expressed in the URL so a filtered catalogue is a shareable, linkable state.",
      },
    ],
    gallery: [
      {
        src: "/images/work/zernons/home-desktop.webp",
        alt: "Zernons homepage hero on desktop — “Power, cooling and water — specified for business”, with a solar array visual and category shortcuts for solar, cooling and pumping.",
        width: 1440,
        height: 900,
        caption: "Homepage — three trades, one supplier",
        span: "full",
      },
      {
        src: "/images/work/zernons/categories-desktop.webp",
        alt: "Zernons product categories section listing Solar Energy Systems, Air Conditioners and Solar Water Pumps, each with a photograph and its sub-types.",
        width: 1440,
        height: 900,
        caption: "Product categories — solar, cooling, pumping",
      },
      {
        src: "/images/work/zernons/quote-desktop.webp",
        alt: "Zernons Request a Quote page showing a four-step wizard on step one, with choices for air conditioning, solar energy or water pumps, and domestic or commercial premises.",
        width: 1440,
        height: 900,
        caption: "Quote request — system, site, requirements, contact",
      },
      {
        src: "/images/work/zernons/services-desktop.webp",
        alt: "Zernons Services & Installation page describing solar installation, air-conditioning installation and maintenance, and water-pump installation with survey-first bullet points.",
        width: 1440,
        height: 900,
        caption: "Services & installation — scoped from the survey",
      },
      {
        src: "/images/work/zernons/home-mobile.webp",
        alt: "Zernons homepage on a mobile viewport, showing the hero headline, the two primary buttons and the solar, cooling and pumping summary row.",
        width: 390,
        height: 844,
        caption: "Mobile homepage",
      },
    ],
    publishedAt: "2026-10-18",
    relatedSolution: "web-development",
  },
  {
    id: "orikma",
    slug: "orikma",
    title: "Orikma Ref & Trading",
    category: ["Client Work", "Web"],
    industry: "Industrial HVAC & refrigeration",
    type: "client",
    status: "Live",
    description:
      "Professional business website — services, products, on-site project work and quote enquiries for a Colombo-based industrial HVAC and refrigeration company.",
    problem:
      "Orikma Ref & Trading (Pvt) Ltd had no online presence that matched the scale of its industrial work — services, products and on-site projects were invisible to buyers searching online.",
    objective:
      "Build a fast, trustworthy business website that presents services, products and project capability, and routes quote enquiries clearly.",
    solution:
      "A structured business site: service pages, product catalogue presentation, project-work sections and a quote-enquiry flow, in a confident industrial layout.",
    features: [
      "Service pages for HVAC & refrigeration",
      "Product presentation",
      "On-site project work sections",
      "Quote enquiry flow",
      "Mobile-first responsive layout",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.orikma.lk/",
    featured: true,
    featuredRank: 2,
    caseStudy: [
      {
        heading: "Presentation strategy",
        body: "Industrial refrigeration work is bought on evidence of capability, so the site leads with the trades Orikma actually serves and the equipment it installs rather than a generic corporate introduction.",
        bullets: [
          "Services presented as scoped HVAC and refrigeration work",
          "Product presentation tied to the equipment the team installs",
          "Project work shown as on-site evidence, not stock imagery",
          "Quote enquiry reachable from the main navigation",
        ],
      },
      {
        heading: "Enquiry-led structure",
        body: "A buyer comparing industrial contractors needs a short path from a specific service to a conversation. Every service and product view resolves to the same quote-enquiry action, and the site stays usable on a phone from a plant room or a site visit.",
      },
    ],
    gallery: [
      {
        src: "/images/work/orikma/home-desktop.webp",
        alt: "Orikma Ref & Trading homepage on desktop — industrial refrigeration headline, deep navy navigation and a large on-site equipment visual.",
        width: 1440,
        height: 900,
        caption: "Homepage — industrial HVAC and refrigeration positioning",
        span: "full",
      },
    ],
    publishedAt: "2025-06-01",
    relatedSolution: "web-development",
  },
  {
    id: "ember-oak",
    slug: "ember-and-oak",
    title: "Ember & Oak Restaurant",
    category: ["Web", "Experiments"],
    industry: "Restaurant / hospitality (concept)",
    type: "demo",
    status: "Live",
    description:
      "Interactive menu, gallery and reservations in a dark, elegant design for an upscale restaurant concept.",
    problem:
      "An upscale restaurant concept with no online presence that matched its intended brand.",
    objective: "Design a site that converts visitors into reservations.",
    solution:
      "Interactive menu, gallery and reservations in a dark, elegant design.",
    features: ["Interactive menu", "Gallery", "Reservations flow"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ember-and-oak-teal.vercel.app/",
    gallery: [
      {
        src: "/images/work/ember-and-oak/home-desktop.webp",
        alt: "Ember & Oak restaurant homepage on desktop — dark editorial layout with a warm plated-dish photograph and reservation call to action.",
        width: 1440,
        height: 900,
        caption: "Homepage — dark, editorial restaurant concept",
        span: "full",
      },
    ],
    publishedAt: "2025-03-01",
    relatedSolution: "web-development",
  },
  {
    id: "flowspace",
    slug: "flowspace-saas",
    title: "FlowSpace SaaS",
    category: ["Web", "Web Apps", "Experiments"],
    industry: "SaaS / technology (concept)",
    type: "demo",
    status: "Live",
    description:
      "Landing page for a project-management tool — hero, features, pricing and FAQ structured to drive sign-ups.",
    problem:
      "A project-management tool concept needing a page that converts visitors.",
    objective: "Structure a landing page that drives sign-ups clearly.",
    solution:
      "Hero, features, pricing and FAQ structured to drive sign-ups clearly.",
    features: ["Hero", "Feature grid", "Pricing", "FAQ"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://flowspace-landing-black.vercel.app/",
    gallery: [
      {
        src: "/images/work/flowspace-saas/home-desktop.webp",
        alt: "FlowSpace SaaS landing page on desktop — product headline, interface preview and sign-up call to action on a light gradient background.",
        width: 1440,
        height: 900,
        caption: "Landing page — hero, features, pricing and FAQ",
        span: "full",
      },
    ],
    publishedAt: "2025-03-01",
    relatedSolution: "web-development",
  },
  {
    id: "harrington",
    slug: "harrington-and-cole",
    title: "Harrington & Cole",
    category: ["Web", "Experiments"],
    industry: "Professional services / legal (concept)",
    type: "demo",
    status: "Live",
    description:
      "Practice areas, team profiles and case results in a confident layout for a boutique law-firm concept.",
    problem: "A boutique law firm concept needing authority and trust online.",
    objective: "Build authority and trust through a confident layout.",
    solution:
      "Practice areas, team profiles and case results in a confident layout.",
    features: ["Practice areas", "Team profiles", "Case results"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://harrington-cole-llp.vercel.app/",
    gallery: [
      {
        src: "/images/work/harrington-and-cole/home-desktop.webp",
        alt: "Harrington & Cole law firm concept homepage on desktop — authoritative serif headline, practice areas and a calm professional layout.",
        width: 1440,
        height: 900,
        caption: "Homepage — authority and trust for a boutique firm",
        span: "full",
      },
    ],
    publishedAt: "2025-02-01",
    relatedSolution: "web-development",
  },
  {
    id: "lead-followup",
    slug: "ai-lead-follow-up-system",
    title: "AI Email Lead Follow-Up System",
    category: ["AI Automation", "Custom Software"],
    industry: "Cross-industry / sales",
    type: "internal",
    status: "Live",
    description:
      "Automated email lead follow-up workflow: responds to leads, generates AI-powered follow-up messages and continues engagement automatically.",
    problem:
      "Small businesses lose leads because follow-up is manual, slow and inconsistent.",
    objective:
      "Automate the follow-up loop so every lead gets a timely, personal response.",
    solution:
      "An automation workflow: lead trigger → AI-generated message → email follow-up → SMS follow-up, demonstrated end-to-end on Loom.",
    features: [
      "Automated email replies",
      "AI-generated messages",
      "Lead follow-up",
      "SMS follow-up",
    ],
    technologies: ["Automation platform", "AI models", "Email + SMS"],
    demoUrl: "https://loom.com/share/329f152f43174149913f9dbc5855d69d",
    publishedAt: "2025-07-01",
    relatedSolution: "ai-automation",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/**
 * Homepage featured slots — explicit, data-driven ordering.
 * Rendered as the two hero case-study blocks, so this must never
 * overlap with `getSupportingProjects()`.
 */
export function getFeaturedProjects(limit = 2) {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99))
    .slice(0, limit);
}

/** Every project that is not already in a featured slot. */
export function getSupportingProjects() {
  const featuredSlugs = new Set(getFeaturedProjects().map((p) => p.slug));
  return projects.filter((p) => !featuredSlugs.has(p.slug));
}

/**
 * Related projects for the "next project" block — prefers shared
 * categories, then falls back to the remaining work, never the current one.
 */
export function getRelatedProjects(slug: string, limit = 2) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);
  const others = projects.filter((p) => p.slug !== slug);
  const scored = others
    .map((p) => ({
      project: p,
      score:
        p.category.filter((c) => current.category.includes(c)).length * 2 +
        (p.relatedSolution && p.relatedSolution === current.relatedSolution ? 1 : 0) +
        (p.type === current.type ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.project.slug.localeCompare(b.project.slug));
  return scored.slice(0, limit).map((s) => s.project);
}
