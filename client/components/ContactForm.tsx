"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const empty = { name: "", email: "", subject: "", message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Indiquez votre nom.";
    if (!form.email.trim()) next.email = "Indiquez votre email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Cet email n'a pas un format valide.";
    if (!form.subject.trim()) next.subject = "Indiquez un sujet.";
    if (form.message.trim().length < 20)
      next.message = "Le message doit faire au moins 20 caractères.";
    return next;
  };

  const submit = async () => {
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      if (!response.ok) throw new Error("Envoi refusé par le serveur");
      setForm(empty);
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-[10px] border bg-surface px-3.5 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-faint ${
      hasError ? "border-signal" : "border-line focus:border-line-strong"
    }`;

  if (status === "sent") {
    return (
      <div className="panel p-8">
        <h2 className="font-display text-[22px] font-bold">Message envoyé</h2>
        <p className="mt-3 max-w-[52ch] text-[15px] text-soft">
          Je réponds sous 24 heures en général. Si c&apos;est urgent, écrivez
          directement à mehdiabdi.dev@outlook.fr.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 cursor-pointer rounded-[10px] border border-line-strong px-5 py-2.5 font-semibold"
        >
          Écrire un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="panel p-6 sm:p-8">
      <h2 className="font-display text-[22px] font-bold">
        Parlez-moi de votre projet
      </h2>

      <div className="mt-6 flex flex-col gap-5">
        {/* Piège à robots : invisible, jamais rempli par un humain. */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(event) =>
            setForm({ ...form, website: event.target.value })
          }
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-[14px] font-medium"
            >
              Nom
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClass(!!errors.name)}
            />
            {errors.name && (
              <p
                id="name-error"
                role="alert"
                className="mt-1.5 text-[13px] text-signal"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[14px] font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClass(!!errors.email)}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1.5 text-[13px] text-signal"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-[14px] font-medium"
          >
            Sujet
          </label>
          <input
            id="subject"
            value={form.subject}
            onChange={(event) =>
              setForm({ ...form, subject: event.target.value })
            }
            placeholder="Recrutement, site de commande, refonte…"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={fieldClass(!!errors.subject)}
          />
          {errors.subject && (
            <p
              id="subject-error"
              role="alert"
              className="mt-1.5 text-[13px] text-signal"
            >
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[14px] font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={form.message}
            onChange={(event) =>
              setForm({ ...form, message: event.target.value })
            }
            placeholder="Ce que vous voulez mettre en ligne, pour quand, et avec quel budget si vous l'avez déjà en tête."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            className={`${fieldClass(!!errors.message)} resize-y`}
          />
          {errors.message ? (
            <p
              id="message-error"
              role="alert"
              className="mt-1.5 text-[13px] text-signal"
            >
              {errors.message}
            </p>
          ) : (
            <p id="message-hint" className="mt-1.5 text-[13px] text-faint">
              Vingt caractères minimum.
            </p>
          )}
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="rounded-[10px] border border-signal px-4 py-3 text-[14px] text-signal"
          >
            Le message n&apos;est pas parti. Réessayez dans un instant, ou
            écrivez à mehdiabdi.dev@outlook.fr.
          </p>
        )}

        <button
          type="button"
          onClick={submit}
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          className={`press rounded-[10px] px-6 py-3.5 font-semibold ${
            status === "sending"
              ? "cursor-not-allowed bg-faint text-on-accent"
              : "cursor-pointer bg-accent text-on-accent"
          }`}
        >
          {status === "sending" ? "Envoi en cours" : "Envoyer le message"}
        </button>
      </div>
    </div>
  );
}
