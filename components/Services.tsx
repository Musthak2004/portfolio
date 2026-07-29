const offerings = [
  {
    title: "AI Customer Support Agents",
    description:
      "24/7 chatbots that handle 80% of inquiries using your knowledge base. Trained on your docs, FAQ, and product info — answers feel human, escalate only when needed.",
    tags: ["n8n", "Claude AI", "OpenAI", "WhatsApp/Web"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "CRM & Lead Automation",
    description:
      "Capture, enrich, and route leads from any source — web forms, email, LinkedIn, ads — straight into HubSpot, Salesforce, or Google Sheets. No more manual data entry.",
    tags: ["Make", "Zapier", "HubSpot", "Sheets"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "Data Pipelines & Sync",
    description:
      "Scrape, transform, and sync data between 20+ tools without manual work. Clean ETL pipelines that keep your systems aligned in real time.",
    tags: ["Python", "n8n", "PostgreSQL", "MongoDB"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "AI Voice Agents",
    description:
      "Inbound and outbound calling with natural conversation. Built on Vapi, Retell, and Twilio — handles bookings, support, and follow-ups at scale.",
    tags: ["Vapi", "Retell", "Twilio", "AI"],
    gradient: "from-accent/10 to-transparent",
  },
  {
    title: "Custom AI Workflows",
    description:
      "Document processing, content generation, email sequences, and anything else — powered by Claude and GPT. Tailored to your exact business logic.",
    tags: ["Claude AI", "OpenAI", "Python", "n8n"],
    gradient: "from-accent/10 to-transparent",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/what-i-build</p>
          <h2 className="section-heading mb-4">Automations I Ship</h2>
          <p className="section-desc">
            Every workflow comes with monitoring, error handling, and documentation
            — so you&apos;re never left guessing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="card p-6 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-ink-dim border border-surface-border px-2 py-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-ink text-base">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 font-mono text-[10px] text-ink-dim bg-[#111118] border border-surface-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
