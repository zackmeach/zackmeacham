# Site v1 content buildout — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the public content of zackmeacham.com into a v1 that effectively frames Zack for Applied AI/ML Engineer roles plus broader software/systems/product engineering roles, per the approved spec.

**Architecture:** Astro 6 + Tailwind 4 single-page-per-route. All content lives in `src/data/site.ts` (single source of truth). 3 new shared components (`ChipRow`, `SectionBlock`, `ProjectDetailLayout`). New dynamic route `src/pages/projects/[slug].astro` for 3 flagship detail pages. Contact page removed.

**Tech Stack:** Astro 6.1, Tailwind 4.2, TypeScript 5.9, `@astrojs/check` for type validation.

**Spec:** [docs/superpowers/specs/2026-04-23-site-v1-content-buildout-design.md](../specs/2026-04-23-site-v1-content-buildout-design.md)

**Source content (private, not in repo):** `C:\Users\zdm80\OneDrive\Desktop\temp\zackmeacham.md`

**Confidentiality guardrails (enforce in every content task):**
- Never publish Boeing codenames (`MGS Testing Suite`, `GCATS`, `Autocollimator`).
- Rough dollar figures only if fully untethered from a program name. When in doubt, omit.
- Family limited to Sarah (wife) and Milo (dog). No other family.

---

## Workflow per task

This is a content-heavy Astro site with no test suite. Each task follows:
1. Make the code change.
2. Run `npm run check` to validate types.
3. Open the affected page in a browser preview (dev server) and verify it renders without errors.
4. Commit.

**Running the dev server once at the start is fine** — Astro HMR picks up edits. Tasks only call out a fresh `preview_start` when the server is not already running.

---

## File structure — what gets created/modified

### Created
- `src/components/ChipRow.astro` — shared chip-row renderer.
- `src/components/SectionBlock.astro` — homepage block wrapper (heading + prose + optional chips + optional link).
- `src/components/ProjectDetailLayout.astro` — detail-page template (hero, takeaways, at-a-glance, subsystems, closing).
- `src/pages/projects/[slug].astro` — dynamic route for flagship project detail pages.

### Modified
- `src/data/site.ts` — new types (`Chip`, `Subsystem`, `Takeaway`, `GlanceRow`, `ProjectDetail`), extended types (`ResumeEntry.chips`, `Project.chips`, `Project.detailHref`), new exports (`professionalBlock`, `aiBlock`, `projectDetails`, `aboutPhilosophy`), content rewrites, `featured` folded into `personalProjects`, Ledger removed from `links`, `navigation` entry for Contact removed.
- `src/pages/index.astro` — 7-block rebuild per spec §7.
- `src/pages/projects.astro` — grouped professional entry + personal project cards with chip rows.
- `src/pages/about.astro` — intro + how-I-work + AI philosophy + outside work.
- `src/pages/resume.astro` — chip rows per entry + reordered skill groups.
- `src/components/SiteHeader.astro` — no change needed (already reads `navigation`).
- `src/components/SiteFooter.astro` — no functional change (no `/contact` refs; already uses email). Spec-required audit only.

### Deleted
- `src/pages/contact.astro`

---

## Phase A — Data model scaffolding

Everything downstream depends on these types existing. Do this first, no content yet.

### Task A1: Add new types and extend existing types in site.ts

**Files:**
- Modify: `src/data/site.ts` (top of file, in the types block)

- [ ] **Step 1: Add new types below existing `SkillGroup` type**

```ts
export type Chip = string;

export type Subsystem = {
  title: string;
  description: string;
  chips: Chip[];
};

export type Takeaway = {
  lead: string;
  body: string;
};

export type GlanceRow = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  slug: string;
  lead: string;
  topChips: Chip[];
  takeaways: Takeaway[];
  glance: GlanceRow[];
  subsystems: Subsystem[];
  closing: { heading: string; body: string };
  publicSafeNote?: string;
};
```

- [ ] **Step 2: Extend `Project` type**

Add two optional fields to the existing `Project` type:

```ts
export type Project = {
  // ...existing fields
  chips?: Chip[];
  detailHref?: string;
};
```

- [ ] **Step 3: Extend `ResumeEntry` type**

Add a required `chips` field:

```ts
export type ResumeEntry = {
  // ...existing fields
  chips: Chip[];
};
```

- [ ] **Step 4: Run type check**

Run: `npm run check`
Expected: type errors about `ResumeEntry` objects missing `chips` (these are the three existing entries — fix in the next task). No other errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/site.ts
git commit -m "feat(types): add ProjectDetail, Chip, Takeaway types"
```

---

## Phase B — Shared components

Build the three new components with placeholder data so later tasks can use them immediately.

### Task B1: Create `ChipRow.astro`

**Files:**
- Create: `src/components/ChipRow.astro`

- [ ] **Step 1: Create the component**

```astro
---
import type { Chip } from "../data/site";

interface Props {
  chips: Chip[];
  class?: string;
}

const { chips, class: className = "" } = Astro.props;
---

{chips.length > 0 && (
  <p class:list={["mono chip-row", className]}>
    {chips.map((chip, i) => (
      <>
        {i > 0 && <span class="chip-sep"> · </span>}
        <span class="chip">{chip}</span>
      </>
    ))}
  </p>
)}
```

- [ ] **Step 2: Add minimal CSS in `src/styles/global.css`** (or wherever existing `.mono` is defined — grep first)

Run: `grep -n "\.mono" src/styles/` (use Grep tool)

If `.chip-row` isn't already styled, add below existing `.mono` definition:

```css
.chip-row { @apply text-sm; }
.chip { @apply inline; }
.chip-sep { @apply text-graphite/60; }
```

Note: the existing site uses `project.stack.join(" · ")` inside `<p class="mono">` — match that look. Styling tweaks can happen during frontend-design polish.

- [ ] **Step 3: Run type check**

Run: `npm run check`
Expected: PASS (this file adds nothing that breaks).

- [ ] **Step 4: Commit**

```bash
git add src/components/ChipRow.astro src/styles/global.css
git commit -m "feat(components): add ChipRow shared component"
```

### Task B2: Create `SectionBlock.astro`

**Files:**
- Create: `src/components/SectionBlock.astro`

- [ ] **Step 1: Create the component**

```astro
---
import type { Chip } from "../data/site";
import ChipRow from "./ChipRow.astro";

