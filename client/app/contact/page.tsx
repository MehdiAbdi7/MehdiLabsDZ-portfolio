import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Mehdi Abdi",
  description:
    "Contacter Mehdi Abdi, développeur full stack à Alger, pour un poste ou une mission.",
};

const details = [
  { label: "Email", value: "mehdiabdi.dev@outlook.fr", href: "mailto:mehdiabdi.dev@outlook.fr" },
  { label: "GitHub", value: "github.com/mehdiabdi7", href: "https://github.com/mehdiabdi7" },
  { label: "Localisation", value: "Alger, Algérie" },
  { label: "Délai de réponse", value: "Sous 24 heures" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-14">
      <h1 className="max-w-[16ch] font-display text-[clamp(34px,5.4vw,56px)] font-extrabold">
        Écrivez-moi
      </h1>
      <p className="mt-5 max-w-[58ch] text-[17px] text-soft">
        Un poste à pourvoir, une application à construire, ou simplement une
        question sur un des projets — tout arrive au même endroit.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="panel h-fit divide-y divide-line">
          {details.map((detail) => (
            <div key={detail.label} className="px-5 py-4">
              <p className="text-[13px] text-faint">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    detail.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-0.5 block text-[15px] font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-0.5 text-[15px] font-medium">{detail.value}</p>
              )}
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
