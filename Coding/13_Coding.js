/*Check Js Basics Readiness Gate
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Create a small readiness gate for students before they move to the next practice step.

Rules:
- Return READY only when all three flags are true.
- Return BLOCKED otherwise.
- Do not coerce strings like "true"; use boolean values. */

function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
  if (hasSetup === true && hasPractice === true && hasNotes === true) {
    return "READY";
  }
  return "BLOCKED";
}
