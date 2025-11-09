# Calculator Buttons – Glassmorphism Refresh

### Scope

- Only calculator buttons under `components/calculator/*`.
- No behavioral changes; style-only update.

### Files to change

- `components/calculator/Key.tsx` (primary)
- Optionally: `docs/*` for story, QA gate, and release notes updates (text only)

### Implementation details

1) Update `Key.tsx` base styles to support glass effects

- Add subtle blur, transition, and soft shadow to base:
```ts
// Key.tsx → inside Key()
const base = [
  "rounded-md border px-4 py-3 text-lg font-medium",
  "transition-colors shadow-sm backdrop-blur-sm",
  "focus-visible:outline-none focus-visible:ring-2",
  "disabled:opacity-50 disabled:cursor-not-allowed",
].join(" ");
```


2) Apply glass variants

- Keep number keys neutral glass; tint operator/action with blue while maintaining strong focus rings and clear hover/active states.
```ts
// Key.tsx → schemeByVariant
number:
  "border-zinc-300/60 bg-white/40 text-zinc-900 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 hover:bg-white/50 active:bg-white/60 dark:hover:bg-white/15 dark:active:bg-white/20 focus-visible:ring-blue-600",
operator:
  "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
action:
  "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
```


3) Accessibility & interaction

- Maintain `focus-visible:ring-2` with `ring-blue-600` for all variants.
- Ensure hover/active states provide clear affordance without harsh contrast shifts.

4) No changes in `Keypad.tsx`, `OperatorPad.tsx`, `ActionBar.tsx` usage (they inherit new styles).

### Verification

- Run unit tests (Vitest) and ensure all pass.
- Run Playwright visual tests and update snapshots to reflect the new look.
- Quick manual check in light/dark modes for:
  - Contrast/readability of labels
  - Focus ring visibility (keyboard nav)
  - Hover/active feedback

### Documentation updates

- Update `docs/stories/1.3.operator-and-action-button-color-update.md` to reflect glassmorphism redesign and blue tinting.
- Update QA gate `docs/qa/gates/1.3-operator-action-color.yml` to accept glass tint (blue) and translucency notes.
- Add release note in `docs/RELEASE_NOTES.md` summarizing the UI refresh (calculator buttons only).

### Acceptance criteria

- Operator and action buttons use a blue-tinted glass style; number keys remain neutral glass.
- Keyboard focus ring is visible and consistent (`focus-visible:ring-2 ring-blue-600`) across variants and themes.
- Labels meet readability expectations in both light and dark modes; no regressions in button layout or spacing.
- Unit tests pass and visual snapshots are reviewed/updated for Desktop and Mobile Chrome baselines.
- QA gate `docs/qa/gates/1.3-operator-action-color.yml` passes without modifications beyond the intended glass/tint notes.

### Dependencies

- Tailwind theme tokens per `docs/architecture/02-tailwind-theme-tokens.md`.
- Responsiveness guidelines per `docs/architecture/05-responsiveness.md`.
- `backdrop-blur` support; graceful degradation is acceptable where unsupported (no functional regressions).

### Risks & mitigations

- Contrast/readability risk in certain backgrounds: validate in light/dark and with high contrast backgrounds; adjust tint/opacity if needed.
- Performance on low-end devices due to blur: keep `backdrop-blur-sm`, profile on mobile; reduce blur if jank is observed.
- Visual test churn: coordinate snapshot updates in a single PR to avoid flakiness.

### Owners, timeline, rollout

- Assignee: <engineer>
- Reviewers: <design>, <qa>, <po>
- Estimate: Dev 0.5 day, QA 0.5 day, Docs 0.25 day
- Rollout: Land behind normal release process; no feature flag required (style-only). Verify on staging, then release.

### Approvals checklist

- [ ] Design sign-off on glass/tint in light/dark
- [ ] QA sign-off on unit + visual tests
- [ ] PO sign-off on staging

### Rollback

- Revert edits in `Key.tsx` to previous solid-blue styles and restore Playwright snapshots if needed.