class RainDrop {
  constructor() {
    this.x = random(width)
    this.y = random(-700, -100);
    this.yspeed = random(4, 10)
    this.lineLength = random(5, 30)
  }
  fall(){
    this.y = this.y + this.yspeed
    if(this.y > height) {
      this.y = random(-200, -100);
    }
  }

  show(){
    stroke(138, 43, 226)
    line(this.x, this.y, this.x, this.y + this.lineLength);
  }
}

const raindrops = new Array(1000)

function setup() {
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