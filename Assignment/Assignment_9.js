// ✅ Java Anagrams
// example:- Eat - Tea , From - Form

function isAnagram(a, b) {
  let sort = (str) => str.toLowerCase().split("").sort().join("");
  return sort(a) === sort(b);
}

console.log(isAnagram("Eat", "Tea")); //true
console.log(isAnagram("Mat", "Hat")); //false
