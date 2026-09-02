import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos — Mehdi Abdi | WinchLabs",
  description:
    "Développeur full stack MERN en TypeScript basé à Alger. Parcours, compétences et façon de travailler de Mehdi Abdi.",
};

const timeline = [
  {
    year: "2018 – 2024",
    title: "Parcours commercial et technique",
    description:
      "Agent commercial puis directeur technique au sein du Groupe ABDI. Étude des cahiers des charges clients, coordination d'équipes sur chantier, suivi qualité.",
    dotClass: "bg-slate-500 shadow-[0_0_16px_rgba(100,116,139,0.5)]",
    chipClass: "border-slate-500/30 bg-slate-500/15 text-slate-500",
  },
  {
    year: "2023",
    title: "Premiers pas en développement web",
    description:
      "HTML, CSS, JavaScript, manipulation du DOM, Bootstrap. Création et mise en ligne du site de SARL Home Connect Algérie — premier projet livré en conditions réelles.",
    dotClass: "bg-emerald-500 shadow-[0_0_16px_rgba(34,197,94,0.5)]",
    chipClass: "border-emerald-500/30 bg-emerald-500/15 text-emerald-500",
  },
  {
    year: "2025",
    title: "Formation Full Stack chez GoMyCode",
    description:
      "Plongée dans le stack MERN complet : React, Redux, Node.js, Express, MongoDB, Git. Construction des premiers projets full stack de bout en bout.",
    dotClass: "bg-sky shadow-[0_0_16px_rgba(56,189,248,0.5)]",
    chipClass: "border-sky/30 bg-sky/15 text-sky",
  },
  {
    year: "2025 – 2026",
    title: "Spécialisation Next.js & TypeScript",
    description:
      "Next.js App Router, TypeScript strict, Redux Toolkit, validation Zod et temps réel avec Socket.io. Développement de Niwa Food, ma plateforme de commande multi-magasins.",
    dotClass: "bg-indigo-400 shadow-[0_0_16px_rgba(129,140,248,0.5)]",
    chipClass: "border-indigo-400/30 bg-indigo-400/15 text-indigo-400",
  },
  {
    year: "2026",
    title: "Lancement de WinchLabs en indépendant",
    description:
      "Inscription en auto-entrepreneur et premiers projets clients : Niwa Food, puis MB Food. Cadrage du besoin, développement, mise en production et suivi.",
    dotClass: "bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.5)]",
    chipClass: "border-red-500/30 bg-red-500/15 text-red-500",
  },
];

const values = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Code propre",
    description:
      "J'écris du code lisible, maintenable et bien structuré. La qualité prime toujours sur la vitesse.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Livraison rapide",
    description:
      "Je comprends l'importance des délais. Je livre des MVP fonctionnels rapidement, puis j'itère.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Communication claire",
    description:
      "Mises à jour régulières, transparence totale sur l'avancement. Pas de surprises en fin de projet.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Performance first",
    description:
      "Chaque app que je construis est optimisée : lazy loading, code splitting, temps de réponse minimaux.",
  },
];

