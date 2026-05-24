/*Map Js Basics Keyword Meaning
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Build a lookup function for important keywords or terms from this chapter group.

Rules:
- Normalize input by trimming and lowercasing.
- Return the mapped meaning when the term exists.
- Return "unknown" for unmapped terms. */

function getJsBasicsKeywordMeaning(term) {
  const key = term.trim().toLowerCase();
  const dictionary = {
    node: "runtime",
    v8: "engine",
    npm: "package-manager",
    javascript: "language",
    comments: "comments",
    identifiers: "variables",
    literals: "values",
    null: "no value",
    undefined: "declared but not assigned",
    equality: "comparison of values",
  };
  return dictionary[key] || "unknown";
}
