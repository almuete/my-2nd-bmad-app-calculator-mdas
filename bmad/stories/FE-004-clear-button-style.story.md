# Story: FE-004 — Clear (C) Button Orange Background and Readable Text

## Context

The Clear button (`C`) currently blends with other keypad buttons. To improve affordance and make the reset action visually distinct, style the `C` button with an orange background and accessible text color with proper interactive states.

## Goal

Visually differentiate the `C` (Clear) control with an orange background and text color that maintains WCAG AA contrast, including hover, focus-visible, active, and disabled states, without altering functionality.

## Constraints

- Tech: Next.js App Router + React + TailwindCSS.
- Accessibility: visible focus outline, logical tab order; keyboard parity remains (e.g., `Escape` clears).
- Performance: No layout shift (CLS); interactions <100ms.
- UX: Only the Clear (`C`) control gains the orange treatment; other digits/operators remain unchanged.

## Acceptance Criteria

- [ ] On `/calculator`, the `C` button is rendered with an orange background and readable text color:
  - [ ] Default: orange background with white text (e.g., `bg-orange-600 text-white`).
  - [ ] Hover: slightly lighter orange while keeping white text (e.g., `hover:bg-orange-500 hover:text-white`).
  - [ ] Active: pressed state uses a darker orange (e.g., `active:bg-orange-700`).
  - [ ] Focus-visible: clear focus ring/outline without layout shift (e.g., `focus-visible:ring-2 focus-visible:ring-orange-700` or outline equivalent).
  - [ ] Disabled (if applicable): reduced opacity and no hover/active styles.
- [ ] Keyboard parity: pressing `Escape` clears as before; focus-visible styles appear when navigating by keyboard.
- [ ] No layout shifts when interacting with the `C` button.
- [ ] Other keypad buttons retain their existing styles; only the `C` button changes.

## Out of Scope

- Changing the label, size, or position of the `C` button.
- Altering any calculator business logic or keyboard mappings beyond visual styles.
- Styling changes to non-clear buttons.

## Dependencies

- TailwindCSS is configured and available.
- FE-002 Calculator UI is present and functional.

## Implementation Steps (high-level, no code here)

1. Identify the `C` button element in `app/calculator/page.tsx` keypad rendering.
2. Apply orange styling classes to `C` only (e.g., `bg-orange-600 text-white hover:bg-orange-500 active:bg-orange-700 focus-visible:ring-2 focus-visible:ring-orange-700 disabled:opacity-50 disabled:cursor-not-allowed`).
3. Add a visible focus style using outline or ring utilities with adequate contrast.
4. Ensure disabled state (if used) reduces emphasis (e.g., `disabled:opacity-50 disabled:cursor-not-allowed`) and removes hover/active variants.
5. Validate keyboard behavior and confirm no CLS.

## Deliverables

- Update to `app/calculator/page.tsx` to apply orange theme and accessible text color to the `C` button only, with appropriate states.

## PO Review

### Decision: Approve

### Findings

- Scope: Clear button is visually distinct and accessible, without functional changes.
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

- Dev → Implement the `C` button style changes as specified.

### Status Update

- Current: Approved → Next: InProgress (Developer)
