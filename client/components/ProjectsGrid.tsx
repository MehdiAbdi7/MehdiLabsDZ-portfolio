"use client";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilter, type Filter } from "@/features/projects/filterSlice";
import { projects, statusLabels } from "@/data/projects";

const filters: Filter[] = ["All", "Full Stack", "Frontend"];

export default function ProjectsGrid() {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.projectFilter.active);

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  const countOf = (filter: Filter) =>
    filter === "All"
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
                  ? "border-gold bg-surface font-semibold text-ink"
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
          // L'id sert d'ancre : les cartes de l'accueil pointent vers
          // /projects#<id>.
          <article
            key={project.id}
            id={project.id}
            className="card flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/9] border-b border-line bg-raised">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-top"
              />
              <span className="absolute left-3 top-3 rounded-md border border-line bg-bg px-2.5 py-1 text-[12px] font-semibold text-ink">
                {statusLabels[project.status]}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-[22px] font-bold">{project.title}</h2>
              <p className="mt-2.5 text-[15px] text-soft">{project.summary}</p>

              <ul className="mt-4 flex flex-col gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-[14px]"
                  >
                    <span
                      aria-hidden="true"
                      className="dot mt-[7px] bg-gold"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[14px] text-faint">{project.detail}</p>

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

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-4 py-2.5 text-[14px]"
                  >
                    Open site
                    <LuArrowUpRight aria-hidden="true" className="btn-arrow" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost px-4 py-2.5 text-[14px]"
                  >
                    <SiGithub aria-hidden="true" />
                    View code
                  </a>
                )}
                {project.githubApi && (
                  <a
                    href={project.githubApi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost px-4 py-2.5 text-[14px]"
                  >
                    <SiGithub aria-hidden="true" />
                    View API code
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
