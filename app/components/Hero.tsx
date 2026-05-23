import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] mb-8 fade-up">
              <span className="relative flex h-1.5 w-1.5">
                <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-mono text-xs text-[var(--muted)]">
                Available for AI automation roles
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.08] fade-up text-balance">
              I architect{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] via-cyan-300 to-[var(--violet)] bg-clip-text text-transparent">
                autonomous agents
              </span>{" "}
              that ship to production.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] leading-relaxed fade-up">
              AI Automation Specialist with 3+ years building end-to-end
              orchestration pipelines for Tier-1 financial institutions,
              HR-tech, and growth teams. I turn business bottlenecks into
              resilient, measurable systems.
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
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.03] transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          <Portrait />
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

function Portrait() {
  return (
    <div className="relative mx-auto max-w-sm lg:max-w-none lg:justify-self-end fade-up">
      {/* Outer glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--violet)]/20 blur-2xl"
      />
      {/* Frame */}
      <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[var(--accent)]/10 via-black/40 to-[var(--violet)]/10 aspect-square">
        {/* Grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <Image
          src="/headshot.png"
          alt="Daniel Oladele portrait"
          width={900}
          height={900}
          priority
          className="relative h-full w-full object-cover object-top"
        />
        {/* Bottom fade to background */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent"
        />
      </div>

      {/* Floating credential chip */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-4 lg:translate-x-0 bg-black/80 backdrop-blur-md border border-white/[0.08] rounded-full px-4 py-2 flex items-center gap-2 shadow-lg shadow-black/40">
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] live-dot"
        />
        <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)]">
          Lagos · GMT+1
        </span>
      </div>
    </div>
  );
}
