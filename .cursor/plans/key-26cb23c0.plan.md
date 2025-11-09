<!-- 26cb23c0-f2d9-48bd-9c33-5a5880825214 ef62cf70-053d-4f72-aa37-d69966b5e76e -->
# Keypad Reorder — Retroactive Story and Change Control Plan

## Scope

Bring the already-applied keypad change under formal BMAD process: add story + QA gate, verify tests/visuals, and complete release documentation and PR workflow. No further UI logic changes beyond the confirmed layout.

## Acceptance Criteria

- 4-column grid; digits display in descending order 9..0 left-to-right, top-to-bottom.
- Decimal point sits to the immediate right of 0 in the last row.
- ARIA labels intact; tab order matches visual order; keyboard input unchanged.
- Unit tests pass; visual snapshots updated for Desktop & Mobile; QA gate passes.

## Implementation Steps

1. Create a new story document capturing the change, rationale, and ACs in `docs/stories/`.
2. Add a QA gate file in `docs/qa/gates/` referencing updated files and snapshots.
3. Confirm unit tests: adjust expectations only if order-sensitive; keep accessibility selectors stable.
4. Refresh Playwright visual snapshots for calculator page; store under existing snapshots path.
5. Update `docs/RELEASE_NOTES.md` and stakeholder notice if needed.
6. Open a PR with conventional commits, link story and QA gate; run checklists.

## Files Touched

- Story: `docs/stories/1.5.keypad-reorder-and-dot-position.md`
- QA Gate: `docs/qa/gates/1.5-keypad-reorder.yml`
- Tests: `tests/KeypadComponents.test.tsx` (verify), `tests/visual/calculator.spec.ts[-snapshots/]`
- Docs: `docs/RELEASE_NOTES.md`, `docs/communications/stakeholders/2025-11-09-release-notice.md` (if applicable)

## Notes

- No operator/action changes; no keyboard map changes expected.
- Keep glassmorphism and focus ring styling unchanged.

### To-dos

- [ ] Create story doc for keypad reorder with ACs
- [ ] Add QA gate referencing tests and snapshots
- [ ] Verify keypad unit tests; update only if order-sensitive
- [ ] Refresh Playwright visual snapshots for calculator
- [ ] Update release notes and stakeholder notice if needed
- [ ] Open PR with links to story and QA gate