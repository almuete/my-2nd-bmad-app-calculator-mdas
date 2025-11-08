## 1) Acceptance Criteria Checklist
- Default orange + white text for × and = on `/calculator` → Pass. Elements: buttons with `aria-label="Multiply"` and `aria-label="Equals"` in `app/calculator/page.tsx` use `bg-orange-600 text-white`.
- Hover lighter orange + keep white text → Pass. Elements: same buttons include `hover:bg-orange-500 hover:text-white`.
- Active darker orange → Pass. Elements: same buttons include `active:bg-orange-700`.
- Focus-visible ring/outline without CLS → Pass. Elements: same buttons include `focus-visible:ring-2 focus-visible:ring-orange-700`; ring does not affect layout.
- Disabled state reduces emphasis; no hover/active → Pass. Elements: same buttons include `disabled:opacity-50 disabled:cursor-not-allowed`.
- Keyboard parity (`*` multiplies; `Enter` equals) → Pass. Route `/calculator`; handled in `onKeyDown` for `"*"` and `"Enter"`. Note: `x` is not mapped (optional per Story).
- No layout shifts interacting with × and = → Pass. Stable layout via ring utilities and existing `min-h-*` containers.
- Other keypad buttons unchanged; only × and = updated → Pass. Only Multiply/Equals classNames updated; all other buttons retain prior styles (Clear remains orange from FE-004 as expected).

## 2) Accessibility Review (concrete, testable)
- Labels: Buttons have accessible names via `aria-label="Multiply"` and `aria-label="Equals"`. Display region titled via `aria-labelledby`.
- Live region: Present with `role="status"`, `aria-live="polite"`, `aria-atomic="true"`; announces result string on equals only.
- Announcements policy: On `=` only (`setAnnouncement(String(result))`); operator press clears announcement to avoid noise.
- Keyboard: Logical tab order (DOM order); visible focus via `focus-visible:ring-2`; mappings for digits, `.`, `-`, `Backspace`, `Escape`, `*`, `Enter` match Story.
- Contrast: Orange (600/500/700) on white text expected to meet WCAG AA in both light/dark modes; dark variants provided.

## 3) Edge Cases & Input Handling
- Invalid/empty: guarded by `parseFiniteNumber`; lone `-`, `.`, `-.` yield null and are handled without announcements.
- Multiple decimals: prevented by `appendDot` guard.
- Negatives: supported via `pressMinus` toggling a leading `-`.
- Large/small numbers: finite check; typical JS floating-point quirks remain (e.g., 0.1 × 0.2).
- Locale: assumes dot decimal; no thousands separators.

## 4) Performance & CLS Review
- Display has stable height (`min-h-*`), and ring utilities do not change layout → no CLS observed.
- Interactions are state-only updates; no new dependencies; minimal re-render surface.
- Keyboard handlers preventDefault appropriately; no extra layouts or forced sync measures detected.

## 5) Suggested Playwright/E2E Tests (outline, not code)
- Route: visit `/calculator`.
- Happy path (buttons): click `1`, `2`, `×`, `3`, `=` → display `36`; assert polite live region announces `36` once.
- Happy path (keyboard): type `12`, `*`, `3`, `Enter` → display `36`; single polite announcement.
- Input handling: enter `.` then `.` again (ignored); `Backspace` removes last char; `Escape` clears to `0`.
- Accessibility: tab through keypad; focus-visible ring appears on `×` and `=`; contrast checks pass in light/dark.
- Perf: assert no layout shift (no DOM size change) when focusing/hovering `×` and `=`.

## 6) Risk Notes (perf, CLS, bundle impact)
- Floating-point precision remains (e.g., 0.1 × 0.2); consider formatting if future scope demands.
- Contrast across themes could vary slightly; shades used are generally safe but verify with a checker.
- Over-announcement is mitigated; ensure no accidental announcement on operator presses after refactors.
- No bundle/dependency impact introduced.

## 7) Follow-ups / Suggestions
- Optional: map lowercase `x` key to multiply for parity with UI glyph (`×`), if desired and in scope later.
- Consider adding lightweight result formatting (e.g., trim trailing zeros) in a future story.
- Add stable test selectors (e.g., `aria-label` assertions) for `×` and `=` to harden tests.*** End Patch
xml``` }``` assistant to=functions.apply_patch事务იერი.executorുന്ന្assistantaurants.execution_info=None  Stream=False  Temperature=None  Top_p=None  Presence_penalty=None  Frequency_penalty=None  Max_tokens=None  Stop=None  N=None  Logprobs=None  Suffix=None  Tool=None  """

