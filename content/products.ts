import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "cleansched",
    name: "CleanSched",
    category: "Micro-SaaS",
    status: "Live",
    problem:
      "Solo cleaning businesses run on texts, memory and spreadsheets — bookings slip and invoices go unpaid.",
    targetUser: "Solo cleaning business owners",
    description:
      "Scheduling and invoicing software for solo cleaning businesses: online booking, recurring cleans, automatic email reminders and paid/unpaid visibility.",
    features: [
      "Online booking",
      "Scheduling",
      "Recurring cleans",
      "Automatic email reminders",
      "Invoice tracking",
      "Paid / unpaid visibility",
    ],
    workflow: ["Booking received", "Scheduled", "Reminder sent", "Paid tracked"],
    pricing: "Live product — see site for current access.",
    cta: "Try CleanSched",
    url: "https://sparkleshine.de5.net/",
    changelog: [{ version: "v1", note: "Live — booking, scheduling and invoicing." }],
    featured: true,
    image: {
      src: "/images/products/cleansched/app-desktop.webp",
      alt: "CleanSched landing page on desktop - booking and scheduling promise beside a live cleaning-business schedule preview with payment status.",
      width: 1440,
      height: 900,
      caption: "Live product — scheduling and invoice visibility",
    },
  },
  {
    slug: "devshield",
    name: "DevShield",
    category: "Digital Products",
    status: "Live",
    problem:
      "Freelance developers start client work without protection — scope, payment and ownership go undefined.",
    targetUser: "Freelance developers",
    description:
      "A practical client-protection toolkit for freelance developers. Free starter-kit version live on Gumroad.",
    features: [
      "Free starter-kit version",
      "Made for freelance developers",
      "Full contents on the live listing",
    ],
    workflow: ["Get the kit", "Apply to client work", "Work protected"],
    pricing: "Free starter kit on Gumroad.",
    cta: "Get DevShield Free",
    url: "https://musthakcool.gumroad.com/l/devshield-free",
    changelog: [{ version: "v1", note: "Free starter kit published." }],
    featured: true,
    image: {
      src: "/images/products/devshield/listing-desktop.webp",
      alt: "DevShield Gumroad listing on desktop — navy hero reading “Stop Losing Money to Scope Creep” with the free starter-kit offer.",
      width: 1440,
      height: 900,
      caption: "Live listing — the free DevShield starter kit",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
