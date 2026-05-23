"use client";

import { openContactWidget } from "./ContactWidget";

export function ContactCTAButton() {
  return (
    <button
      type="button"
      onClick={openContactWidget}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black font-medium hover:bg-[var(--accent)]/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      Open contact panel
      <span aria-hidden>→</span>
    </button>
  );
}
