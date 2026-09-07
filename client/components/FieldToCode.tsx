const rows = [
  {
    field: "Recevoir un client et comprendre ce qu'il veut vraiment",
    code: "Traduire un besoin métier en modèle de données et en écrans, avant d'écrire la première ligne.",
  },
  {
    field: "Chiffrer un chantier et s'engager sur une date",
    code: "Découper en lots, livrer une première version utilisable, puis itérer plutôt que promettre le tout d'un coup.",
  },
  {
    field: "Coordonner une équipe et un fournisseur sur site",
    code: "Travailler en Git avec des branches lisibles, un historique propre et des messages qu'un autre développeur peut suivre.",
  },
  {
    field: "Former le client à son installation et rester joignable",
    code: "Livrer un back-office qu'un employé prend en main sans formation longue, et assurer le suivi après la mise en ligne.",
  },
  {
    field: "Assumer une erreur devant un client qui a payé",
    code: "Dire ce qui ne marche pas et sous quel délai c'est corrigé, plutôt que de le découvrir en production.",
  },
];

export default function FieldToCode() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 max-w-[62ch]">
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold">
            Six ans de terrain avant la première ligne de code
          </h2>
          <p className="mt-4 text-[17px] text-soft">
            Licence en management, agent commercial puis directeur technique au
            sein du Groupe ABDI : cahiers des charges, chantiers
            d&apos;électricité et de domotique, équipes à coordonner, clients à
            tenir. Ce passé ne remplace pas les compétences techniques — il
            décide de ce que je fais avec.
          </p>
        </div>

        <dl className="overflow-hidden rounded-xl border border-line">
          <div className="hidden grid-cols-2 gap-px bg-line sm:grid">
            <p className="bg-raised px-5 py-3 text-[13px] font-semibold text-faint">
              Ce que je faisais
            </p>
            <p className="bg-raised px-5 py-3 text-[13px] font-semibold text-faint">
              Ce que ça change dans un projet web
            </p>
          </div>

          {rows.map((row) => (
            <div
              key={row.field}
              className="grid gap-px border-t border-line bg-line sm:grid-cols-2"
            >
              <dt className="bg-surface px-5 py-4 font-display text-[16px] font-semibold">
                {row.field}
              </dt>
              <dd className="bg-surface px-5 py-4 text-[15px] text-soft">
                {row.code}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
