import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuArrowUpRight,
  LuCalendarDays,
  LuGauge,
  LuLanguages,
  LuRocket,
} from "react-icons/lu";
import { stats, type StatIcon } from "@/data/profile";
import SectionLabel from "./SectionLabel";

/* Les données ne connaissent que le nom de l'icône : c'est ici qu'on le
   relie au composant. Record<StatIcon, ...> oblige à couvrir tous les noms. */
const icons: Record<StatIcon, IconType> = {
  calendar: LuCalendarDays,
  rocket: LuRocket,
  gauge: LuGauge,
  languages: LuLanguages,
};

export default function AboutStats() {
  return (
    <section className="inlay border-y border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <SectionLabel>About me</SectionLabel>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(27px,3.6vw,38px)] font-extrabold">
            Six years in the field before my first line of code
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] text-soft">
            Sales agent, then technical director: client briefs, quotes, teams
            on site. I moved to web development to solve the problems I kept
            seeing, like orders on paper and stock kept from memory. Today I
            build with the MERN stack and TypeScript, and I am looking for my
            first team.
          </p>
          <Link href="/about" className="btn btn-ghost mt-8">
            More about me
            <LuArrowUpRight aria-hidden="true" className="btn-arrow" />
          </Link>
        </div>

        <ul className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
          {stats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <li key={stat.label} className="flex items-start gap-4">
                <span aria-hidden="true" className="tile text-[20px]">
                  <Icon />
                </span>
                <p className="min-w-0">
                  <span className="block font-display text-[30px] font-extrabold leading-none text-gold">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[14px] leading-snug text-soft">
                    {stat.label}
                  </span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
