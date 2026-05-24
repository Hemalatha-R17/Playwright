/*Summarize Js Basics Results
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Build a compact summary object from test result labels.

Rules:
- Count total items.
- Count items containing pass, fail, and skip.
- Return an object with total, passed, failed, skipped. */

function summarizeJsBasicsResults(results) {
  const summary = {
    total: results.length,
    passed: 0,
    failed: 0,
    skipped: 0,
  };

  for (const item of results) {
    const normalized = String(item).toLowerCase();

    if (normalized.includes("pass")) {
      summary.passed++;
    } else if (normalized.includes("fail")) {
      summary.failed++;
    } else if (normalized.includes("skip")) {
      summary.skipped++;
    }
  }
  return summary;
}
