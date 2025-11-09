# PR Checklist — Epic 1: Calculator UI Modernization

Date: 2025-11-09
Owner: PM

## Links
- Epic Summary: docs/epics/epic-1.md
- Release Notes: docs/RELEASE_NOTES.md
- Story 1.1: docs/stories/1.1.dual-line-display.md (Gate: docs/qa/gates/1.1-dual-line-display.yml)
- Story 1.2: docs/stories/1.2.keypad-and-actions.md (Gate: docs/qa/gates/1.2-keypad-and-actions.yml)

## Pre-Merge Checks
- [x] All story statuses set to Done
- [x] QA gate status PASS for all included stories
- [x] Unit tests added/updated; `npm run test` passing locally
- [x] Lint clean; `npm run lint` passing (warnings only)
- [ ] Accessibility: a11y checks (axe/Lighthouse) ≥95 (recommended)
- [x] Visual regression snapshots executed or N/A documented
- [x] Docs updated: `docs/RELEASE_NOTES.md`, `docs/epics/epic-1.md`
- [x] Stakeholder notification prepared: `docs/communications/stakeholders/2025-11-09-release-notice.md`
- [ ] Version/tag strategy agreed (if applicable)

## Post-Merge
- [ ] Deploy to staging
- [ ] Run Lighthouse and visual checks on staging
- [ ] Announce to stakeholders
- [ ] Monitor for regressions


