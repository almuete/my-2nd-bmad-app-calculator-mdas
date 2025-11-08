# PRD — Calculator (MDAS) v1

## Goal

Ship a simple on-page calculator supporting Multiplication first (then Division, Addition, Subtraction), optimized for clarity and accessibility.

## Users

- Anyone needing a quick calculation in-browser (desktop + mobile).

## PROJECT OWNER: Product scope, acceptance, and prioritization

- Name/Contact: [Armin Almuete] — [armin.almuete@gmail.com] / [Slack]
- Responsibilities:
  - Defines/updates scope; owns Success Metrics and Out of Scope.
  - Approves Architect output (scope, boundaries, a11y/perf constraints) before Dev runs.
  - Accepts/Rejects stories based on Acceptance Criteria.
  - Prioritizes changes and clarifies ambiguities fast.
- Decision Rights:
  - Final call on scope, UX acceptance, and release readiness.
- Availability:
  - Reviews Architect plan within 24h; story sign-off within 24h of Reviewer pass.
- Gates:
  - PO Approval Gate: After Architect, before Developer.
  - PO Sign-off: After Reviewer, before merge/release.

## SCRUM MASTER: Process, facilitation, and unblocker

- Name/Contact: [Shin Ynalvis] — [shin.ynalvis@gmail.com ] / [Slack]
- Responsibilities:
  - Facilitates standups and reviews; keeps cadence and timelines.
  - Ensures prompts order: Architect → Developer → Reviewer.
  - Clears blockers; enforces a11y/perf checks (axe, no CLS) in reviews.
  - Tracks status and ensures AC are testable and complete.
- Cadence:
  - Standup (15m daily), Architect review (as needed), Review/Sign-off (on completion).
- Escalation:
  - Escalates scope risks to PO; technical risks to Architect/Dev lead.

## Success Metrics

- Multiplication result displays within 100ms on typical devices.
- Zero accessibility violations (axe devtools) on the page.
- Input error rate < 1% (invalid entries handled gracefully).

## Scope (v1)

- Dedicated Calculator page.
- Multiplication operation with two operands (floating point allowed).
- Basic validation and helpful error messages.
- Keyboard-first UX (Tab order, Enter behavior).
- No external persistence.
- Dedicated route `/calculator`; file `app/calculator/page.tsx`.

## Out of Scope (v1)

- History tape, scientific functions, copy-to-clipboard, theming.

## Non-Goals

- Handling arbitrarily large BigInt math (beyond JS Number limits).

## Constraints

- Tech: Next.js App Router, React, TailwindCSS, (optional) shadcn/ui.
- Accessibility: WCAG 2.1 AA; visible focus; labels and live region for result
  (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`), announce
  only when both inputs are valid.
- Performance: No layout shift on input/result; minimal re-rendering; use a
  stable result container height or placeholder to prevent CLS.

## Assumptions (v1)

- Decimals use dot (`.`); no thousands separators in v1.
- Negatives are allowed; multiply normally when finite.
- Numeric parsing: trim, parse with `Number`, accept only finite values.
- Result formatting: display raw `Number` (no localization/rounding in v1).

## Risks

- Floating point precision quirks (document behavior, don’t over-engineer v1).

## Milestones

- M1: Multiplication shipped with tests and a11y checks.

## Acceptance & QA (v1)

- Axe on `/calculator`: 0 critical violations.
- Keyboard-only: tab order, visible focus, operable inputs.
- Perf sanity: result updates without CLS; appears within ~100ms on typical devices.
