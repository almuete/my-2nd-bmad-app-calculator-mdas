# Story: FE-005 — Multiply (×) and Equals (=) Orange Background and Readable Text

## Context

Operator emphasis improves clarity. To make core actions stand out and remain accessible, style the Multiply (`×`) and Equals (`=`) controls with an orange background and readable text color, including proper interactive states.

## Goal

Visually differentiate the `×` (Multiply) and `=` (Equals) controls with an orange background and text color that maintains WCAG AA contrast, including hover, focus-visible, active, and disabled states, without altering functionality.

## Constraints

- Tech: Next.js App Router + React + TailwindCSS.
- Accessibility: visible focus outline, logical tab order; keyboard parity remains (e.g., `*`/`x` multiplies, `Enter` computes).
- Performance: No layout shift (CLS); interactions <100ms.
- UX: Only the Multiply (`×`) and Equals (`=`) controls gain the orange treatment; other digits/operators remain unchanged.

## Acceptance Criteria

- [ ] On `/calculator`, both `×` and `=` buttons render with an orange background and readable text color:
  - [ ] Default: orange background with white text (e.g., `bg-orange-600 text-white`).
  - [ ] Hover: slightly lighter orange while keeping white text (e.g., `hover:bg-orange-500 hover:text-white`).
  - [ ] Active: pressed state uses a darker orange (e.g., `active:bg-orange-700`).
  - [ ] Focus-visible: clear focus ring/outline without layout shift (e.g., `focus-visible:ring-2 focus-visible:ring-orange-700` or outline equivalent).
  - [ ] Disabled (if applicable): reduced opacity and no hover/active styles.
- [ ] Keyboard parity:
  - [ ] Typing `*` (or `x` if supported) still maps to multiply as before.
  - [ ] Pressing `Enter` triggers equals as before; focus-visible styles appear when navigating by keyboard.
- [ ] No layout shifts when interacting with the `×` and `=` buttons.
- [ ] Other keypad buttons retain their existing styles; only `×` and `=` change.

## Out of Scope

- Changing the labels, size, or position of the `×` or `=` buttons.
- Altering any calculator business logic or keyboard mappings beyond visual styles.
- Styling changes to non-multiply and non-equals buttons.

## Dependencies

- TailwindCSS is configured and available.
- FE-002 Calculator UI is present and functional.
- FE-004 Clear button styling is complete (visual parity and contrast approach reused here).

## Implementation Steps (high-level, no code here)

1. Identify the `×` (Multiply) and `=` (Equals) button elements in `app/calculator/page.tsx` keypad rendering.
2. Apply orange styling classes to `×` and `=` only (e.g., `bg-orange-600 text-white hover:bg-orange-500 active:bg-orange-700 focus-visible:ring-2 focus-visible:ring-orange-700 disabled:opacity-50 disabled:cursor-not-allowed`).
3. Add a visible focus style using outline or ring utilities with adequate contrast.
4. Ensure disabled state (if used) reduces emphasis (e.g., `disabled:opacity-50 disabled:cursor-not-allowed`) and removes hover/active variants.
5. Validate keyboard behavior and confirm no CLS.

## Deliverables

- Update to `app/calculator/page.tsx` to apply orange theme and accessible text color to the `×` (Multiply) and `=` (Equals) buttons only, with appropriate states.

## PO Review

### Decision: Approve

### Findings

- Scope: Multiply and Equals buttons are visually distinct and accessible, without functional changes.
- A11y/Perf: Focus visible, no CLS.

### Required Changes

- None at this time.

### Notes

- If contrast fails with the chosen orange shade, bump the shade darker or use semi-bold text.

## SM Gate Check

### Gate Check: Architect → Developer (Pass)

### Risks/Blockers

- None identified.

### Actions

- Dev → Implement the `×` and `=` button style changes as specified.

### Status Update

- Current: Approved → Next: InProgress (Developer)


