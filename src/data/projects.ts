import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "agentic-ai-experience",
    title: "Agentic AI Experience Strategy",
    company: "McKinsey & Company",
    year: "2024–Present",
    role: "Principal Product Designer",
    description:
      "Defining agentic AI experience strategy for client development workflows — push-first intelligence delivery, AI-drafted outreach, and proactive relationship management at scale.",
    tags: ["AI/ML", "Enterprise UX", "Interaction Design", "Vibe Coding"],
    isGated: true,
    coverColor: "#3a5a4e",
    images: [
      {
        src: "/images/projects/agentic-ai-experience/hero.png",
        alt: "Activate platform — proactive relationship intelligence for client development",
      },
      {
        src: "/images/projects/agentic-ai-experience/activate-hero.png",
        alt: "Activate executive landing page — push-first relationship intelligence positioned for firm leadership",
        caption:
          "Executive pitch: positioning Activate as proactive relationship intelligence — the right contact, the right moment, the right message",
      },
      {
        src: "/images/projects/agentic-ai-experience/activate-capabilities.png",
        alt: "Three capability pillars — intelligence delivered, deep research on-demand, and automated follow-through",
        caption:
          "Three pillars: push-first intelligence delivery, Contact 360 deep research, and cadence-driven automated follow-through",
      },
      {
        src: "/images/projects/agentic-ai-experience/activate-comparison.png",
        alt: "Status quo vs. Activate comparison — reactive to proactive relationship management",
        caption:
          "The delta: transforming fragmented, reactive relationship management into proactive AI-driven intelligence",
      },
      {
        src: "/images/projects/agentic-ai-experience/activate-day.png",
        alt: "A day with Activate — morning briefing, pre-meeting intelligence, and conversational AI use cases",
        caption:
          "A day with Activate: morning briefing over coffee, pre-meeting intel on the go, and ask-anything conversational AI",
      },
      {
        src: "/images/projects/agentic-ai-experience/crm-dashboard.png",
        alt: "Activate multi-channel delivery — desktop dashboard, email briefing, and mobile conversational interface",
        caption:
          "Multi-channel delivery: primary value is push-based across desktop, email, and mobile",
      },
      {
        src: "/images/projects/agentic-ai-experience/crm-nudges.png",
        alt: "AI-powered nudge engine — prioritized outreach recommendations with signal context",
        caption:
          "9-signal nudge engine: stale contacts, job changes, news triggers, sentiment shifts, and engagement patterns driving proactive outreach",
      },
    ],
    content: {
      overview:
        "Defining the agentic AI experience strategy for McKinsey's client development platform — a fundamental shift from passive CRM to proactive relationship intelligence. The system, named Activate, surfaces who to contact, when, and why, with AI-drafted outreach ready to send. Primary value is delivered via push channels (email briefings and notifications) before users ever open an app.",
      problem: [
        "Partners cross-reference 5+ disconnected systems — Salesforce, Excel, PowerPoint, email threads, and personal notes — to piece together a coherent picture of any client relationship. Every insight requires manual effort to surface and manual entry to record.",
        "The firm's existing Salesforce platform delivers a tool-first, pull-based system that's misaligned with how Partners actually work. CRM adoption failure in professional services is widely cited at ~70%. The root cause: these systems are built for management visibility, not Partner productivity.",
        "When a Partner is busy, relationships go cold silently. When a Partner leaves, institutional knowledge walks out the door. There is zero systematic relationship monitoring — no proactive nudges, no automated follow-through, no intelligence delivery.",
      ],
      process: [
        "Mapped the client development workflow end-to-end to identify high-value intervention points. Established six design principles: Zero-Effort Value (every interaction delivers more than it asks), Push Beats Pull (go to the Partner, don't wait for them), Insights Over Data (stories not tables), One Contact One Truth (canonical Contact 360), The System Thinks The Partner Decides (AI recommends, human controls), and Proper Visibility (firm access boundaries).",
        "Developed the interaction framework with three trust-calibrated tiers: AI suggestions (user decides), AI-assisted actions (user confirms), and autonomous actions (user monitors) — each with clear visual language communicating the AI's confidence and role.",
        "Prototyped and tested a 9-signal nudge engine (stale contact, missed meeting, news trigger, job change, sentiment shift, engagement drop, opportunity signal, relationship decay, custom) with configurable thresholds and consolidated card model. Designed multi-channel delivery: morning briefing email, real-time notifications, desktop dashboard, mobile conversational interface, and voice briefings.",
      ],
      solution: [
        "Push-first intelligence delivery: AI-generated morning briefing email weaving nudges, meetings, news, and relationship context into a 2-minute daily read. Pre-drafted outreach ready to review and send. Value delivered before Partners open any app.",
        "Contact 360 and Ask Anything: a 7-section AI dossier combining CRM data with live web intelligence — profile, relationship history, communication timeline, firm connections, news and signals, action items, and talking points. Natural language conversational AI with RAG-powered retrieval across all client data.",
        "Cadence engine for automated follow-through: multi-step relationship sequences with context-aware email drafting, angle adjustment on no-response, and escalation paths. The system follows up so Partners don't have to.",
      ],
      impact: [
        "Established the foundational AI experience strategy and interaction patterns guiding the integration of agentic AI into McKinsey's client development platform, serving 450+ client service teams.",
        "Created a reusable framework for trust-calibrated AI interactions applicable across enterprise product surfaces. Built and validated the Activate prototype — a working platform demonstrating proactive relationship intelligence with dashboard, nudge engine, Contact 360 dossiers, conversational AI, and cadence-driven outreach.",
      ],
    },
  },
  {
    slug: "ai-human-relationship",
    title: "AI-Human Relationship Exploration",
    company: "McKinsey & Company",
    year: "2026",
    role: "Principal Product Designer",
    description:
      "Designing the interaction philosophy and experience model for an enterprise AI platform where consultants compose trusted, firm-grade automations — without writing code.",
    tags: ["AI/ML", "Interaction Design", "Enterprise UX", "Product Strategy"],
    isGated: false,
    coverColor: "#2a3d52",
    images: [
      {
        src: "/images/projects/ai-human-relationship/hero.png",
        alt: "AI-Human Relationship Exploration — interaction philosophy for enterprise AI",
      },
    ],
  },
  {
    slug: "ai-proposal-copilot",
    title: "AI Proposal Copilot",
    company: "McKinsey & Company",
    year: "2026",
    role: "Principal Product Designer",
    description:
      "End-to-end AI-assisted proposal authoring — from RFP intake and storyline generation to repository slide matching, deck assembly, and governed close.",
    tags: ["AI/ML", "Enterprise UX", "Interaction Design", "Vibe Coding"],
    isGated: true,
    coverColor: "#1e3a5f",
    cardImage: {
      src: "/images/projects/ai-proposal-copilot/card-hero.png",
      alt: "AI Proposal Copilot — LOP Builder interface showing AI-assisted proposal authoring",
    },
    images: [
      {
        src: "/images/projects/ai-proposal-copilot/process-journey.svg",
        alt: "Partner journey map — end-to-end proposal lifecycle from RFP intake through storyline, slide sourcing, deck assembly, and governed close",
        caption:
          "Partner journey map: mapping the full proposal lifecycle — from RFP intake and strategy selection through AI-assisted storyline, repository matching, and governed close",
        width: 12781,
        height: 3934,
        unoptimized: true,
      },
      {
        src: "/images/projects/ai-proposal-copilot/solution-1.png",
        alt: "AI Proposal Copilot — storyline and project setup interface",
        caption: "Storyline generation and project setup",
        layout: "side-by-side",
        slot: 3,
        width: 1848,
        height: 1712,
      },
      {
        src: "/images/projects/ai-proposal-copilot/solution-2.png",
        alt: "AI Proposal Copilot — repository slide matching and deck assembly",
        caption: "Repository slide matching and deck assembly",
        layout: "side-by-side",
        slot: 3,
        width: 2214,
        height: 1692,
      },
    ],
    content: {
      overview:
        "Product design and front-end prototype for an AI-powered proposal authoring platform at McKinsey. The tool reimagines how consulting teams build Letters of Proposal (LOPs) — transforming a fragmented, manual process into a guided, AI-assisted workflow. From RFP parsing and project setup through structured storyline generation, intelligent slide matching from the firm's repository, deck assembly with real-time editing, and governed project close with sanitization for reuse. Built as a high-fidelity React prototype to validate the end-to-end experience before engineering investment.",
      problem: [
        "Building a consulting proposal is one of the highest-stakes activities at a firm — yet the process is almost entirely manual. Teams start from scratch or copy-paste from old decks, spending days assembling slides that may already exist somewhere in the firm's repository. There is no systematic way to find, reuse, or remix proven proposal content.",
        "The proposal lifecycle is fragmented across disconnected tools: SharePoint for document storage, PowerPoint for deck building, email for collaboration, and personal knowledge for slide curation. No single surface connects the intake (RFP), the strategy, the narrative structure, the slide library, and the final deliverable.",
        "Institutional knowledge walks out the door with every proposal. Winning decks are rarely sanitized and stored for reuse. Teams in different offices unknowingly rebuild the same slides for similar engagements. The firm's collective proposal intelligence is locked in individual hard drives and email threads.",
      ],
      process: [
        "Mapped the end-to-end proposal lifecycle — from the moment a team receives an RFP through strategy selection, storyline development, slide sourcing, deck assembly, stakeholder review, and project close. Identified six distinct phases, each with unique UX needs and AI intervention opportunities.",
        "Designed an AI copilot interaction model where the assistant is present at every phase but never takes over. The system observes context (RFP content, taxonomy, strategy choice) and proactively surfaces relevant suggestions — storyline structures based on engagement type, repository slides ranked by relevance, and activation resources (advisors, references, competitive intelligence) at the right moment.",
        "Prototyped a progressive disclosure flow: single-column conversational setup (project creation, collaboration, taxonomy) transitions to split-pane workspace (chat + structured content) as complexity increases. Each phase builds on the previous — project setup feeds storyline, storyline drives slide matching, matched slides assemble into a reorderable deck.",
        "Validated the taxonomy and storyline structure against actual PDP (Product Development & Procurement) engagement frameworks — ensuring the AI suggestions map to real proposal patterns consultants recognize and trust.",
      ],
      solution: [
        "Conversational project setup: describe the engagement in natural language, attach an RFP, and the system creates a SharePoint project, parses the scope, and suggests a proposal strategy. Collaborators are invited with scoped access. Taxonomy tagging (industry, capability, geography) enables intelligent matching downstream.",
        "AI-generated storyline: structured narrative outline based on the engagement type and strategy, with expandable sections mapping to the firm's proposal frameworks. Consultants review, refine via inline chat, and approve — turning an unstructured brainstorm into a governed document in minutes instead of days.",
        "Repository-powered slide finder: AI searches the firm's proposal repository and surfaces the most relevant slides for each storyline section, with relevance scoring and source attribution. Multi-select, swap, and refine through conversation. The system learns from selections to improve future matching.",
        "Deck assembly and governed close: selected slides are stitched into a reorderable PPT preview with a filmstrip rail for navigation. After assembly, activation resources surface (senior advisors, named references, competitive intelligence, pricing guides). Project close includes an approval gate for deck sanitization and repository submission — closing the loop so future teams benefit from this proposal.",
      ],
      impact: [
        "High-fidelity prototype validated the end-to-end workflow across six distinct phases — demonstrating feasibility of AI-assisted proposal authoring before engineering investment.",
        "Established the interaction model for AI copilot integration in consulting workflows: conversational where appropriate, structured where precision matters, and always under human control.",
        "Designed the closed-loop knowledge system: every completed proposal can be sanitized and fed back into the repository, compounding the firm's collective proposal intelligence over time.",
      ],
    },
  },
  {
    slug: "mckinsey-crm-platform",
    title: "Enterprise CRM Platform",
    company: "McKinsey & Company",
    year: "2021–Present",
    role: "Principal Product Designer",
    description:
      "UX vision and end-to-end experience for a Salesforce-based enterprise CRM serving 750+ client service teams.",
    tags: ["Enterprise UX", "CRM", "Service Design"],
    isGated: true,
    coverColor: "#0D2554",
    cardImage: {
      src: "/images/projects/mckinsey-crm-platform/hero.png",
      alt: "Enterprise CRM Platform — Activate dashboard overview",
      padded: true,
    },
    images: [
      {
        src: "/images/projects/mckinsey-crm-platform/hero.png",
        alt: "Enterprise CRM Platform",
      },
      {
        src: "/images/projects/mckinsey-crm-platform/ca-future-journey.png",
        alt: "Client Activation journey map — end-to-end workflow from identifying activation targets through relationship strengthening to engagement delivery and reflection",
        caption:
          "Client Activation journey map: validated through in-depth research with 128 Partners and colleagues — mapping actions, pain points, and platform opportunities across the full lifecycle",
        width: 1263,
        height: 1240,
        unoptimized: true,
      },
      {
        src: "/images/projects/mckinsey-crm-platform/event-journey.png",
        alt: "Event journey map — before, during, and after event workflow showing how Activate enables executive identification, tailored outreach, and post-event follow-through",
        caption:
          "Event journey: from executive identification and targeted campaigns to real-time prep and post-event momentum — today vs. tomorrow with Activate",
        width: 1263,
        height: 494,
        unoptimized: true,
      },
      {
        src: "/images/projects/mckinsey-crm-platform/iteration-approach.png",
        alt: "Design approach — 99% of energy on iteration, change management, and role modeling with 100+ research sessions, 1300+ feedback points, 20+ influencers, and 13 impact stories",
        caption:
          "Spending 99% of energy on iteration, change management, and role modeling — 100+ user research sessions, 1300+ unique feedback points gathered and actioned",
      },
      {
        src: "/images/projects/mckinsey-crm-platform/solution-overview.png",
        alt: "CRM platform dashboard — reminders and alerts, contact activity tracking, notes, and content engagement signals in one unified view",
        caption:
          "Platform dashboard: proactive reminders, contact activity signals, meeting action items, and collaborative notes — replacing fragmented spreadsheets and manual tracking",
      },
    ],
    content: {
      overview:
        "UX vision and end-to-end experience design for a Salesforce-based enterprise CRM serving 750+ client service teams at McKinsey & Company. As Principal Product Designer, defined the interaction patterns, information architecture, and design system that shapes how the firm manages client relationships at scale. The work spanned deep stakeholder research (1:1 interviews with 20+ Partners and Senior Partners, plus ongoing feedback from 128 colleagues), journey mapping, adoption barrier analysis, and iterative design across a multi-year engagement.",
      problem: [
        "Client service teams across the firm lacked a unified, intuitive system for managing client relationships, tracking engagement history, and coordinating across teams — leading to fragmented workflows and missed opportunities. As one Partner put it: \"The biggest pain point is getting a single source of truth on client executives and past client works.\"",
        "The existing tools were built for data entry rather than relationship intelligence — forcing consultants to work around the system rather than with it. Partners managed critical client data through ad hoc methods: decade-old spreadsheets, Apple Notes, Microsoft Planner, and personal memory. As one Partner described: \"Everyone has figured out their own methods for individual relationship management, but there is not an easy, readily-available way to understand cross-client collaboration without having to initiate a call or email.\" No standardization or consistency existed across the firm.",
        "The firm's partnership culture created unique adoption challenges beyond typical enterprise software. Pipeline and opportunity tracking conceptually clashed with the firm's anti-sales ethos. Partners resisted tools that felt like surveillance or scorekeeping.",
      ],
      process: [
        "Conducted 1:1 interviews with 20 Partners and Senior Partners to understand how they form, progress, and strengthen client relationships — and what role technology can play. Research revealed that relationship management is a deeply personal endeavor: Partners keep track of college basketball teams because clients are fans, host dinners at home to facilitate introductions, and text clients to reduce friction. The tool had to respect this personal nature.",
        "Mapped the complete Client Activation journey end-to-end: from identifying activation targets and understanding institution intelligence, through relationship strengthening and personalized campaigns, to engagement delivery and post-project reflection. Identified pain points at every stage — manual data gathering from 20+ sources, lack of visibility into pipeline progress, overwhelming internal communications, and missing the right moments to engage clients.",
        "Mapped the Event journey lifecycle — before, during, and after — documenting how the platform transforms executive identification, targeted outreach, real-time prep with Contact 360 intelligence, and post-event follow-through. Each stage contrasted the current manual process against the platform-enabled future state.",
        "Defined two parallel stakeholder lenses: what the tool must deliver for Partners (1:1 relationship building, personalized 2-4-8 client development funnels, institutional collaboration) and what it must deliver for Practices (pipeline management, global client view, cross-cell opportunity analysis). These requirements shaped the information architecture and feature prioritization.",
      ],
      solution: [
        "Relationship-centric dashboard surfacing key client insights, upcoming touchpoints, and team activity — replacing the traditional record-based view with an intelligence-first approach. AI-powered nudges proactively recognize external triggers (executive transitions, news, content engagement) and recommend next best actions with suggested timing and topics.",
        "Contact 360 and Institution 360 profiles consolidating executive background, relationship mapping, content engagement, news triggers, and firm capabilities into a single actionable view — eliminating the need to manually piece together information from scattered sources. Designed to feel like augmented memory, not surveillance: \"I wish I had a simple tool to augment my memory — what personal information did they tell me last time? What did I say I would follow up on?\"",
        "Custom notification and nudging system addressing Partners' universal desire for tiered reminders — sort clients into tiers, set cadence-based check-ins, receive activity-based prompts. Three notification types emerged from research: pre-meeting personal/work context, follow-through reminders for promised actions, and cadence-based outreach prompts.",
        "Campaign management with automated executive list generation, response tracking across waves, and effectiveness analysis — transforming the process from generic mass invites to tailored, always-on engagement sequences. Scalable design system built on Salesforce's Lightning platform, establishing reusable patterns for consistent experience across modules while allowing team-level customization.",
      ],
      impact: [
        "Adopted by 750+ client service teams across McKinsey's global offices — becoming the firm's central platform for client relationship management.",
        "Teams onboarded to the platform saw a 30%+ increase in pipeline activity compared to their pre-platform baseline.",
        "Established product principles and scalable design system that continue to guide the platform's evolution as new capabilities are added.",
      ],
    },
  },
  {
    slug: "migraine-management-app",
    title: "Migraine Management App",
    company: "Teva Pharmaceuticals",
    year: "2019",
    role: "Design Lead",
    duration: "2 designers",
    description: "Multi-channel migraine management system spanning app, watch, and voice UI.",
    tags: ["Product Design", "Mobile Health", "Behavior Design"],
    isGated: false,
    coverColor: "#6b4a6e",
    images: [
      {
        src: "/images/projects/migraine-management-app/hero.png",
        alt: "Six mobile screen concepts for migraine insights — showing data tracking, triggers, and treatment patterns",
        caption:
          "Sample concepts for the Migraine Insights screen — surfacing patterns, triggers, and treatment effectiveness",
      },
      {
        src: "/images/projects/migraine-management-app/user-research.png",
        alt: "Ethnographic research with migraine sufferer Sarah — quote about migraines taking 50% of her life",
        caption:
          "Ethnographic research: understanding the profound impact migraines have on daily life",
      },
      {
        src: "/images/projects/migraine-management-app/journey-mapping.png",
        alt: "Migraine user experience map and interaction model showing the full attack lifecycle",
        caption:
          "Mapping the migraine experience: user journey from ongoing management through attack lifecycle",
      },
      {
        src: "/images/projects/migraine-management-app/behavior-design.png",
        alt: "Behavior design framework with task analysis, tunneling, self-monitoring, and positive reinforcement patterns",
        caption:
          "Behavior design: mapping motivations, system opportunities, and intervention patterns",
      },
      {
        src: "/images/projects/migraine-management-app/service-brainstorming.png",
        alt: "Whiteboard sessions for trigger tracking service design and data-driven migraine insights",
        caption:
          "Service brainstorming: collaborating on trigger identification from device data",
      },
      {
        src: "/images/projects/migraine-management-app/hero.png",
        alt: "Six mobile screen concepts for migraine insights — showing data tracking, triggers, and treatment patterns",
        caption:
          "Final concepts for the Migraine Insights screen — surfacing patterns, triggers, and treatment effectiveness",
      },
    ],
    content: {
      overview:
        "A multi-channel migraine management system spanning app, watch, and voice UI — designed to empower patients who desperately seek control, empowerment, and hope. Every migraine experience is unique, but the impact on life is universal.",
      problem: [
        "Migraine sufferers face frustration (\"I don't know what caused it, therefore I don't know how to stop it\"), hopelessness (\"No matter what I do, it still feels hopeless\"), and isolation (\"People will not understand and think 'you only have a headache'\").",
        "Patients struggle with unpredictable attacks that disrupt professional and personal life, painkiller stress from needing more medication than prescribed, and the emotional toll of a condition others don't take seriously.",
        "Existing tools failed to support the full migraine lifecycle — from ongoing management through pre-attack warnings, during-attack logging, to post-attack pattern analysis and trigger identification.",
      ],
      process: [
        "Conducted early-phase ethnographic research to understand the migraine experience holistically. Mapped the complete user experience across ongoing use, pre-attack, during-attack, and post-attack phases.",
        "Created migraine interaction maps connecting triggers, predictions, medications, treatment efficacy, quality of life tracking, and clinician insights into a cohesive feedback loop system.",
        "Applied behavior design frameworks — analyzing patient knowledge, self-efficacy, motivations, environmental context, and system-level opportunities including smart defaults, triggers to act, and cognitive load reduction.",
        "Ideated over 80 concepts in 3 weeks based on opportunity areas and behavioral interventions. Collaborated with product managers and developers on trigger identification from device data.",
      ],
      solution: [
        "Multi-channel system adapting to context: full app for daily management, watch for discreet during-attack logging, voice UI for hands-free interaction when screen use worsens symptoms.",
        "Migraine Mode — automatically activating Do Not Disturb, dark/low contrast screen, and passive context tracking during attacks to minimize cognitive load while still capturing data.",
        "Smart prompting based on trigger alerts, activity tracking, location, time, and daily routines — reducing the burden of manual logging while building a rich personal migraine profile.",
        "Post-attack recaps synthesizing duration, severity, symptoms, medications, context, and possible trigger events — helping patients and clinicians identify patterns over time.",
      ],
      impact: [
        "Key design guidelines established: making migraine entry effortless, adapting the system based on individual patient context, and supporting learning while experiencing.",
        "Framework for patient-empowering relationships that explicitly communicates value and enables learning by doing rather than front-loaded onboarding.",
      ],
    },
  },
  {
    slug: "connected-inhaler-management",
    title: "Connected Inhaler Management",
    company: "Teva Pharmaceuticals",
    year: "2018–2019",
    role: "Design Lead",
    duration: "18 months, 3 designers",
    description:
      "End-to-end design of a consolidated connected inhaler management system for respiratory patients.",
    tags: ["Product Design", "Mobile Health", "Design Lead"],
    isGated: false,
    coverColor: "#5a5a7a",
    cardImage: {
      src: "/images/projects/connected-inhaler-management/new-hero.png",
      alt: "Connected inhaler management system — consolidated Digihaler app experience",
    },
    images: [
      {
        src: "/images/projects/connected-inhaler-management/hero.png",
        alt: "Connected inhaler app design refinement — four polished mobile screens showing inhaler event tracking and data visualization",
        caption:
          "Design refinement: overview-first approach presenting inhaler usage with easy-to-digest visuals",
      },
      {
        src: "/images/projects/connected-inhaler-management/concept-comparison.png",
        alt: "Concept comparison showing fragmented vs. consolidated inhaler app experience",
        caption:
          "Hassle-free medication management — comparing fragmented notifications with a streamlined consolidated experience",
      },
      {
        src: "/images/projects/connected-inhaler-management/mapping-exercises.png",
        alt: "Research mapping exercises including patient journey maps and needs analysis",
        caption:
          "Mapping exercises: patient journey maps, needs mapping, and opportunity identification",
      },
      {
        src: "/images/projects/connected-inhaler-management/data-viz-refinement.png",
        alt: "Data visualization concept iterations for inhaler usage tracking",
        caption:
          "Two weeks of data viz iterations — refining self-assessment, event tracking, and technique quality views",
      },
      {
        src: "/images/projects/connected-inhaler-management/concept-ideation.png",
        alt: "Concept generation whiteboard sessions — 50+ initial concepts with sticky notes, sketches, and affinity mapping",
        caption:
          "Concept generation: exploring 50+ ideas through collaborative ideation and affinity mapping",
      },
      {
        src: "/images/projects/connected-inhaler-management/mobile-app.png",
        alt: "Connected inhaler mobile app — consolidated medication management interface for patients",
        caption:
          "Consolidated mobile app for real-time inhaler tracking, dose reminders, and technique feedback",
      },
      {
        src: "/images/projects/connected-inhaler-management/companion-dashboard.png",
        alt: "Companion HCP dashboard for healthcare providers to review patient inhaler data",
        caption:
          "Companion dashboard enabling honest exchange about inhaler use between patients and providers",
      },
    ],
    content: {
      overview:
        "Developing a consolidated connected inhaler management system was a win-win for every stakeholder. An app for each connected inhaler created isolated, disjointed views for patients, increasing effort to manage medications. Consolidation meant monitoring triangulated insights from multiple inhalers in one place, getting consolidated notifications, and sharing one report with their doctor.",
      problem: [
        "Many respiratory patients (Asthma & COPD) are inadequately controlled — only 20.1% controlled, 34.8% partially controlled, and 45.1% uncontrolled per GINA guidelines. Poor adherence to preventative therapy and poor inhaler technique are both linked to poor outcomes.",
        "Teva had been developing a connected inhaler ecosystem, but separate apps for each inhaler created fragmented experiences. Patients were jumping between apps, getting duplicated notifications, and struggling to correlate data across devices.",
        "At the heart, patients wanted to feel normal, in control, and free from fear of unexpected exacerbations. As one patient said: \"I don't want to feel afraid of something bad happening or going to the ER.\"",
      ],
      process: [
        "Conducted multiple rounds of ethnographic research and contextual inquiry to develop asthma patient Jobs-to-be-Done. Mapped patient needs, journeys, and opportunity areas across the full asthma experience.",
        "Fully explored the problem space and ideated 50+ initial concepts, refined and narrowed to the most robust ones. Brought 5 concepts into field testing with asthma sufferers to validate directions.",
        "Two weeks of intensive data visualization iterations covering self-assessment views, inhaler event tracking, weekly/monthly views, technique quality indicators, and environmental trigger integration.",
        "Mapped a complete onboarding service blueprint across system, app, and user layers — tracking the emotional journey from skeptical to accomplished.",
      ],
      solution: [
        "Consolidated home dashboard monitoring triangulated insights from multiple Digihalers in one place, with environmental notifications and dose reminders surfaced at the right time.",
        "Applied \"Overview First, Zoom and Filter, then Details on Demand\" — presenting high-level overview of inhaler usage with easy-to-digest visuals showing taken doses, missed doses, and technique quality.",
        "Companion HCP dashboard enabling honest, forthright exchange about inhaler use, frequency, and technique between patients and providers.",
        "Contextual onboarding bringing teachable moments over time rather than all at once — helping users learn while in the moment with the principle of \"give before take.\"",
      ],
      impact: [
        "The app and companion dashboard went into development. The connected inhalers went through FDA approval.",
        "Launched in several early experience programs in early 2020, driven by strong interest from healthcare providers who saw the system's potential.",
      ],
    },
  },
  {
    slug: "partners-healthcare-irb",
    title: "Partners Healthcare IRB",
    company: "GoInvo for Partners Healthcare",
    year: "2015",
    role: "Designer",
    duration: "20 months (2–5 designers and engineers)",
    description:
      "Redesigning the electronic IRB portal for six major research institutions — validated with 91 stakeholders.",
    tags: ["UX Design", "Web Application", "Health IT"],
    isGated: false,
    coverColor: "#3d6b8e",
    cardImage: {
      src: "/images/projects/partners-healthcare-irb/card-hero.png",
      alt: "Partners Healthcare IRB — Insight portal effort certification redesign",
    },
    images: [
      {
        src: "/images/projects/partners-healthcare-irb/solution-review.png",
        alt: "Insight portal — inline review and commenting on protocol submissions",
        caption:
          "Redesigned review workflow with inline commenting, contextual notes, and clear protocol status",
        slot: 3,
      },
      {
        src: "/images/projects/partners-healthcare-irb/solution-submission.png",
        alt: "Insight portal — staff management and submission checklist",
        caption:
          "Streamlined submission flow with guided checklist, staff assignment, and clear progress tracking",
        slot: 3,
      },
    ],
    content: {
      overview:
        "Redesign of Insight, the electronic IRB (Institutional Review Board) portal used by Partners Healthcare's six major research institutions. Joined the design team mid-process, working with Jennifer Patel at Involution Studios. The portal is the central point for submitting and reviewing medical research protocols across the largest provider network in Massachusetts.",
      problem: [
        'The IRB portal suffered from serious usability issues. Submitters had difficulty parsing complex language in lengthy applications — it felt like "decoding a puzzle." Couldn\'t easily find their protocols among all department submissions, had to search by system ID number.',
        "Protocol information was fragmented across multiple layers and locations. Reviewers spent significant time hunting for specific pieces. No side-by-side version comparison — reviewers opened previous versions in new windows to compare line by line.",
        "The iterative back-and-forth between submission and review was opaque. Submitters couldn't see where their protocol was held up. Reviewer comments were enumerated in a separate text area, referencing scattered form locations. These usability issues delayed research by weeks.",
      ],
      process: [
        "Conducted in-depth, in-person interviews with 65 individuals at 6 research facilities — reviewers, research team members, administrators, principal investigators, and Fellows.",
        "Investigated the end-to-end IRB process to understand how people thought about their work and the tools they used. Identified key pain points: confusing language, poor protocol findability, fragmented information, opaque review status, and unclear communication.",
        "Returned to the same groups across multiple rounds, occasionally pulling in fresh voices — spoke with 91 individuals overall in a participatory design approach.",
      ],
      solution: [
        "Protocol list redesigned: grouped by study, sorted by most recently updated, color-coded status highlighting protocols needing attention. Older protocols fall to the bottom.",
        "Open, navigable forms with concise, clear language following typographic best practices. Contextual help throughout. Visible progress tracking as forms are completed.",
        "Transparent review process — clear step/status visibility from list to detail view. Play-by-play history showing who had the protocol and when.",
        "Contextual communication — reviewers comment directly where changes are needed (not in a separate letter). Comments marked in protocol navigation for easy scanning.",
        "Versioning with side-by-side comparison. Changes and comments clearly marked in navigation. Established a foundational design system for the larger Insight application.",
      ],
      impact: [
        "Validated with 91 individuals — analysts, admins, program chairs, and principal investigators all approved the designs.",
        "Insight 4.0 rolled out to all Partners research facilities.",
        "Participants felt heard and had a responsible part in the design through the participatory approach.",
      ],
    },
  },
  {
    slug: "from-bathroom-to-healthroom",
    title: "From Bathroom to Healthroom",
    company: "GoInvo",
    year: "2015",
    role: "Designer",
    duration: "4 weeks",
    description:
      "Interactive website and ebook reimagining the future of personal health — from episodic care to continuous wellness.",
    tags: ["UX Design", "Infographics", "Motion Design"],
    isGated: false,
    coverColor: "#4a7c6f",
    images: [
      {
        src: "/images/projects/from-bathroom-to-healthroom/hero.jpg",
        alt: "From Bathroom to Healthroom — interactive website hero",
        caption: "Interactive long-form website exploring the future of personal health",
      },
      {
        src: "/images/projects/from-bathroom-to-healthroom/timeline.jpg",
        alt: "Health history timeline from 10,000 BC to the future Healthroom",
        caption: "Visual timeline tracing health's evolution from 10,000 BC to the projected Healthroom future",
      },
      {
        src: "/images/projects/from-bathroom-to-healthroom/sensors.jpg",
        alt: "Sensor technology infographic showing wearable to ambient health monitoring",
        caption: "Mapping the sensor revolution — from wearable devices to invisible ambient monitoring",
        width: 7764,
        height: 7630,
        unoptimized: true,
      },
      {
        src: "/images/projects/from-bathroom-to-healthroom/healthroom-vision.jpg",
        alt: "The Healthroom concept — bathroom transformed into health monitoring space",
        caption: "The Healthroom vision — where machine learning and design make health monitoring continuous",
      },
    ],
    content: {
      overview:
        'An interactive website and ebook design for the article "From Bathroom to Healthroom," creating a new experience of storytelling and improving user engagement. Integrates UX design, infographics design, motion design, videography, and digital book design. Collaborated with author Juhan Sonin and editor Emily Twaddell at GoInvo (Involution Studios).',
      problem: [
        "Health, as an experience and idea, is undergoing an epic shift. For millennia, humans have treated health as the rare spike that requires intervention. For the average person without chronic illness, health is conceived of and managed as an exception.",
        "Yet health is the single most important factor for any human. The potential impact of a health setback reaches into all areas of life — work, finances, love, hobbies — and affects the community.",
        "The article explores the transition from episodic medical care to continuous health monitoring, but needed a compelling, immersive digital format to engage readers beyond traditional text.",
      ],
      process: [
        "Integrated UX design, infographics design, motion design, videography, and digital book design into one cohesive interactive experience.",
        "Worked with engineers to manage prototypes and improve how the interactive website functions across devices.",
        'Designed a visual timeline spanning from 10,000 BC to a projected 2019 "Healthroom" future, telling the story of health\'s evolution through interactive data visualizations.',
      ],
      solution: [
        'Interactive website with rich visual storytelling — a health history timeline from 10,000 BC to the future "healthroom," incorporating data visualizations like hGraph (an open-source visual representation of patient health status).',
        "Explored the sensor technology revolution — from wearable devices to invisible ambient health monitoring — and visualized the path from today's \"non-forgettable\" devices to seamless, background health data capture.",
        'Presented the vision of the bathroom transforming into a "healthroom" — where machine learning, big data, and design converge to make health monitoring continuous and invisible.',
      ],
      impact: [
        "Published and live at GoInvo's features showcase.",
        "Demonstrated a new model for long-form health storytelling that integrates multiple design disciplines into one immersive experience.",
      ],
      liveLinks: [
        {
          label: "View Interactive Website",
          url: "http://www.goinvo.com/features/from-bathroom-to-healthroom/",
        },
      ],
    },
  },
  {
    slug: "ebola-outbreak-infographics",
    title: "Ebola Outbreak Infographics",
    company: "GoInvo",
    year: "2014",
    role: "Designer",
    description:
      "Visual guide and PPE care guideline created during the 2014 Ebola outbreak to educate the public and support healthcare workers.",
    tags: ["Data Visualization", "Infographics", "Healthcare"],
    isGated: false,
    coverColor: "#c45c3e",
    images: [
      {
        src: "/images/projects/ebola-outbreak-infographics/hero.png",
        alt: "Ebola Outbreak Infographics — visual guide and PPE care guideline",
      },
    ],
    content: {
      overview:
        "Two related visual resources created during the 2014 Ebola outbreak at GoInvo to address the information crisis and support healthcare workers dealing with complex PPE protocols.",
      problem: [
        "During the 2014 Ebola outbreak, confusion and conflicting information from news outlets created widespread public anxiety and misinformation.",
        "Healthcare workers needed clear, visual guidance on Personal Protective Equipment (PPE) protocols — where improper use could lead to heat-related illness or infection.",
        "The West Africa outbreak (Guinea, Liberia, Sierra Leone, 2013–2016) resulted in over 28,000 cases and 11,000 deaths, with a weighted case fatality rate of approximately 65%.",
      ],
      process: [
        "Researched Ebola transmission, symptoms, epidemiology, and PPE protocols to build a comprehensive knowledge base.",
        "Designed visual systems to distill complex medical information into accessible, scannable formats for two distinct audiences: the general public and healthcare workers.",
      ],
      solution: [
        "Understanding Ebola: A Visual Guide — a comprehensive visual guide released in October 2014 educating the public about the epidemic, covering transmission, symptoms, progression, and prevention.",
        "Ebola Care Guideline — an illustrated PPE process guide for healthcare workers. Addressed a critical insight: recommended PPE (waterproof apron, surgical gown, surgical cap, respirator, face shield, boots, two layers of gloves) significantly reduces the body's heat dissipation, increasing risk for heat-related illnesses. Provided clear, illustrated step-by-step donning and doffing procedures.",
      ],
      impact: [
        "Published resources used for public education during the outbreak.",
        "PDF guideline distributed to healthcare organizations.",
        'Featured on RISD\'s "Our RISD" showcase.',
      ],
      liveLinks: [
        { label: "Understanding Ebola", url: "http://www.goinvo.com/features/ebola/" },
        {
          label: "Ebola Care Guideline",
          url: "https://www.goinvo.com/features/ebola-care-guideline/",
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPublicProjects(): Project[] {
  return projects.filter((p) => !p.isGated);
}
