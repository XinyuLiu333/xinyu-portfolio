"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AskXinyuPanel from "./AskXinyuPanel";

const DEFAULT_SUGGESTIONS = [
  { text: "What's your design philosophy in a nutshell?" },
  { text: "How do you approach AI product design differently?" },
  { text: "What's the most complex system you've designed end-to-end?" },
  { text: "What are you most excited about right now?" },
];

const PROJECT_SUGGESTIONS: Record<string, { text: string }[]> = {
  "agentic-ai-experience": [
    { text: "Walk me through how you designed the AI interaction model" },
    { text: "What made you choose push-first over a traditional dashboard?" },
    { text: "How do you build trust between users and AI agents?" },
    { text: "What surprised you most during this project?" },
  ],
  "mckinsey-crm-platform": [
    { text: "How did you get 750+ teams to actually adopt this?" },
    { text: "What did you learn from interviewing 20+ Partners?" },
    { text: "What was the hardest part about designing for this culture?" },
    { text: "What does 1300+ feedback points look like in practice?" },
  ],
  "ai-human-relationship": [
    { text: "Tell me about the 'Air' metaphor — where did it come from?" },
    { text: "Why five documents and zero screens?" },
    { text: "What AI patterns did you deliberately reject, and why?" },
    { text: "How does this philosophy show up in your actual product work?" },
  ],
  "ai-proposal-copilot": [
    { text: "How do you keep the human in control with an AI copilot?" },
    { text: "What made you build a working prototype instead of mockups?" },
    { text: "Walk me through the six phases of the workflow" },
    { text: "What would you do differently next time?" },
  ],
  "migraine-management-app": [
    { text: "How did behavior design shape this product?" },
    { text: "How do you design across app, watch, and voice at once?" },
    { text: "80+ concepts in 3 weeks — how does that work?" },
  ],
  "connected-inhaler-management": [
    { text: "What's it like leading a team on an FDA-track product?" },
    { text: "How did you consolidate fragmented apps into one system?" },
    { text: "Tell me about the data visualization challenges" },
  ],
  "partners-healthcare-irb": [
    { text: "91 stakeholders — how do you actually make that work?" },
    { text: "What was the biggest insight from the participatory design?" },
  ],
};

function getSuggestions(pathname: string): { text: string }[] {
  const slugMatch = pathname.match(/^\/projects\/([^/]+)/);
  if (slugMatch) {
    const slug = slugMatch[1];
    return PROJECT_SUGGESTIONS[slug] ?? DEFAULT_SUGGESTIONS;
  }
  return DEFAULT_SUGGESTIONS;
}

export function AskXinyuNavLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
    >
      Ask Xinyu
    </button>
  );
}

export default function AskXinyuToggle() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const suggestions = getSuggestions(pathname);

  return (
    <>
      <AskXinyuNavLink onClick={() => setOpen(true)} />
      <AskXinyuPanel
        open={open}
        onClose={() => setOpen(false)}
        suggestions={suggestions}
      />
    </>
  );
}
