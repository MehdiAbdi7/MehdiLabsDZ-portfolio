# 🚀 WinchLabs Portfolio

Portfolio professionnel de **Mehdi Abdi**, développeur Full Stack MERN, construit avec Next.js 16, TypeScript et Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)

---

## ✨ Aperçu

Site de portfolio moderne avec une identité visuelle **WinchLabs** — palette navy/sky blue/red, terminal animé en hero, et design dark glassmorphism.

### Pages

| Route       | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| `/`         | Accueil — Hero terminal, compétences, projets en vedette, CTA         |
| `/about`    | À propos — Biographie, timeline de parcours, valeurs                  |
| `/projects` | Projets — Grille filtrée par catégorie (Tous / Full Stack / Frontend) |
| `/contact`  | Contact — Formulaire validé avec feedback d'envoi                     |

---

## 🛠️ Stack technique

- **Framework** : [Next.js 16](https://nextjs.org/) — App Router, SSR, SSG
- **Langage** : TypeScript 5
- **Styles** : Tailwind CSS v4 + CSS inline (design tokens custom)
- **UI** : Composants React 19 (Server & Client Components)
- **Fonts** : Inter + Space Grotesk (Google Fonts)
- **Images** : `next/image` avec optimisation automatique

---

## 📁 Structure du projet

```
portfolio/
├── app/                        # App Router (Next.js)
│   ├── layout.tsx              # Layout racine (Navbar + Footer)
│   ├── page.tsx                # Page d'accueil /
│   ├── globals.css             # Styles globaux + animations
│   ├── not-found.tsx           # Page 404 personnalisée
│   ├── about/
│   │   └── page.tsx            # Page À propos
│   ├── projects/
│   │   └── page.tsx            # Page Projets
│   └── contact/
│       └── page.tsx            # Page Contact
│
├── components/                 # Composants réutilisables
│   ├── Navbar.tsx              # Navigation sticky responsive
│   ├── Footer.tsx              # Pied de page
│   ├── HeroSection.tsx         # Hero avec terminal animé ✦
│   ├── SkillsSection.tsx       # Barres de compétences
│   ├── FeaturedProjects.tsx    # Cards projets en vedette
│   ├── CTASection.tsx          # Section appel à l'action
│   ├── ProjectsClient.tsx      # Grille projets + filtre (Client)
│   └── ContactClient.tsx       # Formulaire de contact (Client)
│
├── data/
│   └── projects.ts             # Données des projets (source unique)
│
└── public/
    └── profile.jpg             # Photo de profil (à ajouter)
```

---

## 🚀 Démarrage

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone https://github.com/mehdi7abdi/portfolio-winchlabs.git
cd portfolio-winchlabs

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Lancer le build de production
npm run lint     # Vérification ESLint
```

---

## 🎨 Design system

### Palette de couleurs

| Nom        | Hex       | Usage                          |
| ---------- | --------- | ------------------------------ |
| Navy       | `#0A0F1E` | Fond principal                 |
| Navy Light | `#111827` | Fond secondaire                |
| Sky Blue   | `#38BDF8` | Accent principal, liens actifs |
| Sky Dim    | `#0EA5E9` | Gradients                      |
| Red        | `#EF4444` | Accent secondaire              |
| White      | `#F8FAFC` | Texte principal                |
| Muted      | `#94A3B8` | Texte secondaire               |
| Border     | `#1E293B` | Bordures                       |

### Typographie

- **Titres** : Space Grotesk (700–800)
- **Corps** : Inter (400–600)

### Composants clés

- `.glass-card` — carte glassmorphism avec hover animé
- `.gradient-text` — texte dégradé sky → violet → rouge
- `.animate-fadeInUp` — animation d'entrée

---

## 📦 Projets présentés

| Projet        | Stack                                            | Catégorie  |
| ------------- | ------------------------------------------------ | ---------- |
| **Niwa Food** | React, Node.js, MongoDB, Socket.io, JWT          | Full Stack |
| **Facilité**  | React, TypeScript, Node.js, MongoDB, Socket.io   | Full Stack |
| **HCA Tech**  | React, Vite, Tailwind CSS, React Router          | Frontend   |
| **SoleX**     | React, TypeScript, Tailwind, DaisyUI, Canvas API | Frontend   |
| **Lumière**   | React, Vite, TypeScript, Tailwind v4             | Frontend   |
| **Forkit**    | React, TypeScript, Redux Toolkit, React Router   | Frontend   |

---

## 🌐 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Autres plateformes

Compatible avec toute plateforme supportant Node.js :

- **Netlify** — via `next build` + adaptateur
- **cPanel** — export statique possible avec `next export`
- **VPS** — `npm run build && npm run start`

---

## 📝 Personnalisation

Pour adapter le portfolio à vos informations :

1. **Projets** → modifier `data/projects.ts`
2. **Informations de contact** → modifier `components/ContactClient.tsx` et `components/Footer.tsx`
3. **Photo de profil** → placer `profile.jpg` dans `public/`
4. **Métadonnées SEO** → modifier `app/layout.tsx` et les `metadata` de chaque page
5. **Couleurs** → modifier les variables dans `app/globals.css`

---

## 👤 Auteur

**Mehdi Abdi** — [WinchLabs](https://github.com/mehdi7abdi)

- GitHub : [@mehdi7abdi](https://github.com/mehdi7abdi)
- Email : mehdi@winchlabs.dev
- Localisation : Alger, Algérie

---

## 📄 Licence

Projet personnel — tous droits réservés © 2026 WinchLabs.
