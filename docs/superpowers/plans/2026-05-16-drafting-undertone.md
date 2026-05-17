# Drafting-Undertone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a parchment-native "technical drafting" undertone to zackmeacham.com that fixes its kinetic flatness without adding a widget or shifting tone, and retire the superseded context rail.

**Architecture:** Pure CSS + minimal Astro markup. A subliminal structural layer (construction grid, page-corner registration marks, title-block footer) plus two perceptible "Spoken" moments (a hero dimension callout that draws in on load; a faint gutter coordinate-tick field). All drafting elements are decorative (`aria-hidden`, `pointer-events:none`) and never the sole carrier of meaning. No blueprint blue — drafting-ness comes from line + annotation language only, reusing existing tokens (`--color-rule`, `--color-graphite`, `--color-ink`, `--color-accent`, `--font-mono`) and the existing `.reveal` motion discipline.

**Tech Stack:** Astro 6, Tailwind v4 (CSS-first `@theme`), TypeScript. No test runner exists in this project (`package.json` has no test deps). Verification is therefore: `npx astro check` (types) + `npm run build` (build integrity) + Playwright full-page screenshots at **1440px and 1920px** + the spec's §4 acceptance rule (human-judgable). This is a deliberate, domain-appropriate adaptation of the TDD step format — there is no meaningful unit test for decorative CSS, and faking one would be theater.

**Spec:** `docs/superpowers/specs/2026-05-16-drafting-undertone-design.md` — the locked in/banned inventory in §3 and the acceptance rule in §4 are binding. Re-read them before each task.

**Dev server:** already runs via `npm run dev` on port 4321 (`.claude/launch.json` → "astro dev"). Use the running server for screenshots; do not start a second one.

---

## File Structure

- `src/components/ContextRail.astro` — **deleted** (Task 1).
- `src/pages/index.astro` — remove rail; add hero dimension callout (Task 5).
- `src/pages/work.astro`, `src/pages/work/[slug].astro` — remove rail (Task 1).
- `src/layouts/BaseLayout.astro` — remove `hasRail` plumbing (Task 1); add page-corner registration marks + gutter tick container (Tasks 3, 6).
- `src/components/SiteFooter.astro` — rework into a drawing title block (Task 4).
- `src/styles/global.css` — remove `.context-rail*` + `.main-with-rail` (Task 1); add `.draft-grid`, `.reg-marks`, `.title-block`, `.dim-callout`, `.gutter-ticks` + keyframes (Tasks 2–6).

Each task is independently committable and leaves the site building and visually coherent.

---

## Task 1: Retire the context rail

**Files:**
- Delete: `src/components/ContextRail.astro`
- Modify: `src/pages/index.astro` (remove import, `railItems` const, `<ContextRail>` JSX, `hasRail` prop)
- Modify: `src/pages/work.astro` (same four removals)
- Modify: `src/pages/work/[slug].astro` (same four removals — same pattern as the other two)
- Modify: `src/layouts/BaseLayout.astro` (remove `hasRail` from Props, destructure, and the `main-with-rail` class:list entry)
- Modify: `src/styles/global.css` (delete the `.context-rail*` rules and the `@media (min-width:1500px) .main-with-rail` block, lines ~137–263)

- [ ] **Step 1: Locate every rail touchpoint**

Run: `rg -n "ContextRail|hasRail|railItems|RailItem|context-rail|main-with-rail" src`
Expected: matches in the 5 files above. Use this as the authoritative checklist.

- [ ] **Step 2: Remove rail from `index.astro`**

In `src/pages/index.astro`: delete the `import ContextRail, { type RailItem } ...` line; delete the entire `const railItems: RailItem[] = [ ... ];` block; delete the `<ContextRail ... />` element; change `<BaseLayout title={site.title} description={site.description} hasRail>` to remove the `hasRail` attribute.

- [ ] **Step 3: Remove rail from `work.astro` and `work/[slug].astro`**

Apply the identical four removals (import, `railItems` const, `<ContextRail>` JSX, `hasRail` attribute) to both files.

- [ ] **Step 4: Remove `hasRail` plumbing from `BaseLayout.astro`**

