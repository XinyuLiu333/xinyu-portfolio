# Xinyu Liu — Portfolio Website Redesign

## Overview

A full reimagination of xinyuliu.com, rebuilt from scratch on Next.js. The site targets hiring managers and recruiters at tech companies, establishing Xinyu as a Principal UX Designer & Researcher with 10+ years of experience. The design philosophy is minimal and refined — quiet confidence, editorial typography, generous whitespace. Let the work speak.

Replaces the existing Wix site with a modern, self-hosted portfolio that Xinyu fully controls.

## Audience

Hiring managers and recruiters at tech companies evaluating Xinyu for senior/principal UX design roles.

## Site Architecture

### Pages & Routes

| Route | Purpose |
|---|---|
| `/` | Home — hero intro scrolling into featured projects |
| `/projects/[slug]` | Individual case study page (public projects) |

No separate About page, no blog. Contact lives in the footer. The site is lean and focused.

### Navigation

Minimal sticky top bar:
- Left: "Xinyu Liu" (links home)
- Right: "Projects" (anchor to projects section) and "Contact" (anchor to footer)
- Thin, unobtrusive. Slight background blur on scroll to stay readable over content.

### Footer

- Short closing line (e.g., "Let's connect")
- Links: Email (xyliu115@gmail.com), LinkedIn (linkedin.com/in/xliu02/), Resume (PDF download from `/public/xinyu-liu-resume.pdf`)
- Small copyright line

## Homepage Layout

### Hero Section (full viewport height)

- Name: "Xinyu Liu" in a large, elegant serif
- Title: "Principal Experience Designer"
- Tagline: drawn from resume — "10+ years designing enterprise and healthcare products. From vision to global scale."
- Single CTA: "View Selected Work" with a subtle downward arrow, anchoring to the projects section
- Generous whitespace. No background image. Type and space only.

### Projects Section (scrolls directly below the hero)

- Section heading: "Selected Work"
- Projects displayed as vertically stacked, full-width cards — one project at a time gets the viewer's full attention
- Each card shows: large thumbnail/cover image, project title, company name, one-line description, role tag (e.g., "Product Design," "UX Research," "Data Visualization")

#### Public case studies (3) — click through to `/projects/[slug]`

1. **From Bathroom to Healthroom** — GoInvo, 2015
2. **Ebola Outbreak Infographics** — GoInvo, 2014
3. **Partners Healthcare IRB** — GoInvo, 2015

#### Gated projects (4) — click opens request-access overlay

4. **Connected Inhaler Management** — Teva (Confidential)
5. **Migraine Management App** — Teva (Confidential)
6. **McKinsey CRM Platform** — McKinsey & Company (Confidential)
7. **Agentic AI Experience Strategy** — McKinsey & Company (Confidential)

Gated cards look identical to public cards but display a small lock icon. Clicking opens the request-access form overlay (not a separate page).

## Case Study Page Template

Each public case study is a full page at `/projects/[slug]`. Users navigate here from the homepage and can click back via the nav bar or a "Back to Home" link.

### Structure

1. **Hero** — Full-width cover image, project title, company name, role, timeframe
2. **Overview** — One-paragraph summary of the project
3. **Problem** — What was broken, the user pain point, the business challenge. Sets the stakes.
4. **Process** — Design/research approach: methods used, key decisions, artifacts (sketches, flows, wireframes, research findings)
5. **Solution** — What was designed/delivered, with screenshots, mockups, or links to live work
6. **Impact** — Measurable outcomes and metrics
7. **Navigation footer** — "Back to Home" link + Previous/Next project links

## Project Content

### 1. From Bathroom to Healthroom (Public)

- **Company:** GoInvo (Involution Studios)
- **Year:** 2015
- **Role:** Designer
- **Collaborators:** Author Juhan Sonin, Editor Emily Twaddell
- **Duration:** 4 weeks
- **Overview:** An interactive website and ebook design for the article "From Bathroom to Healthroom," creating a new storytelling experience about the future of health and improving user engagement.
- **Problem:** Health, as an experience and idea, is undergoing an epic shift — from episodic medical events to continuous wellness. The article explores this transition but needed a compelling, immersive digital format to engage readers beyond traditional text.
- **Process:** Integrated UX design, infographics design, motion design, videography, and digital book design. Worked with engineers to manage prototypes and improve functionality.
- **Solution:** Interactive website with rich visual storytelling — timeline of health history from 10,000 BC to the future "healthroom," data visualizations (hGraph), sensor technology exploration, and a vision for bathroom-to-healthroom transformation.
- **Impact:** Published and live at goinvo.com/features/from-bathroom-to-healthroom/
- **Live link:** http://www.goinvo.com/features/from-bathroom-to-healthroom/

