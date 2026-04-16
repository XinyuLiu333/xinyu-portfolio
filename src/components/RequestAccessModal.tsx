"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Project } from "@/lib/types";
import { useGate } from "./GateContext";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function RequestAccessModal({ project, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const { unlock } = useGate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Access Request: ${project.title}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:xyliu115@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  async function handlePasscode(e: React.FormEvent) {
    e.preventDefault();
    setPasscodeError(false);
    const ok = await unlock(passcode);
    if (ok) {
      onClose();
    } else {
      setPasscodeError(true);
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-bg-card rounded-xl max-w-md w-full p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <p className="font-serif text-xl text-text-primary mb-3">
              Request sent
            </p>
            <p className="text-text-secondary text-sm">
              Thanks! I&rsquo;ll get back to you soon.
            </p>
          </div>
        ) : showPasscode ? (
          <>
            <h2 className="font-serif text-xl text-text-primary mb-2">
              Enter passcode
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              This unlocks all confidential case studies.
            </p>
            <form onSubmit={handlePasscode} className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="Passcode"
                required
                value={passcode}
                onChange={(e) => { setPasscode(e.target.value); setPasscodeError(false); }}
                className={`w-full rounded-lg border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 transition ${passcodeError ? "border-red-400 focus:border-red-400" : "border-border focus:border-accent"}`}
              />
              {passcodeError && (
                <p className="text-sm text-red-500 -mt-2">Wrong passcode</p>
              )}
              <button
                type="submit"
                className="w-full rounded-lg bg-text-primary text-bg-primary py-3 text-sm font-medium hover:bg-text-primary/85 transition-colors"
              >
                Unlock
              </button>
              <button
                type="button"
                onClick={() => setShowPasscode(false)}
                className="text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                &larr; Back to request access
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="font-serif text-xl text-text-primary mb-2">
              This case study is confidential
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              Request access and I&rsquo;ll send it to you.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
              />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-text-primary text-bg-primary py-3 text-sm font-medium hover:bg-text-primary/85 transition-colors"
              >
                Request Access
              </button>
              <p className="text-center text-sm text-text-muted mt-1">
                or{" "}
                <a
                  href="/ask"
                  className="text-text-secondary hover:text-text-primary transition-colors underline underline-offset-2"
                >
                  Ask Xinyu
                </a>
                {" "}about this project
              </p>
            </form>
            <div className="mt-6 pt-5 border-t border-border">
              <button
                onClick={() => setShowPasscode(true)}
                className="w-full text-center text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                Have a passcode?
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
