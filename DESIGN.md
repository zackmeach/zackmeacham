---
name: zackmeacham.com
description: Engineering-drawing portfolio for a systems + applied-AI software engineer
colors:
  paper: "oklch(0.928 0.022 78)"
  paper-2: "oklch(0.870 0.036 78)"
  paper-3: "oklch(0.802 0.058 78)"
  ink: "oklch(0.198 0.008 60)"
  ink-soft: "oklch(0.398 0.013 55)"
  graphite: "oklch(0.470 0.013 60)"
  rule: "oklch(0.198 0.008 60 / 0.18)"
  accent: "oklch(0.526 0.142 41)"
  accent-soft: "oklch(0.526 0.142 41 / 0.12)"
  chip-bg: "oklch(0.985 0.014 78 / 0.55)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.85rem, 2.15rem + 3vw, 5.2rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.7rem, 1.35rem + 1.1vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.24rem, 1.08rem + 0.5vw, 1.55rem)"
    fontWeight: 600
    lineHeight: 1.16
  lead:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.05rem + 0.55vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  none: "0"
spacing:
  section: "5rem"
  block: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.75rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.75rem"
  chip:
    backgroundColor: "{colors.chip-bg}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "0.28rem 0.6rem"
    typography: "{typography.label}"
---

# Design System: zackmeacham.com

## 1. Overview

**Creative North Star: "The Engineering Drawing"**

This is a portfolio rendered as a precise technical drawing. The page is a drafting sheet: registration marks pin the four corners, a faint coordinate-tick rule runs down the right gutter, a dimension callout annotates the hero, and the footer is a title-block (DRAWN BY / SHEET / REV / CONTACT). Warm cream paper, a single terra-cotta accent, ink-black serif headlines, and monospace annotations. The metaphor is the whole point: this is the work surface of a systems engineer who reads schematics, and it earns the right to an editorial-typographic shape only because the drafting language is genuinely load-bearing, not decorative.

The mood is calm, dense, and exact. It rejects the "AI made this" portfolio aesthetic outright: no gradient text, no glassmorphism, no hero-metric template, no identical icon-heading-text card grids, no dark-mode-with-purple-glow. It also refuses the undifferentiated editorial template it sits next to; the drafting marks are what separate it. Restraint here is intentional and confident, not timid. The surface is the argument: an engineer claiming judgment and taste is showing it in the craft of the page itself.

**Key Characteristics:**
- Warm paper, ink, and one terra-cotta accent (Restrained color strategy)
- Drafting/blueprint signature elements: registration marks, title-block, gutter ticks, dimension callout
- Sharp corners everywhere; zero border-radius
- Flat by default; depth from paper grain, gridlines, and rules, never shadows
- Serif display (Fraunces) over sans body (Plex Sans) with monospace (Plex Mono) annotations

## 2. Colors

A warm, paper-and-ink palette anchored to a single terra-cotta accent. Every neutral is tinted toward the warm hue family (55–80) at low chroma, so nothing reads as pure gray; there is no `#000` or `#fff` anywhere.

### Primary
- **Terra-cotta** (`oklch(0.526 0.142 41)`): the only saturated color. Used for the active-nav dash, the accent eyebrow labels, link hover, text selection, and the hero radial glow. Its scarcity is the point; it never fills a surface.

### Neutral
- **Paper** (`oklch(0.928 0.022 78)`): the base page background, a warm cream. Reinforced by a layered radial-gradient body wash and a fractal-noise multiply overlay for tactile grain.
- **Paper 2 / Paper 3** (`oklch(0.870 0.036 78)` / `oklch(0.802 0.058 78)`): deeper warm tints for incidental layering.
- **Ink** (`oklch(0.198 0.008 60)`): primary text and headlines; also the primary-button fill.
- **Ink Soft** (`oklch(0.398 0.013 55)`): body prose color, softer than headlines for comfortable long-form reading.
- **Graphite** (`oklch(0.470 0.013 60)`): monospace metadata, eyebrows, and secondary annotations.
- **Rule** (`oklch(0.198 0.008 60 / 0.18)`): hairline borders, section dividers, the title-block grid.
- **Chip background** (`oklch(0.985 0.014 78 / 0.55)`): translucent near-white fill for technology chips.

### Named Rules
**The One Accent Rule.** Terra-cotta appears on no more than ~10% of any screen. It marks the single most important thing in a region (active state, accent label, hover) and nothing else. If two things are terra-cotta in one viewport, one is wrong.

**The Tinted-Neutral Rule.** No pure black or white, ever. Every neutral carries chroma 0.005–0.06 in the warm 55–80 hue band. Pure `#000`/`#fff` would break the paper illusion.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** IBM Plex Sans (with ui-sans-serif, system-ui)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace)

**Character:** A high-contrast modern serif for headlines gives editorial authority and warmth; a neutral humanist sans carries body copy without competing; monospace handles the drafting annotations (eyebrows, metadata, the title-block) and supplies the technical-drawing voice. The pairing is the editorial-typographic shape, redeemed by the monospace serving a literal drafting metaphor rather than decoration.

