import { ContactForm } from "./ContactForm";

export function Contact() {
  const links = [
    {
      label: "Email",
      value: "danieloladele@gmail.com",
      href: "mailto:danieloladele@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "in/danieloladele",
      href: "https://www.linkedin.com/in/danieloladele/",
    },
    {
      label: "GitHub",
      value: "@yungdarniel",
      href: "https://github.com/yungdarniel",
    },
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
        <div className="font-mono text-xs tracking-wider uppercase text-[var(--muted)] mb-3">
          // contact
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-5">
          Let&apos;s work together.
        </h2>
        <p className="text-[var(--muted)] text-lg mb-10 max-w-xl mx-auto">
          Open to AI engineering roles and meaningful collaborations. The
          fastest way to reach me is by email.
        </p>

        <div className="mb-10">
          <ContactForm />
        </div>

        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)]">
            // or just email
          </div>
          <a
            href="mailto:danieloladele@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] hover:border-[var(--accent)]/40 hover:bg-white/[0.02] text-foreground font-medium transition-colors"
          >
            danieloladele@gmail.com
            <span aria-hidden>→</span>
          </a>
        </div>

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
