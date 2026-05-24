/*Count Passing Js Basics Checks
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Count how many check result strings represent a pass.

Rules:
- Treat matching as case-insensitive.
- A passing item contains the word "pass".
- Return only the count. */

function countPassingJsBasicsChecks(results) {
  let count = 0;

  for (const item of results) {
    const normalized = String(item).toLowerCase();
    if (normalized.includes("pass")) {
      count++;
    }
  }

  return count;
}
