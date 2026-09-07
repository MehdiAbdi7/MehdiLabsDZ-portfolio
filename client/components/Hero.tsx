import Link from "next/link";
import OrderBoard from "./OrderBoard";

const facts = [
  { label: "Basé à", value: "Alger" },
  { label: "Disponibilité", value: "Freelance ou salarié" },
  { label: "Stack", value: "MERN en TypeScript" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 text-[13px] text-soft">
            <span aria-hidden="true" className="dot dot-live" />
            Disponible pour un poste ou une mission
          </p>

          <h1 className="max-w-[16ch] font-display text-[clamp(38px,6.4vw,68px)] font-extrabold">
            Je développe les applications qui font tourner un commerce.
          </h1>

          <p className="mt-6 max-w-[54ch] text-[17px] text-soft">
            Prise de commande, menu, cuisine, livraison, caisse. Je construis la
            chaîne complète : le modèle de données, l&apos;API, et l&apos;écran
            que l&apos;équipe utilise tous les jours. Avant de coder, j&apos;ai
            passé six ans à vendre et à livrer des chantiers — je sais à quoi
            ressemble un besoin mal exprimé et un délai qui glisse.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="press rounded-[10px] bg-accent px-6 py-3.5 font-semibold text-on-accent"
            >
              Voir les projets
            </Link>
            <a
              href="/CV-Mehdi-Abdi.pdf"
              download
              className="rounded-[10px] border border-line-strong px-6 py-3.5 font-semibold transition-colors hover:bg-raised"
            >
              Télécharger le CV
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-surface px-4 py-3.5">
                <dt className="text-[13px] text-faint">{fact.label}</dt>
                <dd className="mt-0.5 font-display text-[15px] font-semibold">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pt-6">
          <OrderBoard />
          <p className="mt-3 text-[13px] text-faint">
            Démonstration d&apos;un flux temps réel : une mise à jour envoyée
            par un écran apparaît instantanément sur les autres.
          </p>
        </div>
      </div>
    </section>
  );
}
