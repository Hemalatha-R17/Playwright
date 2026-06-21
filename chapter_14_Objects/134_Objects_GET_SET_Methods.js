//Old way of creating before class was introduced in JS
const user = {
  firstName: "Pramod",
  lastName: "Dutta",
  get fullName() {
    return this.firstName + this.lastName;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

// Objects - JS {}
// Class and Object
// this. it means current value in the Object.

console.log(user.fullName); //PramodDutta
user.fullName = "Amit Sharma";
console.log(user.fullName); //AmitSharma

//New way of creating
// class User{
//     firstname
//     lastName,
//     fullName(){

//     }
// }
