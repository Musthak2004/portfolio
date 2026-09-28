const stats = [
  { value: "39+", label: "public GitHub repositories" },
  { value: "2", label: "publicly available products" },
  { value: "245+", label: "business concepts explored" },
  { value: "MS Bee", label: "building in public" },
];

export default function ProofStats() {
  return (
    <section aria-label="Building proof" className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card p-5 md:p-6 text-center sm:text-left"
            >
              <dd className="text-2xl md:text-3xl font-bold font-mono text-ink">
                {s.value}
              </dd>
              <dt className="text-xs md:text-sm text-ink-muted mt-1.5 leading-snug">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
