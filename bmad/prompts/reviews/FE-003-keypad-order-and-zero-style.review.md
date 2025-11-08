## 1) Acceptance Criteria Checklist
- On `/calculator`, digits rendered ascending `0,1,2,3,4,5,6,7,8,9`: Pass
- `0` key identical styling (width/height/typography/padding/radius/border/shadow/states): Pass
- `0` key DOM class list matches another digit key except content/id: Pass
- Keyboard input: pressing `0` inserts `0` like other digits: Pass
- A11y: focus ring and aria-label for `0` matches others: Pass
- No CLS when changing/pressing `0`: Pass
- Axe devtools reports 0 critical a11y violations: Needs attention (run Axe to confirm)

## 2) Accessibility Review (concrete, testable)
- Digit buttons have `aria-label="Digit X"`; focus-visible ring present; logical tab order via DOM.
- Live region present: `role="status"`, `aria-live="polite"`, `aria-atomic="true"`, announces only on equals.
- Keyboard supported: `0–9`, `.`, `*`, `Enter`, `Backspace`, `Escape`, `-`.
- Contrast appears sufficient in light/dark; verify with tooling.

## 3) Edge Cases & Input Handling
- Invalid partials (`""`, `"-"`, `"."`, `"-.") rejected and guarded before operations.
- Leading zero behavior consistent; multiple decimals prevented; negative entry toggled at start.
- JS float quirks (e.g., `0.1 × 0.2`) unchanged; locale is dot-decimal.

## 4) Performance & CLS Review
- Stable display with `min-h-*`; keypad is a fixed 4-col grid; identical button sizes; placeholders keep layout stable.
- Simple state updates; no heavy deps; interactions should be <100ms.

## 5) Suggested Playwright/E2E Tests (outline, not code)
- Visit `/calculator`.
- Buttons: `1`, `2`, `×`, `3`, `=` → display `36`; one polite announcement.
- Keyboard: type `12`, `*`, `3`, `Enter` → `36`; one announcement.
- Input handling: second `.` ignored; `Backspace` edits; `Escape` clears; `-` toggles negative at start.
- Accessibility: tab order/visibility; `aria-label` on digits; Axe: 0 critical issues.
- Perf/CLS: no layout shift while entering digits, including `0`.

## 6) Risk Notes (perf, CLS, bundle impact)
- Floating precision surprises; locale limitations; potential browser variance on numpad key reporting; contrast should be verified.

## 7) Follow-ups / Suggestions
- Attach Axe report (0 critical) in PR and note computed-style parity for `0` vs `1`.
- Consider adding stable selectors (role/aria-label or data-testid) for E2E robustness.


