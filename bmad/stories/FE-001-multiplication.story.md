# Story: FE-001 — Multiplication (Calculator)

## Context

We are building a simple calculator. This story delivers the Multiplication operation (first of MDAS) on a dedicated Calculator page.

## Goal

Allow a user to enter two numbers and see the product clearly and accessibly.

## Constraints

- Tech: Next.js App Router + React + TailwindCSS.
- Accessibility: Labeled inputs; result announced via polite live region; keyboard focus visible.
- Performance: No CLS on the result; updates within 100ms.
- UX: Accept decimals; handle invalid input gracefully.
- Accessibility (details): Result live region uses role="status", aria-live="polite",
  aria-atomic="true"; announce only when both inputs are valid.
- Number/locale: Decimals use dot (.) with no thousands separators; negatives allowed in v1.

## Acceptance Criteria

- [ ] Two labeled inputs accept numbers (including decimals).
- [ ] Result area updates as inputs change; blank/invalid input shows a neutral placeholder (e.g., “—”).
- [ ] Screen readers announce result changes (aria-live="polite").
- [ ] Keyboard-only users can tab through inputs; focus styles are visible.
- [ ] Basic validation messaging appears for non-numeric input.
- [ ] Axe devtools reports 0 critical a11y violations on the calculator page.
- [ ] Result announcements occur only when both inputs are valid (otherwise show “—” without announcement).
- [ ] Negative numbers are supported and multiply normally when finite.
- [ ] No CLS: result container uses a stable height and/or placeholder “—”.

## Out of Scope

- Other operations (Division, Addition, Subtraction) and history log.

## Dependencies

- Tailwind is configured and working.

## Implementation Steps (high-level, no code here)

1. Create Calculator page shell.
2. Add two number input controls with labels and helper text.
3. Add a result region with polite live updates and placeholder when invalid.
4. Add minimal validation copy for non-numeric input.
5. Add unit/E2E checks for happy path and error handling.
6. Verify a11y (axe) and keyboard navigation.

## Deliverables
