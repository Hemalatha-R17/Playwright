/*Validate Js Basics Identifier
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Write a validator for names used in helper functions, variables, or test data keys.

Rules:
- Value must be a non-empty string after trimming.
- It must start with a letter, underscore, or dollar sign.
- Remaining characters may include letters, digits, underscore, or dollar sign.
- Reject reserved words used in this chapter: let, const, var, class, function, return.
*/

function isValidJsBasicsIdentifier(name) {
  const reserved = ["let", "const", "var", "class", "function", "return"];
  if (typeof name !== "string" || !name.trim()) {
    return false;
  }
  const trimmed = name.trim();
  const validPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  if (!validPattern.test(trimmed)) {
    return false;
  }
  if (reserved.includes(trimmed)) {
    return false;
  }
  return true;
}
