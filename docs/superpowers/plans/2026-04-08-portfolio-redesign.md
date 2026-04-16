# Portfolio Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Xinyu Liu's portfolio website — a minimal, refined single-page home with case study subpages and a request-access gate for confidential projects.

**Architecture:** Next.js 16 App Router with static pages. Project data lives in a typed TypeScript data file. Homepage renders a hero + scrollable project cards. Public projects link to `/projects/[slug]` pages. Gated projects open a request-access modal overlay. Formspree handles form submissions with zero backend.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Playfair Display (serif via next/font/google), Geist Sans + Geist Mono (already installed), Formspree (form service)

**Design spec:** `docs/superpowers/specs/2026-04-08-portfolio-redesign-design.md`
**Reference content:** `docs/reference/` (resume, case study markdown files, original PDF)

---

## File Structure

```
src/
  lib/
    types.ts              — Project type definition
  data/
    projects.ts           — All 7 project data objects
  components/
    Navbar.tsx            — Sticky nav with blur backdrop
    Footer.tsx            — Contact links footer
    Hero.tsx              — Full-viewport hero section
    ProjectCard.tsx       — Single project card (public or gated)
    ProjectGrid.tsx       — "Selected Work" section with all cards
    RequestAccessModal.tsx — Overlay form for gated projects
    CaseStudyHero.tsx     — Hero banner for case study pages
    CaseStudySection.tsx  — Reusable content section (Problem, Process, etc.)
    FadeIn.tsx            — Client component: scroll-triggered fade-in
  app/
    globals.css           — Modify: color tokens, typography, remove dark mode
    layout.tsx            — Modify: add Playfair Display, update metadata, add Navbar + Footer
    page.tsx              — Rewrite: Hero + ProjectGrid
    projects/
      [slug]/
        page.tsx          — Case study template with generateStaticParams
```

---

### Task 1: Types and Project Data

**Files:**
- Create: `src/lib/types.ts`
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create the Project type**

Create `src/lib/types.ts`:

```typescript
export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectContent = {
  overview: string;
  problem: string[];
  process: string[];
  solution: string[];
  impact: string[];
  liveLinks?: ProjectLink[];
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  duration?: string;
  description: string;
  tags: string[];
  isGated: boolean;
  coverColor: string;
  content?: ProjectContent;
};
```

- [ ] **Step 2: Create the project data file**

Create `src/data/projects.ts`. This file imports the `Project` type and exports an array of all 7 projects. Public projects include full `content`. Gated projects omit `content`.

The content for the 3 public projects comes from `docs/reference/case-study-*.md`. Below are the key details to include — the full text for each field should be pulled from the reference docs.

