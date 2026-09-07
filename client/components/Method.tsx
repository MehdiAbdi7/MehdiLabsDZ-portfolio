/* Ces cinq blocs sont numérotés parce qu'ils forment une vraie séquence :
   chaque étape dépend de la précédente. */
const steps = [
  {
    title: "Cadrage",
    body: "On liste ce que l'application doit faire, et surtout ce qu'elle ne fera pas dans la première version. Je repars avec un périmètre écrit et un délai.",
  },
  {
    title: "Modélisation",
    body: "Je pose les données avant les écrans : produits, variantes, commandes, rôles. C'est l'étape qui évite de tout réécrire trois semaines plus tard.",
  },
  {
    title: "Développement",
    body: "Front et API avancent ensemble, avec des points réguliers sur une version en ligne que vous pouvez essayer à tout moment.",
  },
  {
    title: "Mise en production",
    body: "Déploiement, nom de domaine, sauvegardes, et une prise en main du back-office avec les personnes qui vont s'en servir.",
  },
  {
    title: "Suivi",
    body: "Correctifs, évolutions et ajustements après quelques semaines d'usage réel — c'est là que remontent les vrais besoins.",
  },
];

export default function Method() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 max-w-[58ch]">
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold">
            Comment se déroule un projet
          </h2>
          <p className="mt-4 text-[17px] text-soft">
            La même méthode pour une mission freelance ou pour une
            fonctionnalité en équipe.
          </p>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-surface p-5">
              <span
                aria-hidden="true"
                className="font-mono text-[13px] text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-[18px] font-bold">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] text-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
