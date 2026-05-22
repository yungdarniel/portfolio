export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <div className="font-mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Daniel Oladele · Built with Next.js &
          deployed on Vercel
        </div>
        <div className="font-mono text-xs text-[var(--muted)]">
          <span className="text-[var(--accent)]">$</span> npm run hire
        </div>
      </div>
    </footer>
  );
}
