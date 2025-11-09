I have new task from the client what BMAD command should I run first?
  
  - Recommended first command: *advanced-elicitation — to capture the client task’s scope, goals, constraints, and acceptance criteria.

  Other common paths:
  - If you already have enough detail: *create-next-story
  - If it’s a modification to existing behavior: *execute-checklist change-checklist.md
  - After drafting the story: *execute-checklist story-draft-checklist.md → *execute-checklist story-dod-checklist.md
  - For larger initiatives/PRDs: *document-project or *create-doc prd-tmpl.yaml
  - Want me to run *advanced-elicitation now?


Creating new task

    @bmad-master.mdc *task {advanced-elicitation}













TEMPLATE 

I'll scan your repo's docs to align the BMAD AI workflow with your existing artifacts (PRD, stories, QA gates, checklists), then draft the end-to-end steps for PO→PM→SM→DEV→QA through to production.

[5 tools called]

Now I'll open the core BMAD workflow and role guides to tailor the process to your team.

[15 tools called]

### BMAD AI workflow for your PO → PM → SM → DEV → QA team

- **Goal**: Go from client input to production with clear, lightweight steps and AI assist at each role.
- **Where artifacts live**: `docs/prd/`, `docs/architecture/`, `docs/epics/`, `docs/stories/`, `docs/qa/gates/`, `docs/pr/`, `docs/communications/`

## 1) Client intake → Product planning
1. PM gathers client inputs (calls/notes/screenshots) and drafts the PRD in `docs/prd/`.
   - If starting fresh or updating, use the combined file `docs/prd/prd-generated.md` and maintain section files `docs/prd/01-07-*.md`.
   - In your IDE, you can prompt:
     ```bash
     @pm create-prd  # or create-brownfield-prd
     ```
2. PO validates alignment across PRD, Architecture, and Epics/Stories.
   - Use checklist:
     ```bash
     @po execute-checklist-po
     ```
3. Architect (optional if applicable) updates `docs/architecture/` referencing the PRD.
   - Keep `06-quality-gates.md` and `07-integration-steps.md` current to guide DEV and QA.

## 2) Shard documents and prepare backlog
1. PO shards PRD and Architecture into Epics and Stories:
   ```bash
   @po shard-doc docs/prd/prd-generated.md docs/
   @po shard-doc docs/architecture.md docs/
   ```
   - Epics go to `docs/epics/`, stories to `docs/stories/`.
2. SM drafts the next story from the sharded materials:
   ```bash
   @sm draft
   @sm story-checklist
   ```
   - Story statuses: Draft → Approved → In Progress → Ready for Review → Done.
   - Example format is in `docs/stories/1.1.dual-line-display.md`.

## 3) Risk-first QA planning (shift-left)
1. After story approval (or for high-risk changes), QA runs early analysis:
   ```bash
   @qa *risk {story}      # risk profile
   @qa *design {story}    # test strategy and levels
   ```
   - Outputs to `docs/qa/assessments/…` and informs DEV’s tests.

## 4) Development
1. DEV works only from the approved story and project standards:
   ```bash
   @dev develop-story {story}
   ```
   - Follow architecture guidance (e.g., `docs/architecture/01-07-*.md`).
   - Keep test coverage aligned to acceptance criteria and QA’s test design.
2. Mid-dev quality checks (optional but recommended on risky items):
   ```bash
   @qa *trace {story}     # requirements→tests coverage
   @qa *nfr {story}       # performance/security/reliability/maintainability
   ```
3. When all validations pass locally (unit tests, lint, types), update the story to “Ready for Review” using the DEV DoD checklist:
   ```bash
   @dev develop-story completion
   ```

## 5) QA review and quality gate
1. QA performs comprehensive review:
   ```bash
   @qa *review {story}
   ```
   - Appends “QA Results” in the story and writes/updates a gate file in `docs/qa/gates/` (status: PASS/CONCERNS/FAIL/WAIVED).
2. If fixes are needed, DEV addresses and QA updates the gate:
   ```bash
   @qa *gate {story}
   ```

