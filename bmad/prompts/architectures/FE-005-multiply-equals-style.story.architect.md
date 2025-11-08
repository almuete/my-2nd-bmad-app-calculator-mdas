## 1) Scope & Assumptions
- Route `/calculator`: visually differentiate Multiply (`×`) and Equals (`=`) with an orange background and readable text; all other keypad buttons remain unchanged.
- No behavioral changes: multiplication logic and equals computation remain as-is; keyboard parity remains (`*` multiplies, `Enter` computes).
- Announcements: use existing polite live region; announce result only on successful equals (no announcement on operator press).
- No data fetching, no persistence, no layout changes; avoid CLS.

## 2) Component & File Boundaries (no code)
- Page: `app/calculator/page.tsx` is a Client component containing keypad and display; update only the `×` and `=` buttons’ class lists.
- UI parts to adjust (plain English):
  - Multiply (`×`) and Equals (`=`): apply orange background, high-contrast white text, hover/active variants, and visible focus style (ring/outline) with no layout shift; include disabled style parity if applicable.
  - Keep Clear and other buttons untouched; reuse a local class string for readability (co-located constant).
- No shared tokens, no new modules, no new routes or dependencies.

## 3) Server/Client Boundaries & Data Flow
- Client-only interactions and state management remain unchanged (entry, operands, operator, last result).
- Side effects: polite live region announces only on `=` after a valid computation; no announcement for `×` presses to prevent noise.
- No server work or data fetching; no caching concerns.

## 4) Accessibility Checklist (concrete, testable)
- Contrast: orange background with white text meets WCAG AA (≥4.5:1); if borderline in dark/light themes, use a darker orange shade.
- Focus: `×` and `=` show a visible focus indicator with adequate contrast and no layout shift (use ring/outline utilities).
- Keyboard: tab order unchanged; `*` triggers multiply, `Enter` triggers equals; button labels/aria-labels remain accurate (“Multiply”, “Equals”).
- Live region: `role="status"`, `aria-live="polite"`, `aria-atomic="true"`; announce only computed results.
- States: default, hover, active, and disabled (if present) are visually distinct and accessible in light/dark themes.

## 5) Edge Cases & Error Handling
- Invalid input: when entry is empty/invalid, operator press does not announce; equals does nothing (no announcement) until valid.
- Decimal/negative handling uses existing parsing; no change; ensure no duplicate announcements.
- CLS guard: focus/active styles must not change layout; avoid adding borders that reflow content.
- Locale/keys: multiplication via `*` only (UI shows `×`); no change to keyboard mapping.

## 6) Testable Acceptance (map to AC in the Story)
1. On `/calculator`, `×` and `=` show orange background with white text (default).
2. Hover: orange lightens; Active: orange darkens; text remains readable.
3. Focus-visible: ring/outline appears without shifting layout; visible in light/dark modes.
4. Disabled (if applicable): reduced opacity; hover/active suppressed.
5. Keyboard: `*` multiplies; `Enter` computes; tab focus cycles logically; focus-visible appears via keyboard.
6. Live region announces result on equals only; no announcement on operator press.
7. No layout shift during hover/focus/active interactions; quick interactions (<100ms).

## 7) Risks & Tradeoffs
- Cross-theme contrast risk; may require adjusting orange shade or text weight.
- Specificity stacking with existing classes; ensure accent classes are authoritative.
- Over-announcement risk avoided by limiting to equals; verify no accidental announcements.

## 8) Minimal Deliverables (no code)
- `app/calculator/page.tsx` — Style `×` and `=` buttons with orange theme and accessible states; no logic changes.
- Route: `/calculator` — Verify visuals, accessibility (focus-visible, live region), keyboard parity, and no CLS.*** End Patch``` }``` confirmation=True  request_id=fe8a76f9-1d12-4b9e-9f96-54d86d7b0bf0  user_request_hash=2f76a59b72a7ea995404cb230ec6f155  assistant_response_id=1d93bfe7-2175-4f6c-b14f-ddead8155bdd  execution_info=None  stream=False  temperature=None  top_p=None  presence_penalty=None  frequency_penalty=None  max_tokens=None  stop=None  n=None  logprobs=None  suffix=None  tool=None  """

