import { ReactNode } from "react";

const services = [
  {
    title: "Business Websites",
    description:
      "A professional, mobile-friendly website that tells your brand's story and converts visitors into customers. Perfect for local businesses, startups, and service providers.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
        />
      </svg>
    ),
    features: ["SEO-optimized", "Contact forms", "Analytics ready"],
  },
  {
    title: "Landing Pages",
    description:
      "High-converting, single-page campaigns designed to capture leads, promote launches, or drive specific actions. Fast-loading and built for results.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    features: ["A/B test ready", "Lightning fast", "CTA optimized"],
  },
  {
    title: "Website Redesigns",
    description:
      "Give your outdated website a modern makeover. Improved UX, fresh design, better performance, and a seamless experience across all devices.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    features: ["Modern UI", "Better UX", "Performance boost"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle">
            Tailored web solutions that help small businesses establish a strong
            online presence and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mb-6 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <svg
                      className="w-4 h-4 text-accent-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
