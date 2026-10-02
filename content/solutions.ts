import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Modern web applications designed for speed, usability, and future expansion.",
    description:
      "Business websites, landing pages and web applications built with modern tooling — fast, maintainable, and ready to grow with the business.",
    problems: [
      "Outdated site that does not reflect the business",
      "Slow pages that lose visitors",
      "No clear path from visit to enquiry",
    ],
    outcomes: [
      "A fast site that loads in under 2 seconds on typical connections",
      "Clear service presentation and enquiry flow",
      "A codebase the business can extend without a rewrite",
    ],
    capabilities: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "Performance optimisation",
      "SEO foundations",
    ],
    process: [
      { step: "Scope", detail: "Define pages, content and the single conversion goal." },
      { step: "Build", detail: "Design and develop with Next.js + TypeScript." },
      { step: "Launch", detail: "Deploy, verify SEO basics, hand over." },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    whoFor: ["Local businesses", "Professional services", "Early-stage startups"],
    faqs: [
      {
        q: "How long does a typical site take?",
        a: "Small business sites are typically scoped in weeks, not months — scope is fixed before build starts.",
      },
      {
        q: "What do you build with?",
        a: "Next.js and TypeScript, deployed on modern hosting — fast, maintainable, and easy to extend.",
      },
    ],
    relatedWork: ["orikma", "ember-and-oak", "flowspace-saas"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Cross-platform mobile apps from a single codebase.",
    description:
      "MS Bee designs and builds focused mobile applications — currently scoping early builds with modern cross-platform tooling.",
    problems: [
      "Customers expect a mobile experience",
      "Two native codebases are too expensive early on",
    ],
    outcomes: ["One codebase for iOS and Android", "A testable prototype fast"],
    capabilities: ["App scoping", "Cross-platform builds", "API integration"],
    process: [
      { step: "Scope", detail: "Define the smallest useful app slice." },
      { step: "Prototype", detail: "Build and test on real devices." },
      { step: "Launch", detail: "Prepare store assets and release." },
    ],
    technologies: ["React Native", "TypeScript", "Expo"],
    whoFor: ["Founders validating an app idea", "Businesses extending web to mobile"],
    faqs: [{ q: "Do you build native apps?", a: "MS Bee focuses on cross-platform builds from a single codebase to keep early-stage costs down." }],
    relatedWork: [],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Business workflows that run themselves.",
    description:
      "Lead follow-up, support assistance and workflow automation — AI systems that respond, route and engage without manual effort.",
    problems: [
      "Leads go cold because follow-up is manual",
      "Support questions repeat daily",
      "Data moves by copy-paste between tools",
    ],
    outcomes: [
      "Every lead gets a timely follow-up",
      "Repetitive questions answered automatically",
      "Workflows connected end to end",
    ],
    capabilities: [
      "Lead follow-up systems",
      "AI support agents",
      "Email + SMS automation",
      "Workflow integration",
    ],
    process: [
      { step: "Map", detail: "Document the current manual workflow." },
      { step: "Automate", detail: "Build the AI + integration loop." },
      { step: "Verify", detail: "Test with real data, then hand over." },
    ],
    technologies: ["AI models", "Automation platforms", "Email + SMS APIs"],
    whoFor: ["Agencies", "Real estate", "Service businesses"],
    faqs: [
      {
        q: "Can I see a real example?",
        a: "Yes — the AI Email Lead Follow-Up System is demonstrated end to end, with a live Loom walkthrough.",
      },
    ],
    relatedWork: ["ai-lead-follow-up-system"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    tagline: "Business tools and internal systems that fit how you work.",
    description:
      "Scheduling systems, internal dashboards and business tools — scoped small, built to be extended.",
    problems: [
      "Spreadsheets breaking under real usage",
      "Off-the-shelf tools that almost fit",
    ],
    outcomes: ["A tool shaped to the actual workflow", "A system the team can extend"],
    capabilities: ["Internal tools", "Dashboards", "Scheduling systems", "Integrations"],
    process: [
      { step: "Scope", detail: "Define the workflow and data model." },
      { step: "Build", detail: "Ship the smallest working system." },
      { step: "Extend", detail: "Add modules without rewrites." },
    ],
    technologies: ["Next.js", "TypeScript", "Postgres", "Python"],
    whoFor: ["Solo operators", "Small teams"],
    faqs: [{ q: "Do you take on large enterprise builds?", a: "No — MS Bee focuses on focused tools and systems that a small team can own and extend." }],
    relatedWork: ["ai-lead-follow-up-system"],
  },
  {
    slug: "seo",
    title: "SEO",
    tagline: "Technical foundations that help buyers find the business.",
    description:
      "Technical SEO and content structure for MS Bee builds — fast pages, clean metadata, and structured content.",
    problems: ["Invisible in search", "Slow pages hurting rankings"],
    outcomes: ["Clean technical foundations", "Page-level SEO on every build"],
    capabilities: ["Technical audits", "On-page SEO", "Metadata systems", "Sitemaps"],
    process: [
      { step: "Audit", detail: "Check speed, metadata and structure." },
      { step: "Fix", detail: "Resolve technical blockers." },
      { step: "Structure", detail: "Set up scalable content patterns." },
    ],
    technologies: ["Next.js metadata", "Schema.org", "Search Console"],
    whoFor: ["Businesses with a new or rebuilt site"],
    faqs: [{ q: "Do you guarantee rankings?", a: "No. MS Bee builds correct technical foundations and honest content structure — never guaranteed positions." }],
    relatedWork: ["orikma"],
  },
  {
    slug: "technical-content",
    title: "Technical Content",
    tagline: "Clear writing for technical products.",
    description:
      "Documentation, technical articles and ghostwritten content for builders — practical, accurate, no fluff.",
    problems: ["Product knowledge stuck in one person's head", "Docs nobody reads"],
    outcomes: ["Clear developer-facing docs", "Articles that teach"],
    capabilities: ["Documentation", "Technical tutorials", "Ghostwriting"],
    process: [
      { step: "Extract", detail: "Interview and gather source material." },
      { step: "Draft", detail: "Write and verify technically." },
      { step: "Publish", detail: "Format for the target platform." },
    ],
    technologies: ["Markdown/MDX", "Docs tooling"],
    whoFor: ["Developers", "Technical founders"],
    faqs: [{ q: "What do you write?", a: "Docs, tutorials and technical articles — verified against real builds." }],
    relatedWork: [],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
