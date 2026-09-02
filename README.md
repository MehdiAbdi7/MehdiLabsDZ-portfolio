# WinchLabs — Portfolio

Site professionnel de Mehdi Abdi, développeur full stack MERN en TypeScript.

## Structure

```
.
├── client/          Front Next.js 16 (App Router) + Tailwind CSS v4
├── server/          API Express 5 + Mongoose (formulaire de contact)
└── netlify.toml     Configuration de build Netlify (base = client)
```

## Démarrage en local

**Front-end**

```bash
cd client
cp .env.example .env.local     # renseigner NEXT_PUBLIC_API_URL
npm install
npm run dev                    # http://localhost:3000
```

**Back-end**

```bash
cd server
cp .env.example .env           # renseigner MONGO_URI
npm install
npm run dev                    # http://localhost:5000
```

Vérifier que l'API répond : `curl http://localhost:5000/health`

## Déploiement

**Front (Netlify)** — importer le dépôt avec le `netlify.toml` à la racine.
La configuration utilise `client` comme répertoire de base et `npm run build`
comme commande de build. Ne pas remplacer ces réglages dans l'interface Netlify.
Déclarer `NEXT_PUBLIC_API_URL` avec l'URL publique de l'API, sans slash final.

**Back (Render)** — service Web Node, dossier racine `server`, commande de
démarrage `npm start`. Variables à définir : `MONGO_URI` et `CORS_ORIGINS`.

## API

| Méthode | Route          | Description                                    |
| ------- | -------------- | ---------------------------------------------- |
| `GET`   | `/health`      | Sonde de santé du service                      |
| `POST`  | `/api/contact` | Enregistre un message (5 envois / 15 min / IP) |

Le formulaire embarque un champ piège `website` : s'il est rempli, le message
est ignoré silencieusement et la réponse reste un succès apparent.