### Hierarchy
- **Display** (Fraunces 600, `clamp(2.85rem, 2.15rem + 3vw, 5.2rem)`, line-height 0.98, tracking -0.025em): page H1 / hero headline. Tight, balanced, set to a short measure (~14–22ch).
- **Headline** (Fraunces 600, `clamp(1.7rem, 1.35rem + 1.1vw, 2.35rem)`, line-height 1.06): section H2s.
- **Title** (Fraunces 600, `clamp(1.24rem, 1.08rem + 0.5vw, 1.55rem)`, line-height 1.16): subsection H3s. Flagship project titles sit one tier above section H2s on the home page (`clamp(1.6rem, 1.3rem + 1.1vw, 2.15rem)`) so the project triad reads as the anchor.
- **Lead** (Plex Sans 400, `clamp(1.15rem, 1.05rem + 0.55vw, 1.55rem)`, line-height 1.45): the thesis sentence under a headline.
- **Body** (Plex Sans 400, `1rem`, line-height 1.72, color Ink Soft): prose. Capped at ~60–72ch measures.
- **Label** (Plex Mono 500, `0.7rem`, tracking 0.12em, UPPERCASE, color Graphite or Accent): eyebrows and section markers. `0.78rem` non-tracked variant for inline metadata.

### Named Rules
**The Annotation Rule.** Monospace is reserved for things a drafter would annotate: eyebrows, metadata, the title-block, dimension labels. It is never used for reading copy. Mono as generic "technical" decoration is forbidden.

**The Short-Measure Headline Rule.** Display headlines wrap at ~14–22ch via `max-width`, never running the full content column. The wrap is part of the composition.

## 4. Elevation

Flat by default. The system uses **no `box-shadow` anywhere**. Depth and surface are conveyed entirely through (1) a multi-stop warm radial-gradient body wash, (2) a fractal-noise SVG overlay at `mix-blend-mode: multiply` that gives the paper a printed grain, (3) a 4.5rem repeating gridline field, and (4) hairline `rule`-colored borders and the right-gutter coordinate ticks. The result reads as ink on textured paper, not as floating Material cards.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift with shadow. If something needs emphasis, it gets the accent, a rule, a heavier weight, or more space, never a drop shadow or a glow. The only "glow" permitted is the diffuse terra-cotta hero radial, which reads as a lighting gradient on paper, not as elevation.

## 5. Components

### Buttons
- **Shape:** Sharp rectangles, zero radius, `min-height: 2.75rem` (44px touch target).
- **Primary:** Ink fill, paper text (`.button-link`). Hover lifts `translateY(-1px)` and mixes 10% accent into the ink fill.
- **Ghost:** Transparent with an ink border (`.button-link--ghost`); hover fills 8% ink tint.
- **Hover / Focus:** Transitions on transform and background only (never layout). Motion is suppressed under `prefers-reduced-motion`.

### Chips
- **Style:** Translucent near-white fill (`chip-bg`), 1px `rule` border, Plex Mono `0.72rem`, Ink Soft text, zero radius. Technology/skill tags.
- **State:** Hover shifts the border toward 55% accent and the text to full Ink. No selected/filter state; chips are display-only.

### Cards / Containers
- **There are effectively no cards.** Content is organized by ruled rows (`.project-row`, `.resume-entry`) and grid lists, separated by hairline `rule` borders, not by elevated card surfaces. This is deliberate: cards would contradict the drafting-sheet metaphor.
- **Internal padding:** Row rhythm ~1.6–2rem vertical; section rhythm `pt-14`/`pt-20`.

### Navigation
- **Style:** Top header, name on the left with a "/ software engineer" mono tag, horizontal text nav on the right in Graphite.
- **Active state:** A short terra-cotta dash drawn via `::after` (1.25rem × 1px) trailing the active item, plus a shift to full Ink. The dash is the only accent in the nav.
- **Mobile:** Header stacks vertically; nav wraps. No hamburger; the link set is small enough to show inline.

### Signature: Drafting Furniture
- **Registration marks** (`.reg-marks`): four 14px corner brackets, fixed, ink at 22% opacity. The frame of the sheet.
- **Title-block footer** (`.title-block`): a 5-cell monospace grid (DRAWN BY / SHEET / REV / CONTACT / LINKS) bordered like a drawing's title-block. SHEET reflects the current path.
- **Gutter ticks** (`.gutter-ticks`): a fixed right-gutter coordinate rule with 5.5rem tick spacing, ink at 12–18%, shown ≥1280px.
- **Dimension callout** (`.dim-callout`): an SVG dimension line with end ticks that draws in on load, labeled `systems · AI · product`, shown ≥1024px. Honors reduced-motion.

## 6. Do's and Don'ts

### Do:
- **Do** keep terra-cotta to ≤10% of any viewport; one accented thing per region.
- **Do** tint every neutral toward the warm 55–80 hue band; chroma 0.005–0.06.
- **Do** convey depth with paper grain, gridlines, rules, and space, never shadow.
- **Do** reserve monospace for drafting annotations (eyebrows, metadata, title-block).
- **Do** keep corners sharp; zero border-radius is a system rule.
- **Do** make the drafting furniture feel load-bearing and intentional; if a mark looks like a sticker, redraw or remove it.
- **Do** cap body measures at ~60–72ch and headline measures at ~14–22ch.
- **Do** honor `prefers-reduced-motion` on every entrance animation and the dimension-callout draw.

### Don't:
- **Don't** use `#000` or `#fff`; pure black/white breaks the paper illusion.
- **Don't** add a second accent color or fill a surface with terra-cotta.
- **Don't** introduce border-radius, drop shadows, or glassmorphism.
- **Don't** use monospace as generic "technical / developer" decoration on reading copy.
- **Don't** add gradient text (`background-clip: text`), hero-metric templates, or identical icon-heading-text card grids; these are the "AI made this" tells this site rejects.
- **Don't** let the editorial-typographic shape stand without the drafting metaphor carrying it; serif headline + mono labels + rules alone is the saturated template to avoid.
- **Don't** animate layout properties; transition transform/opacity/color only.
- **Don't** let the page rely on color alone to convey state (the active-nav dash also shifts weight/ink).
