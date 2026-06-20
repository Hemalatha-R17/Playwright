// Iterate - Go from one to another. //

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
  console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (test of tests) {
  // in case of "of" you will not take a variable name
  console.log(test);
}

console.log("----");

tests.forEach((i, index) => {
  console.log(i, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
  // in case of "in" you Will take a variable.
  console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

for (let [i, test] of tests.entries()) {
  console.log(i, test);
}
