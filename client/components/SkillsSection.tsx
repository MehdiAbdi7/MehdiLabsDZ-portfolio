const skillGroups = [
  {
    category: "Front-end",
    color: "#38BDF8",
    summary:
      "Interfaces réactives, typées et responsive, du composant isolé à l'application complète.",
    items: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
  },
  {
    category: "Back-end",
    color: "#818CF8",
    summary:
      "API REST structurées en couches, validées à l'entrée et sécurisées par rôles.",
    items: [
      "Node.js",
      "Express 5",
      "Mongoose",
      "Zod",
      "JWT & bcrypt",
      "Socket.io",
      "Rate limiting",
    ],
  },
  {
    category: "Données, outils & méthodes",
    color: "#34D399",
    summary:
      "De la modélisation des données à la mise en ligne, en passant par les tests manuels d'API.",
    items: [
      "MongoDB / Atlas",
      "MySQL",
      "Git & GitHub",
      "Postman",
      "Cloudinary",
      "Netlify",
      "Render",
      "VPS Linux",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative bg-slate-900/30 px-6 py-24">
      <div className="mx-auto max-w-300">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-sky/20 bg-sky/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky">
            Compétences
          </span>
          <h2 className="mb-4 font-space text-[clamp(28px,4vw,44px)] font-extrabold text-slate-50">
            Mon stack technique
          </h2>
          <p className="mx-auto max-w-137 text-base leading-[1.7] text-muted">
            Stack MERN en TypeScript, utilisé sur des projets réels : de la
            modélisation des données au déploiement.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-7 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card rounded-2xl p-8">
              <h3
                className="mb-3 flex items-center gap-2 font-space text-[18px] font-bold"
                style={{ color: group.color }}
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    background: group.color,
                    boxShadow: `0 0 8px ${group.color}`,
                  }}
                />
                {group.category}
              </h3>

              <p className="mb-6 text-[13px] leading-[1.7] text-slate-500">
                {group.summary}
              </p>

              <ul className="flex list-none flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg px-3 py-1.5 text-[13px] font-medium"
                    style={{
                      color: group.color,
                      background: `${group.color}12`,
                      border: `1px solid ${group.color}28`,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Practices */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-[13px] uppercase tracking-widest text-slate-500">
            Ma façon de travailler
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Architecture en couches",
              "TypeScript strict",
              "Validation de schémas",
              "Rôles et permissions",
              "Sécurisation d'API",
              "Temps réel",
            ].map((practice) => (
              <span
                key={practice}
                className="rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-[13px] font-medium text-muted"
              >
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
