import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page introuvable | MehdiLabsDz",
};

export default function NotFound() {
  return (
    <section className="grid-bg flex min-h-screen items-center justify-center px-6 py-6 text-center">
      <div className="max-w-125">
        <div className="mb-2 font-space text-[120px] font-black leading-none bg-[linear-gradient(135deg,#38BDF8,#818CF8)] bg-clip-text text-transparent">
          404
        </div>
        <h1 className="mb-4 font-space text-2xl font-bold text-slate-50">
          Page introuvable
        </h1>
        <p className="mb-10 text-[15px] leading-[1.7] text-muted">
          Cette page n&apos;existe pas ou a été déplacée. Retournez à
          l&apos;accueil pour continuer.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-[10px] bg-linear-to-br from-sky to-sky-dim px-7 py-3.5 text-[15px] font-bold text-navy shadow-[0_0_24px_rgba(56,189,248,0.3)]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
