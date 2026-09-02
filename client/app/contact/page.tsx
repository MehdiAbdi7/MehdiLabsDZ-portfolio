import type { Metadata } from "next";
import ContactClient from "../../components/ContactClient";

export const metadata: Metadata = {
  title: "Contact — Mehdi Abdi | WinchLabs",
  description:
    "Contactez Mehdi Abdi pour vos projets web full stack MERN. Disponible pour du freelance et des collaborations.",
};

export default function ContactPage() {
  return <ContactClient />;
}
