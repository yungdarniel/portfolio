export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[var(--accent)] to-[var(--violet)] flex items-center justify-center font-mono text-xs font-semibold text-black">
            DO
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-medium text-foreground">
              Daniel Oladele
            </span>
            <span className="text-[10px] text-[var(--muted)] mt-1 tracking-wide">
              AI Automation Engineer
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
