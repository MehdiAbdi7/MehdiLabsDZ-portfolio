"use client";

import { useState } from "react";
import { projects, statusLabels } from "@/data/projects";

const categories = ["Tous", "Full Stack", "Frontend"];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryCount = (category: string) =>
    category === "Tous"
      ? projects.length
      : projects.filter((project) => project.category === category).length;

  return (
    <>
      {/* Hero */}
      <section className="grid-bg px-6 pb-15 pt-35 text-center">
        <div className="mx-auto max-w-175">
          <span className="mb-5 inline-block rounded-full border border-sky/20 bg-sky/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky">
            Portfolio
          </span>
          <h1 className="mb-5 font-space text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-slate-50">
            Mes <span className="gradient-text">projets</span>
          </h1>
          <p className="text-[17px] leading-[1.8] text-muted">
            {projects.length} projets construits pour de vrais utilisateurs — du
            cadrage du besoin à la mise en production.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 pb-15">
        <div className="mx-auto max-w-300">
          <div className="mb-14 flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 rounded-[10px] border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "border-sky/40 bg-sky/10 text-sky"
                      : "border-white/10 bg-white/3 text-muted hover:border-sky/20 hover:text-slate-50"
                  }`}
                  aria-pressed={isActive}
                >
                  {category}
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs ${isActive ? "bg-sky/20 text-sky" : "bg-white/5 text-slate-500"}`}
                  >
                    {getCategoryCount(category)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects grid */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project, index) => (
              <article
                key={project.id}
                className="glass-card overflow-hidden rounded-2xl"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Card visual */}
                <div
                  className="relative flex h-50 items-center justify-center overflow-hidden text-[72px]"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 40% 40%, ${project.color}25 0%, transparent 65%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(${project.color}08 1px, transparent 1px), linear-gradient(90deg, ${project.color}08 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <span className="relative z-10 filter-[drop-shadow(0_0_24px_rgba(255,255,255,0.15))]">
                    {project.emoji}
                  </span>

                  <div className="absolute right-3 top-3 flex gap-1.5">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        project.status === "wip"
                          ? "border border-amber-400/30 bg-amber-400/15 text-amber-400"
                          : project.status === "live"
                            ? "border border-emerald-400/30 bg-emerald-400/15 text-emerald-400"
                            : "border border-white/15 bg-white/8 text-slate-300"
                      }`}
                    >
                      {statusLabels[project.status]}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}30`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h2 className="mb-2.5 font-space text-[20px] font-bold text-slate-50">
                    {project.title}
                  </h2>
                  <p className="mb-2 text-sm leading-[1.7] text-muted">
                    {project.description}
                  </p>
                  <p className="mb-5 text-[13px] leading-[1.6] text-slate-500">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/4 px-2.5 py-1 text-[11px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Code source — ${project.title}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/4 px-3 py-2.5 text-[13px] font-semibold text-muted transition-colors duration-200 hover:text-slate-50"
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
                        aria-label={`Demo — ${project.title}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-[13px] font-bold transition-colors duration-200"
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
                        Demo live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="px-6 py-20 text-center text-slate-500">
              <p className="mb-4 text-[48px]">🔍</p>
              <p className="text-base">Aucun projet dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