interface Props {
  eyebrow?: string;
  heading: string;
  lede?: string;
  body?: string | string[];
  chips?: Chip[];
  link?: { label: string; href: string };
}

const { eyebrow, heading, lede, body, chips = [], link } = Astro.props;
const paragraphs = Array.isArray(body) ? body : body ? [body] : [];
---

<section class="shell-wide pt-20">
  <div class="flex items-baseline justify-between gap-4">
    <div>
      {eyebrow && <p class="mono-tag">{eyebrow}</p>}
      <h2 class="mt-4 max-w-[22ch]">{heading}</h2>
    </div>
    {link && <a href={link.href} class="mono link">{link.label}</a>}
  </div>

  {lede && <p class="lead mt-6 max-w-[60ch]">{lede}</p>}

  {paragraphs.map((p) => (
    <p class="prose-soft mt-4 max-w-[70ch]">{p}</p>
  ))}

  {chips.length > 0 && <ChipRow chips={chips} class="mt-6" />}
</section>
```

- [ ] **Step 2: Run type check**

Run: `npm run check`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/SectionBlock.astro
git commit -m "feat(components): add SectionBlock for homepage blocks"
```

### Task B3: Create `ProjectDetailLayout.astro`

**Files:**
- Create: `src/components/ProjectDetailLayout.astro`

- [ ] **Step 1: Create the component**

```astro
---
import type { Project, ProjectDetail } from "../data/site";
import ChipRow from "./ChipRow.astro";

interface Props {
  project: Project;
  detail: ProjectDetail;
}

const { project, detail } = Astro.props;
---

<article class="shell-wide pt-14 pb-24">
  <header>
    <p class="mono-tag">{project.eyebrow}</p>
    <h1 class="hero-title mt-5">{project.title}</h1>
    <p class="mono mt-2">{project.year} · {project.status}</p>
    <p class="lead mt-6 max-w-[55ch]">{detail.lead}</p>
    <ChipRow chips={detail.topChips} class="mt-6" />
    {project.href && (
      <p class="mono mt-4">
        <a href={project.href} target="_blank" rel="noreferrer" class="link">Visit link</a>
      </p>
    )}
  </header>

  <section class="mt-14">
    <p class="mono-tag">Takeaways</p>
    <ul class="mt-6 space-y-3 max-w-[72ch]">
      {detail.takeaways.map((t) => (
        <li class="prose-soft">
          <strong class="text-ink">{t.lead}</strong> — {t.body}
        </li>
      ))}
    </ul>
  </section>

  <section class="mt-14">
    <p class="mono-tag">At a glance</p>
    <dl class="mt-6 grid gap-x-8 gap-y-3 max-w-[72ch] sm:grid-cols-[auto_1fr]">
      {detail.glance.map((row) => (
        <>
          <dt class="mono">{row.label}</dt>
          <dd class="prose-soft" set:html={row.value} />
        </>
      ))}
    </dl>
  </section>

  <section class="mt-14">
    <p class="mono-tag">What I built</p>
    <div class="mt-6 space-y-10 max-w-[72ch]">
      {detail.subsystems.map((s) => (
        <div>
          <h3>{s.title}</h3>
          <p class="prose-soft mt-3">{s.description}</p>
          <ChipRow chips={s.chips} class="mt-4" />
        </div>
      ))}
    </div>
  </section>

  <section class="mt-14 max-w-[72ch]">
    <p class="mono-tag">{detail.closing.heading}</p>
    <p class="prose-soft mt-6">{detail.closing.body}</p>
  </section>

  {detail.publicSafeNote && (
    <p class="mono mt-14 max-w-[72ch] text-graphite">{detail.publicSafeNote}</p>
  )}

  <p class="mt-14">
    <a href="/projects" class="mono link">← All projects</a>
  </p>
</article>
```

- [ ] **Step 2: Run type check**

Run: `npm run check`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectDetailLayout.astro
git commit -m "feat(components): add ProjectDetailLayout for flagship project pages"
```

---

## Phase C — site.ts content population

Populate all new and changed content. Prose is drafted from the private profile doc; every Boeing-derived sentence passes the confidentiality filter.

### Task C1: Rewrite `site` object — positioning, home copy, contact intro

**Files:**
- Modify: `src/data/site.ts` (the `site` object)

- [ ] **Step 1: Replace `identitySentence`, `homeSupport`, `nowLine`, and related fields**

Drop `homeSupport` and `nowLine` (home only uses `identitySentence` now). Replace `identitySentence` with the positioning sentence:

```ts
identitySentence:
  "Software engineer focused on legacy modernization, agentic-AI tooling, and product-minded systems that hold up under real constraints.",
