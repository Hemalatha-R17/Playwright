var a = 10;// Global Scope

// var is function scoped

console.log(a);

function printHello(){
    console.log("Hello good morning");
    var a = 20;
    console.log(a);

    if(true){
        var a = 30;
        console.log(a);
    }
}

printHello();

var a = 40;
console.log(a);

// var == trump, flipper, dual faced, no trust worthy