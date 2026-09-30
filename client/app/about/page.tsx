import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import FieldToCode from "@/components/FieldToCode";
import Method from "@/components/Method";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About | Mehdi Abdi",
  description:
    "From sales and site management to full stack development. The path of Mehdi Abdi, MERN developer in Algiers.",
};

const timeline = [
  {
    period: "2018 to 2024",
    title: "Sales agent, then technical director, Groupe ABDI",
    body: "Answering client briefs, pricing, coordinating teams on site and quality control, in electrical work and home automation. This is where I learned to turn what a client asks for into what they really need.",
  },
  {
    period: "2023",
    title: "First site shipped",
    body: "HTML, CSS, JavaScript and Bootstrap in my free time, then the launch of the site of SARL Home Connect Algérie, the electrical equipment company I co-managed with my brother. My first project in real conditions, for a real business.",
  },
  {
    period: "2025",
    title: "Full stack training, GoMyCode",
    body: "The full MERN stack: React, Redux, Node.js, Express, MongoDB, Git. About ten practice projects to work on each part of the stack.",
  },
  {
    period: "2025 to 2026",
    title: "Focus on Next.js and TypeScript",
    body: "App Router, strict TypeScript, Redux Toolkit, Zod validation, real time with Socket.io. I built Niwa Food, my final training project: a multi-store ordering platform, end to end.",
  },
  {
    period: "2026",
    title: "New projects and the search for a first role",
    body: "Full rebuild in Next.js and TypeScript of the Home Connect Algérie site, three years after its first HTML version. Work on MB Food, a version of Niwa Food for a street food restaurant. Today I am looking for my first developer role, ideally in an agency, to work on many projects and grow with a team.",
  },
];

const facts = [
  { label: "Education", value: "Bachelor's degree in management, then GoMyCode" },
  { label: "Status", value: "Looking for a first role, available now" },
  {
    label: "Languages",
    value: "Arabic (native), French (fluent), English (intermediate)",
  },
  { label: "Location", value: "Algiers, remote possible" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div>
            <SectionLabel>About me</SectionLabel>
            <h1 className="mt-3 max-w-[18ch] text-[clamp(34px,5.4vw,56px)] font-extrabold">
              I sold and delivered before I wrote code
            </h1>
            <div className="mt-6 flex max-w-[64ch] flex-col gap-4 text-[17px] text-soft">
              <p>
                My name is Mehdi Abdi. For six years, my job was to understand
                what a client wanted, price it, and deliver it with a team.
                First as a sales agent, then as technical director on
                electrical and home automation sites.
              </p>
              <p>
                I moved to web development because I kept seeing the same
                problems at every client: orders written in a notebook, stock
                kept from memory, teams calling each other to ask if a dish is
                ready. Problems that software solves.
              </p>
              <p>
                Today I build with the MERN stack and TypeScript, and I am
                looking for the team where I can start my career. What I bring
                is not only code. I can talk to a client without jargon, I ask
                the right questions before starting, and I am used to being
                responsible for a delivery.
              </p>
            </div>
          </div>

          <dl className="card divide-y divide-line">
            {facts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="label text-faint">{fact.label}</dt>
                <dd className="mt-1.5 text-[15px] font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="inlay border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionLabel>Timeline</SectionLabel>
          <h2 className="mb-10 mt-3 text-[clamp(27px,3.6vw,38px)] font-extrabold">
            My path
          </h2>

          <ol className="border-l border-gold pl-6 sm:pl-8">
            {timeline.map((item) => (
              <li key={item.period} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-gold sm:-left-[38px]"
                />
                <p className="font-mono text-[13px] text-faint">
                  {item.period}
                </p>
                <h3 className="mt-1.5 text-[20px] font-bold">{item.title}</h3>
                <p className="mt-2 max-w-[68ch] text-[15px] text-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FieldToCode />
      <Method />
      <CallToAction />
    </>
  );
}
