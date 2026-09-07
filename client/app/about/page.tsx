import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Parcours — Mehdi Abdi",
  description:
    "Du commerce et de la gestion de chantier au développement full stack. Le parcours de Mehdi Abdi, développeur MERN à Alger.",
};

const timeline = [
  {
    period: "2018 – 2024",
    title: "Agent commercial puis directeur technique, Groupe ABDI",
    body: "Réponse aux cahiers des charges, chiffrage, coordination des équipes sur chantier et suivi qualité, en électricité et domotique. J'y ai appris à traduire ce qu'un client demande en ce dont il a réellement besoin.",
  },
  {
    period: "2023",
    title: "Premier site livré",
    body: "HTML, CSS, JavaScript et Bootstrap sur mon temps libre, puis mise en ligne du site de SARL Home Connect Algérie. Premier projet livré en conditions réelles, avec un client en face.",
  },
  {
    period: "2025",
    title: "Formation full stack, GoMyCode",
    body: "Stack MERN complet : React, Redux, Node.js, Express, MongoDB, Git. Une dizaine de projets d'entraînement, dont plusieurs repris ensuite en projets clients.",
  },
  {
    period: "2025 – 2026",
    title: "Spécialisation Next.js et TypeScript",
    body: "App Router, TypeScript strict, Redux Toolkit, validation Zod, temps réel avec Socket.io. Développement de Niwa Food, une plateforme de commande multi-magasins de bout en bout.",
  },
  {
    period: "2026",
    title: "MehdiLabsDz, en indépendant",
    body: "Inscription en auto-entrepreneur (ANAE) et premiers projets facturés : Niwa Food puis MB Food. Cadrage, développement, mise en production et suivi.",
  },
];

const facts = [
  { label: "Formation", value: "Licence en management, puis GoMyCode" },
  { label: "Statut", value: "Auto-entrepreneur ANAE, ouvert au salariat" },
  { label: "Langues", value: "Français, arabe, anglais technique" },
  { label: "Localisation", value: "Alger, mission à distance possible" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="panel overflow-hidden">
            <div className="relative aspect-[4/5] bg-raised">
              <Image
                src="/dev.jpg"
                alt="Portrait de Mehdi Abdi"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>
            <dl className="divide-y divide-line">
              {facts.map((fact) => (
                <div key={fact.label} className="px-5 py-3.5">
                  <dt className="text-[13px] text-faint">{fact.label}</dt>
                  <dd className="mt-0.5 text-[15px] font-medium">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h1 className="max-w-[18ch] font-display text-[clamp(34px,5.4vw,56px)] font-extrabold">
              J&apos;ai vendu et livré avant d&apos;écrire du code
            </h1>
            <div className="mt-6 flex max-w-[64ch] flex-col gap-4 text-[17px] text-soft">
              <p>
                Je m&apos;appelle Mehdi Abdi. Pendant six ans, mon métier a été
                de comprendre ce qu&apos;un client voulait, de le chiffrer, puis
                de le livrer avec une équipe — d&apos;abord comme commercial,
                ensuite comme directeur technique sur des chantiers
                d&apos;électricité et de domotique.
              </p>
              <p>
                J&apos;ai basculé vers le développement web parce que je voyais
                les mêmes problèmes revenir chez tous mes clients : des
                commandes prises sur un carnet, des stocks tenus de tête, des
                équipes qui se téléphonent pour savoir si un plat est prêt. Des
                problèmes qui se règlent avec un logiciel.
              </p>
              <p>
                Aujourd&apos;hui je développe en MERN et TypeScript, sous la
                marque MehdiLabsDz. Ce que j&apos;apporte à une équipe, ce
                n&apos;est pas seulement du code : c&apos;est quelqu&apos;un qui
                sait parler à un client sans jargon, qui pose les bonnes
                questions avant de commencer, et qui a déjà l&apos;habitude
                d&apos;être responsable d&apos;une livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="mb-9 font-display text-[clamp(28px,4vw,42px)] font-extrabold">
            Le parcours
          </h2>

          <ol className="border-l-2 border-line-strong pl-6 sm:pl-8">
            {timeline.map((item) => (
              <li key={item.period} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-surface bg-accent sm:-left-[39px]"
                />
                <p className="font-mono text-[13px] text-faint">
                  {item.period}
                </p>
                <h3 className="mt-1.5 font-display text-[20px] font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[68ch] text-[15px] text-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
