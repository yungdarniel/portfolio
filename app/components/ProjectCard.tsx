import type { Project } from "../lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[var(--accent)]/30 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      </div>

      <div className="relative p-6 sm:p-7 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)] px-2 py-0.5 rounded-full border border-white/10">
            {project.domain}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-[var(--muted)]">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "Live demo"
                  ? "bg-[var(--accent)]"
                  : project.status === "Production"
                    ? "bg-violet-400"
                    : "bg-zinc-500"
              }`}
            />
            {project.status}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight mb-1">
          {project.name}
        </h3>
        <p className="font-mono text-xs text-[var(--accent)] mb-4">
          {project.tagline}
        </p>

        <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="rounded-lg bg-black/40 border border-white/[0.06] p-3 mb-5">
          <div className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)] mb-1">
            Impact
          </div>
          <div className="text-sm text-foreground">{project.impact}</div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] tracking-tight px-2 py-1 rounded-md bg-white/[0.04] text-[var(--muted)] border border-white/[0.04]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-2.5 transition-all"
            >
              Live demo
              <span aria-hidden>→</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] font-mono text-xs">
              NDA · case study on request
            </span>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
