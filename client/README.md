# MehdiAbdi — Portfolio (front)

Front du portfolio de **Mehdi Abdi**, développeur full stack MERN en TypeScript à Alger.
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Redux Toolkit.

Le formulaire de contact appelle l'API Express du dossier `server/` — voir le README à la racine du dépôt.

## Pages

| Route       | Contenu                                                                   |
| ----------- | ------------------------------------------------------------------------- |
| `/`         | Hero et écran de commandes en temps réel, carrousel de projets, méthode   |
| `/projects` | Grille des projets, filtrable par catégorie (Tous / Full Stack / Frontend) |
| `/about`    | Parcours, frise chronologique, informations pratiques                     |
| `/contact`  | Coordonnées et formulaire de contact validé                               |

## Structure

```
client/
├── app/                  Routes (App Router) + layout, styles globaux, 404
├── components/           Composants d'interface
│   └── ui/velaris.tsx    Fond animé WebGL
├── data/projects.ts      Source unique des projets affichés
├── features/             Slices Redux : thème, carrousel, menu, filtre projets
├── store/                Configuration du store et hooks typés
└── public/               Captures des projets, portrait, CV.pdf
```

Ajouter un projet se fait uniquement dans `data/projects.ts` : l'accueil, la grille,
les filtres et le titre de la page projets se mettent à jour seuls.

## Démarrage

```bash
cp .env.example .env.local     # renseigner NEXT_PUBLIC_API_URL
npm install
npm run dev                    # http://localhost:3000
```

| Script          | Rôle                     |
| --------------- | ------------------------ |
| `npm run dev`   | Serveur de développement |
| `npm run build` | Build de production      |
| `npm run start` | Lance le build           |
| `npm run lint`  | Vérification ESLint      |

## Projets présentés

| Projet        | Stack principale                                         | Catégorie  |
| ------------- | -------------------------------------------------------- | ---------- |
| **Niwa Food** | Next.js, TypeScript, Express 5, Mongoose, Socket.io, JWT | Full Stack |
| **MB Food**   | Next.js, TypeScript, Express, Mongoose, MongoDB Atlas    | Full Stack |
| **HCA ELEC**  | Next.js 16 (export statique), TypeScript, Redux Toolkit, Zod | Frontend |
| **MehdiAbdi** | Next.js, TypeScript, Redux Toolkit, Express, Mongoose    | Full Stack |

## Déploiement

Netlify, configuré par le `netlify.toml` à la racine du dépôt. Seule variable à déclarer :
`NEXT_PUBLIC_API_URL`, l'URL publique de l'API.

## Auteur

**Mehdi Abdi** — Alger, Algérie

- Email : mehdiabdi.dev@outlook.fr
- GitHub : [github.com/mehdiabdi7](https://github.com/mehdiabdi7)
- LinkedIn : [linkedin.com/in/mehdi-abdi-7b00353b9](https://www.linkedin.com/in/mehdi-abdi-7b00353b9)

© 2026 MehdiAbdi — tous droits réservés.
