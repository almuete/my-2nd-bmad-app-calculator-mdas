# Product Requirements Document (PRD)
## Project: Calculator Page Redesign (Brownfield UI Modernization)

### 1. Purpose
Modernize the calculator interface to align with current design trends, improve accessibility, and ensure responsiveness across devices while preserving all core MDAS logic.

### 2. Goals
| ID | Goal | KPI / Measure |
|----|------|----------------|
| G1 | Deliver modern UI theme | ≥90% positive user feedback |
| G2 | Improve accessibility | 100% keyboard navigation |
| G3 | Mobile responsiveness | No overflow ≤480px width |
| G4 | Smooth micro-interactions | Animation ≤150ms |

### 3. Functional Requirements
| ID | Requirement | Priority |
|----|--------------|----------|
| F1 | Dual-line display (expression + result) | High |
| F2 | Grid-based layout (3×3 numbers, MDAS ops) | High |
| F3 | Distinct action keys (C, ⌫, =) | High |
| F4 | Keyboard navigation | High |
| F5 | Responsive layout | Medium |
| F6 | ARIA roles / labels | High |
| F7 | Keep logic unchanged | Critical |

### 4. Non-Functional Requirements
- Performance ≤1s load
- WCAG 2.2 AA compliance
- Consistent Tailwind theme tokens
- Componentized maintainable design

### 5. User Stories
1. As a user, I want grouped keys for clarity.
2. As a keyboard user, I want full key support.
3. As a mobile user, I want adaptive layout.
4. As an accessibility user, I want screen reader labels.

### 6. Risks
| Risk | Mitigation |
|-------|-------------|
| Complex dark mode | Early contrast testing |
| Mobile perf drops | Reduced-motion query |
| Shortcut conflicts | Scoped listeners |

### 7. Acceptance Criteria
- Matches approved wireframe & architecture plan
- Passes WCAG AA keyboard/ARIA audit
- Unit tests ≥95% pass rate
- Lighthouse ≥95 accessibility score


### Change Request: Cyan background for digit and decimal keys

- Title: Cyan background for digit and decimal keys
- Why: Better visual grouping for numbers

Acceptance Criteria:
1) Digits 0–9 and decimal use bg-cyan-500 with white text.
2) Hover: bg-cyan-600, Active: bg-cyan-700.
3) Focus ring uses focus-visible:ring-cyan-600.
4) Operators/actions unchanged.
5) Accessibility score ≥95; text contrast ≥4.5:1.

### Change Request: Remove shadow and backdrop in calculator display

- Title: Remove shadow and backdrop blur from display panel
- Why: Client prefers a flat, non-glass display for reduced visual noise

Acceptance Criteria:
1) No box-shadow on the display container.
2) No backdrop blur (`backdrop-filter` / `backdrop-blur-*`) on the display container.
3) Display background is opaque and uses the standard surface token (no glass/tint).
4) Expression/result contrast remains ≥4.5:1 in both light and dark modes.
5) Visual snapshots updated to reflect the flat display; no unrelated regressions.

