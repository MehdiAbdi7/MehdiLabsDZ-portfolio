import type { Metadata } from "next";
import ProjectsClient from "../../components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projets — Mehdi Abdi | MehdiLabsDz",
  description:
    "Découvrez les projets full stack MERN de Mehdi Abdi : Niwa Food, Facilité, HCA Tech, SoleX, Lumière et Forkit.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
