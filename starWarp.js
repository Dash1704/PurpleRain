class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height)
    this.travel = random(width);
    this.radius = random(1, 4);
   // this.lineLength = random(5, 70)
  }

  warp() {
    this.travel = this.travel - 10
    if (this.travel < 1){
      this.travel = random(width);
    }
  }

  show() {
    stroke(255, 255, 255)
    ellipse(this.moveX, this.moveY, this.radius);
    this.moveX = map(this.x / this.travel, 0, 1, 0, width) 
    this.moveY = map(this.y / this.travel, 0, 1, 0, height) 
  }
}

const stars = new Array(2000)

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star()
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2)
  for (let i = 0; i < stars.length; i++) {
    stars[i].warp()
    stars[i].show()
  }
}