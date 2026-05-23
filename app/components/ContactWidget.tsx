"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ContactForm } from "./ContactForm";

const LINKS = [
  {
    label: "Email",
    value: "danieloladele@gmail.com",
    href: "mailto:danieloladele@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "in/danieloladele",
    href: "https://www.linkedin.com/in/danieloladele/",
  },
  {
    label: "GitHub",
    value: "@yungdarniel",
    href: "https://github.com/yungdarniel",
  },
  { label: "Location", value: "Lagos, Nigeria · GMT+1", href: null },
];

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const fabRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // ESC to close + scroll lock while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, close]);

  // Focus the panel on open; return focus to FAB on close
  useEffect(() => {
    if (open) {
      panelRef.current?.focus();
    } else {
      fabRef.current?.focus({ preventScroll: true });
    }
  }, [open]);

  // Allow other components to open the widget via a custom event
  useEffect(() => {
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("contact-widget:open", onOpenEvent);
    return () => window.removeEventListener("contact-widget:open", onOpenEvent);
  }, []);

  return (
    <>
      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="contact-widget-panel"
        aria-label={open ? "Close contact panel" : "Open contact panel"}
        className="fixed z-40 bottom-5 right-5 sm:bottom-7 sm:right-7 group/fab grid grid-cols-[auto_1fr_auto] items-center gap-2 pl-2.5 pr-4 py-2.5 rounded-full bg-[var(--accent)] text-black font-medium shadow-lg shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        <span
          aria-hidden
          className="grid place-items-center h-6 w-6 rounded-full bg-black/15"
        >
          {open ? <CloseIcon /> : <ChatIcon />}
        </span>
        <span className="text-sm">
          {open ? "Close" : "Let's talk"}
        </span>
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-black/80 live-dot"
        />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        id="contact-widget-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Contact panel"
        tabIndex={-1}
        className={`fixed z-50 right-0 top-0 h-full w-full max-w-md outline-none transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col bg-[var(--background)] border-l border-white/[0.08] shadow-2xl shadow-black/40">
          <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-white/[0.06]">
            <div>
              <div className="font-mono text-[10px] tracking-wider uppercase text-[var(--accent)] mb-1">
                // contact
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Let&apos;s talk.
              </h2>
              <p className="text-sm text-[var(--muted)] mt-1">
                Send a note — I reply within a day or two.
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close contact panel"
              className="grid place-items-center h-9 w-9 rounded-full border border-white/[0.08] hover:bg-white/[0.04] text-[var(--muted)] hover:text-foreground transition-colors flex-shrink-0"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            <ContactForm />

            <div className="pt-2">
              <div className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)] mb-3">
                // direct channels
              </div>
              <ul className="grid gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
                {LINKS.map((link) => (
                  <li
                    key={link.label}
                    className="bg-[var(--background)] px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--muted)]">
                      {link.label}
                    </span>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm hover:text-[var(--accent)] transition-colors break-all text-right"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground text-right">
                        {link.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ChatIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/**
 * Trigger the widget from anywhere via a button:
 *   <button onClick={() => openContactWidget()}>Get in touch</button>
 */
export function openContactWidget() {
  window.dispatchEvent(new CustomEvent("contact-widget:open"));
}
