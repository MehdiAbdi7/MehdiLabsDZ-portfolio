import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { featuredProjects, statusLabels } from "@/data/projects";
import SectionLabel from "./SectionLabel";

export default function FeaturedProjects() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <SectionLabel>Featured projects</SectionLabel>
          <h2 className="mt-3 text-[clamp(27px,3.6vw,38px)] font-extrabold">
            Some of my recent work
          </h2>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <li key={project.id}>
              <Link
                href={`/projects#${project.id}`}
                className="card card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/9] border-b border-line bg-raised">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-3 top-3 rounded-md border border-line bg-bg px-2 py-1 font-mono text-[12px] text-ink"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-3 top-3 rounded-md border border-line bg-bg px-2.5 py-1 text-[12px] font-semibold text-ink">
                    {statusLabels[project.status]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[19px] font-bold">{project.title}</h3>
                  <p className="mt-2 text-[14px] text-soft">
                    {project.summary}
                  </p>
                  <p className="mt-auto flex items-center justify-end gap-1.5 pt-5 text-[14px] font-semibold text-accent">
                    View project
                    <LuArrowUpRight
                      aria-hidden="true"
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link href="/projects" className="btn btn-ghost">
            All projects
            <LuArrowUpRight aria-hidden="true" className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
