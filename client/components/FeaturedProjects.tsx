import Link from "next/link";
import { projects, statusLabels } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-300">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="mb-4 inline-block rounded-full border border-sky/20 bg-sky/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky">
              Projets
            </span>
            <h2 className="font-space text-[clamp(28px,4vw,44px)] font-extrabold text-slate-50">
              Projets récents
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky/30 px-5 py-2.5 text-sm font-semibold text-sky transition-colors duration-200 hover:bg-sky/10"
          >
            Voir tous les projets
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, i) => (
            <article
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Card header with gradient */}
              <div
                className="relative flex h-45 items-center justify-center overflow-hidden text-[64px]"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}20 0%, transparent 70%)`,
                  }}
                />
                <span className="relative z-10 filter-[drop-shadow(0_0_20px_rgba(255,255,255,0.2))]">
                  {project.emoji}
                </span>
                <span
                  className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </span>
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    project.status === "wip"
                      ? "border border-amber-400/30 bg-amber-400/15 text-amber-400"
                      : project.status === "live"
                        ? "border border-emerald-400/30 bg-emerald-400/15 text-emerald-400"
                        : "border border-white/15 bg-white/8 text-slate-300"
                  }`}
                >
                  {statusLabels[project.status]}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="mb-2.5 font-space text-[20px] font-bold text-slate-50">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-[1.7] text-muted">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Code source de ${project.title}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/4 px-3.5 py-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-slate-50"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Demo de ${project.title}`}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200"
                      style={{
                        color: project.color,
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
