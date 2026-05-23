import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-full overflow-hidden border border-white/10 bg-gradient-to-br from-[var(--accent)]/40 via-transparent to-[var(--violet)]/30">
            <Image
              src="/avatar.png"
              alt="Daniel Oladele"
              width={36}
              height={36}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-medium text-foreground">
              Daniel Oladele
            </span>
            <span className="text-[10px] text-[var(--muted)] mt-1 tracking-wide">
              AI Automation Specialist
            </span>
          </div>
        </a>
        <nav className="flex items-center gap-7 text-sm">
          <a
            href="#work"
            className="text-[var(--muted)] hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-[var(--muted)] hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/danieloladele/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
