import Link from "next/link";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5 font-display text-[17px] font-bold">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-accent text-[15px] font-extrabold text-on-accent"
            >
              M
            </span>
            MehdiLabsDz
          </p>
          <p className="mt-4 max-w-[34ch] text-[15px] text-soft">
            Mehdi Abdi, développeur full stack à Alger. Applications web sur
            mesure, du cahier des charges à la mise en production.
          </p>
        </div>

        <nav aria-label="Navigation de pied de page">
          <h2 className="text-[13px] font-semibold text-faint">Pages</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[13px] font-semibold text-faint">Contact</h2>
          <ul className="mt-4 flex flex-col gap-2 text-[15px]">
            <li>
              <a
                href="mailto:mehdiabdi.dev@outlook.fr"
                className="text-soft transition-colors hover:text-ink"
              >
                mehdiabdi.dev@outlook.fr
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mehdiabdi7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft transition-colors hover:text-ink"
              >
                github.com/mehdiabdi7
              </a>
            </li>
            <li className="text-soft">Alger, Algérie</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-[13px] text-faint">
          © {year} MehdiLabsDz — Mehdi Abdi
        </p>
      </div>
    </footer>
  );
}