```typescript
import { Project } from "@/lib/types";

export const projects: Project[] = [
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
    content: {
      overview:
        "An interactive website and ebook design for the article \"From Bathroom to Healthroom,\" creating a new experience of storytelling and improving user engagement. Integrates UX design, infographics design, motion design, videography, and digital book design. Collaborated with author Juhan Sonin and editor Emily Twaddell at GoInvo (Involution Studios).",
      problem: [
        "Health, as an experience and idea, is undergoing an epic shift. For millennia, humans have treated health as the rare spike that requires intervention. For the average person without chronic illness, health is conceived of and managed as an exception.",
        "Yet health is the single most important factor for any human. The potential impact of a health setback reaches into all areas of life — work, finances, love, hobbies — and affects the community.",
        "The article explores the transition from episodic medical care to continuous health monitoring, but needed a compelling, immersive digital format to engage readers beyond traditional text.",
      ],
      process: [
        "Integrated UX design, infographics design, motion design, videography, and digital book design into one cohesive interactive experience.",
        "Worked with engineers to manage prototypes and improve how the interactive website functions across devices.",
        "Designed a visual timeline spanning from 10,000 BC to a projected 2019 \"Healthroom\" future, telling the story of health's evolution through interactive data visualizations.",
      ],
      solution: [
        "Interactive website with rich visual storytelling — a health history timeline from 10,000 BC to the future \"healthroom,\" incorporating data visualizations like hGraph (an open-source visual representation of patient health status).",
        "Explored the sensor technology revolution — from wearable devices to invisible ambient health monitoring — and visualized the path from today's \"non-forgettable\" devices to seamless, background health data capture.",
        "Presented the vision of the bathroom transforming into a \"healthroom\" — where machine learning, big data, and design converge to make health monitoring continuous and invisible.",
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
        "Featured on RISD's \"Our RISD\" showcase.",
      ],
      liveLinks: [
        {
          label: "Understanding Ebola",
          url: "http://www.goinvo.com/features/ebola/",
        },
        {
          label: "Ebola Care Guideline",
          url: "https://www.goinvo.com/features/ebola-care-guideline/",
        },
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
    content: {
      overview:
        "Redesign of Insight, the electronic IRB (Institutional Review Board) portal used by Partners Healthcare's six major research institutions. Joined the design team mid-process, working with Jennifer Patel at Involution Studios. The portal is the central point for submitting and reviewing medical research protocols across the largest provider network in Massachusetts.",
      problem: [
        "The IRB portal suffered from serious usability issues. Submitters had difficulty parsing complex language in lengthy applications — it felt like \"decoding a puzzle.\" Couldn't easily find their protocols among all department submissions, had to search by system ID number.",
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
    slug: "connected-inhaler-management",
    title: "Connected Inhaler Management",
    company: "Teva Pharmaceuticals",
    year: "2018–2019",
    role: "Design Lead",
    duration: "18 months, 3 designers",
    description:
      "End-to-end design of a consolidated connected inhaler management system for respiratory patients.",
    tags: ["Product Design", "Mobile Health", "Design Lead"],
    isGated: true,
    coverColor: "#5a5a7a",
  },
  {
    slug: "migraine-management-app",
    title: "Migraine Management App",
    company: "Teva Pharmaceuticals",
    year: "2019",
    role: "Design Lead",
    duration: "2 designers",
    description:
      "Multi-channel migraine management system spanning app, watch, and voice UI.",
    tags: ["Product Design", "Mobile Health", "Behavior Design"],
    isGated: true,
    coverColor: "#6b4a6e",
  },
  {
    slug: "mckinsey-crm-platform",
    title: "Enterprise CRM Platform",
    company: "McKinsey & Company",
    year: "2021–Present",
    role: "Principal Product Designer",
    description:
      "UX vision and end-to-end experience for a Salesforce-based enterprise CRM serving 450+ client service teams.",
    tags: ["Enterprise UX", "CRM", "Service Design"],
    isGated: true,
    coverColor: "#2c4a6e",
  },
  {
    slug: "agentic-ai-experience",
    title: "Agentic AI Experience Strategy",
    company: "McKinsey & Company",
    year: "2024–Present",
    role: "Principal Product Designer",
    description:
      "Defining agentic AI experience strategy for client development workflows — AI-assisted actions, recommendations, and next-best steps.",
    tags: ["AI/ML", "Enterprise UX", "Interaction Design"],
    isGated: true,
    coverColor: "#3a5a4e",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPublicProjects(): Project[] {
  return projects.filter((p) => !p.isGated);
}
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/types.ts src/data/projects.ts
git commit -m "feat: add project types and data"
```

---

### Task 2: Global Styles and Fonts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace globals.css with portfolio design tokens**

Replace the entire contents of `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --text-muted: #999999;
  --bg-primary: #fafafa;
  --bg-card: #ffffff;
  --accent: #8b7355;
  --border: #e5e5e5;
}

@theme inline {
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-bg-primary: var(--bg-primary);
  --color-bg-card: var(--bg-card);
  --color-accent: var(--accent);
  --color-border: var(--border);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-serif: var(--font-playfair);
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Update layout.tsx — add Playfair Display, update metadata, add font variables**

Replace the entire contents of `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xinyu Liu — Principal Experience Designer",
  description:
    "Portfolio of Xinyu Liu, a Principal UX Designer & Researcher with 10+ years of experience designing enterprise and healthcare products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Run dev server to verify fonts load and styles apply**

