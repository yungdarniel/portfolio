export function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] mb-8 fade-up">
          <span className="relative flex h-1.5 w-1.5">
            <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          <span className="font-mono text-xs text-[var(--muted)]">
            Available for AI engineering roles
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] fade-up">
          I architect{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[var(--accent)] via-cyan-300 to-[var(--violet)] bg-clip-text text-transparent">
              autonomous agents
            </span>
          </span>
          <br />
          that ship to production.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] leading-relaxed fade-up">
          AI Automation Engineer with 3+ years building end-to-end orchestration
          pipelines for Tier-1 financial institutions, HR-tech, and growth
          teams. I turn business bottlenecks into resilient, measurable systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 fade-up">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-black font-medium hover:bg-[var(--accent)]/90 transition-colors"
          >
            View selected work
            <span aria-hidden>↓</span>
          </a>
          <a
            href="mailto:danieloladele@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.03] transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {[
            { value: "8+", label: "Agents in production" },
            { value: "80%", label: "Support tickets deflected" },
            { value: "15h", label: "Senior research saved / wk" },
            { value: "$40K+", label: "Annualised value per client" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--background)] p-5 sm:p-6"
            >
              <div className="font-mono text-2xl sm:text-3xl text-[var(--accent)] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-[var(--muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
