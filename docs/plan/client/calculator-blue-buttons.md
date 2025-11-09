# Change calculator orange buttons to Tailwind blue

### Summary

Update the `operator` and `action` variants in `components/calculator/Key.tsx` from orange to Tailwind blue. Scope is only calculator buttons. Then run tests and refresh visual snapshots.

### Files to change

- `components/calculator/Key.tsx`

### Code edits

Replace orange classes for `operator` and `action` with blue series:

```ts
// in components/calculator/Key.tsx → schemeByVariant
operator:
  "border-zinc-300 bg-blue-600 text-white dark:border-zinc-700 dark:bg-blue-600 dark:text-white hover:bg-blue-500 active:bg-blue-700 dark:hover:bg-blue-500 dark:active:bg-blue-700 focus-visible:ring-blue-700",
action:
  "border-zinc-300 bg-blue-600 text-white dark:border-zinc-700 dark:bg-blue-600 dark:text-white hover:bg-blue-500 active:bg-blue-700 dark:hover:bg-blue-500 dark:active:bg-blue-700 focus-visible:ring-blue-700",
```

### Verification

- Search calculator components for any remaining `orange-` classes and update if found.
- Run unit tests (Vitest) and visual tests (Playwright).
- Update Playwright snapshots in `tests/visual/calculator.spec.ts-snapshots/` to reflect new color.
- Quick manual check in dark mode for sufficient contrast and consistent focus ring.