```

Remove `homeSupport` and `nowLine` fields entirely. Update `aboutParagraphs`, `strengths`, `workingStyle`, `credibilityHighlights`, `shortPersonal`, `resumeSummary`, `contactIntro` per spec §9–10 (tighter, on-message, no duplication with Home). Keep `publicSafeRule` unchanged.

Concrete drafts (tune wording in review, not structurally):

- `resumeSummary`: *"Software engineer with experience spanning legacy test-infrastructure modernization, frontier-AI adoption, and modern product software. Strongest when the work demands architecture, judgment, and the ability to move between deep technical work and clear communication."*
- `contactIntro`: *"Email is the quickest way to reach me. Happy to talk about modernization work, product engineering, agentic-AI tooling, or something interesting you think I should be building."*
- `workingStyle`: keep 3 principles, rewritten tighter:
  - *"Depth before noise — understand the system, then make the smallest high-leverage move."*
  - *"Architecture with a purpose — design for maintainability, operator trust, and real usage."*
  - *"Calm ownership — communicate clearly, mentor where helpful, keep momentum up."*
- `shortPersonal`: keep current wording (Sarah + Milo + Ohio + sports + explainers).

- [ ] **Step 2: Fix callers of removed fields**

Run: `grep -rn "homeSupport\|nowLine" src/` (use Grep tool) and remove each reference. Expected callers: `src/pages/index.astro` only. Update when editing index later (Phase D).

- [ ] **Step 3: Run type check**

Run: `npm run check`
Expected: errors on `index.astro` referring to removed fields. Acceptable — fixed in Phase D.

- [ ] **Step 4: Commit**

```bash
git add src/data/site.ts
git commit -m "content: rewrite site identity + home copy for v1 positioning"
```

### Task C2: Update `proofPoints`

**Files:**
- Modify: `src/data/site.ts` (`proofPoints` export)

- [ ] **Step 1: Swap "2022 start year" for AI-adoption line**

```ts
export const proofPoints: ProofPoint[] = [
  { value: "3", label: "major Boeing modernization efforts shaped or led" },
  { value: "2", label: "Boeing recognition awards" },
  { value: "CTO", label: "role on a civic-tech startup" },
  { value: "2", label: "organizations where I've led frontier-AI adoption" },
];
```

- [ ] **Step 2: Run type check**

Run: `npm run check`

- [ ] **Step 3: Commit**

```bash
git add src/data/site.ts
git commit -m "content: refine proof points to emphasize AI-adoption signal"
```

### Task C3: Collapse `featured` into `personalProjects`, add chips and `detailHref`

**Files:**
- Modify: `src/data/site.ts` (`featured`, `personalProjects`, `links`)

- [ ] **Step 1: Remove the standalone `featured` export.**

- [ ] **Step 2: Rebuild `personalProjects` in spec order (Milodex → Ledger → MSM Tracker) with chip rows and detail hrefs**

```ts
export const personalProjects: Project[] = [
  {
    slug: "milodex",
    title: "Milodex",
    kind: "personal",
    eyebrow: "Personal project",
    year: "2026",
    status: "Active build",
    summary:
      "A research-first autonomous trading platform built around broker abstraction, risk-gated execution, and operator-safe workflows.",
    notes:
      "Infrastructure first, automation second. Vendors sit behind internal models, the risk layer has veto power, and autonomy has to be earned instead of assumed.",
    stack: ["Python", "pytest", "Parquet", "CLI", "Risk controls", "Alpaca"],
    chips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    repo: "https://github.com/zackmeach/Milodex",
    detailHref: "/projects/milodex",
  },
  {
    slug: "ledger",
    title: "Ledger",
    kind: "personal",
    eyebrow: "Personal project · CTO",
    year: "2026",
    status: "Launch-stage",
    summary:
      "A civic-tech product focused on making politics more transparent, legible, and approachable across local, state, and federal contexts.",
    notes:
      "Strongest public software story right now: architecture, data contracts, provenance and citation flows, testing, rate limiting, auth-aware behavior, CI, and frontend polish.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    chips: ["Next.js", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    detailHref: "/projects/ledger",
    // No href in v1 — site not publicly live yet
  },
  {
    slug: "msm-awakening-tracker",
    title: "MSM Awakening Tracker",
    kind: "personal",
    eyebrow: "Personal project",
    year: "2026",
    status: "Built from scratch",
    summary:
      "A Windows desktop companion app for My Singing Monsters that makes awakening progress easier to track across multiple active targets.",
    notes:
      "Full-stack product ownership in a different form factor: PySide6 UI architecture, SQLite persistence, reversible user actions, updater tooling, and release automation.",
    stack: ["Python", "PySide6", "SQLite", "pytest", "PyInstaller", "GitHub Actions"],
    chips: ["Python", "PySide6", "SQLite", "PyInstaller", "GitHub Actions"],
    // No detailHref — MSM stays at card depth in v1
  },
];
```

- [ ] **Step 3: Remove the Ledger entry from `links`**

```ts
export const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/zackmeach", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zachary-meacham/", external: true },
];
```

- [ ] **Step 4: Fix callers of `featured`**

Run: `grep -rn "\bfeatured\b" src/` — expected caller: `src/pages/index.astro`. Leave broken until Phase D.

- [ ] **Step 5: Run type check**

Run: `npm run check`
Expected: errors on `index.astro` referring to `featured`. Acceptable — fixed in Phase D.

- [ ] **Step 6: Commit**

```bash
git add src/data/site.ts
git commit -m "content: fold featured into personalProjects, add chips, drop Ledger link"
```

### Task C4: Update `workProjects` with chips

**Files:**
- Modify: `src/data/site.ts` (`workProjects`)

- [ ] **Step 1: Add chips to each work project (no codenames)**

Append a `chips` array to each of the three `workProjects` entries:

- `flagship-test-suite-overhaul` chips: `["Ada", "Requirements engineering", "Stakeholder communication", "Cross-discipline systems"]`
- `legacy-labview-instrumentation` chips: `["LabVIEW", "C++", "Hardware integration", "Modernization strategy"]`
- `calibration-equipment-suite` chips: `["LabVIEW", "Real-time behavior", "Instrumentation", "Production validation"]`

- [ ] **Step 2: Run type check**

Run: `npm run check`

- [ ] **Step 3: Commit**

```bash
git add src/data/site.ts
git commit -m "content: add chip rows to Boeing work projects"
```

### Task C5: Add `professionalBlock` and `aiBlock` exports

**Files:**
- Modify: `src/data/site.ts` (new exports below existing blocks)

- [ ] **Step 1: Add `professionalBlock`**

```ts
export const professionalBlock = {
  eyebrow: "At Boeing",
  heading: "High-stakes modernization, done under real constraints.",
  body: [
    "I work across three modernization efforts at Boeing, spanning software, systems, and instrumentation for high-stakes test infrastructure. One I helped originate as the largest active modernization initiative in my organization; one I lead as the senior software engineer on a legacy instrumentation overhaul; one I built from scratch and took into daily production use.",
    "Professional work here is written public-safe — enough to show scope and ownership without exposing program specifics.",
  ],
  chips: [
    "Ada",
    "C++",
    "LabVIEW",
    "Hardware integration",
    "Requirements engineering",
    "Stakeholder communication",
  ],
  link: { label: "Read more", href: "/projects/boeing-modernization" },
};
```

- [ ] **Step 2: Add `aiBlock`**

```ts
export const aiBlock = {
  eyebrow: "AI & agentic engineering",
  heading: "Shipping with frontier tools, not just using them.",
  body: [
    "I build and operate agentic workflows day-to-day — custom skills, MCP servers, RAG pipelines, tool-using agents — and I serve as the primary internal resource for frontier-AI adoption across two organizations.",
    "My posture is engineer-first: operator trust, verifiable behavior, clear failure modes. Autonomy gets earned, not assumed — the same discipline I apply in Milodex and in production test systems.",
  ],
  chips: ["Claude API", "MCP", "RAG", "Agentic workflows", "Prompt engineering", "Custom skills"],
};
```

- [ ] **Step 3: Run type check**

Run: `npm run check`

- [ ] **Step 4: Commit**

```bash
git add src/data/site.ts
git commit -m "content: add professionalBlock and aiBlock for homepage"
```

### Task C6: Add `projectDetails` export with Milodex, Ledger, Boeing entries

**Files:**
- Modify: `src/data/site.ts` (new export near the bottom)

- [ ] **Step 1: Add the `projectDetails` array**

```ts
export const projectDetails: ProjectDetail[] = [
  {
    slug: "milodex",
    lead:
      "A research-first autonomous trading platform where autonomy is earned, not assumed.",
    topChips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    takeaways: [
      {
        lead: "Architecture-first",
        body:
          "vendors are isolated behind internal models; market data and execution paths are standardized so swapping brokers is a boundary concern, not a rewrite.",
      },
      {
        lead: "Risk has veto power",
        body:
          "a gated execution layer sits between strategy and the broker — automation has to pass risk checks before any order leaves.",
      },
      {
        lead: "Operator-safe by design",
        body:
          "CLI-first, reversible actions, auditable decisions — built for the operator, not the algorithm.",
      },
    ],
    glance: [
      { label: "Scope", value: "Personal project, active build" },
      { label: "Stack", value: "Python · pytest · Parquet · Alpaca" },
      {
        label: "Links",
        value:
          '<a class="link" href="https://github.com/zackmeach/Milodex" target="_blank" rel="noreferrer">GitHub</a>',
      },
    ],
    subsystems: [
      {
        title: "Broker abstraction & market-data pipeline",
        description:
          "Broker vendors are hidden behind an internal model so the rest of the system reasons in one vocabulary. Market data lands in Parquet with a consistent shape; execution paths share the same contract the data uses.",
        chips: ["Python", "Alpaca", "Parquet"],
      },
      {
        title: "Risk-gated execution layer",
        description:
          "A layer between strategy and broker that enforces risk rules per order. Every path an automated system can take runs through the gate — the default outcome is refuse, not execute.",
        chips: ["Python", "Gating rules", "Reversibility"],
      },
      {
        title: "Operator CLI & test harness",
        description:
          "A deliberate CLI-first operator surface: inspect state, replay sessions, run with simulated brokers. Tests cover the same paths the operator drives.",
        chips: ["Python", "CLI", "pytest"],
      },
    ],
    closing: {
      heading: "What's next",
      body:
        "Continuing to harden the risk layer, add more strategy research, and tighten the operator feedback loop. The goal is a system whose behavior I can trust before I extend what it's allowed to do.",
    },
  },
  {
    slug: "ledger",
    lead:
      "A civic-tech product focused on making politics more legible at the local, state, and federal level.",
    topChips: ["Next.js", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    takeaways: [
      {
        lead: "Provenance-first",
        body:
          "every fact traces to a source; citation is a first-class UX concern, not an afterthought.",
      },
      {
        lead: "Modern stack, disciplined boundaries",
        body:
          "Next.js + Supabase + Upstash with clear data contracts between layers so surface-area changes stay local.",
      },
      {
        lead: "Built to ship and stay shipped",
        body:
          "CI, rate limiting, auth-aware behavior, Playwright and Vitest coverage — the kind of habits that let a small team keep moving.",
      },
    ],
    glance: [
      { label: "Scope", value: "Civic-tech startup, CTO, launch-stage" },
      {
        label: "Stack",
        value: "Next.js · React · TypeScript · Supabase · Upstash · Vitest · Playwright",
      },
      { label: "Links", value: "Live URL coming soon" },
    ],
    subsystems: [
      {
        title: "Frontend UX & provenance flows",
        description:
          "Product surfaces that let citation and context ride with every claim. The UI is shaped around trust: what did we assert, where did it come from, and how can a reader verify it themselves.",
        chips: ["Next.js", "React", "TypeScript", "Tailwind"],
      },
      {
        title: "Data contracts & backend",
        description:
          "Supabase for structured data, Upstash for rate-limiting and ephemeral state, with typed contracts at every crossing. The goal is to make the honest path the easy path as the schema evolves.",
        chips: ["Supabase", "Upstash", "TypeScript"],
      },
      {
        title: "Testing & CI",
        description:
          "Vitest for units, Playwright for end-to-end flows, GitHub Actions for CI — set up to catch the regressions a civic-tech product can least afford to ship.",
        chips: ["Vitest", "Playwright", "GitHub Actions"],
      },
    ],
    closing: {
      heading: "What's next",
      body:
        "Pushing toward public launch while hardening the parts that matter most — provenance, auth-aware behavior, and the operator tooling that makes the data defensible.",
    },
  },
  {
    slug: "boeing-modernization",
    lead:
      "Three modernization efforts across high-stakes test infrastructure — one originated, one led, one built from scratch.",
    topChips: [
      "Ada",
      "C++",
      "LabVIEW",
      "Hardware integration",
      "Requirements engineering",
      "Stakeholder communication",
    ],
    takeaways: [
      {
        lead: "Originated a program-level modernization effort",
        body:
          "turned a station-level assignment into the largest active modernization initiative in my organization by framing system risk and taking the story to senior stakeholders.",
      },
      {
        lead: "Led legacy instrumentation modernization",
        body:
          "deliberate tradeoffs over rewrites; risk-contained integration of new hardware alongside behaviors the legacy system still has to honor.",
      },
      {
        lead: "Shipped calibration software from zero to production",
        body:
          "built the missing software layer from scratch, owned it through acceptance, and carried it into daily production use.",
      },
    ],
    glance: [
      { label: "Scope", value: "Boeing · public-safe · 2022 – present" },
      {
        label: "Stack",
        value: "Ada · C++ · LabVIEW · Hardware integration · Requirements engineering",
      },
      { label: "Recognition", value: "Two Boeing recognition awards tied to modernization impact" },
    ],
    subsystems: [
      {
        title: "Flagship test-suite overhaul (originator)",
        description:
          "Helped turn a station-level assignment into a program-level modernization. The interesting part wasn't the technical depth alone — it was pairing system understanding with disciplined analysis and stakeholder communication until a credible modernization story existed.",
        chips: ["Ada", "Requirements engineering", "Stakeholder communication"],
      },
      {
        title: "Legacy instrumentation overhaul (lead software engineer)",
        description:
          "Inherited a brittle legacy environment with real constraints and missing pieces. The work has been about careful tradeoffs — preserving the legacy behavior that matters, integrating new hardware safely, and creating a supportable path forward without pretending the system is greenfield.",
        chips: ["LabVIEW", "C++", "Hardware integration", "Modernization strategy"],
      },
      {
        title: "Calibration-equipment software suite (from scratch)",
        description:
          "Built a new software suite for calibration equipment that supports broader testing operations. Zero software to production-facing daily use — the kind of work where defining the interface between old and new, and staying with it through acceptance, is most of the job.",
        chips: ["LabVIEW", "Real-time behavior", "Instrumentation", "Production validation"],
      },
    ],
    closing: {
      heading: "How I think about this work",
      body:
        "Modernization is rarely a rewrite. The discipline is finding the smallest high-leverage move that makes the system safer, clearer, and easier to live with — and then being the one who stays with it through the messy middle.",
    },
    publicSafeNote:
      "This page is written public-safe: program names, specific station counts, and sensitive internal detail are intentionally omitted.",
  },
];
```

- [ ] **Step 2: Run type check**

Run: `npm run check`

- [ ] **Step 3: Commit**

```bash
git add src/data/site.ts
git commit -m "content: add projectDetails for Milodex, Ledger, Boeing synthesis"
```

### Task C7: Add chips to `resumeEntries` and reorder `skillGroups`

**Files:**
- Modify: `src/data/site.ts` (`resumeEntries`, `skillGroups`)

- [ ] **Step 1: Add `chips` to each resume entry**

- Ledger entry chips: `["Next.js", "TypeScript", "Supabase", "Vitest", "Playwright", "CI"]`
- Boeing entry chips: `["Ada", "C++", "LabVIEW", "Requirements engineering", "Hardware integration", "Stakeholder communication"]`
- Pillar.gg entry chips: `["Python", "Feature engineering", "ML research"]`

- [ ] **Step 2: Reorder `skillGroups` — final order Languages → AI/tooling → Systems → Product**

```ts
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "LabVIEW", "Ada", "C++"],
  },
  {
    label: "AI / tooling",
    items: [
      "Claude API",
      "Agentic workflows",
      "MCP",
      "Prompt engineering",
      "RAG",
      "Custom skills",
    ],
  },
  {
    label: "Systems",
    items: [
      "Legacy modernization",
      "Instrumentation",
      "Requirements engineering",
      "Cross-discipline systems",
    ],
  },
  {
    label: "Product",
    items: ["Architecture", "Testing strategy", "Operator tooling", "Technical writing"],
  },
];
```

- [ ] **Step 3: Run type check**

Run: `npm run check`
Expected: PASS (all required `chips` fields now present).

- [ ] **Step 4: Commit**

```bash
git add src/data/site.ts
git commit -m "content: add chip rows to resume entries, reorder skills"
```

### Task C8: Add `aboutPhilosophy` export

**Files:**
- Modify: `src/data/site.ts` (new export)

- [ ] **Step 1: Add the export**

```ts
export const aboutPhilosophy = {
  heading: "How I think about AI & agentic work",
  body: [
    "The part of frontier AI that holds my attention is the same part that holds my attention in a legacy test system: can the operator trust what it's doing? I spend most of my time building agentic workflows, custom skills, MCP servers, and RAG pipelines — and I spend a lot of the rest helping two organizations adopt these tools without getting burned by them.",
    "My posture is engineer-first. Autonomy is earned, not assumed. A tool that can't explain itself, can't be verified, or can't be safely rolled back isn't ready for production — no matter how impressive the demo. The discipline that makes that real — clear interfaces, small blast radius, honest failure modes — is the same discipline I lean on in hard modernization work.",
    "On the hands-on side: hands on Claude and the major frontier models; hands on MCP, RAG, custom skills, and tool-using agents I actually run day-to-day. On the conceptual side: I'm honest about what I've shipped versus what I've only read about, and I'd rather claim less and demonstrate more.",
  ],
  chips: ["Claude API", "MCP", "RAG", "Agentic workflows", "Prompt engineering", "Custom skills"],
};
```

- [ ] **Step 2: Run type check**

Run: `npm run check`

- [ ] **Step 3: Commit**

```bash
git add src/data/site.ts
git commit -m "content: add aboutPhilosophy subsection"
```

### Task C9: Remove Contact from `navigation`

**Files:**
- Modify: `src/data/site.ts` (`navigation` array)

- [ ] **Step 1: Drop the Contact entry**

```ts
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];
```

- [ ] **Step 2: Run type check**

Run: `npm run check`

- [ ] **Step 3: Commit**

```bash
git add src/data/site.ts
git commit -m "content: drop Contact from navigation"
```

---

## Phase D — Page implementations

Each page gets a clean rewrite against the new data. Start the dev server once; HMR picks up all edits.

### Task D1: Start dev server and capture baseline

- [ ] **Step 1: Start preview**

Run: `preview_start` with the dev command `npm run dev` and working dir `C:\Users\zdm80\zackmeacham`.

- [ ] **Step 2: Navigate to `/`**

Expected: page loads, but content may be broken because index.astro still references removed fields (`homeSupport`, `nowLine`, `featured`). This is expected — we fix in D2.

### Task D2: Rewrite `src/pages/index.astro`

**Files:**
- Modify: `src/pages/index.astro` (full rewrite)

- [ ] **Step 1: Replace the full file with the 7-block home**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ChipRow from "../components/ChipRow.astro";
import SectionBlock from "../components/SectionBlock.astro";
import {
  aiBlock,
  personalProjects,
  professionalBlock,
  proofPoints,
  site,
} from "../data/site";
---

<BaseLayout title={site.title} description={site.description}>
  {/* Block 1 — Identity hero */}
  <section class="hero-band">
    <div class="shell-wide pt-10 pb-14 sm:pb-18">
      <p class="mono-tag mono-tag--accent reveal">{site.roleLabel}</p>
      <h1 class="hero-title reveal reveal-1 mt-5">{site.name}</h1>
      <p class="lead reveal reveal-2 mt-6 max-w-[46ch]">{site.identitySentence}</p>
      <div class="reveal reveal-3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-graphite">
        <a href={site.email} class="link">Email</a>
        <a href="/projects" class="link">View projects</a>
        <a href="/resume" class="link">Open resume</a>
      </div>
    </div>
  </section>

  {/* Block 2 — Proof points */}
  <section class="shell-wide pt-2">
    <div class="proof-grid">
      {proofPoints.map((item) => (
        <div class="proof-item">
          <p class="proof-value">{item.value}</p>
          <p class="proof-label">{item.label}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Block 3 — Professional (Boeing) */}
  <SectionBlock
    eyebrow={professionalBlock.eyebrow}
    heading={professionalBlock.heading}
    body={professionalBlock.body}
    chips={professionalBlock.chips}
    link={professionalBlock.link}
  />

  {/* Block 4 — AI & agentic */}
  <SectionBlock
    eyebrow={aiBlock.eyebrow}
    heading={aiBlock.heading}
    body={aiBlock.body}
    chips={aiBlock.chips}
  />

  {/* Block 5 — Selected personal work */}
  <section class="shell-wide pt-20">
    <div class="flex items-baseline justify-between gap-4">
      <div>
        <p class="mono-tag">Selected personal work</p>
        <h2 class="mt-4 max-w-[18ch]">Systems I've built end-to-end outside the day job.</h2>
      </div>
      <a href="/projects" class="mono link">See all projects</a>
    </div>

    <ol class="project-list mt-8">
      {personalProjects.map((project) => (
        <li class="project-row">
          <div class="project-row-meta">
            <p class="mono-tag">{project.eyebrow}</p>
            <p class="mono">{project.year} · {project.status}</p>
          </div>
          <div class="project-row-body">
            <h3>{project.title}</h3>
            <p class="prose-soft mt-3">{project.summary}</p>
            <p class="prose-soft mt-3 text-sm">{project.notes}</p>
            <ChipRow chips={project.chips ?? project.stack} class="mt-4" />
            <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-graphite">
              {project.detailHref && <a href={project.detailHref} class="link">Read more</a>}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" class="link">GitHub</a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </section>

  {/* Block 6 — About preview */}
  <section class="shell-wide pt-20">
    <div class="flex items-baseline justify-between gap-4">
      <div>
        <p class="mono-tag">About</p>
        <h2 class="mt-4 max-w-[20ch]">How I think about this work.</h2>
      </div>
      <a href="/about" class="mono link">Read more</a>
    </div>
    <p class="prose-soft mt-6 max-w-[65ch]">{site.aboutParagraphs[0]}</p>
  </section>

  {/* Block 7 — Contact */}
  <section class="shell-wide pt-20">
    <div class="closing-band">
      <div>
        <p class="mono-tag">Contact</p>
        <p class="prose-soft mt-4 max-w-[55ch]">{site.contactIntro}</p>
      </div>
      <div class="closing-actions">
        <a href={site.email} class="button-link">Email</a>
      </div>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Type check**

Run: `npm run check`
Expected: PASS.

- [ ] **Step 3: Verify in browser**

Run: `preview_snapshot` on `/`.
Expected: all 7 blocks render, chip rows visible under Boeing and AI blocks, "Read more" + "GitHub" links visible on Milodex card.

Run: `preview_console_logs`. Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): rebuild as 7-block v1 layout"
```

