"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilter, type Filter } from "@/features/projects/filterSlice";
import { projects, statusLabels } from "@/data/projects";

const filters: Filter[] = ["Tous", "Full Stack", "Frontend"];

export default function ProjectsGrid() {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.projectFilter.active);

  const visible =
    active === "Tous"
      ? projects
      : projects.filter((project) => project.category === active);

  const countOf = (filter: Filter) =>
    filter === "Tous"
      ? projects.length
      : projects.filter((project) => project.category === filter).length;

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => dispatch(setFilter(filter))}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-[10px] border px-4 py-2.5 text-[15px] transition-colors ${
                isActive
                  ? "border-line-strong bg-surface font-semibold"
                  : "border-line text-soft hover:text-ink"
              }`}
            >
              {filter}
              <span className="ml-2 font-mono text-[12px] text-faint">
                {countOf(filter)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <article key={project.id} className="panel flex flex-col">
            <div className="relative aspect-[16/10] border-b border-line bg-raised">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-md border border-line bg-surface px-2.5 py-1 text-[12px] font-semibold">
                {statusLabels[project.status]}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-[22px] font-bold">
                {project.title}
              </h2>
              <p className="mt-2.5 text-[15px] text-soft">{project.summary}</p>
              <p className="mt-3 text-[14px] text-faint">{project.detail}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-line px-2 py-1 font-mono text-[12px] text-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 pt-1">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press rounded-[10px] bg-accent px-4 py-2.5 text-[14px] font-semibold text-on-accent"
                  >
                    Ouvrir le site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[10px] border border-line-strong px-4 py-2.5 text-[14px] font-semibold transition-colors hover:bg-raised"
                  >
                    Voir le code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
