## 1) Scope & Assumptions
- Route `/calculator`: visually differentiate the Clear (`C`) button only with an orange background and accessible text color; all other keypad buttons remain unchanged.
- No behavioral changes: Clear continues to reset state; keyboard parity remains (`Escape` triggers clear).
- No data fetching, no persistence, no theming changes beyond this one button.
- Assume Tailwind v4 available; ensure no layout shift (CLS) from focus/active styles.

## 2) Component & File Boundaries (no code)
- Page: `app/calculator/page.tsx` contains the keypad and the `C` button. Update the `C` button’s class list only.
- UI parts to adjust (plain English):
  - Clear button: apply orange background, high-contrast text color, hover/active variants, and visible focus style.
  - Optional: a small local constant for the `C` button’s class string to keep it readable (inline within the page).
- No new modules, no shared design tokens required for this scope (use Tailwind classes).

## 3) Server/Client Boundaries & Data Flow
- Server: page shell as-is; no server logic changes.
- Client: existing calculator interaction/state unchanged. Only visual styles for the `C` button are updated.
- No side effects, no navigation, no announcements added by this story.
- Caching: none; no network I/O.

## 4) Accessibility Checklist (concrete, testable)
- Contrast: text on orange background meets WCAG AA (≥ 4.5:1). Prefer darker orange shade if needed.
- Focus: `C` shows a visible focus indicator with adequate contrast and no layout shift (use outline/ring with offset).
- States: default, hover, active, and disabled (if present) are all distinguishable and accessible.
- Name: button remains labeled as “C” with accessible name “Clear” if abbreviations are unclear (aria-label acceptable).
- Keyboard: `Escape` continues to trigger clear; tab order unchanged.

## 5) Edge Cases & Error Handling
- Theming/contrast: if orange shade chosen fails contrast in dark/light contexts, step up to a darker shade.
- Disabled state (if used): ensure reduced emphasis and no hover/active interaction.
- High-contrast/user preferences: focus style must remain visible under `prefers-contrast` or OS HC modes.
- CLS guard: focus/active outlines must not change layout; avoid borders that shift content.

## 6) Testable Acceptance (map to AC in the Story)
1. C button shows orange background with readable text on `/calculator` → visually verify default.
2. Hover darkens slightly; Active darkens further → verify hover/active shades.
3. Focus-visible ring/outline appears and is clearly visible → keyboard `Tab` to `C`.
4. Disabled (if present) shows reduced opacity and suppresses hover/active → verify.
5. Contrast meets ≥ 4.5:1 → validate with a contrast checker.
6. Keyboard parity retained (`Escape` clears) → verify behavior unchanged.
7. No layout shifts when interacting with `C` → observe during hover/focus/active.
8. Axe (or equivalent) reports 0 critical issues on `/calculator`.

## 7) Risks & Tradeoffs
- Contrast risk across themes; may require tuning shade or text weight.
- CSS specificity collisions with existing classes; ensure the `C` class list is authoritative.
- Over-reliance on color for affordance; mitigated by label “C” and focus-visible styling.

## 8) Minimal Deliverables (no code)
- `app/calculator/page.tsx` — Update the `C` button’s class list to add orange background, accessible text color, focus-visible outline/ring, and state variants (hover/active/disabled).
- Route: `/calculator` — Validate visuals, accessibility, and interaction per above.


