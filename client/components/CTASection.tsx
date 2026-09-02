import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-6 pb-24 pt-20">
      <div className="mx-auto max-w-200 text-center">
        <div className="relative overflow-hidden rounded-3xl border border-sky/15 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(129,140,248,0.05))] px-10 py-16 shadow-[0_20px_60px_rgba(2,6,23,0.35)] sm:px-12">
          {/* Halo central pour donner du relief au CTA */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.06)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <span className="mb-6 block text-[48px]">🚀</span>
            <h2 className="mb-4 font-space text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.2] text-slate-50">
              Prêt à construire quelque chose{" "}
              <span className="gradient-text">d&apos;incroyable ?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-120 text-base leading-[1.8] text-muted">
              Que ce soit une app web, une API, ou un dashboard complexe — je
              suis disponible pour collaborer sur votre prochain projet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-linear-to-br from-sky to-sky-dim px-8 py-3.5 text-[15px] font-bold text-navy shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Démarrer un projet
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
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-transparent px-8 py-3.5 text-[15px] font-semibold text-slate-50 transition-colors duration-200 hover:border-sky/30 hover:bg-white/3"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
