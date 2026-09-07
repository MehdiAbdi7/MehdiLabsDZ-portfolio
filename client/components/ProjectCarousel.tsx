"use client";

import Image from "next/image";
import { useCarousel } from "@/features/carousel/useCarousel";
import { featuredProjects, statusLabels } from "@/data/projects";

export default function ProjectCarousel() {
  const { index, paused, next, prev, goTo, pause, resume } = useCarousel({
    length: featuredProjects.length,
    delay: 6000,
  });

  const project = featuredProjects[index];
  if (!project) return null;

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Projets récents"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      className="mx-auto max-w-6xl px-5 py-16"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold">
          Projets récents
        </h2>
        <p className="max-w-[46ch] text-[15px] text-soft">
          Quatre applications construites pour de vrais utilisateurs, du cadrage
          du besoin jusqu&apos;à la mise en production.
        </p>
      </div>

      <div className="panel overflow-hidden">
        <div
          key={project.id}
          aria-live={paused ? "polite" : "off"}
          className="grid lg:grid-cols-2"
        >
          <div className="relative aspect-16/10 bg-raised lg:aspect-auto lg:min-h-105">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-2 sm:p-3"
              priority={index === 0}
            />
            <span className="absolute left-4 top-4 rounded-md border border-line bg-surface px-2.5 py-1 text-[12px] font-semibold">
              {statusLabels[project.status]}
            </span>
          </div>

          <div className="flex flex-col justify-center border-t border-line p-6 sm:p-8 lg:border-l lg:border-t-0">
            <h3 className="font-display text-[26px] font-bold">
              {project.title}
            </h3>
            <p className="mt-3 text-[15px] text-soft">{project.summary}</p>

            <ul className="mt-5 flex flex-col gap-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-accent"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-line px-2 py-1 font-mono text-[12px] text-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press rounded-[10px] bg-accent px-5 py-2.5 text-[15px] font-semibold text-on-accent"
                >
                  Ouvrir le site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[10px] border border-line-strong px-5 py-2.5 text-[15px] font-semibold transition-colors hover:bg-raised"
                >
                  Voir le code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Commandes : la pause est obligatoire dès qu'un contenu bouge seul. */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-2">
          {featuredProjects.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === index ? "true" : undefined}
                className={`cursor-pointer rounded-md border px-3 py-1.5 text-[13px] transition-colors ${
                  i === index
                    ? "border-line-strong font-semibold text-ink"
                    : "border-line text-faint hover:text-ink"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={paused ? resume : pause}
            className="h-11 cursor-pointer rounded-[10px] border border-line px-4 text-[13px] font-medium"
          >
            {paused ? "Reprendre le défilement" : "Mettre en pause"}
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Projet précédent"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[10px] border border-line"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Projet suivant"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[10px] border border-line"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
