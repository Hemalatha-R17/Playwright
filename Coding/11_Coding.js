/*Summarize Js Basics Matrix
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Summarize a two-dimensional matrix of suite results.

Rules:
- The input is an array of arrays.
- Each cell is a result string.
- Count total, passed, failed, and collect failedCases. */

function summarizeJsBasicsMatrix(matrix) {
  const summary = {
    total: 0,
    passed: 0,
    failed: 0,
    failedCases: [],
  };

  for (const row of matrix) {
    for (const cell of row) {
      const normalized = String(cell).toLowerCase();
      summary.total++;

      if (normalized.includes("pass")) {
        summary.passed++;
      } else if (normalized.includes("fail")) {
        summary.failed++;
        summary.failedCases.push(cell);
      }
    }
  }

  return summary;
}
