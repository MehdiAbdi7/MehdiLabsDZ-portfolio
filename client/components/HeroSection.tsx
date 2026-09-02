"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const codeLines = [
  { text: "const developer = {", color: "text-white" },
  { text: "  name: 'Mehdi Abdi',", color: "text-sky" },
  { text: "  role: 'Développeur Full Stack',", color: "text-sky" },
  {
    text: "  stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],",
    color: "text-indigo-400",
  },
  { text: "  focus: 'API sécurisées & temps réel',", color: "text-amber-400" },
  { text: "  location: 'Alger, Algérie',", color: "text-emerald-400" },
  { text: "  status: 'Disponible',", color: "text-emerald-400" },
  { text: "};", color: "text-white" },
];

const roles = [
  "Développeur Full Stack",
  "Next.js & TypeScript",
  "Node.js, Express & MongoDB",
  "Temps réel avec Socket.io",
];

const stats = [
  { value: "4", label: "Projets livrés" },
  { value: "2", label: "Clients accompagnés" },
  { value: "MERN", label: "Stack principal" },
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedLines, setDisplayedLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedLines((prev) => {
        if (prev < codeLines.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 280);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden px-6 py-20">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute right-[10%] top-[15%] h-100 w-100 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[12%] left-[5%] h-75 w-75 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.06)_0%,transparent_70%)]" />

      <div className="mx-auto w-full max-w-300">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left: Text */}
          <div className="order-2 animate-fadeInUp md:order-1">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/8 px-3.5 py-1.5">
              <span className="h-1.75 w-1.75 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
              <span className="text-[13px] font-medium text-muted">
                Disponible pour de nouveaux projets
              </span>
            </div>

            <h1 className="mb-4 font-space text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.1] text-white">
              Je transforme des idées en applications.{" "}
              <span className="gradient-text">MehdiLabsDz</span>
            </h1>

            {/* Animated role */}
            <div className="mb-6 h-10 overflow-hidden">
              <p
                key={currentRole}
                className="animation-[fadeInUp_0.4s_ease_forwards] font-space text-[clamp(18px,2.5vw,24px)] font-semibold text-sky"
              >
                {roles[currentRole]}
              </p>
            </div>

            <p className="mb-10 max-w-120 text-base leading-[1.8] text-muted">
              Je conçois des applications web de bout en bout : modélisation
              des données, API REST sécurisées, fonctionnalités temps réel et
              interfaces réactives. Un parcours de gestion et de terrain
              derrière moi, du code en TypeScript devant, sous la marque{" "}
              <span className="font-semibold text-sky">MehdiLabsDz</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-[10px] bg-linear-to-br from-sky to-sky-dim px-7 py-3.5 text-[15px] font-bold text-[#0A0F1E] shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-200"
              >
                Voir mes projets
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://github.com/mehdiabdi7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-[10px] border border-sky/25 bg-sky/5 px-7 py-3.5 text-[15px] font-semibold text-sky transition-all duration-200 hover:bg-sky/10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                </svg>
                Télécharger mon CV
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex gap-10 border-t border-sky/10 pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-space text-[28px] font-extrabold leading-none text-sky">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[13px] text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="order-1 animate-fadeInUp [animation-delay:0.2s] max-w-full md:order-2">
            <div className="overflow-hidden rounded-2xl border border-sky/15 bg-[#0D1117] shadow-[0_0_60px_rgba(56,189,248,0.1),0_40px_80px_rgba(0,0,0,0.5)]">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-sky/10 bg-[#161B22] px-4 py-3.5">
                <span className="h-3 w-3 rounded-full bg-red" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-xs text-muted">
                  developer.ts
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm leading-[1.9]">
                <div className="mb-2 text-xs text-muted">
                  👋 Bienvenue chez MehdiLabsDz
                </div>
                {codeLines.slice(0, displayedLines).map((line, i) => (
                  <div key={i} className={line.color}>
                    {line.text}
                    {i === displayedLines - 1 &&
                      displayedLines < codeLines.length && (
                        <span className="animate-[blink_1s_step-end_infinite] border-r-2 border-sky">
                          &nbsp;
                        </span>
                      )}
                  </div>
                ))}
                {displayedLines === codeLines.length && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-emerald-400">▶</span>
                    <span className="text-xs text-muted">
                      Prêt à construire votre projet ?
                    </span>
                    <span className="inline-block h-4 w-0.5 animate-[blink_1s_step-end_infinite] bg-sky" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
