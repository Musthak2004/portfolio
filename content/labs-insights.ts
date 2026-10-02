import type { Lab, Article } from "@/types";

export const labs: Lab[] = [
  {
    slug: "lead-follow-up-system",
    title: "AI Lead Follow-Up Prototype",
    status: "Live",
    problem: "Leads go cold when follow-up depends on manual effort.",
    idea: "Trigger → AI-drafted message → email → SMS, fully automatic.",
    learned: [
      "Speed of first response matters more than message length",
      "AI drafts need human-tone guardrails",
      "SMS as second touch lifts engagement",
    ],
    demoUrl: "https://loom.com/share/329f152f43174149913f9dbc5855d69d",
    relatedArticle: "ai-lead-follow-up-for-service-businesses",
    updatedAt: "2025-08-01",
  },
  {
    slug: "ms-bee-os",
    title: "MS Bee Company OS",
    status: "Prototype",
    problem: "Company knowledge, leads and content live in scattered tools.",
    idea: "This website as layer one: public site → content → leads → future admin.",
    learned: [
      "Structured content models remove page rebuilds",
      "Public site must work without admin",
      "Lead capture shapes the whole IA",
    ],
    updatedAt: "2026-01-01",
  },
  {
    slug: "micro-saas-experiments",
    title: "Micro-SaaS Experiments",
    status: "Exploring",
    problem: "Which small, painful workflow justifies a focused paid tool?",
    idea: "Ship tiny tools (like CleanSched) and learn from real usage.",
    learned: ["Narrow beats broad", "Billing visibility is a killer feature"],
    relatedProduct: "cleansched",
    updatedAt: "2025-09-01",
  },
];

export function getLab(slug: string) {
  return labs.find((l) => l.slug === slug);
}

export const articles: Article[] = [
  {
    slug: "ai-lead-follow-up-for-service-businesses",
    title: "Why service businesses lose leads (and how automation fixes it)",
    excerpt:
      "Most lost leads are a follow-up problem, not a marketing problem. Here is the system MS Bee built to fix it.",
    category: "Automation",
    tags: ["AI", "Automation", "Lead follow-up"],
    author: "R.M. Musthak",
    publishedAt: "2025-08-10",
    updatedAt: "2025-08-10",
    readingMinutes: 5,
    relatedSolution: "ai-automation",
    relatedWork: "ai-lead-follow-up-system",
    body: [
      "Most service businesses do not have a lead problem. They have a follow-up problem: enquiries arrive, nobody replies fast enough, and the lead goes cold.",
      "The fix is a simple loop — acknowledge immediately, follow up automatically, and escalate to a human only when the lead responds.",
      "MS Bee built this as the AI Email Lead Follow-Up System: lead trigger, AI-drafted message, email follow-up, then SMS. The full workflow is demonstrated on Loom.",
      "Lesson one: speed of first response matters more than message length. Lesson two: AI drafts need tone guardrails. Lesson three: SMS as a second touch lifts engagement.",
      "If your business loses enquiries to slow replies, this is the first system worth automating.",
    ],
  },
  {
    slug: "from-freelancer-to-company-os",
    title: "From freelancer portfolio to Company OS",
    excerpt:
      "How MS Bee is rebuilding its website as company infrastructure — not a prettier portfolio.",
    category: "Founder Journey",
    tags: ["Build in Public", "Business Systems"],
    author: "R.M. Musthak",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingMinutes: 4,
    relatedSolution: "web-development",
    body: [
      "The question is not how to make the portfolio prettier. It is how the website becomes infrastructure for the company being built.",
      "That means structured content: work, solutions, products, labs and insights as data — not duplicated markup. One new project means adding content, not building a page.",
      "It also means honest positioning: founder-led today, company architecture for tomorrow. No fake team, no fake numbers.",
      "This site is layer one of the MS Bee Company OS. Admin and client portal come later — and the public site will keep working without them.",
    ],
  },
  {
    slug: "scoping-small-software-that-ships",
    title: "Scoping small software that actually ships",
    excerpt: "The scoping discipline behind CleanSched, DevShield and client builds.",
    category: "Software Engineering",
    tags: ["Scoping", "Micro-SaaS", "Process"],
    author: "R.M. Musthak",
    publishedAt: "2025-11-02",
    updatedAt: "2025-11-02",
    readingMinutes: 4,
    relatedSolution: "custom-software",
    relatedProduct: "cleansched",
    body: [
      "Small software ships when the scope is ruthless: one workflow, one user, one conversion goal.",
      "CleanSched does booking → scheduling → reminders → paid tracking. Nothing else. That narrowness is why it exists.",
      "The same discipline applies to client work: define pages, content and the single conversion goal before building anything.",
      "Start with the smallest working system. Extend without rewrites.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
