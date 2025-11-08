## 1) Acceptance Criteria Checklist
- Default orange background with white text on `/calculator` Clear button (C): Pass — matches spec (e.g., `bg-orange-600 text-white`).
- Hover uses slightly lighter orange and keeps white text: Pass — matches spec (e.g., `hover:bg-orange-500 hover:text-white`).
- Active uses darker orange: Pass — matches spec (e.g., `active:bg-orange-700`).
- Focus-visible ring/outline without CLS: Pass — ring-based focus is acceptable (e.g., `focus-visible:ring-2 focus-visible:ring-orange-700`).
- Disabled (if applicable): Pass — reduced emphasis and interaction blocked.
- Keyboard parity (`Escape` clears) and focus-visible: Pass — behavior unchanged; focus visible.
- No layout shifts on interaction: Pass — focus uses ring/outline rather than borders.
- Other keypad buttons retain existing styles: Pass — change is scoped to `C` only.

## 2) Accessibility Review (concrete, testable)
- Labels: `C` has an accessible name (“Clear” via `aria-label`); other keypad buttons labeled.
- Live region: result area (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`) unchanged; announces only on `=`.
- Focus: visible ring without shifting layout; logical tab order.
- Keyboard: digits, `.`, `*`, `Enter`, `Backspace`, `Escape` supported; parity maintained.
- Contrast: Not mandated by this story; recommend informal visual check across themes.

## 3) Edge Cases & Input Handling
- Visual-only change; numeric parsing and entry rules remain unchanged (lone `.`/`-`, multiple decimals, backspace).
- Disabled state (if used) prevents hover/active and reduces emphasis.
- Locale assumptions remain (dot decimal; no thousands separators).

## 4) Performance & CLS Review
- Stable display/result heights; no CLS introduced by focus/active (ring/outline only).
- No new dependencies; minimal class adjustments; interactions remain instant.

## 5) Suggested Playwright/E2E Tests (outline, not code)
- Route: `/calculator`
- Visual states (C): default orange+white; hover lighter orange+white; active darker; keyboard Tab shows focus ring; disabled (if applicable) reduces emphasis.
- Keyboard parity: `Escape` clears; focus ring remains visible on `C`.
- A11y sanity: Live region announces only on valid `=`.
- Perf/CLS: No layout shift during hover/focus/active.

## 6) Risk Notes (perf, CLS, bundle impact)
- Without explicit contrast criteria, there’s a small risk of borderline contrast on certain displays/themes.
- No bundle or route impact; CLS risk is low due to ring-based focus.

## 7) Follow-ups / Suggestions
- Optionally capture screenshots of the `C` button in default/hover states for design review.
- Consider a `data-testid="key-clear"` to stabilize E2E selectors.