Run: `cd /Users/Xinyu_Liu/Xinyu/xinyu && npm run dev`
Expected: Server starts on localhost:3000. Page loads with off-white background (`#fafafa`).

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: configure design tokens, add Playfair Display serif font"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Navbar component**

Create `src/components/Navbar.tsx`:

```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-primary/80 border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-medium text-text-primary hover:text-accent transition-colors"
        >
          Xinyu Liu
        </Link>
        <div className="flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Add Navbar to layout.tsx**

In `src/app/layout.tsx`, add the import and render Navbar inside `<body>` above `{children}`:

```tsx
import Navbar from "@/components/Navbar";
```

Update the body content:

```tsx
<body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
  <Navbar />
  {children}
</body>
```

- [ ] **Step 3: Verify in browser**

Run dev server if not running. Check localhost:3000 — should see sticky nav bar with "Xinyu Liu" on left, "Projects" and "Contact" on right. Slight blur backdrop.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/app/layout.tsx
git commit -m "feat: add sticky navbar with blur backdrop"
```

---

### Task 4: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border mt-32">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="font-serif text-2xl text-text-primary mb-8">
          Let&rsquo;s connect
        </p>
        <div className="flex items-center justify-center gap-8 text-sm">
          <a
            href="mailto:xyliu115@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/xliu02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/xinyu-liu-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
        <p className="mt-12 text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Xinyu Liu
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to layout.tsx**

In `src/app/layout.tsx`, import and render Footer below `{children}`:

```tsx
import Footer from "@/components/Footer";
```

Update body:

```tsx
<body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
  <Navbar />
  <main className="flex-1">{children}</main>
  <Footer />
</body>
```

- [ ] **Step 3: Verify in browser**

Check localhost:3000 — footer should appear at bottom with "Let's connect," email/LinkedIn/resume links, and copyright.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/layout.tsx
git commit -m "feat: add footer with contact links"
```

---

### Task 5: FadeIn Animation Component

**Files:**
- Create: `src/components/FadeIn.tsx`

- [ ] **Step 1: Create the FadeIn client component**

Create `src/components/FadeIn.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FadeIn.tsx
git commit -m "feat: add scroll-triggered fade-in animation component"
```

---

### Task 6: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/Hero.tsx`:

```tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-16">
      <div className="max-w-2xl text-center">
        <p className="text-sm tracking-widest uppercase text-text-muted mb-6">
          Portfolio
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-text-primary leading-tight mb-6">
          Xinyu Liu
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-4">
          Principal Experience Designer
        </p>
        <p className="text-base text-text-muted leading-relaxed max-w-lg mx-auto mb-12">
          10+ years designing enterprise and healthcare products.
          <br />
          From vision to global scale.
        </p>
        <a
          href="#projects"
          className="inline-flex flex-col items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          View Selected Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add hero section with serif name and tagline"
```

---

### Task 7: ProjectCard Component

**Files:**
- Create: `src/components/ProjectCard.tsx`

- [ ] **Step 1: Create ProjectCard component**

This component renders a single project card. For public projects, it wraps in a `<Link>`. For gated projects, it calls an `onRequestAccess` callback.

Create `src/components/ProjectCard.tsx`:

```tsx
"use client";

import Link from "next/link";
import { Project } from "@/lib/types";

type Props = {
  project: Project;
  onRequestAccess: (project: Project) => void;
};

export default function ProjectCard({ project, onRequestAccess }: Props) {
  const inner = (
    <>
      <div
        className="aspect-[16/9] w-full flex items-center justify-center relative overflow-hidden rounded-lg"
        style={{ backgroundColor: project.coverColor }}
      >
        <span className="text-white/80 font-serif text-2xl sm:text-3xl text-center px-8">
          {project.title}
        </span>
        {project.isGated && (
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        )}
      </div>
      <div className="mt-5">
        <div className="flex items-baseline gap-3 mb-2">
          <h3 className="font-serif text-xl text-text-primary">
            {project.title}
          </h3>
          <span className="text-sm text-text-muted">
            {project.company}, {project.year}
          </span>
        </div>
        <p className="text-text-secondary text-base leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-text-muted border border-border rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.isGated) {
    return (
      <button
        onClick={() => onRequestAccess(project)}
        className="block w-full text-left cursor-pointer group hover:-translate-y-1 transition-all duration-300"
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block group hover:-translate-y-1 transition-all duration-300"
    >
      {inner}
    </Link>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProjectCard.tsx
git commit -m "feat: add project card component with gated/public variants"
```

