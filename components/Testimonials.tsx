const testimonials = [
  {
    quote:
      "Working with [Name] was an absolute pleasure. They took our outdated website and turned it into something modern, fast, and beautiful. Our customers constantly compliment the new design!",
    name: "Sarah Johnson",
    role: "Owner, Coastal Bliss Cafe",
    initials: "SJ",
  },
  {
    quote:
      "We needed a landing page for our new fitness program, and [Name] delivered beyond expectations. The page loads instantly and our conversion rate went up by 40%. Highly recommend!",
    name: "Marcus Williams",
    role: "Founder, FitZone Gym",
    initials: "MW",
  },
  {
    quote:
      "I was amazed at how smooth the process was. From our first conversation to the final launch, everything was professional and transparent. The website perfectly captures our brand.",
    name: "Emily Chen",
    role: "CEO, GreenLeaf Landscaping",
    initials: "EC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Real feedback from real clients. I take pride in delivering
            exceptional results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              {/* Quote mark */}
              <svg
                className="w-10 h-10 text-accent-200 absolute top-6 right-6"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>

              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
