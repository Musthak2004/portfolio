import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import FeaturedWork from "@/components/home/FeaturedWork";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import AutomationFlow from "@/components/home/AutomationFlow";
import ServicesGrid from "@/components/home/ServicesGrid";
import Founder from "@/components/home/Founder";
import { BuildStatus, InsightsPreview } from "@/components/home/StatusInsights";
import { CTASection } from "@/components/ui/primitives";
import { projects } from "@/content/work";
import { products } from "@/content/products";
import { articles } from "@/content/labs-insights";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "MS Bee — Software + AI Systems",
  description:
    "MS Bee builds software, AI automation systems, custom digital solutions, micro-SaaS products, and digital products. Founder-led by Ruwaisdeen Muhammad Musthak.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedWork projects={projects} />
      <ProductsShowcase products={products} />
      <AutomationFlow />
      <ServicesGrid />
      <Founder />
      <BuildStatus />
      <InsightsPreview articles={articles} />
      <CTASection />
    </>
  );
}
