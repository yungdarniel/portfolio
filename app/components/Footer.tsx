export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <div className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Daniel Oladele. All rights reserved.
        </div>
        <div className="text-xs text-[var(--muted)]">
          Lagos · GMT+1 · Available worldwide
        </div>
      </div>
    </footer>
  );
}
