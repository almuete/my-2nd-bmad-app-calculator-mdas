# Release Notes

## 2025-11-09 — Calculator UI Modernization (Epic 1)

### Summary
Delivered dual-line display and keypad grid with distinct action keys, aligned with PRD and architecture. Accessibility and responsiveness improvements included. MDAS logic preserved.

### Stories
- 1.1 Dual-line display — Done  
  - Story: docs/stories/1.1.dual-line-display.md  
  - QA Gate: docs/qa/gates/1.1-dual-line-display.yml (PASS)
- 1.2 Keypad grid and action keys — Done  
  - Story: docs/stories/1.2.keypad-and-actions.md  
  - QA Gate: docs/qa/gates/1.2-keypad-and-actions.yml (PASS)

### Highlights
- Modern glassy display with responsive typography and aria-live announcements
- Componentized keypad with clear grouping for action and operator keys
- Keyboard operability preserved; focus-visible states and ARIA labels
- Unit tests added for display and keypad interactions

### Notes
- Visual regression snapshots recommended for breakpoints (Percy/Chromatic or Playwright)  
- Lighthouse accessibility check ≥95 recommended in CI


