# 7. Acceptance Criteria
- Matches approved wireframe & architecture plan
- Passes WCAG AA keyboard/ARIA audit
- Unit tests ≥95% pass rate
- Lighthouse ≥95 accessibility score

- Display panel visual style:
  - No box-shadow is applied to the display container.
  - No backdrop blur (no `backdrop-filter`/`backdrop-blur-*`) is applied to the display container.
  - Display background is opaque (non-translucent) and uses the standard surface token without glass/tint.
  - Expression/result text readability and contrast remain ≥4.5:1 in light and dark modes.
  - Visual snapshots updated to reflect flat, non-glass display; no unrelated regressions.

- Digit keys 0–9 and decimal (.) render with bg-cyan-500 and text-white
- Focus-visible ring on cyan keys is clearly perceivable with ring-offset
- Hover and active states remain distinguishable and meet AA contrast
- Operator and action keys remain visually unchanged
- Visual snapshots updated only for affected keys; no unrelated regressions


