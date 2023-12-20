
class myRect {
    constructor(ctx) {

        // 
        this.ctx = ctx;
        this.x = Math.random() * 800; //Canvas størrelse
        this.y = Math.random() * 800; //Canvas størrelse
        this.width = Math.random() * 50; //box størrelse
        this.height = Math.random() * 30; //box størrelse

        // Tegner boxen
        this.drawRect()
    }

    updateRect() {
        this.ctx = ctx;
        this.x = Math.random() * 200;
        this.y = Math.random() * 150;
        this.width = Math.random() * 50
        this.height = Math.random() * 100

        this.drawRect()
    }

    drawRect() {

        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}


// Griber fat i HTML siden
const myFirstCanvas = document.getElementById('myFirstCanvas');


// Baggrunds lærreddet
myFirstCanvas.width = window.innerWidth
myFirstCanvas.height = window.innerHeight


const ctx = myFirstCanvas.getContext('2d')
console.log(ctx);

// giver en boks farve
// ctx.fillStyle = "green"
// Skaber en ny boks (x akse, y akse, bredde, højde )
// ctx.fillRect(10, 10, 90, 90)

// ctx.fillStyle = "blue"
// ctx.fillRect(100, 100, 600, 50)


// ctx.fillStyle = "green"
// ctx.fillRect(700, 10, 90, 90)

// -----------------------------------------------
let partictleArray = []

for (let i = 0; i < 100; i++) {

    partictleArray.push(new myRect(ctx))

}
// -----------------------------------------------

this.ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`;

this.ctx.fillRect(this.x, this.y, this.width, this.height);
// -----------------------------------------------

myRect.updateRect

// -----------------------------------------------

function change() {

    ctx.clearRect(0, 0, myFirstCanvas.width, myFirstCanvas.height);
    myRect.updateRect();

}
