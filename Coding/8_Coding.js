/*Merge Js Basics Config
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Merge default and override configuration values for a test helper.

Rules:
- Override values must win.
- If retries is missing from both objects, default it to 0.
- Do not mutate the input objects. */

function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
  const merged = { ...defaultConfig };

  for (const key in overrideConfig) {
    if (Object.prototype.hasOwnProperty.call(overrideConfig, key)) {
      merged[key] = overrideConfig[key];
    }
  }

  if (merged.retries === undefined) {
    merged.retries = 0;
  }

  return merged;
}
