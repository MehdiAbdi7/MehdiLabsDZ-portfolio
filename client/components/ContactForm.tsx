"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "sent" | "error";

const empty = { name: "", email: "", subject: "", message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "This email format is not valid.";
    if (!form.subject.trim()) next.subject = "Enter a subject.";
    if (form.message.trim().length < 20)
      next.message = "The message must be at least 20 characters.";
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
      if (!response.ok) throw new Error("The server refused the message");
      setForm(empty);
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-[10px] border bg-bg px-3.5 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-faint ${
      hasError ? "border-signal" : "border-line focus:border-gold"
    }`;

  if (status === "sent") {
    return (
      <div className="card p-8">
        <h2 className="text-[22px] font-bold">Message sent</h2>
        <p className="mt-3 max-w-[52ch] text-[15px] text-soft">
          I usually reply within 24 hours. If it is urgent, write directly to{" "}
          {profile.email}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-6"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <h2 className="text-[22px] font-bold">Send me a message</h2>

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
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              autoComplete="name"
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
              autoComplete="email"
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
            Subject
          </label>
          <input
            id="subject"
            value={form.subject}
            onChange={(event) =>
              setForm({ ...form, subject: event.target.value })
            }
            placeholder="Hiring, ordering site, redesign..."
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
            placeholder="What you need, when you need it, and any detail that helps me answer."
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
              Twenty characters minimum.
            </p>
          )}
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="rounded-[10px] border border-signal px-4 py-3 text-[14px] text-signal"
          >
            The message was not sent. Try again in a moment, or write to{" "}
            {profile.email}.
          </p>
        )}

        <button
          type="button"
          onClick={submit}
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          className={`btn py-3.5 ${
            status === "sending"
              ? "cursor-not-allowed bg-raised text-soft"
              : "btn-primary"
          }`}
        >
          {status === "sending" ? "Sending" : "Send message"}
        </button>
      </div>
    </div>
  );
}
