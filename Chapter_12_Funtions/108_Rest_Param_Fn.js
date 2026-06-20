// Rest of the param.
function logResult(suiteName, ...results) {
  // ...results -> results of array (spread) - no limitation of param - shud be the last param always it means you can add any number of array of parameters
  console.log(suiteName);
  console.log(results);
}

logResult("Login Test", 1, 2, 3);
logResult("Reg Test", "Hello", "Pramod");
