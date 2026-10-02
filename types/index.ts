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

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory[];
  industry: string;
  type: "client" | "demo" | "internal";
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
  publishedAt: string;
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
