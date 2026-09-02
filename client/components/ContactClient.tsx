"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "mehdihca@outlook.fr",
    href: "mailto:mehdihca@outlook.fr",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/mehdiabdi7",
    href: "https://github.com/mehdiabdi7",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Localisation",
    value: "Alger, Algérie",
    href: undefined,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Disponibilité",
    value: "Immédiate",
    href: undefined,
  },
];

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Piège à robots : ce champ reste vide pour un humain.
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    if (!form.email.trim()) newErrors.email = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email invalide.";
    if (!form.subject.trim()) newErrors.subject = "Le sujet est requis.";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    else if (form.message.trim().length < 20)
      newErrors.message = "Le message doit faire au moins 20 caractères.";
    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const fieldClassName = (hasError: boolean) =>
    `w-full rounded-[10px] border bg-white/[0.04] px-4 py-3 text-sm text-slate-50 outline-none transition-colors placeholder:text-slate-600 focus:border-sky/40 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.08)] ${
      hasError ? "border-red-500" : "border-white/10"
    }`;

  return (
    <>
      {/* Hero */}
      <section className="grid-bg px-6 pb-16 pt-35 text-center">
        <div className="mx-auto max-w-150">
          <span className="mb-5 inline-block rounded-full border border-sky/20 bg-sky/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky">
            Contact
          </span>
          <h1 className="mb-5 font-space text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.1] text-slate-50">
            Travaillons <span className="gradient-text">ensemble</span>
          </h1>
          <p className="text-[17px] leading-[1.8] text-muted">
            Vous avez un projet en tête ? Je suis disponible pour des missions
            freelance, du CDI, ou simplement pour échanger.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section className="px-6 pb-24 pt-5">
        <div className="mx-auto max-w-275">
          <div className="contact-grid grid items-start gap-12 lg:grid-cols-[1fr_1.6fr]">
            {/* Left info */}
            <div>
              <div className="mb-6 rounded-[20px] border border-sky/10 bg-white/2 p-8">
                <h2 className="mb-2 font-space text-[20px] font-bold text-slate-50">
                  Mehdi Abdi
                </h2>
                <p className="mb-6 text-sm font-semibold text-sky">
                  Développeur Full Stack MERN · MehdiLabsDz
                </p>

                <div className="flex flex-col gap-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-sky/15 bg-sky/10 text-sky">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm font-medium text-slate-50 transition-colors duration-200 hover:text-sky"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-slate-50">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status card */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_10px_#22C55E]" />
                <div>
                  <div className="text-[13px] font-bold text-emerald-500">
                    Disponible maintenant
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    Réponse sous 24h en général
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-[20px] border border-sky/10 bg-white/2 p-10">
              {status === "sent" ? (
                <div className="py-10 text-center">
                  <div className="mb-5 text-[64px]">✅</div>
                  <h3 className="mb-3 font-space text-[22px] font-bold text-slate-50">
                    Message envoyé !
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-muted">
                    Merci pour votre message. Je vous répondrai dans les plus
                    brefs délais.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-7 rounded-[10px] border border-sky/30 bg-sky/10 px-7 py-3 text-sm font-semibold text-sky"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mb-8 font-space text-[22px] font-bold text-slate-50">
                    Envoyez-moi un message
                  </h2>

                  <div className="flex flex-col gap-5">
                    {/* Piège à robots — invisible et ignoré par les lecteurs d'écran */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={(e) =>
                        setForm({ ...form, website: e.target.value })
                      }
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    />

                    {/* Name + Email row */}
                    <div className="form-row grid gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-2 block text-[13px] font-semibold text-muted"
                        >
                          Nom complet *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Votre nom"
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                          aria-invalid={!!errors.name}
                          className={fieldClassName(!!errors.name)}
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            role="alert"
                            className="mt-1 text-xs text-red-400"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-2 block text-[13px] font-semibold text-muted"
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="votre@email.com"
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          aria-invalid={!!errors.email}
                          className={fieldClassName(!!errors.email)}
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            role="alert"
                            className="mt-1 text-xs text-red-400"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-[13px] font-semibold text-muted"
                      >
                        Sujet *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        placeholder="Projet web, collaboration, question..."
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                        aria-invalid={!!errors.subject}
                        className={fieldClassName(!!errors.subject)}
                      />
                      {errors.subject && (
                        <p
                          id="subject-error"
                          role="alert"
                          className="mt-1 text-xs text-red-400"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-[13px] font-semibold text-muted"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Décrivez votre projet, vos besoins, vos délais..."
                        rows={5}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        aria-invalid={!!errors.message}
                        className={`${fieldClassName(!!errors.message)} resize-y`}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          role="alert"
                          className="mt-1 text-xs text-red-400"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <div className="rounded-[10px] border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                        Une erreur est survenue lors de l'envoi. Veuillez
                        réessayer ou m'écrire directement à mehdihca@outlook.fr.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={status === "sending"}
                      aria-busy={status === "sending"}
                      className={`flex w-full items-center justify-center gap-2 rounded-[10px] px-4 py-3.5 text-[15px] font-bold text-navy transition-colors duration-200 cursor-pointer ${
                        status === "sending"
                          ? "cursor-not-allowed bg-sky/40 shadow-none"
                          : "bg-linear-to-br from-sky to-sky-dim shadow-[0_0_24px_rgba(56,189,248,0.3)]"
                      }`}
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="animate-spin"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
