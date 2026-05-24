/*Create Unique Js Basics Tags
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Normalize and deduplicate tags used for organizing tests.

Rules:
- Trim each tag.
- Lowercase each tag.
- Remove blank values.
- Keep first-seen order. */

function createUniqueJsBasicsTags(tags) {
  const seen = new Set();
  const result = [];

  for (const tag of tags) {
    const normalized = String(tag).trim().toLowerCase();
    if (normalized && !seen.has(normalized)) {
      seen.add(normalized);
      result.push(normalized);
    }
  }

  return result;
}
