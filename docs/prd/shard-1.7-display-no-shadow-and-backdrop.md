# PRD Shard 1.7 — Remove shadow and backdrop in calculator display

## Title
Remove shadow and backdrop blur from the calculator display panel

## Rationale
- Client request to remove glassmorphism effects from the display for a flatter, cleaner look.
- Improves clarity and reduces visual noise without affecting functionality.

## Scope
- Affects only the display container styling.
- No changes to MDAS logic, layout structure, or keyboard/a11y behavior.

## Acceptance Criteria
1) No box-shadow is applied to the display container.
2) No backdrop blur (`backdrop-filter` / `backdrop-blur-*`) is applied to the display container.
3) Display background is opaque (non-translucent) and uses the standard surface token without glass/tint.
4) Expression/result text readability and contrast remain ≥4.5:1 in light and dark modes.
5) Visual snapshots updated to reflect flat, non-glass display; no unrelated regressions.

## Dependencies / References
- Theme tokens and surfaces: `docs/architecture/02-tailwind-theme-tokens.md`
- Display story baseline: `docs/stories/1.1.dual-line-display.md`
- Global AC: `docs/prd/07-acceptance-criteria.md`

## Out of Scope
- Button styles, operator/action tints, key layout/order, or interaction behavior.

## Notes
- Where blur is unsupported, there is no change required; this explicitly standardizes on a flat surface across all environments.


