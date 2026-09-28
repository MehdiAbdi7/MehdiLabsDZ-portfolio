import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="panel flex flex-col items-start gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[52ch]">
          <h2 className="font-display text-[clamp(26px,3.6vw,36px)] font-extrabold">
            Vous cherchez quelqu&apos;un pour construire, pas seulement pour
            coder.
          </h2>
          <p className="mt-3 text-[16px] text-soft">
            Je cherche mon premier poste en équipe, à Alger ou à distance.
            Écrivez-moi pour convenir d&apos;un entretien, je vous réponds sous
            24 heures.
          </p>
        </div>
        <Link
          href="/contact"
          className="press shrink-0 rounded-[10px] bg-accent px-7 py-4 font-semibold text-on-accent"
        >
          Me contacter
        </Link>
      </div>
    </section>
  );
}