## 6) PR and pre-merge checks
1. Open PR linking the stories and gates; run the PR checklist in `docs/pr/PR-CHECKLIST-epic-1.md`.
   - Ensure:
     - All included story statuses = Done
     - All story gate statuses = PASS
     - `npm run test` is passing; lints clean
     - Visuals updated if applicable; a11y targets met (≥95 recommended)
     - `docs/RELEASE_NOTES.md` and `docs/epics/epic-1.md` updated
     - Stakeholder notice in `docs/communications/stakeholders/…` prepared

## 7) Staging, release, and production
1. Deploy to staging and execute staging checks from `docs/qa/staging-checks.md`:
   ```bash
   export STAGING_URL=https://staging.example.com
   npm run lhci
   STAGING_URL=$STAGING_URL npm run test:visual
   ```
2. Announce to stakeholders (`docs/communications/stakeholders/...`).
3. Promote to production after green gates and staging checks.
4. Monitor and capture any regressions back into stories.

## 8) Roles quick-reference
- PO
  - Validates artifact cohesion; shards docs; runs master checklist; approves stories.
  - Files: `docs/prd/`, `docs/epics/`, `docs/stories/`
- PM
  - Owns PRD creation and updates; aligns with client goals.
  - Files: `docs/prd/prd-generated.md` and section files
- SM
  - Drafts actionable stories; ensures clarity and acceptance criteria; uses story checklist.
  - Files: `docs/stories/`
- DEV
  - Implements per story; writes tests; follows architecture; meets DoD; requests QA review.
  - Files: source + tests; updates story “Dev Agent Record” only
- QA (Test Architect)
  - Runs risk/design early; mid-dev trace/NFR checks; final review; manages gate files.
  - Files: `docs/qa/assessments/`, `docs/qa/gates/`

## 9) Minimal working cadence for each story
1. SM: Draft story → PO: Approve
2. QA: `*risk`, `*design` (as needed)
3. DEV: Implement + tests → mid-dev `*trace`/`*nfr` (optional)
4. DEV: Mark Ready for Review
5. QA: `*review` → Gate PASS
6. PR: Run checklist → Merge → Staging checks → Production

## 10) Where to look in this repo (examples)
- PRD hub: `docs/prd/README.md`, `docs/prd/prd-generated.md`
- Architecture gates/steps: `docs/architecture/06-quality-gates.md`, `docs/architecture/07-integration-steps.md`
- Story example with QA results and gate: `docs/stories/1.1.dual-line-display.md`
- QA gates: `docs/qa/gates/`
- PR checklist: `docs/pr/PR-CHECKLIST-epic-1.md`
- Staging checks: `docs/qa/staging-checks.md`

If you want, I can turn this into a one-page SOP in `docs/README.md` or `docs/architecture/07-integration-steps.md` as a team reference. 

- Created a concise, role-based, step-by-step BMAD workflow mapped to your repo.
- Included exact file paths, minimal commands per agent, and the gating/release flow to production.






EXAMPLE WITH SIMPLE TASK WITH PO

I'll quickly open the keypad components to tailor the example (story text, ACs, QA gate, and optional code diff) to your codebase.

[6 tools called]

### Worked example: Client asks “Add bg-cyan-500 to digits 0–9 and Decimal”

Below is a compact end‑to‑end example showing exactly how to run this request through your BMAD workflow, plus a minimal code/test change example.

## 1) Story (SM drafts, PO approves)

Create `docs/stories/1.6.digit-keys-cyan-background.md`:

