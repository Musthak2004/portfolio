const testimonials = [
  {
    quote:
      "Musthak built a complete e-commerce platform for my business. The attention to detail and clean code made all the difference. Highly recommend for any Django project.",
    name: "Client",
    role: "Small Business Owner",
  },
  {
    quote:
      "Working with Musthak on the YouTube clone project was a great experience. Strong technical skills, clear communication, and a genuine passion for building quality software.",
    name: "Collaborator",
    role: "Open Source Contributor",
  },
  {
    quote:
      "The hotel booking system exceeded expectations. Role-based access for customers and owners was implemented perfectly. A pleasure to work with.",
    name: "Client",
    role: "Hotel Owner",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/testimonials</p>
          <h2 className="section-heading mb-4">What People Say</h2>
          <p className="section-desc">
            Feedback from clients and collaborators I&apos;ve worked with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6 flex flex-col">
              {/* Quote icon */}
              <svg className="w-6 h-6 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.647-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.647-2.917-1.179z" />
              </svg>

              <p className="text-sm text-ink-muted leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-surface-border pt-4">
                <p className="font-medium text-ink text-sm">{t.name}</p>
                <p className="text-xs text-ink-dim">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
