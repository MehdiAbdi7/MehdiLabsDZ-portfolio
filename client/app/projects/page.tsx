import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import CallToAction from "@/components/CallToAction";
import SectionLabel from "@/components/SectionLabel";
import { onlineProjectsCount, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Mehdi Abdi",
  description:
    "Full stack web apps: Niwa Food, HCA ELEC, MB Food and this portfolio. Each project explains what it does, how it is built and where it stands.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14">
        <SectionLabel>Projects</SectionLabel>
        {/* Chiffres calculés depuis data/projects.ts : ajouter un projet
            met le titre à jour sans y toucher. */}
        <h1 className="mt-3 max-w-[18ch] text-[clamp(34px,5.4vw,56px)] font-extrabold">
          {projects.length} projects, {onlineProjectsCount} online
        </h1>
        <p className="mt-5 max-w-[62ch] text-[17px] text-soft">
          Each card says what the app does, how it is built and where it
          stands. &quot;Demo&quot; means the app is online but not yet used by
          a real business.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <ProjectsGrid />
      </section>

      <CallToAction />
    </>
  );
}
