
// ------------------------------
// console.log("hej");
// class testObject {

//     constructor(msg) {
//         console.log("Hello from object" + msg);

//         this.message = msg;
//         console.log((this.message));

//     }

// }
// // Kan ikke printe "hello from object" uden consten nedenunder
// const myObject = new testObject("ny message")
// const myObject2 = new testObject("juletræ")
// console.log(myObject2.message);

// ------------------------------


class ChristmasCake {

    constructor(Cuts, Prep, Difficulty, Cooktime) {
        console.log("Make this" + ChristmasCake);

        this.Cuts = Cuts;
        this.Prep = Prep;
        this.Difficulty = Difficulty;
        this.Cooktime = Cooktime;
        console.log((this.Ingredients));

    }

    getInfo() {
        console.log('giver'`${this.Cuts}`, `${this.Prep}`, `${this.Difficulty}`, `${this.Cooktime}`);
    }


}
// Kan ikke printe "hello from object" uden consten nedenunder
const Cake = new ChristmasCake('12', '25 mins', 'easy', '2 hours', 'butter', 'brownsugar', 'flour', 'almonds', 'baking powder')


console.log(Cake);
