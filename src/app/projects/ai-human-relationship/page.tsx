import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "@/components/ImageLightbox";
import { bustImageCache } from "@/lib/image-cache-bust";

const project = getProjectBySlug("ai-human-relationship")!;

export const metadata: Metadata = {
  title: `${project.title} — Xinyu Liu`,
  description: project.description,
};

function SectionDivider() {
  return <hr className="my-20 border-t border-border" />;
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-text-muted/30 pl-6">
      <p className="font-serif text-xl sm:text-2xl text-text-primary leading-relaxed italic">
        {children}
      </p>
    </blockquote>
  );
}

function Facet({
  name,
  essence,
  scenario,
}: {
  name: string;
  essence: string;
  scenario: string;
}) {
  return (
    <div className="mb-10 last:mb-0">
      <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
        {name}
      </span>
      <h4 className="font-serif text-lg text-text-primary mt-1 mb-2">
        {essence}
      </h4>
      <p className="text-text-secondary text-sm leading-relaxed">{scenario}</p>
    </div>
  );
}

function Principle({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-text-muted">{number}</span>
        <h4 className="font-serif text-xl text-text-primary">{title}</h4>
      </div>
      <p className="text-text-secondary leading-relaxed mt-2 ml-8">
        {description}
      </p>
    </div>
  );
}

function Layer({
  name,
  where,
  userSees,
  userDoes,
}: {
  name: string;
  where: string;
  userSees: string;
  userDoes: string;
}) {
  return (
    <div className="mb-12 last:mb-0">
      <h4 className="font-serif text-xl text-text-primary mb-4">{name}</h4>
      <div className="flex flex-col gap-3">
        <div>
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
            Where it lives
          </span>
          <p className="text-text-secondary leading-relaxed mt-1">{where}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
            What you see
          </span>
          <p className="text-text-secondary leading-relaxed mt-1">{userSees}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
            What you do
          </span>
          <p className="text-text-secondary leading-relaxed mt-1">{userDoes}</p>
        </div>
      </div>
    </div>
  );
}

function AntiPattern({
  pattern,
  rejection,
}: {
  pattern: string;
  rejection: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-6 py-4 border-b border-border last:border-0">
      <p className="text-text-primary text-sm font-medium">{pattern}</p>
      <p className="text-text-secondary text-sm leading-relaxed">
        {rejection}
      </p>
    </div>
  );
}

