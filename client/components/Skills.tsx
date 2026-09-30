import Link from "next/link";
import type { IconType } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import {
  SiDocker,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { skills, type Skill, type SkillIcon } from "@/data/skills";
import SectionLabel from "./SectionLabel";

const icons: Record<SkillIcon, IconType> = {
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  node: SiNodedotjs,
  mongodb: SiMongodb,
  socketio: SiSocketdotio,
  redux: SiRedux,
  zod: SiZod,
  tailwind: SiTailwindcss,
  git: SiGit,
  postgresql: SiPostgresql,
  docker: SiDocker,
};

/** Le contenu d'une carte, identique qu'elle soit cliquable ou non. */
function SkillBody({ skill }: { skill: Skill }) {
  const Icon = icons[skill.icon];

  return (
    <>
      <Icon
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-[26px] text-accent"
      />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-display text-[17px] font-bold">
            {skill.name}
          </span>
          {skill.learning && (
            <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-faint">
              Learning
            </span>
          )}
        </span>
        <span className="mt-1 block text-[14px] leading-snug text-soft">
          {skill.proof}
        </span>
      </span>
    </>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <SectionLabel>My skills</SectionLabel>
        <h2 className="mt-3 text-[clamp(27px,3.6vw,38px)] font-extrabold">
          What I use, and where
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[16px] text-soft">
          No percentages. Each skill points to the project where I used it.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.learning ? (
              <div className="card flex h-full items-start gap-4 p-5">
                <SkillBody skill={skill} />
              </div>
            ) : (
              <Link
                href={
                  skill.projectId ? `/projects#${skill.projectId}` : "/projects"
                }
                className="card card-hover flex h-full items-start gap-4 p-5"
              >
                <SkillBody skill={skill} />
                <LuArrowUpRight
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-faint"
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
