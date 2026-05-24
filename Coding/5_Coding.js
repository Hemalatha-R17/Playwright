/*Filter Supported Js Basics Topics
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

Rules:
- Trim and lowercase each item.
- Allow known aliases from the chapter group.
- Return canonical topic keys in first-seen order.
- Skip unsupported values. */

function filterSupportedJsBasicsTopics(topics) {
  const supported = new Set(["node", "v8", "npm"]);
  const seen = new Set();
  const result = [];

  for (const item of topics) {
    const key = String(item).trim().toLowerCase();
    if (supported.has(key) && !seen.has(key)) {
      seen.add(key);
      result.push(key);
    }
  }
  return result;
}
