"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 border-b transition-all duration-300 ${
        scrolled
          ? "border-sky/10 bg-[rgba(10,15,30,0.95)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-18 max-w-300 items-center justify-between px-6"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-space text-[22px] font-bold"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-sky to-red-500 text-[16px] font-black text-navy">
            W
          </span>
          <span className="text-slate-50">
            Winch<span className="text-sky">Labs</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="desktop-nav flex list-none items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`inline-block rounded-lg border px-4 py-2 text-sm font-medium tracking-[0.02em] transition-all duration-200 ${
                  pathname === link.href
                    ? "border-sky/30 bg-sky/10 text-sky"
                    : "border-transparent text-muted hover:border-sky/20 hover:bg-white/3 hover:text-slate-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-linear-to-br from-sky to-sky-dim px-5 py-2.5 text-sm font-bold text-navy shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Embauchez-moi
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="mobile-burger hidden rounded-lg border border-sky/30 bg-transparent p-2 text-sky"
        >
          {menuOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu border-t border-sky/10 bg-[rgba(10,15,30,0.98)] px-6 pb-6 pt-4">
          <ul className="flex list-none flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium ${
                    pathname === link.href
                      ? "bg-sky/8 text-sky"
                      : "text-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="/contact"
                className="block rounded-lg bg-linear-to-br from-sky to-sky-dim px-4 py-3 text-center text-base font-bold text-navy"
              >
                Embauchez-moi
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
