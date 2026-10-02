import { Container, PageHero } from "@/components/ui/primitives";
import StartProjectForm from "@/components/forms/StartProjectForm";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Start a Project — MS Bee",
  description: "Tell MS Bee what you're trying to build, automate, or launch. A structured project brief — not a generic contact form.",
  path: "/start-project",
});

export default function StartProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="ms-bee start-project"
        title="Have a business problem worth building?"
        desc="Answer a few structured questions. MS Bee reviews every brief personally."
      />
      <section className="pb-24">
        <Container>
          <div className="max-w-3xl">
            <StartProjectForm />
          </div>
        </Container>
      </section>
    </>
  );
}
