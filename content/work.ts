import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "orikma",
    slug: "orikma",
    title: "Orikma Ref & Trading",
    category: ["Client Work", "Web"],
    industry: "Industrial HVAC & Refrigeration",
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
    publishedAt: "2025-06-01",
    relatedSolution: "web-development",
  },
  {
    id: "ember-oak",
    slug: "ember-and-oak",
    title: "Ember & Oak Restaurant",
    category: ["Web", "Experiments"],
    industry: "Restaurant / Hospitality",
    type: "demo",
    status: "Live",
    description:
      "Interactive menu, gallery and reservations in a dark, elegant design for an upscale restaurant concept.",
    problem:
      "An upscale restaurant with no online presence that matched its brand.",
    objective: "Design a site that converts visitors into reservations.",
    solution:
      "Interactive menu, gallery and reservations in a dark, elegant design.",
    features: ["Interactive menu", "Gallery", "Reservations flow"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ember-and-oak-teal.vercel.app/",
    publishedAt: "2025-03-01",
    relatedSolution: "web-development",
  },
  {
    id: "flowspace",
    slug: "flowspace-saas",
    title: "FlowSpace SaaS",
    category: ["Web", "Web Apps", "Experiments"],
    industry: "SaaS / Technology",
    type: "demo",
    status: "Live",
    description:
      "Landing page for a project-management tool — hero, features, pricing and FAQ structured to drive sign-ups.",
    problem:
      "A project-management tool needing a page that converts visitors.",
    objective: "Structure a landing page that drives sign-ups clearly.",
    solution:
      "Hero, features, pricing and FAQ structured to drive sign-ups clearly.",
    features: ["Hero", "Feature grid", "Pricing", "FAQ"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://flowspace-landing-black.vercel.app/",
    publishedAt: "2025-03-01",
    relatedSolution: "web-development",
  },
  {
    id: "harrington",
    slug: "harrington-and-cole",
    title: "Harrington & Cole",
    category: ["Web", "Experiments"],
    industry: "Professional Services / Legal",
    type: "demo",
    status: "Live",
    description:
      "Practice areas, team profiles and case results in a confident layout for a boutique law-firm concept.",
    problem: "A boutique law firm needing authority and trust online.",
    objective: "Build authority and trust through a confident layout.",
    solution:
      "Practice areas, team profiles and case results in a confident layout.",
    features: ["Practice areas", "Team profiles", "Case results"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://harrington-cole-llp.vercel.app/",
    publishedAt: "2025-02-01",
    relatedSolution: "web-development",
  },
  {
    id: "lead-followup",
    slug: "ai-lead-follow-up-system",
    title: "AI Email Lead Follow-Up System",
    category: ["AI Automation", "Custom Software"],
    industry: "Cross-industry / Sales",
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
    featured: true,
    publishedAt: "2025-07-01",
    relatedSolution: "ai-automation",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
