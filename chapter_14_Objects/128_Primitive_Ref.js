// Primitive vs Reference Types
let a = 10;
let b = a; //For primitive, a new value will be created. It will not be assigned to the same reference.
b = 99;
console.log(a); //10

// Objects — copied by REFERENCE , call by ref.
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1; //OBJECT WILL COPY THE VALUE
obj2.val = 99;
console.log(obj1.val); //99
