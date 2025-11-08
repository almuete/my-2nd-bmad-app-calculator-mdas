# Story: FE-002 — Calculator UI (Numpad + Display) — Multiplication Only

## Context

Refactor the calculator to look and behave like a basic handheld calculator UI: display, keypad, and core controls. Only Multiplication is supported in this version.

## Goal

Provide a keypad-driven UX with a display, supporting entry of two operands and computing the product when the user presses equals.

## Constraints

- Tech: Next.js App Router + React + TailwindCSS.
- Accessibility: All buttons labeled; focus visible; logical tab order; result announced via a polite live region after equals.
- Performance: No CLS; interactions feel instant (<100ms).
- UX: Digits 0–9, decimal point, Clear (C), Multiply (×), Equals (=). Keyboard support: digits, `.`, `*` for multiply, `Enter` for equals, `Backspace`, `Escape` for clear.
- Number/locale: Dot (.) decimal; no thousands separators; negatives allowed by prefixing `-` before an operand.

## Acceptance Criteria

- [ ] Display shows current entry and, when applicable, the pending expression (e.g., “12 × 3”).
- [ ] Keypad buttons: 0–9, `.`, `C`, `×`, `=`; only `×` is enabled as operator.
- [ ] Pressing `=` computes and shows product; screen readers announce the result (aria-live="polite", aria-atomic="true").
- [ ] Keyboard input mirrors button clicks (digits, `.`, `*`, `Enter`, `Backspace`, `Escape`).
- [ ] Clear (C) resets display and state.
- [ ] No CLS: display area maintains stable height; keypad layout does not shift.
- [ ] Axe devtools: 0 critical a11y violations on `/calculator`.

## Out of Scope

- Other operations, memory, percent, sign toggle, history.

## Dependencies

- Tailwind configured and working.

## Implementation Steps (high-level, no code here)

1. Add a display region (stable height) and keypad grid layout.
2. Manage calculator state: operand entry, operator selection (×), equals.
3. Announce result in a polite live region after equals only.
4. Add keyboard handlers for the specified keys.
5. Validate and test (happy path, invalid input, a11y).

## Deliverables

- Update `app/calculator/page.tsx` to the new UI (display + keypad) with the behaviors above.
- Test notes listed in PR (happy path, keyboard-only, a11y, no CLS).

## PO Review

### Decision: Approve

### Findings

- Scope: OK — Multiplication-only keypad UI at `/calculator`; no history/other ops.
- A11y/Perf: OK — AC include polite live region with `aria-atomic="true"`, keyboard parity, axe=0, no CLS.
- Boundaries: Addressed per Architect output at `bmad/prompts/architectures/FE-002-calculator-ui.architect.md` (state ownership, server/client split, event flow, announcement rules).

### Required Changes

- None.

### Notes

- Architect output reviewed; scope and a11y/perf mapping are sufficient for Developer to proceed.

## SM Gate Check

### Gate Check: Architect → Developer (Pass)

### Risks/Blockers

- None identified; proceed to Developer.

### Actions

- SM → Update story Status to Approved and schedule Developer run.
- Dev → Implement/update `app/calculator/page.tsx` per Architect output (if not already aligned).

### Status Update

- Current: Approved → Next: InProgress (Developer)
