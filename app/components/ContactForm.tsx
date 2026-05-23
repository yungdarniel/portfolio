"use client";

import { useState, type FormEvent } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const FALLBACK_EMAIL = "danieloladele@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this; humans don't see it.
    if (data.get("botcheck")) {
      setStatus({ kind: "success" });
      return;
    }

    if (!ACCESS_KEY) {
      setStatus({
        kind: "error",
        message: `Form not configured yet — email me directly at ${FALLBACK_EMAIL}.`,
      });
      return;
    }

    data.set("access_key", ACCESS_KEY);
    data.set("subject", `Portfolio enquiry from ${data.get("name") || "visitor"}`);
    data.set("from_name", "Daniel Oladele · Portfolio");

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };

      if (res.ok && json.success) {
        setStatus({ kind: "success" });
        form.reset();
      } else {
        setStatus({
          kind: "error",
          message:
            json.message ||
            `Send failed — email me at ${FALLBACK_EMAIL} instead.`,
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: `Network error — email me at ${FALLBACK_EMAIL} instead.`,
      });
    }
  }

  const disabled = status.kind === "submitting";

  if (status.kind === "success") {
    return (
      <div className="text-left max-w-xl mx-auto p-6 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/[0.04]">
        <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent)] mb-2">
          // message received
        </div>
        <p className="text-foreground mb-2">
          Thanks — I&apos;ll reply within a day or two.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="text-xs font-mono text-[var(--muted)] hover:text-foreground transition-colors"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="text-left max-w-xl mx-auto grid gap-4"
      noValidate
    >
      {/* Honeypot — visually hidden, label tells bots it's required */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={disabled}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={disabled}
        />
      </div>

      <Field
        label="Company"
        name="company"
        type="text"
        autoComplete="organization"
        disabled={disabled}
        optional
      />

      <FieldTextarea
        label="What are you working on?"
        name="message"
        required
        rows={5}
        disabled={disabled}
      />

      {status.kind === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-sm text-red-200">
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black font-medium hover:bg-[var(--accent)]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {disabled ? "Sending…" : "Send message"}
        {!disabled && <span aria-hidden>→</span>}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
  disabled,
  optional,
}: {
  label: string;
  name: string;
  type: "text" | "email";
  required?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  optional?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)]">
        {label}
        {optional && <span className="ml-1 normal-case">(optional)</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        disabled={disabled}
        className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-foreground placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)]/60 focus:ring-1 focus:ring-[var(--accent)]/30 disabled:opacity-60 transition-colors"
      />
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  required,
  rows,
  disabled,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows: number;
  disabled?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)]">
        {label}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        disabled={disabled}
        className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-foreground placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)]/60 focus:ring-1 focus:ring-[var(--accent)]/30 disabled:opacity-60 transition-colors resize-y min-h-[120px]"
      />
    </label>
  );
}
