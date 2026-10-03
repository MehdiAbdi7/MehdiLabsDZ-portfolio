import { SITE_URL } from "@/lib/site";

export type Status = "live" | "wip" | "done" | "demo";

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
  /** Capture d'écran en WebP, placée à la racine de public/. */
  image: string;
  imageAlt: string;
  /** Dépôt public du projet (ou de son front quand l'API est à part). */
  github?: string;
  /** Dépôt public de l'API, quand elle vit dans un dépôt séparé. */
  githubApi?: string;
  demo?: string;
  /** Affiché sur la page d'accueil. */
  featured: boolean;
}

export const statusLabels: Record<Status, string> = {
  live: "Live",
  wip: "In progress",
  done: "Shipped",
  demo: "Demo",
};

export const projects: Project[] = [
  {
    id: "niwa-food",
    title: "Niwa Food",
    summary:
      "Ordering platform for a fast food chain with two stores: the customer orders from the table, and the kitchen sees the order arrive live.",
    detail:
      "One Next.js app serves the public site, the customer ordering flow and the staff back-office. Data for the two stores is kept separate by a scoping middleware, with a daily order counter per store. The menu handles sizes, combos and groups of extras. All prices are recalculated on the server and never read from the cart. Orders reach the dashboard through Socket.io, with one room per store and a handshake authenticated by JWT.",
    highlights: [
      "Two separate stores, one shared menu",
      "Prices recalculated on the server for every order",
      "Live order tracking for the customer and the kitchen",
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
    status: "demo",
    image: "/hero-niwa.webp",
    imageAlt: "Niwa Food ordering page with the menu and the cart open",
    github: "https://github.com/MehdiAbdi7/niwa-food",
    demo: "https://niwa-food.vercel.app",
    featured: true,
  },
  {
    id: "hca-elec",
    title: "HCA ELEC",
    summary:
      "Online shop for electrical and lighting equipment: filterable catalogue, cart, and the order sent to the store through WhatsApp.",
    detail:
      "E-commerce site in production for Home Connect Algérie. Next.js 16 as a static export, so it can run on shared hosting without a Node server. Filters and sorting live in the URL, so a search can be shared as a link. The cart stores only product ids: prices are read again from the catalogue at display time, never frozen in the browser. With no backend, the order leaves as a pre-filled WhatsApp message, with delivery fees calculated for the 58 wilayas depending on the delivery method. A full rebuild of the company's first site, first written in HTML, CSS and JavaScript.",
    highlights: [
      "Rebuild of the first site I shipped in plain HTML",
      "Delivery priced for all 58 wilayas, home or pickup point",
      "Prices always read from the catalogue, never from the cart",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "Zod",
      "Static export",
    ],
    category: "Frontend",
    status: "live",
    image: "/hero-hca-elec.webp",
    imageAlt: "Home page of the HCA ELEC shop, Home Connect Algérie",
    github: "https://github.com/MehdiAbdi7/HCA-ELEC",
    demo: "https://hca-elec.com",
    featured: true,
  },
  {
    id: "mb-food",
    title: "MB Food",
    summary:
      "Ordering site for a Mexican street food restaurant, built on the Niwa Food architecture with its own identity.",
    detail:
      "A second version of the same codebase, for a Mexican street food restaurant. Branding derived from the logo, a menu of about thirty products, and a back-office adapted to a smaller team. The project is a real-size test: take an existing architecture and specialise it without breaking it.",
    highlights: [
      "Reuse of an existing architecture",
      "Visual identity derived from the logo",
      "Back-office adapted to a small team",
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
    image: "/hero-mbfood.webp",
    imageAlt: "MB Food home page with the restaurant menu",
    featured: true,
  },
  {
    id: "portfolio",
    title: "This portfolio",
    summary:
      "This site: a Next.js front end on Netlify, a dedicated Express API on Render, and contact messages stored in a database.",
    detail:
      "The contact form calls a separate Express API that validates messages and stores them in MongoDB Atlas. CORS is restricted to allowed domains, sending is limited to five messages per quarter hour per address, and a hidden field traps bots. The theme, the mobile menu and the project filter are managed by Redux Toolkit. The live order board on the home page is animated with Motion.",
    highlights: [
      "Separate contact API, rate limited and validated",
      "Light and dark themes saved with no flash on load",
      "Interface state managed by Redux Toolkit",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Motion",
      "Express",
      "Mongoose",
    ],
    category: "Full Stack",
    status: "live",
    image: "/hero-mehdi.webp",
    imageAlt: "Home page of Mehdi Abdi's portfolio",
    github: "https://github.com/MehdiAbdi7/MehdiLabsDZ-portfolio",
    demo: SITE_URL,
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

/** Nombre de projets visitables en ligne (ceux qui ont un lien `demo`).
 *  Sert au titre de la page Projects et au chiffre de l'accueil : jamais
 *  écrit en dur, donc les deux ne peuvent pas se contredire. */
export const onlineProjectsCount = projects.filter(
  (project) => project.demo,
).length;
