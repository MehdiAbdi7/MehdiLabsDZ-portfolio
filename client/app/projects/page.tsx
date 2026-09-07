import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Projets — Mehdi Abdi",
  description:
    "Applications web construites pour de vrais utilisateurs : Niwa Food, MB Food, HCA Tech, Facilité, Forkit.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14">
        <h1 className="max-w-[18ch] font-display text-[clamp(34px,5.4vw,56px)] font-extrabold">
          Six projets, quatre en production
        </h1>
        <p className="mt-5 max-w-[62ch] text-[17px] text-soft">
          Chaque fiche indique ce que l&apos;application fait, comment elle est
          construite et où elle en est. Les projets clients sont signalés comme
          tels.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <ProjectsGrid />
      </section>

      <CallToAction />
    </>
  );
}