// Petites variables pour les couleurs custom des points de la timeline
// (Tailwind ne peut pas générer dynamiquement des classes à partir de hex,
// donc on garde ces valeurs en style inline UNIQUEMENT pour les couleurs dynamiques)
export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid-bg relative overflow-hidden px-6 pb-20 pt-35">
        <div className="pointer-events-none absolute left-1/2 top-[30%] h-75 w-150 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(56,189,248,0.06)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-200 text-center">
          <span className="mb-5 inline-block rounded-full border border-sky/20 bg-sky/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky">
            À propos
          </span>
          <h1 className="mb-6 font-space text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.1] text-slate-50">
            Développeur passionné,{" "}
            <span className="gradient-text">builder par nature</span>
          </h1>
          <p className="mx-auto max-w-150 text-lg leading-[1.8] text-muted">
            Je m&apos;appelle Mehdi Abdi. Je suis développeur full stack MERN
            en TypeScript, basé à Alger, et je développe sous la marque
            WinchLabs des applications web pour des clients réels.
          </p>
        </div>
      </section>

      {/* Bio section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-300">
          <div className="about-grid grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
            {/* Avatar card */}
            <div className="flex justify-center">
              <div className="relative inline-block">
                {/* Glow border */}
                <div className="h-95 w-95 rounded-3xl bg-linear-to-br from-sky via-indigo-400 to-red-500 p-0.5 sm:h-120 sm:w-120 lg:h-145 lg:w-145">
                  <div className="relative flex h-full w-full items-center justify-center rounded-[22px] bg-navy-light">
                    <Image
                      src="/dev.jpg"
                      alt="Mehdi Abdi — Développeur Full Stack"
                      fill
                      sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, 580px"
                      className="rounded-[22px] object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-sky/30 bg-navy px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22C55E]" />
                  <span className="text-[13px] font-semibold text-slate-50">
                    Disponible
                  </span>
                </div>
                {/* Top badge */}
                <div className="absolute -left-4 -top-4 rounded-[10px] border border-sky/30 bg-sky/10 px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <span className="text-xl text-sky">🏆</span>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <h2 className="mb-5 font-space text-[32px] font-extrabold leading-tight text-slate-50">
                Bonjour, je suis <span className="text-sky">Mehdi</span> 👋
              </h2>
              <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-muted">
                <p>
                  Titulaire d&apos;une licence en management, j&apos;ai passé
                  plusieurs années sur le terrain — commercial, puis directeur
                  technique sur des chantiers d&apos;électricité et de
                  domotique — avant de basculer vers le développement web.
                </p>
                <p>
                  Formé chez GoMyCode sur le stack MERN, je me suis spécialisé
                  sur Next.js et TypeScript : applications temps réel avec
                  Socket.io, architectures multi-rôles avec JWT, validation de
                  schémas avec Zod.
                </p>
                <p>
                  Sous la marque{" "}
                  <span className="font-semibold text-sky">WinchLabs</span>, je
                  développe des applications web pour des clients algériens et
                  francophones. Mon parcours de gestion me sert tous les jours :
                  comprendre un besoin réel, tenir un délai, et parler au client
                  sans jargon.
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Localisation", value: "Alger, Algérie" },
                  { label: "Disponibilité", value: "Freelance / CDI" },
                  { label: "Langues", value: "FR / AR / EN" },
                  { label: "Stack", value: "MERN + TypeScript" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[10px] border border-sky/8 bg-white/3 px-4 py-3.5"
                  >
                    <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                      {fact.label}
                    </div>
                    <div className="text-sm font-semibold text-slate-50">
                      {fact.value}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-linear-to-br from-sky to-sky-500 px-7 py-3.5 text-[15px] font-bold text-navy shadow-[0_0_24px_rgba(56,189,248,0.25)]"
              >
                Me contacter
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-900/30 px-6 py-20">
        <div className="mx-auto max-w-200">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-sky/20 bg-sky/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky">
              Parcours
            </span>
            <h2 className="font-space text-[clamp(26px,4vw,40px)] font-extrabold text-slate-50">
              Mon évolution
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-2 left-5 top-2 w-0.5 bg-linear-to-b from-sky via-indigo-400 to-red-500 opacity-30" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-8 pl-2">
                  {/* Dot */}
                  <div
                    className={`z-1 h-6.5 w-6.5 shrink-0 rounded-full border-[3px] border-[#0A0F1E] ${item.dotClass}`}
                  />
                  <div className="flex-1 pb-2">
                    <span
                      className={`mb-2 inline-block rounded-md border px-2.5 py-0.5 text-xs font-bold ${item.chipClass}`}
                    >
                      {item.year}
                    </span>
                    <h3 className="mb-2 font-space text-[17px] font-bold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-[1.7] text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24 pt-20">
        <div className="mx-auto max-w-300">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-sky/20 bg-sky/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky">
              Valeurs
            </span>
            <h2 className="font-space text-[clamp(26px,4vw,40px)] font-extrabold text-slate-50">
              Comment je travaille
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-2xl p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-sky/20 bg-sky/8 text-sky">
                  {v.icon}
                </div>
                <h3 className="mb-2.5 font-space text-[17px] font-bold text-slate-50">
                  {v.title}
                </h3>
                <p className="text-sm leading-[1.7] text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
