export type SkillIcon =
  | "typescript"
  | "react"
  | "nextjs"
  | "node"
  | "mongodb"
  | "socketio"
  | "redux"
  | "zod"
  | "tailwind"
  | "git"
  | "postgresql"
  | "docker";

export interface Skill {
  name: string;
  icon: SkillIcon;
  /** Où la techno a été utilisée. Chaque preuve a été vérifiée dans le
   *  package.json (ou le code) du projet cité : pas de pourcentage. */
  proof: string;
  /** Fiche de projet vers laquelle la carte renvoie (id de data/projects.ts).
   *  Absent : la carte renvoie vers la liste des projets. */
  projectId?: string;
  /** En cours d'apprentissage : pas de preuve, pas de lien. */
  learning?: boolean;
}

export const skills: Skill[] = [
  { name: "TypeScript", icon: "typescript", proof: "All 4 projects" },
  { name: "React", icon: "react", proof: "All 4 projects" },
  {
    name: "Next.js (App Router)",
    icon: "nextjs",
    proof: "All 4 projects, including this site",
  },
  {
    name: "Node.js and Express",
    icon: "node",
    proof: "Niwa Food API, MB Food API, this site's contact API",
    projectId: "niwa-food",
  },
  {
    name: "MongoDB and Mongoose",
    icon: "mongodb",
    proof: "Niwa Food, MB Food, this site's contact messages",
    projectId: "niwa-food",
  },
  {
    name: "Socket.io",
    icon: "socketio",
    proof: "Live order tracking in Niwa Food, one room per store",
    projectId: "niwa-food",
  },
  {
    name: "Redux Toolkit and RTK Query",
    icon: "redux",
    proof: "Redux Toolkit in all 4 projects, RTK Query in Niwa Food",
    projectId: "niwa-food",
  },
  {
    name: "Zod",
    icon: "zod",
    proof: "Server validation in Niwa Food, order form in HCA ELEC",
    projectId: "hca-elec",
  },
  { name: "Tailwind CSS", icon: "tailwind", proof: "All 4 projects" },
  {
    name: "Git and GitHub",
    icon: "git",
    proof: "Feature branches and pull requests on this site",
    projectId: "portfolio",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    proof: "Not used in a project yet",
    learning: true,
  },
  {
    name: "Docker",
    icon: "docker",
    proof: "Not used in a project yet",
    learning: true,
  },
];
