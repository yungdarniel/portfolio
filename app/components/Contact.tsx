export function Contact() {
  const links = [
    { label: "Email", value: "danieloladele@gmail.com", href: "mailto:danieloladele@gmail.com" },
    { label: "LinkedIn", value: "in/danieloladele", href: "https://www.linkedin.com/in/danieloladele/" },
    { label: "GitHub", value: "@yungdarniel", href: "https://github.com/yungdarniel" },
    { label: "Location", value: "Lagos, Nigeria · GMT+1", href: null },
  ];

  return (
    <section
      id="contact"
      className="px-6 py-24 border-t border-white/[0.06] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full bg-[var(--accent)]/10 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent)] mb-3">
          // let&apos;s build something
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-5">
          Have a workflow worth automating?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-10 max-w-xl mx-auto">
          I take on a small number of engagements per quarter. If you have a
          process bleeding hours or dollars, let&apos;s talk.
        </p>

        <a
          href="mailto:danieloladele@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black font-medium hover:bg-[var(--accent)]/90 transition-colors mb-12"
        >
          danieloladele@gmail.com
          <span aria-hidden>→</span>
        </a>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden text-left">
          {links.map((link) => (
            <div key={link.label} className="bg-[var(--background)] p-4 sm:p-5">
              <div className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)] mb-1">
                {link.label}
              </div>
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm hover:text-[var(--accent)] transition-colors break-all"
                >
                  {link.value}
                </a>
              ) : (
                <div className="text-sm text-foreground">{link.value}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
