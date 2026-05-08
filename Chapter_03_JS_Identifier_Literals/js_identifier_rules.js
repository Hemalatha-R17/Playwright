// 1. Start with letter, underscore, or dollar sign
let name = "John";
let _private = "hidden";
let $cash = 100;

// 2. Can contain digits (but not start with)
let item1 = "apple";
let version2 = 2.0;

// 3. Cannot be a reserved keyword
// ❌ let if = 5;     // SyntaxError
// ❌ let for = 10;   // SyntaxError
// ❌ let return = 1; // SyntaxError

// 4. Case-sensitive
let city = "New York";
let City = "London";
let CITY = "Tokyo";
console.log(city, City, CITY); // three different variables

// 5. Unicode letters
let café = "coffee";
let π = 3.14159;
let 你好 = "hello";

// 6. No spaces or special characters (except _ and $)
// ❌ let my var = 1;  // SyntaxError
// ❌ let my-var = 1;  // SyntaxError
// ❌ let my@var = 1;  // SyntaxError

// Demo output
console.log("name:", name);
console.log("_private:", _private);
console.log("$cash:", $cash);
console.log("item1:", item1);
console.log("version2:", version2);
console.log("café:", café);
console.log("π:", π);
console.log("你好:", 你好);
