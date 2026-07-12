class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod();
let parentObj = new Father();
pramod.home();
parentObj.home();

// o / p
// 3BHK
// 2BHK