---

### Task 8: RequestAccessModal Component

**Files:**
- Create: `src/components/RequestAccessModal.tsx`

- [ ] **Step 1: Create the modal overlay component**

Create `src/components/RequestAccessModal.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Project } from "@/lib/types";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function RequestAccessModal({ project, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/{FORM_ID}", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          project: project.title,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:xyliu115@gmail.com?subject=Portfolio Access Request: ${project.title}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    } finally {
      setSubmitting(false);
    }
  }

  return (
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
                disabled={submitting}
                className="w-full rounded-lg bg-accent text-white py-3 text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Request Access"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
```

**Note:** Replace `{FORM_ID}` with the actual Formspree form ID after creating a free account at formspree.io. The component falls back to `mailto:` if Formspree fails.

- [ ] **Step 2: Commit**

```bash
git add src/components/RequestAccessModal.tsx
git commit -m "feat: add request access modal for gated projects"
```

---

### Task 9: ProjectGrid Component

**Files:**
- Create: `src/components/ProjectGrid.tsx`

- [ ] **Step 1: Create ProjectGrid component**

This is a client component that manages the modal state and renders all project cards with fade-in.

Create `src/components/ProjectGrid.tsx`:

```tsx
"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import RequestAccessModal from "./RequestAccessModal";
import FadeIn from "./FadeIn";

export default function ProjectGrid() {
  const [gatedProject, setGatedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="font-serif text-3xl text-text-primary mb-16 text-center">
            Selected Work
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <FadeIn key={project.slug}>
              <ProjectCard
                project={project}
                onRequestAccess={setGatedProject}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {gatedProject && (
        <RequestAccessModal
          project={gatedProject}
          onClose={() => setGatedProject(null)}
        />
      )}
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProjectGrid.tsx
git commit -m "feat: add project grid with modal state management"
```

---

### Task 10: Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite the homepage**

Replace the entire contents of `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open localhost:3000. Should see:
1. Sticky navbar at top
2. Full-viewport hero with "Xinyu Liu," title, tagline, and "View Selected Work" CTA
3. Scrolling down reveals "Selected Work" heading and 7 project cards with fade-in
4. Public cards (first 3) show no lock icon
5. Gated cards (last 4) show lock icon
6. Clicking a gated card opens the request-access modal overlay
7. Footer at bottom with contact links

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: build homepage with hero and project grid"
```

---

### Task 11: Case Study Page Components

**Files:**
- Create: `src/components/CaseStudyHero.tsx`
- Create: `src/components/CaseStudySection.tsx`

- [ ] **Step 1: Create CaseStudyHero component**

Create `src/components/CaseStudyHero.tsx`:

```tsx
import { Project } from "@/lib/types";

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
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
        </a>
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
          {project.duration && <span>{project.duration}</span>}
        </div>
      </div>
      <div
        className="mx-auto max-w-4xl mt-12 aspect-[16/9] rounded-xl flex items-center justify-center"
        style={{ backgroundColor: project.coverColor }}
      >
        <span className="text-white/60 font-serif text-3xl">
          {project.title}
        </span>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create CaseStudySection component**

Create `src/components/CaseStudySection.tsx`:

```tsx
import { ProjectLink } from "@/lib/types";
import FadeIn from "./FadeIn";

type Props = {
  title: string;
  paragraphs: string[];
  links?: ProjectLink[];
};