Remove `hasRail?: boolean;` from `Props`; remove `hasRail = false` from the destructure; change `class:list={["pb-24", { "main-with-rail": hasRail }]}` to `class:list={["pb-24"]}`.

- [ ] **Step 5: Delete the component and its CSS**

Delete `src/components/ContextRail.astro`. In `src/styles/global.css` delete every `.context-rail*` rule and the entire `@media (min-width: 1500px) { .main-with-rail ... }` block (including the nested `.context-rail__*` rules and the `prefers-reduced-motion` block that targets `.context-rail__link`).

- [ ] **Step 6: Verify build + types**

Run: `npx astro check` then `npm run build`
Expected: both succeed, zero errors, no remaining reference to `ContextRail`/`hasRail`/`context-rail`.

- [ ] **Step 7: Visual no-regression check**

Use the running dev server. Playwright: screenshot `http://localhost:4321/`, `/work`, `/work/ledger` at viewport **1440** and **1920**, full page.
Expected: pages render, no rail present at any width, no layout collapse, content is the centered shell as before. Save to `screenshots/t1-{page}-{width}.png`.

- [ ] **Step 8: Commit**

```bash
git add src/pages/index.astro src/pages/work.astro "src/pages/work/[slug].astro" src/layouts/BaseLayout.astro src/styles/global.css
git rm src/components/ContextRail.astro
git commit -m "refactor(site): retire superseded context rail"
```

---

## Task 2: Construction grid under the paper texture (structural whisper 1/3)

**Files:**
- Modify: `src/styles/global.css` (`@layer base`, `body` background)

- [ ] **Step 1: Add the grid as the topmost background layer on `body`**

In `src/styles/global.css`, in the `@layer base` `body` rule, change `background: var(--body-bg);` to:

```css
    background:
      repeating-linear-gradient(
        to right,
        color-mix(in oklch, var(--color-ink) 4%, transparent) 0 1px,
        transparent 1px 4.5rem
      ),
      repeating-linear-gradient(
        to bottom,
        color-mix(in oklch, var(--color-ink) 4%, transparent) 0 1px,
        transparent 1px 4.5rem
      ),
      var(--body-bg);
    background-attachment: fixed, fixed, scroll;
```

Rationale: grid sits above the gradient but the existing `body::before` noise (`multiply`, opacity .62) still overlays and breaks it up, so it reads as printed-on vellum, not a UI overlay. 4% ink alpha + 4.5rem cell = subliminal.

- [ ] **Step 2: Verify build**

Run: `npx astro check && npm run build`
Expected: success.

- [ ] **Step 3: Acceptance check (§4 rule)**

Playwright screenshot `http://localhost:4321/` at 1440 and 1920, full page. Save `screenshots/t2-home-{width}.png`.
Expected: at a normal glance the page looks unchanged; the grid is only detectable on deliberate close inspection. If it is noticeable at a glance, reduce ink alpha to 3% and re-check. **Fail condition:** grid reads as a visible UI element.

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "feat(site): add subliminal construction grid under paper"
```

---

## Task 3: Page-corner registration marks (structural whisper 2/3)

**Files:**
- Modify: `src/layouts/BaseLayout.astro` (add decorative element inside `<body>`)
- Modify: `src/styles/global.css` (`@layer components`, new `.reg-marks`)

Scope note: page corners only. Per-section registration marks are **banned** by spec §3 (dosage). Do not add them.

- [ ] **Step 1: Add the decorative element**

In `src/layouts/BaseLayout.astro`, immediately after `<body>` and before `<SiteHeader ... />`, add:

```astro
    <div class="reg-marks" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </div>
