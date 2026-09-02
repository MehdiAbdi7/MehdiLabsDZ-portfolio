import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sky/10 bg-[rgba(10,15,30,0.8)] px-6 pb-8 pt-12">
      <div className="mx-auto max-w-300">
        <div className="mb-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2 font-space text-[22px] font-bold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-sky to-red-500 text-[14px] font-black text-navy">
                W
              </span>
              <span className="text-slate-50">
                Winch<span className="text-sky">Labs</span>
              </span>
            </div>
            <p className="max-w-60 text-sm leading-[1.7] text-muted">
              Développeur full stack MERN en TypeScript, basé à Alger.
              Applications web sur mesure, du cahier des charges à la mise en
              production.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-50">
              Navigation
            </h3>
            <ul className="flex list-none flex-col gap-2.5">
              {[
                { href: "/", label: "Accueil" },
                { href: "/about", label: "À propos" },
                { href: "/projects", label: "Projets" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-50">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:mehdihca@outlook.fr"
                className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-sky"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                mehdihca@outlook.fr
              </a>
              <a
                href="https://github.com/mehdiabdi7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-sky"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#38BDF8">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                github.com/mehdiabdi7
              </a>
              <span className="flex items-center gap-2 text-sm text-muted">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Alger, Algérie
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-sky/8 pt-6">
          <p className="text-[13px] text-slate-600">
            © {year} MehdiLabsDz · Mehdi Abdi. Tous droits réservés.
          </p>
          <p className="text-[13px] text-slate-600">
            Construit avec <span className="text-sky">Next.js</span> +{" "}
            <span className="text-sky">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
