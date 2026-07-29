export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center overflow-hidden">
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 15px 15px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="text-center relative z-10">
                <svg
                  className="w-24 h-24 text-white/20 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p className="text-white/40 text-sm font-medium">
                  Your Photo
                </p>
              </div>
            </div>
            {/* Decorative accent box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-accent-500/20 -z-10 hidden md:block" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-accent-600 font-medium text-sm tracking-wide uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-balance">
              Passionate about building websites that help small businesses
              thrive.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I&apos;m [Your Name] — a freelance web developer based in
                [Your City]. I specialize in building modern, high-performance
                websites for small businesses using the latest web technologies
                and AI-assisted development tools.
              </p>
              <p>
                My approach combines cutting-edge tools like Next.js and
                Tailwind CSS with AI-powered workflows to deliver professional
                websites in a fraction of the traditional time — without
                compromising on quality.
              </p>
              <p>
                Whether you need a brand-new business website, a high-converting
                landing page, or a complete redesign, I&apos;ll work closely with
                you to bring your vision to life. Let&apos;s build something great
                together.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Happy Clients" },
                { value: "5★", label: "Avg. Rating" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-accent-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
