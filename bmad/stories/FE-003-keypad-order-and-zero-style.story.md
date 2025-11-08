# Story: FE-003 — Keypad Ordering 0–9 and Zero Style Consistency

## Context

Current calculator keypad has the digits arranged inconsistently and the `0` key does not fully match the visual treatment of the other digit keys. This story standardizes the digit ordering and enforces consistent styling for all numeric keys.

## Goal

Present digit keys in ascending order `0–9` in the data/model and ensure the `0` key is visually and interactively identical to the other digit keys.

## Constraints

- Tech: Next.js App Router + React + TailwindCSS.
- Accessibility: All digit buttons labeled; keyboard focus visible; logical tab order.
- Performance: No layout shift; interactions <100ms.
- UX:
  - Digits: `0–9` exist as a uniform set with identical styles and states.
  - Keyboard support: physical `0–9` keys input digits; focus and active states are consistent.
- Number/locale: Dot (.) decimal remains unchanged; this story does not alter locale behavior.

## Acceptance Criteria

- [ ] On `/calculator`, the digits set is defined and rendered in ascending order `0,1,2,3,4,5,6,7,8,9`.
- [ ] The `0` key has the exact same visual styling as other digit keys:
  - [ ] Same width/height and grid cell footprint (no special “wide” zero)
  - [ ] Same typography (font family, size, weight, line-height)
  - [ ] Same padding, border radius, border, shadow (if any)
  - [ ] Same default, hover, focus-visible, and active states
  - [ ] Same disabled state behavior (if used)
- [ ] The `0` key’s DOM class list matches another digit key’s (e.g., `1`) except for text content/id.
- [ ] Keyboard input: pressing the `0` key inserts `0` exactly like other digits.
- [ ] A11y: focus ring and aria-label for `0` matches the pattern used by other digits.
- [ ] No CLS: changing or pressing `0` does not cause layout shifts.
- [ ] Axe devtools reports 0 critical a11y violations on `/calculator`.

## Out of Scope

- Changing operator availability or non-digit controls.
- Altering the decimal point, clear, equals, or multiply logic.

## Dependencies

- Tailwind configured and working.
- FE-002 calculator UI is present and functional.

## Implementation Steps (high-level, no code here)

1. Define digits as an ordered array `[0,1,2,3,4,5,6,7,8,9]` in the keypad source.
2. Render digit buttons by mapping over this array; remove any special-casing of `0`.
3. Ensure the keypad grid gives all digits the same cell size; do not stretch `0`.
4. Apply the same Tailwind classes to `0` as used for other digits; unify variants (hover/focus/active/disabled).
5. Verify keyboard handling includes `0` with parity to other digits.
6. Validate in axe: no critical issues; confirm no CLS via interaction and on load.

## Deliverables

- Update `app/calculator/page.tsx`: keypad rendering maps `[0,1,2,3,4,5,6,7,8,9]` with identical classes for all digits (no special-case styling for `0`).
- Visual parity screenshot or note confirming `0` and other digits are identical in style and size.
- Test notes in PR (on `/calculator`):
  - Keyboard-only entry using `0`
  - Class parity assertion for `0` vs `1`
  - A11y (axe=0) and no CLS

## PO Review

### Decision: Approve

### Findings

- Scope: OK — Digit ordering normalized (`0–9`) and `0` style aligned to other digits.
- A11y/Perf: OK — Focus parity, axe=0, no CLS.

### Required Changes

- None.

### Notes

- Keep the keypad grid consistent; do not widen the `0` key in this iteration.

## SM Gate Check

### Gate Check: Architect → Developer (Pass)

### Risks/Blockers

- None identified.

### Actions

- Dev → Implement keypad updates per this story.

### Status Update

- Current: Approved → Next: InProgress (Developer)
