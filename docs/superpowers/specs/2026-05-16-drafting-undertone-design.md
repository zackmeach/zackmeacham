# zackmeacham.com — drafting-undertone design thesis

**Date:** 2026-05-16
**Status:** Design thesis — awaiting approval
**Owner:** Zack Meacham
**Supersedes:** the "Thesis ⇢ Evidence" context rail (to be demoted/removed)

---

## 1. Thesis (the whole idea, one paragraph)

The site reads typographically strong but kinetically flat. The fix is **not** a flashy widget and **not** filling the wide-layout gutter with a gadget — both fight the engineered restraint that is the site's strongest asset. Instead, apply the *grammar of technical drafting* (registration marks, a faint construction grid, dimension annotation, a title-block footer, gutter coordinate ticks) as a subtle undertone on top of the existing tactile-parchment look — taking the **syntax of drafting without the costume** (no blueprint blue, no schematic diagrams, no exploded views). Done at the right dose, this single move solves three problems at once: it is the controlled-flair moment, it converts the "dead" right-hand space into intentional drafting field, and it signals engineering credibility — without adding a new component.

## 2. Why this, and the deciding tradeoff

Three previously-separate problems (kinetic flatness, dead gutter space, "no reactive/stimulating element") collapse into one thesis. The dosage ceiling is **Spoken**, not **Whisper**, because: *perceptibility is the entire point of flair* — a subliminal-only layer structurally cannot be the thing that makes the site stop reading as dull, so Whisper minimizes a risk Zack does not have (excess) while failing the one he does (blandness). Spoken's only real risk is dosage-creep into costume — and that risk is *enforceable* via a fixed inventory, whereas Whisper's failure is locked in by the choice itself. Rule applied: when forced to choose, take the option whose risk you can engineer away.

## 3. Locked inventory (the ceiling is only real if this list is fixed)

**In — structural whisper layer (always on, subliminal):**
- Faint construction grid beneath the existing paper texture (drafting-vellum feel, printed-on not UI-overlaid).
- Corner registration marks at page / major-section boundaries.
- Footer reworked as a drawing title block (rev / date / sheet).

**In — the two Spoken moments (perceptible on second read only):**
1. **Hero dimension callout that draws in on scroll.** The keystone: first-impression placement, the missing reactive/animated element, distinctive rather than cliché. Reuses the existing `.reveal` motion discipline.
2. **Gutter coordinate ticks** — a faint reference field in the wide-layout right column. Strictly **non-interactive** (any clickability reinvents the failed rail).

**Banned (individually tempting, collectively the costume):**
- Per-section dimension callouts; section reference bubbles; callout leaders on body content.
- Any blueprint blue; any schematic/exploded-diagram imagery.
- Any annotation a first-time visitor consciously registers as a theme.

## 4. Acceptance rule (testable)

Noticed on **second** read, never the first. If a visitor can name "blueprint" as a theme, it is overdosed and something from the Banned list got in. This is the pass/fail gate for the eventual implementation and for any skill-based pressure-test.

## 5. Convergence with prior decisions

- **Hero (Option A):** previously open as "terminal/system artifact." This thesis resolves it — the hero artifact becomes a *drafting spec-sheet* with the dimension callout as its reactive element. This sidesteps the junior-dev-terminal-trope risk and is more parchment-coherent.
- **Context rail:** demoted/removed. Its only non-redundant job was wayfinding; its thesis→evidence *content* role is already carried universally by the Proof strip.
- **Proof strip:** remains the canonical thesis→evidence carrier (already promoted + contrast-hardened, commit `44841a6`). The drafting undertone must not reintroduce a second thesis→evidence content module.

## 6. Non-goals

- No tone/palette shift. Warm paper, ink, terra-cotta accent, IBM Plex Mono, Fraunces all stay. Drafting-ness comes from line + annotation language only, never color.
- No new persistent component, no gutter widget, no scrolljacking.
- No copy or positioning changes. The AI-specialist-vs-broad fork remains a separate, untaken decision.
- No accessibility regression: annotation lines/marks are decorative (`aria-hidden`), never the sole carrier of meaning; contrast floor from `44841a6` preserved.

## 7. Next step

On approval: convert this thesis into an implementation plan (which files, what order, where the grid/marks/callout/title-block live in `global.css` + `index.astro` + layout), then build against the §4 acceptance rule, then pressure-test with one targeted design skill — skill *after* thesis, not before.
