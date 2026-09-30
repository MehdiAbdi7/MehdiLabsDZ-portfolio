import { onlineProjectsCount } from "./projects";

/** Tout ce qui me décrit et qui apparaît à plusieurs endroits du site.
 *  Une seule source : changer l'email ici le change partout. */
export const profile = {
  name: "Mehdi Abdi",
  initials: "MA",
  role: "Full stack developer",
  location: "Algiers, Algeria",
  email: "mehdiabdi.dev@outlook.fr",
  github: "https://github.com/MehdiAbdi7",
  linkedin: "https://www.linkedin.com/in/mehdi-abdi-7b00353b9",
  cv: "/CV.pdf",
  /** Le CV est encore en français : on le dit sur le bouton. */
  cvLabel: "Download CV (FR)",
  /** Chemin du portrait dans public/, ou null tant qu'il n'existe pas.
   *  Avec null, le hero affiche les initiales à la place. */
  photo: null as string | null,
};

export type StatIcon = "calendar" | "rocket" | "gauge" | "languages";

export interface Stat {
  value: string;
  label: string;
  icon: StatIcon;
}

/** Les quatre chiffres de l'accueil. Chacun est vérifiable :
 *  - 6 ans : Groupe ABDI, de 09/2018 à 06/2024
 *  - apps en ligne : calculé depuis data/projects.ts
 *  - 100 : PageSpeed Insights mobile de Niwa Food, mesuré le 29/09/2026
 *  - 3 langues : arabe, français, anglais */
export const stats: Stat[] = [
  { value: "6 yrs", label: "In sales and site management", icon: "calendar" },
  { value: String(onlineProjectsCount), label: "Apps online", icon: "rocket" },
  {
    value: "100",
    label: "Lighthouse accessibility, Niwa Food",
    icon: "gauge",
  },
  {
    value: "3",
    label: "Languages: Arabic, French, English",
    icon: "languages",
  },
];

export const lookingFor = [
  "First full stack role",
  "Agency, Algiers or remote",
  "Available now",
];
