"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeMenu, setMenu } from "@/features/ui/uiSlice";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector((state) => state.ui.menuOpen);

  useEffect(() => {
    dispatch(closeMenu());
  }, [pathname, dispatch]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-[17px] font-bold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-accent font-display text-[15px] font-extrabold text-on-accent"
          >
            M
          </span>
          MehdiLabsDz
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-[10px] px-3 py-2 text-[15px] transition-colors ${
                  active ? "font-semibold text-ink" : "text-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span aria-hidden="true" className="mx-2 h-6 w-px bg-line" />
          <ThemeToggle />
          <Link
            href="/contact"
            className="press ml-2 rounded-[10px] bg-accent px-4 py-2.5 text-[15px] font-semibold text-on-accent"
          >
            Discuter d&apos;un projet
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => dispatch(setMenu(!menuOpen))}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[12px] border border-line bg-surface"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="menu-mobile"
          className="border-t border-line bg-surface px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-[10px] px-3 py-3 text-base ${
                    pathname === link.href
                      ? "bg-raised font-semibold text-ink"
                      : "text-soft"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="press mt-4 block rounded-[10px] bg-accent px-4 py-3 text-center font-semibold text-on-accent"
          >
            Discuter d&apos;un projet
          </Link>
        </div>
      )}
    </header>
  );
}
