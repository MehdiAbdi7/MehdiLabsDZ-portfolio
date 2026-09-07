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
  /** Capture d'écran 16:10 placée dans public/projects/. */
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
      "Site de commande d'un restaurant de street food mexicaine aux Sources, construit sur l'architecture de Niwa Food avec sa propre identité.",
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
    id: "hca-tech",
    title: "HCA Tech",
    summary:
      "Boutique en ligne de matériel électrique : catalogue, recherche, panier et commande livrée dans les 58 wilayas.",
    detail:
      "Site e-commerce livré pour un client réel et toujours en ligne. Catalogue filtrable, panier persisté, tunnel de commande couvrant les 58 wilayas avec calcul des frais par zone. Démarré en HTML, CSS et JavaScript, puis repris entièrement en React quand le catalogue est devenu trop lourd à maintenir à la main.",
    highlights: [
      "En production chez le client",
      "Livraison paramétrée sur les 58 wilayas",
      "Migration d'un site statique vers React",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "React Router", "Context API"],
    category: "Frontend",
    status: "live",
    image: "/hero-hca.png",
    imageAlt: "Catalogue produits du site HCA Tech",
    github: "https://github.com/mehdiabdi7/hca-tech",
    demo: "https://hca-elec.com",
    featured: true,
  },
  {
    id: "mehdilabsdz",
    title: "MehdiLabsDz",
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
    imageAlt: "Page d'accueil du portfolio MehdiLabsDz",
    github:
      "https://github.com/mehdiabdi7/checkpoint-portfolio-winchlabs-nextjs",
    demo: "https://mehdilabsdz.netlify.app",
    featured: true,
  },
  {
    id: "facilite",
    title: "Facilité",
    summary:
      "Gestion de la vente à crédit pour un commerce : dossiers clients, échéanciers et suivi des impayés.",
    detail:
      "Application multi-rôles construite autour d'un besoin très concret : suivre qui doit combien, et quand. Génération des échéanciers, relances, et tableau de bord des retards de paiement.",
    highlights: [
      "Échéanciers générés automatiquement",
      "Trois rôles avec permissions distinctes",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    category: "Full Stack",
    status: "done",
    image: "/projects/facilite.jpg",
    imageAlt: "Tableau de bord des échéances de l'application Facilité",
    github: "https://github.com/mehdiabdi7",
    featured: false,
  },
  {
    id: "forkit",
    title: "Forkit",
    summary:
      "Application de recettes qui m'a servi à poser mon patron de backend TypeScript, réutilisé sur tous les projets suivants.",
    detail:
      "Express 5 en TypeScript strict, validation Zod, authentification JWT, arborescence en couches. C'est la base que je reprends aujourd'hui à chaque nouveau projet backend.",
    highlights: [
      "Backend TypeScript de référence",
      "Validation Zod sur toutes les entrées",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Express", "Zod"],
    category: "Frontend",
    status: "done",
    image: "/projects/forkit.jpg",
    imageAlt: "Liste des recettes de l'application Forkit",
    github: "https://github.com/mehdiabdi7",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
