let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); //[ 'apple', 'banana', 'cherry' ]

let number = [3, 1, 4];
number.sort();
console.log(number); //[ 1, 3, 4 ]

// Natural Sorting, lexicographic Sorting
let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums); //[ 1, 10, 2, 21 ]

nums.sort((a, b) => a - b); // Ascending
console.log(nums);
nums.sort((a, b) => b - a); //Descending
console.log(nums);
