import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mehdilabsdz.netlify.app"),
  title: "Mehdi Abdi — Développeur Full Stack | MehdiLabsDz",
  description:
    "Développeur full stack MERN en TypeScript basé à Alger. Next.js, Node.js, Express, MongoDB. Applications web sur mesure sous la marque MehdiLabsDz.",
  keywords: [
    "développeur full stack",
    "MERN",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Alger",
    "Algérie",
    "freelance",
  ],
  openGraph: {
    title: "Mehdi Abdi — Développeur Full Stack | MehdiLabsDz",
    description:
      "Développeur full stack MERN en TypeScript basé à Alger. Applications web sur mesure.",
    url: "https://mehdilabsdz.netlify.app",
    siteName: "MehdiLabsDz",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="noise">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