```

- [ ] **Step 2: Add styles**

In `src/styles/global.css` `@layer components`, add:

```css
  .reg-marks {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .reg-marks > span {
    position: absolute;
    width: 14px;
    height: 14px;
    border-color: color-mix(in oklch, var(--color-ink) 22%, transparent);
    border-style: solid;
    border-width: 0;
  }

  .reg-marks > span:nth-child(1) { top: 18px; left: 18px; border-top-width: 1px; border-left-width: 1px; }
  .reg-marks > span:nth-child(2) { top: 18px; right: 18px; border-top-width: 1px; border-right-width: 1px; }
  .reg-marks > span:nth-child(3) { bottom: 18px; left: 18px; border-bottom-width: 1px; border-left-width: 1px; }
  .reg-marks > span:nth-child(4) { bottom: 18px; right: 18px; border-bottom-width: 1px; border-right-width: 1px; }

  @media print {
    .reg-marks { display: none; }
  }
```

Note: `z-index:0` keeps marks behind content (`body > *` is `z-index:1`); fixed so they frame the viewport like crop marks.

- [ ] **Step 3: Verify build**

Run: `npx astro check && npm run build`
Expected: success.

- [ ] **Step 4: Acceptance check**

Playwright screenshot `/` and `/about` at 1440 and 1920. Save `screenshots/t3-{page}-{width}.png`.
Expected: faint L-brackets frame the four viewport corners; read as "drafted," not noticed as UI on first glance. **Fail:** marks overlap/obscure content or read as a decorative border.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/BaseLayout.astro src/styles/global.css
git commit -m "feat(site): add page-corner registration marks"
```

---

## Task 4: Title-block footer (structural whisper 3/3)

**Files:**
- Modify: `src/components/SiteFooter.astro` (rework inner markup)
- Modify: `src/styles/global.css` (`@layer components`, new `.title-block`)

- [ ] **Step 1: Read current footer**

Run: `cat src/components/SiteFooter.astro`
Note the current links/content so nothing functional (email/social) is lost.

- [ ] **Step 2: Rework into a drawing title block**

Replace the footer's inner layout with a hairline-ruled title block. Preserve any existing email/social links by placing them in the first cell. Use this structure (adapt cell contents to the real values already in `site` from `../data/site`):

```astro
<footer class="title-block" aria-label="Site footer">
  <div class="title-block__cell title-block__cell--wide">
    <span class="title-block__k">DRAWN BY</span>
    <span class="title-block__v">{site.name}</span>
  </div>
  <div class="title-block__cell">
    <span class="title-block__k">SHEET</span>
    <span class="title-block__v">{Astro.url.pathname === "/" ? "00 · HOME" : Astro.url.pathname.replace(/^\//, "").toUpperCase()}</span>
  </div>
  <div class="title-block__cell">
    <span class="title-block__k">REV</span>
    <span class="title-block__v">{new Date().getFullYear()}</span>
  </div>
  <div class="title-block__cell">
    <span class="title-block__k">CONTACT</span>
    <a class="title-block__v link" href={site.email}>{site.emailDisplay}</a>
  </div>
</footer>
```

If `SiteFooter.astro` does not already import `site`, add `import { site } from "../data/site";` to its frontmatter. Keep values honest — no invented part numbers.

- [ ] **Step 3: Add styles**

In `src/styles/global.css` `@layer components`, add:

```css
  .title-block {
    display: grid;
    grid-template-columns: 1fr;
    border-top: 1px solid var(--color-rule);
    font-family: var(--font-mono);
  }

  .title-block__cell {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.9rem 1.1rem;
    border-bottom: 1px solid var(--color-rule);
  }

  .title-block__k {
    font-size: 0.6rem;
    letter-spacing: 0.16em;
    color: var(--color-graphite);
  }

  .title-block__v {
    font-size: 0.8rem;
    color: var(--color-ink);
  }

  @media (min-width: 768px) {
    .title-block {
      grid-template-columns: 2fr 1fr 1fr 1.4fr;
    }
    .title-block__cell + .title-block__cell {
      border-left: 1px solid var(--color-rule);
    }
    .title-block__cell { border-bottom: 0; }
  }
```

- [ ] **Step 4: Verify build**

Run: `npx astro check && npm run build`
Expected: success; footer email link still present and correct.

- [ ] **Step 5: Acceptance check**

Playwright screenshot footer area of `/` and `/resume` at 1440. Save `screenshots/t4-{page}.png`.
Expected: footer reads as a drafting title block (ruled cells, mono keys); contact link works; no fake data. **Fail:** looks like a generic footer or invents part/drawing numbers.

- [ ] **Step 6: Commit**

```bash
git add src/components/SiteFooter.astro src/styles/global.css
git commit -m "feat(site): rework footer as drawing title block"
```

---

## Task 5: Hero dimension callout (Spoken moment 1/2 — keystone)

**Files:**
- Modify: `src/pages/index.astro` (hero section markup)
- Modify: `src/styles/global.css` (`@layer components`, `.dim-callout` + keyframes)

- [ ] **Step 1: Add the callout markup**

In `src/pages/index.astro`, inside the hero `<section class="hero-band">` `<div class="shell-wide ...">`, after the CTA `<div>` and before `</div>`, add a decorative vertical dimension annotation of the hero block:

```astro
      <svg class="dim-callout" aria-hidden="true" viewBox="0 0 60 200" preserveAspectRatio="none" focusable="false">
        <line class="dim-callout__line" x1="30" y1="4" x2="30" y2="196" />
        <line class="dim-callout__tick" x1="22" y1="4" x2="38" y2="4" />
        <line class="dim-callout__tick" x1="22" y1="196" x2="38" y2="196" />
      </svg>
      <span class="dim-callout__label" aria-hidden="true">systems · AI · product</span>
```

(The label text restates the breadth thesis as a "measured" annotation. Keep it to ≤4 short tokens.)

- [ ] **Step 2: Add styles + draw-in animation (reuse `.reveal` discipline)**

In `src/styles/global.css` `@layer components`, add:

```css
  .hero-band > .shell-wide { position: relative; }

  .dim-callout {
    position: absolute;
    top: 2.5rem;
    right: 1.5rem;
    width: 34px;
    height: clamp(7rem, 16vw, 11rem);
    overflow: visible;
  }

  .dim-callout line {
    stroke: color-mix(in oklch, var(--color-ink) 30%, transparent);
    stroke-width: 1;
  }

  .dim-callout__line {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: dim-draw 900ms cubic-bezier(0.2, 0.7, 0.2, 1) 360ms forwards;
  }

  .dim-callout__label {
    position: absolute;
    top: calc(2.5rem + clamp(7rem, 16vw, 11rem) + 0.5rem);
    right: 0.4rem;
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-graphite);
    opacity: 0;
    animation: dim-fade 600ms ease 1100ms forwards;
  }

  @keyframes dim-draw { to { stroke-dashoffset: 0; } }
  @keyframes dim-fade { to { opacity: 1; } }

  @media (max-width: 1023px) {
    .dim-callout, .dim-callout__label { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .dim-callout__line { animation: none; stroke-dashoffset: 0; }
    .dim-callout__label { animation: none; opacity: 1; }
  }

  @media print {
    .dim-callout, .dim-callout__label { display: none; }
  }
```

Rationale: present and animated at desktop widths (≥1024px) where the hero has room — NOT gated to ≥1500px (the rail's fatal mistake); hidden on narrow where it would crowd the headline (decorative, no info lost). Reduced-motion shows the final state instantly, matching the existing `.reveal` pattern.

- [ ] **Step 3: Verify build**

Run: `npx astro check && npm run build`
Expected: success.

- [ ] **Step 4: Acceptance check**

Playwright: load `http://localhost:4321/`, screenshot full page at **1920**, **1440**, and **1280**, plus **390** (mobile). Save `screenshots/t5-home-{width}.png`.
Expected: at ≥1024 a faint dimension line + end ticks + mono label sits to the right of the hero and reads as a measured annotation of the headline block; absent and harmless at 390. On a fresh load the line draws in then the label fades (verify via a second screenshot ~1.5s after load, or accept the static end-state). **Fail:** reads as decoration unrelated to the content, crowds the headline, or appears only at ≥1500.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro src/styles/global.css
git commit -m "feat(site): add hero dimension callout that draws in"
```

---

## Task 6: Gutter coordinate ticks (Spoken moment 2/2)

**Files:**
- Modify: `src/layouts/BaseLayout.astro` (add decorative container)
- Modify: `src/styles/global.css` (`@layer components`, `.gutter-ticks`)

Scope note: strictly non-interactive and `aria-hidden`. Any clickability reinvents the failed rail — **banned**.

- [ ] **Step 1: Add the container**

In `src/layouts/BaseLayout.astro`, after the `.reg-marks` div from Task 3, add:

```astro
    <div class="gutter-ticks" aria-hidden="true"></div>
```

- [ ] **Step 2: Add styles (ticks generated in CSS, no markup per tick)**

In `src/styles/global.css` `@layer components`, add:

```css
  .gutter-ticks { display: none; }

  @media (min-width: 1280px) {
    .gutter-ticks {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      right: max(1.5rem, calc((100vw - 89rem) / 2 + 1.2rem));
      width: 1px;
      z-index: 0;
      pointer-events: none;
      background: color-mix(in oklch, var(--color-ink) 12%, transparent);
      -webkit-mask-image: repeating-linear-gradient(
        to bottom, #000 0 1px, transparent 1px 5.5rem
      );
      mask-image: repeating-linear-gradient(
        to bottom, #000 0 1px, transparent 1px 5.5rem
      );
    }

    .gutter-ticks::before {
      content: "";
      position: fixed;
      top: 0;
      bottom: 0;
      right: max(1.5rem, calc((100vw - 89rem) / 2 + 1.2rem));
      width: 7px;
      transform: translateX(7px);
      background: color-mix(in oklch, var(--color-ink) 18%, transparent);
      -webkit-mask-image: repeating-linear-gradient(
        to bottom, #000 0 1px, transparent 1px 5.5rem
      );
      mask-image: repeating-linear-gradient(
        to bottom, #000 0 1px, transparent 1px 5.5rem
      );
    }
  }

  @media print { .gutter-ticks { display: none; } }
```

Rationale: a faint fixed reference rule with short tick marks in the right gutter, only where the layout actually has margin (≥1280px). Decorative-only, so absence at narrow widths loses no information (the rail's failure was that it carried meaning and vanished).

- [ ] **Step 3: Verify build**

Run: `npx astro check && npm run build`
Expected: success.

- [ ] **Step 4: Acceptance check**

Playwright screenshot `/` and `/work` full page at **1920**, **1440**, **1280**, **1024**. Save `screenshots/t6-{page}-{width}.png`.
Expected: a faint ticked reference line sits in the right gutter at ≥1280, reads as drafting reference field; absent ≤1024 with no visual hole. **Fail:** ticks read as a scrollbar/UI affordance, look interactive, or collide with content.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/BaseLayout.astro src/styles/global.css
git commit -m "feat(site): add faint gutter coordinate-tick field"
```

---

## Task 7: Whole-system acceptance pass

**Files:** none modified unless a defect is found.

- [ ] **Step 1: Full screenshot sweep**

Playwright full-page screenshots of all 7 routes (`/`, `/work`, `/work/ledger`, `/work/boeing`, `/work/milodex`, `/resume`, `/about`) at **1440** and the home also at **1920** and **390**. Overwrite the canonical set `screenshots/01-home.png … 07-about.png` (1440) and add `screenshots/home-1920.png`, `screenshots/home-390.png`.

- [ ] **Step 2: Apply spec §4 acceptance rule**

For each screenshot, judge against the spec's binding rule: *noticed on second read, never the first; if the "blueprint" theme is consciously registered, it is overdosed.* Confirm none of the §3 Banned items are present (no per-section callouts, no reference bubbles, no blueprint blue, no body-content leaders).
Expected: PASS. If any page fails, fix the offending element's dosage (reduce alpha / remove the element) and re-run from the relevant task's commit.

- [ ] **Step 3: Contrast + a11y floor preserved**

Confirm: every drafting element is `aria-hidden`/decorative and adds no text that must meet contrast; the graphite text contrast from commit `44841a6` is unchanged (no token edits in this plan). Run `npx astro check && npm run build` once more clean.
Expected: no a11y regression; build clean.

- [ ] **Step 4: Final commit (only if Step 2/3 required code fixes)**

```bash
git add -A
git commit -m "fix(site): tune drafting-undertone dosage to acceptance rule"
```

If no fixes were needed, skip — screenshots are gitignored, nothing to commit.

---

## Done = 

All 7 tasks committed; `npm run build` + `npx astro check` clean; the spec §4 acceptance rule passes on all 7 pages at 1440 (plus home at 1920/390); rail fully gone; no §3 Banned element present; contrast floor from `44841a6` intact. Deploy (push to `main`) remains a separate, deliberate decision.
