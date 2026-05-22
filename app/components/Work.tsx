import { projects } from "../lib/projects";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <section id="work" className="px-6 py-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent)] mb-2">
              // selected work
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Production systems, not side projects.
            </h2>
            <p className="mt-3 text-[var(--muted)] max-w-2xl">
              Each of these runs in production today — shipping autonomous
              decisions, reports, and actions across finance, HR, and growth
              workflows.
            </p>
          </div>
          <div className="font-mono text-xs text-[var(--muted)]">
            {projects.length.toString().padStart(2, "0")} projects
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
