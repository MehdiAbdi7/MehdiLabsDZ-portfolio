const groups = [
  {
    title: "Interface",
    intro:
      "Des écrans typés et réactifs, testés sur téléphone avant le bureau — c'est là que commandent les clients.",
    items: [
      "React 19",
      "Next.js (App Router)",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
  },
  {
    title: "Serveur",
    intro:
      "Des API en couches, validées à l'entrée, où le prix et les permissions ne dépendent jamais de ce qu'envoie le navigateur.",
    items: [
      "Node.js",
      "Express 5",
      "Mongoose",
      "Zod",
      "JWT et bcrypt",
      "Socket.io",
      "Rate limiting",
    ],
  },
  {
    title: "Données et mise en ligne",
    intro:
      "De la modélisation au déploiement, avec les tests d'API et le suivi qui vont avec.",
    items: [
      "MongoDB Atlas",
      "PostgreSQL",
      "Git et GitHub",
      "Postman",
      "Cloudinary",
      "Vercel",
      "Render",
      "Netlify",
    ],
  },
];

export default function Stack() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="mb-9 max-w-[20ch] font-display text-[clamp(28px,4vw,42px)] font-extrabold">
        Ce que je sais construire
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="panel p-6">
            <h3 className="font-display text-[20px] font-bold">
              {group.title}
            </h3>
            <p className="mt-2.5 text-[15px] text-soft">{group.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line px-2 py-1 font-mono text-[12px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
