/*Build Js Basics Checklist
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Convert a list of tasks into a numbered checklist.

Rules:
- Keep the original task text after trimming.
- Number items from 1.
- Append " - TODO" to each item.
- Skip blank values. */

function buildJsBasicsChecklist(items) {
  const result = [];
  let counter = 1;

  for (const task of items) {
    const cleanTask = String(task).trim();
    if (cleanTask) {
      result.push(`${counter}. ${cleanTask} - TODO`);
      counter++;
    }
  }

  return result;
}
