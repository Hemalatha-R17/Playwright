/*Normalize Js Basics Label
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Create a reusable label normalizer for JavaScript QA utilities.

Rules:
- Trim leading and trailing spaces.
- Convert text to lowercase.
- Replace non-alphanumeric groups with a single hyphen.
- Prefix the result with "js-basic-".

Starter code:

Starter Code
js
function normalizeJsBasicsLabel(label) {
  // write your code here
}
Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

*/

function normalizeJsBasicsLabel(label) {
  let normalize = label.trim().toLowerCase();
  normalize = normalize.replace(/[^a-z0-9]+/g, "-");
  normalize = normalize.replace(/-+/g, "-");
  normalize = normalize.replace(/^-+|-+$/g, "");
  if (!normalize) {
    return "js-basic";
  }
  return "js-basic-" + normalize;
}
