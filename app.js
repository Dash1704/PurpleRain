class RainDrop {
  constructor() {
    this.x = random(width)
    this.y = random(-200, -100);
    this.yspeed = 1
  }
  fall(){
    this.y = this.y + this.yspeed
  }

  show(){
    stroke(138, 43, 226)
    line(this.x, this.y, this.x, this.y + 10);
  }
}

const raindrops = new Array(500)

function setup() {
  console.log(raindrops)
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < raindrops.length; i++) {
      raindrops[i] = new RainDrop()
    }
}

function draw() {
    background(230, 230, 250);
    for (let i = 0; i < raindrops.length; i++) {
      raindrops[i].fall()
      raindrops[i].show()
    }
}