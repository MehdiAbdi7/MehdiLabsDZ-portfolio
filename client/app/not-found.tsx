import Link from "next/link";

export const metadata = { title: "Page introuvable — Mehdi Abdi" };

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28">
      <p className="font-mono text-[14px] text-faint">404</p>
      <h1 className="mt-3 max-w-[20ch] font-display text-[clamp(32px,5vw,52px)] font-extrabold">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-4 max-w-[52ch] text-[17px] text-soft">
        Le lien est peut-être ancien. Les projets et le formulaire de contact
        sont accessibles depuis le menu.
      </p>
      <Link
        href="/"
        className="press mt-8 inline-block rounded-[10px] bg-accent px-6 py-3.5 font-semibold text-on-accent"
      >
        Revenir à l&apos;accueil
      </Link>
    </section>
  );
}
