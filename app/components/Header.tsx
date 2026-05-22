export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-2 w-2">
            <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>
          <span className="font-mono text-sm tracking-tight text-foreground">
            daniel<span className="text-[var(--accent)]">.</span>oladele
          </span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
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
            href="mailto:danieloladele@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors font-mono text-xs"
          >
            <span>hire me</span>
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
