export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  color: string;
  emoji: string;
  /** Étiquette d'état affichée sur la carte. */
  status: "live" | "wip" | "done";
  github?: string;
  demo?: string;
  featured: boolean;
}

export const statusLabels: Record<Project["status"], string> = {
  live: "En ligne",
  wip: "En cours",
  done: "Terminé",
};

export const projects: Project[] = [
  {
    id: "niwa-food",
    title: "Niwa Food",
    description:
      "Plateforme de commande multi-magasins pour une chaîne de fast food : commande client par QR code, suivi en temps réel et back-office complet.",
    longDescription:
      "Application Next.js unique qui sert le site vitrine, la commande client (sur place via QR code, à emporter, livraison) et le dashboard du personnel. Architecture multi-magasins : les données de chaque point de vente sont cloisonnées par un middleware de scoping, avec un compteur de commandes journalier propre à chaque magasin. Menu à variantes (tailles, formules) et groupes de suppléments configurables, dont les prix sont systématiquement recalculés côté serveur. Commandes poussées en temps réel au dashboard via Socket.io avec des rooms par magasin et un handshake authentifié JWT. Back-office : plan de salle, commandes en cours, prise de commande manuelle, CRUD du menu avec gestion du cycle de vie des images, statistiques par journée de service.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Express 5",
      "Mongoose",
      "Zod",
      "Socket.io",
      "JWT",
    ],
    category: "Full Stack",
    color: "#38BDF8",
    emoji: "🍔",
    status: "done",
    github: "https://github.com/mehdiabdi7/niwa-food",
    featured: true,
  },
  {
    id: "mb-food",
    title: "MB Food",
    description:
      "Site de commande pour un restaurant client, construit sur l'architecture de Niwa Food avec une identité visuelle sur mesure.",
    longDescription:
      "Déclinaison de l'architecture Niwa Food pour un second restaurant. Palette et charte graphique dérivées du logo du client, animations CSS personnalisées, jeu de données du menu d'une trentaine de produits avec variantes, et back-office adapté aux besoins de l'équipe. Projet mené de bout en bout : cadrage du besoin, modélisation du menu, développement et préparation de la mise en production.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Mongoose",
      "MongoDB Atlas",
    ],
    category: "Full Stack",
    color: "#F59E0B",
    emoji: "🌮",
    status: "wip",
    github: "https://github.com/mehdiabdi7/mb-food",
    featured: true,
  },
  {
    id: "winchlabs-portfolio",
    title: "WinchLabs",
    description:
      "Mon site professionnel : front Next.js sur Netlify, API Express dédiée sur Render, formulaire de contact persisté en base.",
    longDescription:
      "Portfolio construit avec Next.js App Router et Tailwind CSS, déployé sur Netlify. Le formulaire de contact appelle une API Express indépendante hébergée sur Render, qui valide les messages et les enregistre dans MongoDB Atlas. CORS restreint aux domaines autorisés, limitation de débit et piège à robots sur la route publique.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Mongoose",
      "MongoDB Atlas",
    ],
    category: "Full Stack",
    color: "#818CF8",
    emoji: "🧪",
    status: "live",
    github: "https://github.com/mehdiabdi7/checkpoint-portfolio-winchlabs-nextjs",
    demo: "https://winchlabs.netlify.app",
    featured: true,
  },
  {
    id: "hca-tech",
    title: "HCA Tech",
    description:
      "Site e-commerce de matériel électronique : catalogue, filtres de recherche, panier et commande couvrant les 58 wilayas.",
    longDescription:
      "Site e-commerce complet pour HCA-Elec.com. Panier géré par Context API, filtrage et tri des produits, tunnel de commande couvrant les 58 wilayas algériennes, menu mobile et barre de recherche avec dropdown en portal. Démarré en HTML / CSS / JavaScript puis repris en React. Déployé sur cPanel.",
    tags: ["React", "Vite", "Tailwind CSS", "React Router", "Context API"],
    category: "Frontend",
    color: "#EF4444",
    emoji: "🛒",
    status: "live",
    github: "https://github.com/mehdiabdi7/hca-tech",
    demo: "https://hca-elec.com",
    featured: true,
  },
];
