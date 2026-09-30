import Link from "next/link";
import { LuArrowUpRight, LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { lookingFor, profile } from "@/data/profile";
import SectionLabel from "./SectionLabel";

const socials = [
  { label: "GitHub", href: profile.github, Icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
];

export default function ContactBand() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-20 lg:grid-cols-[1fr_1.1fr_0.9fr]">
        <div>
          <SectionLabel>Let&apos;s work together</SectionLabel>
          <h2 className="mt-3 text-[clamp(25px,3vw,32px)] font-extrabold">
            Hiring a developer?
          </h2>
          <p className="mt-4 max-w-[38ch] text-[16px] text-soft">
            I am looking for my first full stack role, in Algiers or remote.
            Write to me, I reply within 24 hours.
          </p>
          <Link href="/contact" className="btn btn-primary mt-7">
            Get in touch
            <LuArrowUpRight aria-hidden="true" className="btn-arrow" />
          </Link>
        </div>

        {/* Cet emplacement accueillera une vraie recommandation (formateur,
            ancien collègue) le jour où il y en aura une. Pas avant. */}
        <div className="card p-6 sm:p-7">
          <SectionLabel className="text-faint">
            What I am looking for
          </SectionLabel>
          <ul className="mt-5 flex flex-col gap-4">
            {lookingFor.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[16px] font-medium"
              >
                <span aria-hidden="true" className="dot bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionLabel>Find me</SectionLabel>
          <ul className="mt-5 flex flex-col gap-4 text-[15px]">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-soft transition-colors hover:text-ink"
                >
                  <Icon aria-hidden="true" className="text-[18px] text-accent" />
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 break-all text-soft transition-colors hover:text-ink"
              >
                <LuMail
                  aria-hidden="true"
                  className="shrink-0 text-[18px] text-accent"
                />
                {profile.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
