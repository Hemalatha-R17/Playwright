/*Calculate Js Basics Weighted Score
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Calculate a simple weighted practice score.

Rules:
- Each passed item gives 2 points.
- Each failed item subtracts 1 point.
- Skipped items are 0 points.
- Return the final number. */

function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  return passed * 2 + failed * -1 + skipped * 0;
}
