export type Status = "live" | "wip" | "done";

export interface Project {
  id: string;
  title: string;
  /** Ce que le projet fait, en une phrase compréhensible par un non-technicien. */
  summary: string;
  /** Le détail technique, pour un recruteur ou un lead développeur. */
  detail: string;
  /** Deux ou trois faits concrets mis en avant sur la carte. */
  highlights: string[];
  stack: string[];
  category: "Full Stack" | "Frontend";
  status: Status;
  /** Capture d'écran au format 16:10, placée à la racine de public/. */
  image: string;
  imageAlt: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const statusLabels: Record<Status, string> = {
  live: "En ligne",
  wip: "En cours",
  done: "Livré",
};

export const projects: Project[] = [
  {
    id: "niwa-food",
    title: "Niwa Food",
    summary:
      "Plateforme de commande pour une chaîne de fast food à deux magasins : le client commande depuis sa table, la cuisine voit tomber la commande en direct.",
    detail:
      "Une seule application Next.js sert la vitrine, la commande client et le back-office du personnel. Les données des deux points de vente sont cloisonnées par un middleware de scoping, avec un compteur de commandes journalier propre à chaque magasin. Le menu gère les tailles, les formules et les groupes de suppléments ; tous les prix sont recalculés côté serveur, jamais lus depuis le panier. Les commandes remontent au dashboard par Socket.io, avec une room par magasin et un handshake authentifié par JWT.",
    highlights: [
      "Deux magasins cloisonnés, un seul menu partagé",
      "Prix recalculés côté serveur à chaque commande",
      "Suivi client et écran cuisine en temps réel",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Express 5",
      "Mongoose",
      "Zod",
      "Socket.io",
      "JWT",
    ],
    category: "Full Stack",
    status: "done",
    image: "/hero-niwa.png",
    imageAlt: "Page de commande de Niwa Food avec le menu et le panier ouvert",
    github: "https://github.com/mehdiabdi7/niwa-food",
    demo: "https://niwa-food.vercel.app",
    featured: true,
  },
  {
    id: "mb-food",
    title: "MB Food",
    summary:
      "Site de commande d'un restaurant de street food mexicaine, construit sur l'architecture de Niwa Food avec sa propre identité.",
    detail:
      "Deuxième déploiement de la même base de code pour un client différent. Charte dérivée du logo, jeu de données du menu monté avec le client, back-office adapté à une équipe plus petite. Le projet a servi de test grandeur nature : reprendre une architecture existante et la spécialiser sans la casser.",
    highlights: [
      "Reprise d'architecture en projet client",
      "Menu et charte montés avec le restaurateur",
      "Mise en production préparée avec l'équipe",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Mongoose",
      "MongoDB Atlas",
    ],
    category: "Full Stack",
    status: "wip",
    image: "/hero-mbfood.png",
    imageAlt: "Page d'accueil de MB Food avec le menu du restaurant",
    github: "https://github.com/mehdiabdi7/mb-food",
    featured: true,
  },
  {
    id: "hca-elec",
    title: "HCA ELEC",
    summary:
      "Boutique en ligne de matériel électrique et d'éclairage : catalogue filtrable, panier, et commande transmise au magasin par WhatsApp.",
    detail:
      "Site e-commerce en production pour Home Connect Algérie. Next.js 16 en export statique, hébergeable sur un mutualisé sans serveur Node. Les filtres et le tri vivent dans l'URL, donc une recherche se partage par lien. Le panier ne stocke que les identifiants produits : les prix sont relus du catalogue à l'affichage, jamais figés dans le navigateur. Sans backend, la commande part en message WhatsApp pré-rempli, avec les frais de livraison calculés sur les 58 wilayas selon le mode de réception. Refonte complète du premier site de l'entreprise, écrit à l'origine en HTML, CSS et JavaScript.",
    highlights: [
      "Refonte du premier site que j'avais livré en HTML",
      "Livraison chiffrée sur les 58 wilayas, domicile ou bureau",
      "Prix toujours relus du catalogue, jamais du panier",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "Zod",
      "Export statique",
    ],
    category: "Frontend",
    status: "live",
    image: "/hero-hca-elec.png",
    imageAlt: "Page d'accueil du site HCA ELEC — Home Connect Algérie",
    github: "https://github.com/mehdiabdi7/hca-elec",
    demo: "https://hca-elec.com",
    featured: true,
  },
  {
    id: "mehdiabdi",
    title: "MehdiAbdi",
    summary:
      "Ce site : front Next.js sur Netlify, API Express dédiée sur Render, messages de contact enregistrés en base.",
    detail:
      "Le formulaire de contact appelle une API Express indépendante qui valide les messages et les stocke dans MongoDB Atlas. CORS restreint aux domaines autorisés, limitation à cinq envois par quart d'heure et par adresse, et champ piège pour les robots. Le thème et le carrousel que vous voyez sont gérés par Redux Toolkit.",
    highlights: [
      "API de contact séparée, limitée et validée",
      "Thème clair/sombre persisté sans flash au chargement",
      "État de l'interface géré par Redux Toolkit",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Express",
      "Mongoose",
    ],
    category: "Full Stack",
    status: "live",
    image: "/hero-mehdi.png",
    imageAlt: "Page d'accueil du portfolio MehdiAbdi",
    github:
      "https://github.com/mehdiabdi7/checkpoint-portfolio-winchlabs-nextjs",
    demo: "https://MehdiAbdi.netlify.app",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

/** Nombre de projets actuellement en ligne : sert aux titres, jamais écrit en dur. */
export const liveProjectsCount = projects.filter(
  (project) => project.status === "live",
).length;