### 2. Ebola Outbreak Infographics (Public)

- **Company:** GoInvo (Involution Studios)
- **Year:** 2014
- **Role:** Designer
- **Overview:** Two related visual resources created during the 2014 Ebola outbreak to educate the public and support healthcare workers.
- **Problem:** During the 2014 Ebola outbreak, confusion and conflicting information from news outlets created an information crisis. Healthcare workers also needed clear guidance on PPE protocols, where improper use could lead to heat-related illness or infection.
- **Process:** Research into Ebola transmission, symptoms, epidemiology, and PPE protocols. Visual design to distill complex medical information into accessible, scannable formats.
- **Solution:**
  - **Understanding Ebola: A Visual Guide** — Comprehensive visual guide educating the public about the epidemic
  - **Ebola Care Guideline** — Illustrated PPE process guide for healthcare workers, addressing the risks of heat-related illness from protective equipment
- **Impact:** Published resources used for public education during the outbreak. PDF guideline distributed to healthcare organizations.
- **Live links:**
  - http://www.goinvo.com/features/ebola/
  - https://www.goinvo.com/features/ebola-care-guideline/

### 3. Partners Healthcare IRB (Public)

- **Company:** GoInvo for Partners Healthcare
- **Year:** 2015
- **Role:** Designer (joined mid-process, worked with Jennifer Patel)
- **Duration:** 20 months total (2-5 designers and engineers)
- **Overview:** Redesign of Insight, the electronic IRB (Institutional Review Board) portal used by Partners Healthcare's six major research institutions to submit and review medical research protocols.
- **Problem:** The IRB portal suffered from serious usability issues. Submitters had difficulty parsing complex language, couldn't easily find their protocols, and protocol information was fragmented across multiple layers. Reviewers spent significant time hunting for information. The iterative back-and-forth between submission and review was opaque, delaying research by weeks.
- **Process:**
  - In-depth interviews with 65 individuals at 6 research facilities
  - Investigated end-to-end IRB process — submitters, reviewers, administrators, principal investigators
  - Identified pain points: confusing language, poor protocol findability, fragmented information, opaque review status, unclear reviewer comments
- **Solution:**
  - Protocol list redesigned: grouped by study, sorted by recent activity, color-coded status
  - Open, navigable forms with plain language and contextual help
  - Transparent review process — clear step/status visibility
  - Contextual communication — reviewers comment directly where changes are needed
  - Versioning with side-by-side comparison
  - Foundational design system for the larger Insight application
- **Impact:** Validated with 91 individuals (analysts, admins, program chairs, principal investigators). Insight 4.0 rolled out to all Partners research facilities.

### 4. Connected Inhaler Management (Gated)

- **Company:** Teva Pharmaceuticals
- **Role:** Design Lead (3 designers, 18 months)
- **Card description:** End-to-end design of a consolidated connected inhaler management system for respiratory patients.
- **Content:** Full case study content available (from 2019 PDF) — to be built when user is ready.

### 5. Migraine Management App (Gated)

- **Company:** Teva Pharmaceuticals
- **Role:** Design Lead (2 designers)
- **Card description:** Multi-channel migraine management system spanning app, watch, and voice UI.
- **Content:** Full case study content available (from 2019 PDF) — to be built when user is ready.

### 6. McKinsey CRM Platform (Gated)

- **Company:** McKinsey & Company
- **Role:** Principal Product Designer
- **Card description:** UX vision and end-to-end experience for a Salesforce-based enterprise CRM platform.

### 7. Agentic AI Experience Strategy (Gated)

- **Company:** McKinsey & Company
- **Role:** Principal Product Designer
- **Card description:** Defining agentic AI experience strategy for client development workflows.

## Request Access Form

When a user clicks a gated project card, an overlay appears (not a new page):

- **Heading:** "This case study is confidential"
- **Subtext:** "Request access and I'll send it to you."
- **Fields:**
  - Name (required)
  - Email (required)
  - Message (optional, e.g., "Which company are you with?")
