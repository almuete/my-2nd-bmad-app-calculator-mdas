
============ PO ============
@my-2nd-bmad-app-calculator-mdas @po.mdc execute-checklist-po

Client request: “Add bg-cyan-500 to digits 0–9 and the decimal key.” 
Confirm scope and priority. Call out any risks (a11y contrast, focus ring) and note what PRD sections must be updated.

============ PM ============

@my-2nd-bmad-app-calculator-mdas @pm.mdc *doc-out *shard-prd

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


============ SM ============

@my-2nd-bmad-app-calculator-mdas @sm.mdc *draft @sm.mdc *story-checklist

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


============ DEV ============

@dev.mdc *develop-story @1.6.digit-keys-cyan-background.md 

Implement the story by changing only the “number” variant in components/calculator/Key.tsx to:
bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring-cyan-600

Digits and decimal already use variant="number" in Keypad, so they’ll inherit cyan. Do not change operator/action styling.

Add tests in tests/KeypadComponents.test.tsx to assert bg-cyan-500 on e.g. “Digit 7”, “Digit 0”, and “Decimal point”.

Run tests and lint; when all pass, mark the story “Ready for Review”.


============ QA - REVIEW ============

@qa.mdc  sure update the status @1.6.digit-keys-cyan-background.md 

Review the final implementation. Confirm digits and decimal use cyan, operators/actions unchanged, focus ring cyan, and a11y ≥95. If OK, set gate to PASS in docs/qa/gates/1.6-digit-keys-cyan-background.yml. If issues exist, list fixes and set CONCERNS/FAIL.

============ QA - GATES ============

@qa.mdc *gates @1.6.digit-keys-cyan-background.md 

Review the final implementation. Confirm digits and decimal use cyan, operators/actions unchanged, focus ring cyan, and a11y ≥95. If OK, set gate to PASS in docs/qa/gates/1.6-digit-keys-cyan-background.yml. If issues exist, list fixes and set CONCERNS/FAIL.