```markdown
# Story 1.6: Cyan background for digit and decimal keys

## Status
Draft

## Story
As a calculator user,
I want the digit keys (0–9) and the decimal key to have a cyan background,
so that they are visually distinguished from operators/actions.

## Acceptance Criteria
1. Digit keys 0–9 and the decimal key use Tailwind `bg-cyan-500` with white text.
2. Hover/active: `hover:bg-cyan-600 active:bg-cyan-700`; focus ring uses `focus-visible:ring-cyan-600`.
3. Operators/actions remain unchanged (no cyan background).
4. Accessibility: Lighthouse a11y score ≥95; color contrast for text on cyan ≥4.5:1.
5. Unit tests verify the cyan class on digit and decimal keys; visual snapshots updated.

## Tasks / Subtasks
- [ ] Update number key style to cyan in `components/calculator/Key.tsx`.
- [ ] Verify `Keypad` renders digits 9→0 and decimal with cyan styling unchanged functionally.
- [ ] Add tests asserting `bg-cyan-500` class present on 0–9 and `.`.
- [ ] Run Lighthouse/axe; confirm a11y ≥95; update visual snapshots.

## Dev Notes
- Use direct Tailwind color `bg-cyan-500` per explicit client request.
- Keep operator/action variants as-is.

## QA Notes
- Validate ring color updated to cyan.
- Confirm operators/actions unaffected.

## QA Results
_TBD by QA_
```

SM: `@sm draft` → PO: set Status to Approved.

## 2) Optional early QA planning

- QA: `@qa *risk {story}` (check a11y/contrast as main risk).
- QA: `@qa *design {story}` (define unit + visual tests).

## 3) Implementation (DEV)

Minimal change: update the number variant styling in `components/calculator/Key.tsx` so it affects digits 0–9 and the decimal. Current relevant section:

```22:36:/private/var/www/my-2nd-bmad-app-calculator-mdas/components/calculator/Key.tsx
  const base = [
    "rounded-md border px-4 py-3 text-lg font-medium",
    "transition-colors shadow-sm backdrop-blur-sm",
    "focus-visible:outline-none focus-visible:ring-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" ");
  const schemeByVariant: Record<KeyVariant, string> = {
    number:
      "border-zinc-300/60 bg-white/40 text-zinc-900 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 hover:bg-white/50 active:bg-white/60 dark:hover:bg-white/15 dark:active:bg-white/20 focus-visible:ring-blue-600",
    operator:
      "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
    action:
      "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
  };
```

Proposed edit (replace the `number` entry and ring color):

```tsx
const schemeByVariant: Record<KeyVariant, string> = {
  number:
    "border-cyan-600/50 bg-cyan-500 text-white dark:border-cyan-400/40 dark:bg-cyan-500 dark:text-white hover:bg-cyan-600 active:bg-cyan-700 dark:hover:bg-cyan-600 dark:active:bg-cyan-700 focus-visible:ring-cyan-600",
  operator:
    "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
  action:
    "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
};
```

Notes:
- `Keypad` already renders digits 9→0 and the decimal with `variant="number"`, so they will pick up the cyan styling automatically.

## 4) Tests (DEV)

Add/append to `tests/KeypadComponents.test.tsx`:

```ts
it("applies cyan background to digits and decimal", () => {
  const onDigit = vi.fn();
  const onDot = vi.fn();
  render(<Keypad onDigit={onDigit} onDot={onDot} />);

  expect(screen.getByLabelText("Digit 7").className).toMatch(/bg-cyan-500/);
  expect(screen.getByLabelText("Digit 0").className).toMatch(/bg-cyan-500/);
  expect(screen.getByLabelText("Decimal point").className).toMatch(/bg-cyan-500/);
});
```

Run unit tests and a11y locally; update visual snapshots if you keep them.

## 5) QA review and gate

QA runs:

```bash
@qa *review docs/stories/1.6.digit-keys-cyan-background.md
```

Create/update `docs/qa/gates/1.6-digit-keys-cyan-background.yml`:

```yaml
story: 1.6.digit-keys-cyan-background
status: PASS
date: 2025-11-09
findings:
  - Verified digits 0–9 and decimal use bg-cyan-500 with white text
  - Focus ring updated to cyan; operators/actions unchanged
  - Unit tests added for class presence
  - Lighthouse a11y ≥95
```

## 6) PR and release

- Reference the story and gate in PR.
- Use existing checklist `docs/pr/PR-CHECKLIST-epic-1.md`.
- Staging checks:
  ```bash
  export STAGING_URL=…
  npm run lhci
  STAGING_URL=$STAGING_URL npm run test:visual
  ```

Commit message suggestion:
- feat(ui): apply cyan background to digit and decimal keys (story 1.6, gate PASS)

