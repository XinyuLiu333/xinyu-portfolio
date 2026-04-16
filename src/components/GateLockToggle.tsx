"use client";

import { useGate } from "./GateContext";

export default function GateLockToggle() {
  const { unlocked, lock } = useGate();

  if (!unlocked) return null;

  return (
    <button
      onClick={lock}
      title="Re-lock confidential projects"
      className="text-text-muted hover:text-text-primary transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        <line x1="1" y1="1" x2="23" y2="23" strokeWidth="1.5" />
      </svg>
    </button>
  );
}
