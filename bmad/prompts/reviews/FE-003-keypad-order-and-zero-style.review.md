## 1) Acceptance Criteria Checklist

- Digits rendered ascending `0,1,2,3,4,5,6,7,8,9` on `/calculator`: Pass
  - Implemented by mapping an ordered array; DOM order is ascending.
- `0` key identical style/size (no special “wide” zero): Pass
  - All digits share `buttonBase`; no `col-span` or special casing for `0`; uniform grid.
- Class list parity for `0` vs `1`: Pass
  - Both use identical class lists; only text content differs.
- Keyboard `0` inserts `0` like other digits: Pass
  - Physical keys `"0"`–`"9"` handled uniformly in keydown handler.
- A11y parity (focus ring and aria-label for `0` matches others): Pass
  - `focus-visible` ring present; each digit has `aria-label="Digit X"`.
- No CLS when interacting/pressing `0`: Pass
  - Stable grid (`grid-cols-4`), consistent button sizes, placeholders maintain layout; display uses `min-h-*`.
- Axe devtools: 0 critical a11y violations on `/calculator`: Needs attention
  - Not executed here; run Axe to confirm.

Route and file reference: `/calculator`, `app/calculator/page.tsx`.

## 2) Accessibility Review (concrete, testable)

- Labels and associations: Each digit button uses `aria-label="Digit X"`.
- Live region: `role="status"`, `aria-live="polite"`, `aria-atomic="true"` present for result announcements.
- Announcement policy: Announces only on equals; no announcements on digit/operator input.
- Keyboard support: Logical tab order via DOM; keys `"0"`–`"9"`, `"."`, `"*"`, `"Enter"`, `"Backspace"`, `"Escape"`, `"-"` supported with expected behavior.
- Focus visibility: `focus-visible` ring is applied via shared classes.
- Contrast: Tailwind classes indicate adequate contrast in light/dark themes; confirm with tooling (Axe/contrast checker).

## 3) Edge Cases & Input Handling

- Parsing invalid partials handled: empty/whitespace, lone `-`, `.`, `-.` return null and are guarded before operations.
- Leading zero behavior: initial `"0"` replaced by first non-zero digit; pressing `0` first yields `"0"`.
- Decimals: Multiple `.` prevented; `0.` auto-prefixed when appropriate.
- Negatives/backspace/clear: Supported via dedicated handlers; state remains valid.
- Locale assumptions: Dot decimal only; no thousands separators.
- Large/small numbers and floating-point quirks (e.g., `0.1 × 0.2`) remain as standard JS float behavior (not in scope to change).

## 4) Performance & CLS Review

- Stable layout: Display/expression areas use `min-h-*`; keypad is a fixed 4-column grid; placeholders used to avoid reflow.
- Interactions: Simple synchronous state updates; no new dependencies; expected <100ms responsiveness.
- No unnecessary reflows or re-renders observed in code; no network or heavy compute paths added.

## 5) Suggested Playwright/E2E Tests (outline, not code)

- Route: Visit `/calculator`.
- Happy path (buttons): Click `1`, `2`, `×`, `3`, `=` → display `36`; single polite announcement with `36`.
- Happy path (keyboard): Type `12`, `*`, `3`, `Enter` → display `36`; one announcement.
- Input handling: Attempt multiple `.` (second ignored); `Backspace` edits entry; `Escape` clears; `-` toggles negative at start.
- Accessibility: Tab through keypad and controls; focus ring visible; each digit has `aria-label="Digit X"`; run Axe and assert 0 critical issues.
- Perf/CLS: While entering digits (including `0`), verify no layout shift in display/keypad (Performance panel/CLS overlay).

## 6) Risk Notes (perf, CLS, bundle impact)

- Floating precision: JS floating-point may produce unexpected results (e.g., `0.1 × 0.2`); acknowledged as out of scope.
- Locale: Dot-only decimal; future locale support would require additional work.
- Keyboard variance: Numpad keys typically map to `"0"`–`"9"`; validate across major browsers/OS.
- Contrast across themes: Likely sufficient; confirm with automated tooling.

## 7) Follow-ups / Suggestions

- Add a brief PR note confirming computed-style parity for `0` vs `1` (and screenshot).
- If needed for tests, consider stable selectors (role/aria-label or `data-testid`) for digit buttons.
- Future UX (out of scope): Consider traditional calculator physical layout while maintaining uniform styling and behavior.