- **Submit button**
- **Close/dismiss** via X button or clicking outside

Submissions are sent to xyliu115@gmail.com. Implementation options (in order of simplicity):
1. `mailto:` link with pre-filled subject/body (no backend needed, but requires user's email client)
2. Formspree or similar third-party form service (free tier, no backend)
3. Next.js API route + email service (e.g., Resend, SendGrid)

Recommended: Option 2 (Formspree) — zero backend, reliable delivery, free tier sufficient.

## Visual Design System

### Typography

- **Headings:** Serif typeface — Playfair Display or Lora. Used for Xinyu's name, section titles, project titles.
- **Body:** Clean sans-serif — Geist Sans (already in project) or Inter. Used for descriptions, body text, navigation.
- **Metadata/tags:** Geist Mono or small-caps sans-serif for dates, role tags, project metadata.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `#1a1a1a` | Headlines, primary text |
| `--text-secondary` | `#666666` | Body text, descriptions |
| `--text-muted` | `#999999` | Metadata, tags, dates |
| `--bg-primary` | `#fafafa` | Page background |
| `--bg-card` | `#ffffff` | Card backgrounds |
| `--accent` | `#8b7355` | Hover states, request-access button (warm muted tone) |
| `--border` | `#e5e5e5` | Subtle dividers |

Dark mode: not in initial scope. Light-only for v1.

### Spacing & Layout

- Max content width: 760px for text, full-width for project card images
- Generous vertical spacing: 120-160px between major sections
- Hero section: full viewport height, vertically centered
- Project cards: full-width images, stacked vertically with 80-100px gap
- Case study pages: 760px max-width for text, images can bleed wider

### Motion & Interactions

- **Scroll:** Gentle fade-in + slight upward translate on project cards as they enter viewport (IntersectionObserver)
- **Hover:** Project cards get a subtle lift (translateY -4px) and slight shadow increase
- **Page transitions:** Smooth, no jarring page loads (Next.js handles this natively with App Router)
- **No:** Parallax, animated backgrounds, complex scroll-jacking, or anything flashy

## Technical Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Fonts | Geist Sans + Geist Mono (already installed) + one serif (Playfair Display or Lora via next/font/google) |
| Form handling | Formspree (free tier) |
| Deployment | TBD (Vercel recommended) |
| Content | Hardcoded in components for v1 (no CMS) |

### Content Strategy

All project content is hardcoded in TypeScript files for v1. Each project is defined as a data object with its content, making it easy to migrate to a CMS later if needed. No markdown files or MDX — just typed data objects and React components.

### Project Data Shape

```typescript
type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  duration?: string;
  description: string; // one-liner for card
  tags: string[];
  isGated: boolean;
  coverImage: string;
  content?: {
    overview: string;
    problem: string;
    process: string[];  // paragraphs or sections
    solution: string[];
    impact: string[];
    liveLinks?: { label: string; url: string }[];
  };
};
```

### File Structure

```
src/
  app/
    layout.tsx          — Root layout (fonts, nav, footer)
    page.tsx            — Home (hero + projects grid)
    projects/
      [slug]/
        page.tsx        — Case study page template
  components/
    Navbar.tsx          — Sticky nav bar
    Footer.tsx          — Contact footer
    Hero.tsx            — Homepage hero section
    ProjectCard.tsx     — Project card (used on homepage)
    ProjectGrid.tsx     — Projects section container
    RequestAccessForm.tsx — Overlay form for gated projects
    CaseStudyHero.tsx   — Case study page hero
    CaseStudySection.tsx — Reusable section component (Problem, Process, etc.)
    FadeIn.tsx          — Scroll-triggered fade-in wrapper
  data/
    projects.ts         — All project data
  lib/
    types.ts            — TypeScript types
```

## Placeholder Assets (v1)

Cover images for project cards and case study heroes will use styled placeholder blocks (gradient or solid color with project title overlay) for v1. Xinyu will supply actual project screenshots/images to replace these. The resume PDF also needs to be added to `/public/xinyu-liu-resume.pdf`.

## Out of Scope (v1)

- Dark mode
- Blog / writing section
- About page
- CMS integration
- Analytics (can add later)
- SEO optimization beyond basic meta tags
- Image optimization beyond Next.js defaults
- Sense of Ceremony project (dropped — too old)
- "Having Fun!~" section from old site
