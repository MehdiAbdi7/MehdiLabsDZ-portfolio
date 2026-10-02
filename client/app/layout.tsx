import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

/* next/font télécharge les polices au build et les sert depuis le site :
   aucune requête vers Google dans le navigateur du visiteur. Chaque police
   est exposée comme variable CSS, reprise dans globals.css. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mehdi Abdi | Full stack developer, Algiers",
  description:
    "I build the apps that run a business: ordering, menus, staff back-office, real-time tracking. MERN stack with TypeScript, based in Algiers.",
  keywords: [
    "full stack developer Algiers",
    "web developer Algeria",
    "MERN",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "restaurant ordering app",
  ],
  openGraph: {
    title: "Mehdi Abdi | Full stack developer, Algiers",
    description:
      "Web apps built for real use: ordering, menus, back-office, real time.",
    url: SITE_URL,
    siteName: "Mehdi Abdi",
    locale: "en_US",
    type: "website",
  },
};

/* Exécuté avant le premier rendu : évite le flash au chargement quand le
   visiteur a choisi le thème clair. Sans choix enregistré, le site s'ouvre
   en sombre. Volontairement minuscule et sans dépendance.

   Il nettoie aussi le <head> : en production, Netlify y insère un
   commentaire précédé d'un saut de ligne. React ne les a pas rendus, il
   voit un écart à l'hydratation (erreur #418) et refait toute la page côté
   client. Le script tourne après ce commentaire et avant React : il le
   retire à temps. */
const themeScript = `
(function () {
  var node = document.head.firstChild;
  while (node) {
    var next = node.nextSibling;
    var isComment = node.nodeType === 8;
    var isBlankText = node.nodeType === 3 && !node.nodeValue.trim();
    if (isComment || isBlankText) document.head.removeChild(node);
    node = next;
  }

  try {
    var stored = localStorage.getItem("MehdiAbdi-theme");
    document.documentElement.dataset.theme =
      stored === "light" ? "light" : "dark";
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${jakarta.variable} ${jbMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>
          <a href="#content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
