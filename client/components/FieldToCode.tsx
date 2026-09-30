import SectionLabel from "./SectionLabel";

const rows = [
  {
    field: "Meet a client and understand what they really want",
    code: "Turn a business need into a data model and screens before writing the first line.",
  },
  {
    field: "Price a job and commit to a date",
    code: "Split the work into parts, ship a first usable version, then iterate instead of promising everything at once.",
  },
  {
    field: "Coordinate a team and a supplier on site",
    code: "Work in Git with readable branches, a clean history and messages another developer can follow.",
  },
  {
    field: "Train the client on their installation and stay reachable",
    code: "Deliver a back-office a staff member can use without long training, and follow up after launch.",
  },
  {
    field: "Own a mistake in front of a client who paid",
    code: "Say what does not work and when it will be fixed, instead of finding out in production.",
  },
];

export default function FieldToCode() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-9 max-w-[62ch]">
        <SectionLabel>From the field to code</SectionLabel>
        <h2 className="mt-3 text-[clamp(27px,3.6vw,38px)] font-extrabold">
          Six years in the field before my first line of code
        </h2>
        <p className="mt-4 text-[17px] text-soft">
          A degree in management, then sales agent and technical director at
          Groupe ABDI: client briefs, electrical and home automation sites,
          teams to coordinate, clients to keep. This past does not replace
          technical skills. It decides what I do with them.
        </p>
      </div>

      <dl className="overflow-hidden rounded-[14px] border border-line">
        <div className="hidden grid-cols-2 gap-px bg-line sm:grid">
          <p className="bg-raised px-5 py-3 text-[13px] font-semibold text-faint">
            What I used to do
          </p>
          <p className="bg-raised px-5 py-3 text-[13px] font-semibold text-faint">
            What it changes in a web project
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
    </section>
  );
}
