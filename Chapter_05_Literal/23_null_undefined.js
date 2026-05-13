// Difference between null and undefined in JavaScript
//
// undefined  → JavaScript's default "no value" (variable declared, not assigned)
// null       → Developer's intentional "no value" (explicitly assigned)
//
// Use null when you want to indicate "no value" intentionally.
// undefined is what JS gives you by default.

// undefined: variable declared but not assigned a value
let a;
console.log(a); // undefined

// null: explicitly assigned "no value"
let b = null;
console.log(b); // null

// typeof check
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (historical bug)

// Comparison
console.log(undefined == null);  // true (loose equality)
console.log(undefined === null); // false (strict equality)
