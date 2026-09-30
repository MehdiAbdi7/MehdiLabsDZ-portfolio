import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact | Mehdi Abdi",
  description:
    "Contact Mehdi Abdi, full stack developer in Algiers, about a role or a project.",
};

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/MehdiAbdi7", href: profile.github },
  { label: "LinkedIn", value: "Mehdi Abdi on LinkedIn", href: profile.linkedin },
  { label: "Location", value: profile.location },
  { label: "Response time", value: "Within 24 hours" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-14">
      <SectionLabel>Contact</SectionLabel>
      <h1 className="mt-3 max-w-[16ch] text-[clamp(34px,5.4vw,56px)] font-extrabold">
        Write to me
      </h1>
      <p className="mt-5 max-w-[58ch] text-[17px] text-soft">
        A role to fill, an app to build, or a question about one of the
        projects. Everything arrives in the same place.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card h-fit divide-y divide-line">
          {details.map((detail) => (
            <div key={detail.label} className="px-5 py-4">
              <p className="label text-faint">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    detail.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-1.5 block break-all text-[15px] font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-gold"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-1.5 text-[15px] font-medium">{detail.value}</p>
              )}
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
