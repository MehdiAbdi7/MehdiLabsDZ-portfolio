import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Velaris from "@/components/ui/velaris";

export const metadata: Metadata = {
  metadataBase: new URL("https://mehdilabsdz.netlify.app"),
  title: "Mehdi Abdi — Développeur full stack, Alger",
  description:
    "Je développe les applications qui font tourner un commerce : commandes, menus, équipes, suivi en temps réel. Stack MERN en TypeScript, à Alger.",
  keywords: [
    "développeur full stack Alger",
    "développeur web Algérie",
    "MERN",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "application restaurant",
  ],
  openGraph: {
    title: "Mehdi Abdi — Développeur full stack, Alger",
    description:
      "Applications web sur mesure pour commerces et PME : commandes, menus, back-office, temps réel.",
    url: "https://mehdilabsdz.netlify.app",
    siteName: "MehdiLabsDz",
    locale: "fr_DZ",
    type: "website",
  },
};

/* Exécuté avant le premier rendu : évite le flash blanc au chargement
   d'une page en thème sombre. Volontairement minuscule et sans dépendance. */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("mehdilabsdz-theme");
    var system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.documentElement.dataset.theme = stored || system;
  } catch (e) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>
          <Velaris
            height="100vh"
            speed={0.65}
            grain={0.12}
            className="velaris-backdrop pointer-events-none !fixed !inset-0 !z-0"
          />
          <div className="relative z-10">
            <a href="#contenu" className="skip-link">
              Aller au contenu
            </a>
            <Navbar />
            <main id="contenu">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