export default function AIHumanEssayPage() {
  return (
    <article>
      {/* Hero — replicates CaseStudyHero layout but without image */}
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#project-ai-human-relationship"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-12"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-text-muted border border-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-text-primary leading-tight mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
            <span>{project.company}</span>
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>
        </div>
        {project.images[0] && (
          <figure className="mx-auto max-w-4xl mt-12">
            <ImageLightbox
              src={bustImageCache(project.images[0].src)}
              alt={project.images[0].alt}
              width={project.images[0].width}
              height={project.images[0].height}
              unoptimized={project.images[0].unoptimized}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: project.coverColor }}
              >
                <Image
                  src={bustImageCache(project.images[0].src)}
                  alt={project.images[0].alt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </ImageLightbox>
          </figure>
        )}
      </section>

      <div className="mx-auto max-w-3xl px-6 py-8">
        {/* ── Movement 1: The Observation ── */}
        <FadeIn>
          <section className="mb-8">
            <p className="text-text-secondary leading-relaxed text-lg">
              This is not a case study about a shipped product. It is a record
              of thinking — an exploration of how AI should relate to humans in
              professional tools, conducted before any screens were drawn or any
              code was written.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              The question that started everything: why do powerful AI platforms
              — Cursor, Claude, Canvas — feel unusable to most professionals?
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h2 className="font-serif text-2xl text-text-primary mb-6">
              Four barriers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  label: "Visible complexity",
                  desc: "Settings, model pickers, temperature sliders, system prompts. The surface screams \"this is for engineers.\"",
                },
                {
                  label: "No repeatability",
                  desc: "Every session starts from zero. There is no way to turn a good interaction into a persistent, improvable process.",
                },
                {
                  label: "No trust framework",
                  desc: "No concept of \"client-safe\" vs \"internal.\" No approval gates. No audit trail. You cannot delegate to it because you cannot verify what it did.",
                },
                {
                  label: "The blank prompt box",
                  desc: "Users who don't live in prompts freeze or write poor prompts and get poor results. The entry point assumes expertise the user does not have.",
                },
              ].map((barrier) => (
                <div key={barrier.label} className="p-5 border border-border rounded-lg">
                  <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                    {barrier.label}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {barrier.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-text-secondary leading-relaxed mt-6">
              If it looks complex, no one opens it. If sessions don&apos;t persist,
              no one returns. If trust is missing, no one uses it for real work.
              The blank prompt box is the least urgent because solving the first
              three makes it unnecessary.
            </p>
          </section>
        </FadeIn>

        <PullQuote>
          The core challenge was not building another AI tool — it was designing
          an AI system that dissolves into the tools people already use.
        </PullQuote>

        <SectionDivider />

        {/* ── Movement 2: The Metaphor — Air ── */}
        <FadeIn>
          <section className="mb-8">
            <h2 className="font-serif text-3xl text-text-primary mb-6">
              Air
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              The ideal AI experience is like air. You do not see air. You do
              not think about air. You cannot function without it. It is
              everywhere. It carries what you need — sound, warmth, scent —
              without insisting on being noticed.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Most AI products today are the opposite. They are destinations you
              visit, interfaces you learn, tools you configure. They insist on
              being seen. Air dissolves into the world. The best AI should too.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-8">
              Presence — How the system exists
            </h3>
            <Facet
              name="Invisible"
              essence="The system works without being seen."
              scenario="A follow-up email appears in your Outlook drafts 20 minutes before a gap in your calendar. The system scored the contact as stale, drafted the email in your voice, and placed it where you'd naturally find it. You think you just wrote an email."
            />
            <Facet
              name="Essential"
              essence="You cannot function without it, but you don't think of it as a feature."
              scenario="A Partner opens their week. The five meetings that need prep already have briefs. The three stale contacts already have draft emails. None of this was requested. All of it was needed. Turn it off for a week and outcomes they took for granted stop happening."
            />
            <Facet
              name="Omnipresent"
              essence="Everywhere, not localized to one place or device."
              scenario="Slack shows a sidebar card: 'Want me to prep a brief for this?' Driving to a meeting, a text arrives with three key points to raise. A browser extension highlights a Financial Times article relevant to four contacts. No single surface is primary."
            />
            <Facet
              name="Variable but never absent"
              essence="Wind, stillness, breeze, storm — but it never disappears."
              scenario="Quiet morning: a gentle Monday digest. Heavy meeting day: briefs for every meeting, talking points 30 minutes before each. Crisis: every relevant signal surfaced immediately across all channels. First day with no history: 'You have 3 meetings today. Want prep?' Thinner, but never off."
            />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-8">
              Behavior — How the system acts
            </h3>
            <Facet
              name="Responsive"
              essence="Like wind at your back — the system accelerates you toward the right outcome."
              scenario="Two hours before a meeting, intensity increases: a brief appears, talking points surface, recent signals are summarized. After the meeting, a follow-up is proposed on the three action items discussed. A CEO job change doesn't wait for the weekly digest — it surfaces immediately."
            />
            <Facet
              name="Breathable"
              essence="You take in exactly what you need, when you need it."
              scenario="Before a board meeting: a 5-page brief with stakeholder maps and risk flags. Before a quick sync: one line — 'Maria updated the project plan yesterday.' On mobile: a 90-second audio briefing of the three things you need to know."
            />
            <Facet
              name="Composable"
              essence="Air carries sound, scent, moisture without insisting on being pure."
              scenario="Open an email from a contact. The sidebar shows: their company just announced earnings, there's a meeting Thursday, the last touchpoint was 45 days ago. Not three features — one moment of context, composed from separate data streams."
            />
            <Facet
              name="Pressurized"
              essence="You don't feel the pressure until altitude changes."
              scenario="Normal week: the system hums along, matching your rhythm. New engagement starts: meeting frequency spikes, briefs appear more often, compliance notes appear. International travel: mobile-first mode activates, briefs become audio, SMS becomes the primary surface."
            />
            <Facet
              name="Self-healing"
              essence="Disturb air and it fills the gap back in."
              scenario="A scheduled digest fails: the system retries silently, then gracefully degrades — 'Your digest is partial, calendar meetings are missing.' A teammate leaves: their shared workflows keep running, proposed to remaining members for ownership. No orphaned automations."
            />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-8">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-8">
              Character — What the system is not
            </h3>
            <Facet
              name="Unowned"
              essence="A medium, not a product."
              scenario="If someone asks 'what tool helped you with that?', the answer should be 'Outlook' or 'Slack,' not the name of the AI. The intelligence works through every tool. Skills are shared infrastructure. MCP lets other agents access the same capabilities."
            />
            <Facet
              name="Life-sustaining without being alive"
              essence="It serves without having an agenda."
              scenario="No 'Hi! I'm excited to help!' No opinions on what you should do. No 'I saved you 2 hours!' The system surfaces that a contact is stale. It does not say 'you really should reach out.' It shows the draft and lets you dismiss. No guilt. No counters."
            />
          </section>
        </FadeIn>

        <PullQuote>
          The system is never a destination you visit. It is the medium you move
          through.
        </PullQuote>

        <SectionDivider />

        {/* ── Movement 3: Seven Principles ── */}
        <FadeIn>
          <section className="mb-8">
            <h2 className="font-serif text-3xl text-text-primary mb-4">
              Seven principles
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10">
              These are the rules every surface must obey — the constitution of
              the experience. Not screens. Not flows. The constraints the screens
              and flows must live within.
            </p>

            <Principle
              number={1}
              title="Invisible medium, not fixed interface"
              description="The platform does not impose a single interaction mode. It does not even insist on being visible. When it surfaces, it matches the density of the moment — a lightweight card before a meeting, a richer surface for workflow building, stripped essentials on mobile voice. Same system, different posture."
            />
            <Principle
              number={2}
              title="Observe first, propose second, never impose"
              description="Passive observation for low-stakes patterns: the system notices meeting cadence, email rhythms, Slack threads, then surfaces lightweight proposals. Active co-design for high-stakes workflows: walk through the process once, capture the pattern, replay and improve. Dismissed proposals fade gracefully. Silence is a signal the system respects."
            />
            <Principle
              number={3}
              title="Three doors to one room"
              description="Describe an outcome in natural language. Remix something from the catalog. Teach by doing the task once while the system watches. All three produce the same underlying governed object — same versioning, same sharing, same audit trail. The user never needs to know which door they came through."
            />
            <Principle
              number={4}
              title="Everything is a draft until you say otherwise"
              description="Every output starts as a preview. For tools that earn trust, the user can promote to auto-run — always deliberate, always reversible. Sensitivity scaling: client-facing contexts default to stricter preview gates. The lifecycle is not binary but a spectrum of trust delegation."
            />
            <Principle
              number={5}
              title="Honest about uncertainty"
              description="When confidence is low, the system says so. 'I'm not sure about this one — here's my best guess and what I'd need to be more confident.' In client-adjacent contexts, the bias is always to ask rather than guess. One clarifying question beats a plausible-looking wrong answer that reaches a client."
            />
            <Principle
              number={6}
              title="You can always start over"
              description="Rewind any run to a prior state. Fork any shared tool into a personal variant. Retire any automation without cleanup ceremonies. Escape to manual at any time — 'just do it myself this once' is always one action away and never feels like a step backward."
            />
            <Principle
              number={7}
              title="Multiplayer is opt-in, scoped, and reversible"
              description="You choose what to share, who sees it, and can retract at any time without breaking others' copies. The system can propose sharing — '3 people on your team do something similar' — but never shares on your behalf. Team-level observation requires team-level consent."
            />
          </section>
        </FadeIn>

        <FadeIn>
          <p className="text-text-secondary leading-relaxed mb-4 italic">
            The flow: dissolve into where you already work, watch before you act,
            give multiple natural ways to create, never commit without approval,
            tell you when you&apos;re unsure, let you escape or undo at any point, and
            extend all of this to teams only with permission.
          </p>
        </FadeIn>

        <SectionDivider />

        {/* ── Movement 4: Three Layers ── */}
        <FadeIn>
          <section className="mb-8">
            <h2 className="font-serif text-3xl text-text-primary mb-4">
              What it feels like
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10">
              The philosophy manifests as three concentric layers — each serving
              a different moment in the user&apos;s day. There is no single app.
              There are three surfaces that reinforce each other in a continuous
              loop.
            </p>

            <Layer
              name="Contextual Cards"
              where="Slack, Outlook sidebar, calendar notifications, mobile push, lightweight browser widget."
              userSees="Cards tied to your context: 'Board meeting in 90 minutes — prep brief ready for review.' 'Weekly digest draft — 3 items need your eye.' 'Your client email was sent.' Most users interact primarily here. Many will never open an app."
              userDoes="Act on the card without leaving your current tool. Approve, tweak, dismiss, or tap through to the intent surface. Cards carry actionable previews — you see and approve the brief right in the card, not just a notification that one exists."
            />
            <Layer
              name="Intent Surface"
              where="The web app, deep-linked from cards, or a 'new' action in any surface."
              userSees="A structured entry point organized by outcome — Prepare, Communicate, Synthesize, Automate, Monitor — with contextual suggestions pre-filled from your calendar and recent threads. 'You have 4 client meetings this week — prep all?' replaces a blank prompt box."
              userDoes="Select an outcome. Answer 2–3 clarifying questions. The system assembles and previews the result. You adjust and approve, or iterate via inline conversation. Create tools through describe, remix, or teach — all producing the same governed object."
            />
            <Layer
              name="My Tools"
              where="The web app, accessible from the intent surface or directly."
              userSees="A personal collection of tools that work — each showing name, last run, next scheduled run, health indicator, sensitivity label, and sharing scope. New users start with role-based recommended starters. The dashboard is never empty and never overwhelming."
              userDoes="Run, tweak, pause, retire, fork, or share any tool. View run history with full audit trail and rewind. Every useful interaction can be saved as a tool with one action. Value compounds over time — you never start from zero."
            />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-8">
            <h3 className="font-serif text-lg text-text-primary mb-3">
              Where conversation fits
            </h3>
            <p className="text-text-secondary leading-relaxed">
              There is no standalone &ldquo;chat&rdquo; screen. Conversation is
              embedded: inside a card (&ldquo;this brief looks off — add the Q3
              financials?&rdquo;), inside an intent flow (clarification step),
              inside a tool run (refinement), inside tool editing (natural
              language config). The mental model is commenting on a Google Doc,
              not opening a chat app. The user is always reacting to, refining,
              or extending something already shown to them.
            </p>
          </section>
        </FadeIn>

        <PullQuote>
          No tutorials. No training sessions. No &ldquo;getting started&rdquo;
          guide. The product teaches itself through contextual cards and
          structured flows.
        </PullQuote>

        <SectionDivider />

        {/* ── Movement 5: What This Rejects ── */}
        <FadeIn>
          <section className="mb-16">
            <h2 className="font-serif text-3xl text-text-primary mb-4">
              What this thinking says no to
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              A philosophy is defined as much by what it rejects as by what it
              embraces. These are the anti-patterns that constrain every design
              decision.
            </p>

            <div className="border-t border-border">
              <AntiPattern
                pattern={`"Configure before you use"`}
                rejection="Observation is the onboarding. Configuration is optional and progressive."
              />
              <AntiPattern
                pattern={`"Open the app to get started"`}
                rejection="The best AI is invisible — it works inside the tools you already have open."
              />
              <AntiPattern
                pattern={`"Pick a mode: chat or canvas or config"`}
                rejection="The system adapts its surface to context. Modes are the system's job, not the user's."
              />
              <AntiPattern
                pattern={`"Here is your workflow builder"`}
                rejection="Tools are created through intent — describe, remix, teach — not through a builder UI."
              />
              <AntiPattern
                pattern={`"Done automatically for you"`}
                rejection="Nothing executes without preview and confirmation until trust is explicitly delegated."
              />
              <AntiPattern
                pattern={`"Are you sure you want to dismiss this?"`}
                rejection="Silence is a signal. Dismissed proposals fade gracefully. No guilt."
              />
              <AntiPattern
                pattern={`"Share your workspace with the team"`}
                rejection="Sharing is per-tool, scoped, and reversible — not all-or-nothing."
              />
              <AntiPattern
                pattern={`"Chat with the AI" as the home screen`}
                rejection="Conversation is embedded in context, not a destination. No blank prompt box."
              />
              <AntiPattern
                pattern={`"I'm confident" (when it's not)`}
                rejection="Calibrated honesty over polished plausibility, always."
              />
            </div>
          </section>
        </FadeIn>

        {/* ── Closing ── */}
        <FadeIn>
          <section className="mb-8 pb-8 border-b border-border">
            <p className="text-text-secondary leading-relaxed italic">
              This thinking was developed as a design foundation for an
              enterprise AI automation platform — defining the interaction
              philosophy, principles, experience model, and intent system before
              implementation. Five documents, zero screens. The philosophy is
              universal; the application is grounded.
            </p>
          </section>
        </FadeIn>

        {/* Navigation */}
        <nav className="mt-8 flex items-center justify-center">
          <Link
            href="/#project-ai-human-relationship"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
        </nav>
      </div>
    </article>
  );
}
