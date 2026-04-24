# zackmeacham.com — v1 content buildout

**Date:** 2026-04-23
**Status:** Design approved; awaiting implementation plan
**Owner:** Zack Meacham
**Source content:** `C:\Users\zdm80\OneDrive\Desktop\temp\zackmeacham.md` (private profile doc)

---

## 1. Goal

Rebuild the public content of [zackmeacham.com](https://zackmeacham.com) into a v1 that effectively frames Zack to hiring managers and engineering peers — with Applied AI / ML Engineer as the strongest target, and broader software / systems / platform / product roles as the supporting target.

The current site is scaffolded well (Astro + Tailwind, typed single-source content in [site.ts](../../../src/data/site.ts), 5 pages) but the content is thin relative to the profile doc and does not yet tell a coherent story for the dual audience.

## 2. Non-goals

- No visual redesign. The current design language (type hierarchy, color, layout) stays. Visual refinements to new components will be handled during implementation using the `frontend-design` skill.
- No CMS, no Markdown content collections, no content split across many files. v1 keeps a single `site.ts` source of truth.
- No blog / writing page. Deferred to post-v1.
- No analytics, no contact form, no newsletter. Email CTA only.
- No per-role variants / no personalization. One site, one pitch, room for multiple roles.

## 3. Audience & positioning

**Dual audience:**
- **Hiring managers** who skim top-to-bottom and click Resume.
- **Engineering peers** who click Projects and want depth.

**Target roles:**
- **Primary:** Applied AI / ML Engineer.
- **Secondary:** broader software / systems / modernization / platform / product engineering.

**Register on job-seeking:** indirect. Copy must NOT narrow to AI/ML only and must NOT include explicit "open to X role" CTAs. Direction is implied by content, never stated.

**Positioning sentence (first cut, tunable during implementation):**
> "Software engineer focused on legacy modernization, agentic-AI tooling, and product-minded systems that hold up under real constraints."

## 4. Confidentiality guardrails (strict)

Per `~/.claude/.../memory/feedback_site_confidentiality.md`:

- **Off-limits, always:** internal Boeing codenames — `MGS Testing Suite`, `GCATS`, `Autocollimator`. Use descriptive phrasing on public surfaces.
- **Allowed only if fully untethered from a program:** rough dollar figures (e.g., the ~$5M figure). When in doubt, omit.
- **Off-limits:** specific station counts and team sizes for active Boeing projects.
- **Family details:** restricted to Sarah (wife) and Milo (dog) on the public site. No parents, siblings, in-laws, residence history, or relationship history.

All Boeing-derived content must pass the `publicSafeRule` already present in `site.ts`.

## 5. Information architecture

**4 pages** (down from 5):

| Route | Purpose | Primary audience |
|---|---|---|
| `/` | One-scroll pitch: identity → proof points → Boeing → AI → personal projects → about preview → contact | All |
| `/projects` | Index: professional work (grouped) + personal projects (cards) | Peers |
| `/projects/[slug]` | 3 flagship detail pages: `milodex`, `ledger`, `boeing-modernization` | Peers |
| `/about` | "How I think, how I work, what I'm growing into" — not a résumé repeat | Hiring managers doing culture/fit read |
| `/resume` | Canonical credentials + print-friendly Save-as-PDF | Recruiters, hiring managers |

**Dropped:** `/contact` (replaced by a contact block at the bottom of Home + email link in the global footer).

**Navigation order:** Home · Projects · About · Resume.

## 6. Cross-cutting patterns

### 6.1 Per-section tech chips

Every meaningful content block is accompanied by a row of tech / skill chips scoped to *that specific block* — not a global skills dump. This includes:
- Homepage blocks (Professional, AI, personal project cards).
- Each resume experience entry.
- Each project card on `/projects`.
- Each subsystem within a project detail page.

Rendered by a single shared `ChipRow` component. Consistent styling; no per-instance overrides.

### 6.2 Single source of truth

All site content lives in [src/data/site.ts](../../../src/data/site.ts). No per-project files, no Markdown collection, no MDX. Changes reviewable as a single diff. If v1.1 introduces writing/notes, that is the point to consider a content collection.

### 6.3 Public-safe rule

The existing `publicSafeRule` sentence in `site.ts` stays and is surfaced on the `/projects/boeing-modernization` detail page as a short trust-signal note.

## 7. Home page — block-by-block

1. **Identity hero.** Name, role label, location, positioning sentence, primary email CTA, secondary links (GitHub, LinkedIn, Ledger). Replaces the current `homeSupport` + `nowLine` duplication with a single sentence that does more work.
2. **Proof points.** Keep the 4-card grid. Swap `"2022 start year"` for an AI-adoption proof point (candidate wording: *"Primary internal AI-adoption resource across 2 orgs"*). Final wording during implementation.
3. **Professional work (Boeing).** Single cohesive block titled *"At Boeing"* (or similar). 2–3 sentences summarizing scope (three modernization efforts spanning software, systems, instrumentation) + chip row + link to `/projects/boeing-modernization`. **No codenames.**
4. **AI & Agentic Engineering.** 2–3 sentences covering what Zack builds hands-on (agentic workflows, custom skills, RAG), what he leads (adoption across two orgs), and how he thinks about it (operator trust, safety, truthfulness). Chip row: `Claude API · MCP · RAG · Agentic workflows · Prompt engineering · Custom skills`. No separate page in v1.
5. **Selected personal work.** Three cards in order: **Milodex → Ledger → MSM Tracker**. Each with eyebrow, title, 1-sentence pitch, chip row, link. Milodex + Ledger link to detail pages; MSM links to GitHub.
6. **About preview.** 2-sentence teaser + link → `/about`.
7. **Contact block.** Short intro + email CTA + GitHub / LinkedIn links. Mirrors the site footer content so every page carries a contact surface.

## 8. `/projects` — the index

- **Page intro** (1 sentence).
- **Section 1: Professional work.** Single grouped entry for Boeing modernization with chip row, public-safe-rule note, and link to the synthesis detail page. Not three cards.
- **Section 2: Personal projects.** Cards in order Milodex → Ledger → MSM Tracker. Each card: eyebrow, title, year/status, 2-sentence summary, chip row, `→ Read more` (to detail page) or `→ GitHub` (external) link.

## 9. `/about` — "how I think"

- **Intro** (~3 tuned paragraphs). Kent State → Boeing → side projects arc, sharpened around the through-line: *careful technical decisions under real constraints*.
- **How I work.** 3–5 short principles derived from `workingStyle` but punched up (e.g., *Depth before noise. Architecture with a purpose. Calm ownership. Public-safe storytelling.*).
- **AI philosophy subsection (new).** 2–3 paragraphs on operator trust, verifiable behavior, the "autonomy is earned" mindset (see Milodex), and how Zack uses AI day-to-day as a force multiplier. This is the deeper version of the homepage AI block.
- **Outside work.** One short paragraph. Sarah, Milo, Ohio, sports, falls-asleep-to-explainers. Nothing else.

**Cut:** anything that restates what the homepage says.

## 10. `/resume` — canonical credentials

- **Summary.** 2 sentences, retuned to match the new positioning.
- **Experience.** Ledger (CTO), Boeing (role progression, no codenames), Pillar.gg (volunteer). Bullets refined; chip row under each entry (new).
- **Education.** Kent State entry, tightened wording.
- **Skills.** Grouped as today but reordered so AI / tooling sits 2nd (differentiator). Final order: **Languages → AI / tooling → Systems → Product.** Items slightly expanded.
- **Save-as-PDF button.** Unchanged.

## 11. Project detail pages

### 11.1 Shared template

```
HERO        eyebrow · H1 title · lead sentence · top-level chip row · optional inline links
TAKEAWAYS   3–5 bullets, bold-phrase-first style
AT A GLANCE 2-col key/value (Scope, Stack, Links, etc.)
WHAT I BUILT
  - Subsystem 1 (title, 2–4 sentences, scoped chip row)
  - Subsystem 2 (…)
  - Subsystem 3 (…)
WHAT I LEARNED / WHAT'S NEXT   2–4 sentences, honest, no gap-dumping
```

**Rules:**
- Each subsystem heading is a scan anchor.
- Chip rows ≤ ~8 chips per row.
- No prose block exceeds ~120 words. If it does, split into another subsystem or cut.

### 11.2 `/projects/milodex`

- **Lead:** *"A research-first autonomous trading platform where autonomy is earned, not assumed."*
- **Takeaways (3):** Architecture-first; Risk has veto power; Operator-safe by design.
- **Subsystems:** (1) Broker abstraction & market-data pipeline — `Python · Alpaca · Parquet`. (2) Risk-gated execution layer — `Python · gating rules · reversibility`. (3) Operator CLI & test harness — `Python · CLI · pytest`.
- **Links:** GitHub ([zackmeach/Milodex](https://github.com/zackmeach/Milodex)).

### 11.3 `/projects/ledger`

- **Lead:** *"A civic-tech product focused on making politics more legible at the local, state, and federal level."*
- **Takeaways (3):** Provenance-first; Modern stack with disciplined boundaries; Built to ship & stay shipped.
- **Subsystems:** (1) Frontend UX & provenance flows — `Next.js · React · TypeScript · Tailwind`. (2) Data contracts & backend — `Supabase · Upstash · TypeScript`. (3) Testing & CI — `Vitest · Playwright · GitHub Actions`.
- **Status:** "Launch-stage; live URL coming soon." **No outbound Ledger links anywhere on the site in v1** — the Ledger entry is removed from the global `links` array, and the Ledger detail page does not link to `ledger.vote`. The outbound link returns in v1.1 the moment Ledger goes publicly live.

### 11.4 `/projects/boeing-modernization` (synthesis, public-safe)

- **Lead:** *"Three modernization efforts across high-stakes test infrastructure — one originated, one led, one built from scratch."*
- **Takeaways (3):** Originated a program-level effort; Led legacy instrumentation modernization; Shipped calibration software from zero to production.
- **Subsystems (public-safe descriptions, no codenames):**
  1. Flagship test-suite overhaul (originator) — `Ada · Requirements engineering · Stakeholder communication`.
  2. Legacy instrumentation overhaul (lead SWE) — `LabVIEW · C++ · Hardware integration`.
  3. Calibration-equipment software suite (from scratch) — `LabVIEW · Real-time behavior · Instrumentation`.
- **Public-safe note** rendered at the bottom as a short trust signal.

## 12. Data model changes

All in `src/data/site.ts`. Additions and extensions only; nothing currently exported is removed except `shortPersonal` may be trimmed.

### 12.1 New types

```ts
export type Chip = string;

export type Subsystem = {
  title: string;
  description: string;   // ≤ ~120 words
  chips: Chip[];
};

export type Takeaway = {
  lead: string;  // bold phrase, e.g. "Architecture-first"
  body: string;  // remainder of sentence
};

export type GlanceRow = {
  label: string; // "Scope", "Stack", "Links", ...
  value: string; // plain text; inline links allowed via site-specific markup
};

export type ProjectDetail = {
  slug: string;          // must match a Project.slug
  lead: string;
  topChips: Chip[];
  takeaways: Takeaway[];
  glance: GlanceRow[];
  subsystems: Subsystem[];
  closing: { heading: string; body: string };
  publicSafeNote?: string;
};
```

### 12.2 Extensions to existing types

```ts
export type ResumeEntry = {
  // existing fields...
  chips: Chip[]; // new, required
};

export type Project = {
  // existing fields...
  chips?: Chip[];      // supplements `stack` for display
  detailHref?: string; // presence enables "Read more" link
};
```

### 12.3 New top-level exports

- `professionalBlock` — content for home block 3.
- `aiBlock` — content for home block 4.
- `projectDetails: ProjectDetail[]` — entries for milodex, ledger, boeing-modernization.
- `aboutPhilosophy` — content for the `/about` AI philosophy subsection.

### 12.4 Page → data wiring

| Page | Reads |
|---|---|
| `/` | `site`, `proofPoints`, `professionalBlock`, `aiBlock`, `featured`, `personalProjects` (Milodex, Ledger, MSM), contact fields |
| `/projects` | `workProjects` (grouped into one professional entry), `personalProjects` |
| `/projects/[slug]` | `projectDetails` lookup + matching `Project` for eyebrow/title/status |
| `/about` | `site.aboutParagraphs`, `workingStyle`, `aboutPhilosophy`, `shortPersonal` |
| `/resume` | `site.resumeSummary`, `resumeEntries`, `educationEntries`, `skillGroups` |

## 13. Components

### 13.1 New components

- **`ChipRow.astro`** — renders a `Chip[]` as a single row with consistent styling. Single source of truth for chip appearance across the site.
- **`ProjectDetailLayout.astro`** — implements the project detail template (section 11.1). Takes a `ProjectDetail` + the matching `Project` meta.
- **`SectionBlock.astro`** — homepage block wrapper (heading + prose + optional chips + optional link). Used by the Professional and AI blocks on Home. May also be reused on About.

### 13.2 Reused components

- `SectionHeading.astro`, `SiteHeader.astro`, `SiteFooter.astro` — unchanged.

### 13.3 Routing & cleanup

- New dynamic route: `src/pages/projects/[slug].astro` using Astro's `getStaticPaths`, sourced from `projectDetails`.
- `src/pages/contact.astro` **deleted**. `navigation` array in `site.ts` updated to drop the Contact entry.
- `SiteFooter.astro` audited and any `/contact` references removed or replaced with the email CTA.
- The existing `featured` export (currently Ledger) is **folded into `personalProjects`** — Ledger appears as the second card in the Milodex → Ledger → MSM ordering. The standalone `featured` export is removed to avoid a dead surface.

## 14. Content sourcing plan

All prose is first-drafted by the implementer (AI-assisted, Zack-edited) from the private profile doc, with the confidentiality filter applied:

| Block | Source section(s) in profile doc | Filter |
|---|---|---|
| Identity + proof points | §1, §2, §7 | Standard |
| Professional (home + detail) | §7.4 Active Projects, §7.5 Tech Stack, §7 Recognition | **No codenames**, no station counts |
| AI block (home + about subsection) | §7.6 AI adoption, §7.8 Agentic capabilities | Standard |
| Personal projects | §7.7 Ledger / Milodex / MSM | Standard |
| About intro + working style | §2, §3, §7 | Standard |
| Resume entries | §6 Education, §7 Career | **No codenames** |
| Short personal line | §3, §4.1, §4.7, §8 | Sarah + Milo only |

## 15. Out of scope for v1 (explicit)

- Blog / notes / writing surface.
- Diagrams or architecture sketches on detail pages (Option C from brainstorming). Candidate for v1.1 on Milodex specifically.
- Dedicated `/ai` page.
- MSM Tracker detail page.
- Analytics, contact form, newsletter, RSS.
- Visual redesign of the existing design language.

## 16. Success criteria

- A hiring manager can scan the homepage in 30 seconds and come away knowing: what Zack does, where he works, what he's built, and that AI/agentic is a real part of the practice.
- An engineering peer can land on `/projects/milodex` or `/projects/boeing-modernization` and read enough substantive detail — with scoped tech chips — to form a real opinion on technical depth.
- No content on the site includes a Boeing codename, a traceable program-to-figure attribution, or private family context.
- The entire site content is readable as a single diff against [site.ts](../../../src/data/site.ts) (plus a small number of new / modified templates).

## 17. Open questions (to resolve during implementation)

- Final positioning sentence wording.
- Final proof-point copy (AI-adoption replacement line).
- Exact chip lists per subsystem (drafted in this spec; subject to final tuning).
- Whether the homepage "About preview" is 1 or 2 sentences.
