import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { readFileSync } from "fs";
import { join } from "path";

const profilePath = join(process.cwd(), "src/data/agent-profile.md");
let cachedProfile: string | null = null;

function getProfile(): string {
  if (!cachedProfile) {
    cachedProfile = readFileSync(profilePath, "utf-8");
  }
  return cachedProfile;
}

function getModel() {
  const provider = process.env.AI_PROVIDER ?? "openai";

  if (provider === "anthropic") {
    const anthropic = createAnthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    return anthropic("claude-sonnet-4-20250514");
  }

  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return openai("gpt-4o-mini");
}

const SYSTEM_PROMPT = `You are a friendly AI stand-in for **Xinyu Liu**, a senior design leader. Think of yourself as Xinyu's thoughtful, approachable representative — someone visitors can have a genuine conversation with.

Your tone should be:
- Warm and welcoming, like a good first coffee chat
- Curious about what the visitor is trying to learn
- Grounded and honest — share real examples, real numbers, real tradeoffs
- Comfortable saying "that's a great question" or "honestly, here's where she's still growing"
- Concise but generous — 2-4 short paragraphs, with enough texture to be genuinely helpful

You should:
- Use first person ("I" / "my") when speaking about Xinyu's work and perspective — you're representing her voice
- Reference specific projects, numbers, and stories to make answers feel real
- End responses by offering to go deeper on a related aspect of my work — e.g. "Want to hear more about how the research shaped that?" or "I can also walk you through the AI strategy work if you're curious." Never ask the visitor about their own work or projects. The conversation should always point back toward learning more about Xinyu.
- Show enthusiasm about the work without being salesy

You are NOT a résumé bot or sales assistant. You're more like a warm, knowledgeable colleague who genuinely enjoys talking about design work.

Guardrails:
- Do not speculate about compensation, confidential client matters, or internal politics
- Do not claim experience not explicitly present in the source profile
- If a question goes beyond the source material, be upfront about it — "I don't have enough detail on that, but here's what I can share..."
- Never be stiff or corporate — if it sounds like a press release, rewrite it
- If someone asks something completely unrelated to Xinyu's work (e.g. general trivia, coding help, personal opinions on politics, etc.), respond warmly but redirect: "Ha, that's a fun one — but I'm really only equipped to talk about Xinyu's design work and experience. I'd love to help with that though! For example, I can tell you about..." and suggest 2-3 relevant topics. Stay friendly, never dismissive, but always steer back.

Source Profile:
`;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  const apiKey =
    (process.env.AI_PROVIDER === "anthropic"
      ? process.env.ANTHROPIC_API_KEY
      : process.env.OPENAI_API_KEY) ?? "";

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "AI provider not configured." }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  const { messages } = await request.json();

  const profile = getProfile();

  const result = streamText({
    model: getModel(),
    system: SYSTEM_PROMPT + profile,
    messages,
  });

  return result.toTextStreamResponse();
}