### Task D3: Rewrite `src/pages/projects.astro`

**Files:**
- Modify: `src/pages/projects.astro`

- [ ] **Step 1: Rewrite with grouped professional entry + personal cards**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ChipRow from "../components/ChipRow.astro";
import { personalProjects, professionalBlock, site, workProjects } from "../data/site";
---

<BaseLayout title={`Projects · ${site.name}`} description={site.description}>
  <section class="shell-wide pt-14 pb-24">
    <p class="mono-tag">Projects</p>
    <h1 class="hero-title mt-5 max-w-[22ch]">A mix of professional modernization work and systems I've built end-to-end.</h1>

    {/* Professional work — grouped entry */}
    <section class="mt-16">
      <p class="mono-tag">Professional work</p>
      <h2 class="mt-4 max-w-[22ch]">At Boeing</h2>
      <p class="prose-soft mt-5 max-w-[65ch]">{professionalBlock.body[0]}</p>
      <ChipRow chips={professionalBlock.chips} class="mt-5" />
      <p class="mt-5">
        <a href="/projects/boeing-modernization" class="mono link">Read the synthesis →</a>
      </p>
      <p class="mono mt-4 text-graphite">{site.publicSafeRule}</p>
    </section>

    {/* Personal projects — cards */}
    <section class="mt-16">
      <p class="mono-tag">Personal projects</p>
      <ol class="project-list mt-8">
        {personalProjects.map((project) => (
          <li class="project-row">
            <div class="project-row-meta">
              <p class="mono-tag">{project.eyebrow}</p>
              <p class="mono">{project.year} · {project.status}</p>
            </div>
            <div class="project-row-body">
              <h3>{project.title}</h3>
              <p class="prose-soft mt-3">{project.summary}</p>
              <p class="prose-soft mt-3 text-sm">{project.notes}</p>
              <ChipRow chips={project.chips ?? project.stack} class="mt-4" />
              <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-graphite">
                {project.detailHref && <a href={project.detailHref} class="link">Read more</a>}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" class="link">GitHub</a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Type check**

Run: `npm run check`

- [ ] **Step 3: Verify**

Navigate to `/projects`. Expected: grouped Boeing entry, 3 personal cards with chips.
Run: `preview_console_logs`. Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/projects.astro
git commit -m "feat(projects): grouped professional entry + personal cards with chips"
```

### Task D4: Create `src/pages/projects/[slug].astro`

**Files:**
- Create: `src/pages/projects/[slug].astro`

- [ ] **Step 1: Create the dynamic route**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import ProjectDetailLayout from "../../components/ProjectDetailLayout.astro";
import {
  personalProjects,
  projectDetails,
  site,
  workProjects,
  type Project,
} from "../../data/site";

export function getStaticPaths() {
  const allProjects: Project[] = [...personalProjects, ...workProjects];
  // Add a synthesized entry for the boeing-modernization synthesis page
  // These values drive the rendered hero on /projects/boeing-modernization
  // (eyebrow, title, year, status). They are the final strings, not placeholders.
  const boeingSynthesisProject: Project = {
    slug: "boeing-modernization",
    title: "Modernization at Boeing",
    kind: "work",
    eyebrow: "Boeing · public-safe",
    year: "2022 – present",
    status: "Three concurrent efforts",
    summary: "",
    notes: "",
    stack: [],
  };
  return projectDetails.map((detail) => {
    const project =
      detail.slug === "boeing-modernization"
        ? boeingSynthesisProject
        : allProjects.find((p) => p.slug === detail.slug)!;
    return { params: { slug: detail.slug }, props: { project, detail } };
  });
}

const { project, detail } = Astro.props;
---

<BaseLayout title={`${project.title} · ${site.name}`} description={detail.lead}>
  <ProjectDetailLayout project={project} detail={detail} />
</BaseLayout>
```

- [ ] **Step 2: Type check**

Run: `npm run check`

- [ ] **Step 3: Verify each detail page**

Navigate to `/projects/milodex`, `/projects/ledger`, `/projects/boeing-modernization` in turn.
Run `preview_snapshot` and `preview_console_logs` on each.
Expected: all three render, takeaways list, at-a-glance rows, subsystems with scoped chip rows, closing section, no console errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/projects/[slug].astro
git commit -m "feat(projects): add dynamic detail-page route for flagship projects"
```

### Task D5: Rewrite `src/pages/about.astro`

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Read the current file and review its structure**

Run: `Read` tool on `src/pages/about.astro` so you know what you're replacing.

- [ ] **Step 2: Rewrite with intro + how-I-work + AI philosophy + outside work**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ChipRow from "../components/ChipRow.astro";
import { aboutPhilosophy, site } from "../data/site";
---

<BaseLayout title={`About · ${site.name}`} description={site.description}>
  <section class="shell-wide pt-14 pb-24">
    <p class="mono-tag">About</p>
    <h1 class="hero-title mt-5 max-w-[24ch]">How I think and how I work.</h1>

    {/* Intro */}
    <div class="mt-10 space-y-5 max-w-[65ch]">
      {site.aboutParagraphs.map((p) => <p class="prose-soft">{p}</p>)}
    </div>

    {/* How I work */}
    <section class="mt-16">
      <p class="mono-tag">How I work</p>
      <ul class="mt-6 space-y-4 max-w-[70ch]">
        {site.workingStyle.map((principle) => (
          <li class="prose-soft">{principle}</li>
        ))}
      </ul>
    </section>

    {/* AI philosophy */}
    <section class="mt-16">
      <p class="mono-tag">{aboutPhilosophy.heading}</p>
      <div class="mt-6 space-y-4 max-w-[70ch]">
        {aboutPhilosophy.body.map((p) => <p class="prose-soft">{p}</p>)}
      </div>
      <ChipRow chips={aboutPhilosophy.chips} class="mt-5" />
    </section>

    {/* Outside work */}
    <section class="mt-16">
      <p class="mono-tag">Outside work</p>
      <p class="prose-soft mt-4 max-w-[65ch]">{site.shortPersonal}</p>
    </section>
  </section>
</BaseLayout>
```

- [ ] **Step 3: Type check**

Run: `npm run check`

- [ ] **Step 4: Verify**

Navigate to `/about`. Expected: intro paragraphs, how-I-work bullets, AI philosophy with chip row, outside-work paragraph.

- [ ] **Step 5: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat(about): rebuild as how-I-think page with AI philosophy section"
```

### Task D6: Update `src/pages/resume.astro`

**Files:**
- Modify: `src/pages/resume.astro`

- [ ] **Step 1: Read the current file**

Run: `Read` on `src/pages/resume.astro`.

- [ ] **Step 2: Add `ChipRow` under each experience entry and re-render `skillGroups` (order changes automatically since data changed)**

Find the block that renders each `ResumeEntry` and add, below the bullets:

```astro
<ChipRow chips={entry.chips} class="mt-4" />
```

Import `ChipRow` at top of the file.

Skills section requires no template change — it iterates `skillGroups` and the array order already changed in C7. **Intentional choice:** the Skills section keeps the existing interpuncted-list rendering (`group.items.join(" · ")`), not a `ChipRow`. Chips are reserved for the per-experience rows above. Do not change this.

Keep the existing Save-as-PDF button and print styles unchanged.

- [ ] **Step 3: Type check**

Run: `npm run check`

- [ ] **Step 4: Verify**

Navigate to `/resume`. Expected: chip rows under each experience entry, skill groups in new order (Languages → AI/tooling → Systems → Product), Save-as-PDF still works on click.

Also trigger print preview (Ctrl+P) or test the Save-as-PDF button to confirm the print view still renders cleanly with the chip rows.

- [ ] **Step 5: Commit**

```bash
git add src/pages/resume.astro
git commit -m "feat(resume): add chip rows to entries, reorder skill groups"
```

### Task D7: Delete `src/pages/contact.astro` and audit SiteFooter

**Files:**
- Delete: `src/pages/contact.astro`
- Review: `src/components/SiteFooter.astro`

- [ ] **Step 1: Delete the contact page**

```bash
rm src/pages/contact.astro
```

- [ ] **Step 2: Verify SiteFooter has no `/contact` references**

Run: `grep -n "contact" src/components/SiteFooter.astro` (Grep tool)
Expected: no matches. SiteFooter already renders email + `links` array; no changes needed.

- [ ] **Step 3: Verify no other page links to `/contact`**

Run: `grep -rn "/contact" src/` (Grep tool)
Expected: no matches.

- [ ] **Step 4: Verify build**

Run: `npm run check` then navigate to `/contact`.
Expected: type check passes; `/contact` returns 404.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat(routing): drop /contact page, email CTA lives in footer + home"
```

---

## Phase E — End-to-end verification

### Task E1: Full-site walkthrough

- [ ] **Step 1: Walk every route with `preview_snapshot` and `preview_console_logs`**

Routes to hit:
- `/`
- `/projects`
- `/projects/milodex`
- `/projects/ledger`
- `/projects/boeing-modernization`
- `/about`
- `/resume`

Expected on every route:
- Page renders, no console errors, no broken images.
- Chip rows render where expected.
- No links to `/contact`.
- No Boeing codenames in any rendered content.

- [ ] **Step 2: Grep final sanity check on confidentiality**

Run: `grep -rin "MGS\|GCATS\|Autocollimator" src/` (Grep tool)
Expected: no matches anywhere in the repo.

Run: `grep -rin "ledger\.vote" src/` (Grep tool)
Expected: no matches (v1 ships with no outbound Ledger links until it's public).

- [ ] **Step 3: Resize to mobile and re-verify home**

Run: `preview_resize` to 375×812 and `preview_snapshot` on `/`.
Expected: all blocks stack vertically, readable on mobile.

- [ ] **Step 4: Screenshot for the user**

Run: `preview_screenshot` on `/`, `/projects/milodex`, `/about`, `/resume` for the user to review visually.

### Task E2: Final build

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: build succeeds; no errors, no warnings about unused exports.

- [ ] **Step 2: Handoff**

Leave the dev server running and report:
- Pages visited + screenshots.
- `npm run check` and `npm run build` results.
- Any TODOs or tuning items surfaced during implementation.

---

## Rollback notes

Everything is git-committed per task. To roll back any phase, `git revert` the commits for that phase. `src/pages/contact.astro` can be restored from history if needed.

## Out of scope — explicitly deferred

Per spec §15:
- Blog / writing surface.
- Architecture diagrams on detail pages.
- Dedicated `/ai` page.
- MSM Tracker detail page.
- Analytics, contact form, newsletter, RSS.
- Visual redesign (the `frontend-design` skill may be invoked for component polish on the new `ChipRow` / `SectionBlock` / `ProjectDetailLayout` components if styling feels off during verification — but only for those three new components, not a site-wide restyle).
