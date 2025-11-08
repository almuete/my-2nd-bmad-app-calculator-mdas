/*


PO Approval prompt:

You are the Project Owner. Review the Architect output for the Calculator against the PRD and Story.

Inputs:
- PRD: goals, scope/out-of-scope, success metrics, a11y/perf
- Architect output: scope & assumptions, boundaries, a11y checklist, acceptance mapping
- Story: story text + acceptance criteria

Output (use these headings):
## Decision: Approve | Changes Required
## Findings: Scope, A11y/Perf, Boundaries (bullets)
## Required Changes (if any): (bullets, specific)
## Notes: (brief)

Rule: Approve only if acceptance mapping covers all AC and a11y/perf are testable (axe=0, no CLS, keyboard, polite live region).



===============================================================


SM Gate prompt:

You are the Scrum Master. Verify gates and flags for the Calculator story.

Inputs:
- Architect output
- (Optional) PO decision note

Output (use these headings):
## Gate Check: Architect → Developer (Pass/Fail)
## Risks/Blockers: (bullets)
## Actions: (owner → action → due)
## Status Update: Draft | Approved | InProgress | Review | Done

Rules:
- Pass only if PO approved Architect output, scope is stable, and a11y/perf checks are explicit (axe=0, no CLS).



===============================================================



1) Architect (optional but nice first run) ASK

Run BMAD Architect for this story.

Use the prompt in this file:
@bmad/prompts/architect.md

Story to apply:
@bmad/stories/FE-002-multiplication.story.md



===============================================================




2) Developer (build and generate code) AGENT
Enable Agent mode so the AI can create files.

Run BMAD Developer for this story.

Use the prompt in this file:
@bmad/prompts/developer.md

Story to apply:
@bmad/stories/FE-002-multiplication.story.md

➡️ Please create all files mentioned under "Deliverables" automatically
   and write the contents according to the DIFFS output.



UPDATED DESIGN

Run BMAD Developer for this story.

Use the prompt in this file:
@bmad/prompts/developer.md

Story to apply:
@bmad/stories/FE-002-calculator-ui.story.md

➡️ Please UPDATE ONLY the files listed under "Deliverables"
   (specifically `app/calculator/page.tsx`) and write the changes
   according to the DIFFS output.

Constraints:
- Do NOT add new routes or dependencies.
- Keep functionality limited to Multiplication (×) only.
- Preserve a11y and performance requirements (polite live region, no CLS).


===============================================================



3) Reviewer (verify a11y/perf and tests) ASK

TEMPLATE REVIEW
   Run BMAD Reviewer for this story.

   Use the prompt in this file:
   @bmad/prompts/reviewer.md

   Story to review:
   @bmad/stories/FE-002-calculator-ui.story.md

   ➡️ Output the review using the headings only. Do NOT modify files.




Option A: ASK mode (manual save)
Run Reviewer and copy/paste the output into your review file.

   Run BMAD Reviewer for this story.

   Use the prompt in this file:
   @bmad/prompts/reviewer.md

   Story to review:
   @bmad/stories/FE-002-calculator-ui.story.md

   ➡️ Output the review using the headings only. Do NOT modify files.



Option B: AGENT mode (auto-save to file)
Let the agent write the review directly to your review file.

Run BMAD Reviewer for this story.

Use the prompt in this file:
@bmad/prompts/reviewer.md

Story to review:
@bmad/stories/FE-002-calculator-ui.story.md

➡️ Write the review to this file (overwrite its contents):
@bmad/prompts/reviews/FE-002-calculator-ui.review.md








SPECIAL NOTES

- Recommended modes per step
- Architect: ASK (or PLAN if you want an approval step)
- Developer: AGENT (edits files)
- Reviewer: ASK (read-only checks)






===============================================================
bmad/plan
## GOALS: What we aim to deliver for this PRD
## BACKGROUND CONTEXT: Why this is needed and scope rationale
## REQUIREMENTS — FUNCTIONAL (FR): Numbered behaviors the product must support
## REQUIREMENTS — NON-FUNCTIONAL (NFR): A11y, performance, constraints
## TECHNICAL ASSUMPTIONS: Tech choices and rationale
## UI/ACCESSIBILITY GOALS: Labels, live region, keyboard, no CLS
## EPIC 1: Title and one-sentence goal
## STORY 1.1: As a <role>, I want <action>, so that <benefit>
## ACCEPTANCE CRITERIA: Numbered, testable, mapped to PRD

bmad/prompts
[MANDATORY] ## ARCHITECT — 1) Scope & Assumptions: Who/what/where; explicit assumptions
[MANDATORY] ## ARCHITECT — 2) Component & File Boundaries (no code): Components, files, responsibilities
[MANDATORY] ## ARCHITECT — 3) Server/Client Boundaries & Data Flow: State placement, updates, side effects
[MANDATORY] ## ARCHITECT — 4) Accessibility Checklist (concrete, testable): Labels, live region, focus, tab order
[MANDATORY] ## ARCHITECT — 5) Edge Cases & Error Handling: Invalid inputs, extremes, locale
[MANDATORY] ## ARCHITECT — 6) Testable Acceptance: Map Story AC to concrete checks
[MANDATORY] ## ARCHITECT — 7) Risks & Tradeoffs: Precision, performance, a11y over-announcement
[MANDATORY] ## ARCHITECT — 8) Minimal Deliverables (no code): Exact file paths and purposes

[MANDATORY] ## DEVELOPER — 0) QUESTIONS (if any): Clarifications needed; “None” if none
[MANDATORY] ## DEVELOPER — 1) CHANGE PLAN (no code): Bullets per deliverable describing changes
[MANDATORY] ## DEVELOPER — 2) DIFFS (patch format): Unified diffs for deliverables only
[MANDATORY] ## DEVELOPER — 3) A11Y & PERF CHECKS: How changes meet a11y/perf constraints
[RECOMMENDED] ## DEVELOPER — 4) TEST NOTES: Cases, route, and assertions

[MANDATORY] ## REVIEWER — 1) Acceptance Criteria Checklist: Mark Pass / Fail / Needs attention per AC; cite route/elements
[MANDATORY] ## REVIEWER — 2) Accessibility Review: Labels/`aria-describedby`, live region (`role="status"`, polite, atomic), keyboard, focus, contrast
[RECOMMENDED] ## REVIEWER — 3) Edge Cases & Input Handling: Empty, lone `.`/`-`, multiple decimals, negatives, locale, extremes
[MANDATORY] ## REVIEWER — 4) Performance & CLS Review: Stable heights/placeholder, <100ms interactions, no unnecessary reflows/deps
[RECOMMENDED] ## REVIEWER — 5) Suggested Playwright/E2E Tests: Route, happy paths (buttons/keyboard), input handling, a11y, perf/CLS (outline only)
[RECOMMENDED] ## REVIEWER — 6) Risk Notes: Floating precision, locale gaps, over-announcement risk, mobile ergonomics, bundle impact
[NICE-TO-HAVE] ## REVIEWER — 7) Follow-ups / Suggestions: Operator state, sr-only hints, gating `=`, data-testids, utility extraction, formatting policy

Note: If desired, also add Pass / Needs attention bullets under sections 2–4 for quick verdicts.

bmad/stories
[MANDATORY] ## STORY: As a <role>, I want <action>, so that <benefit>
[MANDATORY] ## ACCEPTANCE CRITERIA: Numbered, concrete, testable
[RECOMMENDED] ## TASKS / SUBTASKS: Implementation breakdown referencing AC numbers
[NICE-TO-HAVE] ## DEV NOTES: Key context, relevant files, and testing standards
[RECOMMENDED] ## TESTING: What to verify (a11y, perf, happy path, errors)




===============================================================



Why prompts/architectures/* and prompts/reviews/* are needed:

Short answer
- Not always. Use Architect and Reviewer when the story isn’t trivial.
- For tiny, obvious edits, keep it lightweight or skip.

When to run Architect (+save to architectures/)
- New UI/UX flow or component structure changes (e.g., keypad UI).
- Server/client boundary, state/data flow, or performance/a11y rules matter.
- Anything ambiguous that could cause rework.

When to run Reviewer (+save to reviews/)
- User-facing features where a11y/perf/keyboard matter.
- Before PO sign-off to confirm ACs, axe=0, and no CLS.
- Optional for copy-only or small refactors.

Quick rule-of-thumb (3 questions)
- Is there ambiguity? Are a11y/perf at risk? Does it change boundaries/UX?
- If any “yes” → do Architect + Reviewer. If all “no” → Story + Dev only is fine.

Minimal vs full
- Minimal: 1–2 paragraphs Architect notes + short review checklist.
- Full: Sections 1–8 Architect + full Reviewer headings for larger stories.

*/
