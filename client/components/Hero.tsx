import Link from "next/link";
import type { IconType } from "react-icons";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import {
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { profile } from "@/data/profile";
import HeroTitle from "./HeroTitle";
import HeroVisual from "./HeroVisual";
import SectionLabel from "./SectionLabel";

const technologies: { name: string; Icon: IconType }[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Git", Icon: SiGit },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 lg:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* min-w-0 : sans lui, une colonne de grille ne descend jamais sous la
            largeur de son plus long mot, ce qui créait un scroll horizontal
            sur les très petits écrans. */}
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-soft">
            <span aria-hidden="true" className="dot dot-live" />
            Open to a first role
          </p>

          <SectionLabel className="mt-7">
            Full stack developer · Algiers
          </SectionLabel>

          <HeroTitle
            className="mt-3 font-display"
            highlight="Mehdi"
            lines={[
              {
                text: "Hi, I'm Mehdi.",
                className: "text-[clamp(40px,7vw,68px)] font-extrabold",
              },
              {
                text: "I build the apps that run a business.",
                className: "mt-2 text-[clamp(25px,4.2vw,40px)] font-bold",
              },
            ]}
          />

          <p className="mt-6 max-w-[54ch] text-[17px] text-soft">
            Ordering, menus, kitchen screens, delivery. I build the whole
            chain: the data model, the API, and the screen the team uses every
            day. Before writing code, I spent six years selling and delivering
            projects on site.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              View my work
              <LuArrowUpRight aria-hidden="true" className="btn-arrow" />
            </Link>
            <a href={profile.cv} download className="btn btn-ghost">
              {profile.cvLabel}
              <LuDownload aria-hidden="true" />
            </a>
          </div>

          <SectionLabel className="mt-12 text-faint">
            Technologies I work with
          </SectionLabel>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-4 text-[28px] text-soft">
            {technologies.map(({ name, Icon }) => (
              <li key={name} title={name}>
                <Icon aria-hidden="true" />
                <span className="sr-only">{name}</span>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
