# PRD Shard: Cyan background for digit and decimal keys

Source: [docs/prd/prd-generated.md](./prd-generated.md)

## Title
Cyan background for digit and decimal keys

## Why
Better visual grouping for numbers

## Acceptance Criteria
1) Digits 0–9 and decimal use `bg-cyan-500` with white text.
2) Hover: `bg-cyan-600`, Active: `bg-cyan-700`.
3) Focus ring uses `focus-visible:ring-cyan-600`.
4) Operators/actions unchanged.
5) Accessibility score ≥95; text contrast ≥4.5:1.

## Notes for SM
- Suggested Story ID: `1.6.digit-keys-cyan-background`
- Scope limited to styling for digits (0–9) and decimal; operators/actions unchanged.
- Ensure a11y/contrast validation is included in QA steps.


