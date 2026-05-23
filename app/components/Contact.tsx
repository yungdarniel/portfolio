import { ContactCTAButton } from "./ContactCTAButton";

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
          Open to AI automation roles and meaningful collaborations. Open the
          contact panel for a quick brief — or reach me on any channel below.
        </p>

        <div className="flex items-center justify-center mb-14">
          <ContactCTAButton />
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
                  className="block text-sm hover:text-[var(--accent)] transition-colors truncate"
                  title={link.value}
                >
                  {link.value}
                </a>
              ) : (
                <div
                  className="block text-sm text-foreground truncate"
                  title={link.value}
                >
                  {link.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