- Added a concrete workflow example for “bg-cyan-500 on digits and decimal” including story text, ACs, code edit, test, and a QA gate sample.






















SIMPLE MINI TASK WITH AI WORKFLOW PO

You're right—let’s align the workflow to PO → PM → SM → DEV → QA. Here’s a concise, step‑by‑step SOP your team can paste into `IMPORTANT.md` or `docs/README.md`.

### BMAD AI SOP (PO → PM → SM → DEV → QA)

1) PO — Intake and alignment
- Capture the client ask; decide scope/priority.
- Run: `@po execute-checklist-po`
- Ensure the request is reflected or planned in `docs/prd/prd-generated.md` and, if needed, create/update an epic in `docs/epics/`.

2) PM — PRD update
- Update `docs/prd/prd-generated.md` (and section files) with the new/changed requirement, ACs, and any NFR impacts.
- When ready to feed downstream: shard as needed
  - `@pm shard-prd`

3) SM — Story creation
- Draft the next story tied to the PRD change:
  - `@sm draft` then `@sm story-checklist`
- Save to `docs/stories/` and set Status: Approved when PO confirms.

4) DEV — Implementation
- Implement strictly from the approved story:
  - `@dev develop-story {story}`
- Write/adjust tests; optional mid‑dev checks:
  - `@qa *trace {story}`, `@qa *nfr {story}`
- When all validations pass locally, mark story “Ready for Review” via DoD in the story.

5) QA — Review and gate
- Full review and gate decision:
  - `@qa *review {story}` → writes/updates `docs/qa/gates/{story}.yml`
- If fixes are made, update gate:
  - `@qa *gate {story}`

6) PR → Staging → Production
- Open PR; use `docs/pr/PR-CHECKLIST-*.md`
- Staging checks:
  - `npm run lhci`
  - `STAGING_URL=$STAGING_URL npm run test:visual`
- Publish release notes `docs/RELEASE_NOTES.md` and stakeholder notice; promote to prod.

### Worked example (client asks: “Add bg-cyan-500 to Digits 0–9 and Decimal”)

- PO: Log request and priority. Confirm this is a UI color update only.
- PM: Add requirement to PRD and ACs: digits and decimal use `bg-cyan-500`, white text; focus ring cyan; operators/actions unchanged.
- SM: Create `docs/stories/1.6.digit-keys-cyan-background.md` with ACs and tasks (as in prior reply).
- DEV: Edit `components/calculator/Key.tsx` number variant to cyan; digits and “.” already use `variant="number"` via `Keypad`, so they inherit styling.

  Minimal edit (replace number variant):

  ```tsx
  number:
    "border-cyan-600/50 bg-cyan-500 text-white dark:border-cyan-400/40 dark:bg-cyan-500 dark:text-white hover:bg-cyan-600 active:bg-cyan-700 dark:hover:bg-cyan-600 dark:active:bg-cyan-700 focus-visible:ring-cyan-600",
  ```

  Test addition in `tests/KeypadComponents.test.tsx`:

  ```ts
  expect(screen.getByLabelText("Digit 7").className).toMatch(/bg-cyan-500/);
  expect(screen.getByLabelText("Digit 0").className).toMatch(/bg-cyan-500/);
  expect(screen.getByLabelText("Decimal point").className).toMatch(/bg-cyan-500/);
  ```

- QA: `@qa *review docs/stories/1.6.digit-keys-cyan-background.md` → Gate PASS in `docs/qa/gates/1.6-digit-keys-cyan-background.yml`.
- PR/Release: Run PR checklist, staging checks, announce, deploy.

- Reordered the workflow to PO → PM → SM → DEV → QA and provided a compact SOP with an inline cyan‑background example mapped to your repo files.




















WITH SAMPLE TEMPLATE


## BMAD commands + prompts (PO → PM → SM → DEV → QA)

Use these exactly with your agents. Replace placeholders when needed.

