# FE-002 — Calculator UI (Numpad + Display) — Reviewer Output

## 1) Acceptance Criteria Checklist

- Display shows current entry and pending expression: Pass
- Keypad: 0–9, `.`, `C`, `×`, `=`; only `×` operator: Pass
- `=` computes product; polite, atomic announcement: Pass
- Keyboard mirrors buttons (digits, `.`, `*`, `Enter`, `Backspace`, `Escape`): Pass
- `C` resets display and state: Pass
- No CLS: stable display/keypad layout: Pass (min-h guards)
- Axe: 0 critical on `/calculator`: Needs runtime verification

## 2) Accessibility Review (concrete, testable)

- Buttons have clear labels; sections use `sr-only` headings. Pass
- Live region: `role="status" aria-live="polite" aria-atomic="true"`; announcement only on equals. Pass
- Keyboard: Full mapping implemented; `focus-visible` rings on buttons. Pass
- Tab order: Logical grid order; fully keyboard-operable. Pass
- Contrast: Likely sufficient (`zinc` palette); verify with Axe in runtime. Pass (verify)

## 3) Edge Cases & Input Handling

- Empty/whitespace, lone `.` or `-`: treated as incomplete; not computed. Pass
- Multiple decimals: second `.` ignored. Pass
- Leading zeros: allowed; parsed via `Number`. Pass
- Negatives: supported via leading `-` (keyboard). Pass
- Very large/small finite numbers: allowed; no special formatting. Pass
- Locale: dot decimal only; no thousands separators. Pass
- Chaining multiply via `×` with a second operand: supported; in scope. Pass

## 4) Performance & CLS Review

- Stable heights on expression/display prevent CLS. Pass
- O(1) multiplication; memoized derived values; single keydown listener with cleanup. Pass
- No unnecessary reflows; no new dependencies. Pass

## 5) Suggested Playwright/E2E Tests (outline, not code)

- Visit `/calculator`.
- Buttons — happy path: click `1` `2` `×` `3` `=` → display `36`; live region announces "36" once; `C` clears to `0`.
- Keyboard — happy path: type `12` `*` `3` `Enter` → display `36`; announcement once.
- Input handling: second `.` ignored; `Backspace` edits; `Escape` clears; negative via `-` then digits (e.g., `-` `3` `*` `2` `Enter` → `-6`).
- Accessibility: tab through keypad (visible focus); live region only updates on equals; Axe has 0 critical violations.
- Perf/CLS: visual snapshot asserts no layout shift in display/keypad during interactions.

## 6) Risk Notes (perf, CLS, bundle impact)

- Floating‑point precision quirks (e.g., 0.1 × 0.2) not mitigated.
- Locale (comma decimals, grouping) unsupported in v1.
- Negatives via keyboard-only might be non-obvious to some users.
- Over‑announcement if live region updated outside equals (currently avoided).
- Mobile ergonomics: ensure button hit areas remain ≥44px.
- Bundle impact: none (no new dependencies).

## 7) Follow-ups / Suggestions

- Indicate active operator state (e.g., `aria-pressed` on `×`) when pending.
- Add sr‑only keyboard shortcut help near the display.
- Consider gating `=` until both operands valid or show a subtle hint when pressed prematurely.
- Add `data-testid` attributes to display, expression, and live region for stable test selectors.
- Extract `parseFiniteNumber` and calculator transitions into utilities with small unit tests.
- Decide on result formatting policy (raw Number vs fixed decimals) and document it.
