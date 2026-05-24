/*Build Js Basics Run Label
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Create a standard label for a test run dashboard.

Rules:
- Trim the suite name.
- Lowercase the environment.
- Append build number as build-N.
- Join the three parts with " | ". */

function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  const cleanSuite = String(suiteName).trim();

  const cleanEnv = String(environment).trim().toLowerCase();

  const buildLabel = "build-" + buildNumber;

  return `${cleanSuite} | ${cleanEnv} | ${buildLabel}`;
}