### PO — Intake and alignment
- Commands:
```bash
@po execute-checklist-po
```
- Prompt:
```text
Client request: “Add bg-cyan-500 to digits 0–9 and the decimal key.” 
Confirm scope and priority. Call out any risks (a11y contrast, focus ring) and note what PRD sections must be updated.
```

### PM — Update PRD (and shard if needed)
- Commands:
```bash
@pm create-prd
# or if PRD exists, ask PM to update it:
@pm doc-out
@pm shard-prd
```
- Prompt (paste into PM chat):
```text
Update docs/prd/prd-generated.md to add this change:

Title: Cyan background for digit and decimal keys
Why: Better visual grouping for numbers
Acceptance Criteria:
1) Digits 0–9 and decimal use bg-cyan-500 with white text.
2) Hover: bg-cyan-600, Active: bg-cyan-700.
3) Focus ring uses focus-visible:ring-cyan-600.
4) Operators/actions unchanged.
5) Accessibility score ≥95; text contrast ≥4.5:1.

Then shard the PRD if needed so SM can draft the story.
```

### SM — Create the story
- Commands:
```bash
@sm draft
@sm story-checklist
```
- Prompt:
```text
Create a single story in docs/stories/ named “1.6.digit-keys-cyan-background.md”.

Story:
As a calculator user, I want digit keys (0–9) and the decimal key to have a cyan background so they’re visually distinct.

Acceptance Criteria:
1) Digits 0–9 and decimal have bg-cyan-500 + text-white.
2) Hover: bg-cyan-600; Active: bg-cyan-700; Focus ring: focus-visible:ring-cyan-600.
3) Operators/actions remain unchanged.
4) Accessibility ≥95 Lighthouse; contrast ≥4.5:1.
5) Unit tests assert cyan class on digits and decimal; visual snapshots updated.

Tasks:
- Update number variant styling in components/calculator/Key.tsx only.
- Verify Keypad digits (9→0) and decimal inherit cyan.
- Add minimal tests in tests/KeypadComponents.test.tsx for cyan classes.
- Run a11y/visual checks.

Set Status: Approved after PO review.
```

### DEV — Implement and test
- Commands:
```bash
@dev develop-story docs/stories/1.6.digit-keys-cyan-background.md
# optional mid‑dev checks:
@qa *trace docs/stories/1.6.digit-keys-cyan-background.md
@qa *nfr docs/stories/1.6.digit-keys-cyan-background.md
```
- Prompt:
```text
Implement the story by changing only the “number” variant in components/calculator/Key.tsx to:
bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring-cyan-600

Digits and decimal already use variant="number" in Keypad, so they’ll inherit cyan. Do not change operator/action styling.

Add tests in tests/KeypadComponents.test.tsx to assert bg-cyan-500 on e.g. “Digit 7”, “Digit 0”, and “Decimal point”.

Run tests and lint; when all pass, mark the story “Ready for Review”.
```

### QA — Review and gate
- Commands:
```bash
# Optional early planning
@qa *risk docs/stories/1.6.digit-keys-cyan-background.md
@qa *design docs/stories/1.6.digit-keys-cyan-background.md

# Final review and gate
@qa *review docs/stories/1.6.digit-keys-cyan-background.md
@qa *gate docs/stories/1.6.digit-keys-cyan-background.md
```
- Prompt:
```text
Review the final implementation. Confirm digits and decimal use cyan, operators/actions unchanged, focus ring cyan, and a11y ≥95. If OK, set gate to PASS in docs/qa/gates/1.6-digit-keys-cyan-background.yml. If issues exist, list fixes and set CONCERNS/FAIL.
```

### PR → Staging → Production
- Commands (terminal):
```bash
npm run test
npm run lint
npm run lhci
export STAGING_URL=https://staging.example.com
STAGING_URL=$STAGING_URL npm run test:visual
```
- Prompt (for PR description):
```text
Implements story 1.6.digit-keys-cyan-background: digits 0–9 and decimal now use bg-cyan-500 with white text. Operators/actions unchanged. Added tests and a11y/visual checks. Gate: PASS.
```

- Provided copy‑paste BMAD commands and short prompts per role, plus terminal commands for shipping the cyan‑digits example.