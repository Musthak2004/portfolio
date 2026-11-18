export type WorkCategory =
  | "Web"
  | "Web Apps"
  | "Mobile"
  | "AI Automation"
  | "Custom Software"
  | "Client Work"
  | "Experiments";

export type PublishStatus = "Live" | "In Progress" | "Prototype" | "Archived";
export type LabStatus = "Exploring" | "Prototype" | "Testing" | "Live" | "Archived";
export type ProductCategory =
  | "Micro-SaaS"
  | "Developer Products"
  | "Digital Products"
  | "Experimental";
export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "PROPOSAL"
  | "NEGOTIATION"
  | "WON"
  | "LOST";

/** Honest project classification — never present a concept as a real client. */
export type ProjectType = "client" | "demo" | "internal";

/** A single verified screenshot of the shipped project. */
export interface ProjectShot {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** wider layout slot in the case-study gallery */
  span?: "full" | "half";
}

/** Optional long-form case-study section — used by flagship client work. */
export interface CaseStudySection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory[];
  industry: string;
  type: ProjectType;
  status: PublishStatus;
  description: string;
  problem: string;
  objective: string;
  solution: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  /** ordering of the homepage featured slots — lower renders first */
  featuredRank?: number;
  /** extra long-form sections rendered after section 05 */
  caseStudy?: CaseStudySection[];
  /** verified screenshots for the visual gallery */
  gallery?: ProjectShot[];
  publishedAt: string;
  updatedAt?: string;
  relatedSolution?: string;
}

export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problems: string[];
  outcomes: string[];
  capabilities: string[];
  process: { step: string; detail: string }[];
  technologies: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  relatedWork: string[];
}

/** A verified screenshot of a live product surface. */
export interface ProductShot {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  status: PublishStatus;
  problem: string;
  targetUser: string;
  description: string;
  features: string[];
  workflow: string[];
  pricing: string;
  cta: string;
  url: string;
  changelog: { version: string; note: string }[];
  featured?: boolean;
  /** real screenshot captured from the live listing or app */
  image?: ProductShot;
}

export interface Lab {
  slug: string;
  title: string;
  status: LabStatus;
  problem: string;
  idea: string;
  learned: string[];
  demoUrl?: string;
  relatedProduct?: string;
  relatedArticle?: string;
  updatedAt: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  relatedSolution?: string;
  relatedWork?: string;
  relatedProduct?: string;
  body: string[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  company?: string;
  industry?: string;
  service: string;
  problem: string;
  currentSystem?: string;
  expectedOutcome?: string;
  timeline?: string;
  budget?: string;
  source: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}
