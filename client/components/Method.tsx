import SectionLabel from "./SectionLabel";

/* Ces cinq blocs sont numérotés parce qu'ils forment une vraie séquence :
   chaque étape dépend de la précédente. */
const steps = [
  {
    title: "Scoping",
    body: "We list what the app must do, and above all what it will not do in the first version. I leave with a written scope and a deadline.",
  },
  {
    title: "Data modelling",
    body: "I design the data before the screens: products, variants, orders, roles. This step avoids rewriting everything three weeks later.",
  },
  {
    title: "Development",
    body: "Front end and API move forward together, with regular check-ins on an online version you can try at any time.",
  },
  {
    title: "Launch",
    body: "Deployment, domain name, backups, and a walkthrough of the back-office with the people who will use it.",
  },
  {
    title: "Follow-up",
    body: "Fixes, changes and adjustments after a few weeks of real use. That is when the real needs appear.",
  },
];

export default function Method() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-9 max-w-[58ch]">
          <SectionLabel>Method</SectionLabel>
          <h2 className="mt-3 text-[clamp(27px,3.6vw,38px)] font-extrabold">
            How a project runs
          </h2>
          <p className="mt-4 text-[17px] text-soft">
            The same method for a freelance job or for a feature in a team.
          </p>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-bg p-5">
              <span
                aria-hidden="true"
                className="font-mono text-[13px] text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[18px] font-bold">{step.title}</h3>
              <p className="mt-2 text-[14px] text-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