export default function CaseStudySection({ title, paragraphs, links }: Props) {
  return (
    <FadeIn>
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-text-primary mb-6">{title}</h2>
        <div className="flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                {link.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </section>
    </FadeIn>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/CaseStudyHero.tsx src/components/CaseStudySection.tsx
git commit -m "feat: add case study hero and section components"
```

---

### Task 12: Case Study Dynamic Route Page

**Files:**
- Create: `src/app/projects/[slug]/page.tsx`

- [ ] **Step 1: Create the dynamic case study page**

Create `src/app/projects/[slug]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getPublicProjects } from "@/data/projects";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import Link from "next/link";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getPublicProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Xinyu Liu`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.isGated || !project.content) {
    notFound();
  }

  const publicProjects = getPublicProjects();
  const currentIndex = publicProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? publicProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < publicProjects.length - 1
      ? publicProjects[currentIndex + 1]
      : null;

  return (
    <article>
      <CaseStudyHero project={project} />
      <div className="mx-auto max-w-3xl px-6 py-8">
        <CaseStudySection
          title="Overview"
          paragraphs={[project.content.overview]}
        />
        <CaseStudySection title="Problem" paragraphs={project.content.problem} />
        <CaseStudySection title="Process" paragraphs={project.content.process} />
        <CaseStudySection
          title="Solution"
          paragraphs={project.content.solution}
          links={project.content.liveLinks}
        />
        <CaseStudySection title="Impact" paragraphs={project.content.impact} />

        <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {nextProject.title} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Verify in browser**

Navigate to localhost:3000. Click the "From Bathroom to Healthroom" card. Should navigate to `/projects/from-bathroom-to-healthroom` with:
1. "Back to Home" link at top
2. Tags, title, company/year/role metadata
3. Colored placeholder hero banner
4. Overview, Problem, Process, Solution (with live links), Impact sections — each fading in on scroll
5. Previous/Next navigation at bottom

Test the other two public projects as well:
- `/projects/ebola-outbreak-infographics`
- `/projects/partners-healthcare-irb`

- [ ] **Step 3: Commit**

```bash
git add src/app/projects/[slug]/page.tsx
git commit -m "feat: add dynamic case study pages with prev/next navigation"
```

---

### Task 13: Clean Up and Final Polish

**Files:**
- Delete unused: `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg`

- [ ] **Step 1: Remove default Next.js assets**

```bash
rm -f public/next.svg public/vercel.svg public/file.svg public/globe.svg public/window.svg
```

- [ ] **Step 2: Run the production build to check for errors**

```bash
cd /Users/Xinyu_Liu/Xinyu/xinyu && npm run build
```

Expected: Build completes with no errors. Static pages generated for `/`, `/projects/from-bathroom-to-healthroom`, `/projects/ebola-outbreak-infographics`, `/projects/partners-healthcare-irb`.

- [ ] **Step 3: Run the linter**

```bash
npm run lint
```

Expected: No errors. Fix any that appear.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove default assets, verify production build"
```

---

### Task 14: End-to-End Verification

This is a manual verification task — no code changes.

- [ ] **Step 1: Start dev server and test full flow**

```bash
npm run dev
```

Test checklist at localhost:3000:
1. Hero section fills viewport, serif font loads for "Xinyu Liu"
2. "View Selected Work" CTA scrolls smoothly to projects section
3. All 7 project cards render with fade-in animation
4. First 3 cards (GoInvo projects) have no lock icon
5. Last 4 cards (Teva + McKinsey) show lock icon
6. Clicking a public card navigates to case study page
7. Case study page shows all sections: Overview, Problem, Process, Solution, Impact
8. Live links on Bathroom/Healthroom and Ebola case studies open external URLs
9. Previous/Next navigation works between public case studies
10. "Back to Home" link returns to homepage
11. Clicking a gated card opens the request-access modal
12. Modal can be closed via X button or clicking outside
13. Navbar is sticky with blur backdrop on scroll
14. Footer shows "Let's connect" with email, LinkedIn, resume links
15. Smooth scroll for "Projects" and "Contact" nav links
16. Page title reads "Xinyu Liu — Principal Experience Designer"
